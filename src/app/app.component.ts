import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  afterNextRender,
  computed,
  inject,
  signal
} from '@angular/core';
import {
  LANGUAGES,
  LanguageCode,
  LanguageOption,
  SiteContent,
  TRANSLATIONS,
  TerminalLine
} from './i18n';

const LANGUAGE_STORAGE_KEY = 'gemini-lang';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly timeouts: ReturnType<typeof setTimeout>[] = [];

  readonly year = new Date().getFullYear();

  readonly languages: LanguageOption[] = LANGUAGES;
  readonly lang = signal<LanguageCode>(this.detectInitialLanguage());
  readonly t = computed<SiteContent>(() => TRANSLATIONS[this.lang()]);

  readonly navItems = computed(() => this.t().navItems);
  readonly capabilities = computed(() => this.t().capabilities);
  readonly impactMetrics = computed(() => this.t().impactMetrics);
  readonly projectHighlights = computed(() => this.t().projectHighlights);
  readonly clientReferrals = computed(() => this.t().clientReferrals);
  readonly useCases = computed(() => this.t().useCases);
  readonly technologyStack = computed(() => this.t().technologyStack);

  readonly technologies: string[] = [
    'Swift',
    'Kotlin',
    'TypeScript',
    'Angular',
    'Node.js',
    'SwiftUI',
    'Jetpack Compose',
    'PostgreSQL',
    'Cloud DevOps',
    'AI Automation',
    'CI/CD',
    'GraphQL'
  ];

  readonly heroChips: string[] = ['iOS · Swift', 'Android · Kotlin', 'Web · Angular', 'Backend · Node', 'AI · Automation'];

  readonly terminalLines = signal<TerminalLine[]>([]);
  readonly typingLine = signal('');
  readonly isTyping = signal(false);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly scrollProgress = signal(0);
  readonly activeSection = signal('');

  readonly activeUseCase = signal(0);

  readonly cursorX = signal(50);
  readonly cursorY = signal(50);
  readonly tiltX = signal(0);
  readonly tiltY = signal(0);

  private readonly metricProgress = signal(0);
  readonly metricDisplays = computed(() =>
    this.impactMetrics().map((metric) =>
      metric.numeric === null
        ? metric.value
        : `${metric.prefix}${Math.round(metric.numeric * this.metricProgress())}${metric.suffix}`
    )
  );
  private metricsAnimated = false;

  readonly monthlyRevenue = signal(120000);
  readonly automationLift = signal(22);
  readonly aiUpside = signal(15);
  readonly efficiencyRecovery = signal(18);

  readonly monthlyAutomationValue = computed(() =>
    Math.round((this.monthlyRevenue() * this.automationLift()) / 100)
  );

  readonly monthlyAiValue = computed(() => Math.round((this.monthlyRevenue() * this.aiUpside()) / 100));

  readonly monthlyRecoveryValue = computed(() =>
    Math.round((this.monthlyRevenue() * this.efficiencyRecovery()) / 100)
  );

  readonly monthlyTotalValue = computed(
    () => this.monthlyAutomationValue() + this.monthlyAiValue() + this.monthlyRecoveryValue()
  );

  readonly annualTotalValue = computed(() => this.monthlyTotalValue() * 12);

  readonly monthlyRevenueLabel = computed(() => this.toCurrency(this.monthlyRevenue()));
  readonly monthlyAutomationLabel = computed(() => this.toCurrency(this.monthlyAutomationValue()));
  readonly monthlyAiLabel = computed(() => this.toCurrency(this.monthlyAiValue()));
  readonly monthlyRecoveryLabel = computed(() => this.toCurrency(this.monthlyRecoveryValue()));
  readonly monthlyTotalLabel = computed(() => this.toCurrency(this.monthlyTotalValue()));
  readonly annualTotalLabel = computed(() => this.toCurrency(this.annualTotalValue()));

  constructor() {
    afterNextRender(() => {
      document.documentElement.lang = this.lang();
      this.startTerminal();
      this.observeReveals();
      this.observeSections();
      this.onWindowScroll();
    });

    this.destroyRef.onDestroy(() => this.timeouts.forEach(clearTimeout));
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const y = window.scrollY;
    this.scrolled.set(y > 24);

    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    this.scrollProgress.set(max > 0 ? Math.min(100, (y / max) * 100) : 0);
  }

  setLanguage(code: string): void {
    if (!this.isLanguageCode(code) || code === this.lang()) {
      return;
    }

    this.lang.set(code);
    document.documentElement.lang = code;

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    } catch {
      // Private mode / storage unavailable — selection still applies for this visit.
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setUseCase(index: number): void {
    this.activeUseCase.set(index);
  }

  onCardMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  onHeroMove(event: MouseEvent, element: HTMLElement): void {
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const normalizedX = x / 100 - 0.5;
    const normalizedY = y / 100 - 0.5;

    this.cursorX.set(this.clampPercentage(x));
    this.cursorY.set(this.clampPercentage(y));
    this.tiltY.set(this.clampRange(normalizedX * 8, -6, 6));
    this.tiltX.set(this.clampRange(normalizedY * -7, -5, 5));
  }

  resetHeroFocus(): void {
    this.cursorX.set(50);
    this.cursorY.set(50);
    this.tiltX.set(0);
    this.tiltY.set(0);
  }

  setMonthlyRevenue(value: string): void {
    this.monthlyRevenue.set(Number(value));
  }

  setAutomationLift(value: string): void {
    this.automationLift.set(Number(value));
  }

  setAiUpside(value: string): void {
    this.aiUpside.set(Number(value));
  }

  setEfficiencyRecovery(value: string): void {
    this.efficiencyRecovery.set(Number(value));
  }

  private detectInitialLanguage(): LanguageCode {
    if (typeof window === 'undefined') {
      return 'en';
    }

    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored && this.isLanguageCode(stored)) {
        return stored;
      }
    } catch {
      // Storage unavailable — fall through to browser language.
    }

    const browser = (navigator.language || '').toLowerCase();
    if (browser.startsWith('nb') || browser.startsWith('nn')) {
      return 'no';
    }

    const prefix = browser.slice(0, 2);
    return this.isLanguageCode(prefix) ? prefix : 'en';
  }

  private isLanguageCode(value: string): value is LanguageCode {
    return LANGUAGES.some((language) => language.code === value);
  }

  private startTerminal(): void {
    let index = 0;

    const playNext = () => {
      const script = this.t().terminalScript;

      if (index >= script.length) {
        this.schedule(() => {
          this.terminalLines.set([]);
          index = 0;
          playNext();
        }, 4600);
        return;
      }

      const line = script[index];

      if (line.kind === 'cmd') {
        this.isTyping.set(true);
        this.typingLine.set('');
        let char = 0;

        const typeChar = () => {
          if (char <= line.text.length) {
            this.typingLine.set(line.text.slice(0, char));
            char++;
            this.schedule(typeChar, 22 + Math.random() * 38);
          } else {
            this.isTyping.set(false);
            this.typingLine.set('');
            this.terminalLines.update((lines) => [...lines, line]);
            index++;
            this.schedule(playNext, 300);
          }
        };

        typeChar();
      } else {
        this.terminalLines.update((lines) => [...lines, line]);
        index++;
        this.schedule(playNext, 420);
      }
    };

    playNext();
  }

  private observeReveals(): void {
    const elements: HTMLElement[] = Array.from(this.host.nativeElement.querySelectorAll('.reveal'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private observeSections(): void {
    const sections: HTMLElement[] = Array.from(this.host.nativeElement.querySelectorAll('section[id]'));

    if (!('IntersectionObserver' in window)) {
      this.animateMetrics();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          this.activeSection.set(entry.target.id);
          if (entry.target.id === 'impact') {
            this.animateMetrics();
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private animateMetrics(): void {
    if (this.metricsAnimated) {
      return;
    }
    this.metricsAnimated = true;

    const duration = 1500;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.metricProgress.set(eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  private schedule(fn: () => void, delay: number): void {
    this.timeouts.push(setTimeout(fn, delay));
  }

  private clampPercentage(value: number): number {
    return Math.max(0, Math.min(100, value));
  }

  private clampRange(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  private toCurrency(value: number): string {
    const locale = LANGUAGES.find((language) => language.code === this.lang())?.locale ?? 'en-US';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  }
}
