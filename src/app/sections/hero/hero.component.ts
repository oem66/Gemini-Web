import {
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  computed,
  effect,
  inject,
  viewChild
} from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { ScrollService, clamp01 } from '../../core/scroll.service';
import { ThemeService } from '../../core/theme.service';
import { FieldPalette, ResolveField, parseHex } from './resolve-field';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly scroll = inject(ScrollService);
  private readonly themeService = inject(ThemeService);

  readonly t = inject(LanguageService).t;

  private readonly section = viewChild.required<ElementRef<HTMLElement>>('section');
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly title = viewChild.required<ElementRef<HTMLElement>>('title');

  /** A first estimate for the headline size, used until it can be measured. */
  readonly longestLine = computed(() => Math.max(...this.t().hero.title.map((line) => line.length)));

  private field: ResolveField | null = null;

  constructor() {
    afterNextRender(() => this.zone.runOutsideAngular(() => this.setup()));

    // The field draws with the theme's colours, so it repaints when they change.
    effect(() => {
      this.themeService.theme();
      requestAnimationFrame(() => this.field?.setPalette(readPalette()));
    });

    // A new language means new line lengths; refit once the text is rendered.
    effect(() => {
      this.t();
      setTimeout(() => this.fitHeadline());
    });
  }

  /**
   * Sizes the headline so its widest line exactly fills the measure at full
   * width. It is measured, not estimated, because character widths differ
   * between languages — and because the lines expand on arrival, a headline
   * that fits at full width can never reflow during that motion.
   */
  private fitHeadline(): void {
    const title = this.title().nativeElement;
    if (window.innerWidth < 768) {
      title.style.removeProperty('--fit-size');
      return;
    }

    const probe = title.cloneNode(true) as HTMLElement;
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'position:absolute;top:0;left:0;visibility:hidden;pointer-events:none;font-size:100px;';
    const lines = Array.from(probe.querySelectorAll<HTMLElement>('.line'));
    for (const line of lines) {
      line.style.cssText = 'display:inline-block;font-stretch:118%;transition:none;';
    }

    title.parentElement?.appendChild(probe);
    const widest = Math.max(...lines.map((line) => line.getBoundingClientRect().width));
    probe.remove();

    const available = title.getBoundingClientRect().width;
    if (widest > 0 && available > 0) {
      const size = Math.min(136, (100 * available) / widest) * 0.985;
      title.style.setProperty('--fit-size', `${size.toFixed(2)}px`);
    }
  }

  private setup(): void {
    const section = this.section().nativeElement;
    const canvas = this.canvas().nativeElement;
    const reducedMotion = this.scroll.reducedMotion;

    // The headline expands from condensed to wide once Mona Sans is ready, so
    // the motion is never performed in a fallback face.
    const markReady = () => {
      this.fitHeadline();
      section.classList.add('is-ready');
    };
    const fallback = window.setTimeout(markReady, 1500);
    document.fonts?.ready.then(() => {
      clearTimeout(fallback);
      markReady();
    });

    let field: ResolveField;
    try {
      field = new ResolveField(canvas, { reducedMotion });
    } catch {
      return; // No canvas support: the hero still reads perfectly without it.
    }
    this.field = field;
    field.setPalette(readPalette());

    let lastWidth = 0;
    const resize = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      field.resize(width, height);
      if (Math.abs(width - lastWidth) > 1) {
        lastWidth = width;
        this.fitHeadline();
      }
    });
    resize.observe(canvas);

    // Run only while visible — a hidden hero should cost nothing.
    let onScreen = false;
    const sync = () => (onScreen && document.visibilityState === 'visible' ? field.start() : field.stop());
    const visibility = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    visibility.observe(canvas);
    document.addEventListener('visibilitychange', sync);

    const stopTracking = this.scroll.track(section, ({ rect, viewportHeight }) => {
      const travel = rect.height - viewportHeight;
      const progress = travel > 0 ? clamp01(-rect.top / travel) : 1;
      section.style.setProperty('--p', progress.toFixed(4));
      field.setProgress(progress);
    });

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        return;
      }
      const bounds = canvas.getBoundingClientRect();
      field.setPointer(event.clientX - bounds.left, event.clientY - bounds.top);
    };
    const onPointerLeave = () => field.clearPointer();
    section.addEventListener('pointermove', onPointerMove, { passive: true });
    section.addEventListener('pointerleave', onPointerLeave);

    this.destroyRef.onDestroy(() => {
      clearTimeout(fallback);
      resize.disconnect();
      visibility.disconnect();
      stopTracking();
      document.removeEventListener('visibilitychange', sync);
      section.removeEventListener('pointermove', onPointerMove);
      section.removeEventListener('pointerleave', onPointerLeave);
      field.destroy();
      this.field = null;
    });
  }
}

function readPalette(): FieldPalette {
  const style = getComputedStyle(document.documentElement);
  const read = (name: string, fallback: [number, number, number]) =>
    parseHex(style.getPropertyValue(name), fallback);

  return {
    friction: read('--friction', [255, 113, 131]),
    flow: [read('--flow-1', [93, 242, 207]), read('--flow-2', [114, 166, 255]), read('--flow-3', [182, 145, 255])]
  };
}
