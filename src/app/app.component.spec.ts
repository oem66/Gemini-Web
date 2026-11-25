import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LanguageService } from './core/language.service';
import { en } from './core/i18n';

describe('AppComponent', () => {
  beforeEach(async () => {
    localStorage.removeItem('gemini-lang');
    document.documentElement.lang = 'en';

    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();
  });

  function render() {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    return { fixture, element: fixture.nativeElement as HTMLElement };
  }

  it('renders every section the navigation points to', () => {
    const { element } = render();
    for (const id of ['top', 'services', 'approach', 'difference', 'faq', 'contact']) {
      expect(element.querySelector(`#${id}`)).withContext(id).not.toBeNull();
    }
  });

  it('has a section for every navigation link', () => {
    const { element } = render();
    for (const item of en.header.nav) {
      expect(element.querySelector(`section#${item.id}`)).withContext(item.id).not.toBeNull();
    }
  });

  it('renders the hero headline, with a real space between its lines', () => {
    const { element } = render();
    const expected = en.hero.title.join(' ');
    expect(element.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()).toBe(expected);
  });

  it('switches content when the language changes', async () => {
    const { fixture, element } = render();
    const language = TestBed.inject(LanguageService);

    await language.set('de');
    fixture.detectChanges();
    expect(element.querySelector('h1')?.textContent).toContain('Probleme verschwinden.');
    expect(document.documentElement.lang).toBe('de');

    await language.set('fr');
    fixture.detectChanges();
    expect(element.querySelector('h1')?.textContent).toContain('les problèmes complexes.');
  });

  it('keeps the latest choice when languages are switched quickly', async () => {
    const { fixture, element } = render();
    const language = TestBed.inject(LanguageService);

    await Promise.all([language.set('sv'), language.set('it')]);
    fixture.detectChanges();
    expect(language.lang()).toBe('it');
    expect(element.querySelector('h1')?.textContent).toContain('i problemi difficili.');
  });

  it('shows no phone number, email address or location anywhere on the page', () => {
    const { element } = render();
    const text = element.textContent ?? '';
    const links = Array.from(element.querySelectorAll('a')).map((link) => link.getAttribute('href') ?? '');

    expect(text).not.toMatch(/St\.?\s*Gallen|Switzerland/i);
    expect(text).not.toMatch(/[\w.-]+@[\w-]+\.[a-z]{2,}/i);
    expect(links.filter((href) => /^(mailto|tel):/.test(href))).toEqual([]);
    expect(links.filter((href) => /facebook|instagram/.test(href))).toEqual([]);
  });

  it('shows no placeholder clients, testimonials or metrics', () => {
    const { element } = render();
    expect(element.textContent).not.toMatch(/Siemens|Bosch|Telekom|ICA Banken|Department of Justice/);
    expect(element.textContent).not.toMatch(/\d+\s?%/);
  });

  it('offers the project form', () => {
    const { element } = render();
    expect(element.querySelector('#contact form')).not.toBeNull();
  });
});
