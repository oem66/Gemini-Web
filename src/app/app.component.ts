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
import { Spring, VelocityTracker, isCoarsePointer, project, reducedMotionQuery, rubberband } from './motion';

const LANGUAGE_STORAGE_KEY = 'gemini-lang';

/** Scroll distance over which the header chrome materialises, in px. */
const CHROME_RAMP = 72;

/** Ambient ticker speed, px/s. Resolution-independent, unlike a fixed duration. */
const MARQUEE_DRIFT = -55;

/** Apple's scroll deceleration rate (§6). */
const DECELERATION = 0.998;

/** Movement needed before a drag commits to an axis (§10). */
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

  /* Contact — validated inline as you type, never only on submit (§16). */
  readonly email = signal('');
  readonly emailTouched = signal(false);
  readonly contactSent = signal(false);
  readonly emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(this.email().trim()));
  readonly emailError = computed(() => this.emailTouched() && this.email().trim().length > 0 && !this.emailValid());

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
      this.setupHeroPointer();
      this.setupSpotlight();
      this.setupMarquee();
      this.setupCaseSwipe();
    });

    this.destroyRef.onDestroy(() => {
      this.timeouts.forEach(clearTimeout);
      document.body.classList.remove('nav-open');
    });
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
    if (window.innerWidth >= 861 && this.menuOpen()) {
      this.closeMenu();
    }
  }

  /* Every surface needs a way out that is not the control you came in
     through — never trap the user (§16). */
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
    // from, exactly as the swipe gesture does (§7, §8).
    this.slideCase?.(index > current ? 1 : -1);
  }

  /** Roving focus through the tab list, the way a real tablist behaves (§16). */
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

  /** Undo, rather than a dead end, after the form is sent (§16 agency). */
  resetContact(): void {
    this.contactSent.set(false);
    this.email.set('');
    this.emailTouched.set(false);
  }

  /* ================================================================== */
  /* Scroll                                                             */
  /* ================================================================== */

  private setupScroll(): void {
    const root = this.host.nativeElement as HTMLElement;
    const progressBar = root.querySelector<HTMLElement>('.progress-bar');
    const header = root.querySelector<HTMLElement>('.site-header');

    let maxScroll = 0;
    let queued = false;

    const measure = () => {
      maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    };

    const update = () => {
      queued = false;
      const y = window.scrollY;

      // scaleX rather than width keeps the progress bar on the compositor (§11).
      progressBar?.style.setProperty('transform', `scaleX(${maxScroll > 0 ? Math.min(1, y / maxScroll) : 0})`);

      // The chrome materialises continuously with the scroll instead of
      // snapping at a threshold (§1, §12).
      header?.style.setProperty('--chrome', Math.min(1, y / CHROME_RAMP).toFixed(4));
    };

    const onScroll = () => {
      this.rectsDirty = true;
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      this.rectsDirty = true;
      measure();
      update();
    };

    this.zone.runOutsideAngular(() => {
      measure();
      update();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize, { passive: true });
    });

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    });
  }

  /* ================================================================== */
  /* Hero — 1:1 pointer tracking, spring-smoothed                       */
  /* ================================================================== */

  private rectsDirty = true;

  private setupHeroPointer(): void {
    const lab = this.host.nativeElement.querySelector<HTMLElement>('.hero-visual');
    const terminal = lab?.querySelector<HTMLElement>('.terminal');
    if (!lab || !terminal) {
      return;
    }

    // Values straight from the table in §4: rotation is 0.8/0.4, a reposition
    // is 1.0/0.4.
    const tiltX = new Spring(0, { damping: 0.8, response: 0.4, epsilon: 0.01 });
    const tiltY = new Spring(0, { damping: 0.8, response: 0.4, epsilon: 0.01 });
    const glowX = new Spring(50, { damping: 1, response: 0.4, epsilon: 0.02, restVelocity: 0.2 });
    const glowY = new Spring(50, { damping: 1, response: 0.4, epsilon: 0.02, restVelocity: 0.2 });
    const presence = new Spring(0, { damping: 1, response: 0.3, epsilon: 0.002 });
    const springs = [tiltX, tiltY, glowX, glowY, presence];

    let rect: DOMRect | null = null;
    let frame = 0;
    let last = 0;

    const tick = (now: number) => {
      const dt = last ? (now - last) / 1000 : 1 / 60;
      last = now;

      springs.forEach((spring) => spring.step(dt));

      lab.style.setProperty('--tilt-x', `${tiltX.value.toFixed(3)}deg`);
      lab.style.setProperty('--tilt-y', `${tiltY.value.toFixed(3)}deg`);
      lab.style.setProperty('--cursor-x', `${glowX.value.toFixed(2)}%`);
      lab.style.setProperty('--cursor-y', `${glowY.value.toFixed(2)}%`);
      lab.style.setProperty('--px', ((glowX.value - 50) / 50).toFixed(4));
      lab.style.setProperty('--py', ((glowY.value - 50) / 50).toFixed(4));
      lab.style.setProperty('--focus', presence.value.toFixed(4));

      if (springs.some((spring) => !spring.settled)) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        last = 0;
        terminal.style.removeProperty('will-change');
      }
    };

    // Only run the loop while something is actually in motion (§11).
    const wake = () => {
      if (!frame) {
        last = 0;
        terminal.style.setProperty('will-change', 'transform');
        frame = requestAnimationFrame(tick);
      }
    };

    const onEnter = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || this.reduceMotion) {
        return;
      }
      rect = lab.getBoundingClientRect();
      this.rectsDirty = false;
      presence.target = 1;
      wake();
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || this.reduceMotion) {
        return;
      }

      const bounds = !rect || this.rectsDirty ? lab.getBoundingClientRect() : rect;
      rect = bounds;
      this.rectsDirty = false;

      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      const normalizedX = x / 100 - 0.5;
      const normalizedY = y / 100 - 0.5;

      glowX.target = clamp(x, 0, 100);
      glowY.target = clamp(y, 0, 100);
      tiltY.target = clamp(normalizedX * 8, -6, 6);
      tiltX.target = clamp(normalizedY * -7, -5, 5);
      presence.target = 1;
      wake();
    };

    // Re-targeting to rest keeps whatever velocity the pointer left behind,
    // so leaving mid-motion never shows a hard cut (§3).
    const onLeave = () => {
      tiltX.target = 0;
      tiltY.target = 0;
      glowX.target = 50;
      glowY.target = 50;
      presence.target = 0;
      wake();
    };

    this.zone.runOutsideAngular(() => {
      lab.addEventListener('pointerenter', onEnter);
      lab.addEventListener('pointermove', onMove);
      lab.addEventListener('pointerleave', onLeave);
      lab.addEventListener('pointercancel', onLeave);
    });

    this.destroyRef.onDestroy(() => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      lab.removeEventListener('pointerenter', onEnter);
      lab.removeEventListener('pointermove', onMove);
      lab.removeEventListener('pointerleave', onLeave);
      lab.removeEventListener('pointercancel', onLeave);
    });
  }

  /* ================================================================== */
  /* Card spotlight — delegated, so hovering never triggers a CD pass    */
  /* ================================================================== */

  private setupSpotlight(): void {
    const root = this.host.nativeElement as HTMLElement;
    if (isCoarsePointer()) {
      return;
    }

    let active: HTMLElement | null = null;
    let rect: DOMRect | null = null;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') {
        return;
      }

      const card = (event.target as HTMLElement | null)?.closest<HTMLElement>('.card');
      if (!card) {
        active = null;
        rect = null;
        return;
      }

      if (card !== active || !rect || this.rectsDirty) {
        active = card;
        rect = card.getBoundingClientRect();
      }

      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };

    this.zone.runOutsideAngular(() => root.addEventListener('pointermove', onMove, { passive: true }));
    this.destroyRef.onDestroy(() => root.removeEventListener('pointermove', onMove));
  }

  /* ================================================================== */
  /* Marquee — draggable, with momentum handed off to the drift          */
  /* ================================================================== */

  private setupMarquee(): void {
    const track = this.host.nativeElement.querySelector<HTMLElement>('.marquee-track');
    if (!track) {
      return;
    }

    const tracker = new VelocityTracker();

    let loopWidth = 0;
    let offset = 0;
    let drift = this.reduceMotion ? 0 : MARQUEE_DRIFT;
    let velocity = drift;
    let dragging = false;
    let activePointer = -1;
    let grabOffset = 0;
    let grabX = 0;
    let frame = 0;
    let last = 0;

    // The track holds the list twice, so half of it is one full loop.
    const measure = () => (loopWidth = track.scrollWidth / 2);

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
      last = now;

      if (!dragging) {
        // Momentum decays the way scrolling does and settles into the ambient
        // drift, so there is no seam between the flick and the drift (§5, §6).
        velocity = drift + (velocity - drift) * Math.pow(DECELERATION, dt * 1000);
        offset += velocity * dt;
      }

      if (loopWidth > 0) {
        offset = ((offset % loopWidth) - loopWidth) % loopWidth;
      }

      track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;

      if (dragging || drift !== 0 || Math.abs(velocity) > 0.5) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        last = 0;
        track.style.removeProperty('will-change');
      }
    };

    const wake = () => {
      if (!frame) {
        last = 0;
        track.style.setProperty('will-change', 'transform');
        frame = requestAnimationFrame(tick);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }

      dragging = true;
      activePointer = event.pointerId;
      // Capture keeps tracking alive once the pointer leaves the strip (§2).
      track.setPointerCapture(event.pointerId);
      grabX = event.clientX;
      grabOffset = offset;
      velocity = 0;
      tracker.reset(event.clientX, event.timeStamp);
      track.classList.add('dragging');
      wake();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== activePointer) {
        return;
      }
      // 1:1 with the pointer, from wherever it was grabbed.
      offset = grabOffset + (event.clientX - grabX);
      tracker.add(event.clientX, event.timeStamp);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== activePointer) {
        return;
      }
      dragging = false;
      activePointer = -1;
      // The exact release velocity, so the drag and the coast are one motion.
      velocity = tracker.velocity();
      track.classList.remove('dragging');
      if (track.hasPointerCapture(event.pointerId)) {
        track.releasePointerCapture(event.pointerId);
      }
      wake();
    };

    // Coasting to a stop on hover reads as responsive; a hard pause reads as
    // frozen, which is the same reason boundaries rubber-band (§9).
    const onEnter = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') {
        drift = 0;
        wake();
      }
    };

    const onLeave = (event: PointerEvent) => {
      if (event.pointerType !== 'touch' && !dragging) {
        drift = this.reduceMotion ? 0 : MARQUEE_DRIFT;
        wake();
      }
    };

    this.zone.runOutsideAngular(() => {
      measure();
      track.addEventListener('pointerdown', onPointerDown);
      track.addEventListener('pointermove', onPointerMove);
      track.addEventListener('pointerup', onPointerUp);
      track.addEventListener('pointercancel', onPointerUp);
      track.addEventListener('pointerenter', onEnter);
      track.addEventListener('pointerleave', onLeave);
      window.addEventListener('resize', measure, { passive: true });
      wake();
    });

    this.destroyRef.onDestroy(() => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener('resize', measure);
    });
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
      // Content that is further from home is further from settled — the panel
      // reads as arriving rather than simply sliding.
      panel.style.setProperty('--travel', Math.min(1, Math.abs(value) / width).toFixed(4));
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
      offset.value = direction * width * 0.28;
      offset.velocity = 0;
      offset.target = 0;
      // Painted synchronously so the new content is never shown at rest for a
      // frame before the motion starts.
      paint(offset.value);
      wake();
    };

    const onPointerDown = (event: PointerEvent) => {
      // Desktop has the tab list and the keyboard; a mouse drag here would
      // only fight text selection (§16 flexibility).
      if (event.pointerType === 'mouse') {
        return;
      }

      activePointer = event.pointerId;
      axis = null;
      startX = event.clientX;
      startY = event.clientY;
      width = panel.offsetWidth || width;
      // Grabbing mid-flight continues from the presentation value, never from
      // the target (§3).
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
      // once intent is clear (§10).
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
      // grows instead of the panel stopping dead (§9).
      const resisted = (travel > 0 && atStart) || (travel < 0 && atEnd) ? rubberband(travel, width) : travel;

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
      // let go (§6).
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
        // the swap is invisible and it enters from the side it is heading to (§7).
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
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
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

  private toCurrency(value: number): string {
    const locale = LANGUAGES.find((language) => language.code === this.lang())?.locale ?? 'en-US';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
