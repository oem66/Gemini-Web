import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild, viewChildren } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { ScrollService, clamp01 } from '../../core/scroll.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly scroll = inject(ScrollService);
  readonly t = inject(LanguageService).t;

  private readonly list = viewChild.required<ElementRef<HTMLElement>>('list');
  private readonly cards = viewChildren<ElementRef<HTMLElement>>('card');

  constructor() {
    afterNextRender(() => {
      if (this.scroll.reducedMotion) {
        return;
      }

      // On wide screens the cards are sticky and stack; each one recedes a
      // little as the next slides over it, so depth reads without shadows.
      const stop = this.scroll.track(this.list().nativeElement, () => {
        const cards = this.cards().map((card) => card.nativeElement);
        if (window.innerWidth < 1024) {
          return;
        }

        const rects = cards.map((card) => card.getBoundingClientRect());
        cards.forEach((card, index) => {
          const next = rects[index + 1];
          const cover = next ? clamp01(1 - (next.top - rects[index].top) / rects[index].height) : 0;
          card.style.setProperty('--cover', cover.toFixed(3));
        });
      });

      this.destroyRef.onDestroy(stop);
    });
  }
}
