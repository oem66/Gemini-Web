import { Directive, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

let sharedObserver: IntersectionObserver | null = null;

function observer(): IntersectionObserver {
  sharedObserver ??= new IntersectionObserver(
    (records) => {
      for (const record of records) {
        if (record.isIntersecting) {
          record.target.classList.add('is-in');
          sharedObserver?.unobserve(record.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  return sharedObserver;
}

/**
 * Adds `is-in` the first time an element scrolls into view. What that looks
 * like is up to the stylesheet; without JavaScript or IntersectionObserver the
 * class is added straight away so nothing stays hidden.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' }
})
export class RevealDirective implements OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        this.element.classList.add('is-in');
        return;
      }
      observer().observe(this.element);
    });
  }

  ngOnDestroy(): void {
    sharedObserver?.unobserve(this.element);
  }
}
