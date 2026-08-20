# PostHog analytics

The Angular site includes PostHog product analytics, web analytics, heatmaps,
session replay, browser error tracking, and Web Vitals.

## Activate the integration

1. Create or select the PostHog Cloud project in its configured region. This
   site currently uses **US Cloud**.
2. Open **Project settings → Web analytics** and enable **Cookieless server hash mode**.
3. Copy the project's public token from **Project settings**.
4. Paste it into `src/assets/analytics-config.js` as `posthogKey`.
5. Deploy the site and open PostHog's **Live events** view to confirm `$pageview`
   and `section_viewed` events arrive.

The configuration asset is copied without a filename hash, so a hosting pipeline
may also replace it after `npm run build` at
`dist/client/assets/analytics-config.js`.

To print SDK diagnostics in the browser during setup, temporarily set `debug` to
`true` in the same configuration file. Keep it `false` in production.

## What is tracked

PostHog automatically captures:

- Page views and page leaves, including SPA history navigation
- Clicks, changes, and form interactions
- Heatmaps, dead clicks, and rage clicks
- Session replays with every input value masked
- Browser exceptions and unhandled promise rejections
- Network timing and Core Web Vitals (LCP, CLS, FCP, and INP)
- PostHog's built-in maximum scroll-depth properties

Stable named events are also emitted for reporting and funnels:

| Event | Meaning |
| --- | --- |
| `cta_clicked` | A primary call to action was selected |
| `navigation_clicked` | Header, mobile, or footer navigation was used |
| `service_link_clicked` | A footer service link was selected |
| `direct_contact_clicked` | The email or phone contact link was selected |
| `contact_form_submitted` | The contact form passed validation |
| `contact_form_validation_failed` | The visitor tried to submit an empty or invalid email |
| `section_viewed` | A page section first entered the viewport |
| `scroll_depth_reached` | The visit crossed 25%, 50%, 75%, 90%, or 100% scroll depth |
| `engaged_time_reached` | The page remained visible for 10, 30, 60, 120, or 300 seconds |
| `use_case_viewed` | An AI Lab use case was selected or swiped to |
| `language_changed` | The site's language was changed |
| `theme_changed` | The visitor changed the theme preference |
| `mobile_menu_opened` / `mobile_menu_closed` | Mobile navigation state changed |

Useful first funnels are:

1. `$pageview` → `section_viewed` (`contact`) → `contact_form_submitted`
2. `$pageview` → `cta_clicked` (`target = contact`) → `contact_form_submitted`
3. `$pageview` → `section_viewed` (`projects`) → `direct_contact_clicked`

## Privacy controls

- PostHog runs with `cookieless_mode: 'always'` and `person_profiles: 'never'`.
- The SDK does not use PostHog cookies, local storage, or session storage and does
  not identify visitors.
- Input values are masked in session replay.
- The contact form is excluded from autocapture. Its named events never include
  the visitor's email address.
- Session replay console-log capture is disabled.

Review the site's privacy notice and PostHog project-level IP collection setting
for the jurisdictions where the site operates. The EU project region disables IP
capture by default for new organizations, but that dashboard setting remains the
source of truth.
