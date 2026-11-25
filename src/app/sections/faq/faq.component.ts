import { Component, inject, signal } from '@angular/core';
import { AnalyticsService } from '../../core/analytics.service';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  private readonly analytics = inject(AnalyticsService);
  readonly t = inject(LanguageService).t;

  /** The first answer starts open so the pattern explains itself. */
  readonly open = signal<ReadonlySet<number>>(new Set([0]));

  toggle(index: number): void {
    const next = new Set(this.open());
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
      this.analytics.capture('faq_opened', { index: index + 1 });
    }
    this.open.set(next);
  }
}
