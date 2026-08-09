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
      findlyAlt: "Badge « Présenté sur Findly.tools »",
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

  adventureView: {
    /** Template: {seed} = adventure seed code. */
    seedLine: "Seed {seed} — partage ce lien pour rejouer exactement la même aventure.",
    difficultyLabel: "Difficulté",
    addAllToTeam: "Tout ajouter à l'équipe",
    shareAdventure: "Partager l'aventure",
    rollAgain: "Relancer",
    manifest: "Manifeste de l'aventure",
    /** Template: {difficulty} = difficulty label. */
    manifestDifficulty: "Difficulté · {difficulty}",
    /** Template: {seed} = adventure seed code. */
    manifestSeed: "Seed · {seed}",
    trainerProfile: "Profil du dresseur",
    /** Template: {style} = trainer style. */
    styleLine: "Style · {style}",
    challenge: "Défi",
    goal: "Objectif",
    /** Template: {n} = team size. */
    teamCompanions: "Équipe · {n} compagnons inconnus",
    yourStarter: "Ton starter",
    yourRival: "Ton rival",
    /** Templates: {name} = rival name, {type} = rival starter type. */
    rivalCounter: "{name} a choisi un starter de type {type} pour contrer le tien.",
    /** Template: {n} = team size. */
    yourTeam: "Ton équipe ({n})",
    gymJourney: "Parcours des arènes",
    legendaryEncounter: "Rencontre légendaire",
    /** Templates: {count} = current team size, {max} = team capacity. */
    teamFull: "Ton équipe est pleine ({count}/{max}). Retires-en pour ajouter de nouveaux Pokémon.",
    alreadyInTeam: "Tous ces Pokémon sont déjà dans ton équipe.",
    /** Templates: {added} = number added, {max} = team capacity. */
    addedFull: "{added} ajouté(s) — ton équipe est maintenant pleine ({max}/{max}).",
    /** Templates: {added} = number added, {count} = new team size, {max} = capacity. */
    addedToTeam: "{added} ajouté(s) à ton équipe ({count}/{max}).",
  },

  challengeGenerator: {
    hints: {
      guess: "Noms cachés — révèle pour vérifier",
      shiny: "Combien de rencontres avant un shiny ?",
    },
    createChallenge: "Créer le défi",
    shareChallenge: "Partager le défi",
    filtersAria: "Filtres",
    filtersTitle: "Filtres",
    collapseAria: "Réduire les filtres",
    collapseTitle: "Réduire les filtres",
    difficulty: "Difficulté",
    random: "Aléatoire",
    /** Template: {max} = count cap for the current difficulty. */
    countMax: "Nombre (max {max})",
    typeFilter: "Filtre de type",
    regionFilter: "Filtre de région",
    /** Templates: {revealed} = flipped cards, {total} = total cards. */
    revealedProgress: "Révélées {revealed} / {total}",
    hideAll: "Tout masquer",
    revealAll: "Tout révéler",
    silhouetteAlt: "Silhouette d'un Pokémon caché",
    /** Template: {types} = " · "-joined type hint list. */
    typeHint: "Indice : {types}",
    whosThat: "Quel est ce Pokémon ?",
  },

  shinyHunt: {
    shinyTag: "✦ SHINY",
    /** Template: {odds} = odds denominator (localized number). */
    oddsGuaranteed: "1 / {odds} · GARANTI",
    /** Template: {odds}. */
    oddsLabel: "CHANCES 1 / {odds}",
    /** Template: {odds}. */
    oddsGuaranteedLower: "1 / {odds} · garanti",
    /** Template: {odds}. */
    oddsLabelLower: "chances 1 / {odds}",
    encountersLabel: "Rencontres",
    /** Template: {name} = Pokémon display name. */
    shinyName: "{name} shiny",
    foundAfterPre: "Trouvé après ",
    /** Template: {n} = encounter count (localized number). */
    foundAfterCount: "{n} rencontres",
    foundAfterSep: " — ",
    verdicts: {
      absurdlyLucky: "Chance absurde — voilà une histoire à raconter.",
      lucky: "Quelle chance ! En dessous du taux.",
      overOdds: "Au-dessus du taux — mais tu y es arrivé.",
      brutal: "Chasse brutale. Celui-ci a mérité son éclat.",
    },
    shareAria: "Partager ton shiny",
    shareTitle: "Partager ton shiny",
    newHuntAria: "Lancer ta propre chasse",
    newHuntTitle: "Lancer ta propre chasse",
    rendering: "Rendu…",
    /** Template: {name} = wild Pokémon display name. */
    wildAppeared: "Un {name} sauvage apparaît…",
    notShiny: "pas shiny",
    emptyState: "Les hautes herbes bruissent… lance des rencontres pour chasser ton shiny.",
    encounter: "Rencontre !",
  },

  favoritesClient: {
    /** navigator.share title for the favorites snapshot link. */
    shareTitle: "Mes Pokémon favoris",
    sharedTitle: "Favoris partagés",
    yourTitle: "Tes favoris",
    sharedDesc: "Un aperçu de favoris partagé avec toi — lecture seule",
    yourDesc: "Les Pokémon que tu as mis en favoris sur cet appareil",
    /** Template: {count} = number of favorites. */
    slotsUsed: "{count} / 15 emplacements utilisés",
    /** Template: {count} = number of favorites; shown when the cap is hit. */
    slotsMax: "{count} / 15 — maximum atteint",
    /** Template: {count} = Pokémon in the shared snapshot. */
    sharedCount: "{count} Pokémon dans cet aperçu partagé",
    copyLink: "Copier le lien",
    saveToMine: "Enregistrer dans mes favoris",
    /** Template: {added} = " (+n)" when the merge added entries, else "". */
    savedViewMine: "Enregistré{added} — Voir les miens",
    /** Suffix after the bolded favorites count. */
    favoritedSuffix: " en favoris",
    clearAll: "Tout effacer",
    invalidLink: "Ce lien de favoris est invalide ou a expiré.",
    goToMine: "Aller à mes favoris",
    emptyState:
      "Pas encore de favoris. Tire un Pokémon et touche le cœur pour l'enregistrer ici.",
    rollPokemon: "Tirer un Pokémon",
    /** Template: {name} = Pokémon display name. */
    removeAria: "Retirer {name} des favoris",
    remove: "Retirer",
    shareFavorites: "Partager les favoris",
  },

  /* ---------------------------------------------------------------- */
  /*  Component-level UI strings (camelCase, keyed by component)        */
  /* ---------------------------------------------------------------- */

  teamClient: {
    readyTitle: "Ton équipe Pokémon est prête",
    readyDesc: "Gère ton équipe — partage-la, ou exporte chaque set vers Showdown.",
    sharedTitle: "Une équipe partagée avec toi",
    linkCopied: "Lien copié !",
    shareTeam: "Partager l'équipe",
    clearTeam: "Vider l'équipe",
    copyLink: "Copier le lien",
    backToGenerator: "Retour au générateur",
    guideTitle: "Comment jouer",
    guide1T: "Tire & ajoute",
    guide1D: "Génère des Pokémon sur n'importe quel outil et touche « Ajouter à l'équipe » pour les enregistrer ici.",
    guide2T: "Gère ton équipe",
    guide2D: "Sélectionne des Pokémon à retirer ou à effacer — ton équipe peut en contenir jusqu'à 6.",
    guide3T: "Partage ou exporte",
    guide3D: "Copie le lien de l'équipe pour tes amis, ou copie chaque set en texte Showdown pour tes combats.",
    /** Segment: followed by the selected count, then selectedSep + team size. */
    selectedPre: "Sélectionnés ",
    /** Segment: between the selected count and the team size. */
    selectedSep: " / ",
    clearSelection: "Effacer la sélection",
    selectAll: "Tout sélectionner",
    remove: "Retirer",
    /** Template: {count} = number of selected Pokémon. */
    removeCount: "Retirer ({count})",
    empty: "Pas encore de Pokémon. Génères-en et touche « Ajouter à l'équipe ».",
  },

  teamTray: {
    /** Template: {count} = current team size, {max} = max team size. */
    ariaLabel: "Ton équipe ({count}/{max})",
    title: "Ton équipe",
    heading: "Ton équipe",
    empty: "Aucun Pokémon sélectionné pour l'instant.",
    buildTeam: "Créer une équipe",
    openTeam: "Ouvrir l'équipe",
  },

  teamGenerator: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "Ton équipe est pleine ({count}/{max}). Retires-en d'abord.",
    alreadyInTeam: "Tous les Pokémon tirés sont déjà dans ton équipe.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} ajouté(s) à ton équipe.",
    readyTitle: "Ton équipe aléatoire est prête",
    readyDesc:
      "Tire une équipe filtrée — verrouille tes cartes préférées, relance le reste, puis ajoute-les à ton équipe ou exporte-les vers Showdown.",
    rolling: "Tirage…",
    roll: "Tirer",
    /** Template: {count} = unlocked slots that will be re-rolled. */
    rollCount: "Tirer ({count})",
    allLockedTitle: "Toutes les cartes sont verrouillées — déverrouilles-en une pour tirer",
    filtersAria: "Filtres",
    collapseFilters: "Réduire les filtres",
    guideTitle: "Comment jouer",
    guide1T: "Tire une équipe",
    guide1D: "Un tap tire une nouvelle équipe aléatoire — verrouille les cartes qui te plaisent, puis relance uniquement le reste.",
    guide2T: "Filtre le pool",
    guide2D: "Restreins par génération, région, type ou taille d'équipe avant de tirer.",
    guide3T: "Partage, sauvegarde ou exporte",
    guide3D: "Copie l'équipe en sets Showdown, retourne une carte pour voir son set, partage le lien, ou touche Ajouter à l'équipe pour garder tes préférés.",
    generationLabel: "Génération",
    regionLabel: "Région",
    typeLabel: "Type",
    teamSizeLabel: "Taille d'équipe",
    optionRandom: "Aléatoire",
    addAllToTeam: "Tout ajouter à l'équipe",
  },

  teamCoachUi: {
    /** Template: {max} = most picks the user can keep (count - 1). */
    keepLimit: "Garde au plus {max} choix — laisse au moins 1 emplacement pour le coach.",
    generateFailed: "La génération a échoué — réessaie.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} ajouté(s) à ton équipe.",
    alreadyInTeam: "Ces Pokémon sont déjà dans ton équipe.",
    readyTitle: "Ton équipe équilibrée est prête",
    readyDesc:
      "Verrouille les Pokémon que tu as déjà choisis, complète le reste avec une couverture de types — puis ajoute-les à ton équipe ou exporte-les vers Showdown.",
    rerollUnlocked: "Relancer les déverrouillées",
    generateTeam: "Générer l'équipe",
    viewMyTeam: "Voir mon équipe",
    guideTitle: "Comment jouer",
    guide1T: "Ajoute des choix (facultatif)",
    guide1D: "Cherche ou importe depuis les Favoris / Ton équipe — ou passe et laisse le coach tirer les 6.",
    guide2T: "Génère l'équipe",
    guide2D: "Le Coach d'équipe complète l'équipe avec des types et des rôles équilibrés.",
    guide3T: "Verrouille & relance",
    guide3D: "Verrouille les Pokémon qui te plaisent, relance le reste, puis ajoute tout, partage le lien ou copie les sets vers Showdown.",
    yourTeamHeading: "Ton équipe",
    /** Template: {kept} = locked picks, {count} = target team size. */
    lockedTarget: "{kept} verrouillés · objectif {count}",
    searchPlaceholder: "Chercher un Pokémon (facultatif)…",
    importFavorites: "Importer les favoris",
    importTeam: "Importer l'équipe",
    filtersAria: "Filtres",
    collapseFilters: "Réduire les filtres",
    teamSizeLabel: "Taille d'équipe",
    generationLabel: "Génération",
    regionLabel: "Région",
    typeLabel: "Type",
    optionAny: "Tous",
    allLockedHint: "Tout est verrouillé — déverrouille une carte pour relancer.",
    /** Template: {count} = unlocked slots. */
    rerollHint: "Relance {count} emplacement(s) déverrouillé(s)",
    /** Template: {count} = slots the coach will fill. */
    fillHint: "Remplira {count} emplacement(s) avec une couverture équilibrée",
    fullRollHint: "Tire une équipe complète équilibrée",
    emptyHint:
      "Ajoute un choix ou génère directement une équipe complète — le coach équilibre types et rôles.",
    pickerFavTitle: "Depuis les favoris",
    pickerTeamTitle: "Depuis ton équipe",
    favEmpty: "Pas encore de favoris — touche d'abord le cœur sur n'importe quel générateur.",
    teamEmpty: "Ton équipe est vide — ajoute d'abord des Pokémon sur n'importe quel générateur.",
    addAllToTeam: "Tout ajouter à l'équipe",
  },

  teamChallengeUi: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "Ton équipe est pleine ({count}/{max}). Retires-en d'abord.",
    alreadyInTeam: "Tous ces Pokémon sont déjà dans ton équipe.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} ajouté(s) à ton équipe.",
    idleTitle: "Prêt à lancer un Défi d'équipe ?",
    idleDesc:
      "Clique ci-dessous pour générer une équipe défi aléatoire de 6 Pokémon — puis tire ta propre équipe et compare le total des stats de base.",
    generateChallenge: "Générer le défi",
    howToTitle: "Comment utiliser le Défi d'équipe",
    howTo1T: "1. L'équipe défi.",
    howTo1D:
      "Cette page affiche toujours une équipe de 6 Pokémon avec seed — quiconque ouvre le même lien voit exactement la même composition (c'est ça, le « défi »).",
    howTo2T: "2. Tire la tienne.",
    /** Segment: before the howTo2Em link-styled term. */
    howTo2S1: "Touche",
    howTo2Em: "Tirer mon équipe",
    /** Segment: after the howTo2Em term. */
    howTo2S2:
      "pour générer ta propre équipe de 6 Pokémon — un seul tirage par défi, donc impossible de réessayer jusqu'à la victoire.",
    howTo3T: "3. Compare.",
    howTo3D:
      "Les deux équipes sont affichées avec leur total de stats de base (BST) — le total le plus élevé gagne, et les égalités sont possibles.",
    howTo4T: "4. Partage.",
    howTo4Em: "Défier un ami",
    howTo4D:
      "copie un lien avec la même équipe défi, pour qu'un ami obtienne une composition identique à tenter de battre.",
    howTo5T: "5. Exporte le résultat.",
    howTo5Em1: "Partager la carte de résultat",
    /** Segment: between howTo5Em1 and howTo5Em2. */
    howTo5S: "ou",
    howTo5Em2: "Télécharger la carte",
    howTo5D:
      "crée une image de l'affrontement (avec un QR code) — parfaite à poster dans ta communauté.",
    howTo6T: "6. Lance le tien.",
    howTo6Em: "Lancer ton propre défi",
    howTo6D:
      "te fait devenir l'hôte — tu relances l'équipe défi et la partages avec un ami, au lieu de rejouer contre ta propre équipe.",
    ownerHeading: "Ton équipe défi est prête",
    yoursHeading: "À toi de jouer — essaie de la battre !",
    takeHeading: "Relève le défi — tire ton équipe",
    ownerDesc:
      "Partage le lien — un ami tire sa propre équipe pour tenter de battre celle-ci.",
    yoursDesc:
      "Un seul tirage par défi — lance ton propre défi à partager avec un ami.",
    takeDesc:
      "Tu reçois 6 Pokémon aléatoires — un total de stats de base supérieur à celui de l'équipe défi gagne.",
    rerollChallenge: "Relancer le défi",
    startOwn: "Lancer ton propre défi",
    rollMine: "Tirer mon équipe",
    linkCopied: "Lien copié !",
    challengeFriend: "Défier un ami",
    step1T: "Tire une équipe",
    step1D: "C'est la composition avec laquelle tu lanceras le défi.",
    step2T: "Partage le lien",
    step2D: "Un ami ouvre exactement la même équipe.",
    step3T: "Il tire & compare",
    step3D: "Le BST total décide du gagnant — exporte l'une des deux équipes vers Showdown.",
    ownerTeamLabel: "🫵 Ton équipe défi",
    challengeLabel: "🏳️ Le défi",
    yourTeamLabel: "Ton équipe",
    theirTeamLabel: "Son équipe",
    theChallenge: "Le défi",
    youWin: "Tu gagnes !",
    theirWin: "Son équipe gagne !",
    challengeWins: "Le défi gagne !",
    tie: "Égalité !",
    higherWins: "Le total de stats de base le plus élevé gagne.",
    rendering: "Rendu…",
    shareResult: "Partager le résultat",
    downloadCard: "Télécharger la carte",
    addAllToTeam: "Tout ajouter à l'équipe",
  },

  wheelGenerator: {
    welcome: "Bienvenue, dresseur !",
    intro:
      "Jusqu'à 6 joueurs tournent à tour de rôle — chaque résultat s'empile dans les résultats ci-dessous.",
    roundComplete: "Manche terminée — regarde les résultats ci-dessous !",
    spinWheel: "Faire tourner la roue",
    /** Template: {current} = current player number, {count} = total players. */
    playerTurn: "Joueur {current} sur {count} — fais tourner la roue",
    spinning: "La roue tourne…",
    roundCompleteButton: "Manche terminée",
    spinButton: "Tourne !",
    newRound: "Nouvelle manche",
    playersLabel: "Joueurs",
    /** Template: {current} = spins so far, {count} = total players. */
    roundResults: "Résultats de la manche · {current}/{count}",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    winnerLine: "👑 Le joueur {player} gagne avec {name} ({bst} BST) !",
    /** Template: {n} = player number still to spin. */
    stillToSpin: "Le joueur {n} doit encore tourner",
    /** Template: {n} = player number. */
    playerLabel: "Joueur {n}",
    roundLeader: "Meneur de la manche",
    shareResults: "Partager les résultats",
    addAllToTeam: "Tout ajouter à l'équipe",
    /** Template: {count} = number of Pokémon added to the team. */
    addedNotice: "{count} ajouté(s) à ton équipe.",
    alreadyInTeam: "Tous les Pokémon obtenus sont déjà dans ton équipe.",
    // Shared round result view (result=1 link).
    sharedTitle: "Résultat d'une manche de roue",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    sharedWinner: "Le joueur {player} a gagné avec {name} ({bst} BST) !",
    /** Template: {count} = number of players in the shared round. */
    sharedSubtitle: "Une manche à {count} joueurs partagée sur PokeRoll",
    spinYourOwn: "Fais tourner ta propre roue",
    loadingResults: "Chargement des résultats…",
  },

  fusionGenerator: {
    welcome: "Bienvenue, dresseur !",
    intro: "Fusionne deux Pokémon aléatoires en un nouvel hybride — touche Ajouter à l'équipe pour le garder.",
    yourFusion: "Ta fusion est…",
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
    adventure: {
      metaTitle: "Générateur d'aventure Pokémon",
      /** Template: {diff} = difficulty label (Easy / Normal / Hard / Extreme). */
      metaTitleDiff: "Générateur d'aventure Pokémon — Difficulté {diff}",
      metaDescription:
        "Tire une aventure Pokémon en un tap — dresseur, rival, région, starter, équipe de six, défi et rencontre légendaire. Partage-la ou copie n'importe quelle carte vers Showdown.",
      keywords: [
        "generateur d'aventure pokemon",
        "generateur d'aventure pokemon aleatoire",
        "generateur de parcours pokemon",
      ],
      headerTitle: "Tire ton aventure Pokémon",
      headerDesc:
        "Un tap tire ton dresseur, ta région, ton starter, ton équipe, ton défi et ton objectif — une aventure Pokémon complète à chaque fois.",
      guideTitle: "Comment jouer",
      steps: [
        {
          n: "1",
          t: "Tire ton aventure",
          d: "Un tap tire ton dresseur, ton rival, ta région, ton starter, ton équipe de six, ton défi, ton légendaire et ton objectif.",
        },
        {
          n: "2",
          t: "Choisis une difficulté",
          d: "Facile, Normal, Difficile ou Extrême — plus elle est élevée, plus le voyage est sauvage.",
        },
        {
          n: "3",
          t: "Partage-la",
          d: "Copie le lien avec seed pour que tes amis rejouent exactement la même aventure — ou ajoute l'équipe à la tienne.",
        },
      ],
      faqs: [
        {
          q: "Que contient une aventure ?",
          a: "Un nom de dresseur, un rôle et un style, un rival, une région, ton starter, une équipe de six, un défi, un parcours d'arènes, une rencontre légendaire et un objectif final — le tout tiré en un tap.",
        },
        {
          q: "C'est quoi, le seed dans le lien ?",
          a: "Un code de 8 caractères qui pilote le tirage. Le même seed et la même difficulté produisent toujours exactement la même aventure, donc chaque lien est reproductible.",
        },
        {
          q: "Que change la difficulté ?",
          a: "La difficulté fait varier l'aventure de Facile à Extrême — elle façonne les défis rencontrés, comme les chances de shiny et les règles de rencontre.",
        },
        {
          q: "Puis-je partager mon aventure ?",
          a: "Oui — copie le lien de la page. Il contient le seed et la difficulté, donc tes amis ouvrent le manifeste d'aventure identique.",
        },
      ],
    },

    guess: {
      metaTitle: "Devine le Pokémon — Défi des silhouettes",
      metaDescription:
        "Devine des Pokémon cachés à partir de leurs silhouettes, révèle-les un par un pour vérifier, puis partage le lien avec seed pour défier un ami. Outil gratuit conçu par des fans.",
      keywords: [
        "devine le pokemon",
        "jeu de devinettes pokemon",
        "quiz pokemon",
        "quel est ce pokemon",
      ],
      breadcrumbLabel: "Devine le Pokémon",
      headerTitle: "Devine le Pokémon",
      /** Template: {count} = hidden Pokémon count, clamped to the difficulty cap. */
      headerDesc:
        "Nous avons caché les noms de {count} Pokémon aléatoires. Révèle-les un par un et teste tes connaissances Poké !",
      promoS1: "Tu préfères une seule carte mystère rapide ? ",
      promoLink: "Pokémon mystère →",
      guideTitle: "Comment jouer",
      steps: [
        {
          t: "Étudie les silhouettes",
          d: "La forme, la taille et l'indice de type en Facile sont tes seuls indices — verrouille ta réponse.",
        },
        {
          t: "Retourne pour révéler",
          d: "Clique sur une carte pour la retourner et voir si tu as nommé le bon Pokémon.",
        },
        {
          t: "Partage & compare",
          d: "Le seed dans le lien recrée la même composition — partage-le et fais la course avec un ami.",
        },
      ],
    },

    shiny: {
      metaTitle: "Chasse shiny — Générateur de Pokémon aléatoire | PokeRoll",
      metaDescription:
        "Le générateur de Pokémon shiny avec de vraies chances de chasse : clique sur Rencontre, trouve ton shiny et partage la carte. Le mode Facile garantit un shiny en 204 tirages.",
      keywords: [
        "generateur de pokemon aleatoire shiny",
        "generateur de pokemon aleatoire chances shiny",
        "generateur de pokemon shiny",
      ],
      breadcrumbLabel: "Chasse shiny",
      headerTitle: "Défi chasse shiny",
      headerDescEasy:
        "Mode Facile — chaque clic est un tirage de 1 sur 204 et ton shiny est garanti en 204 rencontres. Partage le lien et compare avec un ami.",
      headerDescDefault:
        "Clique sur Rencontre et regarde combien de temps il faut pour trouver ton shiny — les mêmes chances de 1/4096 que dans les jeux. Partage le lien et compare avec un ami.",
      guideTitle: "Comment jouer",
      steps: [
        {
          t: "Clique sur Rencontre",
          d: "Chaque clic est un tirage — 1 sur 204 en Facile, 1 sur 4096 sinon, et le mode Facile garantit un shiny en 204 clics.",
        },
        {
          t: "Trouve ton shiny",
          d: "Quand il scintille, la carte trouvée débloque Partager et Télécharger.",
        },
        {
          t: "Partage la chasse",
          d: "Partage la carte ou le lien avec seed — tes amis voient ton résultat, puis lancent leur propre chasse.",
        },
      ],
      faqs: [
        {
          q: "Quelles sont les chances de shiny ?",
          a: "Les modes Normal, Difficile et Extrême utilisent le même taux de 1 sur 4096 que les jeux principaux. Le mode Facile le monte à 1 sur 204 par clic.",
        },
        {
          q: "C'est quoi le mode Facile ?",
          a: "Une chasse plus amicale : 1 chance sur 204 par Rencontre, et ton shiny est garanti d'apparaître en 204 tirages — pas de séries sèches interminables.",
        },
        {
          q: "Que se passe-t-il quand je trouve un shiny ?",
          a: "La carte trouvée débloque Partager et Télécharger. Le lien partagé s'ouvre directement sur ton shiny trouvé, et l'image téléchargée porte un QR code que tes amis peuvent scanner pour lancer leur propre chasse.",
        },
      ],
    },

    favorites: {
      metaTitle: "Tes Pokémon favoris | PokeRoll",
      metaDescription:
        "Sauvegarde les Pokémon que tu aimes et construis ta collection de favoris — partage la liste avec un lien, et copie n'importe quelle carte vers Showdown. Outil gratuit conçu par des fans.",
      keywords: [
        "pokemon favoris",
        "liste de pokemon favoris",
        "partager sa collection pokemon",
      ],
      headerTitle: "Pokémon favoris",
      headerDesc:
        "Garde les Pokémon que tu aimes au même endroit — puis partage toute la liste avec un seul lien.",
    },

    contact: {
      metaTitle: "Contacte-nous | PokeRoll",
      metaDescription:
        "Contacte l'équipe PokeRoll — écris à hello@pokeroll.app pour tes retours et rapports de bugs, dis bonjour sur X @JoeyChou2024, ou ouvre une issue sur GitHub. Nous répondons vite.",
      keywords: [
        "contacter pokeroll",
        "retour generateur pokemon",
        "support pokeroll",
      ],
      headerTitle: "Contacte-nous",
      headerDesc:
        "Une question, une idée ou un bug à signaler ? Choisis le canal qui te convient — chaque message arrive directement au créateur.",
      channels: [
        {
          title: "Email",
          handle: "hello@pokeroll.app",
          desc: "Retours, rapports de bugs ou demandes professionnelles — nous lisons tout.",
          action: "Envoyer un email",
        },
        {
          title: "X (Twitter)",
          handle: "@JoeyChou2024",
          desc: "Les réponses les plus rapides. Des nouvelles quotidiennes du projet en build-in-public.",
          action: "Suivre sur X",
        },
        {
          title: "GitHub",
          handle: "ihuajiu/pokeroll.app",
          desc: "Open source. Un bug ? Ouvre une issue et il est suivi.",
          action: "Ouvrir une issue",
        },
      ],
      soloNote:
        "PokeRoll est un projet solo conçu par un fan — non affilié à Nintendo ou The Pokémon Company. Les réponses arrivent en général sous 48 heures.",
      backLink: "← Retour au générateur",
    },

    privacy: {
      metaTitle: "Politique de confidentialité — PokeRoll",
      metaDescription:
        "Politique de confidentialité de PokeRoll — nous utilisons Google Analytics de façon anonyme, stockons favoris et thème uniquement dans le localStorage de ton navigateur, et ne collectons jamais de données personnelles.",
      keywords: [
        "politique de confidentialite pokeroll",
        "confidentialite outil pokemon",
        "confidentialite site de fan",
      ],
      headerTitle: "Politique de confidentialité",
      intro:
        "PokeRoll est une boîte à outils Pokémon gratuite conçue par des fans. Nous limitons la collecte de données au strict minimum — tu peux utiliser chaque outil sans compte, et nous ne demandons jamais d'informations personnelles.",
      analytics: {
        h: "Statistiques :",
        p: "Nous utilisons Google Analytics pour comprendre le trafic global (quelles pages sont visitées, environ combien de visiteurs). Ces données sont agrégées et anonymes — nous ne les utilisons pas pour identifier des utilisateurs individuels.",
      },
      storage: {
        h: "Stockage du navigateur :",
        p: "Tes favoris, tes choix d'équipe et tes préférences de thème sont stockés uniquement dans le localStorage de ton navigateur. Ces données ne quittent jamais ton appareil et ne sont jamais envoyées sur nos serveurs.",
      },
      personal: {
        h: "Données personnelles :",
        p: "Nous ne collectons ni noms, ni adresses email, ni aucune autre donnée personnelle. Il n'y a pas d'inscription et aucun suivi au-delà des statistiques anonymes décrites ci-dessus.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Liens affiliés :",
        s1: "Certains liens d'achat sur ce site sont des liens affiliés — voir les ",
        l1: "mentions légales",
        s2: " pour les détails. Les partenaires affiliés peuvent utiliser leurs propres cookies selon leurs propres politiques de confidentialité.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Contact :",
        s1: "Des questions sur cette politique ? Écris à ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Retour au générateur",
    },

    terms: {
      metaTitle: "Conditions d'utilisation — PokeRoll",
      metaDescription:
        "Conditions d'utilisation de PokeRoll — une boîte à outils Pokémon non officielle conçue par des fans, fournie telle quelle. Pokémon est une marque de Nintendo, Game Freak et The Pokémon Company.",
      keywords: [
        "conditions d'utilisation pokeroll",
        "conditions site de fan pokemon",
        "outil pokemon non officiel",
      ],
      headerTitle: "Conditions d'utilisation",
      intro:
        "PokeRoll est une boîte à outils Pokémon non officielle conçue par des fans. En utilisant ce site, tu acceptes les conditions ci-dessous.",
      unofficial: {
        h: "Projet de fan non officiel :",
        p: "Ce site n'est ni affilié à, ni approuvé par, ni sponsorisé par Nintendo, Game Freak ou The Pokémon Company. Pokémon et tous les noms, personnages et artworks associés sont des marques de Nintendo, Game Freak et The Pokémon Company, et ne sont utilisés ici qu'à des fins d'information et de divertissement.",
      },
      asIs: {
        h: "Fourni tel quel :",
        p: "Les outils et contenus de ce site sont fournis « tels quels », sans garantie d'aucune sorte. Les résultats aléatoires sont pour le fun ; nous ne garantissons ni la disponibilité, ni l'exactitude, ni l'adéquation à un usage particulier.",
      },
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        h: "Sources de données :",
        s1: "Les données Pokémon (noms, types, stats, talents, sprites) proviennent de la ",
        l1: "PokéAPI",
        s2: " publique. Les sprites sont © leurs détenteurs de droits respectifs.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Liens affiliés :",
        s1: "En tant que Partenaire Amazon, nous percevons une commission sur les achats éligibles effectués via les liens d'achat de ce site. Cela n'affecte pas les outils, qui restent gratuits. Voir les ",
        l1: "mentions légales",
        s2: " pour la divulgation complète.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Contact :",
        s1: "Des questions sur ces conditions ? Écris à ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Retour au générateur",
    },

    disclaimer: {
      metaTitle: "Mentions légales & notice d'affiliation — Outil Pokémon conçu par des fans",
      metaDescription:
        "PokeRoll est un site non officiel conçu par des fans et n'est pas affilié à Nintendo, Game Freak ou The Pokémon Company. Lis les mentions légales et la divulgation d'affiliation.",
      keywords: [
        "mentions legales site de fan pokemon",
        "divulgation d'affiliation pokemon",
        "site pokemon non officiel",
      ],
      headerTitle: "Mentions légales",
      intro:
        "Ce site est un outil non officiel conçu par des fans. Il n'est ni affilié à, ni approuvé par, ni sponsorisé par Nintendo, Game Freak ou The Pokémon Company. Les noms, personnages et artworks Pokémon sont des marques de leurs propriétaires respectifs et ne sont utilisés ici qu'à des fins d'information et de divertissement.",
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        s1: "Toutes les données Pokémon (noms, types, talents, stats, sprites) proviennent de la ",
        l1: "PokéAPI",
        s2: " publique. Les sprites sont © leurs détenteurs de droits respectifs.",
      },
      affiliate: {
        h: "Divulgation d'affiliation :",
        p: "En tant que Partenaire Amazon, nous percevons une commission sur les achats éligibles effectués via les liens d'achat de ce site. Cela n'affecte pas l'outil, qui reste gratuit.",
      },
      backLink: "← Retour au générateur",
    },

    randomPokemon: {
      metaTitle: "Pokémon aléatoire — Tires-en un maintenant | PokeRoll",
      metaDescription:
        "Obtiens un Pokémon aléatoire en un tap — chaque tirage inclut nom, type, talent, stats de base et artwork officiel, prêt à copier vers Showdown. Outil gratuit conçu par des fans.",
      keywords: [
        "generateur de pokemon aleatoire",
        "générateur de pokémon aléatoire",
        "pokemon aleatoire",
        "generer un pokemon aleatoire",
        "obtenir un pokemon aleatoire",
      ],
    },
    randomPokemonPicker: {
      metaTitle: "Sélecteur de Pokémon aléatoire | PokeRoll",
      metaDescription:
        "Choisis un Pokémon aléatoire en un tap — chaque tirage inclut nom, type, talent, stats de base et artwork officiel, prêt à copier vers Showdown. Outil gratuit conçu par des fans.",
      keywords: [
        "generateur de pokemon aleatoire",
        "générateur de pokémon aléatoire",
        "pokemon aleatoire",
        "generer un pokemon aleatoire",
        "obtenir un pokemon aleatoire",
      ],
    },
    pokemonRandomizer: {
      metaTitle: "Randomiseur de Pokémon | PokeRoll",
      metaDescription:
        "Obtiens un Pokémon randomisé en un tap — chaque tirage inclut nom, type, talent, stats de base et artwork officiel, prêt à copier vers Showdown. Outil gratuit conçu par des fans.",
      keywords: [
        "generateur de pokemon aleatoire",
        "générateur de pokémon aléatoire",
        "pokemon aleatoire",
        "generer un pokemon aleatoire",
        "obtenir un pokemon aleatoire",
      ],
    },

    team: {
      metaTitle: "Ton équipe Pokémon | PokeRoll",
      metaDescription:
        "Ton équipe sauvegardée de Pokémon générés aléatoirement — partage le lien avec tes amis, ou copie chaque set vers Showdown pour tes combats. Outil gratuit conçu par des fans.",
      keywords: [
        "createur d'equipe pokemon",
        "createur d'equipe pokemon aleatoire",
        "generateur d'equipe pokemon aleatoire",
        "planificateur d'equipe pokemon",
      ],
      headerTitle: "Ton équipe Pokémon",
      headerDesc:
        "Ton équipe sauvegardée — ajoute des Pokémon depuis n'importe quel générateur, puis compose et partage.",
      faqs: [
        {
          q: "Comment utiliser cette équipe dans Pokémon Showdown ?",
          a: "Touchez Copy Sets sous l'équipe (le bouton avec le badge Showdown) pour copier l'équipe au format texte de Showdown. Ouvrez ensuite play.pokemonshowdown.com/teambuilder, choisissez Import/Export et collez le texte — chaque set se charge avec ses capacités, talent, objet, nature et EVs, prêt à combattre ou à ajuster.",
        },
      ],
    },

    teamRandom: {
      metaTitle: "Générateur d'équipe Pokémon aléatoire | PokeRoll",
      metaDescription:
        "Génère une équipe aléatoire de 6 Pokémon en un tap — verrouille tes préférés, relance le reste, puis exporte chaque set vers Showdown ou partage le lien. Outil gratuit conçu par des fans.",
      keywords: [
        "generateur d'equipe pokemon aleatoire",
        "generateur d'equipe pokemon",
        "equipe pokemon aleatoire",
        "creer une equipe pokemon aleatoire",
      ],
      headerTitle: "Équipe Pokémon aléatoire",
      headerDesc:
        "Tire une équipe filtrée de Pokémon aléatoires — puis ajoute tes préférés à Ton équipe.",
      faqs: [
        {
          q: "Comment les équipes sont-elles générées ?",
          a: "Chaque tirage pioche six Pokémon aléatoires d'un coup. Ouvre les filtres pour restreindre le pool par génération, région, type ou catégorie (comme Légendaire ou Starter) avant de tirer.",
        },
        {
          q: "Pourquoi ai-je obtenu moins de six Pokémon ?",
          a: "Des filtres très étroits peuvent laisser un pool correspondant de moins de six. Élargis l'un des filtres — ou remets-en un sur Aléatoire — et relance.",
        },
        {
          q: "Puis-je sauvegarder ou partager une équipe ?",
          a: "Partage le lien de la page — l'URL contient l'équipe tirée, donc tes amis qui l'ouvrent voient les six mêmes. Touche Ajouter à l'équipe sur n'importe quelle carte pour garder tes préférés dans Ton équipe sur tout le site.",
        },
        {
          q: "Comment utiliser cette équipe dans Pokémon Showdown ?",
          a: "Touchez Copy Sets sous l'équipe (le bouton avec le badge Showdown) pour copier l'équipe au format texte de Showdown. Ouvrez ensuite play.pokemonshowdown.com/teambuilder, choisissez Import/Export et collez le texte — chaque set se charge avec ses capacités, talent, objet, nature et EVs, prêt à combattre ou à ajuster.",
        },
      ],
    },

    teamCoach: {
      metaTitle: "Coach d'équipe Pokémon — Complète le reste de ton équipe",
      metaDescription:
        "Verrouille les Pokémon que tu as déjà choisis et laisse le Coach d'équipe compléter le reste avec une couverture de types et des rôles équilibrés — puis copie l'équipe vers Showdown. Outil gratuit conçu par des fans.",
      keywords: [
        "createur d'equipe pokemon",
        "completer son equipe pokemon",
        "coach d'equipe pokemon",
        "createur d'equipe pokemon automatique",
      ],
      breadcrumbLabel: "Coach d'équipe",
      headerTitle: "Coach d'équipe Pokémon",
      headerDesc:
        "Verrouille les Pokémon que tu as déjà choisis, complète le reste avec une couverture de types et des rôles équilibrés.",
      faqs: [
        {
          q: "Comment utiliser cette équipe dans Pokémon Showdown ?",
          a: "Touchez Copy Sets sous l'équipe (le bouton avec le badge Showdown) pour copier l'équipe au format texte de Showdown. Ouvrez ensuite play.pokemonshowdown.com/teambuilder, choisissez Import/Export et collez le texte — chaque set se charge avec ses capacités, talent, objet, nature et EVs, prêt à combattre ou à ajuster.",
        },
      ],
    },

    teamChallenge: {
      metaTitle: "Défi d'équipe Pokémon — Tire une équipe, défie un ami",
      metaDescription:
        "Tire une équipe de 6 Pokémon avec seed, partage le lien et défie un ami — le BST total désigne le gagnant, puis exporte l'une des équipes vers Showdown. Outil gratuit conçu par des fans.",
      keywords: [
        "defi d'equipe pokemon",
        "generateur d'equipe pokemon aleatoire",
        "equipe pokemon aleatoire",
        "generateur d'equipe pokemon",
      ],
      breadcrumbLabel: "Défi d'équipe",
      headerTitle: "Défi d'équipe Pokémon",
      headerDesc:
        "Tire une équipe défi de 6 Pokémon, partage le lien, et laisse le BST total désigner un gagnant face à tes amis.",
      faqs: [
        {
          q: "Comment utiliser cette équipe dans Pokémon Showdown ?",
          a: "Touchez Copy Sets sous l'équipe (le bouton avec le badge Showdown) pour copier l'équipe au format texte de Showdown. Ouvrez ensuite play.pokemonshowdown.com/teambuilder, choisissez Import/Export et collez le texte — chaque set se charge avec ses capacités, talent, objet, nature et EVs, prêt à combattre ou à ajuster.",
        },
      ],
    },

    wheel: {
      metaTitle: "Roue de générateur de Pokémon aléatoire | PokeRoll",
      metaDescription:
        "Fais tourner la roue pour un Pokémon aléatoire — un sélecteur fun basé sur le hasard à travers tout le Pokédex. Regarde-la s'arrêter, puis copie ton résultat vers Showdown. Outil gratuit conçu par des fans.",
      keywords: [
        "roue generateur de pokemon aleatoire",
        "generateur de roue pokemon",
        "roue pokemon aleatoire",
        "roue de selection pokemon",
      ],
      breadcrumbLabel: "Faire tourner la roue",
      headerTitle: "Générateur de roue Pokémon",
      headerDesc:
        "Fais tourner la roue pour un Pokémon aléatoire — un sélecteur fun basé sur le hasard à travers le Pokédex — copie ton résultat vers Showdown.",
      guideTitle: "Comment jouer",
      steps: [
        {
          n: "1",
          t: "Choisis tes joueurs",
          d: "Choisis 2 à 6 joueurs — chacun fait tourner la roue à son tour.",
        },
        {
          n: "2",
          t: "Tourne & atterris",
          d: "Chaque tour s'arrête sur un Pokémon et s'empile dans les résultats de la manche ci-dessous.",
        },
        {
          n: "3",
          t: "Bats-toi & partage",
          d: "Le BST le plus élevé gagne la manche — partage le résultat pour défier tes amis.",
        },
      ],
    },

    fusion: {
      metaTitle: "Générateur de fusions Pokémon | PokeRoll",
      metaDescription:
        "Fusionne deux Pokémon aléatoires en un hybride inédit avec nom, type et stats combinés — relance pour une paire plus étrange, puis copie la fusion vers Showdown.",
      keywords: [
        "generateur de fusions pokemon",
        "generateur de fusion pokemon aleatoire",
        "createur de fusions pokemon",
        "createur de fusion pokemon",
      ],
      breadcrumbLabel: "Outil de fusion",
      headerTitle: "Générateur de fusions Pokémon",
      headerDesc:
        "Fusionne deux Pokémon aléatoires en un hybride inédit avec nom, type et stats combinés — puis copie la fusion vers Showdown.",
      faqs: [
        {
          q: "Comment fonctionne le générateur de fusions ?",
          a: "Chaque tirage choisit deux Pokémon aléatoires et les fusionne en un hybride — un nom mélangé plus des types et des stats combinés des deux parents.",
        },
        {
          q: "Puis-je partager ou garder une fusion ?",
          a: "Oui. Le bouton Partager copie un lien qui reproduit exactement la même fusion, et Télécharger enregistre la carte de fusion en image.",
        },
        {
          q: "Est-ce un outil Pokémon officiel ?",
          a: "Non — PokeRoll est un projet conçu par des fans. Les données Pokémon proviennent de PokéAPI ; les résultats de fusion sont générés pour le fun et ne sont pas des designs officiels.",
        },
      ],
    },
  },
};
