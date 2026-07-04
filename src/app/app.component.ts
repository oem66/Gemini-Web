import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  afterNextRender,
  computed,
  inject,
  signal
} from '@angular/core';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

interface Capability {
  tag: string;
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
  numeric: number | null;
  prefix: string;
  suffix: string;
  value: string;
  label: string;
  detail: string;
}

interface ProjectHighlight {
  company: string;
  project: string;
  challenge: string;
  result: string;
  tags: string[];
}

interface ClientReferral {
  client: string;
  initials: string;
  role: string;
  feedback: string;
  impact: string;
}

type TerminalLineKind = 'cmd' | 'ok' | 'out' | 'accent';

interface TerminalLine {
  kind: TerminalLineKind;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly timeouts: ReturnType<typeof setTimeout>[] = [];

  readonly year = new Date().getFullYear();

  readonly navItems: NavItem[] = [
    { label: 'Leistungen', href: '#capabilities', id: 'capabilities' },
    { label: 'Wirkung', href: '#impact', id: 'impact' },
    { label: 'Projekte', href: '#projects', id: 'projects' },
    { label: 'Stimmen', href: '#referrals', id: 'referrals' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab' },
    { label: 'Stack', href: '#technology', id: 'technology' }
  ];

  readonly technologies: string[] = [
    'Swift',
    'Kotlin',
    'TypeScript',
    'Angular',
    'Node.js',
    'SwiftUI',
    'Jetpack Compose',
    'PostgreSQL',
    'Cloud DevOps',
    'AI Automation',
    'CI/CD',
    'GraphQL'
  ];

  readonly heroChips: string[] = ['iOS · Swift', 'Android · Kotlin', 'Web · Angular', 'Backend · Node', 'AI · Automation'];

  readonly capabilities: Capability[] = [
    {
      tag: 'Mobile',
      title: 'Mobile Solutions',
      description:
        'Gemini entwickelt mobile Produkte für kleine und große Unternehmen — von der ersten App-Idee bis zum stabilen Betrieb.',
      value: 'Spezialisierte mobile Lösungen mit klarer Produktlogik.',
      bullets: ['Discovery, UX-Flows und Produktarchitektur', 'MVP, Scale-up und Enterprise Delivery', 'Analytics, Release-Planung und Wartung']
    },
    {
      tag: 'iOS',
      title: 'Native iOS Development',
      description:
        'Native iOS Apps in Swift — ausgelegt auf Performance, exzellente Bedienbarkeit und saubere App-Store-Auslieferung.',
      value: 'Premium iPhone- und iPad-Apps für reale Geschäftsprozesse.',
      bullets: ['Swift, SwiftUI und UIKit', 'Device-APIs, Push, Kamera und Location', 'App-Store-Vorbereitung und Release-Support']
    },
    {
      tag: 'Android',
      title: 'Native Android Development',
      description:
        'Android Apps mit Kotlin, modernen UI-Patterns und stabilen Datenflüssen für Smartphones, Tablets und Business Devices.',
      value: 'Verlässliche Android-Produkte für Teams, Kunden und Operations.',
      bullets: ['Kotlin und Jetpack Compose', 'Offline-Sync, Notifications, Secure Storage', 'Google-Play-Release und Device-Testing']
    },
    {
      tag: 'Backend',
      title: 'Backend Engineering',
      description:
        'Robuste Backends verbinden mobile Apps, Web-Frontends, Datenbanken und externe Systeme zu belastbaren digitalen Produkten.',
      value: 'APIs, Authentifizierung und Datenmodelle, die Wachstum aushalten.',
      bullets: ['REST- und Event-getriebene APIs', 'Cloud Services, Datenbanken, Integrationen', 'Security, Permissions, Audit-fähige Workflows']
    },
    {
      tag: 'Frontend',
      title: 'Frontend Platforms',
      description:
        'Schnelle Web-Frontends und interne Plattformen mit klarer Nutzerführung, responsivem Layout und sauberer Komponentenstruktur.',
      value: 'Moderne Frontends für Kundenportale, Dashboards und SaaS-Produkte.',
      bullets: ['Angular, TypeScript, responsive UI-Systeme', 'Design Systems und wiederverwendbare Komponenten', 'Performance, Accessibility, Conversion-Qualität']
    },
    {
      tag: 'AI',
      title: 'AI Workflow Automation',
      description:
        'AI wird dort eingesetzt, wo sie Software messbar verbessert: Automatisierung, Priorisierung, Support und operative Entscheidungen.',
      value: 'Weniger manuelle Reibung, schnellere Entscheidungen.',
      bullets: ['Workflow Discovery und Redesign', 'AI-gestützte Task-Orchestrierung', 'Dashboards, Governance und Human Review']
    }
  ];

  readonly impactMetrics: ImpactMetric[] = [
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
  ];

  readonly projectHighlights: ProjectHighlight[] = [
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
  ];

  readonly clientReferrals: ClientReferral[] = [
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
  ];

  readonly useCases: UseCase[] = [
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
  ];

  readonly technologyStack: Technology[] = [
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
  ];

  private readonly terminalScript: TerminalLine[] = [
    { kind: 'cmd', text: 'gemini init --project "your-next-app"' },
    { kind: 'ok', text: 'Discovery & Produktarchitektur abgeschlossen' },
    { kind: 'out', text: 'Stack: Swift · Kotlin · Angular · Node.js' },
    { kind: 'cmd', text: 'gemini build --platforms ios android web' },
    { kind: 'ok', text: 'Native Builds kompiliert · Tests grün · CI/CD aktiv' },
    { kind: 'cmd', text: 'gemini ship --env production' },
    { kind: 'accent', text: '▲ Live in <90 Tagen · 99.9% Uptime · AI enabled' }
  ];

  readonly terminalLines = signal<TerminalLine[]>([]);
  readonly typingLine = signal('');
  readonly isTyping = signal(false);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly scrollProgress = signal(0);
  readonly activeSection = signal('');

  readonly activeUseCase = signal(0);

  readonly cursorX = signal(50);
  readonly cursorY = signal(50);
  readonly tiltX = signal(0);
  readonly tiltY = signal(0);

  readonly metricDisplays = signal<string[]>(
    this.impactMetrics.map((metric) => (metric.numeric === null ? metric.value : `${metric.prefix}0${metric.suffix}`))
  );
  private metricsAnimated = false;

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

  constructor() {
    afterNextRender(() => {
      this.startTerminal();
      this.observeReveals();
      this.observeSections();
      this.onWindowScroll();
    });

    this.destroyRef.onDestroy(() => this.timeouts.forEach(clearTimeout));
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const y = window.scrollY;
    this.scrolled.set(y > 24);

    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    this.scrollProgress.set(max > 0 ? Math.min(100, (y / max) * 100) : 0);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setUseCase(index: number): void {
    this.activeUseCase.set(index);
  }

  onCardMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  onHeroMove(event: MouseEvent, element: HTMLElement): void {
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const normalizedX = x / 100 - 0.5;
    const normalizedY = y / 100 - 0.5;

    this.cursorX.set(this.clampPercentage(x));
    this.cursorY.set(this.clampPercentage(y));
    this.tiltY.set(this.clampRange(normalizedX * 8, -6, 6));
    this.tiltX.set(this.clampRange(normalizedY * -7, -5, 5));
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

  private startTerminal(): void {
    let index = 0;

    const playNext = () => {
      if (index >= this.terminalScript.length) {
        this.schedule(() => {
          this.terminalLines.set([]);
          index = 0;
          playNext();
        }, 4600);
        return;
      }

      const line = this.terminalScript[index];

      if (line.kind === 'cmd') {
        this.isTyping.set(true);
        this.typingLine.set('');
        let char = 0;

        const typeChar = () => {
          if (char <= line.text.length) {
            this.typingLine.set(line.text.slice(0, char));
            char++;
            this.schedule(typeChar, 22 + Math.random() * 38);
          } else {
            this.isTyping.set(false);
            this.typingLine.set('');
            this.terminalLines.update((lines) => [...lines, line]);
            index++;
            this.schedule(playNext, 300);
          }
        };

        typeChar();
      } else {
        this.terminalLines.update((lines) => [...lines, line]);
        index++;
        this.schedule(playNext, 420);
      }
    };

    playNext();
  }

  private observeReveals(): void {
    const elements: HTMLElement[] = Array.from(this.host.nativeElement.querySelectorAll('.reveal'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private observeSections(): void {
    const sections: HTMLElement[] = Array.from(this.host.nativeElement.querySelectorAll('section[id]'));

    if (!('IntersectionObserver' in window)) {
      this.animateMetrics();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          this.activeSection.set(entry.target.id);
          if (entry.target.id === 'impact') {
            this.animateMetrics();
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private animateMetrics(): void {
    if (this.metricsAnimated) {
      return;
    }
    this.metricsAnimated = true;

    const duration = 1500;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.metricDisplays.set(
        this.impactMetrics.map((metric) =>
          metric.numeric === null
            ? metric.value
            : `${metric.prefix}${Math.round(metric.numeric * eased)}${metric.suffix}`
        )
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  private schedule(fn: () => void, delay: number): void {
    this.timeouts.push(setTimeout(fn, delay));
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
