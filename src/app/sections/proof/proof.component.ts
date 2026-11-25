import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { ScrollService } from '../../core/scroll.service';

const COUNT_MS = 1400;

@Component({
  selector: 'app-proof',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './proof.component.html',
  styleUrl: './proof.component.scss'
})
export class ProofComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly reducedMotion = inject(ScrollService).reducedMotion;
  readonly t = inject(LanguageService).t;

  private readonly metricsList = viewChild.required<ElementRef<HTMLElement>>('metrics');
  private readonly progress = signal(0);

  /**
   * Numbers count up once, when they first come into view. Word units ("days")
   * are set smaller than the figure; symbols ("%") stay full size.
   */
  readonly displays = computed(() =>
    this.t().proof.metrics.map((metric) => {
      const figure =
        metric.numeric === null ? metric.value : `${metric.prefix}${Math.round(metric.numeric * this.progress())}`;
      const unit = metric.numeric === null ? '' : metric.suffix;
      return { figure, unit: unit.trim(), wordUnit: /\p{L}/u.test(unit) };
    })
  );

  constructor() {
    afterNextRender(() => {
      if (this.reducedMotion || !('IntersectionObserver' in window)) {
        this.progress.set(1);
        return;
      }

      let frame = 0;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            return;
          }
          observer.disconnect();

          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / COUNT_MS);
            this.progress.set(1 - Math.pow(1 - t, 4));
            // Observer and frame callbacks run outside Angular's zone, so only
            // this component's view is refreshed — not the whole page, every frame.
            this.changeDetector.detectChanges();
            if (t < 1) {
              frame = requestAnimationFrame(step);
            }
          };
          frame = requestAnimationFrame(step);
        },
        { threshold: 0.4 }
      );

      observer.observe(this.metricsList().nativeElement);
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        cancelAnimationFrame(frame);
      });
    });
  }
}
