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
    'Strukturbaum',
    'Zeitplan',
    'Kanban',
    'AI Automation',
    'Dashboards',
    'DevOps'
  ];

  readonly capabilities: Capability[] = [
    {
      title: 'AI Workflow Automation',
      description:
        'Gemini erkennt wiederkehrende Arbeitsschritte und macht daraus klare Automationen, die Teams ohne Komplexitaet nutzen koennen.',
      value: 'Weniger manuelle Reibung, schnellere Entscheidungen.',
      bullets: ['Workflow discovery and redesign', 'AI-assisted task orchestration', 'Governance, Rollen und Freigaben']
    },
    {
      title: 'Clear Product Frontends',
      description:
        'Wir bauen ruhige, schnelle Oberflaechen mit viel Weissraum, klarer Hierarchie und Motion, die Orientierung gibt.',
      value: 'Moderne Produktflaechen mit hoher Nutzbarkeit.',
      bullets: ['Responsive Angular interface systems', 'Scroll reveals and soft product motion', 'Performance and conversion optimization']
    },
    {
      title: 'Decision Dashboards',
      description:
        'Daten, Projektstatus und wirtschaftliche Signale werden in Dashboards zusammengefuehrt, die Fuehrung und Teams verstehen.',
      value: 'Bessere Priorisierung aus live verfuegbaren Signalen.',
      bullets: ['Predictive model deployment', 'Management dashboards', 'Continuous model tuning loops']
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
      name: 'Sales Operations',
      problem: 'Leads move between tools without one clear view, reducing response speed and conversion.',
      solution:
        'Gemini automates qualification, prioritization, and follow-up execution with AI-driven routing and scoring.',
      outcome: 'Higher close rates, faster response, and cleaner pipeline visibility.'
    },
    {
      name: 'Finance Workflows',
      problem: 'Invoice and reconciliation tasks consume capacity that should be focused on growth strategy.',
      solution:
        'We automate financial workflows, anomaly detection, and exception handling with ML-supported controls.',
      outcome: 'Lower processing friction, better accuracy, and improved planning confidence.'
    },
    {
      name: 'Customer Support',
      problem: 'Support demand scales faster than teams can maintain high-quality response times.',
      solution:
        'AI triage, intent detection, and agent copilots are integrated into your support stack and service flows.',
      outcome: 'Faster resolution, stronger customer experience, and lower operating cost.'
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
      name: 'Product Frontend',
      summary: 'Responsive Angular surfaces with clear layout systems, soft motion, and fast interactions.'
    },
    {
      name: 'Machine Learning',
      summary: 'Production-grade ML models for prediction, optimization, and operational prioritization.'
    },
    {
      name: 'AI Autopilot',
      summary: 'Applied AI systems that generate measurable business value across departments.'
    },
    {
      name: 'Cloud Telemetry',
      summary: 'Event streams, observability, and operating dashboards for live business awareness.'
    },
    {
      name: 'Mobile Workflows',
      summary: 'Premium mobile experiences connected to secure services, analytics, and retention loops.'
    },
    {
      name: 'DevOps',
      summary: 'CI/CD automation, infrastructure-as-code, and observability for stable growth.'
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
