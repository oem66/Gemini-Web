/**
 * The shape every language file fills in.
 *
 * Content is grouped by the section that renders it, so a translator can work
 * through one file top to bottom in the same order a visitor reads the page.
 */

export type LanguageCode = 'en' | 'de' | 'no' | 'sv' | 'fr' | 'it';

export interface LanguageOption {
  code: LanguageCode;
  /** The language's own name for itself. */
  name: string;
  locale: string;
}

export interface NavItem {
  label: string;
  /** Id of the section the link scrolls to. */
  id: string;
}

export interface Metric {
  /** Animated from 0 when the number scrolls into view; `null` shows `value` as is. */
  numeric: number | null;
  prefix: string;
  suffix: string;
  value: string;
  label: string;
  detail: string;
}

export interface ShiftRow {
  problem: string;
  outcome: string;
}

export interface Service {
  /** Stable key used for analytics and form preselection — never translated. */
  key: ServiceKey;
  name: string;
  summary: string;
  points: string[];
  /** An illustrative run of the automation, shown line by line in the console. */
  log: string[];
  result: string;
}

export type ServiceKey = 'agents' | 'automation' | 'products' | 'data' | 'documents' | 'integration';

export interface ApproachStep {
  name: string;
  time: string;
  description: string;
  deliverable: string;
}

export interface DifferenceRow {
  aspect: string;
  traditional: string;
  gemini: string;
}

export interface Project {
  client: string;
  title: string;
  challenge: string;
  result: string;
  tags: string[];
}

export interface Quote {
  client: string;
  role: string;
  text: string;
  impact: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChoiceOption {
  /** Stable value sent with the request — never translated. */
  value: string;
  label: string;
}

export interface MessageStarter {
  label: string;
  text: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  header: {
    nav: NavItem[];
    cta: string;
    menuOpen: string;
    menuClose: string;
    languageLabel: string;
    theme: { label: string; auto: string; light: string; dark: string };
  };
  hero: {
    /** Each entry is set on its own line. */
    title: string[];
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    legendLabel: string;
    legendFriction: string;
    legendFlow: string;
    scrollHint: string;
  };
  proof: {
    clientsLabel: string;
    clients: string[];
    metricsLabel: string;
    metrics: Metric[];
  };
  shift: {
    title: string;
    copy: string;
    problemLabel: string;
    outcomeLabel: string;
    rows: ShiftRow[];
  };
  services: {
    title: string;
    copy: string;
    consoleLabel: string;
    consoleNote: string;
    items: Service[];
  };
  approach: {
    title: string;
    copy: string;
    deliverableLabel: string;
    steps: ApproachStep[];
  };
  difference: {
    title: string;
    copy: string;
    aspectLabel: string;
    traditionalLabel: string;
    geminiLabel: string;
    rows: DifferenceRow[];
    cta: string;
  };
  work: {
    title: string;
    copy: string;
    challengeLabel: string;
    resultLabel: string;
    projects: Project[];
  };
  voices: {
    title: string;
    copy: string;
    previous: string;
    next: string;
    quotes: Quote[];
  };
  faq: {
    title: string;
    copy: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    copy: string;
    nextLabel: string;
    nextSteps: string[];
    note: string;
    form: {
      stepLabels: string[];
      /** "Step {current} of {total}" */
      progress: string;
      servicesTitle: string;
      servicesHint: string;
      services: ChoiceOption[];
      servicesError: string;
      budgetTitle: string;
      budgets: ChoiceOption[];
      timelineTitle: string;
      timelines: ChoiceOption[];
      optional: string;
      messageTitle: string;
      messageLabel: string;
      messagePlaceholder: string;
      messageError: string;
      /** "{count} characters" */
      messageCount: string;
      startersLabel: string;
      starters: MessageStarter[];
      contactTitle: string;
      nameLabel: string;
      nameError: string;
      emailLabel: string;
      emailPlaceholder: string;
      emailError: string;
      companyLabel: string;
      privacy: string;
      continue: string;
      back: string;
      submit: string;
      sending: string;
      failed: string;
      retry: string;
      sentTitle: string;
      /** "Thanks, {name}. We'll reply to {email} within two business days." */
      sentCopy: string;
      sentAgain: string;
      summaryLabel: string;
    };
  };
  footer: {
    blurb: string;
    exploreLabel: string;
    settingsLabel: string;
    startProject: string;
    backToTop: string;
    rights: string;
  };
}
