import { SiteContent } from './types';

export const sv: SiteContent = {
  meta: {
    title: 'Gemini — AI-native studio för mjukvara och automation',
    description:
      'Gemini kombinerar ledande AI, autonoma agenter och automation för att göra svåra problem till system som sköter sig själva — snabbare och till lägre kostnad.'
  },
  header: {
    nav: [
      { label: 'Tjänster', id: 'services' },
      { label: 'Arbetssätt', id: 'approach' },
      { label: 'Uppdrag', id: 'work' },
      { label: 'Frågor', id: 'faq' }
    ],
    cta: 'Starta ett projekt',
    menuOpen: 'Öppna menyn',
    menuClose: 'Stäng menyn',
    languageLabel: 'Språk',
    theme: { label: 'Utseende', auto: 'Auto', light: 'Ljust', dark: 'Mörkt' }
  },
  hero: {
    title: ['Vi får svåra problem', 'att försvinna.'],
    lead:
      'Gemini är en AI-native ingenjörsstudio. Vi kombinerar ledande AI, autonoma agenter och automation för att göra dina problem och idéer till fungerande system — snabbare, smidigare och till en bråkdel av den vanliga kostnaden.',
    primaryCta: 'Starta ett projekt',
    secondaryCta: 'Se hur vi arbetar',
    legendLabel: 'Så läser du sidan',
    legendFriction: 'Friktion: manuellt arbete, utspridd data, långsamma beslut',
    legendFlow: 'Flöde: automatiserat, uppkopplat, mätbart',
    scrollHint: 'Skrolla för att lösa upp'
  },
  proof: {
    clientsLabel: 'Levererat till team på',
    clients: ['Siemens', 'Bosch', 'Deutsche Telekom', 'ICA Banken', 'Department of Justice'],
    metricsLabel: 'Uppmätt i kunduppdrag',
    metrics: [
      {
        numeric: 41,
        prefix: '',
        suffix: '%',
        value: '41%',
        label: 'kortare processtider',
        detail: 'Efter automatisering av återkommande operativa flöden.'
      },
      {
        numeric: 82,
        prefix: '',
        suffix: '%',
        value: '82%',
        label: 'automationsgrad',
        detail: 'Av återkommande uppgifter inom sälj, service och drift.'
      },
      {
        numeric: 29,
        prefix: '',
        suffix: '%',
        value: '29%',
        label: 'högre intäkter',
        detail: 'Genom smartare flöden, routing och AI-stöd för beslut.'
      },
      {
        numeric: 90,
        prefix: '<',
        suffix: ' dagar',
        value: '<90 dagar',
        label: 'från idé till produktion',
        detail: 'Typisk tid från första samtalet till ett system i drift.'
      }
    ]
  },
  shift: {
    title: 'Det här försvinner när vi börjar',
    copy:
      'De flesta företag behöver inte mer mjukvara. De behöver mindre friktion. Det här brukar försvinna först.',
    problemLabel: 'Före',
    outcomeLabel: 'Efter',
    rows: [
      { problem: 'Timmar av kopiera-klistra mellan verktyg', outcome: 'Flöden som sköter sig själva' },
      { problem: 'Supportköer som aldrig krymper', outcome: 'AI-agenter som löser ärenden dygnet runt' },
      { problem: 'Data som ingen hinner läsa', outcome: 'Prognoser och svar när du behöver dem' },
      { problem: 'Månader av specifikationer innan något fungerar', outcome: 'En fungerande prototyp inom några veckor' },
      { problem: 'Äldre system som ingen vågar röra', outcome: 'Moderniserade steg för steg, utan driftstopp' },
      { problem: 'Stora team och ännu större budgetar', outcome: 'Ett litet seniort team, förstärkt av AI' }
    ]
  },
  services: {
    title: 'Det här bygger vi',
    copy:
      'Vi är inte bundna till någon leverantör eller teknik. För varje problem väljer vi det bästa som finns just nu — och sätter ihop det till ett system som passar hur ni arbetar.',
    consoleLabel: 'Exempelkörning',
    consoleNote: 'Illustrativ körning av ett system som de vi bygger.',
    items: [
      {
        key: 'agents',
        name: 'AI-agenter och assistenter',
        summary:
          'Digitala kollegor som svarar kunder, kvalificerar leads och sköter backoffice dygnet runt — med en människa i loopen där det spelar roll.',
        points: [
          'Agenter för kundservice och försäljning',
          'Interna assistenter som kan er verksamhet',
          'Chatt, e-post och röst'
        ],
        log: [
          'Nytt ärende: ”Var är min order #48213?”',
          'Ordern hittad i logistiksystemet',
          'Försening upptäckt, nytt leveransdatum bekräftat',
          'Personligt svar skrivet och skickat'
        ],
        result: 'Löst på 41 sekunder utan att störa någon'
      },
      {
        key: 'automation',
        name: 'Processautomation',
        summary:
          'Vi hittar rutinarbetet som gömmer sig i er verksamhet och gör om det till flöden som sköter sig själva, från början till slut.',
        points: [
          'Godkännanden, fakturering och onboarding',
          'Dokumentinläsning och dataregistrering',
          'Rapporter som skriver sig själva'
        ],
        log: [
          'Leverantörsfaktura mottagen som PDF',
          'Rader lästa och matchade mot ordern',
          'Avvikelse under gränsvärdet, godkänd',
          'Bokförd, teamet informerat'
        ],
        result: 'Klart på 12 sekunder i stället för 15 minuter'
      },
      {
        key: 'products',
        name: 'Intelligenta produkter',
        summary:
          'Webbplattformar och mobilappar med intelligensen i kärnan, inte påklistrad i efterhand — designade, byggda och lanserade hela vägen.',
        points: [
          'Webbplattformar och kundportaler',
          'Mobilappar för alla plattformar',
          'SaaS-produkter och interna verktyg'
        ],
        log: [
          'Idé: en app för fälttekniker med AI-assistent',
          'Klickbar prototyp testad med 8 användare',
          'Återkoppling inarbetad, design klar',
          'Publicerad i App Store och Google Play'
        ],
        result: 'Från idé till lansering på veckor, inte kvartal'
      },
      {
        key: 'data',
        name: 'Data och beslutsstöd',
        summary:
          'Gör utspridd data till prognoser, varningar och dashboards som ert team faktiskt använder för att besluta snabbare.',
        points: [
          'Prognoser och avvikelsedetektering',
          'Dashboards och nyckeltal i realtid',
          'Rekommendationer i beslutsögonblicket'
        ],
        log: [
          'Sälj-, lager- och webbdata sammankopplade',
          'Ovanlig efterfrågetopp upptäckt i en region',
          'Prognos uppdaterad, påfyllning föreslagen',
          'Veckosammanfattning skickad till ledningen'
        ],
        result: 'Beslut på aktuella siffror, inte magkänsla'
      },
      {
        key: 'documents',
        name: 'AI för dokument och kunskap',
        summary:
          'Gör varje avtal, manual och mejl sökbart, sammanfattat och användbart på sekunder i stället för dagar.',
        points: [
          'Utdrag ur PDF:er och skannade dokument',
          'Sök i all kunskap i företaget',
          'Sammanfattningar, utkast och översättningar'
        ],
        log: [
          '312 avtal uppladdade',
          'Parter, datum och nyckelklausuler extraherade',
          '3 avtal flaggade för förnyelserisk',
          'Allt sökbart på vanligt språk'
        ],
        result: 'Dagar av läsning blev minuter'
      },
      {
        key: 'integration',
        name: 'Integration och modernisering',
        summary:
          'Vi kopplar ihop systemen ni redan har och moderniserar äldre mjukvara steg för steg — utan att verksamheten stannar.',
        points: [
          'API:er och systemintegration',
          'Molnmigrering och modernisering',
          'Säkerhet, behörigheter och spårbarhet'
        ],
        log: [
          'Äldre affärssystem anslutet via säkert API',
          'CRM, helpdesk och fakturering i synk',
          'Dubbelregistrering borttagen',
          'Övervakning och larm aktiverade'
        ],
        result: 'Ett uppkopplat system, noll driftstopp'
      }
    ]
  },
  approach: {
    title: 'Från första samtalet till ett system i drift',
    copy:
      'AI snabbar upp varje fas, så du ser fungerande mjukvara tidigt och betalar för framsteg, inte för papper.',
    deliverableLabel: 'Du får',
    steps: [
      {
        name: 'Förstå',
        time: 'Vecka 1',
        description:
          'Vi kartlägger problemet, er data och affärsnyttan, och hittar var automation ger mest värde först.',
        deliverable: 'En tydlig plan med omfattning, tidplan och förväntad effekt'
      },
      {
        name: 'Prototyp',
        time: 'Vecka 2–3',
        description:
          'AI-accelererad design och utveckling ger dig en fungerande prototyp, testad med riktiga användare och riktig data.',
        deliverable: 'Något du kan klicka på, prova och bedöma'
      },
      {
        name: 'Bygga och integrera',
        time: 'Vecka 3–10',
        description:
          'Vi gör den redo för produktion: säker, skalbar och kopplad till systemen ni redan använder.',
        deliverable: 'Ett produktionssystem som teamet kan lita på'
      },
      {
        name: 'Lansera och förbättra',
        time: 'Löpande',
        description:
          'Vi lanserar, mäter och fortsätter förbättra i takt med att verksamheten växer och tekniken går framåt.',
        deliverable: 'Mätbara resultat, varje månad'
      }
    ]
  },
  difference: {
    title: 'Snabbare och smidigare, från grunden',
    copy:
      'Fart och lägre kostnad är inga genvägar. De kommer av att AI och automation gör jobbet som tidigare krävde stora team.',
    aspectLabel: 'Område',
    traditionalLabel: 'Traditionell leverans',
    geminiLabel: 'Gemini',
    rows: [
      {
        aspect: 'Team',
        traditional: 'Stora team med många led av samordning',
        gemini: 'Ett litet seniort team, förstärkt av AI-agenter'
      },
      {
        aspect: 'Första resultat',
        traditional: 'Efter månader av specifikationer',
        gemini: 'En fungerande prototyp inom några veckor'
      },
      {
        aspect: 'Teknik',
        traditional: 'Den stack byrån redan säljer',
        gemini: 'Bästa verktyget för varje uppgift, valt bland allt som finns'
      },
      {
        aspect: 'Rutinarbete',
        traditional: 'Görs för hand och debiteras per timme',
        gemini: 'Automatiserat: tester, dokumentation och rapportering'
      },
      {
        aspect: 'Budget',
        traditional: 'En stor del går till overhead',
        gemini: 'Läggs på resultat som går att mäta'
      },
      {
        aspect: 'Efter lansering',
        traditional: 'Överlämning, sedan tystnad',
        gemini: 'Övervakat, mätt och ständigt förbättrat'
      }
    ],
    cta: 'Få en plan för ditt projekt'
  },
  work: {
    title: 'Utvalda uppdrag',
    copy: 'Komplexa organisationer, mätbara resultat. Några av systemen vi har levererat.',
    challengeLabel: 'Utmaning',
    resultLabel: 'Resultat',
    projects: [
      {
        client: 'Siemens',
        title: 'Industriell hubb för driftstyrning',
        challenge: 'Telemetri och processtyrning var utspridda över separata system, konsoler och team.',
        result: 'AI-driven övervakning och automatiserade flöden förbättrade incidenthantering och tillförlitlighet.',
        tags: ['AI-drift', 'Automation', 'Övervakning']
      },
      {
        client: 'Bosch',
        title: 'Plattform för uppkopplade produkter',
        challenge: 'Produkt- och servicedata behövde mer automation, överblick och enhetlighet.',
        result: 'En integrerad plattform med maskininlärning minskade det manuella arbetet avsevärt.',
        tags: ['Plattform', 'Maskininlärning', 'Data']
      },
      {
        client: 'Deutsche Telekom',
        title: 'Automatisering av telekomflöden',
        challenge: 'Serviceflöden med höga volymer försenade aktivering, support och kvalitetssäkring.',
        result: 'AI-driven orkestrering och verifiering snabbade upp servicecyklerna och förbättrade kundupplevelsen.',
        tags: ['Orkestrering', 'Telekom', 'AI']
      },
      {
        client: 'ICA Banken',
        title: 'Smart motor för bankdrift',
        challenge: 'Bankdriften behövde snabbare beslutsloopar för risk, service och rapportering.',
        result: 'Automation och analys förbättrade både handläggningstid och beslutskvalitet.',
        tags: ['Finans', 'Maskininlärning', 'Analys']
      },
      {
        client: 'Department of Justice',
        title: 'Säker modernisering av arbetsflöden',
        challenge: 'Verksamhetskritiska flöden behövde moderniseras under strikt kontroll och utan avbrott.',
        result: 'Ett robust driftlager med automationskontroller och helt spårbara processer.',
        tags: ['Säkerhet', 'Offentlig sektor', 'Regelefterlevnad']
      }
    ]
  },
  voices: {
    title: 'Det säger våra kunder',
    copy: 'Röster från team som behövde fart utan att tappa kontrollen.',
    previous: 'Föregående citat',
    next: 'Nästa citat',
    quotes: [
      {
        client: 'Siemens',
        role: 'Head of Digital Operations',
        text: 'Gemini gjorde en komplex moderniseringsplan till en tydlig lanseringsordning och levererade snabbt.',
        impact: 'Automationsgraden ökade och ledtiderna sjönk i flera driftsteam.'
      },
      {
        client: 'Bosch',
        role: 'Program Director, Connected Systems',
        text: 'Hög ingenjörskvalitet kombinerad med praktiska AI-användningsfall som våra affärsenheter snabbt kunde ta till sig.',
        impact: 'Mindre manuell samordning och mätbart jämnare leveranser.'
      },
      {
        client: 'Deutsche Telekom',
        role: 'Senior Transformation Manager',
        text: 'Ett skalbart automationslager som matchade komplexiteten och tempot i telekomflödena.',
        impact: 'Aktiveringar gick snabbare och problem löstes betydligt fortare.'
      },
      {
        client: 'ICA Banken',
        role: 'Digital Banking Operations Manager',
        text: 'Gemini hjälpte oss att ta AI från idé till verklig nytta i våra kärnprocesser.',
        impact: 'Beslutstakten ökade och flaskhalsar i bankdriften minskade.'
      },
      {
        client: 'Department of Justice',
        role: 'Technology Modernisation Lead',
        text: 'Ett disciplinerat, säkert och resultatinriktat genomförande — från analys till driftsättning.',
        impact: 'Kritiska flöden blev mer spårbara, robusta och mätbart effektivare.'
      }
    ]
  },
  faq: {
    title: 'Frågor och svar',
    copy: 'Det team brukar fråga innan vi sätter igång.',
    items: [
      {
        question: 'Vi vet inte vilken AI-teknik vi behöver. Är det ett problem?',
        answer:
          'Inte alls — att välja är vårt jobb. Kom med problemet eller idén. Vi utvärderar vad som finns just nu av modeller, plattformar och verktyg och väljer det som passar era mål, er data och er budget. Vi är inte bundna till någon leverantör, så rekommendationen handlar alltid om ert resultat.'
      },
      {
        question: 'Hur kan ni vara snabbare och billigare än en traditionell byrå?',
        answer:
          'AI-agenter snabbar upp research, design, kod, tester och dokumentation, medan ett litet seniort team äger besluten och kvaliteten. Det tar bort det mesta av samordningen, överlämningarna och timmarna som går åt till rutinarbete.'
      },
      {
        question: 'Hur snart ser vi resultat?',
        answer:
          'Tidigt. Oftast har ni en fungerande prototyp i händerna inom de första veckorna, och de flesta projekt går i produktion på under 90 dagar. Vi kommer överens om hur framgång ser ut från start och mäter den från dag ett.'
      },
      {
        question: 'Kan ni arbeta med de system vi redan har?',
        answer:
          'Ja. Vi kopplar in oss på verktygen, datan och infrastrukturen ni redan använder och moderniserar steg för steg, så att den dagliga driften aldrig stannar.'
      },
      {
        question: 'Är vår data säker?',
        answer:
          'Säkerheten finns med från första dagen: minsta möjliga behörigheter, krypterad data, spårbarhet och mänsklig granskning där besluten spelar roll. Vi skriver under ett sekretessavtal på begäran och kan hålla känslig data i er egen infrastruktur.'
      },
      {
        question: 'Vad händer efter lanseringen?',
        answer:
          'Vi finns kvar för att övervaka, mäta och förbättra. AI utvecklas snabbt och ert system hänger med: bättre modeller och nya automationer läggs till så fort de ger verkligt värde.'
      }
    ]
  },
  contact: {
    title: 'Berätta vad som bromsar er',
    copy: 'Beskriv problemet eller idén. Vi återkommer med en tydlig plan: omfattning, tidplan och kostnad.',
    nextLabel: 'Så går det till',
    nextSteps: [
      'Vi svarar inom två arbetsdagar.',
      'Ett kort samtal för att förstå era mål.',
      'Ett konkret förslag med omfattning, tidplan och kostnad.'
    ],
    note: 'Sekretessavtal på begäran. Inga förpliktelser.',
    form: {
      stepLabels: ['Ert mål', 'Detaljerna', 'Er kontakt'],
      progress: 'Steg {current} av {total}',
      servicesTitle: 'Vad kan vi hjälpa till med?',
      servicesHint: 'Välj allt som stämmer.',
      services: [
        { value: 'agents', label: 'AI-agenter och assistenter' },
        { value: 'automation', label: 'Processautomation' },
        { value: 'products', label: 'En ny produkt eller app' },
        { value: 'data', label: 'Data och insikter' },
        { value: 'integration', label: 'Koppla ihop våra system' },
        { value: 'unsure', label: 'Vet inte än, ge råd' }
      ],
      servicesError: 'Välj minst ett alternativ för att fortsätta.',
      budgetTitle: 'Budget',
      budgets: [
        { value: 'under-10k', label: 'Under 10 000 €' },
        { value: '10k-25k', label: '10 000–25 000 €' },
        { value: '25k-75k', label: '25 000–75 000 €' },
        { value: 'over-75k', label: 'Över 75 000 €' },
        { value: 'unsure', label: 'Vet inte än' }
      ],
      timelineTitle: 'Tidsram',
      timelines: [
        { value: 'asap', label: 'Så snart som möjligt' },
        { value: '3-months', label: 'Inom 3 månader' },
        { value: 'this-year', label: 'I år' },
        { value: 'exploring', label: 'Undersöker bara' }
      ],
      optional: 'valfritt',
      messageTitle: 'Berätta mer',
      messageLabel: 'Beskriv problemet eller idén',
      messagePlaceholder:
        'Till exempel: vårt team lägger flera timmar i veckan på att föra över orderdata till fakturor. Vi vill att det sker automatiskt.',
      messageError: 'Lägg till några detaljer så att vi kan ge ett användbart svar.',
      messageCount: '{count} tecken',
      startersLabel: 'Börja med ett exempel',
      starters: [
        {
          label: 'Automatisera en manuell process',
          text: 'Vi vill automatisera en manuell process. I dag går den till så här: '
        },
        {
          label: 'Bygga en AI-assistent',
          text: 'Vi vill ha en AI-assistent som hjälper våra kunder eller vårt team med: '
        },
        {
          label: 'Göra en idé till en produkt',
          text: 'Vi har en produktidé. Den ska hjälpa människor att: '
        }
      ],
      contactTitle: 'Vart ska vi svara?',
      nameLabel: 'Ditt namn',
      nameError: 'Ange ditt namn.',
      emailLabel: 'Jobbmejl',
      emailPlaceholder: 'du@foretag.se',
      emailError: 'Ange en giltig e-postadress så att vi kan svara.',
      companyLabel: 'Företag',
      privacy: 'Vi använder bara dina uppgifter för att svara på den här förfrågan.',
      continue: 'Fortsätt',
      back: 'Tillbaka',
      submit: 'Skicka förfrågan',
      sending: 'Skickar…',
      failed: 'Förfrågan gick inte fram. Kontrollera anslutningen och försök igen.',
      retry: 'Försök igen',
      sentTitle: 'Förfrågan skickad',
      sentCopy: 'Tack, {name}. Vi svarar till {email} inom två arbetsdagar.',
      sentAgain: 'Skicka en till förfrågan',
      summaryLabel: 'Din förfrågan'
    }
  },
  footer: {
    blurb: 'En AI-native ingenjörsstudio. Vi gör svåra problem till system som sköter sig själva.',
    exploreLabel: 'Utforska',
    settingsLabel: 'Inställningar',
    startProject: 'Starta ett projekt',
    backToTop: 'Till toppen',
    rights: 'Gemini Software Engineering'
  }
};
