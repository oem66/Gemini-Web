import {
  Component,
  DestroyRef,
  HostListener,
  NgZone,
  afterNextRender,
  computed,
  inject,
  input,
  signal
} from '@angular/core';
import { AnalyticsService } from '../../core/analytics.service';
import { LanguageService } from '../../core/language.service';
import { THEME_ORDER, ThemePreference, ThemeService } from '../../core/theme.service';
import { BrandMarkComponent } from '../brand-mark.component';

/** Scroll distance after which the header becomes a solid bar, in px. */
const SOLID_AFTER = 24;

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [BrandMarkComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly analytics = inject(AnalyticsService);
  readonly language = inject(LanguageService);
  readonly theme = inject(ThemeService);

  readonly activeSection = input('');

  readonly t = this.language.t;
  readonly menuOpen = signal(false);
  readonly solid = signal(false);

  readonly themeChoices = computed(() => {
    const labels = this.t().header.theme;
    return THEME_ORDER.map((value) => ({ value, label: labels[value] }));
  });

  /* The icon alone cannot say which of three states is in force, so the
     control carries the state in its accessible name. */
  readonly themeStatus = computed(() => {
    const labels = this.t().header.theme;
    return `${labels.label}: ${labels[this.theme.preference()]}`;
  });

  constructor() {
    afterNextRender(() => {
      let last = false;
      let queued = false;

      const update = () => {
        queued = false;
        const next = window.scrollY > SOLID_AFTER;
        if (next !== last) {
          last = next;
          this.zone.run(() => this.solid.set(next));
        }
      };

      const onScroll = () => {
        if (!queued) {
          queued = true;
          requestAnimationFrame(update);
        }
      };

      this.zone.runOutsideAngular(() => {
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
      });
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    });

    this.destroyRef.onDestroy(() => document.body.classList.remove('nav-open'));
  }

  setTheme(preference: ThemePreference): void {
    this.theme.set(preference);
  }

  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    document.body.classList.toggle('nav-open', next);
    this.analytics.capture(next ? 'mobile_menu_opened' : 'mobile_menu_closed');
  }

  closeMenu(): void {
    if (!this.menuOpen()) {
      return;
    }
    this.menuOpen.set(false);
    document.body.classList.remove('nav-open');
    this.analytics.capture('mobile_menu_closed');
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.closeMenu();
    }
  }

  /* Every surface needs a way out other than the control that opened it. */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
