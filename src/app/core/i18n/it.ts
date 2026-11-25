import { SiteContent } from './types';

export const it: SiteContent = {
  meta: {
    title: 'Gemini — Studio di software e automazione nativo IA',
    description:
      'Gemini unisce IA all’avanguardia, agenti autonomi e automazione per trasformare i problemi complessi in sistemi che funzionano da soli — più in fretta e a costi più bassi.'
  },
  header: {
    nav: [
      { label: 'Servizi', id: 'services' },
      { label: 'Metodo', id: 'approach' },
      { label: 'Progetti', id: 'work' },
      { label: 'FAQ', id: 'faq' }
    ],
    cta: 'Avvia un progetto',
    menuOpen: 'Apri il menu',
    menuClose: 'Chiudi il menu',
    languageLabel: 'Lingua',
    theme: { label: 'Aspetto', auto: 'Auto', light: 'Chiaro', dark: 'Scuro' }
  },
  hero: {
    title: ['Facciamo sparire', 'i problemi difficili.'],
    lead:
      'Gemini è uno studio di ingegneria nativo IA. Uniamo IA all’avanguardia, agenti autonomi e automazione per trasformare problemi e idee in sistemi funzionanti — più veloci, più snelli e a una frazione del costo abituale.',
    primaryCta: 'Avvia un progetto',
    secondaryCta: 'Scopri come lavoriamo',
    legendLabel: 'Come leggere questa pagina',
    legendFriction: 'Attrito: lavoro manuale, dati sparsi, decisioni lente',
    legendFlow: 'Flusso: automatizzato, connesso, misurabile',
    scrollHint: 'Scorri per risolvere'
  },
  proof: {
    clientsLabel: 'Realizzato per i team di',
    clients: ['Siemens', 'Bosch', 'Deutsche Telekom', 'ICA Banken', 'Department of Justice'],
    metricsLabel: 'Misurato sui progetti dei clienti',
    metrics: [
      {
        numeric: 41,
        prefix: '',
        suffix: '%',
        value: '41%',
        label: 'di tempi di processo in meno',
        detail: 'Dopo l’automazione dei flussi operativi ricorrenti.'
      },
      {
        numeric: 82,
        prefix: '',
        suffix: '%',
        value: '82%',
        label: 'di attività automatizzate',
        detail: 'Tra le attività ricorrenti di vendite, assistenza e operations.'
      },
      {
        numeric: 29,
        prefix: '',
        suffix: '%',
        value: '29%',
        label: 'di fatturato in più',
        detail: 'Grazie a funnel migliori, instradamento e supporto decisionale con l’IA.'
      },
      {
        numeric: 90,
        prefix: '<',
        suffix: ' giorni',
        value: '<90 giorni',
        label: 'dall’idea alla produzione',
        detail: 'Tempo tipico dal primo colloquio a un sistema in funzione.'
      }
    ]
  },
  shift: {
    title: 'Cosa sparisce quando iniziamo',
    copy:
      'La maggior parte delle aziende non ha bisogno di più software, ma di meno attrito. Ecco cosa sparisce per primo.',
    problemLabel: 'Prima',
    outcomeLabel: 'Dopo',
    rows: [
      { problem: 'Ore di copia e incolla tra strumenti', outcome: 'Processi che vanno avanti da soli' },
      { problem: 'Code di assistenza che non si accorciano mai', outcome: 'Agenti IA che rispondono giorno e notte' },
      { problem: 'Dati che nessuno ha il tempo di leggere', outcome: 'Previsioni e risposte su richiesta' },
      { problem: 'Mesi di specifiche prima che qualcosa funzioni', outcome: 'Un prototipo funzionante in poche settimane' },
      { problem: 'Sistemi legacy che nessuno osa toccare', outcome: 'Modernizzati passo dopo passo, senza fermi' },
      { problem: 'Team numerosi e budget ancora più grandi', outcome: 'Un team senior snello, potenziato dall’IA' }
    ]
  },
  services: {
    title: 'Cosa costruiamo',
    copy:
      'Non siamo legati a un fornitore né a una tecnologia. Per ogni problema scegliamo il meglio di ciò che esiste oggi — e lo uniamo in un unico sistema adatto al vostro modo di lavorare.',
    consoleLabel: 'Esecuzione di esempio',
    consoleNote: 'Esecuzione illustrativa di un sistema come quelli che costruiamo.',
    items: [
      {
        key: 'agents',
        name: 'Agenti e assistenti IA',
        summary:
          'Colleghi digitali che rispondono ai clienti, qualificano i contatti e gestiscono il back-office giorno e notte — con una persona coinvolta dove conta.',
        points: [
          'Agenti per assistenza clienti e vendite',
          'Assistenti interni che conoscono la vostra azienda',
          'Chat, email e voce'
        ],
        log: [
          'Nuova richiesta: «Dov’è il mio ordine n. 48213?»',
          'Ordine trovato nel sistema logistico',
          'Ritardo rilevato, nuova data di consegna confermata',
          'Risposta personalizzata scritta e inviata'
        ],
        result: 'Risolto in 41 secondi, senza interrompere nessuno'
      },
      {
        key: 'automation',
        name: 'Automazione dei processi',
        summary:
          'Troviamo il lavoro ripetitivo nascosto nelle vostre attività e lo trasformiamo in processi che si svolgono da soli, dall’inizio alla fine.',
        points: [
          'Approvazioni, fatturazione e onboarding',
          'Acquisizione di documenti e inserimento dati',
          'Report che si scrivono da soli'
        ],
        log: [
          'Fattura del fornitore ricevuta in PDF',
          'Righe lette e abbinate all’ordine',
          'Differenza sotto soglia, approvata',
          'Registrata in contabilità, team avvisato'
        ],
        result: 'Fatto in 12 secondi invece di 15 minuti'
      },
      {
        key: 'products',
        name: 'Prodotti intelligenti',
        summary:
          'Piattaforme web e app mobili con l’intelligenza al centro, non aggiunta dopo — progettate, sviluppate e lanciate dall’inizio alla fine.',
        points: [
          'Piattaforme web e portali clienti',
          'App mobili per ogni piattaforma',
          'Prodotti SaaS e strumenti interni'
        ],
        log: [
          'Idea: un’app per tecnici sul campo con assistente IA',
          'Prototipo cliccabile testato con 8 utenti',
          'Feedback applicato, design finalizzato',
          'Pubblicata su App Store e Google Play'
        ],
        result: 'Dall’idea al lancio in settimane, non in trimestri'
      },
      {
        key: 'data',
        name: 'Dati e supporto alle decisioni',
        summary:
          'Trasformiamo dati sparsi in previsioni, avvisi e dashboard che il vostro team usa davvero per decidere più in fretta.',
        points: [
          'Previsioni e rilevamento di anomalie',
          'Dashboard e KPI in tempo reale',
          'Suggerimenti nel momento della decisione'
        ],
        log: [
          'Dati di vendite, magazzino e web collegati',
          'Picco di domanda insolito rilevato in una regione',
          'Previsione aggiornata, riordino suggerito',
          'Riepilogo settimanale inviato alla direzione'
        ],
        result: 'Decisioni basate su numeri aggiornati, non sull’intuito'
      },
      {
        key: 'documents',
        name: 'IA per documenti e conoscenza',
        summary:
          'Ogni contratto, manuale ed email diventa consultabile, riassunto e utilizzabile in pochi secondi invece che in giorni.',
        points: [
          'Estrazione da PDF e scansioni',
          'Ricerca in tutto il sapere aziendale',
          'Riassunti, bozze e traduzioni'
        ],
        log: [
          '312 contratti caricati',
          'Parti, scadenze e clausole chiave estratte',
          '3 contratti segnalati per rischio di rinnovo',
          'Tutto consultabile in linguaggio naturale'
        ],
        result: 'Giorni di lettura ridotti a pochi minuti'
      },
      {
        key: 'integration',
        name: 'Integrazione e modernizzazione',
        summary:
          'Colleghiamo i sistemi che avete già e modernizziamo il software esistente passo dopo passo — senza fermare l’attività.',
        points: [
          'API e integrazione di sistemi',
          'Migrazione al cloud e modernizzazione',
          'Sicurezza, permessi e tracciabilità'
        ],
        log: [
          'ERP legacy collegato tramite API sicura',
          'CRM, helpdesk e fatturazione sincronizzati',
          'Doppio inserimento dati eliminato',
          'Monitoraggio e avvisi attivati'
        ],
        result: 'Un unico sistema connesso, zero fermi'
      }
    ]
  },
  approach: {
    title: 'Dal primo colloquio al sistema in funzione',
    copy:
      'L’IA accelera ogni fase: vedete presto software funzionante e pagate per i progressi, non per le carte.',
    deliverableLabel: 'Ottenete',
    steps: [
      {
        name: 'Capire',
        time: 'Settimana 1',
        description:
          'Analizziamo il problema, i vostri dati e il valore di business, e individuiamo dove l’automazione rende di più fin da subito.',
        deliverable: 'Un piano chiaro con perimetro, tempi e ritorno atteso'
      },
      {
        name: 'Prototipo',
        time: 'Settimane 2–3',
        description:
          'Design e ingegneria accelerati dall’IA vi mettono in mano un prototipo funzionante, testato con utenti e dati reali.',
        deliverable: 'Qualcosa da cliccare, provare e valutare'
      },
      {
        name: 'Costruire e integrare',
        time: 'Settimane 3–10',
        description:
          'Lo rendiamo pronto per la produzione: sicuro, scalabile e collegato ai sistemi che già utilizzate.',
        deliverable: 'Un sistema in produzione su cui il team può contare'
      },
      {
        name: 'Lanciare e migliorare',
        time: 'Continuativo',
        description:
          'Andiamo in produzione, misuriamo e continuiamo a migliorare mentre la vostra azienda cresce e la tecnologia avanza.',
        deliverable: 'Risultati misurabili, ogni mese'
      }
    ]
  },
  difference: {
    title: 'Più veloci e più snelli, per scelta',
    copy:
      'Velocità e costi più bassi non sono scorciatoie. Nascono dall’IA e dall’automazione, che svolgono il lavoro che un tempo richiedeva grandi team.',
    aspectLabel: 'Aspetto',
    traditionalLabel: 'Approccio tradizionale',
    geminiLabel: 'Gemini',
    rows: [
      {
        aspect: 'Team',
        traditional: 'Team numerosi con molti livelli di coordinamento',
        gemini: 'Un team senior snello, potenziato da agenti IA'
      },
      {
        aspect: 'Primo risultato',
        traditional: 'Dopo mesi di specifiche',
        gemini: 'Un prototipo funzionante in poche settimane'
      },
      {
        aspect: 'Tecnologia',
        traditional: 'Lo stack che l’agenzia vende già',
        gemini: 'Lo strumento migliore per ogni compito, scelto tra tutto ciò che esiste'
      },
      {
        aspect: 'Lavoro ripetitivo',
        traditional: 'Fatto a mano e fatturato a ore',
        gemini: 'Automatizzato: test, documentazione e reportistica'
      },
      {
        aspect: 'Budget',
        traditional: 'Una buona parte assorbita dai costi di struttura',
        gemini: 'Investito in risultati misurabili'
      },
      {
        aspect: 'Dopo il lancio',
        traditional: 'Consegna, poi silenzio',
        gemini: 'Monitorato, misurato e migliorato di continuo'
      }
    ],
    cta: 'Ricevi un piano per il progetto'
  },
  work: {
    title: 'Progetti selezionati',
    copy: 'Organizzazioni complesse, risultati misurabili. Alcuni dei sistemi che abbiamo realizzato.',
    challengeLabel: 'Sfida',
    resultLabel: 'Risultato',
    projects: [
      {
        client: 'Siemens',
        title: 'Hub industriale di gestione operativa',
        challenge: 'Telemetria e controllo dei processi erano distribuiti tra sistemi, console e team separati.',
        result: 'Monitoraggio basato sull’IA e flussi automatizzati hanno migliorato la risposta agli incidenti e l’affidabilità.',
        tags: ['Operations IA', 'Automazione', 'Monitoraggio']
      },
      {
        client: 'Bosch',
        title: 'Piattaforma per prodotti connessi',
        challenge: 'I flussi di dati di prodotto e assistenza avevano bisogno di più automazione, visibilità e coerenza.',
        result: 'Una piattaforma integrata con insight di machine learning ha ridotto in modo significativo il lavoro manuale.',
        tags: ['Piattaforma', 'Machine learning', 'Dati']
      },
      {
        client: 'Deutsche Telekom',
        title: 'Automazione dei processi telecom',
        challenge: 'Processi di servizio ad alto volume rallentavano attivazioni, assistenza e controllo qualità.',
        result: 'Orchestrazione e verifica guidate dall’IA hanno accelerato i cicli di servizio e migliorato l’esperienza dei clienti.',
        tags: ['Orchestrazione', 'Telecomunicazioni', 'IA']
      },
      {
        client: 'ICA Banken',
        title: 'Motore intelligente per le operazioni bancarie',
        challenge: 'Le operazioni finanziarie richiedevano cicli decisionali più rapidi per rischio, assistenza e reportistica.',
        result: 'Automazione e analytics hanno migliorato la velocità di elaborazione e la qualità delle decisioni.',
        tags: ['Finanza', 'Machine learning', 'Analytics']
      },
      {
        client: 'Department of Justice',
        title: 'Modernizzazione sicura dei processi',
        challenge: 'Processi critici dovevano essere modernizzati sotto stretto controllo e senza interruzioni.',
        result: 'Uno strato operativo resiliente con controlli di automazione e processi completamente tracciabili.',
        tags: ['Sicurezza', 'Settore pubblico', 'Conformità']
      }
    ]
  },
  voices: {
    title: 'Cosa dicono i clienti',
    copy: 'Il parere di team che volevano velocità senza perdere il controllo.',
    previous: 'Citazione precedente',
    next: 'Citazione successiva',
    quotes: [
      {
        client: 'Siemens',
        role: 'Head of Digital Operations',
        text: 'Gemini ha trasformato una roadmap di modernizzazione complessa in una sequenza di lancio chiara, e ha consegnato in fretta.',
        impact: 'L’automazione è cresciuta e i tempi di ciclo sono scesi in diversi team operativi.'
      },
      {
        client: 'Bosch',
        role: 'Program Director, Connected Systems',
        text: 'Ingegneria di alta qualità unita a casi d’uso IA concreti che le nostre unità di business hanno adottato rapidamente.',
        impact: 'Meno coordinamento manuale e consegne sensibilmente più costanti.'
      },
      {
        client: 'Deutsche Telekom',
        role: 'Senior Transformation Manager',
        text: 'Uno strato di automazione scalabile, all’altezza della complessità e del ritmo dei processi telecom.',
        impact: 'Attivazioni più rapide e problemi risolti molto più velocemente.'
      },
      {
        client: 'ICA Banken',
        role: 'Digital Banking Operations Manager',
        text: 'Gemini ci ha aiutato a portare l’IA dal concetto a un valore concreto nei nostri processi principali.',
        impact: 'Il ritmo delle decisioni è migliorato e i colli di bottiglia si sono ridotti.'
      },
      {
        client: 'Department of Justice',
        role: 'Technology Modernisation Lead',
        text: 'Un’esecuzione rigorosa, sicura e orientata ai risultati — dall’analisi al rilascio.',
        impact: 'I processi critici hanno guadagnato tracciabilità, resilienza ed efficienza misurabile.'
      }
    ]
  },
  faq: {
    title: 'Domande e risposte',
    copy: 'Quello che i team ci chiedono più spesso prima di iniziare.',
    items: [
      {
        question: 'Non sappiamo di quale tecnologia IA abbiamo bisogno. È un problema?',
        answer:
          'Affatto — scegliere è il nostro lavoro. Portate il problema o l’idea. Valutiamo ciò che esiste oggi tra modelli, piattaforme e strumenti e scegliamo ciò che si adatta ai vostri obiettivi, ai vostri dati e al vostro budget. Non siamo legati ad alcun fornitore: la raccomandazione riguarda sempre il vostro risultato.'
      },
      {
        question: 'Come potete essere più veloci ed economici di un’agenzia tradizionale?',
        answer:
          'Gli agenti IA accelerano ricerca, design, codice, test e documentazione, mentre un team senior snello si occupa delle decisioni e della qualità. Così spariscono gran parte del coordinamento, dei passaggi di consegna e delle ore spese in lavoro ripetitivo.'
      },
      {
        question: 'Quando vedremo i primi risultati?',
        answer:
          'Presto. Di solito avete in mano un prototipo funzionante già nelle prime settimane, e la maggior parte dei progetti va in produzione in meno di 90 giorni. Stabiliamo insieme cosa significa successo e lo misuriamo dal primo giorno.'
      },
      {
        question: 'Potete lavorare con i sistemi che abbiamo già?',
        answer:
          'Sì. Ci colleghiamo agli strumenti, ai dati e all’infrastruttura che già usate e modernizziamo passo dopo passo, così l’operatività quotidiana non si ferma mai.'
      },
      {
        question: 'I nostri dati sono al sicuro?',
        answer:
          'La sicurezza è prevista fin dal primo giorno: accessi minimi, dati cifrati, tracciabilità e revisione umana ovunque le decisioni contino. Su richiesta firmiamo un accordo di riservatezza e possiamo mantenere i dati sensibili nella vostra infrastruttura.'
      },
      {
        question: 'Cosa succede dopo il lancio?',
        answer:
          'Restiamo al vostro fianco per monitorare, misurare e migliorare. L’IA evolve in fretta e il vostro sistema tiene il passo: modelli migliori e nuove automazioni arrivano non appena portano valore reale.'
      }
    ]
  },
  contact: {
    title: 'Diteci cosa vi rallenta',
    copy: 'Descrivete il problema o l’idea. Vi risponderemo con un piano chiaro: perimetro, tempi e costi.',
    nextLabel: 'I prossimi passi',
    nextSteps: [
      'Rispondiamo entro due giorni lavorativi.',
      'Una breve chiamata per capire i vostri obiettivi.',
      'Una proposta concreta con perimetro, tempi e costi.'
    ],
    note: 'Accordo di riservatezza su richiesta. Senza impegno.',
    form: {
      stepLabels: ['Il vostro obiettivo', 'I dettagli', 'I vostri contatti'],
      progress: 'Passo {current} di {total}',
      servicesTitle: 'Come possiamo aiutarvi?',
      servicesHint: 'Scegliete tutto ciò che fa al caso vostro.',
      services: [
        { value: 'agents', label: 'Agenti e assistenti IA' },
        { value: 'automation', label: 'Automazione dei processi' },
        { value: 'products', label: 'Un nuovo prodotto o un’app' },
        { value: 'data', label: 'Dati e analisi' },
        { value: 'integration', label: 'Collegare i nostri sistemi' },
        { value: 'unsure', label: 'Non so ancora, consigliatemi' }
      ],
      servicesError: 'Scegliete almeno un’opzione per continuare.',
      budgetTitle: 'Budget',
      budgets: [
        { value: 'under-10k', label: 'Meno di 10.000 €' },
        { value: '10k-25k', label: '10.000–25.000 €' },
        { value: '25k-75k', label: '25.000–75.000 €' },
        { value: 'over-75k', label: 'Oltre 75.000 €' },
        { value: 'unsure', label: 'Non so ancora' }
      ],
      timelineTitle: 'Tempistiche',
      timelines: [
        { value: 'asap', label: 'Il prima possibile' },
        { value: '3-months', label: 'Entro 3 mesi' },
        { value: 'this-year', label: 'Quest’anno' },
        { value: 'exploring', label: 'Sto solo valutando' }
      ],
      optional: 'facoltativo',
      messageTitle: 'Raccontateci',
      messageLabel: 'Descrivete il problema o l’idea',
      messagePlaceholder:
        'Per esempio: il nostro team passa ore ogni settimana a copiare i dati degli ordini nelle fatture. Vogliamo che avvenga in automatico.',
      messageError: 'Aggiungete qualche dettaglio in più così possiamo darvi una risposta utile.',
      messageCount: '{count} caratteri',
      startersLabel: 'Partite da un esempio',
      starters: [
        {
          label: 'Automatizzare un processo manuale',
          text: 'Vogliamo automatizzare un processo manuale. Oggi funziona così: '
        },
        {
          label: 'Creare un assistente IA',
          text: 'Vogliamo un assistente IA che aiuti i nostri clienti o il nostro team a: '
        },
        {
          label: 'Trasformare un’idea in prodotto',
          text: 'Abbiamo un’idea di prodotto. Dovrebbe aiutare le persone a: '
        }
      ],
      contactTitle: 'Dove possiamo rispondervi?',
      nameLabel: 'Il vostro nome',
      nameError: 'Inserite il vostro nome.',
      emailLabel: 'Email di lavoro',
      emailPlaceholder: 'tu@azienda.it',
      emailError: 'Inserite un indirizzo email valido così possiamo rispondervi.',
      companyLabel: 'Azienda',
      privacy: 'Usiamo i vostri dati solo per rispondere a questa richiesta.',
      continue: 'Continua',
      back: 'Indietro',
      submit: 'Invia richiesta',
      sending: 'Invio in corso…',
      failed: 'La richiesta non è stata inviata. Controllate la connessione e riprovate.',
      retry: 'Riprova',
      sentTitle: 'Richiesta inviata',
      sentCopy: 'Grazie, {name}. Risponderemo a {email} entro due giorni lavorativi.',
      sentAgain: 'Invia un’altra richiesta',
      summaryLabel: 'La vostra richiesta'
    }
  },
  footer: {
    blurb: 'Uno studio di ingegneria nativo IA. Trasformiamo i problemi difficili in sistemi che funzionano da soli.',
    exploreLabel: 'Esplora',
    settingsLabel: 'Preferenze',
    startProject: 'Avvia un progetto',
    backToTop: 'Torna su',
    rights: 'Gemini Software Engineering'
  }
};
