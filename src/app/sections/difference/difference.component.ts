import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';

@Component({
  selector: 'app-difference',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './difference.component.html',
  styleUrl: './difference.component.scss'
})
export class DifferenceComponent {
  readonly t = inject(LanguageService).t;
}
