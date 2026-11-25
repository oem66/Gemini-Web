import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { AnalyticsService } from './analytics.service';
import { LANGUAGES, LanguageCode, SiteContent, en, loadTranslation } from './i18n';

const LANGUAGE_STORAGE_KEY = 'gemini-lang';

/** The active language and the content that goes with it. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly analytics = inject(AnalyticsService);
  private readonly loaded = new Map<LanguageCode, SiteContent>([['en', en]]);
  /** Guards against a slow download landing after a newer choice. */
  private request = 0;

  readonly languages = LANGUAGES;
  readonly lang = signal<LanguageCode>('en');
  private readonly content = signal<SiteContent>(en);
  readonly t = this.content.asReadonly();
  readonly locale = computed(
    () => LANGUAGES.find((language) => language.code === this.lang())?.locale ?? 'en-GB'
  );

  constructor() {
    // Title, description and `lang` follow the visitor's choice, so screen
    // readers pronounce the page correctly and shared tabs read sensibly.
    effect(() => {
      if (typeof document === 'undefined') {
        return;
      }

      const content = this.t();
      document.documentElement.lang = this.lang();
      document.title = content.meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description);
    });
  }

  /** Loads the visitor's language before the first render. Never rejects. */
  async init(): Promise<void> {
    await this.apply(detectInitialLanguage());
  }

  async set(code: string): Promise<void> {
    if (!isLanguageCode(code) || code === this.lang()) {
      return;
    }

    const previous = this.lang();
    if (!(await this.apply(code))) {
      return;
    }

    this.analytics.capture('language_changed', { from: previous, to: code });
    this.analytics.setContext({ site_language: code });

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    } catch {
      // Private mode or storage disabled — the choice still holds for this visit.
    }
  }

  /** Switches once the content is available. Returns whether this call won. */
  private async apply(code: LanguageCode): Promise<boolean> {
    const request = ++this.request;
    let content = this.loaded.get(code);

    if (!content) {
      try {
        content = await loadTranslation(code);
        this.loaded.set(code, content);
      } catch {
        // Offline or a failed chunk: stay in the current language rather than break.
        return false;
      }
    }

    if (request !== this.request) {
      return false;
    }

    this.content.set(content);
    this.lang.set(code);
    return true;
  }
}

export function isLanguageCode(value: string): value is LanguageCode {
  return LANGUAGES.some((language) => language.code === value);
}

function detectInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') {
    return 'en';
  }

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && isLanguageCode(stored)) {
      return stored;
    }
  } catch {
    // Storage unavailable — fall through to the browser language.
  }

  const browser = (navigator.language || '').toLowerCase();
  if (browser.startsWith('nb') || browser.startsWith('nn')) {
    return 'no';
  }

  const prefix = browser.slice(0, 2);
  return isLanguageCode(prefix) ? prefix : 'en';
}
