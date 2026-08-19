import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  NgZone,
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
  TRANSLATIONS
} from './i18n';
import { Spring, VelocityTracker, project, reducedMotionQuery, rubberband } from './motion';

const LANGUAGE_STORAGE_KEY = 'gemini-lang';

/** Scroll distance after which the header grows its dividing rule, in px. */
const HEADER_RULE_AT = 24;

/** Apple's scroll deceleration rate, reused for gesture projection. */
const DECELERATION = 0.998;

/** Movement needed before a drag commits to an axis. */
const AXIS_THRESHOLD = 10;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly zone = inject(NgZone);

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

  /** Which impact metrics surface in the hero data strip. */
  readonly heroStatIndexes: readonly number[] = [0, 2, 3];

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

  readonly heroChips: string[] = [
    'iOS · Swift',
    'Android · Kotlin',
    'Web · Angular',
    'Backend · Node',
    'AI · Automation'
  ];

  readonly swiftCode = [
    { indent: 0, tokens: [{ kind: 'keyword', text: 'import' }, { kind: 'plain', text: ' Foundation' }] },
    { indent: 0, tokens: [] },
    {
      indent: 0,
      tokens: [
        { kind: 'keyword', text: 'actor' },
        { kind: 'type', text: ' RealtimeStore' },
        { kind: 'plain', text: '<State: ' },
        { kind: 'type', text: 'Sendable' },
        { kind: 'plain', text: '> {' }
      ]
    },
    {
      indent: 1,
      tokens: [
        { kind: 'keyword', text: 'typealias' },
        { kind: 'type', text: ' Stream' },
        { kind: 'plain', text: ' = ' },
        { kind: 'type', text: 'AsyncStream' },
        { kind: 'plain', text: '<State>' }
      ]
    },
    {
      indent: 1,
      tokens: [
        { kind: 'keyword', text: 'private var' },
        { kind: 'plain', text: ' state: State' }
      ]
    },
    {
      indent: 1,
      tokens: [
        { kind: 'keyword', text: 'private var' },
        { kind: 'plain', text: ' sinks: [' },
        { kind: 'type', text: 'UUID' },
        { kind: 'plain', text: ': Stream.Continuation] = [:]' }
      ]
    },
    { indent: 0, tokens: [] },
    {
      indent: 1,
      tokens: [
        { kind: 'keyword', text: 'init' },
        { kind: 'plain', text: '(_ initial: State) { state = initial }' }
      ]
    },
    { indent: 0, tokens: [] },
    {
      indent: 1,
      tokens: [
        { kind: 'keyword', text: 'func' },
        { kind: 'function', text: ' updates' },
        { kind: 'plain', text: '() -> Stream {' }
      ]
    },
    {
      indent: 2,
      tokens: [
        { kind: 'keyword', text: 'let' },
        { kind: 'plain', text: ' pair = Stream.' },
        { kind: 'function', text: 'makeStream' },
        { kind: 'plain', text: '(bufferingPolicy: .' },
        { kind: 'function', text: 'bufferingNewest' },
        { kind: 'number', text: '(1)' },
        { kind: 'plain', text: ')' }
      ]
    },
    {
      indent: 2,
      tokens: [
        { kind: 'keyword', text: 'let' },
        { kind: 'plain', text: ' id = ' },
        { kind: 'type', text: 'UUID' },
        { kind: 'plain', text: '(); sinks[id] = pair.continuation' }
      ]
    },
    { indent: 2, tokens: [{ kind: 'plain', text: 'pair.continuation.yield(state)' }] },
    {
      indent: 2,
      tokens: [
        { kind: 'plain', text: 'pair.continuation.onTermination = { [' },
        { kind: 'keyword', text: 'weak' },
        { kind: 'plain', text: ' self] _ ' },
        { kind: 'keyword', text: 'in' }
      ]
    },
    {
      indent: 3,
      tokens: [
        { kind: 'type', text: 'Task' },
        { kind: 'plain', text: ' { ' },
        { kind: 'keyword', text: 'await' },
        { kind: 'plain', text: ' self?.detach(id) }' }
      ]
    },
    { indent: 2, tokens: [{ kind: 'plain', text: '}' }] },
    { indent: 2, tokens: [{ kind: 'keyword', text: 'return' }, { kind: 'plain', text: ' pair.stream' }] },
    { indent: 1, tokens: [{ kind: 'plain', text: '}' }] },
    { indent: 0, tokens: [] },
    {
      indent: 1,
      tokens: [
        { kind: 'keyword', text: 'func' },
        { kind: 'function', text: ' mutate' },
        { kind: 'plain', text: '(_ body: @' },
        { kind: 'type', text: 'Sendable' },
        { kind: 'plain', text: ' (inout State) throws -> Void) ' },
        { kind: 'keyword', text: 'rethrows' },
        { kind: 'plain', text: ' {' }
      ]
    },
    {
      indent: 2,
      tokens: [
        { kind: 'keyword', text: 'try' },
        { kind: 'plain', text: ' body(&state); sinks.values.forEach { $0.yield(state) }' }
      ]
    },
    { indent: 1, tokens: [{ kind: 'plain', text: '}' }] },
    { indent: 0, tokens: [] },
    {
      indent: 1,
      tokens: [
        { kind: 'keyword', text: 'private func' },
        { kind: 'function', text: ' detach' },
        { kind: 'plain', text: '(_ id: ' },
        { kind: 'type', text: 'UUID' },
        { kind: 'plain', text: ') { sinks[id] = ' },
        { kind: 'keyword', text: 'nil' },
        { kind: 'plain', text: ' }' }
      ]
    },
    { indent: 0, tokens: [{ kind: 'plain', text: '}' }] }
  ] as const;

  readonly menuOpen = signal(false);
  readonly activeSection = signal('');
  readonly scrolled = signal(false);

  readonly activeUseCase = signal(0);

  private readonly metricProgress = signal(0);
  readonly metricDisplays = computed(() =>
    this.impactMetrics().map((metric) =>
      metric.numeric === null
        ? metric.value
        : `${metric.prefix}${Math.round(metric.numeric * this.metricProgress())}${metric.suffix}`
    )
  );
  private metricsAnimated = false;

  /* Contact — validated inline as you type, never only on submit. */
  readonly email = signal('');
  readonly emailTouched = signal(false);
  readonly contactSent = signal(false);
  readonly emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(this.email().trim()));
  readonly emailError = computed(
    () => this.emailTouched() && this.email().trim().length > 0 && !this.emailValid()
  );

  private reduceMotion = false;

  /** Lets a tab click reuse the same motion the swipe gesture produces. */
  private slideCase: ((direction: number) => void) | null = null;

  constructor() {
    afterNextRender(() => {
      document.documentElement.lang = this.lang();

      const query = reducedMotionQuery();
      this.reduceMotion = query?.matches ?? false;
      if (query) {
        const onChange = () => (this.reduceMotion = query.matches);
        query.addEventListener('change', onChange);
        this.destroyRef.onDestroy(() => query.removeEventListener('change', onChange));
      }

      this.observeReveals();
      this.observeSections();
      this.setupScroll();
      this.setupCaseSwipe();
    });

    this.destroyRef.onDestroy(() => document.body.classList.remove('nav-open'));
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
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    document.body.classList.toggle('nav-open', next);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.classList.remove('nav-open');
  }

  @HostListener('window:resize')
  onViewportResize(): void {
    if (window.innerWidth >= 992 && this.menuOpen()) {
      this.closeMenu();
    }
  }

  /* Every surface needs a way out that is not the control you came in
     through — never trap the user. */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  setUseCase(index: number): void {
    const current = this.activeUseCase();
    if (index === current) {
      return;
    }

    this.activeUseCase.set(index);
    // Hint in the direction of travel so the change telegraphs where it came
    // from, exactly as the swipe gesture does.
    this.slideCase?.(index > current ? 1 : -1);
  }

  /** Roving focus through the tab list, the way a real tablist behaves. */
  onTabKeydown(event: KeyboardEvent, index: number): void {
    const count = this.useCases().length;
    let next = index;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        next = (index + 1) % count;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        next = (index - 1 + count) % count;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = count - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.setUseCase(next);
    const tabs = this.host.nativeElement.querySelectorAll<HTMLElement>('.case-tab');
    tabs[next]?.focus();
  }

  setEmail(value: string): void {
    this.email.set(value);
  }

  submitContact(): void {
    this.emailTouched.set(true);
    if (!this.emailValid()) {
      this.host.nativeElement.querySelector<HTMLInputElement>('.email-capture input')?.focus();
      return;
    }

    this.contactSent.set(true);
  }

  /** Undo, rather than a dead end, after the form is sent. */
  resetContact(): void {
    this.contactSent.set(false);
    this.email.set('');
    this.emailTouched.set(false);
  }

  /* ================================================================== */
  /* Scroll                                                             */
  /* ================================================================== */

  /* The header only gains a dividing rule once the page has moved under it,
     so at rest the bar and the page are one surface. The boolean flips at most
     twice per scroll pass, so re-entering the zone here costs nothing. */
  private setupScroll(): void {
    let queued = false;
    let last = false;

    const update = () => {
      queued = false;
      const next = window.scrollY > HEADER_RULE_AT;
      if (next !== last) {
        last = next;
        this.zone.run(() => this.scrolled.set(next));
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
  }

  /* ================================================================== */
  /* Use cases — swipe with projection, rubber-banding and handoff       */
  /* ================================================================== */

  private setupCaseSwipe(): void {
    const panel = this.host.nativeElement.querySelector<HTMLElement>('.case-panel');
    if (!panel) {
      return;
    }

    const offset = new Spring(0, { damping: 1, response: 0.4, epsilon: 0.05, restVelocity: 0.5 });
    const tracker = new VelocityTracker();

    let dragging = false;
    let axis: 'x' | 'y' | null = null;
    let activePointer = -1;
    let startX = 0;
    let startY = 0;
    let grabBase = 0;
    let width = panel.offsetWidth || 1;
    let frame = 0;
    let last = 0;

    const paint = (value: number) => {
      panel.style.transform = `translate3d(${value.toFixed(2)}px, 0, 0)`;
    };

    const tick = (now: number) => {
      const dt = last ? (now - last) / 1000 : 1 / 60;
      last = now;

      paint(offset.step(dt));

      if (!offset.settled) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        last = 0;
        panel.style.removeProperty('will-change');
      }
    };

    const wake = () => {
      if (!frame) {
        last = 0;
        panel.style.setProperty('will-change', 'transform');
        frame = requestAnimationFrame(tick);
      }
    };

    // Used by a tab click too, so pointer and keyboard produce the same motion.
    this.slideCase = (direction: number) => {
      if (this.reduceMotion) {
        offset.reset(0);
        paint(0);
        return;
      }

      width = panel.offsetWidth || width;
      offset.value = direction * width * 0.12;
      offset.velocity = 0;
      offset.target = 0;
      // Painted synchronously so the new content is never shown at rest for a
      // frame before the motion starts.
      paint(offset.value);
      wake();
    };

    const onPointerDown = (event: PointerEvent) => {
      // Desktop has the tab list and the keyboard; a mouse drag here would
      // only fight text selection.
      if (event.pointerType === 'mouse') {
        return;
      }

      activePointer = event.pointerId;
      axis = null;
      startX = event.clientX;
      startY = event.clientY;
      width = panel.offsetWidth || width;
      // Grabbing mid-flight continues from the presentation value, never from
      // the target.
      grabBase = offset.value;
      offset.velocity = 0;
      tracker.reset(event.clientX, event.timeStamp);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerId !== activePointer) {
        return;
      }

      const dx = event.clientX - startX;
      const dy = event.clientY - startY;

      // Both gestures are tracked from the first move; the loser is cancelled
      // once intent is clear.
      if (!axis) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) < AXIS_THRESHOLD) {
          return;
        }
        axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        if (axis === 'y') {
          activePointer = -1;
          return;
        }
        dragging = true;
        panel.setPointerCapture(event.pointerId);
        panel.classList.add('dragging');
        wake();
      }

      tracker.add(event.clientX, event.timeStamp);

      // Start from where the threshold was crossed so nothing jumps.
      const travel = grabBase + dx - Math.sign(dx) * AXIS_THRESHOLD;
      const index = this.activeUseCase();
      const atStart = index === 0;
      const atEnd = index === this.useCases().length - 1;

      // Past the first or last case there is nothing to reach, so resistance
      // grows instead of the panel stopping dead.
      const resisted =
        (travel > 0 && atStart) || (travel < 0 && atEnd) ? rubberband(travel, width) : travel;

      offset.value = resisted;
      offset.target = resisted;
      paint(resisted);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerId !== activePointer && !dragging) {
        return;
      }

      const wasDragging = dragging;
      dragging = false;
      activePointer = -1;
      axis = null;
      panel.classList.remove('dragging');
      if (panel.hasPointerCapture(event.pointerId)) {
        panel.releasePointerCapture(event.pointerId);
      }

      if (!wasDragging) {
        return;
      }

      const velocity = tracker.velocity();
      const index = this.activeUseCase();
      const lastIndex = this.useCases().length - 1;

      // Land where the gesture was going, not where the finger happened to
      // let go.
      const projected = offset.value + project(velocity, DECELERATION);
      const commit = width * 0.3;

      let next = index;
      if (projected <= -commit) {
        next = Math.min(lastIndex, index + 1);
      } else if (projected >= commit) {
        next = Math.max(0, index - 1);
      }

      if (next !== index) {
        this.zone.run(() => this.activeUseCase.set(next));
        // The incoming case picks up exactly where the outgoing one was, so
        // the swap is invisible and it enters from the side it is heading to.
        const direction = next > index ? 1 : -1;
        offset.value = this.reduceMotion ? 0 : offset.value + direction * width;
      }

      offset.velocity = velocity;
      offset.target = 0;
      wake();
    };

    const onResize = () => (width = panel.offsetWidth || width);

    this.zone.runOutsideAngular(() => {
      panel.addEventListener('pointerdown', onPointerDown);
      panel.addEventListener('pointermove', onPointerMove);
      panel.addEventListener('pointerup', onPointerUp);
      panel.addEventListener('pointercancel', onPointerUp);
      window.addEventListener('resize', onResize, { passive: true });
    });

    this.destroyRef.onDestroy(() => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      this.slideCase = null;
      window.removeEventListener('resize', onResize);
    });
  }

  /* ================================================================== */
  /* Content                                                            */
  /* ================================================================== */

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

  private observeReveals(): void {
    const elements = Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>('.reveal'));

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
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private observeSections(): void {
    const sections = Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>('section[id]'));

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

    if (this.reduceMotion) {
      this.metricProgress.set(1);
      return;
    }

    const duration = 1200;
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
}
