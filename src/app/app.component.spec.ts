import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LANGUAGES, TRANSLATIONS } from './i18n';

describe('AppComponent', () => {
  beforeEach(async () => {
    localStorage.removeItem('gemini-lang');

    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should provide translations for all supported languages', () => {
    for (const language of LANGUAGES) {
      const content = TRANSLATIONS[language.code];
      expect(content).withContext(language.code).toBeTruthy();
      expect(content.navItems.length).withContext(language.code).toBe(6);
      expect(content.capabilities.length).withContext(language.code).toBe(6);
      expect(content.hero.lead.length).withContext(language.code).toBeGreaterThan(0);
    }
  });

  it('should render the hero heading in the active language', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const expected = TRANSLATIONS[app.lang()].hero.titleLead;
    expect(compiled.querySelector('h1')?.textContent).toContain(expected);
  });

  it('should switch content when the language changes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.setLanguage('de');
    fixture.detectChanges();
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Mobile Apps. Web-Plattformen.');

    app.setLanguage('fr');
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Apps mobiles. Plateformes web.');
  });
});
