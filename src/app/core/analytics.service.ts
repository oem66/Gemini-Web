import { DestroyRef, Injectable, NgZone, inject } from '@angular/core';
import type { PostHog, Properties } from 'posthog-js';

const DEFAULT_POSTHOG_HOST = 'https://eu.i.posthog.com';
const ENGAGEMENT_MILESTONES = [10, 30, 60, 120, 300] as const;
const SCROLL_MILESTONES = [25, 50, 75, 90, 100] as const;

/** Longest the SDK waits for an idle moment before loading anyway. */
const LOAD_TIMEOUT_MS = 3000;

/**
 * One privacy-conscious entry point for all website analytics.
 *
 * The PostHog SDK is the largest dependency on the page, so it is fetched only
 * once the page has loaded and the browser is idle — it never competes with
 * the first paint. Anything captured before then is queued and replayed in
 * order, so no event is lost.
 *
 * Autocapture provides the raw interaction detail, while the named events below
 * keep dashboards and conversion funnels stable when visible copy is translated
 * or redesigned.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private readonly viewedSections = new Set<string>();
  private readonly reachedScrollMilestones = new Set<number>();
  private readonly pending: ((client: PostHog) => void)[] = [];
  private client: PostHog | null = null;
  private enabled = false;
  private engagementStarted = false;

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const runtimeConfig = window.__GEMINI_ANALYTICS__;
    const projectToken = runtimeConfig?.posthogKey?.trim();

    // An empty token keeps local/test builds quiet and prevents accidental data
    // from being sent to the wrong PostHog project.
    if (!projectToken || projectToken.includes('REPLACE')) {
      return;
    }

    this.enabled = true;

    this.zone.runOutsideAngular(() => {
      this.listenForNamedInteractions();

      const load = () =>
        import('posthog-js')
          .then(({ default: posthog }) => {
            posthog.init(projectToken, {
              api_host: runtimeConfig?.posthogHost?.trim() || DEFAULT_POSTHOG_HOST,
              defaults: '2026-05-30',

              // This is an anonymous marketing site. Server-hash mode measures
              // repeat activity without browser storage or person profiles.
              cookieless_mode: 'always',
              person_profiles: 'never',

              autocapture: true,
              capture_pageview: 'history_change',
              capture_pageleave: true,
              capture_heatmaps: true,
              capture_dead_clicks: true,
              rageclick: true,
              capture_exceptions: true,
              capture_performance: {
                network_timing: true,
                web_vitals: true,
                web_vitals_attribution: true
              },
              disable_scroll_properties: false,
              session_recording: {
                maskAllInputs: true,
                maskTextSelector: '[data-private]'
              },

              // Console payloads can contain developer-provided personal data.
              // Browser exceptions are still captured by capture_exceptions.
              enable_recording_console_log: false,
              internal_or_test_user_hostname: null,

              loaded: (client) => {
                client.register({ website: 'gemini-digital' });
                if (runtimeConfig?.debug) {
                  client.debug();
                }
              }
            });

            this.client = posthog;
            for (const run of this.pending.splice(0)) {
              run(posthog);
            }
          })
          .catch(() => {
            // Blocked by an extension or offline: the site works the same without it.
            this.enabled = false;
            this.pending.length = 0;
          });

      // Safari has no requestIdleCallback; a short delay after load does the same job there.
      const whenIdle = () =>
        typeof window.requestIdleCallback === 'function'
          ? window.requestIdleCallback(() => void load(), { timeout: LOAD_TIMEOUT_MS })
          : window.setTimeout(() => void load(), 1200);

      if (document.readyState === 'complete') {
        whenIdle();
      } else {
        window.addEventListener('load', whenIdle, { once: true });
      }
    });
  }

  capture(event: string, properties: Properties = {}): void {
    this.run((client) => client.capture(event, properties));
  }

  setContext(properties: Properties): void {
    this.run((client) => client.register(properties));
  }

  trackSectionViewed(section: string): void {
    if (this.viewedSections.has(section)) {
      return;
    }

    this.viewedSections.add(section);
    this.capture('section_viewed', { section });
  }

  trackScrollPosition(scrollTop: number, documentHeight: number, viewportHeight: number): void {
    const scrollableHeight = Math.max(documentHeight - viewportHeight, 0);
    const percent = scrollableHeight === 0 ? 100 : Math.min(100, (scrollTop / scrollableHeight) * 100);

    for (const milestone of SCROLL_MILESTONES) {
      if (percent >= milestone && !this.reachedScrollMilestones.has(milestone)) {
        this.reachedScrollMilestones.add(milestone);
        this.capture('scroll_depth_reached', { percent: milestone });
      }
    }
  }

  startEngagementTracking(): void {
    if (!this.enabled || this.engagementStarted) {
      return;
    }

    this.engagementStarted = true;
    let visibleSeconds = 0;
    const reached = new Set<number>();

    this.zone.runOutsideAngular(() => {
      const timer = window.setInterval(() => {
        if (document.visibilityState !== 'visible') {
          return;
        }

        visibleSeconds += 1;
        for (const milestone of ENGAGEMENT_MILESTONES) {
          if (visibleSeconds >= milestone && !reached.has(milestone)) {
            reached.add(milestone);
            this.capture('engaged_time_reached', { seconds: milestone });
          }
        }
      }, 1000);

      this.destroyRef.onDestroy(() => window.clearInterval(timer));
    });
  }

  /** Runs now if the SDK is ready, otherwise as soon as it is. */
  private run(action: (client: PostHog) => void): void {
    if (!this.enabled) {
      return;
    }

    if (this.client) {
      action(this.client);
    } else {
      this.pending.push(action);
    }
  }

  private listenForNamedInteractions(): void {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const element = target.closest<HTMLElement>('[data-analytics-event]');
      const eventName = element?.dataset['analyticsEvent'];
      if (!element || !eventName) {
        return;
      }

      const properties: Properties = {};
      for (const [key, value] of Object.entries(element.dataset)) {
        if (!key.startsWith('analytics') || key === 'analyticsEvent' || value === undefined) {
          continue;
        }

        const propertyName = key
          .replace(/^analytics/, '')
          .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
          .replace(/^_/, '');
        properties[propertyName] = value;
      }

      this.capture(eventName, properties);
    };

    document.addEventListener('click', onClick, { capture: true });
    this.destroyRef.onDestroy(() => document.removeEventListener('click', onClick, { capture: true }));
  }
}
