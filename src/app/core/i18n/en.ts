import { SiteContent } from './types';

export const en: SiteContent = {
  meta: {
    title: 'Gemini — AI-native software and automation studio',
    description:
      'Gemini combines frontier AI, autonomous agents and automation to turn hard problems into systems that run themselves — delivered faster and at lower cost.'
  },
  header: {
    nav: [
      { label: 'Services', id: 'services' },
      { label: 'Approach', id: 'approach' },
      { label: 'Why us', id: 'difference' },
      { label: 'FAQ', id: 'faq' }
    ],
    cta: 'Start a project',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageLabel: 'Language',
    theme: { label: 'Appearance', auto: 'Auto', light: 'Light', dark: 'Dark' }
  },
  hero: {
    title: ['We make hard', 'problems disappear.'],
    lead:
      'Gemini is an AI-native engineering studio. We combine frontier AI, autonomous agents and automation to turn your problems and ideas into working systems — faster, leaner and at a fraction of the usual cost.',
    primaryCta: 'Start a project',
    secondaryCta: 'See how it works',
    legendLabel: 'How to read this page',
    legendFriction: 'Friction: manual work, scattered data, slow decisions',
    legendFlow: 'Flow: automated, connected, measurable',
    scrollHint: 'Scroll to resolve'
  },
  shift: {
    title: 'What disappears when we start',
    copy:
      'Most businesses do not need more software. They need less friction. This is what usually goes away first.',
    problemLabel: 'Before',
    outcomeLabel: 'After',
    rows: [
      { problem: 'Hours of copy-paste between tools', outcome: 'Workflows that run on their own' },
      { problem: 'Support queues that never shrink', outcome: 'AI agents that resolve requests around the clock' },
      { problem: 'Data nobody has time to read', outcome: 'Forecasts and answers on demand' },
      { problem: 'Months of specs before anything works', outcome: 'A working prototype within weeks' },
      { problem: 'Legacy systems nobody dares to touch', outcome: 'Modernized step by step, without downtime' },
      { problem: 'Large teams and larger budgets', outcome: 'A lean senior team, amplified by AI' }
    ]
  },
  services: {
    title: 'What we build',
    copy:
      'We are not tied to one vendor or one stack. For every problem we pick the best of what is available right now — and combine it into one system that fits how you work.',
    consoleLabel: 'Example run',
    consoleNote: 'Illustrative run of a system like the ones we build.',
    items: [
      {
        key: 'agents',
        name: 'AI agents and assistants',
        summary:
          'Digital teammates that answer customers, qualify leads and handle back-office work around the clock — with a human in the loop where it matters.',
        points: [
          'Customer service and sales agents',
          'Internal assistants that know your business',
          'Chat, email and voice channels'
        ],
        log: [
          'New request: “Where is my order #48213?”',
          'Order found in the fulfilment system',
          'Delay detected, new delivery date confirmed',
          'Personal reply written and sent'
        ],
        result: 'Resolved automatically, no one interrupted'
      },
      {
        key: 'automation',
        name: 'Process automation',
        summary:
          'We find the repetitive work hiding in your operations and turn it into flows that run on their own, end to end.',
        points: [
          'Approvals, invoicing and onboarding',
          'Document intake and data entry',
          'Reports that write themselves'
        ],
        log: [
          'Supplier invoice received as PDF',
          'Line items read and matched to the order',
          'Difference under threshold, approved',
          'Booked in accounting, team notified'
        ],
        result: 'Processed end to end, no manual entry'
      },
      {
        key: 'products',
        name: 'Intelligent products',
        summary:
          'Web platforms and mobile apps with intelligence built into the core, not bolted on — designed, engineered and launched end to end.',
        points: [
          'Web platforms and customer portals',
          'Mobile apps for every platform',
          'SaaS products and internal tools'
        ],
        log: [
          'Idea: a field-service app with an AI assistant',
          'Clickable prototype tested with real users',
          'Feedback applied, design finalised',
          'Released to the App Store and Google Play'
        ],
        result: 'From idea to launch in weeks, not quarters'
      },
      {
        key: 'data',
        name: 'Data and decision intelligence',
        summary:
          'Turn scattered data into forecasts, alerts and dashboards your team actually uses to decide faster.',
        points: [
          'Forecasting and anomaly detection',
          'Live dashboards and KPIs',
          'Recommendations at the moment of decision'
        ],
        log: [
          'Sales, stock and web data connected',
          'Unusual demand spike detected in one region',
          'Forecast updated, reorder suggested',
          'Weekly summary sent to leadership'
        ],
        result: 'Decisions made on live numbers, not gut feeling'
      },
      {
        key: 'documents',
        name: 'Document and knowledge AI',
        summary:
          'Make every contract, manual and email searchable, summarised and actionable in seconds instead of days.',
        points: [
          'Extraction from PDFs and scans',
          'Search across all company knowledge',
          'Summaries, drafts and translations'
        ],
        log: [
          'Full contract archive uploaded',
          'Parties, dates and key clauses extracted',
          'Contracts at risk of renewal flagged',
          'Everything searchable in plain language'
        ],
        result: 'Days of reading reduced to minutes'
      },
      {
        key: 'integration',
        name: 'Integration and modernisation',
        summary:
          'Connect the systems you already own and modernise legacy software step by step — without stopping the business.',
        points: [
          'APIs and system integration',
          'Cloud migration and modernisation',
          'Security, permissions and audit trails'
        ],
        log: [
          'Legacy ERP connected through a secure API',
          'CRM, helpdesk and billing kept in sync',
          'Duplicate data entry removed',
          'Monitoring and alerts switched on'
        ],
        result: 'One connected system, operations never paused'
      }
    ]
  },
  approach: {
    title: 'From first call to running system',
    copy:
      'AI accelerates every phase, so you see working software early and pay for progress, not paperwork.',
    deliverableLabel: 'You get',
    steps: [
      {
        name: 'Discover',
        description:
          'We map the problem, your data and the business case, and find where automation creates the most value first.',
        deliverable: 'A clear plan with scope, timeline and expected return'
      },
      {
        name: 'Prototype',
        description:
          'AI-accelerated design and engineering put a working prototype in your hands, tested with real users and real data.',
        deliverable: 'Something you can click, try and judge'
      },
      {
        name: 'Build and integrate',
        description:
          'We harden it for production: secure, scalable and connected to the systems you already run.',
        deliverable: 'A production system your team can rely on'
      },
      {
        name: 'Launch and improve',
        description:
          'We launch, measure and keep improving as your business grows and the technology moves forward.',
        deliverable: 'Results you can measure, every month'
      }
    ]
  },
  difference: {
    title: 'Faster and leaner, by design',
    copy:
      'Speed and lower cost are not shortcuts. They come from letting AI and automation do the work that used to need large teams.',
    aspectLabel: 'Aspect',
    traditionalLabel: 'Traditional delivery',
    geminiLabel: 'Gemini',
    rows: [
      {
        aspect: 'Team',
        traditional: 'Large teams with layers of coordination',
        gemini: 'A lean senior team, amplified by AI agents'
      },
      {
        aspect: 'First result',
        traditional: 'After months of specification',
        gemini: 'A working prototype within weeks'
      },
      {
        aspect: 'Technology',
        traditional: 'Whatever stack the agency already sells',
        gemini: 'The best tool for each job, chosen from the whole frontier'
      },
      {
        aspect: 'Repetitive work',
        traditional: 'Done by hand and billed by the hour',
        gemini: 'Automated: testing, documentation and reporting'
      },
      {
        aspect: 'Budget',
        traditional: 'A large share lost to overhead',
        gemini: 'Spent on outcomes you can measure'
      },
      {
        aspect: 'After launch',
        traditional: 'Handover, then silence',
        gemini: 'Monitored, measured and continuously improved'
      }
    ],
    cta: 'Get a plan for your project'
  },
  faq: {
    title: 'Questions, answered',
    copy: 'The things teams usually ask before we start.',
    items: [
      {
        question: 'We don’t know which AI technology we need. Is that a problem?',
        answer:
          'Not at all — choosing is our job. Bring the problem or the idea. We assess what is available right now across models, platforms and tools, and pick what fits your goals, data and budget. We are not tied to any vendor, so the recommendation is always about your outcome.'
      },
      {
        question: 'How can you be faster and cheaper than a traditional agency?',
        answer:
          'AI agents accelerate research, design, code, testing and documentation, while a lean senior team owns the decisions and the quality. That removes most of the coordination overhead, the handoffs and the hours spent on repetitive work.'
      },
      {
        question: 'How soon will we see results?',
        answer:
          'Early. You hold a working prototype within the first weeks, not after months of specification. We agree on what success looks like up front and measure it from day one.'
      },
      {
        question: 'Can you work with the systems we already have?',
        answer:
          'Yes. We connect to the tools, data and infrastructure you already use and modernise step by step, so day-to-day operations never stop.'
      },
      {
        question: 'Is our data safe?',
        answer:
          'Security is designed in from the first day: least-privilege access, encrypted data, audit trails and human review wherever decisions matter. We sign an NDA on request and can keep sensitive data inside your own infrastructure.'
      },
      {
        question: 'What happens after launch?',
        answer:
          'We stay on to monitor, measure and improve. AI moves fast, and your system keeps up: better models and new automations are rolled in whenever they create real value.'
      }
    ]
  },
  contact: {
    title: 'Tell us what’s slowing you down',
    copy: 'Describe the problem or the idea. We come back with a clear plan: scope, timeline and cost.',
    nextLabel: 'What happens next',
    nextSteps: [
      'We reply within two business days.',
      'A short call to understand your goals.',
      'A concrete proposal with scope, timeline and cost.'
    ],
    note: 'NDA on request. No obligation.',
    form: {
      stepLabels: ['Your goal', 'The details', 'Your contact'],
      progress: 'Step {current} of {total}',
      servicesTitle: 'What can we help with?',
      servicesHint: 'Choose everything that applies.',
      services: [
        { value: 'agents', label: 'AI agents and assistants' },
        { value: 'automation', label: 'Process automation' },
        { value: 'products', label: 'A new product or app' },
        { value: 'data', label: 'Data and insights' },
        { value: 'integration', label: 'Connecting our systems' },
        { value: 'unsure', label: 'Not sure yet, advise me' }
      ],
      servicesError: 'Choose at least one option to continue.',
      budgetTitle: 'Budget',
      budgets: [
        { value: 'under-10k', label: 'Under €10k' },
        { value: '10k-25k', label: '€10k–25k' },
        { value: '25k-75k', label: '€25k–75k' },
        { value: 'over-75k', label: '€75k+' },
        { value: 'unsure', label: 'Not sure yet' }
      ],
      timelineTitle: 'Timeline',
      timelines: [
        { value: 'asap', label: 'As soon as possible' },
        { value: '3-months', label: 'Within 3 months' },
        { value: 'this-year', label: 'This year' },
        { value: 'exploring', label: 'Just exploring' }
      ],
      optional: 'optional',
      messageTitle: 'Tell us about it',
      messageLabel: 'Describe the problem or the idea',
      messagePlaceholder:
        'For example: our team spends hours every week copying order data into invoices. We want that to happen automatically.',
      messageError: 'Add a few more details so we can prepare a useful reply.',
      messageCount: '{count} characters',
      startersLabel: 'Start from an example',
      starters: [
        {
          label: 'Automate a manual process',
          text: 'We want to automate a manual process. Today it works like this: '
        },
        {
          label: 'Build an AI assistant',
          text: 'We want an AI assistant that helps our customers or team with: '
        },
        {
          label: 'Turn an idea into a product',
          text: 'We have an idea for a product. It should help people to: '
        }
      ],
      contactTitle: 'Where should we reply?',
      nameLabel: 'Your name',
      nameError: 'Enter your name.',
      emailLabel: 'Work email',
      emailPlaceholder: 'you@company.com',
      emailError: 'Enter a valid email address so we can reply.',
      companyLabel: 'Company',
      privacy: 'We only use your details to reply to this request.',
      continue: 'Continue',
      back: 'Back',
      submit: 'Send request',
      sending: 'Sending…',
      failed: 'Your request didn’t go through. Check your connection and try again.',
      retry: 'Try again',
      sentTitle: 'Request sent',
      sentCopy: 'Thanks, {name}. We’ll reply to {email} within two business days.',
      sentAgain: 'Send another request',
      summaryLabel: 'Your request'
    }
  },
  footer: {
    blurb: 'An AI-native engineering studio. We turn hard problems into systems that run themselves.',
    exploreLabel: 'Explore',
    settingsLabel: 'Preferences',
    startProject: 'Start a project',
    backToTop: 'Back to top',
    rights: 'Gemini Software Engineering'
  }
};
