# Gemini — geminiswe.com

Marketing site for Gemini, a software engineering studio that builds native
iOS/Android apps, web platforms, backends and AI automation. It is a single
page built with Angular 17 (standalone components and signals), with copy in
six languages, and it deploys to GitHub Pages from `main`.

- `npm start`: dev server at http://localhost:4200
- `npm run build:github`: production build at the domain root (what CI deploys)
- `npm test`: Karma unit tests

| Concern | Where |
| --- | --- |
| Design tokens (type, colour, grid, motion, dark scheme) | `src/styles.scss` |
| Page layout and components | `src/app/app.component.{html,scss,ts}` |
| All copy, in EN / DE / NO / SV / FR / IT | `src/app/i18n.ts` |
| Spring, velocity and rubber-band primitives | `src/app/motion.ts` |
| Theme resolution before first paint | inline script in `src/index.html` |
| Interaction and motion reference | `apple-design.md` |
| Analytics events and privacy | `ANALYTICS.md`, `src/app/analytics.service.ts` |

## Design Context

### Users

The primary reader is a **CTO, head of engineering or product lead** at a
mid-size or enterprise company, mostly in DACH and the Nordics. They are
deciding whether to trust an outside team with a product that matters.
Usually they arrive from a referral or a search, skim the page for a few
minutes, and look for evidence:

- engineering quality, which the code specimen and the stack shown on the page are there to prove
- delivery they can rely on, through process, timelines and named clients (Siemens, Bosch, Deutsche Telekom, ICA Banken)
- an easy next step that commits them to nothing, such as the free intro call

They are technical, so they distrust marketing gloss. Specifics persuade them
and superlatives put them off. Many read the page in German or a Nordic
language rather than English.

### Brand personality

**Precise. Calm. Confident.**

- **Voice:** plain, specific and unhurried. State what we do and what happened. Use numbers and names, not adjectives. No exclamation marks, hype words, or "revolutionary / cutting-edge / seamless".
- **Emotional goal:** the reader comes away thinking "these people are serious and will not waste my time." The page should feel quietly expensive, never loud.
- **Confidence comes from restraint.** It shows in generous space, decisive type, and one accent colour that is used rarely.

### Aesthetic direction: Swiss editorial, with Apple-grade motion

This is a print sensibility applied to a website. The look comes from the
Swiss system in `src/styles.scss`. The way things move and respond to input
comes from `apple-design.md`. These two sources do different jobs and must not
be mixed:

| Take from `apple-design.md` | Do **not** take from `apple-design.md` |
| --- | --- |
| Response on press, not on release (§1) | Translucent / `backdrop-filter` chrome (§12) |
| Interruptible, spring-driven gestures (§3–6) | Shadows, elevation and "thicker material" depth |
| Rubber-banding at boundaries (§9) | Corner radii |
| Reduced-motion handling (§14) | Swapping in the system font for Archivo |
| Typography rules: size-specific tracking and leading (§15) | Scroll-edge blur masks, used instead of hairline rules |

**Hard rules of the visual system (they are deliberate, so don't "improve" them away):**

- **No shadows, gradients, glass or border-radius anywhere.** The grid and the type create depth, not effects.
- **Hairline rules (`--hairline`, `--rule`, `--rule-strong`) are the only structural device.** Separate content with rules and space, never with cards or boxes.
- **The grid is asymmetric:** a narrow label rail on the left and content on the right. Section heads follow the `section-head` / `section-intro` pattern.
- **One typeface carries the hierarchy.** Archivo (variable, 400–700) is the only sans; levels differ by size and weight. IBM Plex Mono is used only for labels, figures and code. Don't add a third family.
- **The type scale has decisive jumps.** Use the `--text-*` tokens; never pick a size between two steps. Use the `--tracking-*` and `--leading-*` tokens: tight at display sizes, open for small labels.
- **One accent** (`--accent`, rust/orange-red). Use it for links, the odd rule and the primary button hover, and nowhere else. The hero's second line gets its emphasis from `--ink-faint` at display size, not from the accent. `--positive` / `--negative` are for status only and never decorative.
- **Palette:** warm newsprint paper with warm ink. Use only the tokens and never hard-code a hex value in component styles. `section-invert` blocks swap paper and ink, which gives the page rhythm.
- **Dark scheme is the same design relit**, not a separate theme. Every colour change goes through the `dark-scheme` mixin. The scheme follows the time of day and the OS preference, can be overridden from the header control, and is resolved before first paint.

**Anti-references.** Avoid these looks: the generic SaaS landing page
(gradient blobs, glassmorphism, rounded cards on soft shadows, emoji icons,
stock 3D illustrations), the "AI agency" aesthetic (neon on black, particles,
glowing orbs), and logo walls and testimonial carousels that read as filler.

**Reference points.** Aim for Swiss and International Typographic Style
posters, newspaper and annual-report layouts, and studio sites that let the
typography do the work.

### Design principles

1. **Evidence over adjectives.** Every section should prove a claim with a number, a name, real code or a concrete outcome. If a block only asserts something, cut it or make it specific.
2. **Structure is visible.** The hairline grid should be legible as a system. Align new elements to the existing rail and column lines; don't float them.
3. **Restraint is the brand.** Before adding a colour, a weight, an effect or an animation, ask whether size, weight or space can do the job instead. Usually one of them can.
4. **Motion is small, fast and interruptible.** Reveals are an 8px rise plus a fade (`.reveal`). Things fade and settle; they never fly in. Use springs (`src/app/motion.ts`) for anything the user can touch, such as the use-case swipe, and CSS transitions only for hover and state changes. Press feedback happens on pointer-down.
5. **Every language is a first-class layout.** German and French strings run 20–35% longer than English. Test headings, buttons, nav and the hero in DE before calling a layout done, and never size a container to fit the English string.

### Accessibility

- Target **WCAG 2.2 AA**. Contrast of the current tokens on `--paper`:
  - `--ink-muted`: about 7.4:1 (light) and 7.1:1 (dark). Fine for any text.
  - `--accent`: about 5.2:1 (light) and 6.7:1 (dark). Fine for text and links.
  - `--ink-faint`: **about 3.6:1 in both schemes.** It passes only for large text or non-text UI. Don't use it for body copy or small labels that carry meaning.
- Keep the skip link, visible `:focus-visible` states, `aria-label`s on icon-only controls, and the semantic `section` / `header` / `nav` structure.
- Honour `prefers-reduced-motion`: reveals must render statically, and springs and swipes must degrade to instant or cross-fade.
- Size spacing in `rem` so the layout survives the user's text-size setting. Touch targets must be at least 44×44 CSS px on coarse pointers.
