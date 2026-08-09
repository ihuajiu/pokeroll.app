/* ------------------------------------------------------------------ */
/*  Dictionnaire français — même structure que en.ts (source typée)    */
/*                                                                     */
/*  Les valeurs sont les chaînes visibles par l'utilisateur. Les       */
/*  placeholders utilisent {name} et sont remplacés avec .replace()    */
/*  à l'appel (les dictionnaires doivent rester des objets simples     */
/*  sérialisables pour franchir la frontière serveur→client).          */
/* ------------------------------------------------------------------ */

export default {
  common: {
    copy: "Copier",
    copySet: "Copier le set",
    copied: "Copié !",
    copyShowdownSet: "Copier le set Showdown",
    showdownSetCopied: "Set Showdown copié",
    showdownSetCopiedBang: "Set Showdown copié !",
    back: "Retour",
    rollAdventure: "Lancer l'aventure",
    viewYourTeam: "Voir ton équipe",
    /** Template: {n} = generation number. */
    genShort: "Gen {n}",
    /** Template: {label} = tool label. */
    toolArtworkAlt: "Artwork Pokémon d'exemple de {label}",
    home: "Accueil",
    randomPokemon: "Pokémon aléatoire",
    generateAgain: "Régénérer",
    generating: "Génération…",
    generateAnotherAria: "Générer un autre Pokémon aléatoire",
  },

  nav: {
    homeTitle: "Accueil de PokeRoll",
    menuAria: "Menu",
    languageAria: "Langue",
    /** Template: {count} = number of favorites. */
    favoritesAria: "Favoris ({count})",
    main: {
      adventure: "Aventure",
      generators: "Générateurs",
      team: "Équipe",
      challenges: "Défis",
      tools: "Outils",
      contact: "Contact",
    },
  },

  footer: {
    tagline:
      "Tire un Pokémon aléatoire — noms, types, stats et shinies en un clic.",
    contactUs: "Contacte-nous",
    onX: "PokeRoll sur X",
    xTitle: "@JoeyChou2024 sur X",
    onGithub: "PokeRoll sur GitHub",
    githubTitle: "ihuajiu/pokeroll.app sur GitHub",
    byRegion: "Par région",
    byType: "Par type",
    byGeneration: "Par génération",
    disclaimer:
      "Ceci est un outil conçu par des fans. Non affilié à Nintendo, Game Freak ou The Pokémon Company. Données Pokémon fournies par",
    pokeApi: "PokéAPI",
    disclaimerLink: "Mentions légales",
    disclaimerTitle: "Mentions légales",
    privacy: "Confidentialité",
    privacyTitle: "Politique de confidentialité",
    terms: "Conditions",
    termsTitle: "Conditions d'utilisation",
    badges: {
      fazierTitle: "Présenté sur Fazier",
      fazierAlt: "Badge « Présenté sur Fazier »",
      tinyTitle: "Présenté sur TinyLaunch",
      tinyAlt: "Badge TinyLaunch",
      findlyTitle: "Présenté sur Findly.tools",
      findlyAlt: "Présenté sur Findly.tools",
    },
  },

  tools: {
    groups: {
      adventure: {
        title: "Aventure",
        desc: "Tire ton dresseur, ta région, ton starter, ton équipe, ton défi et ton objectif en un clic.",
      },
      generator: {
        title: "Générateurs",
        desc: "Tirages de Pokémon aléatoires par type, talent, capacité, stat, numéro et plus.",
      },
      challenge: {
        title: "Défis",
        desc: "Devine, chasse ou fais tourner la roue — des défis à partager avec tes amis.",
      },
      tool: {
        title: "Outils",
        desc: "Des utilitaires pratiques construits sur les tirages aléatoires.",
      },
      team: {
        title: "Équipe",
        desc: "Compose ton équipe ou tire une équipe de six toute prête.",
      },
    },
    items: {
      adventure: {
        label: "Aventure Pokémon",
        desc: "Tire une aventure complète — dresseur, starter, équipe, défi et objectif.",
      },
      randomPokemon: {
        label: "Pokémon aléatoire",
        desc: "Un Pokémon totalement aléatoire avec stats, type et sprite.",
      },
      type: {
        label: "Générateur de types",
        desc: "Tire un type aléatoire et un Pokémon correspondant.",
      },
      ability: {
        label: "Générateur de talents",
        desc: "Tire un talent aléatoire et découvre qui le possède.",
      },
      move: {
        label: "Générateur de capacités",
        desc: "Découvre une capacité aléatoire et l'un de ses utilisateurs.",
      },
      bst: {
        label: "Générateur de BST",
        desc: "Un total de stats de base aléatoire, puis révèle le Pokémon.",
      },
      number: {
        label: "Générateur de numéros",
        desc: "Tire un numéro de Pokédex et découvre quel Pokémon c'est.",
      },
      starter: {
        label: "Générateur de starters",
        desc: "Un compagnon aléatoire de chaque génération.",
      },
      cute: {
        label: "Générateur de mignons",
        desc: "Des choix doux, duveteux et adorables.",
      },
      mythical: {
        label: "Générateur de fabuleux",
        desc: "Mew, Celebi, Arceus et leurs amis.",
      },
      legendary: {
        label: "Générateur de légendaires",
        desc: "Tire uniquement des Pokémon légendaires.",
      },
      mega: {
        label: "Générateur de méga",
        desc: "Méga-Évolutions et Primo-Résurgences.",
      },
      nickname: {
        label: "Générateur de surnoms",
        desc: "Un Pokémon associé à un surnom mignon et rigolo.",
      },
      guess: {
        label: "Devine le Pokémon",
        desc: "Noms cachés — devine à partir de la silhouette, révèle pour vérifier.",
      },
      shiny: {
        label: "Chasse shiny",
        desc: "Combien de rencontres avant ton prochain shiny ?",
      },
      mystery: {
        label: "Pokémon mystère",
        desc: "Une carte mystère — artwork visible, nom caché.",
      },
      wheel: {
        label: "Bataille à la roue",
        desc: "Roue multijoueur — 2 à 6 joueurs tournent, le BST le plus haut gagne.",
      },
      fusion: {
        label: "Outil de fusion",
        desc: "Fusionne deux Pokémon en une nouvelle créature.",
      },
      randomTeam: {
        label: "Équipe aléatoire",
        desc: "Tire une équipe toute prête de six Pokémon aléatoires.",
      },
      teamChallenge: {
        label: "Défi d'équipe",
        desc: "Tire une équipe avec seed et défie un ami de la battre.",
      },
      teamCoach: {
        label: "Coach d'équipe",
        desc: "Verrouille tes choix, complète le reste avec une couverture intelligente.",
      },
      myTeam: {
        label: "Mon équipe",
        desc: "Rassemble tes favoris dans une équipe à thème.",
      },
    },
    /** Homepage "Jump straight in" cards — keyed by tool id. Several labels
     *  intentionally differ from the catalog labels above. */
    jump: {
      randomPokemon: {
        label: "Générateur aléatoire",
        desc: "Invoque un Pokémon aléatoire avec stats et artwork complets.",
      },
      adventure: {
        label: "Mode aventure",
        desc: "Tire une aventure Pokémon complète — dresseur, starter, équipe, défi et objectif.",
      },
      randomTeam: {
        label: "Équipe aléatoire",
        desc: "Tire une équipe toute prête de six Pokémon aléatoires.",
      },
      fusion: {
        label: "Générateur de fusions",
        desc: "Fusionne deux Pokémon en une créature hybride.",
      },
      shiny: {
        label: "Chasse shiny",
        desc: "Traque la rare forme chromatique.",
      },
      guess: {
        label: "Devine le Pokémon",
        desc: "Noms cachés — devine à partir de la silhouette, révèle pour vérifier.",
      },
    },
  },

  heroCard: {
    stats: {
      hp: "PV",
      atk: "ATT",
      def: "DEF",
      spa: "ATS",
      spd: "DFS",
      spe: "VIT",
    },
    forms: {
      mega: "Méga",
      alolan: "d'Alola",
      galarian: "de Galar",
      hisuian: "de Hisui",
      paldean: "de Paldea",
      gigantamax: "Gigamax",
    },
    ability: "Talent",
    region: "Région",
    bst: "BST",
    gen: "Gen",
    height: "Taille",
    weight: "Poids",
    heightUnit: "m",
    weightUnit: "kg",
    mystery: "Mystère",
    newRoll: "Nouveau tirage",
    rolling: "Tirage…",
    flipHint: "Touche la carte pour la retourner — set Showdown",
    showdownSet: "Set Showdown",
    loading: "Chargement…",
    generatingSet: "Génération du set…",
    lock: "Verrouiller — garder au prochain tirage",
    unlock: "Déverrouiller — autoriser le tirage",
    addToFavorites: "Ajouter aux favoris",
    removeFromFavorites: "Retirer des favoris",
    favLimit: "15 favoris max — retires-en un pour en ajouter un autre.",
    shareLink: "Partager le lien",
    linkShared: "Lien partagé",
    linkCopied: "Lien copié !",
    shared: "Partagé !",
    downloadCard: "Télécharger la carte",
    imageSaved: "Image enregistrée",
    imageSavedBang: "Image enregistrée !",
    closeShowdown: "Fermer le set Showdown",
    backToCard: "Retour à la carte",
  },

  randomGenerator: {
    generation: "Génération",
    region: "Région",
    type: "Type",
    legendary: "Légendaire",
    starter: "Starter",
    favorites: "Favoris",
    all: "Tous",
    any: "Tous",
    only: "Uniquement",
    exclude: "Exclure",
    favoritesTitle: "Ignorer les Pokémon que tu as mis en favoris",
    noMatch: "Aucun Pokémon ne correspond à ces filtres — essaie de les élargir.",
    advancedFilters: "Filtres avancés",
    collapseAria: "Réduire les filtres avancés",
    collapseTitle: "Réduire les filtres",
  },

  variantGenerator: {
    welcome: "Bienvenue, dresseur !",
    /** Template: {kind} = localized kind label. */
    yourRandom: "Voici ton tirage aléatoire : {kind}…",
    buildTeam: "Créer une équipe",
    kinds: {
      type: "type",
      ability: "talent",
      move: "capacité",
      bst: "total de stats de base",
      number: "numéro de Pokédex",
      starter: "Pokémon starter",
      shiny: "Pokémon shiny",
      noNames: "Pokémon mystère",
      cute: "Pokémon mignon",
      mythical: "Pokémon fabuleux",
      mega: "Méga-Pokémon",
      nickname: "surnom",
    },
  },

  homeTool: {
    eyebrow: "Générateur de Pokémon aléatoire & outils",
    title: "Générateur de",
    titleAccent: "Pokémon aléatoire",
    lead: "Tire un Pokémon aléatoire en un clic — plus de 1 000 espèces avec stats et artwork complets. Ou tire une équipe Pokémon aléatoire, un défi, voire une aventure Pokémon complète. Gratuit, instantané et à partager.",
    rollPokemon: "Tirer un Pokémon",
    randomGeneratorTitle: "Générateur de Pokémon aléatoire",
    stats: {
      species: "Espèces",
      types: "Types",
      generations: "Générations",
    },
    jumpEyebrow: "Plonge directement",
    jumpTitle: "Choisis un outil et lance-toi",
    jumpDesc: "Les générateurs les plus populaires — un tap, du fun instantané.",
    explore: "Explorer",
    browseEyebrow: "Matrice d'outils",
    browseTitle: "Toutes les façons de tirer",
    browseDesc: "Le catalogue complet d'outils — toutes les façons de tirer un Pokémon.",
  },

  homeFacts: {
    title: "PokeRoll en chiffres",
    metricHead: "Mesure",
    valueHead: "Valeur",
    noteHead: "Note",
    facts: [
      { metric: "Espèces de Pokémon", value: "1 000+", note: "Les 9 générations" },
      { metric: "Types de Pokémon", value: "18", note: "Tous filtrables" },
      { metric: "Générations", value: "9", note: "De la Gen 1 (Kanto) à la Gen 9 (Paldea)" },
      { metric: "Taille d'équipe aléatoire", value: "6", note: "Une équipe complète prête au combat" },
      { metric: "Chances de base d'un shiny", value: "1 / 4 096", note: "Comme dans les jeux modernes" },
    ],
    howToTitle: "Comment tirer un Pokémon aléatoire en 3 étapes",
    step1Pre: "Ouvre le",
    step1Link: "générateur de Pokémon aléatoire",
    step1Post: "— sans inscription ni téléchargement.",
    step2: "Touche le bouton de tirage pour obtenir instantanément 1 des 1 000+ espèces avec nom, type, talent, stats de base et artwork.",
    step3: "Retourne la carte pour copier un set Pokémon Showdown tout prêt, ou partage le lien avec tes amis.",
    quote1:
      "« Cela donne une probabilité de base d'obtenir un shiny d'environ 16/65536, soit 1/4096. »",
    quote1Cite: "Bulbapedia, « Pokémon chromatique »",
    quote2:
      "« Toutes les données Pokémon dont tu auras jamais besoin au même endroit, facilement accessibles via une API REST moderne, gratuite et open source. »",
    quote2CiteSuffix: ", avec plus de 50 milliards d'appels API chaque mois",
  },

  addToTeam: {
    add: "Ajouter à l'équipe",
    addAria: "Ajouter à l'équipe",
    inTeam: "✓ Dans l'équipe",
    removeAria: "Retirer de l'équipe",
    /** Template: {count} = current team size. */
    viewTeam: "Voir l'équipe ({count})",
  },

  faq: {
    heading: "FAQ",
  },

  relatedTools: {
    heading: "Outils associés",
  },

  /* ---------------------------------------------------------------- */
  /*  Page-level metadata + copy (app/[locale]/…)                      */
  /*  English values are verbatim from the pre-i18n pages; dynamic     */
  /*  segments use {placeholders} substituted with .replace() chains.  */
  /* ---------------------------------------------------------------- */
  pages: {
    home: {
      metaTitle: "Générateur de Pokémon aléatoire — Équipe, type & roue | PokeRoll",
      metaDescription:
        "PokeRoll est un générateur de Pokémon aléatoire gratuit et une boîte à outils — compose une équipe aléatoire, relève des défis ou tire une aventure complète, et copie n'importe quelle carte vers Showdown.",
      keywords: [
        "generateur de pokemon",
        "generateur de pokemon aleatoire",
        "générateur de pokémon aléatoire",
        "outils pokemon",
        "generateur d'equipe pokemon",
        "aventure pokemon",
      ],
      /** Template: {date} = last-updated ISO date. */
      updatedBy: "Par l'équipe PokeRoll · Dernière mise à jour le {date}",
      // FAQ answers interleave text with links: s1/l1/s2/l2/s3 are the
      // segments around up to two links, aText the plain JSON-LD version.
      faq1: {
        q: "Combien de Pokémon ce générateur peut-il tirer ?",
        s1: "Il peut tirer n'importe laquelle des 1 000+ espèces de Pokémon réparties sur les 9 générations et les 18 types. Chaque carte affiche stats, talents et artwork complets, et les données proviennent de la ",
        l1: "PokéAPI",
        s2: " publique.",
        aText:
          "Il peut tirer n'importe laquelle des 1 000+ espèces de Pokémon réparties sur les 9 générations et les 18 types. Chaque carte affiche stats, talents et artwork complets, et les données proviennent de la PokéAPI publique (pokeapi.co).",
      },
      faq2: {
        q: "Quelles sont les chances d'obtenir un Pokémon shiny ?",
        s1: "Nos tirages shiny reproduisent les jeux modernes : une chance de base de 1 sur 4 096. C'est le taux officiel depuis la Génération VI — les jeux précédents utilisaient 1 sur 8 192 — comme le documente ",
        l1: "Bulbapedia",
        s2: ". Tente ta chance dans le défi ",
        l2: "Chasse shiny",
        s3: ".",
        aText:
          "Nos tirages shiny reproduisent les jeux modernes : une chance de base de 1 sur 4 096. C'est le taux officiel depuis la Génération VI — les jeux précédents utilisaient 1 sur 8 192 — comme le documente Bulbapedia. Tente ta chance dans le défi Chasse shiny.",
      },
      faq3: {
        q: "Puis-je générer une équipe complète de six Pokémon d'un coup ?",
        s1: "Oui — le ",
        l1: "générateur d'équipe aléatoire",
        s2: " tire une équipe toute prête de 6 Pokémon en un clic, et le ",
        l2: "Coach d'équipe",
        s3: " équilibre les 6 emplacements selon la couverture de types. Chaque set peut être copié directement dans Pokémon Showdown.",
        aText:
          "Oui — le générateur d'équipe aléatoire tire une équipe toute prête de 6 Pokémon en un clic, et le Coach d'équipe équilibre les 6 emplacements selon la couverture de types. Chaque set peut être copié directement dans Pokémon Showdown.",
      },
      faq4: {
        q: "PokeRoll est-il gratuit ?",
        s1: "Oui, tous les outils de PokeRoll sont entièrement gratuits — les 18+ générateurs, défis et outils d'équipe fonctionnent instantanément dans ton navigateur, sans inscription, sans téléchargement et sans limite de tirages.",
      },
      faq5: {
        q: "D'où viennent les données Pokémon de ce site ?",
        s1: "Tous les noms, types, stats, talents et sprites proviennent de ",
        l1: "PokéAPI",
        s2: ", la base de données Pokémon communautaire et ouverte. Elle couvre plus de 1 000 espèces sur 9 générations, donc les tirages reflètent toujours le vrai Pokédex.",
        aText:
          "Tous les noms, types, stats, talents et sprites proviennent de PokéAPI (pokeapi.co), la base de données Pokémon communautaire et ouverte. Elle couvre plus de 1 000 espèces sur 9 générations, donc les tirages reflètent toujours le vrai Pokédex.",
      },
      faq6: {
        q: "PokeRoll est-il affilié à Nintendo ou The Pokémon Company ?",
        s1: "Non. PokeRoll est un projet indépendant conçu par des fans et n'est ni affilié, ni approuvé, ni sponsorisé par Nintendo, Game Freak ou The Pokémon Company. Consulte nos ",
        l1: "mentions légales",
        s2: " pour l'avis complet.",
        aText:
          "Non. PokeRoll est un projet indépendant conçu par des fans et n'est ni affilié, ni approuvé, ni sponsorisé par Nintendo, Game Freak ou The Pokémon Company. Consulte nos mentions légales pour l'avis complet.",
      },
    },

    randomGenerator: {
      metaTitle: "Générateur de Pokémon aléatoire | PokeRoll",
      /** Template: {name} = shared Pokémon display name. */
      sharedTitle: "{name} — Générateur de Pokémon aléatoire",
      metaDescription:
        "Tire un Pokémon aléatoire en un clic — nom, type, talent, stats de base et artwork inclus. Retourne la carte pour un set Showdown prêt à copier. Outil gratuit conçu par des fans.",
      /** Template: {name}; used when the name is ≤16 chars (SEO length window). */
      sharedDescLong:
        "J'ai tiré {name} sur PokeRoll — retourne la carte pour son set Showdown prêt à copier, ou tire ton propre Pokémon aléatoire en un clic. Outil gratuit conçu par des fans.",
      /** Template: {name}; used for longer names. */
      sharedDescShort:
        "J'ai tiré {name} sur PokeRoll — retourne la carte pour son set Showdown prêt à copier, ou tires-en un aléatoire toi aussi. Outil gratuit conçu par des fans.",
      /** Template: {name}. */
      ogSharedTitle: "{name} — Pokémon aléatoire",
      /** Template: {name}. */
      ogSharedDesc: "J'ai tiré {name} sur PokeRoll. Et toi, qu'obtiendras-tu ?",
      keywords: [
        "generateur de pokemon aleatoire",
        "générateur de pokémon aléatoire",
        "pokemon aleatoire",
        "generer un pokemon aleatoire",
        "obtenir un pokemon aleatoire",
      ],
      headerTitle: "Générateur de Pokémon aléatoire",
      headerDesc:
        "Tire un Pokémon aléatoire en un clic — chaque tirage inclut son nom, son type, son talent, ses stats et un sprite officiel.",
      faqs: [
        {
          q: "Comment fonctionne le générateur de Pokémon aléatoire ?",
          a: "Chaque tirage choisit un Pokémon au hasard dans le Pokédex National complet — plus de 1 000 espèces réparties sur les neuf générations — et affiche son nom, ses types, son talent, ses stats de base, sa taille, son poids et son artwork officiel.",
        },
        {
          q: "Puis-je reproduire ou partager un résultat précis ?",
          a: "Oui. Utilise le bouton Partager sur la carte — le lien contient le Pokémon exact, donc quiconque l'ouvre voit le même tirage. Tu peux aussi télécharger la carte en image.",
        },
        {
          q: "Puis-je restreindre les résultats ?",
          a: "Ouvre les filtres avancés pour tirer dans une génération, une région, un type ou une catégorie précise — ou utilise les pages dédiées Gen, Région et Type liées ci-dessous.",
        },
        {
          q: "D'où viennent les données Pokémon ?",
          a: "Toutes les données des espèces proviennent de PokéAPI et sont embarquées localement avec le site, donc chaque tirage est instantané.",
        },
      ],
    },

    type: {
      /** Template: {type} = localized type display name. */
      metaTitle: "Générateur de Pokémon aléatoire de type {type} | PokeRoll",
      /** Template: {type}. */
      metaDescription:
        "Génère instantanément un Pokémon aléatoire de type {type} : nom, talents, stats de base, génération et sprite, prêt à copier dans Showdown. Outil gratuit conçu par des fans.",
      /** Templates: {slug} = raw English type slug (lowercase). */
      keywords: [
        "generateur pokemon aleatoire type {slug}",
        "generateur de pokemon type {slug}",
        "generateur pokemon {slug}",
      ],
      /** Template: {type}. */
      breadcrumbType: "Pokémon de type {type}",
      /** Template: {type}. */
      headerTitle: "Générateur de Pokémon aléatoire de type {type}",
      /** Template: {type}. */
      headerDesc:
        "Tu cherches un Pokémon aléatoire de type {type} ? En voici un — touche « Régénérer » pour en tirer un autre.",
      /** Template: {type}. */
      introS1: "Les Pokémon de type {type} sont apparus pour la première fois dans la ",
      introS2: ", en même temps que la ",
      /** Template: {region} = region display name. */
      introRegionLink: "région de {region}",
      introS3: ". Tires-en un ci-dessus, explore les 18 types avec le ",
      introTypeLink: "générateur de types",
      introS4: ", ou pars sur du ",
      introRandomLink: "totalement aléatoire",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Explorer la région de {region}",
      linkTitleType: "Générateur de types",
      linkTitleRandom: "Générateur de Pokémon aléatoire",
    },

    gen: {
      /** Template: {gen} = generation number. */
      metaTitle: "Générateur de Pokémon aléatoire Génération {gen} | PokeRoll",
      /** Templates: {gen}, {region} = raw region slug (lowercase, verbatim SEO copy). */
      metaDescription:
        "Génère un Pokémon aléatoire de la Génération {gen}, issu de la région de {region} : nom, type, talent, stats de base et sprite — à copier dans Showdown. Outil conçu par des fans.",
      /** Templates: {gen}. */
      keywords: [
        "generateur pokemon aleatoire generation {gen}",
        "generateur pokemon gen {gen}",
        "generateur de pokemon aleatoire gen {gen}",
      ],
      /** Template: {genLabel} = localized "Generation N". */
      headerTitle: "Générateur de Pokémon aléatoire de la {genLabel}",
      /** Template: {genLabel}. */
      headerDesc:
        "La {genLabel} a introduit de nombreux Pokémon adorés des fans. En voici un au hasard — touche « Régénérer » pour en voir d'autres.",
      introRegionPre: " a introduit la ",
      /** Template: {region} = region display name. */
      introRegionLink: "région de {region}",
      /** Template: {game} = game titles. */
      introGame: " et Pokémon {game}",
      introS3: ". Tires-en un ci-dessus, explore par ",
      introTypeLink: "type",
      introS4: ", ou pars sur du ",
      introRandomLink: "totalement aléatoire",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Explorer la région de {region}",
      linkTitleType: "Générateur de types",
      linkTitleRandom: "Générateur de Pokémon aléatoire",
    },

    region: {
      // Third-version game titles that share these regions (same in all 5 locales).
      gameHoenn: "Ruby, Sapphire & Emerald",
      gameSinnoh: "Diamond, Pearl & Platinum",
      /** Templates: {region} = region display name, {gameDesc} = game titles. */
      metaTitle: "Générateur de Pokémon aléatoire de {region} — {gameDesc}",
      /** Template: {region}. */
      descStart: "Génère un Pokémon aléatoire de {region}",
      descFill: " instantanément",
      /** Template: {gameDesc}. */
      descFromGame: " issu de Pokémon {gameDesc}",
      descEnd:
        " : nom, type, talent, stats de base et sprite — à copier dans Showdown. Outil gratuit conçu par des fans.",
      /** Templates: {slug} = raw region slug; REGION_EXTRA_KEYWORDS (lib/seo.ts) are appended. */
      keywords: ["generateur pokemon aleatoire {slug}", "pokemon {slug}"],
      /** Template: {slug}; used when a region has no REGION_EXTRA_KEYWORDS entry. */
      keywordFallback: "generateur de pokemon {slug}",
      /** Template: {region}. */
      breadcrumbRegion: "Pokémon de {region}",
      /** Template: {region}. */
      headerTitle: "Générateur de Pokémon aléatoire de {region}",
      /** Template: {region}. */
      headerDescStart: "Explore les Pokémon de {region}",
      /** Template: {game} = game titles. */
      headerDescGame: ", vedettes de Pokémon {game}",
      headerDescEnd: ". En voici un pour toi — touche « Régénérer » pour en avoir un autre.",
      /** Template: {region}. */
      introS1: "{region} abrite le ",
      /** Template: {genLabel} = localized "Generation N". */
      introGenLink: "Pokédex de la {genLabel}",
      /** Template: {game}. */
      introGame: " et les jeux Pokémon {game}",
      introS2: ". Tires-en un ci-dessus, ou essaie plutôt le ",
      introRandomLink: "générateur totalement aléatoire",
      introS3: ".",
      linkTitleRandom: "Générateur de Pokémon aléatoire",
    },

    variants: {
      type: {
        title: "Générateur aléatoire de types Pokémon | PokeRoll",
        description:
          "Obtiens instantanément un type Pokémon aléatoire et un Pokémon correspondant — Feu, Eau, Électrik et les 18 types. Régénère pour un autre, ou copie ton résultat dans Showdown.",
        keywords: [
          "generateur de type pokemon aleatoire",
          "generateur de types pokemon",
          "generateur de type pokemon seul",
        ],
      },
      ability: {
        title: "Générateur aléatoire de talents Pokémon | PokeRoll",
        description:
          "Tire un talent Pokémon aléatoire comme Static ou Blaze et découvre un Pokémon qui le possède — consulte ses stats et son typing complets, puis copie le set dans Showdown.",
        keywords: [
          "generateur de talents pokemon",
          "generateur de talent pokemon aleatoire",
          "generer un talent pokemon aleatoire",
        ],
      },
      move: {
        title: "Générateur aléatoire de capacités Pokémon | PokeRoll",
        description:
          "Découvre une capacité Pokémon aléatoire et un Pokémon qui peut l'apprendre — vérifie sa puissance, sa précision et son type, puis copie le set dans Showdown. Outil conçu par des fans.",
        keywords: [
          "generateur de capacites pokemon aleatoire",
          "generateur de capacites pokemon",
        ],
      },
      bst: {
        title: "Générateur aléatoire de stats Pokémon (BST) | PokeRoll",
        description:
          "Génère un total de stats de base (BST) aléatoire et révèle le Pokémon qui lui correspond — compare ses six stats, régénère, puis copie-le dans Showdown. Outil conçu par des fans.",
        keywords: [
          "generateur de stats pokemon aleatoire",
          "generateur de pokemon aleatoire avec stats",
          "stats generateur pokemon aleatoire",
        ],
      },
      number: {
        title: "Générateur aléatoire de numéros Pokémon | PokeRoll",
        description:
          "Tire un numéro de Pokédex aléatoire entre 1 et 1025 et découvre à quel Pokémon il correspond — consulte sa carte complète, puis copie-le dans Showdown. Outil gratuit conçu par des fans.",
        keywords: [
          "generateur de numeros pokemon",
          "generateur de numero pokemon aleatoire",
        ],
      },
      starter: {
        title: "Générateur de Pokémon starters aléatoires | PokeRoll",
        description:
          "Tire un Pokémon starter aléatoire parmi les premiers compagnons de chaque génération, de Kanto à Paldea — puis copie-le dans Showdown. Outil gratuit conçu par des fans.",
        keywords: [
          "generateur de pokemon starter aleatoire",
          "generateur de starters pokemon",
          "selecteur de pokemon starter aleatoire",
        ],
      },
      "no-names": {
        title: "Générateur de Pokémon aléatoire sans noms — Jeu de devinettes",
        description:
          "Un Pokémon mystère au nom caché — sauras-tu deviner de qui il s'agit grâce à son artwork et ses stats ? Retourne la carte pour révéler le set Showdown.",
        keywords: [
          "pokemon sans noms",
          "devine le pokemon",
          "quiz pokemon mystere",
          "generateur de pokemon aleatoire sans noms",
        ],
      },
      cute: {
        title: "Générateur de Pokémon mignons aléatoires | PokeRoll",
        description:
          "Obtiens un Pokémon mignon aléatoire — des choix doux, duveteux et adorables de tout le Pokédex. Régénère pour une autre bouille, ou copie-le dans Showdown.",
        keywords: [
          "generateur de pokemon mignon",
          "generateur de pokemon mignon aleatoire",
        ],
      },
      mythical: {
        title: "Générateur de Pokémon fabuleux aléatoires | PokeRoll",
        description:
          "Révèle un Pokémon fabuleux aléatoire comme Mew, Celebi ou Jirachi — des perles rares de toutes les générations, prêtes à copier dans Showdown. Outil conçu par des fans.",
        keywords: [
          "generateur de pokemon fabuleux aleatoire",
          "generateur de pokemon fabuleux",
        ],
      },
      mega: {
        title: "Générateur de Méga-Pokémon aléatoires | PokeRoll",
        description:
          "Tire un Pokémon Méga-Évolution ou Primo-Résurgence aléatoire — découvre ses stats boostées et son talent, puis copie le set dans Showdown. Outil gratuit conçu par des fans.",
        keywords: [
          "generateur de mega pokemon aleatoire",
          "generateur de mega pokemon",
        ],
      },
      nickname: {
        title: "Générateur de noms et surnoms Pokémon aléatoires | PokeRoll",
        description:
          "Génère un Pokémon aléatoire associé à un surnom mignon et rigolo — parfait pour ta prochaine partie ou ton Nuzlocke. Copie le set dans Showdown. Outil conçu par des fans.",
        keywords: [
          "generateur de surnoms pokemon",
          "generateur de surnom pokemon aleatoire",
          "generer un nom de pokemon aleatoire",
        ],
      },
      noNamesPromo: {
        s1: "Envie d'un quiz multi-cartes avec seed à partager ? ",
        link: "Essaie le défi des silhouettes →",
        linkTitle: "Devine le Pokémon",
      },
    },

    legendary: {
      metaTitle: "Générateur de Pokémon légendaires aléatoires | PokeRoll",
      metaDescription:
        "Génère instantanément un Pokémon légendaire aléatoire : nom, type, talent, stats de base et artwork officiel — copie le set dans Showdown. Outil conçu par des fans.",
      keywords: [
        "generateur de pokemon legendaire aleatoire",
        "generateur de pokemon legendaire",
        "pokemon legendaire aleatoire",
      ],
      breadcrumbLabel: "Générateur de légendaires",
      headerTitle: "Générateur de Pokémon légendaires aléatoires",
      headerDesc:
        "Uniquement des Pokémon légendaires dans ce pool — touche « Régénérer » pour un autre tirage légendaire.",
      note: "Touche « Régénérer » pour tirer un autre légendaire — « Ajouter à l'équipe » le garde dans ton équipe.",
    },
  },
};
