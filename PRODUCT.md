# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary user is a **CTO, head of engineering, operations lead or founder**
at a mid-size or enterprise company, mostly in DACH and the Nordics. Their job
is to decide whether to trust an outside team with a problem that matters:
repetitive operational work to automate, an AI assistant for customers or
staff, a new web or mobile product, or legacy systems to connect. They are
technical or work closely with technical people, distrust marketing gloss, and
judge a studio by how specifically it talks about the work.

## Product Purpose

geminiswe.com is the studio's marketing site. It exists to turn a qualified
buyer into a first conversation through the three-step project form. Success
means the reader leaves convinced that the team can make their problem go away
faster and for less than a traditional agency, and sends a request.

## Positioning

Since 2026-11-25 Gemini presents itself as an **AI-native engineering studio**:
a small senior team that combines current AI, autonomous agents and automation
to turn problems and ideas into working systems. The site deliberately does not
lead with any one technology; the promise is choosing the best current tool for
each problem. Three claims carry the page:

- **Faster:** a working prototype early, a short path to production.
- **Leaner:** AI and automation do the work that used to need large teams, so budget goes to outcomes rather than overhead.
- **More automated:** repetitive work — in the client's operations and in delivery itself (testing, documentation, reporting) — is automated.

Native mobile, web, backend and AI engineering remain real capabilities; they
are presented as outcomes ("intelligent products", "integration and
modernisation") rather than as a stack.

## Operating Context

- Readers usually arrive from a referral or a search, skim for a few minutes, and compare the studio against other vendors.
- Many read in German or a Nordic language rather than English. The site ships in EN, DE, NO, SV, FR and IT (`src/app/core/i18n/`), and every language is a full first-class version.
- Conversion happens through one path: the project form (goal → details → contact). The copy promises a reply within two business days and an NDA on request.

## Capabilities and Constraints

- Single-page Angular 17 site, deployed to GitHub Pages from `main` at the custom domain geminiswe.com.
- PostHog analytics is configured and loads after the page is idle (`ANALYTICS.md`). The visitor's name, email, company and message are never sent to analytics.
- Theme follows the time of day and the OS preference, and the reader can override it from the header.
- **No location and no personal contact details** appear on the site — no address, phone, email or personal social profiles. The owner asked for this on 2026-11-25. The project form is the only contact path.
- The project form delivers requests by email through FormSubmit (`src/assets/contact-config.js`). It needs a one-time activation from the receiving inbox. After activation, swap the address in the endpoint for FormSubmit's random alias so it leaves the page source.
- Resolved on 2026-11-25: the form now delivers; geminiswe.com is canonical for sharing (Open Graph points there); the footer social links and the `hello@gemini-digital.io` address were removed.

## Brand Commitments

- **Name:** Gemini, set beside the G monogram (the monogram's small square plays the part of the old full stop). The tagline in page metadata is "AI-native software and automation studio".
- **Voice:** precise, calm, confident. Plain and specific, using concrete situations rather than adjectives. No exclamation marks. The team speaks as "we".
- **Visual system (owner-chosen 2026-11-25):** friction → flow — coral for problems, a mint-to-violet gradient for value only, Mona Sans with its width axis carrying the same meaning, dark ultramarine as the native scheme. Details and hard rules are in `CLAUDE.md`.

## Evidence on Hand

- **Real:** the kinds of work the team delivers (AI agents and assistants, process automation, web and mobile products, data and document AI, integration and modernisation).
- **Absent:** real case studies, client names or logos, approved testimonials, impact metrics, team photography and pricing. The site therefore has no proof, work or testimonial section.
- **Removed on 2026-11-25:** the placeholder clients (Siemens, Bosch, Deutsche Telekom, Department of Justice, ICA Banken), their project highlights and quotes, and the placeholder metrics (41% shorter process times, 29% revenue uplift, 82% automation coverage, launch in under 90 days). None of these were real or cleared.
- Future work must not reintroduce them or invent replacements. The example-run consoles in "What we build" are labelled as illustrative and carry no invented figures; keep it that way. "Fast", "within weeks" and "a fraction of the usual cost" are the owner's qualitative claims; specific numbers need real evidence first.
- When real evidence is cleared, a proof section can return between the hero and "What disappears".

## Product Principles

1. **Proof or nothing.** Only real, cleared evidence appears on the site. An empty slot is better than a fabricated client, quote or metric, because buyers check.
2. **Specific beats superlative.** Every claim should name the situation or the outcome. If a sentence would fit any agency's site, rewrite it or cut it.
3. **Outcomes over stacks.** Lead with the problem that disappears, not the technology used to remove it.
4. **Every language is the product.** A German or Norwegian reader gets the same clarity and completeness as an English one.
5. **The next step costs nothing.** The path to a conversation stays short, free and honest about what happens next.

## Accessibility & Inclusion

Target **WCAG 2.2 AA** (token contrast is documented in `CLAUDE.md`). The site
provides a skip link, visible focus states, reduced-motion handling, an
accessible multi-step form and six languages; future work must not regress any
of these.
