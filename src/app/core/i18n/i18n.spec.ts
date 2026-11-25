import { LANGUAGES, LanguageCode, SiteContent, format, loadTranslation } from './index';
import { de } from './de';
import { en } from './en';
import { fr } from './fr';
import { it as italian } from './it';
import { no } from './no';
import { sv } from './sv';

// Imported directly here; the app itself loads them on demand.
const TRANSLATIONS: Record<LanguageCode, SiteContent> = { en, de, no, sv, fr, it: italian };

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

/** Every path in `value`, with array lengths recorded so missing items show up. */
function shape(value: Json, path = ''): string[] {
  if (Array.isArray(value)) {
    return [`${path}[${value.length}]`, ...value.flatMap((item, index) => shape(item, `${path}[${index}]`))];
  }
  if (value !== null && typeof value === 'object') {
    return Object.keys(value)
      .sort()
      .flatMap((key) => shape(value[key], path ? `${path}.${key}` : key));
  }
  return [`${path}:${typeof value}`];
}

function strings(value: Json, path = ''): [string, string][] {
  if (typeof value === 'string') {
    return [[path, value]];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => strings(item, `${path}[${index}]`));
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => strings(item, path ? `${path}.${key}` : key));
  }
  return [];
}

const asJson = (value: unknown) => value as unknown as Json;

describe('translations', () => {
  const english = shape(asJson(en));

  for (const language of LANGUAGES) {
    describe(language.code, () => {
      const content = TRANSLATIONS[language.code];

      it('has exactly the same structure as English', () => {
        expect(shape(asJson(content))).toEqual(english);
      });

      it('has no empty strings', () => {
        // A metric's prefix is legitimately empty ("41%" has none).
        const empty = strings(asJson(content)).filter(
          ([path, text]) => text.trim().length === 0 && !path.endsWith('.prefix')
        );
        expect(empty.map(([path]) => path)).toEqual([]);
      });

      it('keeps the stable values used by analytics and the inbox', () => {
        expect(content.services.items.map((item) => item.key)).toEqual(en.services.items.map((item) => item.key));
        expect(content.header.nav.map((item) => item.id)).toEqual(en.header.nav.map((item) => item.id));

        const form = content.contact.form;
        expect(form.services.map((option) => option.value)).toEqual(en.contact.form.services.map((o) => o.value));
        expect(form.budgets.map((option) => option.value)).toEqual(en.contact.form.budgets.map((o) => o.value));
        expect(form.timelines.map((option) => option.value)).toEqual(en.contact.form.timelines.map((o) => o.value));
      });

      it('keeps every placeholder', () => {
        const form = content.contact.form;
        expect(form.progress).toContain('{current}');
        expect(form.progress).toContain('{total}');
        expect(form.messageCount).toContain('{count}');
        expect(form.sentCopy).toContain('{name}');
        expect(form.sentCopy).toContain('{email}');
      });

      it('sets the headline on exactly two lines', () => {
        expect(content.hero.title.length).toBe(2);
      });

      it('mentions no location or personal contact details', () => {
        const text = strings(asJson(content))
          .map(([, value]) => value)
          .join('\n');
        expect(text).not.toMatch(/St\.?\s*Gallen|Switzerland|Schweiz|Suisse|Svizzera|Sveits|Schweiz/i);
        expect(text).not.toMatch(/@gemini|\+\d[\d\s()-]{6,}|mailto:|tel:/i);
      });
    });
  }
});

describe('loadTranslation', () => {
  for (const language of LANGUAGES) {
    it(`loads ${language.code} on demand`, async () => {
      expect(await loadTranslation(language.code)).toBe(TRANSLATIONS[language.code]);
    });
  }
});

describe('format', () => {
  it('fills named placeholders', () => {
    expect(format('Step {current} of {total}', { current: 2, total: 3 })).toBe('Step 2 of 3');
  });

  it('leaves unknown placeholders untouched', () => {
    expect(format('Hello {name}', {})).toBe('Hello {name}');
  });
});
