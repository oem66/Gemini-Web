interface Window {
  __GEMINI_ANALYTICS__?: {
    posthogKey?: string;
    posthogHost?: string;
    debug?: boolean;
  };
  __GEMINI_CONTACT__?: {
    /** POST endpoint that accepts JSON and relays the request by email. */
    endpoint?: string;
  };
}
