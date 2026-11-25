import { SiteContent } from './types';

export const no: SiteContent = {
  meta: {
    title: 'Gemini — AI-native studio for programvare og automatisering',
    description:
      'Gemini kombinerer ledende AI, autonome agenter og automatisering for å gjøre vanskelige problemer om til systemer som går av seg selv — raskere og til lavere kostnad.'
  },
  header: {
    nav: [
      { label: 'Tjenester', id: 'services' },
      { label: 'Arbeidsmåte', id: 'approach' },
      { label: 'Hvorfor oss', id: 'difference' },
      { label: 'Spørsmål', id: 'faq' }
    ],
    cta: 'Start et prosjekt',
    menuOpen: 'Åpne menyen',
    menuClose: 'Lukk menyen',
    languageLabel: 'Språk',
    theme: { label: 'Utseende', auto: 'Auto', light: 'Lyst', dark: 'Mørkt' }
  },
  hero: {
    title: ['Vi får vanskelige', 'problemer til å forsvinne.'],
    lead:
      'Gemini er et AI-native utviklingsstudio. Vi kombinerer ledende AI, autonome agenter og automatisering for å gjøre problemene og ideene dine om til systemer som virker — raskere, slankere og til en brøkdel av den vanlige kostnaden.',
    primaryCta: 'Start et prosjekt',
    secondaryCta: 'Se hvordan vi jobber',
    legendLabel: 'Slik leser du siden',
    legendFriction: 'Friksjon: manuelt arbeid, spredte data, trege beslutninger',
    legendFlow: 'Flyt: automatisert, tilkoblet, målbart',
    scrollHint: 'Rull for å løse opp'
  },
  shift: {
    title: 'Dette forsvinner når vi starter',
    copy:
      'De fleste bedrifter trenger ikke mer programvare. De trenger mindre friksjon. Dette pleier å forsvinne først.',
    problemLabel: 'Før',
    outcomeLabel: 'Etter',
    rows: [
      { problem: 'Timevis med kopiering mellom verktøy', outcome: 'Arbeidsflyter som går av seg selv' },
      { problem: 'Supportkøer som aldri blir kortere', outcome: 'AI-agenter som løser henvendelser døgnet rundt' },
      { problem: 'Data ingen har tid til å lese', outcome: 'Prognoser og svar når du trenger dem' },
      { problem: 'Måneder med spesifikasjoner før noe virker', outcome: 'En fungerende prototyp i løpet av uker' },
      { problem: 'Gamle systemer ingen tør å røre', outcome: 'Modernisert steg for steg, uten nedetid' },
      { problem: 'Store team og enda større budsjetter', outcome: 'Et lite seniorteam, forsterket av AI' }
    ]
  },
  services: {
    title: 'Dette bygger vi',
    copy:
      'Vi er ikke bundet til én leverandør eller én teknologi. For hvert problem velger vi det beste som finnes akkurat nå — og setter det sammen til ett system som passer måten dere jobber på.',
    consoleLabel: 'Eksempelkjøring',
    consoleNote: 'Illustrerende kjøring av et system som dem vi bygger.',
    items: [
      {
        key: 'agents',
        name: 'AI-agenter og assistenter',
        summary:
          'Digitale kolleger som svarer kunder, kvalifiserer leads og tar seg av backoffice døgnet rundt — med et menneske involvert der det betyr noe.',
        points: [
          'Agenter for kundeservice og salg',
          'Interne assistenter som kjenner virksomheten',
          'Chat, e-post og tale'
        ],
        log: [
          'Ny henvendelse: «Hvor er ordren min #48213?»',
          'Ordren funnet i logistikksystemet',
          'Forsinkelse oppdaget, ny leveringsdato bekreftet',
          'Personlig svar skrevet og sendt'
        ],
        result: 'Løst automatisk uten å forstyrre noen'
      },
      {
        key: 'automation',
        name: 'Prosessautomatisering',
        summary:
          'Vi finner rutinearbeidet som skjuler seg i driften deres, og gjør det om til flyter som går av seg selv fra start til slutt.',
        points: [
          'Godkjenninger, fakturering og onboarding',
          'Dokumentmottak og dataregistrering',
          'Rapporter som skriver seg selv'
        ],
        log: [
          'Leverandørfaktura mottatt som PDF',
          'Linjer lest og koblet til bestillingen',
          'Avvik under terskelen, godkjent',
          'Bokført, teamet varslet'
        ],
        result: 'Behandlet hele veien, uten manuell registrering'
      },
      {
        key: 'products',
        name: 'Intelligente produkter',
        summary:
          'Nettplattformer og mobilapper med intelligens i kjernen, ikke lagt på i etterkant — designet, utviklet og lansert hele veien.',
        points: [
          'Nettplattformer og kundeportaler',
          'Mobilapper for alle plattformer',
          'SaaS-produkter og interne verktøy'
        ],
        log: [
          'Idé: en app for feltteknikere med AI-assistent',
          'Klikkbar prototyp testet med ekte brukere',
          'Tilbakemeldinger tatt inn, design ferdigstilt',
          'Publisert i App Store og Google Play'
        ],
        result: 'Fra idé til lansering på uker, ikke kvartaler'
      },
      {
        key: 'data',
        name: 'Data og beslutningsstøtte',
        summary:
          'Gjør spredte data om til prognoser, varsler og dashbord som teamet faktisk bruker til å beslutte raskere.',
        points: [
          'Prognoser og avviksdeteksjon',
          'Dashbord og nøkkeltall i sanntid',
          'Anbefalinger i beslutningsøyeblikket'
        ],
        log: [
          'Salgs-, lager- og nettdata koblet sammen',
          'Uvanlig etterspørselstopp oppdaget i én region',
          'Prognose oppdatert, ny bestilling foreslått',
          'Ukesammendrag sendt til ledelsen'
        ],
        result: 'Beslutninger på ferske tall, ikke magefølelse'
      },
      {
        key: 'documents',
        name: 'AI for dokumenter og kunnskap',
        summary:
          'Gjør hver kontrakt, manual og e-post søkbar, oppsummert og brukbar på sekunder i stedet for dager.',
        points: [
          'Uttrekk fra PDF-er og skannede dokumenter',
          'Søk i all kunnskap i bedriften',
          'Sammendrag, utkast og oversettelser'
        ],
        log: [
          'Hele kontraktsarkivet lastet opp',
          'Parter, frister og nøkkelklausuler hentet ut',
          'Kontrakter med fornyelsesrisiko flagget',
          'Alt søkbart på vanlig språk'
        ],
        result: 'Dager med lesing redusert til minutter'
      },
      {
        key: 'integration',
        name: 'Integrasjon og modernisering',
        summary:
          'Vi kobler sammen systemene dere allerede har, og moderniserer eldre programvare steg for steg — uten å stoppe driften.',
        points: [
          'API-er og systemintegrasjon',
          'Skymigrering og modernisering',
          'Sikkerhet, tilganger og sporbarhet'
        ],
        log: [
          'Eldre ERP koblet til via sikkert API',
          'CRM, kundestøtte og fakturering i synk',
          'Dobbeltregistrering fjernet',
          'Overvåking og varsler slått på'
        ],
        result: 'Ett tilkoblet system, driften stoppet aldri'
      }
    ]
  },
  approach: {
    title: 'Fra første samtale til system i drift',
    copy:
      'AI gjør hver fase raskere, så du ser fungerende programvare tidlig og betaler for fremdrift, ikke papirarbeid.',
    deliverableLabel: 'Du får',
    steps: [
      {
        name: 'Forstå',
        description:
          'Vi kartlegger problemet, dataene og forretningsverdien, og finner hvor automatisering gir mest verdi først.',
        deliverable: 'En tydelig plan med omfang, tidslinje og forventet gevinst'
      },
      {
        name: 'Prototyp',
        description:
          'AI-akselerert design og utvikling gir deg en fungerende prototyp, testet med ekte brukere og ekte data.',
        deliverable: 'Noe du kan klikke på, prøve og vurdere'
      },
      {
        name: 'Bygge og integrere',
        description:
          'Vi gjør den klar for produksjon: sikker, skalerbar og koblet til systemene dere allerede bruker.',
        deliverable: 'Et produksjonssystem teamet kan stole på'
      },
      {
        name: 'Lansere og forbedre',
        description:
          'Vi lanserer, måler og forbedrer videre i takt med at virksomheten vokser og teknologien utvikler seg.',
        deliverable: 'Målbare resultater, hver måned'
      }
    ]
  },
  difference: {
    title: 'Raskere og slankere, helt fra bunnen',
    copy:
      'Fart og lavere kostnad er ingen snarveier. De kommer av at AI og automatisering gjør arbeidet som tidligere krevde store team.',
    aspectLabel: 'Område',
    traditionalLabel: 'Tradisjonell leveranse',
    geminiLabel: 'Gemini',
    rows: [
      {
        aspect: 'Team',
        traditional: 'Store team med mange lag av koordinering',
        gemini: 'Et lite seniorteam, forsterket av AI-agenter'
      },
      {
        aspect: 'Første resultat',
        traditional: 'Etter måneder med spesifikasjoner',
        gemini: 'En fungerende prototyp i løpet av uker'
      },
      {
        aspect: 'Teknologi',
        traditional: 'Den stacken byrået allerede selger',
        gemini: 'Det beste verktøyet for hver oppgave, valgt blant alt som finnes'
      },
      {
        aspect: 'Rutinearbeid',
        traditional: 'Gjort for hånd og fakturert per time',
        gemini: 'Automatisert: testing, dokumentasjon og rapportering'
      },
      {
        aspect: 'Budsjett',
        traditional: 'En stor del går til overhead',
        gemini: 'Brukt på resultater som kan måles'
      },
      {
        aspect: 'Etter lansering',
        traditional: 'Overlevering, så stillhet',
        gemini: 'Overvåket, målt og stadig forbedret'
      }
    ],
    cta: 'Få en plan for prosjektet ditt'
  },
  faq: {
    title: 'Spørsmål og svar',
    copy: 'Det team ofte spør om før vi setter i gang.',
    items: [
      {
        question: 'Vi vet ikke hvilken AI-teknologi vi trenger. Er det et problem?',
        answer:
          'Ikke i det hele tatt — å velge er jobben vår. Kom med problemet eller ideen. Vi vurderer hva som finnes akkurat nå av modeller, plattformer og verktøy, og velger det som passer målene, dataene og budsjettet deres. Vi er ikke bundet til noen leverandør, så anbefalingen handler alltid om resultatet deres.'
      },
      {
        question: 'Hvordan kan dere være raskere og billigere enn et tradisjonelt byrå?',
        answer:
          'AI-agenter gjør research, design, kode, testing og dokumentasjon raskere, mens et lite seniorteam eier beslutningene og kvaliteten. Det fjerner det meste av koordineringen, overleveringene og timene som går til rutinearbeid.'
      },
      {
        question: 'Hvor fort ser vi resultater?',
        answer:
          'Tidlig. Dere har en fungerende prototyp i hendene i løpet av de første ukene, ikke etter måneder med spesifikasjoner. Vi blir enige om hva suksess er fra start og måler det fra dag én.'
      },
      {
        question: 'Kan dere jobbe med systemene vi allerede har?',
        answer:
          'Ja. Vi kobler oss på verktøyene, dataene og infrastrukturen dere allerede bruker, og moderniserer steg for steg, slik at den daglige driften aldri stopper.'
      },
      {
        question: 'Er dataene våre trygge?',
        answer:
          'Sikkerhet er med fra første dag: minst mulig tilgang, krypterte data, sporbarhet og menneskelig kontroll der beslutningene betyr noe. Vi signerer taushetserklæring på forespørsel og kan holde sensitive data i deres egen infrastruktur.'
      },
      {
        question: 'Hva skjer etter lansering?',
        answer:
          'Vi blir med videre for å overvåke, måle og forbedre. AI utvikler seg raskt, og systemet deres holder følge: bedre modeller og nye automatiseringer legges til så snart de gir reell verdi.'
      }
    ]
  },
  contact: {
    title: 'Fortell oss hva som bremser dere',
    copy: 'Beskriv problemet eller ideen. Vi kommer tilbake med en tydelig plan: omfang, tidslinje og kostnad.',
    nextLabel: 'Slik går det videre',
    nextSteps: [
      'Vi svarer innen to virkedager.',
      'En kort samtale for å forstå målene deres.',
      'Et konkret forslag med omfang, tidslinje og kostnad.'
    ],
    note: 'Taushetserklæring på forespørsel. Uforpliktende.',
    form: {
      stepLabels: ['Målet', 'Detaljene', 'Kontakt'],
      progress: 'Steg {current} av {total}',
      servicesTitle: 'Hva kan vi hjelpe med?',
      servicesHint: 'Velg alt som passer.',
      services: [
        { value: 'agents', label: 'AI-agenter og assistenter' },
        { value: 'automation', label: 'Prosessautomatisering' },
        { value: 'products', label: 'Et nytt produkt eller en app' },
        { value: 'data', label: 'Data og innsikt' },
        { value: 'integration', label: 'Koble sammen systemene våre' },
        { value: 'unsure', label: 'Vet ikke ennå, gi råd' }
      ],
      servicesError: 'Velg minst ett alternativ for å fortsette.',
      budgetTitle: 'Budsjett',
      budgets: [
        { value: 'under-10k', label: 'Under 10 000 €' },
        { value: '10k-25k', label: '10 000–25 000 €' },
        { value: '25k-75k', label: '25 000–75 000 €' },
        { value: 'over-75k', label: 'Over 75 000 €' },
        { value: 'unsure', label: 'Vet ikke ennå' }
      ],
      timelineTitle: 'Tidsramme',
      timelines: [
        { value: 'asap', label: 'Så snart som mulig' },
        { value: '3-months', label: 'Innen 3 måneder' },
        { value: 'this-year', label: 'I år' },
        { value: 'exploring', label: 'Undersøker bare' }
      ],
      optional: 'valgfritt',
      messageTitle: 'Fortell oss mer',
      messageLabel: 'Beskriv problemet eller ideen',
      messagePlaceholder:
        'For eksempel: teamet vårt bruker flere timer hver uke på å overføre ordredata til fakturaer. Vi vil at det skal skje automatisk.',
      messageError: 'Legg til noen detaljer, så kan vi gi et nyttig svar.',
      messageCount: '{count} tegn',
      startersLabel: 'Start med et eksempel',
      starters: [
        {
          label: 'Automatisere en manuell prosess',
          text: 'Vi vil automatisere en manuell prosess. I dag foregår den slik: '
        },
        {
          label: 'Bygge en AI-assistent',
          text: 'Vi ønsker en AI-assistent som hjelper kundene eller teamet vårt med: '
        },
        {
          label: 'Gjøre en idé til et produkt',
          text: 'Vi har en produktidé. Den skal hjelpe folk med å: '
        }
      ],
      contactTitle: 'Hvor skal vi svare?',
      nameLabel: 'Navnet ditt',
      nameError: 'Skriv inn navnet ditt.',
      emailLabel: 'Jobb-e-post',
      emailPlaceholder: 'deg@bedrift.no',
      emailError: 'Skriv inn en gyldig e-postadresse, så vi kan svare.',
      companyLabel: 'Bedrift',
      privacy: 'Vi bruker bare opplysningene dine til å svare på denne henvendelsen.',
      continue: 'Fortsett',
      back: 'Tilbake',
      submit: 'Send forespørsel',
      sending: 'Sender…',
      failed: 'Forespørselen kom ikke frem. Sjekk tilkoblingen og prøv igjen.',
      retry: 'Prøv igjen',
      sentTitle: 'Forespørsel sendt',
      sentCopy: 'Takk, {name}. Vi svarer til {email} innen to virkedager.',
      sentAgain: 'Send en ny forespørsel',
      summaryLabel: 'Forespørselen din'
    }
  },
  footer: {
    blurb: 'Et AI-native utviklingsstudio. Vi gjør vanskelige problemer om til systemer som går av seg selv.',
    exploreLabel: 'Utforsk',
    settingsLabel: 'Innstillinger',
    startProject: 'Start et prosjekt',
    backToTop: 'Til toppen',
    rights: 'Gemini Software Engineering'
  }
};
