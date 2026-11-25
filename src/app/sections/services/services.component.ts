import {
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChildren
} from '@angular/core';
import { AnalyticsService } from '../../core/analytics.service';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly scroll = inject(ScrollService);
  private readonly analytics = inject(AnalyticsService);
  readonly t = inject(LanguageService).t;

  private readonly items = viewChildren<ElementRef<HTMLElement>>('item');

  readonly active = signal(0);
  readonly activeService = computed(() => this.t().services.items[this.active()]);

  constructor() {
    afterNextRender(() => {
      const seen = new Set<number>();

      // The console follows whichever capability sits in the middle band of the screen.
      const stops = this.items().map(({ nativeElement }, index) =>
        this.scroll.track(nativeElement, ({ rect, viewportHeight }) => {
          const middle = viewportHeight * 0.5;
          if (rect.top <= middle && rect.bottom > middle && this.active() !== index) {
            this.zone.run(() => this.active.set(index));

            if (!seen.has(index)) {
              seen.add(index);
              this.analytics.capture('service_viewed', { service: this.t().services.items[index].key });
            }
          }
        })
      );

      this.destroyRef.onDestroy(() => stops.forEach((stop) => stop()));
    });
  }
}
