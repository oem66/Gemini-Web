export type LanguageCode = 'en' | 'de' | 'no' | 'sv' | 'fr' | 'it';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  locale: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', locale: 'en-US' },
  { code: 'de', name: 'Deutsch', locale: 'de-DE' },
  { code: 'no', name: 'Norsk', locale: 'nb-NO' },
  { code: 'sv', name: 'Svenska', locale: 'sv-SE' },
  { code: 'fr', name: 'Français', locale: 'fr-FR' },
  { code: 'it', name: 'Italiano', locale: 'it-IT' }
];

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface Capability {
  tag: string;
  title: string;
  description: string;
  value: string;
  bullets: string[];
}

export interface UseCase {
  name: string;
  problem: string;
  solution: string;
  outcome: string;
}

export interface Technology {
  name: string;
  summary: string;
}

export interface ImpactMetric {
  numeric: number | null;
  prefix: string;
  suffix: string;
  value: string;
  label: string;
  detail: string;
}

export interface ProjectHighlight {
  company: string;
  project: string;
  challenge: string;
  result: string;
  tags: string[];
}

export interface ClientReferral {
  client: string;
  initials: string;
  role: string;
  feedback: string;
  impact: string;
}

export type TerminalLineKind = 'cmd' | 'ok' | 'out' | 'accent';

export interface TerminalLine {
  kind: TerminalLineKind;
  text: string;
}

export interface SiteContent {
  header: {
    cta: string;
    menuToggle: string;
    languageAria: string;
    theme: { label: string; auto: string; light: string; dark: string };
  };
  hero: {
    statusPill: string;
    titleLead: string;
    titleAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chipsAria: string;
    statsAria: string;
    figureNote: string;
  };
  sections: {
    capabilities: { eyebrow: string; title: string; copy: string };
    impact: { eyebrow: string; title: string; copy: string; cta: string };
    projects: { eyebrow: string; title: string; copy: string };
    referrals: { eyebrow: string; title: string; copy: string };
    aiLab: { eyebrow: string; title: string; copy: string };
    technology: { eyebrow: string; title: string; copy: string };
    contact: {
      eyebrow: string;
      title: string;
      copy: string;
      emailPlaceholder: string;
      emailAria: string;
      emailInvalid: string;
      submit: string;
      note: string;
      sentTitle: string;
      sentCopy: string;
      sentAction: string;
    };
  };
  lab: {
    challengeLabel: string;
    approachLabel: string;
    outcomeLabel: string;
  };
  footer: {
    blurb: string;
    studioTitle: string;
    engineeringTitle: string;
    contactTitle: string;
    linkCapabilities: string;
    linkProjects: string;
    linkAiLab: string;
    linkStack: string;
    bookCall: string;
  };
  navItems: NavItem[];
  capabilities: Capability[];
  impactMetrics: ImpactMetric[];
  projectHighlights: ProjectHighlight[];
  clientReferrals: ClientReferral[];
  useCases: UseCase[];
  technologyStack: Technology[];
  terminalScript: TerminalLine[];
}

const en: SiteContent = {
  header: {
    cta: 'Start a project',
    menuToggle: 'Toggle menu',
    languageAria: 'Select language',
    theme: { label: 'Appearance', auto: 'Auto', light: 'Light', dark: 'Dark' }
  },
  hero: {
    statusPill: 'Available for new projects',
    titleLead: 'Mobile apps. Web platforms.',
    titleAccent: 'AI systems.',
    lead: 'Gemini builds native iOS and Android apps, modern frontends, robust backends and AI-powered workflows — engineered end to end, live in under 90 days.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'View services',
    chipsAria: 'Core technologies',
    statsAria: 'Selected metrics',
    figureNote: 'A concurrency-safe observable store from a production iOS client. Every project ships code we would put our name on in public.'
  },
  sections: {
    capabilities: {
      eyebrow: 'Services',
      title: 'One specialized team for apps, platforms and backends.',
      copy: 'The focus is on software that works in everyday use: native mobile apps, solid backend systems, fast frontends and automation with direct business value.'
    },
    impact: {
      eyebrow: 'Impact',
      title: 'More speed, less friction — products that scale cleanly.',
      copy: 'Gemini combines product strategy, mobile development, backend engineering and AI automation into resilient solutions that go live faster and are easier to evolve.',
      cta: 'Discuss impact'
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Digital products for startups, mid-sized companies and demanding organizations.',
      copy: 'The focus is on clarity: mobile apps, web platforms, backends and automation — built so teams, customers and decision-makers can rely on them long-term.'
    },
    referrals: {
      eyebrow: 'Testimonials',
      title: 'Teams value structure, speed and measurable delivery.',
      copy: 'Selected feedback from teams that need clear product leadership, stable architecture and measurable execution.'
    },
    aiLab: {
      eyebrow: 'AI Lab',
      title: 'Four ways teams bring us in.',
      copy: 'Most engagements start as one of these. Each one describes the situation we are handed, how we approach it and what the team ends up with.'
    },
    technology: {
      eyebrow: 'Stack',
      title: 'Strong backends, fast frontends, native mobile apps.',
      copy: 'Swift for iOS, Kotlin for Android, TypeScript for frontends, robust APIs, cloud infrastructure and AI services — pragmatically combined so products are quickly usable and stable in operation.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ready to build your next product?',
      copy: 'Mobile apps, web frontends, backend systems and AI workflows — easy to understand, pleasant to use and measurably effective.',
      emailPlaceholder: 'you@company.com',
      emailAria: 'Business email address',
      emailInvalid: 'Enter a valid email address so we can reply.',
      submit: 'Free intro call',
      note: '// Reply within two business days · NDA on request',
      sentTitle: 'Request received',
      sentCopy: 'A real engineer replies within two business days.',
      sentAction: 'Use a different address'
    }
  },
  lab: {
    challengeLabel: '// Situation',
    approachLabel: '// Approach',
    outcomeLabel: '// Outcome'
  },
  footer: {
    blurb: 'Native apps, web platforms, backends and AI automation for ambitious teams — from discovery to production.',
    studioTitle: '// Studio',
    engineeringTitle: '// Engineering',
    contactTitle: '// Contact',
    linkCapabilities: 'Services',
    linkProjects: 'Projects',
    linkAiLab: 'AI Lab',
    linkStack: 'Stack',
    bookCall: 'Book an intro call'
  },
  navItems: [
    { label: 'Services', href: '#capabilities', id: 'capabilities' },
    { label: 'Impact', href: '#impact', id: 'impact' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Testimonials', href: '#referrals', id: 'referrals' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab' },
    { label: 'Stack', href: '#technology', id: 'technology' }
  ],
  capabilities: [
    {
      tag: 'Mobile',
      title: 'Mobile Solutions',
      description:
        'Gemini builds mobile products for small and large companies — from the first app idea to stable operation.',
      value: 'Specialized mobile solutions with clear product logic.',
      bullets: [
        'Discovery, UX flows and product architecture',
        'MVP, scale-up and enterprise delivery',
        'Analytics, release planning and maintenance'
      ]
    },
    {
      tag: 'iOS',
      title: 'Native iOS Development',
      description:
        'Native iOS apps in Swift — built for performance, excellent usability and clean App Store delivery.',
      value: 'Premium iPhone and iPad apps for real business processes.',
      bullets: [
        'Swift, SwiftUI and UIKit',
        'Device APIs, push, camera and location',
        'App Store preparation and release support'
      ]
    },
    {
      tag: 'Android',
      title: 'Native Android Development',
      description:
        'Android apps with Kotlin, modern UI patterns and stable data flows for smartphones, tablets and business devices.',
      value: 'Reliable Android products for teams, customers and operations.',
      bullets: [
        'Kotlin and Jetpack Compose',
        'Offline sync, notifications, secure storage',
        'Google Play release and device testing'
      ]
    },
    {
      tag: 'Backend',
      title: 'Backend Engineering',
      description:
        'Robust backends connect mobile apps, web frontends, databases and external systems into resilient digital products.',
      value: 'APIs, authentication and data models that withstand growth.',
      bullets: [
        'REST and event-driven APIs',
        'Cloud services, databases, integrations',
        'Security, permissions, audit-ready workflows'
      ]
    },
    {
      tag: 'Frontend',
      title: 'Frontend Platforms',
      description:
        'Fast web frontends and internal platforms with clear user guidance, responsive layout and clean component structure.',
      value: 'Modern frontends for customer portals, dashboards and SaaS products.',
      bullets: [
        'Angular, TypeScript, responsive UI systems',
        'Design systems and reusable components',
        'Performance, accessibility, conversion quality'
      ]
    },
    {
      tag: 'AI',
      title: 'AI Workflow Automation',
      description:
        'AI is applied where it measurably improves software: automation, prioritization, support and operational decisions.',
      value: 'Less manual friction, faster decisions.',
      bullets: [
        'Workflow discovery and redesign',
        'AI-powered task orchestration',
        'Dashboards, governance and human review'
      ]
    }
  ],
  impactMetrics: [
    {
      numeric: 41,
      prefix: '',
      suffix: '%',
      value: '41%',
      label: 'Shorter process times',
      detail: 'After structured automation of recurring operational workflows.'
    },
    {
      numeric: 29,
      prefix: '',
      suffix: '%',
      value: '29%',
      label: 'Revenue uplift',
      detail: 'Through funnel optimization, intelligent routing and AI decision support.'
    },
    {
      numeric: 82,
      prefix: '',
      suffix: '%',
      value: '82%',
      label: 'Automation coverage',
      detail: 'Across recurring tasks in sales, service and internal operations.'
    },
    {
      numeric: 90,
      prefix: '<',
      suffix: 'd',
      value: '<90d',
      label: 'Typical launch',
      detail: 'From discovery to productive, AI-ready business results.'
    }
  ],
  projectHighlights: [
    {
      company: 'Siemens',
      project: 'Industrial Work Management Hub',
      challenge:
        'Complex telemetry and process control were spread across separate systems, consoles and teams.',
      result:
        'Unified AI-powered monitoring and workflow automation improved incident response and reliability.',
      tags: ['AI Ops', 'Automation', 'Monitoring']
    },
    {
      company: 'Bosch',
      project: 'Connected Product Delivery Platform',
      challenge: 'Product and service data pipelines needed stronger automation, visibility and consistency.',
      result:
        'An integrated digital platform with ML insight flows significantly reduced manual process effort.',
      tags: ['Platform', 'ML', 'Data']
    },
    {
      company: 'Deutsche Telekom',
      project: 'Telecom Workflow Automation Program',
      challenge: 'High-volume service workflows were delaying activation, support and quality assurance.',
      result:
        'AI-powered orchestration and verification accelerated service cycles and improved customer outcomes.',
      tags: ['Orchestration', 'Telecom', 'AI']
    },
    {
      company: 'Department of Justice',
      project: 'Secure Workflow Modernization',
      challenge: 'Mission-critical workflows required secure modernization with strict control and uptime.',
      result:
        'A resilient digital operations layer with automation controls and auditable process intelligence.',
      tags: ['Security', 'GovTech', 'Compliance']
    },
    {
      company: 'ICA Banken',
      project: 'Smart Banking Operations Engine',
      challenge: 'Financial operations needed faster decision loops for risk, service and reporting.',
      result:
        'ML-enhanced automation and analytics improved processing speed and decision quality.',
      tags: ['FinTech', 'ML', 'Analytics']
    }
  ],
  clientReferrals: [
    {
      client: 'Siemens',
      initials: 'SI',
      role: 'Head of Digital Operations',
      feedback:
        'Gemini translated a complex modernization roadmap into a clear launch sequence and delivered fast.',
      impact: 'Automation coverage went up and process cycle times dropped across several operations teams.'
    },
    {
      client: 'Bosch',
      initials: 'BO',
      role: 'Program Director, Connected Systems',
      feedback:
        'The team combined strong engineering quality with practical AI use cases our business units could adopt quickly.',
      impact: 'Manual coordination effort dropped while delivery consistency measurably improved.'
    },
    {
      client: 'Deutsche Telekom',
      initials: 'DT',
      role: 'Senior Transformation Manager',
      feedback:
        'Gemini delivered a scalable automation layer that matched the complexity and speed of telecom workflows.',
      impact: 'Service activation accelerated and operational issues were resolved much faster.'
    },
    {
      client: 'Department of Justice',
      initials: 'DJ',
      role: 'Technology Modernization Lead',
      feedback:
        'The execution was disciplined, secure and results-oriented — from discovery to deployment.',
      impact: 'Critical workflows gained traceability, resilience and measurable efficiency.'
    },
    {
      client: 'ICA Banken',
      initials: 'IB',
      role: 'Digital Banking Operations Manager',
      feedback:
        'Gemini helped us translate AI from concept into practical value within our core processes.',
      impact: 'Decision throughput improved and process bottlenecks in banking operations were reduced.'
    },
    {
      client: 'Global Retail Platform',
      initials: 'GR',
      role: 'VP of Technology',
      feedback:
        'Engineering, DevOps and AI in one stream — that removed delivery friction immediately.',
      impact: 'Release velocity increased, and conversion and retention metrics trended up in the first quarter.'
    }
  ],
  useCases: [
    {
      name: 'Mobile Product Launch',
      problem:
        'A new business idea needs a clear mobile product, native app delivery, backend services and a realistic release path.',
      solution:
        'Gemini designs the app experience, builds iOS with Swift and Android with Kotlin, and connects both platforms to secure backend APIs.',
      outcome: 'A launch-ready mobile solution with product analytics, release support and room to scale.'
    },
    {
      name: 'Business App Modernization',
      problem: 'Existing tools are slow, fragmented or no longer match how teams and customers work.',
      solution:
        'We rebuild critical workflows as modern mobile, web and backend systems — with clearer UX and stronger integration points.',
      outcome: 'Less operational friction, better adoption and software that supports current business processes.'
    },
    {
      name: 'Customer Platforms',
      problem:
        'Customers expect fast digital access via mobile and web, but internal systems slow the experience down.',
      solution:
        'Gemini builds customer portals, account areas, mobile self-service flows and connected dashboards on reliable APIs.',
      outcome: 'A smoother customer journey across iOS, Android and browser touchpoints.'
    },
    {
      name: 'Executive Intelligence',
      problem: 'Leadership lacks real-time clarity about what drives growth, margin and operational friction.',
      solution:
        'Gemini builds unified intelligence layers that translate product, sales and operations data into decision-ready signals.',
      outcome: 'Sharper strategic decisions with a continuous view of business performance.'
    }
  ],
  technologyStack: [
    {
      name: 'Backend Development',
      summary: 'Secure APIs, cloud services, databases, auth, integrations and data models as a reliable foundation.'
    },
    {
      name: 'Frontend Development',
      summary: 'Angular and TypeScript frontends with responsive layouts, reusable components and clear UX.'
    },
    {
      name: 'iOS Development',
      summary: 'Native Swift apps for iPhone and iPad — SwiftUI, UIKit, device APIs, testing and App Store release.'
    },
    {
      name: 'Android Development',
      summary: 'Native Kotlin apps with Jetpack Compose, offline-capable flows, push notifications and Google Play delivery.'
    },
    {
      name: 'Mobile Product Strategy',
      summary: 'Specialized mobile solution design for small businesses, growing teams and enterprise environments.'
    },
    {
      name: 'AI Automation',
      summary: 'Applied AI for workflow automation, decision support, support operations and business dashboards.'
    },
    {
      name: 'DevOps & Cloud',
      summary: 'CI/CD, infrastructure automation, monitoring, observability and release pipelines for stable growth.'
    },
    {
      name: 'Quality & Release',
      summary: 'Automated checks, manual QA, App Store and Play preparation, staged rollouts and post-launch support.'
    }
  ],
  terminalScript: [
    { kind: 'cmd', text: 'gemini init --project "your-next-app"' },
    { kind: 'ok', text: 'Discovery & product architecture complete' },
    { kind: 'out', text: 'Stack: Swift · Kotlin · Angular · Node.js' },
    { kind: 'cmd', text: 'gemini build --platforms ios android web' },
    { kind: 'ok', text: 'Native builds compiled · tests green · CI/CD active' },
    { kind: 'cmd', text: 'gemini ship --env production' },
    { kind: 'accent', text: '▲ Live in <90 days · 99.9% uptime · AI enabled' }
  ]
};

const de: SiteContent = {
  header: {
    cta: 'Projekt starten',
    menuToggle: 'Menü umschalten',
    languageAria: 'Sprache wählen',
    theme: { label: 'Erscheinungsbild', auto: 'Auto', light: 'Hell', dark: 'Dunkel' }
  },
  hero: {
    statusPill: 'Verfügbar für neue Projekte',
    titleLead: 'Mobile Apps. Web-Plattformen.',
    titleAccent: 'AI-Systeme.',
    lead: 'Gemini entwickelt native iOS- und Android-Apps, moderne Frontends, robuste Backends und AI-gestützte Workflows — engineered aus einer Hand, live in unter 90 Tagen.',
    ctaPrimary: 'Projekt starten',
    ctaSecondary: 'Leistungen ansehen',
    chipsAria: 'Kern-Technologien',
    statsAria: 'Ausgewählte Kennzahlen',
    figureNote: 'Ein concurrency-sicherer Observable Store aus einem produktiven iOS-Client. Jedes Projekt liefert Code, zu dem wir öffentlich stehen.'
  },
  sections: {
    capabilities: {
      eyebrow: 'Leistungen',
      title: 'Ein spezialisiertes Team für Apps, Plattformen und Backends.',
      copy: 'Der Schwerpunkt liegt auf Software, die im Alltag funktioniert: native mobile Apps, solide Backend-Systeme, schnelle Frontends und Automatisierung mit direktem Business-Nutzen.'
    },
    impact: {
      eyebrow: 'Wirkung',
      title: 'Mehr Tempo, weniger Reibung — Produkte, die sauber skalieren.',
      copy: 'Gemini verbindet Produktstrategie, mobile Entwicklung, Backend-Engineering und AI-Automation zu belastbaren Lösungen, die schneller live gehen und leichter weiterentwickelt werden können.',
      cta: 'Wirkung besprechen'
    },
    projects: {
      eyebrow: 'Projekte',
      title: 'Digitale Produkte für Startups, Mittelstand und anspruchsvolle Organisationen.',
      copy: 'Der Fokus liegt auf Klarheit: mobile Apps, Web-Plattformen, Backends und Automatisierung — gebaut, damit Teams, Kunden und Entscheider sie langfristig nutzen können.'
    },
    referrals: {
      eyebrow: 'Stimmen',
      title: 'Teams schätzen Struktur, Tempo und messbare Umsetzung.',
      copy: 'Ausgewählte Rückmeldungen von Teams, die klare Produktführung, stabile Architektur und messbare Umsetzung brauchen.'
    },
    aiLab: {
      eyebrow: 'AI Lab',
      title: 'Vier Wege, wie Teams uns dazu holen.',
      copy: 'Die meisten Projekte starten als einer dieser Fälle. Jeder beschreibt die Ausgangslage, unser Vorgehen und das Ergebnis für das Team.'
    },
    technology: {
      eyebrow: 'Stack',
      title: 'Starke Backends, schnelle Frontends, native mobile Apps.',
      copy: 'Swift für iOS, Kotlin für Android, TypeScript für Frontends, robuste APIs, Cloud-Infrastruktur und AI-Services — pragmatisch kombiniert, damit Produkte schnell nutzbar und stabil im Betrieb sind.'
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Bereit, dein nächstes Produkt zu bauen?',
      copy: 'Mobile Apps, Web-Frontends, Backend-Systeme und AI-Workflows — einfach zu verstehen, angenehm zu bedienen und messbar wirksam.',
      emailPlaceholder: 'deine@firma.de',
      emailAria: 'Business E-Mail-Adresse',
      emailInvalid: 'Bitte eine gültige E-Mail-Adresse angeben, damit wir antworten können.',
      submit: 'Kostenloses Erstgespräch',
      note: '// Antwort innerhalb von zwei Werktagen · NDA auf Wunsch',
      sentTitle: 'Anfrage erhalten',
      sentCopy: 'Ein echter Entwickler antwortet innerhalb von zwei Werktagen.',
      sentAction: 'Andere Adresse verwenden'
    }
  },
  lab: {
    challengeLabel: '// Ausgangslage',
    approachLabel: '// Vorgehen',
    outcomeLabel: '// Ergebnis'
  },
  footer: {
    blurb: 'Native Apps, Web-Plattformen, Backends und AI-Automation für ambitionierte Teams — von Discovery bis Production.',
    studioTitle: '// Studio',
    engineeringTitle: '// Engineering',
    contactTitle: '// Kontakt',
    linkCapabilities: 'Leistungen',
    linkProjects: 'Projekte',
    linkAiLab: 'AI Lab',
    linkStack: 'Stack',
    bookCall: 'Erstgespräch buchen'
  },
  navItems: [
    { label: 'Leistungen', href: '#capabilities', id: 'capabilities' },
    { label: 'Wirkung', href: '#impact', id: 'impact' },
    { label: 'Projekte', href: '#projects', id: 'projects' },
    { label: 'Stimmen', href: '#referrals', id: 'referrals' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab' },
    { label: 'Stack', href: '#technology', id: 'technology' }
  ],
  capabilities: [
    {
      tag: 'Mobile',
      title: 'Mobile Solutions',
      description:
        'Gemini entwickelt mobile Produkte für kleine und große Unternehmen — von der ersten App-Idee bis zum stabilen Betrieb.',
      value: 'Spezialisierte mobile Lösungen mit klarer Produktlogik.',
      bullets: [
        'Discovery, UX-Flows und Produktarchitektur',
        'MVP, Scale-up und Enterprise Delivery',
        'Analytics, Release-Planung und Wartung'
      ]
    },
    {
      tag: 'iOS',
      title: 'Native iOS Development',
      description:
        'Native iOS Apps in Swift — ausgelegt auf Performance, exzellente Bedienbarkeit und saubere App-Store-Auslieferung.',
      value: 'Premium iPhone- und iPad-Apps für reale Geschäftsprozesse.',
      bullets: [
        'Swift, SwiftUI und UIKit',
        'Device-APIs, Push, Kamera und Location',
        'App-Store-Vorbereitung und Release-Support'
      ]
    },
    {
      tag: 'Android',
      title: 'Native Android Development',
      description:
        'Android Apps mit Kotlin, modernen UI-Patterns und stabilen Datenflüssen für Smartphones, Tablets und Business Devices.',
      value: 'Verlässliche Android-Produkte für Teams, Kunden und Operations.',
      bullets: [
        'Kotlin und Jetpack Compose',
        'Offline-Sync, Notifications, Secure Storage',
        'Google-Play-Release und Device-Testing'
      ]
    },
    {
      tag: 'Backend',
      title: 'Backend Engineering',
      description:
        'Robuste Backends verbinden mobile Apps, Web-Frontends, Datenbanken und externe Systeme zu belastbaren digitalen Produkten.',
      value: 'APIs, Authentifizierung und Datenmodelle, die Wachstum aushalten.',
      bullets: [
        'REST- und Event-getriebene APIs',
        'Cloud Services, Datenbanken, Integrationen',
        'Security, Permissions, Audit-fähige Workflows'
      ]
    },
    {
      tag: 'Frontend',
      title: 'Frontend Platforms',
      description:
        'Schnelle Web-Frontends und interne Plattformen mit klarer Nutzerführung, responsivem Layout und sauberer Komponentenstruktur.',
      value: 'Moderne Frontends für Kundenportale, Dashboards und SaaS-Produkte.',
      bullets: [
        'Angular, TypeScript, responsive UI-Systeme',
        'Design Systems und wiederverwendbare Komponenten',
        'Performance, Accessibility, Conversion-Qualität'
      ]
    },
    {
      tag: 'AI',
      title: 'AI Workflow Automation',
      description:
        'AI wird dort eingesetzt, wo sie Software messbar verbessert: Automatisierung, Priorisierung, Support und operative Entscheidungen.',
      value: 'Weniger manuelle Reibung, schnellere Entscheidungen.',
      bullets: [
        'Workflow Discovery und Redesign',
        'AI-gestützte Task-Orchestrierung',
        'Dashboards, Governance und Human Review'
      ]
    }
  ],
  impactMetrics: [
    {
      numeric: 41,
      prefix: '',
      suffix: '%',
      value: '41%',
      label: 'Kürzere Prozesszeiten',
      detail: 'Nach strukturierter Automatisierung wiederkehrender operativer Workflows.'
    },
    {
      numeric: 29,
      prefix: '',
      suffix: '%',
      value: '29%',
      label: 'Umsatz-Uplift',
      detail: 'Durch Funnel-Optimierung, intelligentes Routing und AI Decision Support.'
    },
    {
      numeric: 82,
      prefix: '',
      suffix: '%',
      value: '82%',
      label: 'Automation Coverage',
      detail: 'Über wiederkehrende Aufgaben in Sales, Service und internen Operations.'
    },
    {
      numeric: 90,
      prefix: '<',
      suffix: 'd',
      value: '<90d',
      label: 'Typischer Launch',
      detail: 'Von Discovery bis zu produktiven, AI-fähigen Business-Ergebnissen.'
    }
  ],
  projectHighlights: [
    {
      company: 'Siemens',
      project: 'Industrial Work Management Hub',
      challenge:
        'Komplexe Telemetrie und Prozesssteuerung waren über getrennte Systeme, Konsolen und Teams verteilt.',
      result:
        'Einheitliches AI-gestütztes Monitoring und Workflow-Automation verbesserten Incident Response und Zuverlässigkeit.',
      tags: ['AI Ops', 'Automation', 'Monitoring']
    },
    {
      company: 'Bosch',
      project: 'Connected Product Delivery Platform',
      challenge: 'Produkt- und Service-Datenpipelines brauchten stärkere Automatisierung, Sichtbarkeit und Konsistenz.',
      result:
        'Integrierte digitale Plattform mit ML-Insight-Flows, die manuellen Prozessaufwand deutlich reduzierte.',
      tags: ['Platform', 'ML', 'Data']
    },
    {
      company: 'Deutsche Telekom',
      project: 'Telecom Workflow Automation Program',
      challenge: 'High-Volume-Service-Workflows verzögerten Aktivierung, Support und Qualitätssicherung.',
      result:
        'AI-gestützte Orchestrierung und Verifikation beschleunigten Service-Zyklen und verbesserten Customer Outcomes.',
      tags: ['Orchestration', 'Telecom', 'AI']
    },
    {
      company: 'Department of Justice',
      project: 'Secure Workflow Modernization',
      challenge: 'Mission-kritische Workflows erforderten sichere Modernisierung mit strikter Kontrolle und Uptime.',
      result:
        'Resiliente Digital-Operations-Schicht mit Automation Controls und auditierbarer Prozessintelligenz.',
      tags: ['Security', 'GovTech', 'Compliance']
    },
    {
      company: 'ICA Banken',
      project: 'Smart Banking Operations Engine',
      challenge: 'Financial Operations brauchten schnellere Entscheidungsschleifen für Risiko, Service und Reporting.',
      result:
        'ML-verstärkte Automation und Analytics verbesserten Verarbeitungsgeschwindigkeit und Entscheidungsqualität.',
      tags: ['FinTech', 'ML', 'Analytics']
    }
  ],
  clientReferrals: [
    {
      client: 'Siemens',
      initials: 'SI',
      role: 'Head of Digital Operations',
      feedback:
        'Gemini übersetzte eine komplexe Modernisierungs-Roadmap in eine klare Launch-Sequenz und lieferte schnell.',
      impact: 'Automation Coverage stieg, Prozesslaufzeiten sanken über mehrere Operations-Teams hinweg.'
    },
    {
      client: 'Bosch',
      initials: 'BO',
      role: 'Program Director, Connected Systems',
      feedback:
        'Das Team kombinierte starke Engineering-Qualität mit praktischen AI Use Cases, die unsere Business Units schnell adaptieren konnten.',
      impact: 'Manueller Koordinationsaufwand sank, während Delivery-Konsistenz messbar stieg.'
    },
    {
      client: 'Deutsche Telekom',
      initials: 'DT',
      role: 'Senior Transformation Manager',
      feedback:
        'Gemini lieferte eine skalierbare Automation-Schicht, die zur Komplexität und Geschwindigkeit von Telekom-Workflows passte.',
      impact: 'Service-Aktivierung beschleunigt, operative Issues deutlich schneller gelöst.'
    },
    {
      client: 'Department of Justice',
      initials: 'DJ',
      role: 'Technology Modernization Lead',
      feedback:
        'Die Umsetzung war diszipliniert, sicher und ergebnisorientiert — von Discovery bis Deployment.',
      impact: 'Kritische Workflows gewannen Nachvollziehbarkeit, Resilienz und messbare Effizienz.'
    },
    {
      client: 'ICA Banken',
      initials: 'IB',
      role: 'Digital Banking Operations Manager',
      feedback:
        'Gemini half uns, AI vom Konzept in praktischen Mehrwert innerhalb unserer Kernprozesse zu übersetzen.',
      impact: 'Entscheidungsdurchlauf verbessert, Prozess-Engpässe im Banking-Betrieb reduziert.'
    },
    {
      client: 'Global Retail Platform',
      initials: 'GR',
      role: 'VP of Technology',
      feedback:
        'Engineering, DevOps und AI in einem Stream — das hat Delivery-Reibung sofort entfernt.',
      impact: 'Release Velocity stieg, Conversion- und Retention-Metriken trendeten im ersten Quartal nach oben.'
    }
  ],
  useCases: [
    {
      name: 'Mobile Product Launch',
      problem:
        'Eine neue Business-Idee braucht ein klares mobiles Produkt, native App Delivery, Backend Services und einen realistischen Release-Pfad.',
      solution:
        'Gemini designt die App Experience, baut iOS mit Swift, Android mit Kotlin und verbindet beide Plattformen mit sicheren Backend-APIs.',
      outcome: 'Eine launch-fertige mobile Lösung mit Product Analytics, Release-Support und Raum zum Skalieren.'
    },
    {
      name: 'Business App Modernization',
      problem: 'Bestehende Tools sind langsam, fragmentiert oder passen nicht mehr zur Arbeitsweise von Teams und Kunden.',
      solution:
        'Wir bauen kritische Workflows als moderne Mobile-, Web- und Backend-Systeme neu — mit klarerer UX und stärkeren Integrationspunkten.',
      outcome: 'Weniger operative Reibung, bessere Adoption und Software, die aktuelle Geschäftsprozesse trägt.'
    },
    {
      name: 'Customer Platforms',
      problem:
        'Kunden erwarten schnellen digitalen Zugang über Mobile und Web, aber interne Systeme bremsen die Experience aus.',
      solution:
        'Gemini baut Kundenportale, Account-Bereiche, Mobile-Self-Service-Flows und verbundene Dashboards auf verlässlichen APIs.',
      outcome: 'Eine flüssigere Customer Journey über iOS, Android und Browser-Touchpoints.'
    },
    {
      name: 'Executive Intelligence',
      problem: 'Führung fehlt Echtzeit-Klarheit darüber, was Wachstum, Marge und operative Reibung treibt.',
      solution:
        'Gemini baut vereinheitlichte Intelligence Layer, die Produkt-, Sales- und Operations-Daten in entscheidungsreife Signale übersetzen.',
      outcome: 'Schärfere strategische Entscheidungen mit kontinuierlicher Sicht auf Business Performance.'
    }
  ],
  technologyStack: [
    {
      name: 'Backend Development',
      summary: 'Sichere APIs, Cloud Services, Datenbanken, Auth, Integrationen und Datenmodelle als verlässliches Fundament.'
    },
    {
      name: 'Frontend Development',
      summary: 'Angular- und TypeScript-Frontends mit responsiven Layouts, wiederverwendbaren Komponenten und klarer UX.'
    },
    {
      name: 'iOS Development',
      summary: 'Native Swift Apps für iPhone und iPad — SwiftUI, UIKit, Device-APIs, Testing und App-Store-Release.'
    },
    {
      name: 'Android Development',
      summary: 'Native Kotlin Apps mit Jetpack Compose, Offline-fähigen Flows, Push Notifications und Google-Play-Delivery.'
    },
    {
      name: 'Mobile Product Strategy',
      summary: 'Spezialisiertes Mobile Solution Design für kleine Unternehmen, wachsende Teams und Enterprise-Umgebungen.'
    },
    {
      name: 'AI Automation',
      summary: 'Applied AI für Workflow-Automatisierung, Decision Support, Support Operations und Business Dashboards.'
    },
    {
      name: 'DevOps & Cloud',
      summary: 'CI/CD, Infrastructure Automation, Monitoring, Observability und Release Pipelines für stabiles Wachstum.'
    },
    {
      name: 'Quality & Release',
      summary: 'Automatisierte Checks, manuelle QA, App-Store- und Play-Vorbereitung, Staged Rollouts und Post-Launch-Support.'
    }
  ],
  terminalScript: [
    { kind: 'cmd', text: 'gemini init --project "your-next-app"' },
    { kind: 'ok', text: 'Discovery & Produktarchitektur abgeschlossen' },
    { kind: 'out', text: 'Stack: Swift · Kotlin · Angular · Node.js' },
    { kind: 'cmd', text: 'gemini build --platforms ios android web' },
    { kind: 'ok', text: 'Native Builds kompiliert · Tests grün · CI/CD aktiv' },
    { kind: 'cmd', text: 'gemini ship --env production' },
    { kind: 'accent', text: '▲ Live in <90 Tagen · 99.9% Uptime · AI enabled' }
  ]
};

const no: SiteContent = {
  header: {
    cta: 'Start et prosjekt',
    menuToggle: 'Vis/skjul meny',
    languageAria: 'Velg språk',
    theme: { label: 'Utseende', auto: 'Auto', light: 'Lys', dark: 'Mørk' }
  },
  hero: {
    statusPill: 'Tilgjengelig for nye prosjekter',
    titleLead: 'Mobilapper. Webplattformer.',
    titleAccent: 'AI-systemer.',
    lead: 'Gemini utvikler native iOS- og Android-apper, moderne frontends, robuste backends og AI-drevne arbeidsflyter — bygget fra ende til ende, live på under 90 dager.',
    ctaPrimary: 'Start et prosjekt',
    ctaSecondary: 'Se tjenester',
    chipsAria: 'Kjerneteknologier',
    statsAria: 'Utvalgte nøkkeltall',
    figureNote: 'En concurrency-sikker observable store fra en iOS-klient i produksjon. Hvert prosjekt leverer kode vi stiller oss bak offentlig.'
  },
  sections: {
    capabilities: {
      eyebrow: 'Tjenester',
      title: 'Ett spesialisert team for apper, plattformer og backends.',
      copy: 'Fokuset ligger på programvare som fungerer i hverdagen: native mobilapper, solide backend-systemer, raske frontends og automatisering med direkte forretningsverdi.'
    },
    impact: {
      eyebrow: 'Effekt',
      title: 'Mer fart, mindre friksjon — produkter som skalerer rent.',
      copy: 'Gemini kombinerer produktstrategi, mobilutvikling, backend-engineering og AI-automatisering til robuste løsninger som går live raskere og er enklere å videreutvikle.',
      cta: 'Diskuter effekt'
    },
    projects: {
      eyebrow: 'Prosjekter',
      title: 'Digitale produkter for startups, mellomstore bedrifter og krevende organisasjoner.',
      copy: 'Fokuset ligger på klarhet: mobilapper, webplattformer, backends og automatisering — bygget slik at team, kunder og beslutningstakere kan stole på dem over tid.'
    },
    referrals: {
      eyebrow: 'Referanser',
      title: 'Team verdsetter struktur, tempo og målbar leveranse.',
      copy: 'Utvalgte tilbakemeldinger fra team som trenger tydelig produktledelse, stabil arkitektur og målbar gjennomføring.'
    },
    aiLab: {
      eyebrow: 'AI Lab',
      title: 'Fire måter team henter oss inn på.',
      copy: 'De fleste oppdrag starter som ett av disse. Hvert punkt beskriver situasjonen vi får, hvordan vi går fram og hva teamet sitter igjen med.'
    },
    technology: {
      eyebrow: 'Stack',
      title: 'Sterke backends, raske frontends, native mobilapper.',
      copy: 'Swift for iOS, Kotlin for Android, TypeScript for frontends, robuste API-er, skyinfrastruktur og AI-tjenester — pragmatisk kombinert slik at produktene raskt kan tas i bruk og driftes stabilt.'
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Klar for å bygge ditt neste produkt?',
      copy: 'Mobilapper, web-frontends, backend-systemer og AI-arbeidsflyter — enkle å forstå, behagelige å bruke og målbart effektive.',
      emailPlaceholder: 'deg@firma.no',
      emailAria: 'Jobb-e-postadresse',
      emailInvalid: 'Skriv inn en gyldig e-postadresse så vi kan svare.',
      submit: 'Gratis intromøte',
      note: '// Svar innen to virkedager · NDA på forespørsel',
      sentTitle: 'Forespørsel mottatt',
      sentCopy: 'En ekte utvikler svarer innen to virkedager.',
      sentAction: 'Bruk en annen adresse'
    }
  },
  lab: {
    challengeLabel: '// Situasjon',
    approachLabel: '// Tilnærming',
    outcomeLabel: '// Resultat'
  },
  footer: {
    blurb: 'Native apper, webplattformer, backends og AI-automatisering for ambisiøse team — fra discovery til produksjon.',
    studioTitle: '// Studio',
    engineeringTitle: '// Engineering',
    contactTitle: '// Kontakt',
    linkCapabilities: 'Tjenester',
    linkProjects: 'Prosjekter',
    linkAiLab: 'AI Lab',
    linkStack: 'Stack',
    bookCall: 'Book et intromøte'
  },
  navItems: [
    { label: 'Tjenester', href: '#capabilities', id: 'capabilities' },
    { label: 'Effekt', href: '#impact', id: 'impact' },
    { label: 'Prosjekter', href: '#projects', id: 'projects' },
    { label: 'Referanser', href: '#referrals', id: 'referrals' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab' },
    { label: 'Stack', href: '#technology', id: 'technology' }
  ],
  capabilities: [
    {
      tag: 'Mobile',
      title: 'Mobile løsninger',
      description:
        'Gemini utvikler mobile produkter for små og store virksomheter — fra den første app-ideen til stabil drift.',
      value: 'Spesialiserte mobile løsninger med tydelig produktlogikk.',
      bullets: [
        'Discovery, UX-flyter og produktarkitektur',
        'MVP, oppskalering og enterprise-leveranse',
        'Analyse, release-planlegging og vedlikehold'
      ]
    },
    {
      tag: 'iOS',
      title: 'Native iOS-utvikling',
      description:
        'Native iOS-apper i Swift — bygget for ytelse, utmerket brukervennlighet og ryddig App Store-leveranse.',
      value: 'Premium iPhone- og iPad-apper for reelle forretningsprosesser.',
      bullets: [
        'Swift, SwiftUI og UIKit',
        'Enhets-API-er, push, kamera og posisjon',
        'App Store-forberedelse og release-støtte'
      ]
    },
    {
      tag: 'Android',
      title: 'Native Android-utvikling',
      description:
        'Android-apper med Kotlin, moderne UI-mønstre og stabile dataflyter for smarttelefoner, nettbrett og forretningsenheter.',
      value: 'Pålitelige Android-produkter for team, kunder og drift.',
      bullets: [
        'Kotlin og Jetpack Compose',
        'Offline-synk, varsler, sikker lagring',
        'Google Play-lansering og enhetstesting'
      ]
    },
    {
      tag: 'Backend',
      title: 'Backend-engineering',
      description:
        'Robuste backends kobler mobilapper, web-frontends, databaser og eksterne systemer sammen til motstandsdyktige digitale produkter.',
      value: 'API-er, autentisering og datamodeller som tåler vekst.',
      bullets: [
        'REST- og hendelsesdrevne API-er',
        'Skytjenester, databaser, integrasjoner',
        'Sikkerhet, tilganger, reviderbare arbeidsflyter'
      ]
    },
    {
      tag: 'Frontend',
      title: 'Frontend-plattformer',
      description:
        'Raske web-frontends og interne plattformer med tydelig brukerføring, responsivt design og ryddig komponentstruktur.',
      value: 'Moderne frontends for kundeportaler, dashboards og SaaS-produkter.',
      bullets: [
        'Angular, TypeScript, responsive UI-systemer',
        'Designsystemer og gjenbrukbare komponenter',
        'Ytelse, tilgjengelighet, konverteringskvalitet'
      ]
    },
    {
      tag: 'AI',
      title: 'AI-arbeidsflytautomatisering',
      description:
        'AI brukes der den målbart forbedrer programvare: automatisering, prioritering, support og operative beslutninger.',
      value: 'Mindre manuell friksjon, raskere beslutninger.',
      bullets: [
        'Kartlegging og redesign av arbeidsflyter',
        'AI-drevet oppgaveorkestrering',
        'Dashboards, styring og menneskelig kontroll'
      ]
    }
  ],
  impactMetrics: [
    {
      numeric: 41,
      prefix: '',
      suffix: '%',
      value: '41%',
      label: 'Kortere prosesstider',
      detail: 'Etter strukturert automatisering av gjentakende operative arbeidsflyter.'
    },
    {
      numeric: 29,
      prefix: '',
      suffix: '%',
      value: '29%',
      label: 'Omsetningsløft',
      detail: 'Gjennom funnel-optimalisering, intelligent ruting og AI-beslutningsstøtte.'
    },
    {
      numeric: 82,
      prefix: '',
      suffix: '%',
      value: '82%',
      label: 'Automatiseringsdekning',
      detail: 'På tvers av gjentakende oppgaver i salg, service og intern drift.'
    },
    {
      numeric: 90,
      prefix: '<',
      suffix: 'd',
      value: '<90d',
      label: 'Typisk lansering',
      detail: 'Fra discovery til produktive, AI-klare forretningsresultater.'
    }
  ],
  projectHighlights: [
    {
      company: 'Siemens',
      project: 'Industrial Work Management Hub',
      challenge:
        'Kompleks telemetri og prosesstyring var spredt over separate systemer, konsoller og team.',
      result:
        'Samlet AI-drevet overvåking og arbeidsflytautomatisering forbedret hendelseshåndtering og pålitelighet.',
      tags: ['AI Ops', 'Automation', 'Monitoring']
    },
    {
      company: 'Bosch',
      project: 'Connected Product Delivery Platform',
      challenge: 'Produkt- og tjenestedatapipelines trengte sterkere automatisering, synlighet og konsistens.',
      result:
        'Integrert digital plattform med ML-innsiktsflyter som reduserte manuelt prosessarbeid betydelig.',
      tags: ['Platform', 'ML', 'Data']
    },
    {
      company: 'Deutsche Telekom',
      project: 'Telecom Workflow Automation Program',
      challenge: 'Tjenesteflyter med høyt volum forsinket aktivering, support og kvalitetssikring.',
      result:
        'AI-drevet orkestrering og verifisering akselererte tjenestesykluser og forbedret kundeutfall.',
      tags: ['Orchestration', 'Telecom', 'AI']
    },
    {
      company: 'Department of Justice',
      project: 'Secure Workflow Modernization',
      challenge: 'Virksomhetskritiske arbeidsflyter krevde sikker modernisering med streng kontroll og oppetid.',
      result:
        'Robust digitalt driftslag med automatiseringskontroller og reviderbar prosessintelligens.',
      tags: ['Security', 'GovTech', 'Compliance']
    },
    {
      company: 'ICA Banken',
      project: 'Smart Banking Operations Engine',
      challenge: 'Finansdriften trengte raskere beslutningssløyfer for risiko, service og rapportering.',
      result:
        'ML-forsterket automatisering og analyse forbedret behandlingshastighet og beslutningskvalitet.',
      tags: ['FinTech', 'ML', 'Analytics']
    }
  ],
  clientReferrals: [
    {
      client: 'Siemens',
      initials: 'SI',
      role: 'Head of Digital Operations',
      feedback:
        'Gemini oversatte en kompleks moderniserings-roadmap til en tydelig lanseringssekvens og leverte raskt.',
      impact: 'Automatiseringsdekningen økte, og prosesstidene sank på tvers av flere driftsteam.'
    },
    {
      client: 'Bosch',
      initials: 'BO',
      role: 'Program Director, Connected Systems',
      feedback:
        'Teamet kombinerte sterk engineering-kvalitet med praktiske AI-brukstilfeller som forretningsenhetene våre raskt kunne ta i bruk.',
      impact: 'Manuelt koordineringsarbeid sank, mens leveransekonsistensen økte målbart.'
    },
    {
      client: 'Deutsche Telekom',
      initials: 'DT',
      role: 'Senior Transformation Manager',
      feedback:
        'Gemini leverte et skalerbart automatiseringslag som matchet kompleksiteten og tempoet i telekom-arbeidsflyter.',
      impact: 'Tjenesteaktivering ble raskere, og operative problemer ble løst betydelig fortere.'
    },
    {
      client: 'Department of Justice',
      initials: 'DJ',
      role: 'Technology Modernization Lead',
      feedback:
        'Gjennomføringen var disiplinert, sikker og resultatorientert — fra discovery til deployment.',
      impact: 'Kritiske arbeidsflyter fikk sporbarhet, robusthet og målbar effektivitet.'
    },
    {
      client: 'ICA Banken',
      initials: 'IB',
      role: 'Digital Banking Operations Manager',
      feedback:
        'Gemini hjalp oss å oversette AI fra konsept til praktisk verdi i kjerneprosessene våre.',
      impact: 'Beslutningsflyten ble bedre, og flaskehalser i bankdriften ble redusert.'
    },
    {
      client: 'Global Retail Platform',
      initials: 'GR',
      role: 'VP of Technology',
      feedback:
        'Engineering, DevOps og AI i én strøm — det fjernet leveransefriksjon umiddelbart.',
      impact: 'Release-tempoet økte, og konverterings- og retensjonstall pekte oppover allerede første kvartal.'
    }
  ],
  useCases: [
    {
      name: 'Lansering av mobilprodukt',
      problem:
        'En ny forretningsidé trenger et tydelig mobilprodukt, native app-leveranse, backend-tjenester og en realistisk release-plan.',
      solution:
        'Gemini designer app-opplevelsen, bygger iOS med Swift og Android med Kotlin, og kobler begge plattformene til sikre backend-API-er.',
      outcome: 'En lanseringsklar mobil løsning med produktanalyse, release-støtte og rom for å skalere.'
    },
    {
      name: 'Modernisering av forretningsapper',
      problem: 'Eksisterende verktøy er trege, fragmenterte eller passer ikke lenger måten team og kunder jobber på.',
      solution:
        'Vi bygger kritiske arbeidsflyter på nytt som moderne mobil-, web- og backend-systemer — med tydeligere UX og sterkere integrasjonspunkter.',
      outcome: 'Mindre operativ friksjon, bedre adopsjon og programvare som støtter dagens forretningsprosesser.'
    },
    {
      name: 'Kundeplattformer',
      problem:
        'Kundene forventer rask digital tilgang via mobil og web, men interne systemer bremser opplevelsen.',
      solution:
        'Gemini bygger kundeportaler, kontoområder, mobile selvbetjeningsflyter og sammenkoblede dashboards på pålitelige API-er.',
      outcome: 'En smidigere kundereise på tvers av iOS, Android og nettleser.'
    },
    {
      name: 'Ledelsesinnsikt',
      problem: 'Ledelsen mangler sanntidsklarhet om hva som driver vekst, margin og operativ friksjon.',
      solution:
        'Gemini bygger samlede innsiktslag som oversetter produkt-, salgs- og driftsdata til beslutningsklare signaler.',
      outcome: 'Skarpere strategiske beslutninger med kontinuerlig oversikt over forretningsytelsen.'
    }
  ],
  technologyStack: [
    {
      name: 'Backend-utvikling',
      summary: 'Sikre API-er, skytjenester, databaser, autentisering, integrasjoner og datamodeller som et pålitelig fundament.'
    },
    {
      name: 'Frontend-utvikling',
      summary: 'Angular- og TypeScript-frontends med responsive layouter, gjenbrukbare komponenter og tydelig UX.'
    },
    {
      name: 'iOS-utvikling',
      summary: 'Native Swift-apper for iPhone og iPad — SwiftUI, UIKit, enhets-API-er, testing og App Store-lansering.'
    },
    {
      name: 'Android-utvikling',
      summary: 'Native Kotlin-apper med Jetpack Compose, offline-flyter, push-varsler og Google Play-leveranse.'
    },
    {
      name: 'Mobil produktstrategi',
      summary: 'Spesialisert mobil løsningsdesign for små bedrifter, voksende team og enterprise-miljøer.'
    },
    {
      name: 'AI-automatisering',
      summary: 'Anvendt AI for arbeidsflytautomatisering, beslutningsstøtte, support-drift og forretningsdashboards.'
    },
    {
      name: 'DevOps og sky',
      summary: 'CI/CD, infrastrukturautomatisering, overvåking, observability og release-pipelines for stabil vekst.'
    },
    {
      name: 'Kvalitet og release',
      summary: 'Automatiserte sjekker, manuell QA, App Store- og Play-forberedelse, gradvis utrulling og støtte etter lansering.'
    }
  ],
  terminalScript: [
    { kind: 'cmd', text: 'gemini init --project "your-next-app"' },
    { kind: 'ok', text: 'Discovery og produktarkitektur fullført' },
    { kind: 'out', text: 'Stack: Swift · Kotlin · Angular · Node.js' },
    { kind: 'cmd', text: 'gemini build --platforms ios android web' },
    { kind: 'ok', text: 'Native builds kompilert · tester grønne · CI/CD aktiv' },
    { kind: 'cmd', text: 'gemini ship --env production' },
    { kind: 'accent', text: '▲ Live på <90 dager · 99.9% oppetid · AI enabled' }
  ]
};

const sv: SiteContent = {
  header: {
    cta: 'Starta ett projekt',
    menuToggle: 'Växla meny',
    languageAria: 'Välj språk',
    theme: { label: 'Utseende', auto: 'Auto', light: 'Ljust', dark: 'Mörkt' }
  },
  hero: {
    statusPill: 'Tillgänglig för nya projekt',
    titleLead: 'Mobilappar. Webbplattformar.',
    titleAccent: 'AI-system.',
    lead: 'Gemini utvecklar nativa iOS- och Android-appar, moderna frontends, robusta backends och AI-drivna arbetsflöden — byggda från start till mål, live på under 90 dagar.',
    ctaPrimary: 'Starta ett projekt',
    ctaSecondary: 'Se tjänster',
    chipsAria: 'Kärnteknologier',
    statsAria: 'Utvalda nyckeltal',
    figureNote: 'En concurrency-säker observable store från en iOS-klient i produktion. Varje projekt levererar kod vi står för offentligt.'
  },
  sections: {
    capabilities: {
      eyebrow: 'Tjänster',
      title: 'Ett specialiserat team för appar, plattformar och backends.',
      copy: 'Fokus ligger på mjukvara som fungerar i vardagen: nativa mobilappar, stabila backend-system, snabba frontends och automation med direkt affärsnytta.'
    },
    impact: {
      eyebrow: 'Effekt',
      title: 'Mer fart, mindre friktion — produkter som skalar rent.',
      copy: 'Gemini kombinerar produktstrategi, mobilutveckling, backend-engineering och AI-automation till hållbara lösningar som går live snabbare och är enklare att vidareutveckla.',
      cta: 'Diskutera effekt'
    },
    projects: {
      eyebrow: 'Projekt',
      title: 'Digitala produkter för startups, medelstora företag och krävande organisationer.',
      copy: 'Fokus ligger på tydlighet: mobilappar, webbplattformar, backends och automation — byggda så att team, kunder och beslutsfattare kan lita på dem långsiktigt.'
    },
    referrals: {
      eyebrow: 'Omdömen',
      title: 'Team uppskattar struktur, tempo och mätbar leverans.',
      copy: 'Utvald feedback från team som behöver tydligt produktledarskap, stabil arkitektur och mätbart genomförande.'
    },
    aiLab: {
      eyebrow: 'AI Lab',
      title: 'Fyra sätt team tar in oss på.',
      copy: 'De flesta uppdrag börjar som något av dessa. Varje punkt beskriver läget vi kommer in i, hur vi angriper det och vad teamet får ut.'
    },
    technology: {
      eyebrow: 'Stack',
      title: 'Starka backends, snabba frontends, nativa mobilappar.',
      copy: 'Swift för iOS, Kotlin för Android, TypeScript för frontends, robusta API:er, molninfrastruktur och AI-tjänster — pragmatiskt kombinerade så att produkterna snabbt kan användas och driftas stabilt.'
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Redo att bygga din nästa produkt?',
      copy: 'Mobilappar, webb-frontends, backend-system och AI-arbetsflöden — lätta att förstå, behagliga att använda och mätbart effektiva.',
      emailPlaceholder: 'du@foretag.se',
      emailAria: 'Jobb-e-postadress',
      emailInvalid: 'Ange en giltig e-postadress så att vi kan svara.',
      submit: 'Kostnadsfritt intromöte',
      note: '// Svar inom två arbetsdagar · NDA på begäran',
      sentTitle: 'Förfrågan mottagen',
      sentCopy: 'En riktig utvecklare svarar inom två arbetsdagar.',
      sentAction: 'Använd en annan adress'
    }
  },
  lab: {
    challengeLabel: '// Situation',
    approachLabel: '// Angreppssätt',
    outcomeLabel: '// Resultat'
  },
  footer: {
    blurb: 'Nativa appar, webbplattformar, backends och AI-automation för ambitiösa team — från discovery till produktion.',
    studioTitle: '// Studio',
    engineeringTitle: '// Engineering',
    contactTitle: '// Kontakt',
    linkCapabilities: 'Tjänster',
    linkProjects: 'Projekt',
    linkAiLab: 'AI Lab',
    linkStack: 'Stack',
    bookCall: 'Boka ett intromöte'
  },
  navItems: [
    { label: 'Tjänster', href: '#capabilities', id: 'capabilities' },
    { label: 'Effekt', href: '#impact', id: 'impact' },
    { label: 'Projekt', href: '#projects', id: 'projects' },
    { label: 'Omdömen', href: '#referrals', id: 'referrals' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab' },
    { label: 'Stack', href: '#technology', id: 'technology' }
  ],
  capabilities: [
    {
      tag: 'Mobile',
      title: 'Mobila lösningar',
      description:
        'Gemini utvecklar mobila produkter för små och stora företag — från den första appidén till stabil drift.',
      value: 'Specialiserade mobila lösningar med tydlig produktlogik.',
      bullets: [
        'Discovery, UX-flöden och produktarkitektur',
        'MVP, uppskalning och enterprise-leverans',
        'Analys, releaseplanering och underhåll'
      ]
    },
    {
      tag: 'iOS',
      title: 'Nativ iOS-utveckling',
      description:
        'Nativa iOS-appar i Swift — byggda för prestanda, utmärkt användbarhet och ren App Store-leverans.',
      value: 'Premium-appar för iPhone och iPad för verkliga affärsprocesser.',
      bullets: [
        'Swift, SwiftUI och UIKit',
        'Enhets-API:er, push, kamera och plats',
        'App Store-förberedelse och releasestöd'
      ]
    },
    {
      tag: 'Android',
      title: 'Nativ Android-utveckling',
      description:
        'Android-appar med Kotlin, moderna UI-mönster och stabila dataflöden för smartphones, surfplattor och företagsenheter.',
      value: 'Pålitliga Android-produkter för team, kunder och drift.',
      bullets: [
        'Kotlin och Jetpack Compose',
        'Offline-synk, notiser, säker lagring',
        'Google Play-lansering och enhetstestning'
      ]
    },
    {
      tag: 'Backend',
      title: 'Backend-engineering',
      description:
        'Robusta backends kopplar samman mobilappar, webb-frontends, databaser och externa system till hållbara digitala produkter.',
      value: 'API:er, autentisering och datamodeller som klarar tillväxt.',
      bullets: [
        'REST- och händelsedrivna API:er',
        'Molntjänster, databaser, integrationer',
        'Säkerhet, behörigheter, granskningsbara arbetsflöden'
      ]
    },
    {
      tag: 'Frontend',
      title: 'Frontend-plattformar',
      description:
        'Snabba webb-frontends och interna plattformar med tydlig användarstyrning, responsiv layout och ren komponentstruktur.',
      value: 'Moderna frontends för kundportaler, dashboards och SaaS-produkter.',
      bullets: [
        'Angular, TypeScript, responsiva UI-system',
        'Designsystem och återanvändbara komponenter',
        'Prestanda, tillgänglighet, konverteringskvalitet'
      ]
    },
    {
      tag: 'AI',
      title: 'AI-automatiserade arbetsflöden',
      description:
        'AI används där den mätbart förbättrar mjukvaran: automation, prioritering, support och operativa beslut.',
      value: 'Mindre manuell friktion, snabbare beslut.',
      bullets: [
        'Kartläggning och omdesign av arbetsflöden',
        'AI-driven uppgiftsorkestrering',
        'Dashboards, styrning och mänsklig granskning'
      ]
    }
  ],
  impactMetrics: [
    {
      numeric: 41,
      prefix: '',
      suffix: '%',
      value: '41%',
      label: 'Kortare processtider',
      detail: 'Efter strukturerad automation av återkommande operativa arbetsflöden.'
    },
    {
      numeric: 29,
      prefix: '',
      suffix: '%',
      value: '29%',
      label: 'Omsättningslyft',
      detail: 'Genom funnel-optimering, intelligent routning och AI-beslutsstöd.'
    },
    {
      numeric: 82,
      prefix: '',
      suffix: '%',
      value: '82%',
      label: 'Automationstäckning',
      detail: 'Över återkommande uppgifter inom sälj, service och intern drift.'
    },
    {
      numeric: 90,
      prefix: '<',
      suffix: 'd',
      value: '<90d',
      label: 'Typisk lansering',
      detail: 'Från discovery till produktiva, AI-redo affärsresultat.'
    }
  ],
  projectHighlights: [
    {
      company: 'Siemens',
      project: 'Industrial Work Management Hub',
      challenge:
        'Komplex telemetri och processtyrning var utspridda över separata system, konsoler och team.',
      result:
        'Enhetlig AI-driven övervakning och arbetsflödesautomation förbättrade incidenthantering och tillförlitlighet.',
      tags: ['AI Ops', 'Automation', 'Monitoring']
    },
    {
      company: 'Bosch',
      project: 'Connected Product Delivery Platform',
      challenge: 'Produkt- och tjänstedatapipelines behövde starkare automation, synlighet och konsekvens.',
      result:
        'Integrerad digital plattform med ML-insiktsflöden som avsevärt minskade manuellt processarbete.',
      tags: ['Platform', 'ML', 'Data']
    },
    {
      company: 'Deutsche Telekom',
      project: 'Telecom Workflow Automation Program',
      challenge: 'Tjänsteflöden med hög volym fördröjde aktivering, support och kvalitetssäkring.',
      result:
        'AI-driven orkestrering och verifiering snabbade upp tjänstecykler och förbättrade kundutfall.',
      tags: ['Orchestration', 'Telecom', 'AI']
    },
    {
      company: 'Department of Justice',
      project: 'Secure Workflow Modernization',
      challenge: 'Verksamhetskritiska arbetsflöden krävde säker modernisering med strikt kontroll och upptid.',
      result:
        'Motståndskraftigt digitalt driftslager med automationskontroller och granskningsbar processintelligens.',
      tags: ['Security', 'GovTech', 'Compliance']
    },
    {
      company: 'ICA Banken',
      project: 'Smart Banking Operations Engine',
      challenge: 'Den finansiella verksamheten behövde snabbare beslutsloopar för risk, service och rapportering.',
      result:
        'ML-förstärkt automation och analys förbättrade bearbetningshastighet och beslutskvalitet.',
      tags: ['FinTech', 'ML', 'Analytics']
    }
  ],
  clientReferrals: [
    {
      client: 'Siemens',
      initials: 'SI',
      role: 'Head of Digital Operations',
      feedback:
        'Gemini översatte en komplex moderniserings-roadmap till en tydlig lanseringssekvens och levererade snabbt.',
      impact: 'Automationstäckningen ökade och processtiderna sjönk över flera driftsteam.'
    },
    {
      client: 'Bosch',
      initials: 'BO',
      role: 'Program Director, Connected Systems',
      feedback:
        'Teamet kombinerade stark engineering-kvalitet med praktiska AI-användningsfall som våra affärsenheter snabbt kunde ta till sig.',
      impact: 'Det manuella koordineringsarbetet minskade medan leveranskonsekvensen ökade mätbart.'
    },
    {
      client: 'Deutsche Telekom',
      initials: 'DT',
      role: 'Senior Transformation Manager',
      feedback:
        'Gemini levererade ett skalbart automationslager som matchade komplexiteten och tempot i telekom-arbetsflöden.',
      impact: 'Tjänsteaktiveringen snabbades upp och operativa problem löstes betydligt fortare.'
    },
    {
      client: 'Department of Justice',
      initials: 'DJ',
      role: 'Technology Modernization Lead',
      feedback:
        'Genomförandet var disciplinerat, säkert och resultatorienterat — från discovery till deployment.',
      impact: 'Kritiska arbetsflöden fick spårbarhet, motståndskraft och mätbar effektivitet.'
    },
    {
      client: 'ICA Banken',
      initials: 'IB',
      role: 'Digital Banking Operations Manager',
      feedback:
        'Gemini hjälpte oss att omsätta AI från koncept till praktiskt värde i våra kärnprocesser.',
      impact: 'Beslutsflödet förbättrades och flaskhalsar i bankverksamheten minskade.'
    },
    {
      client: 'Global Retail Platform',
      initials: 'GR',
      role: 'VP of Technology',
      feedback:
        'Engineering, DevOps och AI i ett flöde — det tog bort leveransfriktionen omedelbart.',
      impact: 'Releasetakten ökade och konverterings- och retentionstalen pekade uppåt redan första kvartalet.'
    }
  ],
  useCases: [
    {
      name: 'Lansering av mobilprodukt',
      problem:
        'En ny affärsidé behöver en tydlig mobilprodukt, nativ appleverans, backend-tjänster och en realistisk releaseväg.',
      solution:
        'Gemini designar appupplevelsen, bygger iOS med Swift och Android med Kotlin och kopplar båda plattformarna till säkra backend-API:er.',
      outcome: 'En lanseringsklar mobil lösning med produktanalys, releasestöd och utrymme att skala.'
    },
    {
      name: 'Modernisering av affärsappar',
      problem: 'Befintliga verktyg är långsamma, fragmenterade eller matchar inte längre hur team och kunder arbetar.',
      solution:
        'Vi bygger om kritiska arbetsflöden som moderna mobil-, webb- och backend-system — med tydligare UX och starkare integrationspunkter.',
      outcome: 'Mindre operativ friktion, bättre adoption och mjukvara som bär dagens affärsprocesser.'
    },
    {
      name: 'Kundplattformar',
      problem:
        'Kunder förväntar sig snabb digital åtkomst via mobil och webb, men interna system bromsar upplevelsen.',
      solution:
        'Gemini bygger kundportaler, kontoytor, mobila självbetjäningsflöden och sammankopplade dashboards på pålitliga API:er.',
      outcome: 'En smidigare kundresa över iOS, Android och webbläsare.'
    },
    {
      name: 'Ledningsinsikter',
      problem: 'Ledningen saknar realtidsklarhet om vad som driver tillväxt, marginal och operativ friktion.',
      solution:
        'Gemini bygger enhetliga insiktslager som översätter produkt-, sälj- och driftsdata till beslutsklara signaler.',
      outcome: 'Skarpare strategiska beslut med kontinuerlig överblick över affärsresultatet.'
    }
  ],
  technologyStack: [
    {
      name: 'Backend-utveckling',
      summary: 'Säkra API:er, molntjänster, databaser, autentisering, integrationer och datamodeller som en pålitlig grund.'
    },
    {
      name: 'Frontend-utveckling',
      summary: 'Angular- och TypeScript-frontends med responsiva layouter, återanvändbara komponenter och tydlig UX.'
    },
    {
      name: 'iOS-utveckling',
      summary: 'Nativa Swift-appar för iPhone och iPad — SwiftUI, UIKit, enhets-API:er, testning och App Store-lansering.'
    },
    {
      name: 'Android-utveckling',
      summary: 'Nativa Kotlin-appar med Jetpack Compose, offline-flöden, pushnotiser och Google Play-leverans.'
    },
    {
      name: 'Mobil produktstrategi',
      summary: 'Specialiserad mobil lösningsdesign för småföretag, växande team och enterprise-miljöer.'
    },
    {
      name: 'AI-automation',
      summary: 'Tillämpad AI för arbetsflödesautomation, beslutsstöd, supportverksamhet och affärsdashboards.'
    },
    {
      name: 'DevOps och moln',
      summary: 'CI/CD, infrastrukturautomation, övervakning, observability och release-pipelines för stabil tillväxt.'
    },
    {
      name: 'Kvalitet och release',
      summary: 'Automatiserade kontroller, manuell QA, App Store- och Play-förberedelse, stegvis utrullning och stöd efter lansering.'
    }
  ],
  terminalScript: [
    { kind: 'cmd', text: 'gemini init --project "your-next-app"' },
    { kind: 'ok', text: 'Discovery och produktarkitektur klar' },
    { kind: 'out', text: 'Stack: Swift · Kotlin · Angular · Node.js' },
    { kind: 'cmd', text: 'gemini build --platforms ios android web' },
    { kind: 'ok', text: 'Nativa builds kompilerade · tester gröna · CI/CD aktiv' },
    { kind: 'cmd', text: 'gemini ship --env production' },
    { kind: 'accent', text: '▲ Live på <90 dagar · 99.9% upptid · AI enabled' }
  ]
};

const fr: SiteContent = {
  header: {
    cta: 'Lancer un projet',
    menuToggle: 'Afficher/masquer le menu',
    languageAria: 'Choisir la langue',
    theme: { label: 'Apparence', auto: 'Auto', light: 'Clair', dark: 'Sombre' }
  },
  hero: {
    statusPill: 'Disponible pour de nouveaux projets',
    titleLead: 'Apps mobiles. Plateformes web.',
    titleAccent: 'Systèmes IA.',
    lead: 'Gemini développe des apps natives iOS et Android, des frontends modernes, des backends robustes et des workflows dopés à l’IA — conçus de bout en bout, en ligne en moins de 90 jours.',
    ctaPrimary: 'Lancer un projet',
    ctaSecondary: 'Voir les services',
    chipsAria: 'Technologies clés',
    statsAria: 'Indicateurs sélectionnés',
    figureNote: 'Un store observable sûr en concurrence, issu d’un client iOS en production. Chaque projet livre du code que nous assumons publiquement.'
  },
  sections: {
    capabilities: {
      eyebrow: 'Services',
      title: 'Une équipe spécialisée pour les apps, les plateformes et les backends.',
      copy: 'L’accent est mis sur des logiciels qui fonctionnent au quotidien : apps mobiles natives, systèmes backend solides, frontends rapides et automatisation à valeur business directe.'
    },
    impact: {
      eyebrow: 'Impact',
      title: 'Plus de vitesse, moins de friction — des produits qui passent à l’échelle proprement.',
      copy: 'Gemini combine stratégie produit, développement mobile, ingénierie backend et automatisation IA en solutions robustes, mises en ligne plus vite et plus faciles à faire évoluer.',
      cta: 'Discuter de l’impact'
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Des produits digitaux pour startups, PME et organisations exigeantes.',
      copy: 'L’accent est mis sur la clarté : apps mobiles, plateformes web, backends et automatisation — conçus pour que les équipes, les clients et les décideurs puissent s’y fier durablement.'
    },
    referrals: {
      eyebrow: 'Témoignages',
      title: 'Les équipes apprécient la structure, le rythme et des livrables mesurables.',
      copy: 'Une sélection de retours d’équipes qui ont besoin d’un leadership produit clair, d’une architecture stable et d’une exécution mesurable.'
    },
    aiLab: {
      eyebrow: 'AI Lab',
      title: 'Quatre façons dont les équipes font appel à nous.',
      copy: 'La plupart des missions commencent ainsi. Chacune décrit la situation qui nous est confiée, notre approche et ce que l’équipe en retire.'
    },
    technology: {
      eyebrow: 'Stack',
      title: 'Des backends solides, des frontends rapides, des apps mobiles natives.',
      copy: 'Swift pour iOS, Kotlin pour Android, TypeScript pour les frontends, des API robustes, une infrastructure cloud et des services IA — combinés avec pragmatisme pour des produits vite utilisables et stables en exploitation.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Prêt à construire votre prochain produit ?',
      copy: 'Apps mobiles, frontends web, systèmes backend et workflows IA — faciles à comprendre, agréables à utiliser et d’une efficacité mesurable.',
      emailPlaceholder: 'vous@entreprise.fr',
      emailAria: 'Adresse e-mail professionnelle',
      emailInvalid: 'Saisissez une adresse e-mail valide pour que nous puissions répondre.',
      submit: 'Premier échange gratuit',
      note: '// Réponse sous deux jours ouvrés · NDA sur demande',
      sentTitle: 'Demande reçue',
      sentCopy: 'Un vrai ingénieur répond sous deux jours ouvrés.',
      sentAction: 'Utiliser une autre adresse'
    }
  },
  lab: {
    challengeLabel: '// Situation',
    approachLabel: '// Approche',
    outcomeLabel: '// Résultat'
  },
  footer: {
    blurb: 'Apps natives, plateformes web, backends et automatisation IA pour des équipes ambitieuses — de la discovery à la production.',
    studioTitle: '// Studio',
    engineeringTitle: '// Engineering',
    contactTitle: '// Contact',
    linkCapabilities: 'Services',
    linkProjects: 'Projets',
    linkAiLab: 'AI Lab',
    linkStack: 'Stack',
    bookCall: 'Réserver un premier échange'
  },
  navItems: [
    { label: 'Services', href: '#capabilities', id: 'capabilities' },
    { label: 'Impact', href: '#impact', id: 'impact' },
    { label: 'Projets', href: '#projects', id: 'projects' },
    { label: 'Témoignages', href: '#referrals', id: 'referrals' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab' },
    { label: 'Stack', href: '#technology', id: 'technology' }
  ],
  capabilities: [
    {
      tag: 'Mobile',
      title: 'Solutions mobiles',
      description:
        'Gemini développe des produits mobiles pour petites et grandes entreprises — de la première idée d’app jusqu’à une exploitation stable.',
      value: 'Des solutions mobiles spécialisées avec une logique produit claire.',
      bullets: [
        'Discovery, parcours UX et architecture produit',
        'MVP, montée en charge et livraison enterprise',
        'Analytics, planification des releases et maintenance'
      ]
    },
    {
      tag: 'iOS',
      title: 'Développement iOS natif',
      description:
        'Des apps iOS natives en Swift — pensées pour la performance, une excellente ergonomie et une livraison App Store irréprochable.',
      value: 'Des apps iPhone et iPad premium pour de vrais processus métier.',
      bullets: [
        'Swift, SwiftUI et UIKit',
        'API des appareils, push, caméra et géolocalisation',
        'Préparation App Store et accompagnement des releases'
      ]
    },
    {
      tag: 'Android',
      title: 'Développement Android natif',
      description:
        'Des apps Android en Kotlin, avec des patterns UI modernes et des flux de données stables pour smartphones, tablettes et terminaux professionnels.',
      value: 'Des produits Android fiables pour les équipes, les clients et les opérations.',
      bullets: [
        'Kotlin et Jetpack Compose',
        'Synchronisation hors ligne, notifications, stockage sécurisé',
        'Publication Google Play et tests sur appareils'
      ]
    },
    {
      tag: 'Backend',
      title: 'Ingénierie backend',
      description:
        'Des backends robustes relient apps mobiles, frontends web, bases de données et systèmes externes en produits digitaux résilients.',
      value: 'Des API, une authentification et des modèles de données qui résistent à la croissance.',
      bullets: [
        'API REST et événementielles',
        'Services cloud, bases de données, intégrations',
        'Sécurité, permissions, workflows auditables'
      ]
    },
    {
      tag: 'Frontend',
      title: 'Plateformes frontend',
      description:
        'Des frontends web rapides et des plateformes internes avec un parcours utilisateur clair, un layout responsive et une structure de composants propre.',
      value: 'Des frontends modernes pour portails clients, dashboards et produits SaaS.',
      bullets: [
        'Angular, TypeScript, systèmes UI responsives',
        'Design systems et composants réutilisables',
        'Performance, accessibilité, qualité de conversion'
      ]
    },
    {
      tag: 'AI',
      title: 'Automatisation des workflows par l’IA',
      description:
        'L’IA est utilisée là où elle améliore le logiciel de façon mesurable : automatisation, priorisation, support et décisions opérationnelles.',
      value: 'Moins de friction manuelle, des décisions plus rapides.',
      bullets: [
        'Cartographie et refonte des workflows',
        'Orchestration des tâches assistée par l’IA',
        'Dashboards, gouvernance et validation humaine'
      ]
    }
  ],
  impactMetrics: [
    {
      numeric: 41,
      prefix: '',
      suffix: '%',
      value: '41%',
      label: 'Des processus plus courts',
      detail: 'Après l’automatisation structurée des workflows opérationnels récurrents.'
    },
    {
      numeric: 29,
      prefix: '',
      suffix: '%',
      value: '29%',
      label: 'Hausse du chiffre d’affaires',
      detail: 'Grâce à l’optimisation du funnel, au routage intelligent et à l’aide à la décision par l’IA.'
    },
    {
      numeric: 82,
      prefix: '',
      suffix: '%',
      value: '82%',
      label: 'Couverture d’automatisation',
      detail: 'Sur les tâches récurrentes en vente, service et opérations internes.'
    },
    {
      numeric: 90,
      prefix: '<',
      suffix: 'j',
      value: '<90j',
      label: 'Lancement type',
      detail: 'De la discovery à des résultats business productifs et prêts pour l’IA.'
    }
  ],
  projectHighlights: [
    {
      company: 'Siemens',
      project: 'Industrial Work Management Hub',
      challenge:
        'La télémétrie complexe et le pilotage des processus étaient dispersés entre systèmes, consoles et équipes distincts.',
      result:
        'Une supervision unifiée pilotée par l’IA et l’automatisation des workflows ont amélioré la réponse aux incidents et la fiabilité.',
      tags: ['AI Ops', 'Automation', 'Monitoring']
    },
    {
      company: 'Bosch',
      project: 'Connected Product Delivery Platform',
      challenge: 'Les pipelines de données produits et services avaient besoin de plus d’automatisation, de visibilité et de cohérence.',
      result:
        'Une plateforme digitale intégrée avec des flux d’insights ML a fortement réduit l’effort manuel sur les processus.',
      tags: ['Platform', 'ML', 'Data']
    },
    {
      company: 'Deutsche Telekom',
      project: 'Telecom Workflow Automation Program',
      challenge: 'Des workflows de service à fort volume ralentissaient l’activation, le support et l’assurance qualité.',
      result:
        'L’orchestration et la vérification pilotées par l’IA ont accéléré les cycles de service et amélioré les résultats clients.',
      tags: ['Orchestration', 'Telecom', 'AI']
    },
    {
      company: 'Department of Justice',
      project: 'Secure Workflow Modernization',
      challenge: 'Des workflows critiques exigeaient une modernisation sécurisée avec un contrôle strict et une haute disponibilité.',
      result:
        'Une couche d’opérations digitales résiliente avec des contrôles d’automatisation et une intelligence des processus auditable.',
      tags: ['Security', 'GovTech', 'Compliance']
    },
    {
      company: 'ICA Banken',
      project: 'Smart Banking Operations Engine',
      challenge: 'Les opérations financières avaient besoin de boucles de décision plus rapides pour le risque, le service et le reporting.',
      result:
        'L’automatisation renforcée par le ML et l’analytics ont amélioré la vitesse de traitement et la qualité des décisions.',
      tags: ['FinTech', 'ML', 'Analytics']
    }
  ],
  clientReferrals: [
    {
      client: 'Siemens',
      initials: 'SI',
      role: 'Head of Digital Operations',
      feedback:
        'Gemini a traduit une roadmap de modernisation complexe en une séquence de lancement claire et a livré rapidement.',
      impact: 'La couverture d’automatisation a augmenté et les temps de cycle ont baissé dans plusieurs équipes opérationnelles.'
    },
    {
      client: 'Bosch',
      initials: 'BO',
      role: 'Program Director, Connected Systems',
      feedback:
        'L’équipe a combiné une forte qualité d’ingénierie avec des cas d’usage IA concrets que nos business units ont pu adopter rapidement.',
      impact: 'L’effort de coordination manuelle a baissé tandis que la cohérence des livraisons progressait de façon mesurable.'
    },
    {
      client: 'Deutsche Telekom',
      initials: 'DT',
      role: 'Senior Transformation Manager',
      feedback:
        'Gemini a livré une couche d’automatisation scalable, à la hauteur de la complexité et du rythme des workflows télécoms.',
      impact: 'L’activation des services s’est accélérée et les incidents opérationnels ont été résolus bien plus vite.'
    },
    {
      client: 'Department of Justice',
      initials: 'DJ',
      role: 'Technology Modernization Lead',
      feedback:
        'L’exécution a été disciplinée, sécurisée et orientée résultats — de la discovery au déploiement.',
      impact: 'Les workflows critiques ont gagné en traçabilité, en résilience et en efficacité mesurable.'
    },
    {
      client: 'ICA Banken',
      initials: 'IB',
      role: 'Digital Banking Operations Manager',
      feedback:
        'Gemini nous a aidés à transformer l’IA d’un concept en valeur concrète au sein de nos processus cœur de métier.',
      impact: 'Le flux de décision s’est amélioré et les goulets d’étranglement des opérations bancaires ont été réduits.'
    },
    {
      client: 'Global Retail Platform',
      initials: 'GR',
      role: 'VP of Technology',
      feedback:
        'Ingénierie, DevOps et IA dans un seul flux — cela a immédiatement éliminé la friction de livraison.',
      impact: 'La vélocité des releases a augmenté et les métriques de conversion et de rétention ont progressé dès le premier trimestre.'
    }
  ],
  useCases: [
    {
      name: 'Lancement de produit mobile',
      problem:
        'Une nouvelle idée business a besoin d’un produit mobile clair, d’une livraison d’app native, de services backend et d’un chemin de release réaliste.',
      solution:
        'Gemini conçoit l’expérience de l’app, développe iOS en Swift et Android en Kotlin, et connecte les deux plateformes à des API backend sécurisées.',
      outcome: 'Une solution mobile prête au lancement, avec analytics produit, accompagnement des releases et de la marge pour passer à l’échelle.'
    },
    {
      name: 'Modernisation d’apps métier',
      problem: 'Les outils existants sont lents, fragmentés ou ne correspondent plus à la façon de travailler des équipes et des clients.',
      solution:
        'Nous reconstruisons les workflows critiques en systèmes mobiles, web et backend modernes — avec une UX plus claire et des points d’intégration plus solides.',
      outcome: 'Moins de friction opérationnelle, une meilleure adoption et des logiciels qui portent les processus métier actuels.'
    },
    {
      name: 'Plateformes clients',
      problem:
        'Les clients attendent un accès digital rapide sur mobile et web, mais les systèmes internes freinent l’expérience.',
      solution:
        'Gemini construit des portails clients, des espaces de compte, des parcours self-service mobiles et des dashboards connectés sur des API fiables.',
      outcome: 'Un parcours client plus fluide sur iOS, Android et navigateur.'
    },
    {
      name: 'Intelligence de direction',
      problem: 'La direction manque de clarté en temps réel sur ce qui alimente la croissance, la marge et la friction opérationnelle.',
      solution:
        'Gemini construit des couches d’intelligence unifiées qui traduisent les données produit, ventes et opérations en signaux prêts pour la décision.',
      outcome: 'Des décisions stratégiques plus nettes avec une vision continue de la performance business.'
    }
  ],
  technologyStack: [
    {
      name: 'Développement backend',
      summary: 'API sécurisées, services cloud, bases de données, authentification, intégrations et modèles de données comme socle fiable.'
    },
    {
      name: 'Développement frontend',
      summary: 'Frontends Angular et TypeScript avec layouts responsives, composants réutilisables et UX claire.'
    },
    {
      name: 'Développement iOS',
      summary: 'Apps Swift natives pour iPhone et iPad — SwiftUI, UIKit, API des appareils, tests et publication App Store.'
    },
    {
      name: 'Développement Android',
      summary: 'Apps Kotlin natives avec Jetpack Compose, parcours hors ligne, notifications push et livraison Google Play.'
    },
    {
      name: 'Stratégie produit mobile',
      summary: 'Conception de solutions mobiles spécialisée pour petites entreprises, équipes en croissance et environnements enterprise.'
    },
    {
      name: 'Automatisation IA',
      summary: 'IA appliquée à l’automatisation des workflows, l’aide à la décision, les opérations de support et les dashboards business.'
    },
    {
      name: 'DevOps & Cloud',
      summary: 'CI/CD, automatisation d’infrastructure, monitoring, observabilité et pipelines de release pour une croissance stable.'
    },
    {
      name: 'Qualité & Release',
      summary: 'Contrôles automatisés, QA manuelle, préparation App Store et Play, déploiements progressifs et support post-lancement.'
    }
  ],
  terminalScript: [
    { kind: 'cmd', text: 'gemini init --project "your-next-app"' },
    { kind: 'ok', text: 'Discovery & architecture produit terminées' },
    { kind: 'out', text: 'Stack: Swift · Kotlin · Angular · Node.js' },
    { kind: 'cmd', text: 'gemini build --platforms ios android web' },
    { kind: 'ok', text: 'Builds natifs compilés · tests verts · CI/CD actif' },
    { kind: 'cmd', text: 'gemini ship --env production' },
    { kind: 'accent', text: '▲ En ligne en <90 jours · 99.9% de dispo · AI enabled' }
  ]
};

const it: SiteContent = {
  header: {
    cta: 'Avvia un progetto',
    menuToggle: 'Mostra/nascondi menu',
    languageAria: 'Seleziona la lingua',
    theme: { label: 'Aspetto', auto: 'Auto', light: 'Chiaro', dark: 'Scuro' }
  },
  hero: {
    statusPill: 'Disponibile per nuovi progetti',
    titleLead: 'App mobili. Piattaforme web.',
    titleAccent: 'Sistemi AI.',
    lead: 'Gemini sviluppa app native iOS e Android, frontend moderni, backend robusti e workflow potenziati dall’AI — progettati end-to-end, online in meno di 90 giorni.',
    ctaPrimary: 'Avvia un progetto',
    ctaSecondary: 'Scopri i servizi',
    chipsAria: 'Tecnologie principali',
    statsAria: 'Metriche selezionate',
    figureNote: 'Uno store osservabile e sicuro rispetto alla concorrenza, da un client iOS in produzione. Ogni progetto consegna codice che firmiamo pubblicamente.'
  },
  sections: {
    capabilities: {
      eyebrow: 'Servizi',
      title: 'Un team specializzato per app, piattaforme e backend.',
      copy: 'Il focus è su software che funziona nell’uso quotidiano: app mobili native, sistemi backend solidi, frontend veloci e automazione con valore di business diretto.'
    },
    impact: {
      eyebrow: 'Impatto',
      title: 'Più velocità, meno attrito — prodotti che scalano in modo pulito.',
      copy: 'Gemini unisce strategia di prodotto, sviluppo mobile, ingegneria backend e automazione AI in soluzioni solide, che vanno online più in fretta e sono più facili da far evolvere.',
      cta: 'Parliamo di impatto'
    },
    projects: {
      eyebrow: 'Progetti',
      title: 'Prodotti digitali per startup, PMI e organizzazioni esigenti.',
      copy: 'Il focus è sulla chiarezza: app mobili, piattaforme web, backend e automazione — costruiti perché team, clienti e decisori possano contarci nel lungo periodo.'
    },
    referrals: {
      eyebrow: 'Testimonianze',
      title: 'I team apprezzano struttura, ritmo e risultati misurabili.',
      copy: 'Una selezione di feedback da team che hanno bisogno di una guida di prodotto chiara, un’architettura stabile e un’esecuzione misurabile.'
    },
    aiLab: {
      eyebrow: 'AI Lab',
      title: 'Quattro modi in cui i team ci coinvolgono.',
      copy: 'La maggior parte dei progetti nasce così. Ognuno descrive la situazione che ci viene affidata, il nostro approccio e il risultato per il team.'
    },
    technology: {
      eyebrow: 'Stack',
      title: 'Backend solidi, frontend veloci, app mobili native.',
      copy: 'Swift per iOS, Kotlin per Android, TypeScript per i frontend, API robuste, infrastruttura cloud e servizi AI — combinati con pragmatismo perché i prodotti siano subito utilizzabili e stabili in esercizio.'
    },
    contact: {
      eyebrow: 'Contatti',
      title: 'Pronto a costruire il tuo prossimo prodotto?',
      copy: 'App mobili, frontend web, sistemi backend e workflow AI — facili da capire, piacevoli da usare e di efficacia misurabile.',
      emailPlaceholder: 'tu@azienda.it',
      emailAria: 'Indirizzo e-mail aziendale',
      emailInvalid: 'Inserisci un indirizzo e-mail valido così possiamo risponderti.',
      submit: 'Prima call gratuita',
      note: '// Risposta entro due giorni lavorativi · NDA su richiesta',
      sentTitle: 'Richiesta ricevuta',
      sentCopy: 'Un vero sviluppatore risponde entro due giorni lavorativi.',
      sentAction: 'Usa un altro indirizzo'
    }
  },
  lab: {
    challengeLabel: '// Situazione',
    approachLabel: '// Approccio',
    outcomeLabel: '// Risultato'
  },
  footer: {
    blurb: 'App native, piattaforme web, backend e automazione AI per team ambiziosi — dalla discovery alla produzione.',
    studioTitle: '// Studio',
    engineeringTitle: '// Engineering',
    contactTitle: '// Contatti',
    linkCapabilities: 'Servizi',
    linkProjects: 'Progetti',
    linkAiLab: 'AI Lab',
    linkStack: 'Stack',
    bookCall: 'Prenota una prima call'
  },
  navItems: [
    { label: 'Servizi', href: '#capabilities', id: 'capabilities' },
    { label: 'Impatto', href: '#impact', id: 'impact' },
    { label: 'Progetti', href: '#projects', id: 'projects' },
    { label: 'Testimonianze', href: '#referrals', id: 'referrals' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab' },
    { label: 'Stack', href: '#technology', id: 'technology' }
  ],
  capabilities: [
    {
      tag: 'Mobile',
      title: 'Soluzioni mobili',
      description:
        'Gemini sviluppa prodotti mobili per piccole e grandi aziende — dalla prima idea di app fino a un esercizio stabile.',
      value: 'Soluzioni mobili specializzate con una logica di prodotto chiara.',
      bullets: [
        'Discovery, flussi UX e architettura di prodotto',
        'MVP, scale-up e delivery enterprise',
        'Analytics, pianificazione delle release e manutenzione'
      ]
    },
    {
      tag: 'iOS',
      title: 'Sviluppo iOS nativo',
      description:
        'App iOS native in Swift — progettate per prestazioni, usabilità eccellente e una pubblicazione pulita sull’App Store.',
      value: 'App premium per iPhone e iPad per processi aziendali reali.',
      bullets: [
        'Swift, SwiftUI e UIKit',
        'API dei dispositivi, push, fotocamera e posizione',
        'Preparazione App Store e supporto alle release'
      ]
    },
    {
      tag: 'Android',
      title: 'Sviluppo Android nativo',
      description:
        'App Android con Kotlin, pattern UI moderni e flussi dati stabili per smartphone, tablet e dispositivi aziendali.',
      value: 'Prodotti Android affidabili per team, clienti e operations.',
      bullets: [
        'Kotlin e Jetpack Compose',
        'Sync offline, notifiche, archiviazione sicura',
        'Pubblicazione su Google Play e test sui dispositivi'
      ]
    },
    {
      tag: 'Backend',
      title: 'Ingegneria backend',
      description:
        'Backend robusti collegano app mobili, frontend web, database e sistemi esterni in prodotti digitali resilienti.',
      value: 'API, autenticazione e modelli dati che reggono la crescita.',
      bullets: [
        'API REST ed event-driven',
        'Servizi cloud, database, integrazioni',
        'Sicurezza, permessi, workflow verificabili'
      ]
    },
    {
      tag: 'Frontend',
      title: 'Piattaforme frontend',
      description:
        'Frontend web veloci e piattaforme interne con una guida utente chiara, layout responsive e una struttura a componenti pulita.',
      value: 'Frontend moderni per portali clienti, dashboard e prodotti SaaS.',
      bullets: [
        'Angular, TypeScript, sistemi UI responsive',
        'Design system e componenti riutilizzabili',
        'Prestazioni, accessibilità, qualità di conversione'
      ]
    },
    {
      tag: 'AI',
      title: 'Automazione dei workflow con l’AI',
      description:
        'L’AI viene applicata dove migliora il software in modo misurabile: automazione, prioritizzazione, supporto e decisioni operative.',
      value: 'Meno attrito manuale, decisioni più rapide.',
      bullets: [
        'Mappatura e ridisegno dei workflow',
        'Orchestrazione dei task potenziata dall’AI',
        'Dashboard, governance e revisione umana'
      ]
    }
  ],
  impactMetrics: [
    {
      numeric: 41,
      prefix: '',
      suffix: '%',
      value: '41%',
      label: 'Tempi di processo più brevi',
      detail: 'Dopo l’automazione strutturata dei workflow operativi ricorrenti.'
    },
    {
      numeric: 29,
      prefix: '',
      suffix: '%',
      value: '29%',
      label: 'Crescita del fatturato',
      detail: 'Grazie all’ottimizzazione del funnel, al routing intelligente e al supporto decisionale AI.'
    },
    {
      numeric: 82,
      prefix: '',
      suffix: '%',
      value: '82%',
      label: 'Copertura di automazione',
      detail: 'Sulle attività ricorrenti in vendite, assistenza e operations interne.'
    },
    {
      numeric: 90,
      prefix: '<',
      suffix: 'gg',
      value: '<90gg',
      label: 'Lancio tipico',
      detail: 'Dalla discovery a risultati di business produttivi e pronti per l’AI.'
    }
  ],
  projectHighlights: [
    {
      company: 'Siemens',
      project: 'Industrial Work Management Hub',
      challenge:
        'Telemetria complessa e controllo di processo erano distribuiti su sistemi, console e team separati.',
      result:
        'Monitoraggio unificato guidato dall’AI e automazione dei workflow hanno migliorato la risposta agli incidenti e l’affidabilità.',
      tags: ['AI Ops', 'Automation', 'Monitoring']
    },
    {
      company: 'Bosch',
      project: 'Connected Product Delivery Platform',
      challenge: 'Le pipeline di dati di prodotto e servizio richiedevano più automazione, visibilità e coerenza.',
      result:
        'Una piattaforma digitale integrata con flussi di insight ML ha ridotto sensibilmente il lavoro manuale sui processi.',
      tags: ['Platform', 'ML', 'Data']
    },
    {
      company: 'Deutsche Telekom',
      project: 'Telecom Workflow Automation Program',
      challenge: 'Workflow di servizio ad alto volume rallentavano attivazione, supporto e controllo qualità.',
      result:
        'Orchestrazione e verifica guidate dall’AI hanno accelerato i cicli di servizio e migliorato i risultati per i clienti.',
      tags: ['Orchestration', 'Telecom', 'AI']
    },
    {
      company: 'Department of Justice',
      project: 'Secure Workflow Modernization',
      challenge: 'Workflow mission-critical richiedevano una modernizzazione sicura con controllo rigoroso e alta disponibilità.',
      result:
        'Un livello di operations digitali resiliente con controlli di automazione e intelligence di processo verificabile.',
      tags: ['Security', 'GovTech', 'Compliance']
    },
    {
      company: 'ICA Banken',
      project: 'Smart Banking Operations Engine',
      challenge: 'Le operations finanziarie richiedevano cicli decisionali più rapidi per rischio, servizio e reporting.',
      result:
        'Automazione potenziata dal ML e analytics hanno migliorato velocità di elaborazione e qualità delle decisioni.',
      tags: ['FinTech', 'ML', 'Analytics']
    }
  ],
  clientReferrals: [
    {
      client: 'Siemens',
      initials: 'SI',
      role: 'Head of Digital Operations',
      feedback:
        'Gemini ha tradotto una roadmap di modernizzazione complessa in una sequenza di lancio chiara e ha consegnato rapidamente.',
      impact: 'La copertura di automazione è cresciuta e i tempi di processo sono calati in diversi team operativi.'
    },
    {
      client: 'Bosch',
      initials: 'BO',
      role: 'Program Director, Connected Systems',
      feedback:
        'Il team ha unito una forte qualità ingegneristica a casi d’uso AI concreti che le nostre business unit hanno adottato in fretta.',
      impact: 'Il lavoro manuale di coordinamento è diminuito, mentre la coerenza delle consegne è cresciuta in modo misurabile.'
    },
    {
      client: 'Deutsche Telekom',
      initials: 'DT',
      role: 'Senior Transformation Manager',
      feedback:
        'Gemini ha consegnato un livello di automazione scalabile, all’altezza della complessità e della velocità dei workflow telecom.',
      impact: 'Attivazione dei servizi più rapida e problemi operativi risolti molto più in fretta.'
    },
    {
      client: 'Department of Justice',
      initials: 'DJ',
      role: 'Technology Modernization Lead',
      feedback:
        'L’esecuzione è stata disciplinata, sicura e orientata ai risultati — dalla discovery al deployment.',
      impact: 'I workflow critici hanno guadagnato tracciabilità, resilienza ed efficienza misurabile.'
    },
    {
      client: 'ICA Banken',
      initials: 'IB',
      role: 'Digital Banking Operations Manager',
      feedback:
        'Gemini ci ha aiutato a trasformare l’AI da concetto a valore concreto dentro i nostri processi core.',
      impact: 'Flusso decisionale migliorato e colli di bottiglia nelle operations bancarie ridotti.'
    },
    {
      client: 'Global Retail Platform',
      initials: 'GR',
      role: 'VP of Technology',
      feedback:
        'Engineering, DevOps e AI in un unico flusso — ha eliminato subito l’attrito nella delivery.',
      impact: 'La velocità di release è aumentata e le metriche di conversione e retention sono cresciute già nel primo trimestre.'
    }
  ],
  useCases: [
    {
      name: 'Lancio di un prodotto mobile',
      problem:
        'Una nuova idea di business ha bisogno di un prodotto mobile chiaro, di app native, di servizi backend e di un percorso di release realistico.',
      solution:
        'Gemini progetta l’esperienza dell’app, sviluppa iOS con Swift e Android con Kotlin e collega entrambe le piattaforme ad API backend sicure.',
      outcome: 'Una soluzione mobile pronta al lancio, con analytics di prodotto, supporto alle release e spazio per scalare.'
    },
    {
      name: 'Modernizzazione delle app aziendali',
      problem: 'Gli strumenti esistenti sono lenti, frammentati o non rispecchiano più il modo di lavorare di team e clienti.',
      solution:
        'Ricostruiamo i workflow critici come sistemi mobile, web e backend moderni — con una UX più chiara e punti di integrazione più solidi.',
      outcome: 'Meno attrito operativo, migliore adozione e software che sostiene i processi di business attuali.'
    },
    {
      name: 'Piattaforme clienti',
      problem:
        'I clienti si aspettano un accesso digitale rapido da mobile e web, ma i sistemi interni frenano l’esperienza.',
      solution:
        'Gemini costruisce portali clienti, aree account, flussi self-service mobili e dashboard connesse su API affidabili.',
      outcome: 'Un customer journey più fluido su iOS, Android e browser.'
    },
    {
      name: 'Intelligence direzionale',
      problem: 'Al management manca chiarezza in tempo reale su cosa guida crescita, margine e attrito operativo.',
      solution:
        'Gemini costruisce livelli di intelligence unificati che traducono dati di prodotto, vendite e operations in segnali pronti per le decisioni.',
      outcome: 'Decisioni strategiche più nitide con una visione continua delle performance di business.'
    }
  ],
  technologyStack: [
    {
      name: 'Sviluppo backend',
      summary: 'API sicure, servizi cloud, database, autenticazione, integrazioni e modelli dati come fondamenta affidabili.'
    },
    {
      name: 'Sviluppo frontend',
      summary: 'Frontend Angular e TypeScript con layout responsive, componenti riutilizzabili e UX chiara.'
    },
    {
      name: 'Sviluppo iOS',
      summary: 'App Swift native per iPhone e iPad — SwiftUI, UIKit, API dei dispositivi, testing e pubblicazione App Store.'
    },
    {
      name: 'Sviluppo Android',
      summary: 'App Kotlin native con Jetpack Compose, flussi offline, notifiche push e delivery su Google Play.'
    },
    {
      name: 'Strategia di prodotto mobile',
      summary: 'Progettazione specializzata di soluzioni mobili per piccole imprese, team in crescita e ambienti enterprise.'
    },
    {
      name: 'Automazione AI',
      summary: 'AI applicata all’automazione dei workflow, al supporto decisionale, alle operations di assistenza e alle dashboard di business.'
    },
    {
      name: 'DevOps & Cloud',
      summary: 'CI/CD, automazione dell’infrastruttura, monitoraggio, observability e pipeline di release per una crescita stabile.'
    },
    {
      name: 'Qualità & Release',
      summary: 'Controlli automatizzati, QA manuale, preparazione App Store e Play, rollout graduali e supporto post-lancio.'
    }
  ],
  terminalScript: [
    { kind: 'cmd', text: 'gemini init --project "your-next-app"' },
    { kind: 'ok', text: 'Discovery e architettura di prodotto completate' },
    { kind: 'out', text: 'Stack: Swift · Kotlin · Angular · Node.js' },
    { kind: 'cmd', text: 'gemini build --platforms ios android web' },
    { kind: 'ok', text: 'Build native compilate · test verdi · CI/CD attiva' },
    { kind: 'cmd', text: 'gemini ship --env production' },
    { kind: 'accent', text: '▲ Online in <90 giorni · 99.9% uptime · AI enabled' }
  ]
};

export const TRANSLATIONS: Record<LanguageCode, SiteContent> = {
  en,
  de,
  no,
  sv,
  fr,
  it
};
