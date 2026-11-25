import { SiteContent } from './types';

export const de: SiteContent = {
  meta: {
    title: 'Gemini — KI-natives Studio für Software und Automatisierung',
    description:
      'Gemini verbindet modernste KI, autonome Agenten und Automatisierung zu Systemen, die von selbst laufen — schneller umgesetzt und zu geringeren Kosten.'
  },
  header: {
    nav: [
      { label: 'Leistungen', id: 'services' },
      { label: 'Vorgehen', id: 'approach' },
      { label: 'Projekte', id: 'work' },
      { label: 'FAQ', id: 'faq' }
    ],
    cta: 'Projekt starten',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    languageLabel: 'Sprache',
    theme: { label: 'Darstellung', auto: 'Auto', light: 'Hell', dark: 'Dunkel' }
  },
  hero: {
    title: ['Wir lassen schwierige', 'Probleme verschwinden.'],
    lead:
      'Gemini ist ein KI-natives Engineering-Studio. Wir verbinden modernste KI, autonome Agenten und Automatisierung und machen aus Ihren Problemen und Ideen funktionierende Systeme — schneller, schlanker und zu einem Bruchteil der üblichen Kosten.',
    primaryCta: 'Projekt starten',
    secondaryCta: 'So arbeiten wir',
    legendLabel: 'So lesen Sie diese Seite',
    legendFriction: 'Reibung: Handarbeit, verstreute Daten, langsame Entscheidungen',
    legendFlow: 'Fluss: automatisiert, vernetzt, messbar',
    scrollHint: 'Scrollen zum Auflösen'
  },
  proof: {
    clientsLabel: 'Umgesetzt für Teams bei',
    clients: ['Siemens', 'Bosch', 'Deutsche Telekom', 'ICA Banken', 'Department of Justice'],
    metricsLabel: 'Gemessen in Kundenprojekten',
    metrics: [
      {
        numeric: 41,
        prefix: '',
        suffix: '%',
        value: '41%',
        label: 'kürzere Prozesszeiten',
        detail: 'Nach der Automatisierung wiederkehrender operativer Abläufe.'
      },
      {
        numeric: 82,
        prefix: '',
        suffix: '%',
        value: '82%',
        label: 'Automatisierungsgrad',
        detail: 'Wiederkehrender Aufgaben in Vertrieb, Service und Betrieb.'
      },
      {
        numeric: 29,
        prefix: '',
        suffix: '%',
        value: '29%',
        label: 'mehr Umsatz',
        detail: 'Durch bessere Funnels, Routing und KI-Entscheidungshilfen.'
      },
      {
        numeric: 90,
        prefix: '<',
        suffix: ' Tage',
        value: '<90 Tage',
        label: 'von der Idee bis zum Livebetrieb',
        detail: 'Typische Zeit vom ersten Gespräch bis zum laufenden System.'
      }
    ]
  },
  shift: {
    title: 'Was verschwindet, wenn wir starten',
    copy:
      'Die meisten Unternehmen brauchen nicht mehr Software, sondern weniger Reibung. Das hier fällt meist als Erstes weg.',
    problemLabel: 'Vorher',
    outcomeLabel: 'Nachher',
    rows: [
      { problem: 'Stundenlanges Kopieren zwischen Tools', outcome: 'Abläufe, die von selbst laufen' },
      { problem: 'Support-Warteschlangen, die nie kürzer werden', outcome: 'KI-Agenten, die Anfragen rund um die Uhr lösen' },
      { problem: 'Daten, für die niemand Zeit hat', outcome: 'Prognosen und Antworten auf Abruf' },
      { problem: 'Monatelange Konzepte, bevor etwas funktioniert', outcome: 'Ein funktionierender Prototyp in wenigen Wochen' },
      { problem: 'Altsysteme, die niemand anzufassen wagt', outcome: 'Schrittweise modernisiert, ohne Ausfallzeit' },
      { problem: 'Große Teams und noch größere Budgets', outcome: 'Ein schlankes Senior-Team, verstärkt durch KI' }
    ]
  },
  services: {
    title: 'Was wir bauen',
    copy:
      'Wir sind an keinen Anbieter und keinen Stack gebunden. Für jedes Problem wählen wir das Beste, was es heute gibt — und fügen es zu einem System zusammen, das zu Ihrer Arbeitsweise passt.',
    consoleLabel: 'Beispielablauf',
    consoleNote: 'Veranschaulichender Ablauf eines Systems, wie wir es bauen.',
    items: [
      {
        key: 'agents',
        name: 'KI-Agenten und Assistenten',
        summary:
          'Digitale Teammitglieder, die Kunden antworten, Leads qualifizieren und Backoffice-Arbeit rund um die Uhr erledigen — mit einem Menschen im Prozess, wo es darauf ankommt.',
        points: [
          'Agenten für Kundenservice und Vertrieb',
          'Interne Assistenten, die Ihr Geschäft kennen',
          'Chat, E-Mail und Telefon'
        ],
        log: [
          'Neue Anfrage: „Wo ist meine Bestellung #48213?“',
          'Bestellung im Fulfillment-System gefunden',
          'Verzögerung erkannt, neuer Liefertermin bestätigt',
          'Persönliche Antwort verfasst und gesendet'
        ],
        result: 'In 41 Sekunden gelöst, ohne jemanden zu unterbrechen'
      },
      {
        key: 'automation',
        name: 'Prozessautomatisierung',
        summary:
          'Wir finden die Routinearbeit, die sich in Ihren Abläufen versteckt, und machen daraus Prozesse, die durchgängig von selbst laufen.',
        points: [
          'Freigaben, Rechnungen und Onboarding',
          'Dokumenteneingang und Datenerfassung',
          'Berichte, die sich selbst schreiben'
        ],
        log: [
          'Lieferantenrechnung als PDF erhalten',
          'Positionen gelesen und der Bestellung zugeordnet',
          'Abweichung unter dem Schwellenwert, freigegeben',
          'In der Buchhaltung gebucht, Team informiert'
        ],
        result: 'In 12 Sekunden statt 15 Minuten erledigt'
      },
      {
        key: 'products',
        name: 'Intelligente Produkte',
        summary:
          'Webplattformen und mobile Apps mit Intelligenz im Kern, nicht nachträglich angebaut — konzipiert, entwickelt und gelauncht aus einer Hand.',
        points: [
          'Webplattformen und Kundenportale',
          'Mobile Apps für jede Plattform',
          'SaaS-Produkte und interne Tools'
        ],
        log: [
          'Idee: eine Außendienst-App mit KI-Assistent',
          'Klickbarer Prototyp mit 8 Nutzern getestet',
          'Feedback umgesetzt, Design finalisiert',
          'Im App Store und bei Google Play veröffentlicht'
        ],
        result: 'Von der Idee zum Launch in Wochen statt Quartalen'
      },
      {
        key: 'data',
        name: 'Daten und Entscheidungsintelligenz',
        summary:
          'Aus verstreuten Daten werden Prognosen, Warnungen und Dashboards, mit denen Ihr Team tatsächlich schneller entscheidet.',
        points: [
          'Prognosen und Anomalieerkennung',
          'Live-Dashboards und KPIs',
          'Empfehlungen im Moment der Entscheidung'
        ],
        log: [
          'Vertriebs-, Lager- und Webdaten verbunden',
          'Ungewöhnliche Nachfragespitze in einer Region erkannt',
          'Prognose aktualisiert, Nachbestellung vorgeschlagen',
          'Wochenbericht an die Geschäftsleitung gesendet'
        ],
        result: 'Entscheidungen auf Basis aktueller Zahlen statt Bauchgefühl'
      },
      {
        key: 'documents',
        name: 'Dokumenten- und Wissens-KI',
        summary:
          'Jeder Vertrag, jedes Handbuch und jede E-Mail wird in Sekunden durchsuchbar, zusammengefasst und nutzbar — statt in Tagen.',
        points: [
          'Extraktion aus PDFs und Scans',
          'Suche im gesamten Unternehmenswissen',
          'Zusammenfassungen, Entwürfe und Übersetzungen'
        ],
        log: [
          '312 Verträge hochgeladen',
          'Parteien, Fristen und Kernklauseln extrahiert',
          '3 Verträge mit Verlängerungsrisiko markiert',
          'Alles in normaler Sprache durchsuchbar'
        ],
        result: 'Tagelanges Lesen auf Minuten reduziert'
      },
      {
        key: 'integration',
        name: 'Integration und Modernisierung',
        summary:
          'Wir verbinden die Systeme, die Sie bereits haben, und modernisieren Altsoftware Schritt für Schritt — ohne den Betrieb anzuhalten.',
        points: [
          'APIs und Systemintegration',
          'Cloud-Migration und Modernisierung',
          'Sicherheit, Berechtigungen und Audit-Trails'
        ],
        log: [
          'Alt-ERP über eine sichere API angebunden',
          'CRM, Helpdesk und Abrechnung synchron',
          'Doppelte Dateneingabe entfernt',
          'Monitoring und Alarme aktiviert'
        ],
        result: 'Ein vernetztes System, null Ausfallzeit'
      }
    ]
  },
  approach: {
    title: 'Vom ersten Gespräch zum laufenden System',
    copy:
      'KI beschleunigt jede Phase. So sehen Sie früh funktionierende Software und bezahlen für Fortschritt, nicht für Papier.',
    deliverableLabel: 'Sie erhalten',
    steps: [
      {
        name: 'Verstehen',
        time: 'Woche 1',
        description:
          'Wir analysieren das Problem, Ihre Daten und den Business Case und finden heraus, wo Automatisierung zuerst den größten Nutzen bringt.',
        deliverable: 'Einen klaren Plan mit Umfang, Zeitplan und erwartetem Nutzen'
      },
      {
        name: 'Prototyp',
        time: 'Woche 2–3',
        description:
          'KI-beschleunigtes Design und Engineering bringen einen funktionierenden Prototyp in Ihre Hände, getestet mit echten Nutzern und echten Daten.',
        deliverable: 'Etwas, das Sie anklicken, ausprobieren und beurteilen können'
      },
      {
        name: 'Bauen und integrieren',
        time: 'Woche 3–10',
        description:
          'Wir machen es produktionsreif: sicher, skalierbar und verbunden mit den Systemen, die Sie bereits betreiben.',
        deliverable: 'Ein Produktivsystem, auf das sich Ihr Team verlassen kann'
      },
      {
        name: 'Launchen und verbessern',
        time: 'Laufend',
        description:
          'Wir gehen live, messen und verbessern weiter, während Ihr Geschäft wächst und sich die Technologie weiterentwickelt.',
        deliverable: 'Messbare Ergebnisse, jeden Monat'
      }
    ]
  },
  difference: {
    title: 'Schneller und schlanker — by Design',
    copy:
      'Tempo und geringere Kosten sind keine Abkürzungen. Sie entstehen, weil KI und Automatisierung die Arbeit übernehmen, für die früher große Teams nötig waren.',
    aspectLabel: 'Aspekt',
    traditionalLabel: 'Klassische Umsetzung',
    geminiLabel: 'Gemini',
    rows: [
      {
        aspect: 'Team',
        traditional: 'Große Teams mit vielen Abstimmungsebenen',
        gemini: 'Ein schlankes Senior-Team, verstärkt durch KI-Agenten'
      },
      {
        aspect: 'Erstes Ergebnis',
        traditional: 'Nach monatelanger Spezifikation',
        gemini: 'Ein funktionierender Prototyp in wenigen Wochen'
      },
      {
        aspect: 'Technologie',
        traditional: 'Der Stack, den die Agentur ohnehin verkauft',
        gemini: 'Das beste Werkzeug für jede Aufgabe, aus dem gesamten aktuellen Angebot'
      },
      {
        aspect: 'Routinearbeit',
        traditional: 'Von Hand erledigt und nach Stunden abgerechnet',
        gemini: 'Automatisiert: Tests, Dokumentation und Reporting'
      },
      {
        aspect: 'Budget',
        traditional: 'Ein großer Teil versickert im Overhead',
        gemini: 'Investiert in messbare Ergebnisse'
      },
      {
        aspect: 'Nach dem Launch',
        traditional: 'Übergabe, dann Funkstille',
        gemini: 'Überwacht, gemessen und laufend verbessert'
      }
    ],
    cta: 'Plan für Ihr Projekt anfordern'
  },
  work: {
    title: 'Ausgewählte Projekte',
    copy: 'Komplexe Organisationen, messbare Ergebnisse. Einige der Systeme, die wir umgesetzt haben.',
    challengeLabel: 'Ausgangslage',
    resultLabel: 'Ergebnis',
    projects: [
      {
        client: 'Siemens',
        title: 'Industrieller Work-Management-Hub',
        challenge: 'Telemetrie und Prozesssteuerung waren über getrennte Systeme, Konsolen und Teams verteilt.',
        result: 'KI-gestütztes Monitoring und Workflow-Automatisierung verbesserten Reaktionszeiten und Zuverlässigkeit.',
        tags: ['KI-Betrieb', 'Automatisierung', 'Monitoring']
      },
      {
        client: 'Bosch',
        title: 'Plattform für vernetzte Produkte',
        challenge: 'Produkt- und Servicedaten brauchten mehr Automatisierung, Transparenz und Konsistenz.',
        result: 'Eine integrierte Plattform mit Machine-Learning-Insights senkte den manuellen Aufwand deutlich.',
        tags: ['Plattform', 'Machine Learning', 'Daten']
      },
      {
        client: 'Deutsche Telekom',
        title: 'Workflow-Automatisierung im Telekommunikationsbereich',
        challenge: 'Servicekritische Abläufe mit hohem Volumen verzögerten Aktivierung, Support und Qualitätssicherung.',
        result: 'KI-gestützte Orchestrierung und Prüfung beschleunigten Servicezyklen und verbesserten das Kundenerlebnis.',
        tags: ['Orchestrierung', 'Telekommunikation', 'KI']
      },
      {
        client: 'ICA Banken',
        title: 'Smarte Banking-Operations-Engine',
        challenge: 'Der Bankbetrieb brauchte schnellere Entscheidungszyklen für Risiko, Service und Reporting.',
        result: 'Automatisierung und Analytics verbesserten Bearbeitungstempo und Entscheidungsqualität.',
        tags: ['Finanzen', 'Machine Learning', 'Analytics']
      },
      {
        client: 'Department of Justice',
        title: 'Sichere Workflow-Modernisierung',
        challenge: 'Geschäftskritische Abläufe mussten unter strenger Kontrolle und ohne Ausfall modernisiert werden.',
        result: 'Eine resiliente Betriebsschicht mit Automatisierungskontrollen und vollständig prüfbaren Prozessen.',
        tags: ['Sicherheit', 'Öffentlicher Sektor', 'Compliance']
      }
    ]
  },
  voices: {
    title: 'Was Kunden sagen',
    copy: 'Stimmen von Teams, die Tempo brauchten, ohne die Kontrolle abzugeben.',
    previous: 'Vorheriges Zitat',
    next: 'Nächstes Zitat',
    quotes: [
      {
        client: 'Siemens',
        role: 'Head of Digital Operations',
        text: 'Gemini hat eine komplexe Modernisierungs-Roadmap in eine klare Launch-Abfolge übersetzt und schnell geliefert.',
        impact: 'Der Automatisierungsgrad stieg und Durchlaufzeiten sanken in mehreren Betriebsteams.'
      },
      {
        client: 'Bosch',
        role: 'Program Director, Connected Systems',
        text: 'Starke Engineering-Qualität, kombiniert mit praxisnahen KI-Anwendungsfällen, die unsere Geschäftsbereiche schnell übernehmen konnten.',
        impact: 'Weniger manuelle Koordination bei messbar konsistenterer Lieferung.'
      },
      {
        client: 'Deutsche Telekom',
        role: 'Senior Transformation Manager',
        text: 'Eine skalierbare Automatisierungsschicht, die der Komplexität und dem Tempo von Telekom-Abläufen gewachsen war.',
        impact: 'Serviceaktivierungen wurden schneller und Probleme deutlich rascher gelöst.'
      },
      {
        client: 'ICA Banken',
        role: 'Digital Banking Operations Manager',
        text: 'Gemini hat uns geholfen, KI vom Konzept zu echtem Nutzen in unseren Kernprozessen zu bringen.',
        impact: 'Der Entscheidungsdurchsatz stieg und Engpässe im Bankbetrieb wurden abgebaut.'
      },
      {
        client: 'Department of Justice',
        role: 'Technology Modernisation Lead',
        text: 'Disziplinierte, sichere und ergebnisorientierte Umsetzung — von der Analyse bis zum Rollout.',
        impact: 'Kritische Abläufe wurden nachvollziehbarer, robuster und messbar effizienter.'
      }
    ]
  },
  faq: {
    title: 'Häufige Fragen',
    copy: 'Was Teams uns meist fragen, bevor wir starten.',
    items: [
      {
        question: 'Wir wissen nicht, welche KI-Technologie wir brauchen. Ist das ein Problem?',
        answer:
          'Überhaupt nicht — die Auswahl ist unsere Aufgabe. Bringen Sie das Problem oder die Idee mit. Wir prüfen, was es aktuell an Modellen, Plattformen und Werkzeugen gibt, und wählen, was zu Ihren Zielen, Daten und Ihrem Budget passt. Wir sind an keinen Anbieter gebunden, die Empfehlung richtet sich also immer nach Ihrem Ergebnis.'
      },
      {
        question: 'Wie können Sie schneller und günstiger sein als eine klassische Agentur?',
        answer:
          'KI-Agenten beschleunigen Recherche, Design, Code, Tests und Dokumentation, während ein schlankes Senior-Team die Entscheidungen und die Qualität verantwortet. Das beseitigt den Großteil des Abstimmungsaufwands, der Übergaben und der Stunden für Routinearbeit.'
      },
      {
        question: 'Wann sehen wir erste Ergebnisse?',
        answer:
          'Früh. Meist halten Sie in den ersten Wochen einen funktionierenden Prototyp in der Hand, und die meisten Projekte gehen in unter 90 Tagen live. Wir legen vorab fest, wie Erfolg aussieht, und messen ihn ab dem ersten Tag.'
      },
      {
        question: 'Können Sie mit unseren bestehenden Systemen arbeiten?',
        answer:
          'Ja. Wir binden die Werkzeuge, Daten und Infrastruktur an, die Sie bereits nutzen, und modernisieren Schritt für Schritt, sodass der Tagesbetrieb nie stillsteht.'
      },
      {
        question: 'Sind unsere Daten sicher?',
        answer:
          'Sicherheit ist ab dem ersten Tag eingeplant: minimale Zugriffsrechte, verschlüsselte Daten, Audit-Trails und menschliche Prüfung überall dort, wo Entscheidungen zählen. Auf Wunsch unterzeichnen wir eine NDA und halten sensible Daten in Ihrer eigenen Infrastruktur.'
      },
      {
        question: 'Was passiert nach dem Launch?',
        answer:
          'Wir bleiben dabei, überwachen, messen und verbessern. KI entwickelt sich schnell, und Ihr System hält Schritt: Bessere Modelle und neue Automatisierungen kommen hinzu, sobald sie echten Mehrwert schaffen.'
      }
    ]
  },
  contact: {
    title: 'Erzählen Sie uns, was Sie ausbremst',
    copy: 'Beschreiben Sie das Problem oder die Idee. Wir melden uns mit einem klaren Plan: Umfang, Zeitplan und Kosten.',
    nextLabel: 'So geht es weiter',
    nextSteps: [
      'Wir antworten innerhalb von zwei Werktagen.',
      'Ein kurzes Gespräch, um Ihre Ziele zu verstehen.',
      'Ein konkretes Angebot mit Umfang, Zeitplan und Kosten.'
    ],
    note: 'NDA auf Wunsch. Unverbindlich.',
    form: {
      stepLabels: ['Ihr Ziel', 'Die Details', 'Ihr Kontakt'],
      progress: 'Schritt {current} von {total}',
      servicesTitle: 'Wobei können wir helfen?',
      servicesHint: 'Wählen Sie alles, was zutrifft.',
      services: [
        { value: 'agents', label: 'KI-Agenten und Assistenten' },
        { value: 'automation', label: 'Prozessautomatisierung' },
        { value: 'products', label: 'Ein neues Produkt oder eine App' },
        { value: 'data', label: 'Daten und Erkenntnisse' },
        { value: 'integration', label: 'Systeme verbinden' },
        { value: 'unsure', label: 'Noch unklar, beraten Sie mich' }
      ],
      servicesError: 'Wählen Sie mindestens eine Option, um fortzufahren.',
      budgetTitle: 'Budget',
      budgets: [
        { value: 'under-10k', label: 'Unter 10.000 €' },
        { value: '10k-25k', label: '10.000–25.000 €' },
        { value: '25k-75k', label: '25.000–75.000 €' },
        { value: 'over-75k', label: 'Über 75.000 €' },
        { value: 'unsure', label: 'Noch unklar' }
      ],
      timelineTitle: 'Zeitrahmen',
      timelines: [
        { value: 'asap', label: 'So bald wie möglich' },
        { value: '3-months', label: 'Innerhalb von 3 Monaten' },
        { value: 'this-year', label: 'Dieses Jahr' },
        { value: 'exploring', label: 'Nur zur Orientierung' }
      ],
      optional: 'optional',
      messageTitle: 'Erzählen Sie uns davon',
      messageLabel: 'Beschreiben Sie das Problem oder die Idee',
      messagePlaceholder:
        'Zum Beispiel: Unser Team überträgt jede Woche stundenlang Bestelldaten in Rechnungen. Das soll automatisch passieren.',
      messageError: 'Ergänzen Sie ein paar Details, damit wir Ihnen gezielt antworten können.',
      messageCount: '{count} Zeichen',
      startersLabel: 'Mit einem Beispiel beginnen',
      starters: [
        {
          label: 'Einen manuellen Prozess automatisieren',
          text: 'Wir möchten einen manuellen Prozess automatisieren. Heute läuft er so ab: '
        },
        {
          label: 'Einen KI-Assistenten bauen',
          text: 'Wir wünschen uns einen KI-Assistenten, der unseren Kunden oder unserem Team hilft bei: '
        },
        {
          label: 'Eine Idee zum Produkt machen',
          text: 'Wir haben eine Produktidee. Sie soll Menschen dabei helfen: '
        }
      ],
      contactTitle: 'Wohin dürfen wir antworten?',
      nameLabel: 'Ihr Name',
      nameError: 'Geben Sie Ihren Namen ein.',
      emailLabel: 'Geschäftliche E-Mail',
      emailPlaceholder: 'sie@unternehmen.de',
      emailError: 'Geben Sie eine gültige E-Mail-Adresse ein, damit wir antworten können.',
      companyLabel: 'Unternehmen',
      privacy: 'Wir verwenden Ihre Angaben nur, um auf diese Anfrage zu antworten.',
      continue: 'Weiter',
      back: 'Zurück',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet…',
      failed: 'Ihre Anfrage wurde nicht übermittelt. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
      retry: 'Erneut versuchen',
      sentTitle: 'Anfrage gesendet',
      sentCopy: 'Danke, {name}. Wir antworten innerhalb von zwei Werktagen an {email}.',
      sentAgain: 'Weitere Anfrage senden',
      summaryLabel: 'Ihre Anfrage'
    }
  },
  footer: {
    blurb: 'Ein KI-natives Engineering-Studio. Wir machen aus schwierigen Problemen Systeme, die von selbst laufen.',
    exploreLabel: 'Entdecken',
    settingsLabel: 'Einstellungen',
    startProject: 'Projekt starten',
    backToTop: 'Nach oben',
    rights: 'Gemini Software Engineering'
  }
};
