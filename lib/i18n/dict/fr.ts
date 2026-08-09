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
      guide: {
        introTitle: "Pourquoi tirer un Pokémon aléatoire ?",
        intro:
          "Un tirage aléatoire, c'est le moyen le plus rapide de sortir du raisonnement « toujours les six mêmes favoris ». Un tap te donne une espèce que tu n'as pas choisie — avec ses stats, son type et son artwork — et te voilà en train de théoriser un moveset pour un Pokémon que tu n'aurais jamais choisi toi-même. Utilise-le comme pick de draft, prompt de dessin, table de rencontre Nuzlocke, ou premier slot d'une équipe toute neuve.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Starter de défi",
            d: "Tire une fois et verrouille le résultat comme starter de ta prochaine aventure — quel qu'il soit. Construis ensuite tout le run autour.",
          },
          {
            t: "Draft & duel",
            d: "Tirez chacun votre tour avec un ami — chacun garde ce qu'il tire, six tirages chacun, puis affrontez vos deux équipes sur Showdown.",
          },
          {
            t: "Prompt d'art & d'écriture",
            d: "Utilise le tirage comme brief créatif : dessine le Pokémon dans ton style, ou écris le dresseur qui le porterait.",
          },
          {
            t: "Graine d'équipe",
            d: "Le tirage te plaît ? Touche Add to Team et retente — six taps plus tard, tu as une équipe qui s'est choisie toute seule.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "L'aléatoire fonctionne mieux avec une règle attachée. Seulement Kanto ? Ouvre les filtres et verrouille la génération. Pas de légendaires ? Exclus d'abord la catégorie. Un seul type pour un run à thème ? Verrouille-le avant le premier tap — les filtres sont le livre de règles, le tirage est le dé.",
          "Tu joues à plusieurs ? Mettez-vous d'accord sur les règles à voix haute avant que quiconque ne tire : combien de rerolls chaque joueur reçoit (un est une bonne base), si les formes alternatives comptent, et ce qui se passe en cas de doublon.",
          "Le fun, c'est de s'engager sur ce que tu obtiens — un tirage qu'on peut annuler à l'infini, c'est juste du browsing avec des étapes en plus.",
        ],
        sampleTitle: "Un tirage d'exemple",
        sample:
          "Imaginons que le dé te donne Aromatisse — un pur Fée avec 101 PV et 29 Vitesse que tu ne mettrais jamais dans une équipe sérieuse. Et là, la question intéressante : pilier Trick Room ? Support Aromathérapie ? Te voilà en train de lire une page de moveset pour un Pokémon que tu as ignoré pendant dix ans. C'est tout l'intérêt du tirage.",
        linksTitle: "Envie d'un pool plus restreint ?",
        linksTextBefore: "Tire une seule tranche du Pokédex à la place — essaie le",
        links: [
          { label: "générateur Gen 1", href: "/gen/1" },
          { label: "générateur de type Dragon", href: "/type/dragon" },
          { label: "générateur de Légendaires", href: "/legendary" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— même dé, mare plus petite.",
      },
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
      guide: {
        introTitle: "Pourquoi tirer des Pokémon de type {type} ?",
        intro:
          "Le pool de type {type} réunit tout, des classiques du premier jour aux toutes dernières sorties — et cette page t'en donne un au hasard, stats, talent et artwork compris. Un tap, un {type}, zéro scrolling dans le dex.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Run mono-{type}",
            d: "Tires-en un et il ancre ton défi mono-{type} — le premier slot est décidé, plus que cinq.",
          },
          {
            t: "Étude de type",
            d: "Tire à travers le pool et note les patterns de stats — les types {type} partagent une philosophie de design qui vaut la peine d'être apprise.",
          },
          {
            t: "Contrainte de draft",
            d: "Tout le monde drafte uniquement dans le pool {type} — même type, des équipes follement différentes.",
          },
          {
            t: "Prompt de dessin",
            d: "Dessine le tirage {type} du jour — les sketchs quotidiens sont plus faciles quand les dés choisissent le sujet.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Un run mono-{type} vit et meurt par ses faiblesses partagées — vérifie ce que {type} résiste et craint avant de t'engager.",
          "« Le premier tirage compte » est la règle la plus propre ; un re-tirage annoncé par session, c'est la version indulgente. Choisis avant de taper.",
          "Les double types comptent : s'il porte {type}, il est dans le pool — les hybrides sont ce qui fait survivre les mono-runs.",
        ],
        sampleTitle: "Un tirage d'exemple",
        sample:
          "Un tap peut te donner un vétéran {type} que tu as entraîné une douzaine de fois — ou un {type} que tu n'as littéralement jamais utilisé, et c'est lui l'intéressant. Le pool décide lequel.",
        linksTitle: "Plus de dés, plus de thèmes ?",
        linksTextBefore: "Essaie le",
        links: [
          { label: "générateur de types", href: "/type" },
          { label: "générateur d'équipe aléatoire", href: "/team/random" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— puis reviens quand le thème réclame du {type}.",
      },
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
      guide: {
        introTitle: "Pourquoi tirer des Pokémon de la {genLabel} ?",
        intro:
          "{genLabel}, c'est une époque à part — son propre dex, son propre langage de design, sa propre nostalgie. Cette page ne tire que dans la {genLabel} : chaque tap est des retrouvailles avec cette génération, de ses mascottes à ses Pokémon de route les plus oubliés.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Run nostalgie",
            d: "Tires-en un et il ancre un replay 100 % {genLabel} — les dés choisissent, tu construis le run autour.",
          },
          {
            t: "Quiz de dex",
            d: "Tire et nomme le typing et la lignée d'évolutions du Pokémon de mémoire avant de regarder la carte.",
          },
          {
            t: "Draft mono-gen",
            d: "Chaque joueur drafte uniquement dans la {genLabel} — une génération, six picks, et des débats sans fin sur son meta.",
          },
          {
            t: "Débat d'époque",
            d: "Tires-en cinq et note-les — et si la {genLabel} était secrètement la meilleure génération ? Les dés fournissent les preuves.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Engage-toi sur l'époque : dans un run 100 % {genLabel}, chaque slot doit venir de ce dex — c'est là que vit le défi.",
          "Le premier tirage compte ; le charme d'une seule génération, c'est de prendre ses weirdos avec ses stars.",
          "Les formes des générations ultérieures ne comptent pas, sauf si vos règles maison le disent — décidez avant le run, pas après le tirage.",
        ],
        sampleTitle: "Un tirage d'exemple",
        sample:
          "Un tap et tu dévisages un habitué de la {genLabel} que tu avais complètement oublié — son cri, sa route, le PNJ qui l'alignait contre toi. Les générations ne sont pas que des listes ; ce sont des souvenirs avec des stats.",
        linksTitle: "D'autres retours en arrière ?",
        linksTextBefore: "Explore",
        links: [
          { label: "la région de {region}", href: "/by/{regionSlug}" },
          { label: "le générateur de types", href: "/type" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— ou pars sur du totalement aléatoire à travers les neuf générations.",
      },
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
      guide: {
        introTitle: "Pourquoi tirer des Pokémon de {region} ?",
        intro:
          "{region}, c'est plus qu'une carte — c'est le dex de Pokémon {game}, avec ses propres starters, ses légendes et ses habitués des routes. Cette page ne tire que dans {region} : un tap, un local, tout droit sorti des jeux qui l'ont fait exister.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Run retour aux sources",
            d: "Tires-en un et il ancre un replay 100 % {region} — construis l'équipe que le dex de la région permet.",
          },
          {
            t: "Quiz du dex local",
            d: "Tire et place le Pokémon sur la carte : quelle route, quelle arène, quelle version ?",
          },
          {
            t: "Draft régional",
            d: "Chaque joueur en drafte six, uniquement de {region} — une région, des équipes très différentes.",
          },
          {
            t: "Débat de versions",
            d: "Tires-en cinq et juge-les — est-ce que {region} tient encore la distance, ou c'est la nostalgie qui parle ?",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Les runs régionaux marchent parce que le pool est fermé : si ce n'est pas dans le dex de {region}, ce n'est pas dans l'équipe.",
          "Le premier tirage compte — la région donne, l'équipe s'adapte. Un re-tirage annoncé par session si ton groupe est indulgent.",
          "Décidez tôt si les ajouts post-game et DLC comptent comme des locaux de {region} — les règles maison évitent les disputes de route.",
        ],
        sampleTitle: "Un tirage d'exemple",
        sample:
          "Un tap et voilà une tête de Pokémon {game} à laquelle tu n'avais pas pensé depuis des années — le thème de la route se met aussitôt à jouer dans ta tête. Les régions ne sont pas des pools ; ce sont des lieux.",
        linksTitle: "Envie de continuer à explorer ?",
        linksTextBefore: "Essaie le",
        links: [
          { label: "Pokédex de la {genLabel}", href: "/gen/{gen}" },
          { label: "générateur de types", href: "/type" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— ou pars sur du totalement aléatoire à travers toutes les régions.",
      },
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
        guide: {
          introTitle: "Pourquoi tirer un type aléatoire ?",
          intro:
            "Dix-huit types, un tap. Un type aléatoire, c'est le moyen le plus rapide de choisir un thème : mono-runs, contraintes de draft, catégories de quiz — les dés choisissent, tu t'engages.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Décideur de mono-type",
              d: "Tire une fois et voilà le type de ton prochain mono-run — pas de lobbying pour un re-tirage parce que tu voulais Dragon.",
            },
            {
              t: "Contrainte de draft",
              d: "Chaque joueur tire un type avant de drafter — toute ton équipe doit le porter.",
            },
            {
              t: "Défi à thème",
              d: "Tire un type, puis construis une équipe qui couvre ses faiblesses sans les partager.",
            },
            {
              t: "Apprends le tableau",
              d: "Quizze-toi sur les résistances du type tiré avant de vérifier — le tableau rentre plus vite quand c'est un jeu.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Le tirage de type ne marche que comme engagement : décide d'avance que le premier résultat compte. Un type qu'on peut re-tirer n'est qu'une suggestion.",
            "Vous jouez à plusieurs ? Tout le monde tire ouvertement, les doublons ont droit à un re-tirage, et c'est tout — la contrainte, c'est le fun.",
            "Associe le tirage aux filtres des autres générateurs : verrouille le type là-bas et les dés restent dans ton thème toute la session.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Les dés disent Roche. Soudain tu planifies autour d'une faiblesse partagée à Eau et Sol, tu lorgnes les utilisateurs de Sand Stream, et tu te rappelles que Roche a quatre résistances bien à lui. Un tap, et le run de ce soir a une personnalité.",
          linksTitle: "Envie d'aller plus loin ?",
          linksTextBefore: "Explore un type précis comme",
          links: [
            { label: "Dragon", href: "/type/dragon" },
            { label: "Feu", href: "/type/fire" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— ou emmène le résultat directement dans le générateur d'équipe.",
        },
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
        guide: {
          introTitle: "Pourquoi tirer un talent aléatoire ?",
          intro:
            "Les talents décident de la façon dont un Pokémon joue vraiment — et la plupart d'entre nous ne connaissent que la vingtaine de talents célèbres. Tires-en un au hasard, rencontre un Pokémon qui le possède et découvre ce que cache la longue traîne de la liste des talents.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Prompt de construction",
              d: "Tire un talent et esquisse un set qui l'exploite à fond — plus le talent est bizarre, meilleur est l'exercice.",
            },
            {
              t: "Contrainte de draft",
              d: "Chaque joueur tire un talent et doit drafter un Pokémon qui le possède — rareté instantanée, drama instantané.",
            },
            {
              t: "Apprends la liste",
              d: "Lis l'effet du talent tiré avant de jeter un œil — un quiz discret qui paie en combat.",
            },
            {
              t: "Colle d'équipe",
              d: "Il te manque quelque chose dans ton équipe ? Tire des talents jusqu'à ce que l'un résolve ton problème, puis note quels Pokémon le portent.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Décide si les talents cachés comptent avant de commencer — ce sont les tirages les plus rares et les disputes les plus bruyantes.",
            "Un tirage, un engagement, c'est le format sain : construis autour de ce que tu obtiens plutôt que de pêcher les bons.",
            "Si un talent est verrouillé par génération, traite-le comme une leçon d'histoire et tire le contexte, pas seulement l'effet.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Tu tires Lévitation et la carte montre un Pokémon que tu as croisé cent fois — sauf que cette fois, c'est le pivot immunisé au Sol dont ton équipe avait besoin. C'est ça, la loterie des talents : la réponse a toujours été là, tu ne t'étais juste jamais posé la question.",
          linksTitle: "Envie de continuer à construire ?",
          linksTextBefore: "Associe-le au",
          links: [
            { label: "générateur de capacités", href: "/move" },
            { label: "générateur de stats", href: "/bst" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— talent, capacités et stats sont les trois faces du même set.",
        },
      },
      move: {
        title: "Générateur aléatoire de capacités Pokémon | PokeRoll",
        description:
          "Découvre une capacité Pokémon aléatoire et un Pokémon qui peut l'apprendre — vérifie sa puissance, sa précision et son type, puis copie le set dans Showdown. Outil conçu par des fans.",
        keywords: [
          "generateur de capacites pokemon aleatoire",
          "generateur de capacites pokemon",
        ],
        guide: {
          introTitle: "Pourquoi tirer une capacité aléatoire ?",
          intro:
            "Des centaines de capacités, et ce sont les plus bizarres qui gagnent les combats. Tire une capacité au hasard, découvre un Pokémon qui l'apprend et pose la seule question qui compte : est-ce que ça peut vraiment marcher ?",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Roulette de moveset",
              d: "Tire quatre capacités et compose un set avec — Splash compris. Les meilleurs joueurs rendent tout jouable.",
            },
            {
              t: "Contrainte de draft",
              d: "Tire une capacité, puis drafte une équipe où quelqu'un doit la porter — les capacités de soutien ont enfin leur moment.",
            },
            {
              t: "Apprends la bibliothèque",
              d: "Puissance, précision, effet — lis la capacité tirée avant de vérifier. La connaissance des capacités, c'est de l'Elo gratuit.",
            },
            {
              t: "Prompt de combat",
              d: "Tire une capacité et imagine la situation où elle te fait gagner le match — du theorycraft avec une graine.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Pour la roulette de moveset, zéro échange : quatre tirages, un set, et les capacités de statut comptent. La contrainte, c'est tout le jeu.",
            "Mettez-vous d'accord avant que quiconque ne tire : les Capacités Z, les Capacités Max et les capacités signature sont-elles dans le pool ? Les règles maison évitent les bouderies.",
            "Une capacité ne vaut que par son utilisateur : juge le duo, pas la capacité toute seule.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Les dés te donnent Éructation — une capacité Poison à 120 de puissance qui ne marche qu'après avoir mangé une Baie. Inutile ? Et puis tu remarques qui l'apprend, et voilà qu'un set au jus de Baie s'installe gratuitement dans ta tête pour la semaine.",
          linksTitle: "Envie de finir le set ?",
          linksTextBefore: "Complète-le avec le",
          links: [
            { label: "générateur de talents", href: "/ability" },
            { label: "générateur de stats", href: "/bst" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— puis emmène le tout sur Showdown.",
        },
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
        guide: {
          introTitle: "Pourquoi tirer un BST aléatoire ?",
          intro:
            "Le total de stats de base, c'est le raccourci que tout le monde utilise et sur lequel personne n'est d'accord. Tire un nombre, découvre le Pokémon qui se cache derrière et apprends à quoi ressemble vraiment un 480 ou un 600 dans la nature.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Devine le Pokémon",
              d: "Regarde le nombre d'abord et cite tous les Pokémon que tu penses voir à ce BST — puis vérifie à quel point tu t'es trompé.",
            },
            {
              t: "Draft par les chiffres",
              d: "Chaque joueur tire un BST et doit drafter un Pokémon avec exactement ce total — la rareté fait des stars inattendues.",
            },
            {
              t: "Défi de plafond",
              d: "Monte une équipe où chaque membre reste sous un plafond tiré — 500 max, et le team building devient du vrai design.",
            },
            {
              t: "Quiz de stats",
              d: "Devine comment les six stats sont réparties avant la révélation — les min-maxers et les murs se lisent très différemment.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Un BST est un budget, pas un classement : un 480 bien dépensé bat un 540 paresseux, alors juge la répartition avant le total.",
            "Pour les défis de plafond, fixe le plafond avant de tirer l'équipe — tirer d'abord et négocier ensuite, c'est le meilleur moyen de rendre les plafonds inutiles.",
            "Les Méga-Évolutions, les Primaux et les formes alternatives ont leurs propres totaux — décide quelles formes comptent avant le début du draft.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Le nombre est 600. Un pseudo-légendaire ? En fait, c'est un fabuleux cette fois — et la répartition est parfaitement équilibrée sur les six stats, ce qui ne te dit absolument rien sur sa façon de combattre. Les nombres ouvrent la conversation ; ils ne la concluent jamais.",
          linksTitle: "Encore des jeux de chiffres ?",
          linksTextBefore: "Essaie le",
          links: [
            { label: "générateur de numéros Pokédex", href: "/number" },
            { label: "générateur de talents", href: "/ability" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— ou chasse les gros totaux sur la page Légendaires.",
        },
      },
      number: {
        title: "Générateur aléatoire de numéros Pokémon | PokeRoll",
        description:
          "Tire un numéro de Pokédex aléatoire entre 1 et 1025 et découvre à quel Pokémon il correspond — consulte sa carte complète, puis copie-le dans Showdown. Outil gratuit conçu par des fans.",
        keywords: [
          "generateur de numeros pokemon",
          "generateur de numero pokemon aleatoire",
        ],
        guide: {
          introTitle: "Pourquoi tirer un numéro Pokédex aléatoire ?",
          intro:
            "Un nombre entre 1 et 1025, un Pokémon derrière. Le tirage de numéro de dex, c'est la loterie la plus pure du site — pas de filtres, pas de thèmes, juste toute l'histoire de la franchise dans un seul tirage.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Roulette dex",
              d: "Tire un nombre, et c'est ta prochaine rencontre, ton coéquipier ou ton sujet de dessin — quoi que dise le dex.",
            },
            {
              t: "Devine avant la révélation",
              d: "Annonce le Pokémon à partir du seul numéro avant de regarder — connaître l'ordre du dex, c'est un vrai talent.",
            },
            {
              t: "Sélecteur Nuzlocke",
              d: "Utilise le numéro tiré modulo le dex local pour choisir tes rencontres équitablement — les dés ne se laissent pas soudoyer.",
            },
            {
              t: "Jeu de soirée",
              d: "Le plus grand nombre gagne le round — le jeu le plus simple du site, les disputes les plus bruyantes.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Décide ce que le nombre signifie avant de tirer : dex national, ou mappé sur le dex régional d'un jeu ? Des jeux différents, des destins différents.",
            "Un tirage par décision, c'est le format honnête — re-tirer jusqu'à tomber sur un favori, c'est juste choisir avec des étapes en plus.",
            "Les formes partagent les numéros de dex, alors décidez comment les gérer avant le tirage, pas après.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "#387. Quelqu'un à la table crie « Tortipouss » avant même que la carte ne charge — et pour une fois, il a raison. Un run Sinnoh, fraîchement destiné. Le dex donne.",
          linksTitle: "Encore des jeux de chiffres ?",
          linksTextBefore: "Essaie le",
          links: [
            { label: "générateur de BST", href: "/bst" },
            { label: "générateur de surnoms", href: "/nickname" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— chiffres, noms et stats racontent chacun une histoire différente.",
        },
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
        guide: {
          introTitle: "Pourquoi tirer un starter aléatoire ?",
          intro:
            "Le premier compagnon donne le ton à toute une partie — et le choisir soi-même, c'est quarante minutes de topics de forum. Laisse les dés choisir parmi les starters de chaque génération, de Kanto à Paldea, et lance le run, c'est tout.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Décideur de starter",
              d: "Tire une fois, et c'est ton partenaire pour le prochain run — la décision est prise, l'aventure peut commencer.",
            },
            {
              t: "Ouverture Nuzlocke",
              d: "Laisse le tirage choisir le starter, puis la chance des routes choisit tout le reste — engagement total, zéro parti pris.",
            },
            {
              t: "Arbitre de débat",
              d: "Feu, Eau ou Plante cette fois ? Les dés n'ont ni nostalgie ni favoris — l'arbitre parfait.",
            },
            {
              t: "Thème d'équipe",
              d: "Tire un starter et construis une équipe qui soutient son évolution finale — une structure instantanée pour une équipe casual.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Le pacte du starter est sacré : le premier tirage tient. Opposer son veto parce que tu voulais la grenouille, c'est rater tout l'intérêt.",
            "Décide d'abord du pool — les neuf générations, ou seulement les jeux que tu possèdes ? Un pool plus petit reste un tirage équitable.",
            "Pour les runs en groupe, tout le monde tire à découvert et les échanges sont autorisés une seule fois — c'est tout le meta-jeu.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Les dés disent Ouisticram, et ton run Sinnoh a soudain une personnalité : rapide, bruyant et légèrement en feu. Tu ne l'aurais jamais choisi à la place de Tiplouf — et c'est exactement pour ça que cette partie restera mémorable.",
          linksTitle: "Tu veux continuer le run ?",
          linksTextBefore: "Tire le reste de l'équipe sur le",
          links: [
            { label: "générateur d'équipe aléatoire", href: "/team/random" },
            { label: "générateur de types", href: "/type" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— le starter a choisi, maintenant l'équipe a besoin de six.",
        },
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
        guide: {
          introTitle: "Pourquoi deviner un Pokémon mystère ?",
          intro:
            "Une carte, des stats complètes, un artwork officiel — et aucun nom. Le générateur sans noms, c'est un quiz de poche : tout ce qu'il te faut pour identifier le Pokémon est sur la carte, sauf la réponse.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Quiz solo",
              d: "Devine à partir de l'artwork et des stats, puis retourne pour vérifier — suis ta série sur dix cartes.",
            },
            {
              t: "Ambiance de soirée",
              d: "Montre la carte en visio, le premier qui crie la bonne réponse marque le point — la vitesse compte plus que la précision.",
            },
            {
              t: "Échauffement de stream",
              d: "Enchaîne cinq cartes mystères avant le vrai contenu — le chat s'enflamme immédiatement, garanti.",
            },
            {
              t: "Entraînement silhouettes",
              d: "Sers-t'en comme échauffement pour le défi de devinettes avec seed, où le quiz se corse et les scores se partagent.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Interdit de survoler le bouton de retournement : une réponse engagée par carte, à voix haute si d'autres jouent. La confiance, c'est le jeu.",
            "Les stats sont un indice légitime — un BST de 600 réduit vite le champ, et le savoir, c'est de la compétence, pas de la triche.",
            "Tu perds le compte ? Dix cartes, un point chacune, pas de négatif — le format le plus propre.",
          ],
          sampleTitle: "Une carte d'exemple",
          sample:
            "Des joues jaunes, du type Électrik, des stats minuscules — tu t'engages à pleine voix : Pikachu. Le retournement dit Pachirisu, et toute la pièce débat désormais des rongeurs régionaux. Encore dix cartes, s'il te plaît.",
          linksTitle: "Envie d'un quiz plus dur ?",
          linksTextBefore: "Passe au",
          links: [
            { label: "défi des silhouettes", href: "/challenge/guess" },
            { label: "générateur de surnoms", href: "/nickname" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— mêmes connaissances, enjeux plus hauts.",
        },
      },
      cute: {
        title: "Générateur de Pokémon mignons aléatoires | PokeRoll",
        description:
          "Obtiens un Pokémon mignon aléatoire — des choix doux, duveteux et adorables de tout le Pokédex. Régénère pour une autre bouille, ou copie-le dans Showdown.",
        keywords: [
          "generateur de pokemon mignon",
          "generateur de pokemon mignon aleatoire",
        ],
        guide: {
          introTitle: "Pourquoi tirer un Pokémon mignon ?",
          intro:
            "Tous les tirages n'ont pas besoin d'être compétitifs. Le générateur mignon pioche dans les coins doux, duveteux et ronds du Pokédex — les Pokémon que tu voudrais vraiment comme animal de compagnie, un tap à la fois.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Tirage réconfort",
              d: "Un tap, un Pokémon adorable — l'amélioration d'humeur la moins chère d'Internet.",
            },
            {
              t: "Prompt d'art",
              d: "Dessine la bouille tirée dans ton style — les petits Pokémon font le meilleur entraînement de croquis quotidien.",
            },
            {
              t: "Run 100 % mignon",
              d: "Monte une équipe de partie où chaque membre doit passer le test de mignonnerie — étonnamment viable, surtout du type Normal.",
            },
            {
              t: "Tranche le débat",
              d: "Chaque joueur tire une fois, le groupe vote pour le plus mignon — les dés arbitrent le plus vieux débat du fandom.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "La mignonnerie est subjective, mais le tirage est définitif — pas de re-tirage parce que tu te prends pour une famille Rondoudou.",
            "Pour les runs 100 % mignons, définis le critère avant de commencer : premier stade seulement ? Moins d'un mètre ? Duveteux ? Le livre de règles compte.",
            "Faire évoluer ton choix mignon est autorisé — aimer ce qu'il devient, c'est le défi avancé.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Les dés te donnent un oiseau sphérique qui couine, et ta productivité des dix prochaines minutes s'évapore. Te voilà en train de regarder des peluches. Ça ne pouvait pas finir autrement.",
          linksTitle: "Encore de la bonne humeur ?",
          linksTextBefore: "Essaie le",
          links: [
            { label: "générateur de Pokémon fabuleux", href: "/mythical" },
            { label: "générateur de surnoms", href: "/nickname" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— rare et adorable, c'est la meilleure combinaison.",
        },
      },
      mythical: {
        title: "Générateur de Pokémon fabuleux aléatoires | PokeRoll",
        description:
          "Révèle un Pokémon fabuleux aléatoire comme Mew, Celebi ou Jirachi — des perles rares de toutes les générations, prêtes à copier dans Showdown. Outil conçu par des fans.",
        keywords: [
          "generateur de pokemon fabuleux aleatoire",
          "generateur de pokemon fabuleux",
        ],
        guide: {
          introTitle: "Pourquoi tirer un Pokémon fabuleux ?",
          intro:
            "Les fabuleux, ce sont les raretés distribuées lors d'événements — Mew, Celebi, Jirachi et leurs héritiers, ces Pokémon que des générations entières de joueurs n'ont jamais possédés. Tires-en un et emprunte un peu de cette rareté pour toi.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Draft de dream team",
              d: "Tire six fabuleux et monte l'équipe de rêve que tu ne pourrais jamais assembler légitimement.",
            },
            {
              t: "Combat hypothétique",
              d: "Tires-en un, copie-le dans Showdown et vérifie si les insaisissables sont vraiment bons — certains le sont, d'autres sont des Jirachi.",
            },
            {
              t: "Checklist de collection",
              d: "Note quels fabuleux les dés t'ont montrés — un moyen lent et gratuit de rencontrer toute la collection.",
            },
            {
              t: "Rituel de tirage porte-bonheur",
              d: "Un tirage avant tes sessions ranked — tomber sur un fabuleux, c'est un bon présage, et la superstition ne coûte rien.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Fabuleux et Légendaires, ce n'est pas le même club — le pool fabuleux ne contient que des distributions événementielles, et c'est ce qui le rend spécial.",
            "Pour les drafts de rêve, les doublons imposent un re-tirage ; tout le reste tient tel quel.",
            "Souviens-toi que la plupart des fabuleux partagent le même spread de 600 équilibré — leurs tours sont dans leurs capacités et leurs talents, pas dans leurs stats.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Les dés te donnent Jirachi, le faiseur de vœux, vétéran d'un unique week-end d'événement en 2003. Tu ne l'as jamais attrapé. Tu ne l'attraperas probablement jamais. Mais aujourd'hui, sur cette page, le vœu a été exaucé.",
          linksTitle: "Encore des dés rares ?",
          linksTextBefore: "Essaie le",
          links: [
            { label: "générateur de Légendaires", href: "/legendary" },
            { label: "générateur de Méga-Pokémon", href: "/mega" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— la rareté se décline en plusieurs saveurs.",
        },
      },
      mega: {
        title: "Générateur de Méga-Pokémon aléatoires | PokeRoll",
        description:
          "Tire un Pokémon Méga-Évolution ou Primo-Résurgence aléatoire — découvre ses stats boostées et son talent, puis copie le set dans Showdown. Outil gratuit conçu par des fans.",
        keywords: [
          "generateur de mega pokemon aleatoire",
          "generateur de mega pokemon",
        ],
        guide: {
          introTitle: "Pourquoi tirer une Méga-Évolution ?",
          intro:
            "Les Méga-Évolutions et les régressions primaires, ce sont les plus grands « et si » de la franchise — des transformations temporaires avec des stats boostées, de nouveaux talents et des designs qui y sont allés à fond. Tires-en une et revisite l'époque où tout pouvait encore évoluer.",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Méta hypothétique",
              d: "Tire une Méga-Évolution et juge-la honnêtement : est-ce qu'elle mériterait une place dans une équipe moderne ?",
            },
            {
              t: "Décideur de draft",
              d: "Chaque joueur tire une Méga-Évolution — le tirage décide autour de quel ace ton équipe est construite.",
            },
            {
              t: "Étude de design",
              d: "Compare la Méga-Évolution avec sa forme de base et repère ce que les designers ont amplifié — une leçon de design gratuite.",
            },
            {
              t: "Prompt de combat",
              d: "Copie le set dans Showdown et joue le « et si » pour de vrai — la nostalgie frappe plus fort avec 150 d'Attaque de base.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Une Méga-Évolution par équipe, c'est la règle classique pour une bonne raison — ton tirage, c'est ton ace, alors construis autour, pas à côté.",
            "Les Primaux comptent comme des Méga-Évolutions dans le pool — décide-le avec ton groupe avant le premier tirage.",
            "Juge le package complet : +100 en stats ne veut rien dire si le talent trahit les forces de la forme de base.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Les dés te donnent Méga-Dardargnan — un glass cannon Insecte/Poison avec Adaptation et un rêve. Tu avais oublié qu'il existait. Et te voilà en train d'envisager Dard Mortel dans ta prochaine équipe, ce qui est exactement le but de ce générateur.",
          linksTitle: "Encore des transformations ?",
          linksTextBefore: "Essaie le",
          links: [
            { label: "générateur de Légendaires", href: "/legendary" },
            { label: "outil de fusion", href: "/fusion" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— officiels ou improvisés, les hybrides, c'est fun.",
        },
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
        guide: {
          introTitle: "Pourquoi tirer un surnom ?",
          intro:
            "Un surnom transforme une espèce en personnage. Le générateur de surnoms associe un Pokémon aléatoire à un nom qui vaut la peine d'être tapé — pour les Nuzlockes, les parties classiques et toutes les sauvegardes où ton équipe mérite mieux que « CARCHACROK ».",
          waysTitle: "Façons de jouer",
          ways: [
            {
              t: "Surnoms Nuzlocke",
              d: "Les règles disent que tu dois tout surnommer — laisse le tirage s'en charger, et l'attachement vient gratuitement.",
            },
            {
              t: "Saveur de partie",
              d: "Renomme toute ton équipe avec des surnoms tirés — une sauvegarde à thème se lit comme une histoire.",
            },
            {
              t: "Jeu de soirée",
              d: "Tire un Pokémon, tout le monde propose un surnom, le plus drôle gagne — le surnom tiré est celui à battre.",
            },
            {
              t: "Prompt d'écriture",
              d: "Un Pokémon plus un nom, c'est un portrait de personnage — écris le dresseur qui l'utiliserait.",
            },
          ],
          rulesTitle: "Fixe tes règles avant de tirer",
          rules: [
            "Le pacte Nuzlocke : le premier surnom tiré est définitif. Le lien est le but, et les liens ne se curatent pas.",
            "Les surnoms à thème montent la barre — noms de nourriture, de musiciens, de constellations ; choisis ta ligne avant le début du run.",
            "Honore les tombés : quand un Pokémon surnommé tombe K.O., le nom prend sa retraite avec lui. C'est tout le cœur du format.",
          ],
          sampleTitle: "Un tirage d'exemple",
          sample:
            "Route 2, première capture, un oiseau banal — et les dés le baptisent Capitaine Miette. Il survivra à trois wipes d'équipe, prendra sa retraite en légende et restera dans les mémoires plus longtemps que la plupart des Champions. C'est ça, le pouvoir d'un bon nom.",
          linksTitle: "Nommer tout l'équipage ?",
          linksTextBefore: "Tire d'abord l'équipe sur le",
          links: [
            { label: "générateur d'équipe aléatoire", href: "/team/random" },
            { label: "générateur de numéros Pokédex", href: "/number" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— puis reviens leur donner des noms à tous.",
        },
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
      guide: {
        introTitle: "Pourquoi tirer un Légendaire ?",
        intro:
          "Ce pool, c'est uniquement des légendes — les mascottes de boîte, les errants, les trios. Chaque tirage tombe sur un Pokémon qu'on ne pouvait rencontrer autrefois que par un événement, une caverne ou une cinématique de 40 minutes.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Équipe de rêve",
            d: "Tire six Légendaires et assemble l'équipe que tous les enfants de dix ans juraient imbattable.",
          },
          {
            t: "Draft boss rush",
            d: "Chaque joueur en tire trois — le plus gros BST cumulé gagne, et les droits de fanfaronnade durent toute la semaine.",
          },
          {
            t: "Combat hypothétique",
            d: "Copie un Légendaire tiré dans Showdown et teste le mythe — certains dieux ont des movesets très mortels.",
          },
          {
            t: "Tirage de collection",
            d: "Un tirage par jour jusqu'à ce que les dés t'aient montré tous les Légendaires — le run de complétion le plus lent et le moins cher.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Le premier tirage tient — un Légendaire que tu peux re-tirer, c'est juste un Pokémon fort, et le mystère, c'est tout l'intérêt.",
          "Légendaires et fabuleux, ce sont deux pools différents : cette page garde le club exclusif, les fabuleux habitent à côté.",
          "Pour les drafts, un re-tirage par joueur, annoncé avant que les dés ne tombent — les règles maison gardent les dieux honnêtes.",
        ],
        sampleTitle: "Un tirage d'exemple",
        sample:
          "Un tap : Rayquaza, dieu du ciel, le run s'écrit tout seul. Tap suivant : Régigigas, dont le Début Calme transforme le dieu en spectateur pendant cinq tours. Les légendes contiennent des multitudes.",
        linksTitle: "Encore des dés rares ?",
        linksTextBefore: "Essaie le",
        links: [
          { label: "générateur de Pokémon fabuleux", href: "/mythical" },
          { label: "chasse shiny", href: "/challenge/shiny" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— la rareté au carré.",
      },
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
      guide: {
        introTitle: "Pourquoi tirer une aventure ?",
        intro:
          "Le mode Aventure tire une partie complète en un tap : un dresseur, un starter, une équipe, un défi et un objectif, le tout lié à un seul seed. C'est un générateur de campagne — les dés écrivent le pitch, toi tu joues l'histoire.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Run défi instantané",
            d: "Tire une aventure et prends ses règles pour contraignantes — l'équipe qu'elle te donne est celle que le run autorise.",
          },
          {
            t: "Calendrier de défis",
            d: "Tire une nouvelle aventure chaque semaine et streame ou consigne tes tentatives — même format de seed, histoires comparables.",
          },
          {
            t: "Pitch coop",
            d: "Partage le seed avec un ami : aventure identique, parties séparées, course jusqu'à l'objectif.",
          },
          {
            t: "Graine d'histoire",
            d: "Utilise le dresseur et l'objectif tirés comme prompts de fan-fiction ou de jeu de rôle — les dés sont étonnamment doués pour les accroches de scénario.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Choisis la difficulté avant de tirer, pas après avoir vu le résultat — choisir Extrême une fois l'équipe connue, c'est juste négocier avec toi-même.",
          "Une aventure fonctionne parce qu'elle est contraignante : un reroll par run, maximum, et seulement avant d'avoir capturé quoi que ce soit.",
          "Partage le seed, pas des captures d'écran — le lien rejoue l'aventure exacte, ce qui rend les courses et les comparaisons équitables.",
        ],
        sampleTitle: "Une aventure d'exemple",
        sample:
          "Un seul seed peut décréter : une Fillette de Hoenn, un starter Chimchar, un défi sans objets, et l'objectif de battre la ligue en sous-niveau. Tu n'aurais jamais monté ce run toi-même — et c'est exactement pour ça que tu t'en souviendras.",
        linksTitle: "Envie d'équiper l'aventure ?",
        linksTextBefore: "Arme le run avec les dés du",
        links: [
          { label: "générateur d'équipe aléatoire", href: "/team/random" },
          { label: "défi des silhouettes", href: "/challenge/guess" },
          { label: "défi chasse shiny", href: "/challenge/shiny" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— toute bonne campagne a besoin de quêtes secondaires.",
      },
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
      guide: {
        introTitle: "Pourquoi tester ta mémoire du Pokédex ?",
        intro:
          "Le défi des silhouettes est le test le plus pur de connaissance du Pokédex : une composition fixe, des indices qui s'amenuisent avec la difficulté, et ton score à la fin. Même seed pour tout le monde — les scores sont donc vraiment comparables.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Duel quotidien",
            d: "Partage le seed avec un ami et comparez vos scores — même composition, aucune excuse.",
          },
          {
            t: "Échelle de difficulté",
            d: "Commence en Facile avec des indices généreux, puis grimpe vers Extrême, où les sprites sont zoomés et les indices ont disparu.",
          },
          {
            t: "Gauntlet à filtres",
            d: "Verrouille une seule génération ou un seul type et prouve que tu connais vraiment cette tranche du dex — pas seulement les passages célèbres.",
          },
          {
            t: "Quiz de soirée",
            d: "Lis les cartes à voix haute en appel et faites la course pour crier la réponse — la vitesse compte.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Choisis le nombre et la difficulté avant la première révélation — douze en Facile et six en Extrême sont des examens complètement différents.",
          "Pas de changement de filtre en cours de route : une manche mono-Eau et une manche tout le dex ne mesurent pas les mêmes connaissances.",
          "Une tentative par seed, c'est le format honnête — le seed fige la composition, donc un deuxième essai n'est que de la mémorisation.",
        ],
        sampleTitle: "Une manche d'exemple",
        sample:
          "Une manche Difficile zoome sur une spirale de coquille bleu-gris. Cloyster ? Omastar ? Tu te jettes sur Kabutops en toute confiance, et la révélation dit... Shellder. Quelque part, un rival est en train de rire — et ton seed de revanche est à un tap.",
        linksTitle: "Envie d'autres examens ?",
        linksTextBefore: "Essaie le",
        links: [
          { label: "mode carte mystère", href: "/no-names" },
          { label: "défi chasse shiny", href: "/challenge/shiny" },
          { label: "mode Aventure", href: "/adventure" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— d'autres dés, les mêmes droits de vantardise.",
      },
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
      guide: {
        introTitle: "Pourquoi chasser un shiny ?",
        intro:
          "La chasse shiny simule le plus vieux pari de Pokémon : rencontre après rencontre, à attendre l'étincelle. Choisis une difficulté, clique à travers le pool sauvage, et regarde jusqu'où va la chasse — les règles de pity la gardent honnête, mais jamais facile.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Test de chance",
            d: "Lance une chasse et regarde combien de rencontres ton shiny demande — en dessous des odds, tu es chaud ; au-dessus, le pool t'en doit une.",
          },
          {
            t: "Course contre un ami",
            d: "Partage le seed de chasse et fais la course jusqu'à la révélation — le moins de rencontres gagne, et le lien le prouve.",
          },
          {
            t: "Entraînement de patience",
            d: "Utilise la difficulté Extrême comme méditation : des centaines de clics, une étincelle, aucun raccourci.",
          },
          {
            t: "Segment de stream",
            d: "Une course shiny en live, c'est du contenu tout prêt — le chat choisit la difficulté, toi tu fournis le désespoir.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "La difficulté, c'est tout le jeu ici : Facile garantit un tirage pity pour qu'une première chasse se termine toujours ; les niveaux supérieurs te le font mériter.",
          "Décide ce qui compte avant de commencer — est-ce que le premier shiny termine la chasse, ou est-ce que tu tiens bon pour une espèce précise ?",
          "Partage le lien de révélation, pas une capture d'écran : il s'ouvre directement sur la carte trouvée, donc personne ne peut simuler un shiny première rencontre.",
        ],
        sampleTitle: "Une chasse d'exemple",
        sample:
          "Rencontre 1 : Pidgey. Rencontre 47 : Pidgey. Rencontre 213 : Pidgey. Tu commences à douter des odds, du seed, de tes choix de vie — et puis la rencontre 214 scintille doré. Tout vrai chasseur sait exactement ce que ça fait.",
        linksTitle: "Envie de prolonger la série ?",
        linksTextBefore: "Essaie le",
        links: [
          { label: "défi des silhouettes", href: "/challenge/guess" },
          { label: "mode Aventure", href: "/adventure" },
          { label: "générateur de Pokémon aléatoire", href: "/random-pokemon-generator" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— les dés ne dorment jamais.",
      },
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
      guide: {
        introTitle: "Pourquoi garder une équipe sauvegardée ?",
        intro:
          "Ton équipe, c'est là où les résultats aléatoires cessent d'être jetables. Chaque carte sur laquelle tu touches Add to Team atterrit ici — depuis n'importe quel générateur du site — et une équipe s'assemble doucement à partir de tirages qui t'ont vraiment plu.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Collection best-of",
            d: "Continue à tirer sur le générateur d'équipe et n'ajoute que les pulls qui valent la peine d'être gardés — cette page devient ton hall of fame.",
          },
          {
            t: "Curation de draft",
            d: "Tire plus de six, garde les six meilleurs ici et coupe le reste — ton propre draft day personnel.",
          },
          {
            t: "Préparation Showdown",
            d: "Une fois que les six te conviennent, exporte toute l'équipe avec Copy Sets et colle-la directement dans le teambuilder de Showdown.",
          },
          {
            t: "Partage l'escouade",
            d: "Le lien de partage transporte ta composition exacte — envoie-le à un ami et il voit les six mêmes, artwork compris.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Une équipe sauvegardée mérite un thème. Pas besoin qu'il soit compétitif — « que des Pokémon que j'utiliserais vraiment dans une aventure », c'est un thème. « Un par génération » aussi, ou « rien au-dessus de 500 BST ».",
          "Considère les suppressions comme définitives. Si tu te surprends à changer le même slot cinq fois, c'est un autre rôle que ce slot réclame, pas un autre Pokémon.",
          "Six, c'est la limite classique pour une raison : assez petit pour que chaque membre doive justifier sa place.",
        ],
        sampleTitle: "Une équipe d'exemple",
        sample:
          "Une équipe sauvegardée typique peut commencer comme « les six qui ont porté mon run Émeraude » — Swampert, Gardevoir, Aggron, Manectric, Altaria, et un esclave CS qui a mérité sa retraite. La page ne juge pas ; elle se souvient, c'est tout.",
        linksTitle: "Envie de sang neuf ?",
        linksTextBefore: "Tire de nouveaux candidats sur le",
        links: [
          { label: "générateur d'équipe aléatoire", href: "/team/random" },
          { label: "Team Coach", href: "/team/coach" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— puis ajoute ceux que tu gardes ici.",
      },
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
      guide: {
        introTitle: "Pourquoi tirer une équipe aléatoire ?",
        intro:
          "Une équipe aléatoire enlève la paralysie du choix de la construction d'équipe. Au lieu de faire défiler le Pokédex pendant une heure, tu reçois six slots tout servis — et c'est là que la partie intéressante commence : les faire fonctionner ensemble. Utilise le résultat comme run défi, draft entre amis, équipe d'entraînement, ou pure inspiration pour ta prochaine aventure.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Run défi",
            d: "Engage-toi sur les six que tu tires pour ta prochaine aventure — pas de rerolls. Construis autour de ce que tu obtiens, chevauchement de types gênant inclus.",
          },
          {
            t: "Draft entre amis",
            d: "Partage le lien de la page — l'URL transporte l'équipe exacte, donc tout le monde part des six mêmes. Tire ta propre réponse, puis combattez et comparez.",
          },
          {
            t: "Entraînement Showdown",
            d: "Copy Sets te donne des sets complets avec capacités, objets et EVs. Colle-les dans le teambuilder de Showdown et grimpe le ladder avec une équipe que tu n'as pas sur-intellectualisée.",
          },
          {
            t: "Construction à thème",
            d: "Verrouille un type, une génération ou une catégorie dans les filtres et tire dans une contrainte de ton choix — une équipe mono-Eau, des retrouvailles Gen 3, un run 100 % Starters.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Une équipe aléatoire est plus fun quand les règles viennent d'abord. Légendaires autorisés ? Sinon, ouvre les filtres et exclus la catégorie avant de toucher le bouton Tirer. Run mono-type ? Verrouille le type. Seulement les jeux de ton enfance ? Verrouille la génération. Les filtres sont ton livre de règles — règle-les une fois, puis vis avec ce que disent les dés.",
          "En jeu détendu, accepte un chevauchement gênant comme partie du défi — trois Pokémon qui partagent une faiblesse, c'est un puzzle, pas un bug. Pour une draft, mettez-vous d'accord sur les bans avec ton groupe avant que quiconque ne tire. Pour un run narratif, accorde-toi un veto quand une espèce est tout simplement impossible à capturer dans ton jeu.",
          "Le but, c'est une équipe que tu jouerais vraiment — pas de reroller jusqu'à ce qu'elle ait l'air parfaite.",
        ],
        sampleTitle: "Un tirage d'exemple",
        sample:
          "Un tap peut te donner Gengar, Donphan, Togekiss, Ferrothorn, Volcarona et Pelipper — une équipe parfaitement jouable, sauf que trois d'entre eux s'effondrent face à Roche. Cette faiblesse partagée, c'est le défi : tu la colmattes avec des objets et des capacités, ou tu fonces et tu dépasses tout en vitesse ? Le tirage te donne une contrainte ; ce que tu construis autour, c'est le jeu.",
        linksTitle: "Envie d'un pool plus restreint ?",
        linksTextBefore: "Tire dans une seule tranche du Pokédex à la place — essaie le",
        links: [
          { label: "générateur Gen 1", href: "/gen/1" },
          { label: "générateur de type Dragon", href: "/type/dragon" },
          { label: "générateur de Légendaires", href: "/legendary" },
        ],
        linksJoinOr: "ou",
        linksTextAfter:
          "— puis reviens tirer une équipe complète dans ta contrainte préférée.",
      },
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
      guide: {
        introTitle: "Pourquoi utiliser un coach d'équipe ?",
        intro:
          "Le Coach d'équipe est fait pour ce moment où tu as quatre Pokémon que tu adores et aucune idée de ce qui va dans les deux derniers slots. Verrouille tes choix, et il complète le reste avec une couverture de types et des rôles équilibrés — pas juste plus de ce que tu as déjà.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Terminer une draft",
            d: "Tes favoris sont verrouillés ? Laisse le coach compléter les six avec la couverture qui te manque — puis relance juste les slots qui ne te plaisent pas.",
          },
          {
            t: "Corriger une faiblesse",
            d: "Si ton équipe s'effondre face à un type, verrouille ceux que tu gardes et génère — le coach pèse la couverture défensive dans ses choix.",
          },
          {
            t: "Apprendre le teambuilding",
            d: "Regarde pourquoi il choisit ce qu'il choisit : chaque suggestion vient avec une raison, ce qui est discrètement une leçon de teambuilding.",
          },
          {
            t: "Importer & polir",
            d: "Importe ton équipe sauvegardée ou tes favoris, largue les maillons faibles, et laisse le coach faire auditionner des remplaçants.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Verrouille honnêtement. Le coach ne peut équilibrer qu'autour de ce que tu lui donnes — verrouille les Pokémon auxquels tu es vraiment engagé, pas toute ta wishlist.",
          "Lis la raison avant de relancer. « New coverage » et « pivot tanky » te disent ce qui manquait à ton équipe ; si la même raison revient sans cesse, c'est ça, le vrai problème de ton équipe.",
          "Un reroll par slot est une bonne règle maison — des rerolls sans fin transforment le coach en générateur aléatoire au ralenti.",
        ],
        sampleTitle: "Une correction d'exemple",
        sample:
          "Verrouille Garchomp, Rotom-Wash et Corviknight et le coach peut répondre avec un type Feu pour le matchup Acier, un immunisé Sol pour la faiblesse partagée, et un joker « for new coverage » — exactement la conversation qu'un bon coéquipier aurait avec toi.",
        linksTitle: "Envie d'un autre point de départ ?",
        linksTextBefore: "Tire une nouvelle équipe avec le",
        links: [
          { label: "générateur d'équipe aléatoire", href: "/team/random" },
          { label: "contenu de ton équipe sauvegardée", href: "/team" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— puis ramène le résultat ici pour le terminer.",
      },
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
      guide: {
        introTitle: "Pourquoi défier un ami ?",
        intro:
          "Le Défi d'équipe transforme un tirage aléatoire en tableau des scores. La page génère une équipe avec seed, tu partages le lien, et quiconque l'ouvre affronte exactement la même équipe — le BST total couronne le gagnant.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Duel entre amis",
            d: "Partage le lien du défi dans ton groupe — chacun tire sa propre réponse à la même équipe, le BST le plus élevé prend la manche.",
          },
          {
            t: "Segment de stream",
            d: "Tire une équipe défi en live et laisse le chat essayer de la battre — le lien garde tout le monde honnête parce que l'équipe ne peut pas changer.",
          },
          {
            t: "Benchmark solo",
            d: "Bats tes propres tirages : garde l'équipe défi fixe et relance ton côté jusqu'à dépasser son BST avec une équipe que tu utiliserais vraiment.",
          },
          {
            t: "Arbitre de soirée draft",
            d: "Utilise une manche défi pour décider qui pick en premier — pas de débat, les chiffres sont sur la page.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Décidez du format avant de partager : un tirage chacun, ou le meilleur des trois ? Le seed fige le défi lui-même — la seule variable, c'est ce que tu tires contre.",
          "Le BST désigne le gagnant ici, mais les règles maison peuvent primer : réponses mono-type uniquement, pas de légendaires dans ta réponse, ou « le BST le plus bas gagne » pour une manche chaos.",
          "Exporte les deux côtés vers Showdown ensuite si tu veux la vraie réponse — le BST est un tableau des scores, pas un résultat de combat.",
        ],
        sampleTitle: "Un défi d'exemple",
        sample:
          "Le défi tire Blissey, Shedinja, Magikarp, Regidrago, Applin et Salamence — un total monstrueux porté par trois vrais Pokémon et trois blagues. Bats-le avec six mid-tiers et tu as gagné tes droits de vantardise ; perds contre lui et tu entendras parler de Magikarp toute la semaine.",
        linksTitle: "Envie d'autres façons de t'affronter ?",
        linksTextBefore: "Enchaîne avec le",
        links: [
          { label: "générateur de roue", href: "/wheel" },
          { label: "défi des silhouettes", href: "/challenge/guess" },
          { label: "générateur d'équipe aléatoire", href: "/team/random" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— mêmes dés, autre tableau des scores.",
      },
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
      guide: {
        introTitle: "Pourquoi faire tourner une roue ?",
        intro:
          "La roue est le sélecteur aléatoire le plus honnête qui soit : tout le monde regarde le même tour s'arrêter sur la même tranche. Tournez chacun votre tour, empilez les résultats, et le BST le plus élevé prend la manche — pas de setup, pas de dispute avec les dés.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "PK de soirée",
            d: "De deux à six joueurs, un tour chacun — le BST le plus élevé gagne la manche. Le perdant choisit le prochain enjeu.",
          },
          {
            t: "Starter de draft",
            d: "Tourne six fois et note chaque résultat — voilà ton équipe pour un run défi, doublons inclus.",
          },
          {
            t: "Preneur de décisions",
            d: "Tu n'arrives pas à choisir un type pour ton mono-run ou un jeu pour la soirée ? Mets les options sur la roue et laisse-la tomber.",
          },
          {
            t: "Contenu de stream",
            d: "Une roue qui tourne rend super bien à la caméra — tourne pour ta prochaine rencontre, ton prochain coéquipier, ou ta prochaine punition.",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tourner",
        rules: [
          "Mettez-vous d'accord sur le nombre avant le premier tour : un tour chacun, ou on tourne jusqu'à ce que ça plaise ? Les roues sont plus fun quand personne ne peut faire du lobbying pour un re-tour.",
          "Pour les manches PK, les égalités font partie du charme — décidez d'avance si les joueurs à égalité se départagent à la roue ou partagent la couronne.",
          "Partage le lien de la manche une fois terminée : l'URL transporte les résultats, donc les droits de vantardise du gagnant sont vérifiables.",
        ],
        sampleTitle: "Une manche d'exemple",
        sample:
          "Six tours plus tard, le tableau affiche : un pseudo-légendaire à 670 BST, deux oiseaux de route 1, un Magikarp — et la tête suffisante de ton ami quand son dernier tour tombe sur Arceus. La roue donne, et le lien de la manche le prouve.",
        linksTitle: "Envie de structure autour des tours ?",
        linksTextBefore: "Tire une équipe complète sur le",
        links: [
          { label: "générateur d'équipe aléatoire", href: "/team/random" },
          { label: "générateur de Pokémon aléatoire", href: "/random-pokemon-generator" },
          { label: "générateur de Légendaires", href: "/legendary" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— puis reviens tourner pour le départage.",
      },
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
      guide: {
        introTitle: "Pourquoi fusionner des Pokémon ?",
        intro:
          "Le générateur de fusions répond à la question que tout Pokédex finit par poser : à quoi ressembleraient ces deux-là réunis en un seul ? Chaque tirage choisit deux espèces aléatoires et mélange nom, types et stats en un hybride qui n'existe nulle part ailleurs.",
        waysTitle: "Façons de jouer",
        ways: [
          {
            t: "Prompt de dessin",
            d: "Tire une fusion et dessine-la — le nom et les types mélangés sont un brief de design tout prêt.",
          },
          {
            t: "Devine les parents",
            d: "Montre la carte de fusion, cache le résultat, et laisse tes amis deviner quels deux Pokémon l'ont créée.",
          },
          {
            t: "Dex custom",
            d: "Garde une liste de tes fusions préférées — après vingt tirages, tu as le début du Pokédex de ta propre région.",
          },
          {
            t: "What-ifs de combat",
            d: "Copie le set de la fusion vers Showdown et théorise : est-ce que cet hybride mériterait vraiment un slot d'équipe ?",
          },
        ],
        rulesTitle: "Fixe tes règles avant de tirer",
        rules: [
          "Juge une fusion pour ce qu'elle est : les meilleures sont celles que tu dessinerais ou utiliserais vraiment, pas celles avec les stats les plus hautes.",
          "Pour devine-les-parents, un indice par devineur garde le jeu fluide — le type est le cadeau classique.",
          "Relance librement jusqu'à ce qu'une paire étincelle ; les fusions sont gratuites, l'inspiration non.",
        ],
        sampleTitle: "Une fusion d'exemple",
        sample:
          "Un tirage peut fusionner Gengar avec Snorlax en un mur Ghost/Normal au nom qui te fera rire une semaine — et puis tu te surprends à te demander sérieusement quel serait son EV spread. C'est là qu'une fusion cesse d'être une blague et devient un design.",
        linksTitle: "Envie de meilleure matière première ?",
        linksTextBefore: "Tire de nouveaux parents sur le",
        links: [
          { label: "générateur de Pokémon aléatoire", href: "/random-pokemon-generator" },
          { label: "générateur de roue", href: "/wheel" },
          { label: "générateur d'équipe aléatoire", href: "/team/random" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— puis fusionne ceux que tu gardes.",
      },
    },
  },
};

