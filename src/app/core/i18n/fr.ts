import { SiteContent } from './types';

export const fr: SiteContent = {
  meta: {
    title: 'Gemini — Studio logiciel et d’automatisation nativement IA',
    description:
      'Gemini associe IA de pointe, agents autonomes et automatisation pour transformer les problèmes complexes en systèmes qui tournent seuls — plus vite et à moindre coût.'
  },
  header: {
    nav: [
      { label: 'Services', id: 'services' },
      { label: 'Méthode', id: 'approach' },
      { label: 'Pourquoi nous', id: 'difference' },
      { label: 'FAQ', id: 'faq' }
    ],
    cta: 'Lancer un projet',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    languageLabel: 'Langue',
    theme: { label: 'Apparence', auto: 'Auto', light: 'Clair', dark: 'Sombre' }
  },
  hero: {
    title: ['Nous faisons disparaître', 'les problèmes complexes.'],
    lead:
      'Gemini est un studio d’ingénierie nativement IA. Nous associons IA de pointe, agents autonomes et automatisation pour transformer vos problèmes et vos idées en systèmes qui fonctionnent — plus vite, plus simplement et pour une fraction du coût habituel.',
    primaryCta: 'Lancer un projet',
    secondaryCta: 'Voir notre méthode',
    legendLabel: 'Comment lire cette page',
    legendFriction: 'Friction : tâches manuelles, données éparpillées, décisions lentes',
    legendFlow: 'Flux : automatisé, connecté, mesurable',
    scrollHint: 'Faites défiler pour résoudre'
  },
  shift: {
    title: 'Ce qui disparaît dès que nous commençons',
    copy:
      'La plupart des entreprises n’ont pas besoin de plus de logiciels, mais de moins de friction. Voici ce qui disparaît en premier.',
    problemLabel: 'Avant',
    outcomeLabel: 'Après',
    rows: [
      { problem: 'Des heures de copier-coller entre outils', outcome: 'Des processus qui tournent seuls' },
      { problem: 'Des files de support qui ne raccourcissent jamais', outcome: 'Des agents IA qui répondent jour et nuit' },
      { problem: 'Des données que personne n’a le temps de lire', outcome: 'Prévisions et réponses à la demande' },
      { problem: 'Des mois de cahier des charges avant le moindre résultat', outcome: 'Un prototype fonctionnel en quelques semaines' },
      { problem: 'Des systèmes historiques que personne n’ose toucher', outcome: 'Modernisés pas à pas, sans interruption' },
      { problem: 'De grosses équipes et des budgets encore plus gros', outcome: 'Une équipe senior resserrée, démultipliée par l’IA' }
    ]
  },
  services: {
    title: 'Ce que nous construisons',
    copy:
      'Nous ne dépendons d’aucun fournisseur ni d’aucune technologie. Pour chaque problème, nous retenons le meilleur de ce qui existe aujourd’hui — et l’assemblons en un système adapté à votre façon de travailler.',
    consoleLabel: 'Exemple d’exécution',
    consoleNote: 'Exécution illustrative d’un système comme ceux que nous construisons.',
    items: [
      {
        key: 'agents',
        name: 'Agents et assistants IA',
        summary:
          'Des coéquipiers numériques qui répondent aux clients, qualifient les prospects et prennent en charge le back-office jour et nuit — avec un humain dans la boucle là où c’est important.',
        points: [
          'Agents pour le service client et la vente',
          'Assistants internes qui connaissent votre activité',
          'Chat, e-mail et téléphone'
        ],
        log: [
          'Nouvelle demande : « Où en est ma commande n° 48213 ? »',
          'Commande trouvée dans le système logistique',
          'Retard détecté, nouvelle date de livraison confirmée',
          'Réponse personnalisée rédigée et envoyée'
        ],
        result: 'Résolu automatiquement, sans déranger personne'
      },
      {
        key: 'automation',
        name: 'Automatisation des processus',
        summary:
          'Nous repérons le travail répétitif caché dans vos opérations et le transformons en processus qui s’exécutent seuls, de bout en bout.',
        points: [
          'Validations, facturation et intégration',
          'Réception de documents et saisie de données',
          'Des rapports qui s’écrivent seuls'
        ],
        log: [
          'Facture fournisseur reçue en PDF',
          'Lignes lues et rapprochées de la commande',
          'Écart sous le seuil, facture validée',
          'Comptabilisée, équipe informée'
        ],
        result: 'Traité de bout en bout, sans saisie manuelle'
      },
      {
        key: 'products',
        name: 'Produits intelligents',
        summary:
          'Plateformes web et applications mobiles avec l’intelligence au cœur, pas en option — conçues, développées et lancées de bout en bout.',
        points: [
          'Plateformes web et portails clients',
          'Applications mobiles sur toutes les plateformes',
          'Produits SaaS et outils internes'
        ],
        log: [
          'Idée : une appli terrain avec assistant IA',
          'Prototype cliquable testé avec de vrais utilisateurs',
          'Retours intégrés, design finalisé',
          'Publiée sur l’App Store et Google Play'
        ],
        result: 'De l’idée au lancement en semaines, pas en trimestres'
      },
      {
        key: 'data',
        name: 'Données et aide à la décision',
        summary:
          'Transformez des données dispersées en prévisions, alertes et tableaux de bord que votre équipe utilise vraiment pour décider plus vite.',
        points: [
          'Prévisions et détection d’anomalies',
          'Tableaux de bord et KPI en temps réel',
          'Recommandations au moment de décider'
        ],
        log: [
          'Données ventes, stocks et web connectées',
          'Pic de demande inhabituel détecté dans une région',
          'Prévision mise à jour, réassort suggéré',
          'Synthèse hebdomadaire envoyée à la direction'
        ],
        result: 'Des décisions fondées sur des chiffres à jour, pas sur l’intuition'
      },
      {
        key: 'documents',
        name: 'IA documentaire et connaissances',
        summary:
          'Chaque contrat, manuel et e-mail devient consultable, résumé et exploitable en quelques secondes plutôt qu’en plusieurs jours.',
        points: [
          'Extraction depuis des PDF et des scans',
          'Recherche dans tout le savoir de l’entreprise',
          'Résumés, brouillons et traductions'
        ],
        log: [
          'Archive complète de contrats importée',
          'Parties, échéances et clauses clés extraites',
          'Contrats à risque de renouvellement signalés',
          'Tout est interrogeable en langage courant'
        ],
        result: 'Des jours de lecture réduits à quelques minutes'
      },
      {
        key: 'integration',
        name: 'Intégration et modernisation',
        summary:
          'Nous connectons les systèmes que vous possédez déjà et modernisons les logiciels existants pas à pas — sans arrêter l’activité.',
        points: [
          'API et intégration de systèmes',
          'Migration cloud et modernisation',
          'Sécurité, droits d’accès et traçabilité'
        ],
        log: [
          'ERP historique connecté via une API sécurisée',
          'CRM, support et facturation synchronisés',
          'Double saisie supprimée',
          'Supervision et alertes activées'
        ],
        result: 'Un seul système connecté, sans jamais arrêter l’activité'
      }
    ]
  },
  approach: {
    title: 'Du premier échange au système en service',
    copy:
      'L’IA accélère chaque phase : vous voyez très tôt un logiciel qui fonctionne et vous payez des avancées, pas de la paperasse.',
    deliverableLabel: 'Vous obtenez',
    steps: [
      {
        name: 'Comprendre',
        description:
          'Nous analysons le problème, vos données et l’enjeu économique, et identifions où l’automatisation crée d’abord le plus de valeur.',
        deliverable: 'Un plan clair : périmètre, calendrier et retour attendu'
      },
      {
        name: 'Prototyper',
        description:
          'Une conception et une ingénierie accélérées par l’IA vous mettent entre les mains un prototype fonctionnel, testé avec de vrais utilisateurs et de vraies données.',
        deliverable: 'Quelque chose à cliquer, essayer et juger'
      },
      {
        name: 'Construire et intégrer',
        description:
          'Nous le préparons pour la production : sécurisé, évolutif et relié aux systèmes que vous utilisez déjà.',
        deliverable: 'Un système de production sur lequel votre équipe peut compter'
      },
      {
        name: 'Lancer et améliorer',
        description:
          'Nous mettons en service, mesurons et améliorons à mesure que votre activité grandit et que la technologie progresse.',
        deliverable: 'Des résultats mesurables, chaque mois'
      }
    ]
  },
  difference: {
    title: 'Plus rapide et plus léger, par conception',
    copy:
      'La vitesse et des coûts plus bas ne sont pas des raccourcis. Ils viennent de l’IA et de l’automatisation, qui font le travail qui exigeait autrefois de grandes équipes.',
    aspectLabel: 'Critère',
    traditionalLabel: 'Approche classique',
    geminiLabel: 'Gemini',
    rows: [
      {
        aspect: 'Équipe',
        traditional: 'De grandes équipes et de nombreux niveaux de coordination',
        gemini: 'Une équipe senior resserrée, démultipliée par des agents IA'
      },
      {
        aspect: 'Premier résultat',
        traditional: 'Après des mois de spécifications',
        gemini: 'Un prototype fonctionnel en quelques semaines'
      },
      {
        aspect: 'Technologie',
        traditional: 'La pile que l’agence vend déjà',
        gemini: 'Le meilleur outil pour chaque tâche, choisi parmi tout ce qui existe'
      },
      {
        aspect: 'Tâches répétitives',
        traditional: 'Faites à la main et facturées à l’heure',
        gemini: 'Automatisées : tests, documentation et reporting'
      },
      {
        aspect: 'Budget',
        traditional: 'Une large part absorbée par les frais de structure',
        gemini: 'Investi dans des résultats mesurables'
      },
      {
        aspect: 'Après le lancement',
        traditional: 'Livraison, puis silence',
        gemini: 'Supervisé, mesuré et amélioré en continu'
      }
    ],
    cta: 'Obtenir un plan pour votre projet'
  },
  faq: {
    title: 'Vos questions, nos réponses',
    copy: 'Ce que les équipes nous demandent le plus souvent avant de commencer.',
    items: [
      {
        question: 'Nous ne savons pas de quelle technologie IA nous avons besoin. Est-ce un problème ?',
        answer:
          'Pas du tout — choisir, c’est notre métier. Apportez le problème ou l’idée. Nous évaluons ce qui existe aujourd’hui en modèles, plateformes et outils, et retenons ce qui correspond à vos objectifs, à vos données et à votre budget. Nous ne dépendons d’aucun fournisseur : la recommandation ne sert que votre résultat.'
      },
      {
        question: 'Comment pouvez-vous être plus rapides et moins chers qu’une agence classique ?',
        answer:
          'Des agents IA accélèrent la recherche, la conception, le code, les tests et la documentation, tandis qu’une équipe senior resserrée porte les décisions et la qualité. Cela supprime l’essentiel de la coordination, des passations et des heures passées sur des tâches répétitives.'
      },
      {
        question: 'Quand verrons-nous des résultats ?',
        answer:
          'Très tôt. Vous avez un prototype fonctionnel entre les mains dès les premières semaines, pas après des mois de cahier des charges. Nous définissons ensemble ce qu’est un succès, puis nous le mesurons dès le premier jour.'
      },
      {
        question: 'Pouvez-vous travailler avec nos systèmes existants ?',
        answer:
          'Oui. Nous nous connectons aux outils, aux données et à l’infrastructure que vous utilisez déjà, et modernisons pas à pas pour que l’activité quotidienne ne s’arrête jamais.'
      },
      {
        question: 'Nos données sont-elles en sécurité ?',
        answer:
          'La sécurité est prévue dès le premier jour : droits d’accès minimaux, données chiffrées, traçabilité et validation humaine partout où les décisions comptent. Nous signons un accord de confidentialité sur demande et pouvons garder les données sensibles dans votre propre infrastructure.'
      },
      {
        question: 'Que se passe-t-il après le lancement ?',
        answer:
          'Nous restons à vos côtés pour superviser, mesurer et améliorer. L’IA évolue vite et votre système suit : de meilleurs modèles et de nouvelles automatisations sont intégrés dès qu’ils apportent une vraie valeur.'
      }
    ]
  },
  contact: {
    title: 'Dites-nous ce qui vous freine',
    copy: 'Décrivez le problème ou l’idée. Nous revenons vers vous avec un plan clair : périmètre, calendrier et coût.',
    nextLabel: 'La suite',
    nextSteps: [
      'Nous répondons sous deux jours ouvrés.',
      'Un court échange pour comprendre vos objectifs.',
      'Une proposition concrète : périmètre, calendrier et coût.'
    ],
    note: 'Accord de confidentialité sur demande. Sans engagement.',
    form: {
      stepLabels: ['Votre objectif', 'Les détails', 'Vos coordonnées'],
      progress: 'Étape {current} sur {total}',
      servicesTitle: 'Comment pouvons-nous vous aider ?',
      servicesHint: 'Choisissez tout ce qui s’applique.',
      services: [
        { value: 'agents', label: 'Agents et assistants IA' },
        { value: 'automation', label: 'Automatisation des processus' },
        { value: 'products', label: 'Un nouveau produit ou une appli' },
        { value: 'data', label: 'Données et analyses' },
        { value: 'integration', label: 'Connecter nos systèmes' },
        { value: 'unsure', label: 'Je ne sais pas encore, conseillez-moi' }
      ],
      servicesError: 'Choisissez au moins une option pour continuer.',
      budgetTitle: 'Budget',
      budgets: [
        { value: 'under-10k', label: 'Moins de 10 k€' },
        { value: '10k-25k', label: '10–25 k€' },
        { value: '25k-75k', label: '25–75 k€' },
        { value: 'over-75k', label: 'Plus de 75 k€' },
        { value: 'unsure', label: 'Je ne sais pas encore' }
      ],
      timelineTitle: 'Délai',
      timelines: [
        { value: 'asap', label: 'Dès que possible' },
        { value: '3-months', label: 'Sous 3 mois' },
        { value: 'this-year', label: 'Cette année' },
        { value: 'exploring', label: 'Simple exploration' }
      ],
      optional: 'facultatif',
      messageTitle: 'Parlez-nous-en',
      messageLabel: 'Décrivez le problème ou l’idée',
      messagePlaceholder:
        'Par exemple : notre équipe passe des heures chaque semaine à recopier les commandes dans les factures. Nous voulons que cela se fasse automatiquement.',
      messageError: 'Ajoutez quelques détails pour que nous puissions vous répondre utilement.',
      messageCount: '{count} caractères',
      startersLabel: 'Partir d’un exemple',
      starters: [
        {
          label: 'Automatiser une tâche manuelle',
          text: 'Nous voulons automatiser une tâche manuelle. Aujourd’hui, elle se déroule ainsi : '
        },
        {
          label: 'Créer un assistant IA',
          text: 'Nous voulons un assistant IA qui aide nos clients ou notre équipe à : '
        },
        {
          label: 'Transformer une idée en produit',
          text: 'Nous avons une idée de produit. Il devrait aider les gens à : '
        }
      ],
      contactTitle: 'Où devons-nous vous répondre ?',
      nameLabel: 'Votre nom',
      nameError: 'Indiquez votre nom.',
      emailLabel: 'E-mail professionnel',
      emailPlaceholder: 'vous@entreprise.fr',
      emailError: 'Saisissez une adresse e-mail valide pour que nous puissions vous répondre.',
      companyLabel: 'Entreprise',
      privacy: 'Vos coordonnées servent uniquement à répondre à cette demande.',
      continue: 'Continuer',
      back: 'Retour',
      submit: 'Envoyer la demande',
      sending: 'Envoi…',
      failed: 'Votre demande n’a pas été transmise. Vérifiez votre connexion et réessayez.',
      retry: 'Réessayer',
      sentTitle: 'Demande envoyée',
      sentCopy: 'Merci, {name}. Nous répondrons à {email} sous deux jours ouvrés.',
      sentAgain: 'Envoyer une autre demande',
      summaryLabel: 'Votre demande'
    }
  },
  footer: {
    blurb: 'Un studio d’ingénierie nativement IA. Nous transformons les problèmes complexes en systèmes qui tournent seuls.',
    exploreLabel: 'Explorer',
    settingsLabel: 'Préférences',
    startProject: 'Lancer un projet',
    backToTop: 'Haut de page',
    rights: 'Gemini Software Engineering'
  }
};
