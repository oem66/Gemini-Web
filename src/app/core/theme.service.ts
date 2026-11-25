import { DestroyRef, Injectable, NgZone, computed, effect, inject, signal } from '@angular/core';
import { AnalyticsService } from './analytics.service';

const THEME_STORAGE_KEY = 'gemini-theme';

/** Follows the light, or is pinned by the reader. */
export type ThemePreference = 'auto' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

/* Local hours the page reads as daylight. Outside them `auto` turns the page
   dark. The same rule runs inline in index.html before first paint, so the two
   must change together. */
export const DAY_STARTS_AT = 7;
export const DAY_ENDS_AT = 19;

/** How long colours cross-fade for when the scheme changes. */
const THEME_FADE_MS = 420;

export const THEME_ORDER: readonly ThemePreference[] = ['auto', 'light', 'dark'];

/** The pure rule shared by the boot script and the app. */
export function resolveTheme(preference: ThemePreference, hour: number, systemDark: boolean): ResolvedTheme {
  if (preference !== 'auto') {
    return preference;
  }

  const night = hour < DAY_STARTS_AT || hour >= DAY_ENDS_AT;
  return night || systemDark ? 'dark' : 'light';
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly analytics = inject(AnalyticsService);

  readonly preference = signal<ThemePreference>(detectInitialPreference());
  private readonly hour = signal(new Date().getHours());
  private readonly systemDark = signal(detectSystemDark());

  readonly theme = computed<ResolvedTheme>(() =>
    resolveTheme(this.preference(), this.hour(), this.systemDark())
  );

  private fadeTimer = 0;

  constructor() {
    effect(() => this.apply(this.theme()));

    if (typeof window !== 'undefined') {
      this.watchEnvironment();
    }
  }

  set(preference: ThemePreference): void {
    if (preference === this.preference()) {
      return;
    }

    const previous = this.preference();
    this.preference.set(preference);
    this.hour.set(new Date().getHours());
    this.analytics.capture('theme_changed', { from: previous, to: preference, resolved_theme: this.theme() });
    this.analytics.setContext({ theme_preference: preference, resolved_theme: this.theme() });

    try {
      if (preference === 'auto') {
        localStorage.removeItem(THEME_STORAGE_KEY);
      } else {
        localStorage.setItem(THEME_STORAGE_KEY, preference);
      }
    } catch {
      // Storage unavailable — the choice still holds for this visit.
    }
  }

  /** The header control walks all three states, so `auto` is never lost. */
  cycle(): void {
    const index = THEME_ORDER.indexOf(this.preference());
    this.set(THEME_ORDER[(index + 1) % THEME_ORDER.length]);
  }

  private apply(theme: ResolvedTheme): void {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;

    // The boot script already resolved the same rule before first paint, so
    // the opening pass is a no-op and nothing fades on arrival.
    if (root.dataset['theme'] === theme) {
      return;
    }

    root.dataset['theme'] = theme;

    const background = getComputedStyle(root).getPropertyValue('--bg').trim();
    if (background) {
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
    }

    root.classList.add('theme-fade');
    this.zone.runOutsideAngular(() => {
      clearTimeout(this.fadeTimer);
      this.fadeTimer = window.setTimeout(() => root.classList.remove('theme-fade'), THEME_FADE_MS);
    });
  }

  /* In `auto` the page keeps following the light while it is open. The timer
     lands on the next boundary rather than polling, and the visibility check
     covers a machine that slept across one. */
  private watchEnvironment(): void {
    let timer = 0;

    const refresh = () => this.zone.run(() => this.hour.set(new Date().getHours()));

    const schedule = () => {
      timer = window.setTimeout(() => {
        refresh();
        schedule();
      }, msUntilDaylightChange());
    };

    const onVisibility = () => {
      if (document.visibilityState !== 'visible') {
        return;
      }
      clearTimeout(timer);
      refresh();
      schedule();
    };

    const query = window.matchMedia?.('(prefers-color-scheme: dark)');
    const onSystemChange = () => this.zone.run(() => this.systemDark.set(!!query?.matches));

    this.zone.runOutsideAngular(() => {
      schedule();
      document.addEventListener('visibilitychange', onVisibility);
      query?.addEventListener('change', onSystemChange);
    });

    this.destroyRef.onDestroy(() => {
      clearTimeout(timer);
      clearTimeout(this.fadeTimer);
      document.removeEventListener('visibilitychange', onVisibility);
      query?.removeEventListener('change', onSystemChange);
    });
  }
}

function detectInitialPreference(): ThemePreference {
  if (typeof window === 'undefined') {
    return 'auto';
  }

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // Storage unavailable — follow the light.
  }

  return 'auto';
}

function detectSystemDark(): boolean {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-color-scheme: dark)').matches;
}

function msUntilDaylightChange(now = new Date()): number {
  const next = new Date(now);
  next.setMinutes(0, 0, 0);

  const hour = now.getHours();
  if (hour < DAY_STARTS_AT) {
    next.setHours(DAY_STARTS_AT);
  } else if (hour < DAY_ENDS_AT) {
    next.setHours(DAY_ENDS_AT);
  } else {
    next.setDate(next.getDate() + 1);
    next.setHours(DAY_STARTS_AT);
  }

  // A minute of slack so the timer cannot land a hair early.
  return Math.max(next.getTime() - now.getTime(), 0) + 60_000;
}
