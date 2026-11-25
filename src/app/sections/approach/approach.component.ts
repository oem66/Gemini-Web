import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { ScrollService, clamp01 } from '../../core/scroll.service';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './approach.component.html',
  styleUrl: './approach.component.scss'
})
export class ApproachComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly scroll = inject(ScrollService);
  readonly t = inject(LanguageService).t;

  private readonly timeline = viewChild.required<ElementRef<HTMLElement>>('timeline');

  constructor() {
    afterNextRender(() => {
      const element = this.timeline().nativeElement;

      if (this.scroll.reducedMotion) {
        element.style.setProperty('--p', '1');
        return;
      }

      // The line fills as the steps travel up the screen; each step lights up
      // when the line reaches it (see the stylesheet).
      const stop = this.scroll.track(element, ({ rect, viewportHeight }) => {
        const wide = window.innerWidth >= 1024;
        const progress = wide
          ? clamp01((viewportHeight * 0.9 - rect.top) / (viewportHeight * 0.5))
          : clamp01((viewportHeight * 0.6 - rect.top) / rect.height);
        element.style.setProperty('--p', progress.toFixed(3));
      });

      this.destroyRef.onDestroy(stop);
    });
  }
}
