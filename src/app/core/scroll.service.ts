import { Injectable, NgZone, inject } from '@angular/core';
import { reducedMotionQuery } from './motion';

export interface ScrollFrame {
  rect: DOMRect;
  viewportHeight: number;
}

export type ScrollListener = (frame: ScrollFrame) => void;

interface Entry {
  listener: ScrollListener;
  visible: boolean;
  /** One more frame after leaving the viewport, so a fast flick settles at the end state. */
  flushOnce: boolean;
}

/**
 * One scroll loop for every scroll-linked effect on the page.
 *
 * Each frame reads all rects first and only then lets listeners write, so the
 * browser lays out once per frame no matter how many effects are running.
 * Elements outside the viewport cost nothing: an IntersectionObserver gates
 * which listeners run at all. Everything happens outside Angular's zone —
 * listeners write CSS custom properties, never component state.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly zone = inject(NgZone);
  private readonly entries = new Map<Element, Entry>();
  private observer: IntersectionObserver | null = null;
  private queued = false;

  /** True when the visitor asked for less motion; effects should show their end state. */
  readonly reducedMotion = reducedMotionQuery()?.matches ?? false;

  /** Starts calling `listener` every frame the element is near the viewport. Returns a stop function. */
  track(element: Element, listener: ScrollListener): () => void {
    if (typeof window === 'undefined') {
      return () => undefined;
    }

    this.start();
    this.entries.set(element, { listener, visible: false, flushOnce: true });
    this.observer?.observe(element);
    this.schedule();

    return () => {
      this.observer?.unobserve(element);
      this.entries.delete(element);
    };
  }

  private start(): void {
    if (this.observer) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (records) => {
          for (const record of records) {
            const entry = this.entries.get(record.target);
            if (entry) {
              entry.visible = record.isIntersecting;
              entry.flushOnce = true;
            }
          }
          this.schedule();
        },
        { rootMargin: '20% 0px 20% 0px' }
      );

      window.addEventListener('scroll', this.schedule, { passive: true });
      window.addEventListener('resize', this.schedule, { passive: true });
    });
  }

  private readonly schedule = (): void => {
    if (this.queued) {
      return;
    }
    this.queued = true;
    requestAnimationFrame(this.flush);
  };

  private readonly flush = (): void => {
    this.queued = false;
    const viewportHeight = window.innerHeight;
    const due: [Entry, DOMRect][] = [];

    // Read phase.
    for (const [element, entry] of this.entries) {
      if (entry.visible || entry.flushOnce) {
        entry.flushOnce = false;
        due.push([entry, element.getBoundingClientRect()]);
      }
    }

    // Write phase.
    for (const [entry, rect] of due) {
      entry.listener({ rect, viewportHeight });
    }
  };
}

export function clamp01(value: number): number {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}
