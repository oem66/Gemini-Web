import { Component, input } from '@angular/core';

let nextId = 0;

/**
 * The Gemini monogram — the same G as the favicon, drawn with theme tokens so
 * it inverts with the page. The small square is the one spot of flow colour:
 * the outcome, set beside the name.
 */
@Component({
  selector: 'app-brand-mark',
  standalone: true,
  template: `
    <svg viewBox="0 0 64 64" [attr.width]="size()" [attr.height]="size()" aria-hidden="true">
      <defs>
        <linearGradient [attr.id]="gradientId" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="var(--flow-1)" />
          <stop offset="0.52" stop-color="var(--flow-2)" />
          <stop offset="1" stop-color="var(--flow-3)" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="var(--ink)" />
      <path
        fill="var(--bg)"
        d="M35.350 45.825 L36.150 49.875 L41.150 49.875 L41.150 30.575 L26.150 30.575 L26.150 36.425 L34.050 36.425 Q33.700 40.175 31.575 42.150 Q29.450 44.125 25.550 44.125 Q22.900 44.125 21.050 43.100 Q19.200 42.075 18.050 40.375 Q16.900 38.675 16.375 36.550 Q15.850 34.425 15.850 32.175 Q15.850 29.825 16.375 27.625 Q16.900 25.425 18.050 23.700 Q19.200 21.975 21.050 20.950 Q22.900 19.925 25.550 19.925 Q28.400 19.925 30.400 21.425 Q32.400 22.925 33.100 25.925 L40.600 25.925 Q40.300 22.875 38.950 20.525 Q37.600 18.175 35.525 16.575 Q33.450 14.975 30.875 14.150 Q28.300 13.325 25.550 13.325 Q21.450 13.325 18.175 14.775 Q14.900 16.225 12.650 18.775 Q10.400 21.325 9.200 24.750 Q8.000 28.175 8.000 32.175 Q8.000 36.075 9.200 39.450 Q10.400 42.825 12.650 45.325 Q14.900 47.825 18.175 49.250 Q21.450 50.675 25.550 50.675 Q28.150 50.675 30.700 49.600 Q33.250 48.525 35.350 45.825 Z"
      />
      <rect x="48" y="42" width="9" height="9" rx="2" [attr.fill]="'url(#' + gradientId + ')'" />
    </svg>
  `,
  styles: [':host { display: inline-flex; }']
})
export class BrandMarkComponent {
  readonly size = input(26);
  readonly gradientId = `brand-mark-${nextId++}`;
}
