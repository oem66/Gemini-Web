/*
 * Where the project form sends requests.
 *
 * FormSubmit (https://formsubmit.co) relays each request to the inbox in the
 * URL — no account or server needed, which suits a static GitHub Pages site.
 *
 * One-time setup: the very first request triggers an "Activate Form" email to
 * that inbox. Click it, and every request after that is delivered. The same
 * email contains a random alias; paste it in place of the address below
 * (https://formsubmit.co/ajax/<alias>) so the address no longer appears in the
 * page source.
 *
 * Kept as an unhashed asset so the endpoint can change without a rebuild.
 */
window.__GEMINI_CONTACT__ = {
  endpoint: 'https://formsubmit.co/ajax/omer.rahmanovic@outlook.com'
};
