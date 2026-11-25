import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { THEME_ORDER, ThemeService } from '../../core/theme.service';
import { BrandMarkComponent } from '../brand-mark.component';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [BrandMarkComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss'
})
export class SiteFooterComponent {
  readonly language = inject(LanguageService);
  readonly theme = inject(ThemeService);
  readonly t = this.language.t;
  readonly year = new Date().getFullYear();

  readonly themeChoices = computed(() => {
    const labels = this.t().header.theme;
    return THEME_ORDER.map((value) => ({ value, label: labels[value] }));
  });
}
