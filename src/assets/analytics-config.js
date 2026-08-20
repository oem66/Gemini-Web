/*
 * Runtime analytics configuration.
 *
 * PostHog project tokens are public client-side identifiers, not secrets. Keeping
 * this in an unhashed asset lets each deployment provide its own token without
 * rebuilding the Angular application.
 */
window.__GEMINI_ANALYTICS__ = {
  posthogKey: 'phc_kf3eWoX4V9wZEQQUiwfJzm3LYpVMjAYDxkjNFEzs5yVK',
  posthogHost: 'https://us.i.posthog.com',
  debug: false
};
