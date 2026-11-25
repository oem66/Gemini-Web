import {
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-voices',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './voices.component.html',
  styleUrl: './voices.component.scss'
})
export class VoicesComponent {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly reducedMotion = inject(ScrollService).reducedMotion;
  readonly t = inject(LanguageService).t;

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

  readonly atStart = signal(true);
  readonly atEnd = signal(false);

  constructor() {
    afterNextRender(() => {
      const track = this.track().nativeElement;
      let queued = false;

      const update = () => {
        queued = false;
        const start = track.scrollLeft <= 4;
        const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
        if (start !== this.atStart() || end !== this.atEnd()) {
          this.zone.run(() => {
            this.atStart.set(start);
            this.atEnd.set(end);
          });
        }
      };

      const onScroll = () => {
        if (!queued) {
          queued = true;
          requestAnimationFrame(update);
        }
      };

      this.zone.runOutsideAngular(() => {
        track.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
      });
      update();

      this.destroyRef.onDestroy(() => {
        track.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      });
    });
  }

  /** Moves by one card, landing on a snap point. */
  page(direction: 1 | -1): void {
    const track = this.track().nativeElement;
    const card = track.querySelector<HTMLElement>('.quote');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = (card?.offsetWidth ?? track.clientWidth * 0.8) + gap;
    track.scrollBy({ left: direction * distance, behavior: this.reducedMotion ? 'auto' : 'smooth' });
  }
}
