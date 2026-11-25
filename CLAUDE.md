# Gemini — geminiswe.com

Marketing site for Gemini, an AI-native engineering studio: AI agents,
process automation, intelligent web and mobile products, data and document AI,
and integration of existing systems. It is a single page built with Angular 17
(standalone components and signals), with copy in six languages, and it
deploys to GitHub Pages from `main`.

- `npm start`: dev server at http://localhost:4200
- `npm run build:github`: production build at the domain root (what CI deploys)
- `npm test`: Karma unit tests

| Concern | Where |
| --- | --- |
| Design tokens (type, colour, space, motion, both schemes) | `src/styles.scss` |
| Page composition and section order | `src/app/app.component.{html,ts}` |
| One component per section | `src/app/sections/<name>/` |
| Header, footer and the G monogram | `src/app/layout/` |
| All copy, one file per language (EN bundled, others lazy) | `src/app/core/i18n/` |
| Language, theme and the shared scroll loop | `src/app/core/*.service.ts` |
| Hero canvas field (friction → flow) | `src/app/sections/hero/resolve-field.ts` |
| Project form rules and delivery (FormSubmit) | `src/app/sections/contact/`, `src/assets/contact-config.js` |
| Spring, velocity and rubber-band primitives | `src/app/core/motion.ts` |
| Theme resolution before first paint | inline script in `src/index.html` |
| Interaction and motion reference | `apple-design.md` |
| Analytics events and privacy | `ANALYTICS.md`, `src/app/core/analytics.service.ts` |

## Design Context

Product truth lives in **`PRODUCT.md`**: users, positioning, voice, evidence
and open decisions. Read it before any design or copy work. The short version:
the readers are CTOs and product leads in DACH and the Nordics; the personality
is **precise, calm, confident**; and Gemini is a small senior team that uses
whatever current AI and automation technology fits the problem.

> **The site shows no client names, testimonials, case studies or impact
> metrics, because none are real and cleared yet.** The old placeholders
> (Siemens, Bosch, Deutsche Telekom, ICA Banken, Department of Justice, 41% /
> 82% / 29% / "under 90 days") were removed on 2026-11-25. Never bring them
> back, and never invent replacements — not even inside the illustrative
> "example run" consoles. `i18n.spec.ts` and `app.component.spec.ts` fail if
> they reappear. See PRODUCT.md → Evidence on Hand.

### Aesthetic direction: friction → flow

Chosen by the owner on 2026-11-25, replacing the earlier Swiss editorial
system. Every part of the page shows a problem dissolving into an outcome.

**Hard rules of the visual system:**

- **Colour has meaning, not decoration.** `--friction` (coral) marks problems
  only. The `--flow` gradient (mint → blue → violet) marks value only: outcomes,
  deliverables, results, the selected choice. Nothing decorative may use either.
  Everything else is ink on the background in the `--ink`, `--ink-muted` and
  `--ink-faint` steps.
- **One typeface: Mona Sans** (variable, weight 200–900, width 75–125%). Width
  carries meaning like colour does: `--width-friction` (75%) for problems,
  `--width-heading` (112%) for headings, `--width-flow` (125%) for outcomes.
  The only other face is the system monospace, used inside the example-run
  consoles and nowhere else.
- **Dark ultramarine is the native scheme; light porcelain is the same design
  relit.** Every colour change goes through the `light-scheme` mixin. The
  scheme follows the time of day and the OS preference, can be overridden from
  the header, and is resolved before first paint.
- **Radius follows hierarchy:** controls are pills (`--radius-control`), fields
  are soft (`--radius-field`), panels are softer (`--radius-panel`). Sections
  themselves are not boxed; they are separated by space and hairline `--line`s.
- **The example-run console is a screen**, so it stays dark in both schemes.
- Use the tokens; never hard-code a hex value in component styles (the console
  and the canvas palette fallback are the documented exceptions).

**One bold moment.** The hero field — particles that drift as friction and
settle into converging flow lanes as the visitor scrolls — is the signature.
Everything around it stays quiet. Don't add a second competing spectacle.

**Anti-references.** Generic SaaS kits (identical rounded cards with soft grey
shadows, gradient washes as background decoration, emoji icons, stock 3D
blobs), neon-on-black "AI agency" templates with chrome orbs, logo walls and
testimonial carousels used as filler.

### Design principles

1. **Proof or nothing.** Only real, cleared evidence appears. An empty slot is
   better than a fabricated client, quote or number.
2. **Technology-agnostic.** Sell outcomes and the ability to pick the best
   current tool, not a stack. Don't name specific vendors or frameworks in copy.
3. **Motion means something.** Scroll-linked effects must show the
   friction → flow idea (striking out a problem, lighting an outcome, filling
   a step). All scroll effects run through `ScrollService` — one rAF loop that
   reads every rect before writing, gated by IntersectionObserver — and write
   CSS custom properties, never component state. Things the user touches get
   immediate, interruptible feedback.
4. **Performance is part of the design.** Keep the initial bundle under the
   500 kB budget: non-English copy and PostHog are lazy-loaded; the canvas
   pauses off-screen and in hidden tabs; animate only transform and opacity on
   anything that runs continuously.
5. **Every language is a first-class layout.** German and French run 20–35%
   longer than English. Check the hero (its size is measured to fit),
   headings, buttons and the form in DE before calling a layout done.

### Accessibility

- Target **WCAG 2.2 AA**. Contrast on `--bg` (dark / light):
  - `--ink-muted`: 8.6 / 6.8. Fine for any text.
  - `--ink-faint`: 5.6 / 5.1 (5.2 / 5.6 on `--bg-raised`). Fine for small text.
  - `--friction`: 7.2 / 4.6. `--flow` stops: 7.7–13.6 / 4.5–5.4.
- Keep the skip link, visible `:focus-visible` states, `aria-label`s on
  icon-only controls, and the semantic `section` / `header` / `nav` structure.
- Honour `prefers-reduced-motion`: the hero field renders its resolved state as
  a still, scroll effects show their end state, reveals are static.
- The project form uses native checkboxes and radios, labels every field,
  reports errors inline (never before the visitor has had a chance), and moves
  focus to the step heading or the first invalid field.
- Touch targets are at least 44×44 CSS px on coarse pointers.
