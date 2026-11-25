import { en } from './en';
import { LanguageCode, LanguageOption, SiteContent } from './types';

export * from './types';
export { en };

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', locale: 'en-GB' },
  { code: 'de', name: 'Deutsch', locale: 'de-DE' },
  { code: 'no', name: 'Norsk', locale: 'nb-NO' },
  { code: 'sv', name: 'Svenska', locale: 'sv-SE' },
  { code: 'fr', name: 'Français', locale: 'fr-FR' },
  { code: 'it', name: 'Italiano', locale: 'it-IT' }
];

/**
 * English ships in the main bundle as the fallback; every other language is
 * its own small chunk, fetched only by visitors who need it.
 */
const LOADERS: Record<LanguageCode, () => Promise<SiteContent>> = {
  en: () => Promise.resolve(en),
  de: () => import('./de').then((module) => module.de),
  no: () => import('./no').then((module) => module.no),
  sv: () => import('./sv').then((module) => module.sv),
  fr: () => import('./fr').then((module) => module.fr),
  it: () => import('./it').then((module) => module.it)
};

export function loadTranslation(code: LanguageCode): Promise<SiteContent> {
  return LOADERS[code]();
}

/** Replaces `{name}` placeholders in a translated template. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match
  );
}
