# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary user is a **CTO, head of engineering or product lead** at a
mid-size or enterprise company, mostly in DACH and the Nordics. Their job is
to decide whether to trust an outside team with a product that matters: a
native mobile app, a web platform, a backend or an AI automation of an
operational workflow. They are technical, distrust marketing gloss, and judge
a studio by how specifically it talks about the work.

## Product Purpose

geminiswe.com is the studio's marketing site. It exists to turn a qualified
technical buyer into a first conversation: a free intro call, or an email
through the contact form. Success means the reader leaves convinced the team
is serious and senior, and takes that low-commitment next step.

## Positioning

Gemini is a **small senior team** that takes a product **from discovery to
production with no handoffs**. The people a client talks to are the people
who build it. Four claims hold together, and a neighbouring studio rarely
makes all of them truthfully:

- **Native-first:** real Swift/SwiftUI and Kotlin apps, not cross-platform wrappers, with the backend and web work around them.
- **Senior, end to end:** no juniors or subcontractors behind the senior people in the sales conversation.
- **Fast to production:** a short, predictable path to a live product.
- **Practical AI automation:** AI applied to real operational workflows with measurable outcomes, not demos.

## Operating Context

- Readers usually arrive from a referral or a search, skim for a few minutes, and compare the studio against other vendors.
- Many read in German or a Nordic language rather than English. The site ships in EN, DE, NO, SV, FR and IT (`src/app/i18n.ts`), and every language is a full first-class version.
- Conversion happens in one of two ways: booking a free intro call, or leaving a business email in the contact form. The copy promises a reply within two business days and an NDA on request.

## Capabilities and Constraints

- Single-page Angular 17 site, deployed to GitHub Pages from `main` at the custom domain geminiswe.com.
- PostHog analytics is integrated but dormant until a token is set (`ANALYTICS.md`). The visitor's email is never sent to analytics.
- Theme follows the time of day and the OS preference, and the reader can override it from the header.
- **Open: the contact form does not deliver anything.** `submitContact()` validates the address, fires an analytics event and shows "Request received", but the email goes nowhere. It has to be wired to a real inbox (or the promise removed) before the site relies on it.
- **Open: contact and domain details disagree.** The site's address is `hello@gemini-digital.io`, the Open Graph image points at `gemini.dev`, and the site lives at `geminiswe.com`. Which domain is canonical for email and sharing is undecided.
- **Open: footer social links** point at personal accounts and a bare `x.com` placeholder rather than studio profiles.

## Brand Commitments

- **Name:** Gemini, set as the wordmark "Gemini." with a full stop. The tagline in page metadata is "Software Engineering Studio".
- **Voice:** precise, calm, confident. Plain and specific, using names and numbers rather than adjectives. No hype vocabulary, no exclamation marks. The team speaks as "we".
- **Binding visual constraint (user-confirmed):** the redesign keeps the incumbent Swiss editorial look. `apple-design.md` governs motion and interaction only, not materials such as glass, shadows or radii.

## Evidence on Hand

- **Real:** the services and stack the team delivers (Swift/SwiftUI/UIKit, Kotlin, TypeScript frontends, backends and APIs, cloud and AI services).
- **Unconfirmed:** the hero code specimen, captioned as "from a production iOS client". Its origin hasn't been checked.
- **Placeholder, not real and not cleared:** every named client (Siemens, Bosch, Deutsche Telekom, Department of Justice, ICA Banken, "Global Retail Platform"), every project highlight, every testimonial quote and role, and every impact metric (41% shorter process times, 29% revenue uplift, 82% automation coverage, launch in under 90 days). All of it is in `src/app/i18n.ts` across all six languages and is currently live.
- Future work must not reuse, extend, translate or restyle these placeholders as if they were real. It must not invent new clients, quotes or numbers either. "Fast to production" is a true claim, but the specific "under 90 days" figure is unconfirmed.
- **Absent:** real case studies, client logos, approved testimonials, photography of the team, and pricing.

## Product Principles

1. **Proof or nothing.** Only real, cleared evidence appears on the site. An empty slot is better than a fabricated client, quote or metric, because technical buyers check.
2. **Specific beats superlative.** Every claim should name the technology, the situation or the outcome. If a sentence would fit any agency's site, rewrite it or cut it.
3. **Show who does the work.** The site sells a small senior team that builds what it sells. Nothing should imply a larger organisation, layers of account management or outsourced delivery.
4. **Every language is the product.** A German or Norwegian reader gets the same clarity and completeness as an English one. Copy and layout decisions are judged in all six languages.
5. **The next step costs nothing.** The path to a conversation stays short, free and honest about what happens next.

## Accessibility & Inclusion

No product-specific standard has been confirmed yet. **Open: confirm WCAG 2.2 AA as the target.** The incumbent site already provides a skip link, visible focus states, reduced-motion handling and six languages, and future work must not regress any of these.
