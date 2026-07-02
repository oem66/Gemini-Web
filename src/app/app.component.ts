import { Component, computed, signal } from '@angular/core';

interface NavItem {
  label: string;
  href: string;
}

interface Capability {
  title: string;
  description: string;
  value: string;
  bullets: string[];
}

interface UseCase {
  name: string;
  problem: string;
  solution: string;
  outcome: string;
}

interface Technology {
  name: string;
  summary: string;
}

interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

interface ProjectHighlight {
  company: string;
  project: string;
  challenge: string;
  result: string;
}

interface ClientReferral {
  client: string;
  role: string;
  feedback: string;
  impact: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly year = new Date().getFullYear();

  readonly navItems: NavItem[] = [
    { label: 'Funktionen', href: '#capabilities' },
    { label: 'Wirkung', href: '#impact' },
    { label: 'Ergebnisse', href: '#projects' },
    { label: 'Stimmen', href: '#referrals' },
    { label: 'AI Lab', href: '#ai-lab' },
    { label: 'Stack', href: '#technology' },
    { label: 'Kontakt', href: '#contact' }
  ];

  readonly technologies: string[] = [
    'Backend APIs',
    'Frontend Apps',
    'iOS Swift',
    'Android Kotlin',
    'Mobile Solutions',
    'Cloud DevOps',
    'AI Automation',
    'Dashboards'
  ];

  readonly capabilities: Capability[] = [
    {
      title: 'Mobile Solutions',
      description:
        'Gemini entwickelt mobile Produkte fuer kleine und grosse Unternehmen, von der ersten App-Idee bis zum stabilen Betrieb.',
      value: 'Spezialisierte mobile Loesungen mit klarer Produktlogik.',
      bullets: ['Discovery, UX flows and product architecture', 'MVP, scale-up and enterprise app delivery', 'Analytics, release planning and maintenance']
    },
    {
      title: 'Native iOS Development',
      description:
        'Native iOS Apps werden in Swift entwickelt und auf Performance, gute Bedienbarkeit und saubere App-Store-Auslieferung ausgelegt.',
      value: 'Premium iPhone und iPad Apps fuer reale Geschaeftsprozesse.',
      bullets: ['Swift, SwiftUI and UIKit implementation', 'Device APIs, push, camera and location flows', 'App Store preparation and release support']
    },
    {
      title: 'Native Android Development',
      description:
        'Android Apps entstehen mit Kotlin, modernen UI-Patterns und stabilen Datenfluesse fuer Smartphones, Tablets und Business Devices.',
      value: 'Verlaessliche Android Produkte fuer Teams, Kunden und Operations.',
      bullets: ['Kotlin and Jetpack Compose development', 'Offline sync, notifications and secure storage', 'Google Play release and device testing']
    },
    {
      title: 'Backend Engineering',
      description:
        'Robuste Backends verbinden mobile Apps, Web-Frontends, Datenbanken und externe Systeme zu belastbaren digitalen Produkten.',
      value: 'APIs, Authentifizierung und Datenmodelle, die Wachstum aushalten.',
      bullets: ['REST and event-driven API development', 'Cloud services, databases and integrations', 'Security, permissions and audit-ready workflows']
    },
    {
      title: 'Frontend Platforms',
      description:
        'Wir bauen schnelle Web-Frontends und interne Plattformen mit klarer Nutzerfuehrung, responsivem Layout und sauberer Komponentenstruktur.',
      value: 'Moderne Frontends fuer Kundenportale, Dashboards und SaaS-Produkte.',
      bullets: ['Angular, TypeScript and responsive UI systems', 'Design systems and reusable components', 'Performance, accessibility and conversion quality']
    },
    {
      title: 'AI Workflow Automation',
      description:
        'AI wird dort eingesetzt, wo sie Softwareprodukte messbar verbessert: Automatisierung, Priorisierung, Support und operative Entscheidungen.',
      value: 'Weniger manuelle Reibung, schnellere Entscheidungen.',
      bullets: ['Workflow discovery and redesign', 'AI-assisted task orchestration', 'Dashboards, governance and human review']
    }
  ];

  readonly impactMetrics: ImpactMetric[] = [
    {
      value: '41%',
      label: 'Shorter process time',
      detail: 'After structured automation in recurring operational workflows.'
    },
    {
      value: '29%',
      label: 'Revenue lift',
      detail: 'Through funnel optimization, intelligent routing, and AI decision support.'
    },
    {
      value: '82%',
      label: 'Automation coverage',
      detail: 'Across recurring tasks in sales, service, and internal operations.'
    },
    {
      value: '<90d',
      label: 'Typical launch',
      detail: 'From discovery to live AI-enabled business outcomes.'
    }
  ];

  readonly projectHighlights: ProjectHighlight[] = [
    {
      company: 'Siemens',
      project: 'Industrial Work Management Hub',
      challenge:
        'Complex operational telemetry and process controls were spread across disconnected systems, consoles, and teams.',
      result:
        'Unified AI-driven monitoring and workflow automation improved incident response speed and operational reliability.'
    },
    {
      company: 'Bosch',
      project: 'Connected Product Delivery Platform',
      challenge: 'Product and service data pipelines required stronger automation, visibility, and delivery consistency.',
      result:
        'Built an integrated digital platform with ML-enabled insight flows that reduced manual process overhead.'
    },
    {
      company: 'Deutsche Telekom',
      project: 'Telecom Workflow Automation Program',
      challenge: 'High-volume service workflows created delays in activation, support, and quality assurance processes.',
      result:
        'Implemented AI-assisted orchestration and verification to accelerate service cycles and improve customer outcomes.'
    },
    {
      company: 'Department of Justice',
      project: 'Secure Workflow Modernization',
      challenge: 'Mission-critical workflows required secure modernization with strict control, traceability, and uptime.',
      result:
        'Delivered a resilient digital operations layer with automation controls and auditable process intelligence.'
    },
    {
      company: 'ICA Banken',
      project: 'Smart Banking Operations Engine',
      challenge: 'Financial operations needed faster decision loops for risk handling, service workflows, and reporting.',
      result:
        'Deployed ML-enhanced automation and analytics that improved processing speed and operational decision quality.'
    }
  ];

  readonly clientReferrals: ClientReferral[] = [
    {
      client: 'Siemens',
      role: 'Head of Digital Operations',
      feedback:
        'Gemini translated a complex modernization roadmap into a clear launch sequence and delivered quickly.',
      impact: 'Automation coverage increased and process lead times dropped across multiple operations teams.'
    },
    {
      client: 'Bosch',
      role: 'Program Director, Connected Systems',
      feedback:
        'The team combined strong engineering quality with practical AI use cases that our business units could adopt fast.',
      impact: 'Manual coordination overhead decreased while product and service delivery consistency improved.'
    },
    {
      client: 'Deutsche Telekom',
      role: 'Senior Transformation Manager',
      feedback:
        'Gemini delivered a scalable automation layer that aligned well with telecom workflow complexity and speed requirements.',
      impact: 'Service activation cycles accelerated and operational issue resolution became significantly faster.'
    },
    {
      client: 'Department of Justice',
      role: 'Technology Modernization Lead',
      feedback:
        'Execution was disciplined, secure, and outcome-driven from discovery through deployment.',
      impact: 'Critical workflows gained stronger traceability, resilience, and measurable efficiency improvements.'
    },
    {
      client: 'ICA Banken',
      role: 'Digital Banking Operations Manager',
      feedback:
        'Gemini helped us turn AI from concept into practical value within our core operational and reporting flows.',
      impact: 'Decision turnaround improved and process bottlenecks were reduced across banking operations.'
    },
    {
      client: 'Global Retail Platform',
      role: 'VP of Technology',
      feedback:
        'Their team integrated engineering, DevOps, and AI in one stream, which removed delivery friction immediately.',
      impact: 'Release velocity improved while conversion and retention metrics trended upward in the first quarter.'
    }
  ];

  readonly useCases: UseCase[] = [
    {
      name: 'Mobile Product Launch',
      problem: 'A new business idea needs a clear mobile product, native app delivery, backend services, and a realistic release path.',
      solution:
        'Gemini designs the app experience, builds iOS with Swift, Android with Kotlin, and connects both platforms to secure backend APIs.',
      outcome: 'A launch-ready mobile solution with product analytics, release support, and room to scale.'
    },
    {
      name: 'Business App Modernization',
      problem: 'Existing tools are slow, fragmented, or no longer fit the way teams and customers actually work.',
      solution:
        'We rebuild critical workflows as modern mobile, web, and backend systems with cleaner UX and stronger integration points.',
      outcome: 'Less operational friction, better adoption, and software that supports current business processes.'
    },
    {
      name: 'Customer Platforms',
      problem: 'Customers expect fast digital access across mobile and web, but internal systems often slow the experience down.',
      solution:
        'Gemini creates customer portals, account areas, mobile self-service flows, and connected dashboards on top of reliable APIs.',
      outcome: 'A smoother customer journey across iOS, Android, and browser-based touchpoints.'
    },
    {
      name: 'Executive Intelligence',
      problem: 'Leadership lacks real-time clarity on what is driving growth, margin, and operational friction.',
      solution:
        'Gemini builds unified intelligence layers combining product, sales, and operational data into decision-ready signals.',
      outcome: 'Sharper strategic decisions with continuous visibility into business performance.'
    }
  ];

  readonly technologyStack: Technology[] = [
    {
      name: 'Backend Development',
      summary: 'Secure APIs, cloud services, databases, auth, integrations, and data models for reliable product foundations.'
    },
    {
      name: 'Frontend Development',
      summary: 'Angular and TypeScript frontends with responsive layouts, reusable components, clear UX, and fast interactions.'
    },
    {
      name: 'iOS Development',
      summary: 'Native Swift apps for iPhone and iPad, including SwiftUI, UIKit, device APIs, testing, and App Store release.'
    },
    {
      name: 'Android Development',
      summary: 'Native Kotlin apps with Jetpack Compose, offline-ready flows, push notifications, and Google Play delivery.'
    },
    {
      name: 'Mobile Product Strategy',
      summary: 'Specialized mobile solution design for small businesses, growing teams, and large enterprise environments.'
    },
    {
      name: 'AI Automation',
      summary: 'Applied AI systems for workflow automation, decision support, support operations, and business dashboards.'
    },
    {
      name: 'DevOps and Cloud',
      summary: 'CI/CD, infrastructure automation, monitoring, observability, and release pipelines for stable growth.'
    },
    {
      name: 'Quality and Release',
      summary: 'Automated checks, manual QA, App Store and Google Play preparation, staged rollouts, and post-launch support.'
    }
  ];

  readonly activeUseCase = signal(0);

  readonly cursorX = signal(50);
  readonly cursorY = signal(50);
  readonly tiltX = signal(0);
  readonly tiltY = signal(0);

  readonly monthlyRevenue = signal(120000);
  readonly automationLift = signal(22);
  readonly aiUpside = signal(15);
  readonly efficiencyRecovery = signal(18);

  readonly monthlyAutomationValue = computed(() =>
    Math.round((this.monthlyRevenue() * this.automationLift()) / 100)
  );

  readonly monthlyAiValue = computed(() => Math.round((this.monthlyRevenue() * this.aiUpside()) / 100));

  readonly monthlyRecoveryValue = computed(() =>
    Math.round((this.monthlyRevenue() * this.efficiencyRecovery()) / 100)
  );

  readonly monthlyTotalValue = computed(
    () => this.monthlyAutomationValue() + this.monthlyAiValue() + this.monthlyRecoveryValue()
  );

  readonly annualTotalValue = computed(() => this.monthlyTotalValue() * 12);

  readonly monthlyRevenueLabel = computed(() => this.toCurrency(this.monthlyRevenue()));
  readonly monthlyAutomationLabel = computed(() => this.toCurrency(this.monthlyAutomationValue()));
  readonly monthlyAiLabel = computed(() => this.toCurrency(this.monthlyAiValue()));
  readonly monthlyRecoveryLabel = computed(() => this.toCurrency(this.monthlyRecoveryValue()));
  readonly monthlyTotalLabel = computed(() => this.toCurrency(this.monthlyTotalValue()));
  readonly annualTotalLabel = computed(() => this.toCurrency(this.annualTotalValue()));

  setUseCase(index: number): void {
    this.activeUseCase.set(index);
  }

  onHeroMove(event: MouseEvent, element: HTMLElement): void {
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const normalizedX = x / 100 - 0.5;
    const normalizedY = y / 100 - 0.5;

    this.cursorX.set(this.clampPercentage(x));
    this.cursorY.set(this.clampPercentage(y));
    this.tiltY.set(this.clampRange(normalizedX * 10, -7, 7));
    this.tiltX.set(this.clampRange(normalizedY * -9, -6, 6));
  }

  resetHeroFocus(): void {
    this.cursorX.set(50);
    this.cursorY.set(50);
    this.tiltX.set(0);
    this.tiltY.set(0);
  }

  setMonthlyRevenue(value: string): void {
    this.monthlyRevenue.set(Number(value));
  }

  setAutomationLift(value: string): void {
    this.automationLift.set(Number(value));
  }

  setAiUpside(value: string): void {
    this.aiUpside.set(Number(value));
  }

  setEfficiencyRecovery(value: string): void {
    this.efficiencyRecovery.set(Number(value));
  }

  private clampPercentage(value: number): number {
    return Math.max(0, Math.min(100, value));
  }

  private clampRange(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  private toCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  }
}
