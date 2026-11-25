import { Component, DestroyRef, ElementRef, NgZone, afterNextRender, inject, signal } from '@angular/core';
import { AnalyticsService } from './core/analytics.service';
import { LanguageService } from './core/language.service';
import { ThemeService } from './core/theme.service';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { ApproachComponent } from './sections/approach/approach.component';
import { ContactComponent } from './sections/contact/contact.component';
import { DifferenceComponent } from './sections/difference/difference.component';
import { FaqComponent } from './sections/faq/faq.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
import { ShiftComponent } from './sections/shift/shift.component';

/**
 * The page reads as one argument, top to bottom:
 *
 *   hero        — the promise, and the colour key (friction → flow)
 *   shift       — the specific friction that disappears
 *   services    — what gets built to make that happen
 *   approach    — how, step by step
 *   difference  — why it is faster and cheaper
 *   faq         — the remaining objections
 *   contact     — the next step
 *
 * Client logos, case studies and testimonials come back only when there is
 * real, cleared evidence to show (PRODUCT.md → Evidence on Hand).
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroComponent,
    ShiftComponent,
    ServicesComponent,
    ApproachComponent,
    DifferenceComponent,
    FaqComponent,
    ContactComponent,
    SiteFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly analytics = inject(AnalyticsService);
  private readonly language = inject(LanguageService);
  private readonly theme = inject(ThemeService);

  /** The section currently under the reading line, for the header's active link. */
  readonly activeSection = signal('');

  constructor() {
    afterNextRender(() => {
      this.analytics.setContext({
        site_language: this.language.lang(),
        theme_preference: this.theme.preference(),
        resolved_theme: this.theme.theme()
      });
      this.analytics.startEngagementTracking();
      this.observeSections();
      this.trackScrollDepth();
    });
  }

  private observeSections(): void {
    const sections = Array.from(this.host.querySelectorAll<HTMLElement>('section[id]'));
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.zone.run(() => this.activeSection.set(entry.target.id));
            this.analytics.trackSectionViewed(entry.target.id);
          }
        }
      },
      // A thin band just above the middle of the screen is the reading line.
      { rootMargin: '-42% 0px -56% 0px' }
    );

    this.zone.runOutsideAngular(() => sections.forEach((section) => observer.observe(section)));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private trackScrollDepth(): void {
    let queued = false;
    const update = () => {
      queued = false;
      this.analytics.trackScrollPosition(
        window.scrollY,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };

    this.zone.runOutsideAngular(() => window.addEventListener('scroll', onScroll, { passive: true }));
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
  }
}
