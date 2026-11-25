import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { ScrollService, clamp01 } from '../../core/scroll.service';

@Component({
  selector: 'app-shift',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './shift.component.html',
  styleUrl: './shift.component.scss'
})
export class ShiftComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly scroll = inject(ScrollService);
  readonly t = inject(LanguageService).t;

  private readonly rows = viewChildren<ElementRef<HTMLElement>>('row');

  constructor() {
    afterNextRender(() => {
      // Each row resolves as it crosses the lower-middle of the screen: the
      // problem is struck out, the outcome lights up. Scrolling back undoes it.
      const stops = this.rows().map(({ nativeElement: row }) => {
        if (this.scroll.reducedMotion) {
          row.style.setProperty('--p', '1');
          return () => undefined;
        }

        return this.scroll.track(row, ({ rect, viewportHeight }) => {
          const progress = clamp01((viewportHeight * 0.8 - rect.top) / (viewportHeight * 0.3));
          row.style.setProperty('--p', progress.toFixed(3));
        });
      });

      this.destroyRef.onDestroy(() => stops.forEach((stop) => stop()));
    });
  }
}
