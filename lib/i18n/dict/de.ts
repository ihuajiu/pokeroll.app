/* ------------------------------------------------------------------ */
/*  Deutsches Wörterbuch — gleiche Struktur wie en.ts (typisierte      */
/*  Quelle).                                                           */
/*                                                                     */
/*  Die Werte sind die sichtbaren Nutzer-Strings. Platzhalter nutzen   */
/*  {name} und werden am Einsatzort mit .replace() ersetzt (die        */
/*  Wörterbücher müssen einfache serialisierbare Objekte bleiben, um   */
/*  die Server→Client-Grenze zu überqueren).                           */
/* ------------------------------------------------------------------ */

export default {
  common: {
    copy: "Kopieren",
    copySet: "Set kopieren",
    copied: "Kopiert!",
    copyShowdownSet: "Showdown-Set kopieren",
    showdownSetCopied: "Showdown-Set kopiert",
    showdownSetCopiedBang: "Showdown-Set kopiert!",
    back: "Zurück",
    rollAdventure: "Abenteuer würfeln",
    viewYourTeam: "Dein Team ansehen",
    /** Template: {n} = generation number. */
    genShort: "Gen {n}",
    /** Template: {label} = tool label. */
    toolArtworkAlt: "Beispiel-Pokémon-Artwork von {label}",
    home: "Startseite",
    randomPokemon: "Zufalls-Pokémon",
    generateAgain: "Erneut generieren",
    generating: "Generiere…",
    generateAnotherAria: "Ein weiteres Zufalls-Pokémon generieren",
  },

  nav: {
    homeTitle: "PokeRoll-Startseite",
    menuAria: "Menü",
    languageAria: "Sprache",
    /** Template: {count} = number of favorites. */
    favoritesAria: "Favoriten ({count})",
    main: {
      adventure: "Abenteuer",
      generators: "Generatoren",
      team: "Team",
      challenges: "Challenges",
      tools: "Tools",
      contact: "Kontakt",
    },
  },

  footer: {
    tagline:
      "Würfle ein Zufalls-Pokémon — Namen, Typen, Werte und Shinies mit einem Tippen.",
    contactUs: "Kontaktiere uns",
    onX: "PokeRoll auf X",
    xTitle: "@JoeyChou2024 auf X",
    onGithub: "PokeRoll auf GitHub",
    githubTitle: "ihuajiu/pokeroll.app auf GitHub",
    byRegion: "Nach Region",
    byType: "Nach Typ",
    byGeneration: "Nach Generation",
    disclaimer:
      "Dies ist ein Fan-Tool. Keine Verbindung zu Nintendo, Game Freak oder The Pokémon Company. Pokémon-Daten bereitgestellt von",
    pokeApi: "PokéAPI",
    disclaimerLink: "Haftungsausschluss",
    disclaimerTitle: "Haftungsausschluss",
    privacy: "Datenschutz",
    privacyTitle: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
    termsTitle: "Nutzungsbedingungen",
    badges: {
      fazierTitle: "Gelistet auf Fazier",
      fazierAlt: "Badge „Gelistet auf Fazier“",
      tinyTitle: "Gelistet auf TinyLaunch",
      tinyAlt: "TinyLaunch-Badge",
      findlyTitle: "Gelistet auf Findly.tools",
      findlyAlt: "Gelistet auf Findly.tools",
    },
  },

  tools: {
    groups: {
      adventure: {
        title: "Abenteuer",
        desc: "Würfle Trainer, Region, Starter, Team, Challenge und Ziel mit einem Tippen.",
      },
      generator: {
        title: "Generatoren",
        desc: "Zufalls-Pokémon nach Typ, Fähigkeit, Attacke, Statuswert, Nummer und mehr.",
      },
      challenge: {
        title: "Challenges",
        desc: "Errate, jage oder drehe am Rad — Challenges zum Teilen mit deinen Freunden.",
      },
      tool: {
        title: "Tools",
        desc: "Praktische Helfer auf Basis der Zufallswürfe.",
      },
      team: {
        title: "Team",
        desc: "Baue dein Team oder würfle ein fertiges Sechser-Team.",
      },
    },
    items: {
      adventure: {
        label: "Pokémon-Abenteuer",
        desc: "Würfle ein komplettes Abenteuer — Trainer, Starter, Team, Challenge & Ziel.",
      },
      randomPokemon: {
        label: "Zufalls-Pokémon",
        desc: "Ein komplett zufälliges Pokémon mit Werten, Typ und Sprite.",
      },
      type: {
        label: "Typ-Generator",
        desc: "Würfle einen zufälligen Typ und ein passendes Pokémon.",
      },
      ability: {
        label: "Fähigkeiten-Generator",
        desc: "Würfle eine zufällige Fähigkeit und sieh, wer sie hat.",
      },
      move: {
        label: "Attacken-Generator",
        desc: "Entdecke eine zufällige Attacke und einen ihrer Anwender.",
      },
      bst: {
        label: "BST-Generator",
        desc: "Zufällige Basiswert-Summe, dann das Pokémon aufdecken.",
      },
      number: {
        label: "Nummern-Generator",
        desc: "Würfle eine Pokédex-Nummer und deck auf, welches Pokémon dahintersteckt.",
      },
      starter: {
        label: "Starter-Generator",
        desc: "Ein zufälliger Partner aus jeder Generation.",
      },
      cute: {
        label: "Niedlich-Generator",
        desc: "Sanfte, flauschige und niedliche Picks.",
      },
      mythical: {
        label: "Mysteriös-Generator",
        desc: "Mew, Celebi, Arceus und Freunde.",
      },
      legendary: {
        label: "Legendär-Generator",
        desc: "Würfle nur Legendäre Pokémon.",
      },
      mega: {
        label: "Mega-Generator",
        desc: "Mega-Entwicklungen und Ur-Formen.",
      },
      nickname: {
        label: "Spitznamen-Generator",
        desc: "Ein Pokémon zusammen mit einem lustigen, niedlichen Spitznamen.",
      },
      guess: {
        label: "Errate das Pokémon",
        desc: "Namen versteckt — errate anhand der Silhouette, decke auf zum Prüfen.",
      },
      shiny: {
        label: "Shiny-Jagd",
        desc: "Wie viele Begegnungen bis zu deinem nächsten Shiny?",
      },
      mystery: {
        label: "Mystery-Pokémon",
        desc: "Eine Mystery-Karte — Artwork sichtbar, Name versteckt.",
      },
      wheel: {
        label: "Glücksrad-Battle",
        desc: "Multiplayer-Glücksrad — 2-6 Spieler drehen, höchster BST gewinnt.",
      },
      fusion: {
        label: "Fusions-Tool",
        desc: "Fusioniere zwei Pokémon zu einer neuen Kreatur.",
      },
      randomTeam: {
        label: "Zufalls-Team",
        desc: "Würfle ein fertiges Team aus sechs Zufalls-Pokémon.",
      },
      teamChallenge: {
        label: "Team-Challenge",
        desc: "Würfle ein Team mit Seed und fordere einen Freund heraus, es zu schlagen.",
      },
      teamCoach: {
        label: "Team-Coach",
        desc: "Fixiere deine Picks, fülle den Rest mit cleverer Typ-Abdeckung.",
      },
      myTeam: {
        label: "Mein Team",
        desc: "Sammle Favoriten zu einem Themen-Team.",
      },
    },
    /** Homepage "Jump straight in" cards — keyed by tool id. Several labels
     *  intentionally differ from the catalog labels above. */
    jump: {
      randomPokemon: {
        label: "Zufalls-Generator",
        desc: "Beschwöre ein Zufalls-Pokémon mit vollen Werten & Artwork.",
      },
      adventure: {
        label: "Abenteuer-Modus",
        desc: "Würfle ein komplettes Pokémon-Abenteuer — Trainer, Starter, Team, Challenge & Ziel.",
      },
      randomTeam: {
        label: "Zufalls-Team",
        desc: "Würfle ein fertiges Team aus sechs Zufalls-Pokémon.",
      },
      fusion: {
        label: "Fusions-Generator",
        desc: "Fusioniere zwei Pokémon zu einer Hybrid-Kreatur.",
      },
      shiny: {
        label: "Shiny-Jagd",
        desc: "Jage die seltene andersfarbige Form.",
      },
      guess: {
        label: "Errate das Pokémon",
        desc: "Namen versteckt — errate anhand der Silhouette, decke auf zum Prüfen.",
      },
    },
  },

  heroCard: {
    stats: {
      hp: "KP",
      atk: "ANG",
      def: "VER",
      spa: "SAN",
      spd: "SVE",
      spe: "INI",
    },
    forms: {
      mega: "Mega",
      alolan: "Alola",
      galarian: "Galar",
      hisuian: "Hisui",
      paldean: "Paldea",
      gigantamax: "Gigadynamax",
    },
    ability: "Fähigkeit",
    region: "Region",
    bst: "BST",
    gen: "Gen",
    height: "Größe",
    weight: "Gewicht",
    heightUnit: "m",
    weightUnit: "kg",
    mystery: "Mystery",
    newRoll: "Neuer Wurf",
    rolling: "Generiere…",
    flipHint: "Karte antippen zum Wenden — Showdown-Set",
    showdownSet: "Showdown-Set",
    loading: "Laden…",
    generatingSet: "Generiere Set…",
    lock: "Sperren — beim Neuwurf behalten",
    unlock: "Entsperren — Neuwurf erlauben",
    addToFavorites: "Zu Favoriten hinzufügen",
    removeFromFavorites: "Aus Favoriten entfernen",
    favLimit: "Max. 15 Favoriten — entferne einen, um einen neuen hinzuzufügen.",
    shareLink: "Link teilen",
    linkShared: "Link geteilt",
    linkCopied: "Link kopiert!",
    shared: "Geteilt!",
    downloadCard: "Karte herunterladen",
    imageSaved: "Bild gespeichert",
    imageSavedBang: "Bild gespeichert!",
    closeShowdown: "Showdown-Set schließen",
    backToCard: "Zurück zur Karte",
  },

  randomGenerator: {
    generation: "Generation",
    region: "Region",
    type: "Typ",
    legendary: "Legendär",
    starter: "Starter",
    favorites: "Favoriten",
    all: "Alle",
    any: "Beliebig",
    only: "Nur",
    exclude: "Ausschließen",
    favoritesTitle: "Pokémon überspringen, die du favorisiert hast",
    noMatch: "Keine Pokémon passen zu diesen Filtern — versuche, sie zu erweitern.",
    advancedFilters: "Erweiterte Filter",
    collapseAria: "Erweiterte Filter einklappen",
    collapseTitle: "Filter einklappen",
  },

  variantGenerator: {
    welcome: "Willkommen, Trainer!",
    /** Template: {kind} = localized kind label. */
    yourRandom: "Dein Zufalls-Ergebnis ({kind}) ist…",
    buildTeam: "Team bauen",
    kinds: {
      type: "Typ",
      ability: "Fähigkeit",
      move: "Attacke",
      bst: "Basiswert-Summe",
      number: "Pokédex-Nummer",
      starter: "Starter-Pokémon",
      shiny: "Shiny-Pokémon",
      noNames: "Mystery-Pokémon",
      cute: "Niedliches Pokémon",
      mythical: "Mysteriöses Pokémon",
      mega: "Mega-Pokémon",
      nickname: "Spitzname",
    },
  },

  homeTool: {
    eyebrow: "Zufalls-Pokémon-Generator & Tools",
    title: "Zufalls-Pokémon",
    titleAccent: "Generator",
    lead: "Würfle ein Zufalls-Pokémon mit einem Tippen — über 1.000 Arten mit vollen Werten und Artwork. Oder würfle ein zufälliges Pokémon-Team, eine Challenge, sogar ein komplettes Pokémon-Abenteuer. Kostenlos, sofort und zum Teilen.",
    rollPokemon: "Pokémon würfeln",
    randomGeneratorTitle: "Zufalls-Pokémon-Generator",
    stats: {
      species: "Arten",
      types: "Typen",
      generations: "Generationen",
    },
    jumpEyebrow: "Direkt loslegen",
    jumpTitle: "Wähle ein Tool und leg los",
    jumpDesc: "Die beliebtesten Generatoren — ein Tippen, sofortiger Spaß.",
    explore: "Entdecken",
    browseEyebrow: "Tool-Matrix",
    browseTitle: "Alle Arten zu würfeln",
    browseDesc: "Der komplette Tool-Katalog — jede Art, ein Pokémon zu würfeln.",
  },

  homeFacts: {
    title: "PokeRoll in Zahlen",
    metricHead: "Kennzahl",
    valueHead: "Wert",
    noteHead: "Hinweis",
    facts: [
      { metric: "Pokémon-Arten", value: "1.000+", note: "Alle 9 Generationen" },
      { metric: "Pokémon-Typen", value: "18", note: "Jeder Typ filterbar" },
      { metric: "Generationen", value: "9", note: "Gen 1 (Kanto) bis Gen 9 (Paldea)" },
      { metric: "Zufalls-Team-Größe", value: "6", note: "Ein komplettes kampfbereites Team" },
      { metric: "Basis-Shiny-Chance", value: "1 / 4.096", note: "Wie in den modernen Spielen" },
    ],
    howToTitle: "So würfelst du ein Zufalls-Pokémon in 3 Schritten",
    step1Pre: "Öffne den",
    step1Link: "Zufalls-Pokémon-Generator",
    step1Post: "— ohne Anmeldung, ohne Download.",
    step2: "Tippe auf den Würfel-Button, um sofort 1 von über 1.000 Arten mit Name, Typ, Fähigkeit, Basiswerten und Artwork zu erhalten.",
    step3: "Wende die Karte, um ein fertiges Pokémon-Showdown-Set zu kopieren, oder teile den Link mit Freunden.",
    quote1:
      "„Daraus ergibt sich eine Basis-Shiny-Wahrscheinlichkeit von ungefähr 16/65536 bzw. 1/4096.“",
    quote1Cite: "Bulbapedia, „Shiny Pokémon“",
    quote2:
      "„Alle Pokémon-Daten, die du je brauchen wirst, an einem Ort — leicht zugänglich über eine moderne, kostenlose Open-Source-REST-API.“",
    quote2CiteSuffix: ", mit über 50 Milliarden API-Aufrufen pro Monat",
  },

  addToTeam: {
    add: "Zum Team hinzufügen",
    addAria: "Zum Team hinzufügen",
    inTeam: "✓ Im Team",
    removeAria: "Aus dem Team entfernen",
    /** Template: {count} = current team size. */
    viewTeam: "Team ansehen ({count})",
  },

  faq: {
    heading: "FAQ",
  },

  relatedTools: {
    heading: "Ähnliche Tools",
  },

  adventureView: {
    /** Template: {seed} = adventure seed code. */
    seedLine: "Seed {seed} — teile diesen Link, um exakt dasselbe Abenteuer erneut zu spielen.",
    difficultyLabel: "Schwierigkeit",
    addAllToTeam: "Alle zum Team hinzufügen",
    shareAdventure: "Abenteuer teilen",
    rollAgain: "Erneut würfeln",
    manifest: "Abenteuer-Manifest",
    /** Template: {difficulty} = difficulty label. */
    manifestDifficulty: "Schwierigkeit · {difficulty}",
    /** Template: {seed} = adventure seed code. */
    manifestSeed: "Seed · {seed}",
    trainerProfile: "Trainer-Profil",
    /** Template: {style} = trainer style. */
    styleLine: "Stil · {style}",
    challenge: "Challenge",
    goal: "Ziel",
    /** Template: {n} = team size. */
    teamCompanions: "Team · {n} unbekannte Begleiter",
    yourStarter: "Dein Starter",
    yourRival: "Dein Rivale",
    /** Templates: {name} = rival name, {type} = rival starter type. */
    rivalCounter: "{name} hat einen Starter vom Typ {type} gewählt, um deinen zu kontern.",
    /** Template: {n} = team size. */
    yourTeam: "Dein Team ({n})",
    gymJourney: "Arena-Reise",
    legendaryEncounter: "Legendäre Begegnung",
    /** Templates: {count} = current team size, {max} = team capacity. */
    teamFull: "Das Team ist voll ({count}/{max}). Entferne welche, um neue Pokémon hinzuzufügen.",
    alreadyInTeam: "Alle diese Pokémon sind bereits in deinem Team.",
    /** Templates: {added} = number added, {max} = team capacity. */
    addedFull: "{added} hinzugefügt — das Team ist jetzt voll ({max}/{max}).",
    /** Templates: {added} = number added, {count} = new team size, {max} = capacity. */
    addedToTeam: "{added} zu deinem Team hinzugefügt ({count}/{max}).",
  },

  challengeGenerator: {
    hints: {
      guess: "Namen versteckt — aufdecken zum Prüfen",
      shiny: "Wie viele Begegnungen bis zu einem Shiny?",
    },
    createChallenge: "Challenge erstellen",
    shareChallenge: "Challenge teilen",
    filtersAria: "Filter",
    filtersTitle: "Filter",
    collapseAria: "Filter einklappen",
    collapseTitle: "Filter einklappen",
    difficulty: "Schwierigkeit",
    random: "Zufällig",
    /** Template: {max} = count cap for the current difficulty. */
    countMax: "Anzahl (max. {max})",
    typeFilter: "Typ-Filter",
    regionFilter: "Regions-Filter",
    /** Templates: {revealed} = flipped cards, {total} = total cards. */
    revealedProgress: "Aufgedeckt {revealed} / {total}",
    hideAll: "Alle verbergen",
    revealAll: "Alle aufdecken",
    silhouetteAlt: "Versteckte Pokémon-Silhouette",
    /** Template: {types} = " · "-joined type hint list. */
    typeHint: "Hinweis: {types}",
    whosThat: "Wer ist dieses Pokémon?",
  },

  shinyHunt: {
    shinyTag: "✦ SHINY",
    /** Template: {odds} = odds denominator (localized number). */
    oddsGuaranteed: "1 / {odds} · GARANTIERT",
    /** Template: {odds}. */
    oddsLabel: "CHANCE 1 / {odds}",
    /** Template: {odds}. */
    oddsGuaranteedLower: "1 / {odds} · garantiert",
    /** Template: {odds}. */
    oddsLabelLower: "Chance 1 / {odds}",
    encountersLabel: "Begegnungen",
    /** Template: {name} = Pokémon display name. */
    shinyName: "Shiny {name}",
    foundAfterPre: "Gefunden nach ",
    /** Template: {n} = encounter count (localized number). */
    foundAfterCount: "{n} Begegnungen",
    foundAfterSep: " — ",
    verdicts: {
      absurdlyLucky: "Absurd viel Glück — das ist eine Geschichte zum Erzählen.",
      lucky: "Glück gehabt! Unter der Quote.",
      overOdds: "Über der Quote — aber du hast es geschafft.",
      brutal: "Brutale Jagd. Dieses hat sich sein Funkeln verdient.",
    },
    shareAria: "Teile dein Shiny",
    shareTitle: "Teile dein Shiny",
    newHuntAria: "Starte deine eigene Jagd",
    newHuntTitle: "Starte deine eigene Jagd",
    rendering: "Wird erstellt…",
    /** Template: {name} = wild Pokémon display name. */
    wildAppeared: "Ein wildes {name} erscheint…",
    notShiny: "kein Shiny",
    emptyState: "Das hohe Gras raschelt… starte Begegnungen, um dein Shiny zu jagen.",
    encounter: "Begegnung!",
  },

  favoritesClient: {
    /** navigator.share title for the favorites snapshot link. */
    shareTitle: "Meine Pokémon-Favoriten",
    sharedTitle: "Geteilte Favoriten",
    yourTitle: "Deine Favoriten",
    sharedDesc: "Eine mit dir geteilte Favoriten-Ansicht — schreibgeschützt",
    yourDesc: "Pokémon, die du auf diesem Gerät favorisiert hast",
    /** Template: {count} = number of favorites. */
    slotsUsed: "{count} / 15 Plätze belegt",
    /** Template: {count} = number of favorites; shown when the cap is hit. */
    slotsMax: "{count} / 15 — Maximum erreicht",
    /** Template: {count} = Pokémon in the shared snapshot. */
    sharedCount: "{count} Pokémon in dieser geteilten Ansicht",
    copyLink: "Link kopieren",
    saveToMine: "In meinen Favoriten speichern",
    /** Template: {added} = " (+n)" when the merge added entries, else "". */
    savedViewMine: "Gespeichert{added} — Meine ansehen",
    /** Suffix after the bolded favorites count. */
    favoritedSuffix: " favorisiert",
    clearAll: "Alle entfernen",
    invalidLink: "Dieser Favoriten-Link ist ungültig oder abgelaufen.",
    goToMine: "Zu meinen Favoriten",
    emptyState:
      "Noch keine Favoriten. Würfle ein Pokémon und tippe auf das Herz, um es hier zu speichern.",
    rollPokemon: "Pokémon würfeln",
    /** Template: {name} = Pokémon display name. */
    removeAria: "{name} aus Favoriten entfernen",
    remove: "Entfernen",
    shareFavorites: "Favoriten teilen",
  },

  /* ---------------------------------------------------------------- */
  /*  Component-level UI strings (camelCase, keyed by component)        */
  /* ---------------------------------------------------------------- */

  teamClient: {
    readyTitle: "Dein Pokémon-Team ist bereit",
    readyDesc: "Verwalte deine Truppe — teile sie oder exportiere jedes Set nach Showdown.",
    sharedTitle: "Ein mit dir geteiltes Team",
    linkCopied: "Link kopiert!",
    shareTeam: "Team teilen",
    clearTeam: "Team leeren",
    copyLink: "Link kopieren",
    backToGenerator: "Zurück zum Generator",
    guideTitle: "So funktioniert's",
    guide1T: "Würfeln & hinzufügen",
    guide1D: "Generiere Pokémon in jedem Tool und tippe auf „Zum Team hinzufügen“, um sie hier zu speichern.",
    guide2T: "Verwalte deine Truppe",
    guide2D: "Wähle Pokémon zum Entfernen oder Leeren aus — dein Team fasst bis zu 6.",
    guide3T: "Teilen oder exportieren",
    guide3D: "Kopiere den Team-Link für Freunde oder kopiere jedes Set als Showdown-Text für Kämpfe.",
    /** Segment: followed by the selected count, then selectedSep + team size. */
    selectedPre: "Ausgewählt ",
    /** Segment: between the selected count and the team size. */
    selectedSep: " / ",
    clearSelection: "Auswahl aufheben",
    selectAll: "Alle auswählen",
    remove: "Entfernen",
    /** Template: {count} = number of selected Pokémon. */
    removeCount: "Entfernen ({count})",
    empty: "Noch keine Pokémon. Generiere welche und tippe auf „Zum Team hinzufügen“.",
  },

  teamTray: {
    /** Template: {count} = current team size, {max} = max team size. */
    ariaLabel: "Dein Team ({count}/{max})",
    title: "Dein Team",
    heading: "Dein Team",
    empty: "Noch keine Pokémon ausgewählt.",
    buildTeam: "Team bauen",
    openTeam: "Team öffnen",
  },

  teamGenerator: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "Das Team ist voll ({count}/{max}). Entferne zuerst welche.",
    alreadyInTeam: "Alle gewürfelten Pokémon sind bereits in deinem Team.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} zu deinem Team hinzugefügt.",
    readyTitle: "Dein Zufalls-Team ist bereit",
    readyDesc:
      "Würfle eine gefilterte Truppe — sperre Favoriten, würfle den Rest neu, dann füge sie deinem Team hinzu oder exportiere nach Showdown.",
    rolling: "Würfle…",
    roll: "Würfeln",
    /** Template: {count} = unlocked slots that will be re-rolled. */
    rollCount: "Würfeln ({count})",
    allLockedTitle: "Alle Karten sind gesperrt — entsperre eine zum Würfeln",
    filtersAria: "Filter",
    collapseFilters: "Filter einklappen",
    guideTitle: "So funktioniert's",
    guide1T: "Truppe würfeln",
    guide1D: "Ein Tippen zieht ein frisches Zufalls-Team — sperre Karten, die dir gefallen, und würfle nur den Rest neu.",
    guide2T: "Pool filtern",
    guide2D: "Grenze vor dem Würfeln nach Generation, Region, Typ oder Team-Größe ein.",
    guide3T: "Teilen, speichern oder exportieren",
    guide3D: "Kopiere die Truppe als Showdown-Sets, wende eine Karte, um ihr Set zu sehen, teile den Link oder tippe auf „Zum Team hinzufügen“, um Favoriten zu behalten.",
    generationLabel: "Generation",
    regionLabel: "Region",
    typeLabel: "Typ",
    teamSizeLabel: "Team-Größe",
    optionRandom: "Zufällig",
    addAllToTeam: "Alle zum Team hinzufügen",
  },

  teamCoachUi: {
    /** Template: {max} = most picks the user can keep (count - 1). */
    keepLimit: "Behalte höchstens {max} — lass mindestens 1 Platz für den Coach frei.",
    generateFailed: "Generierung fehlgeschlagen — versuche es erneut.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} zu deinem Team hinzugefügt.",
    alreadyInTeam: "Diese Pokémon sind bereits in deinem Team.",
    readyTitle: "Dein balanciertes Team ist bereit",
    readyDesc:
      "Sperre die Pokémon, die du bereits gewählt hast, und fülle den Rest mit Typ-Abdeckung — dann füge sie deinem Team hinzu oder exportiere nach Showdown.",
    rerollUnlocked: "Entsperrte neu würfeln",
    generateTeam: "Team generieren",
    viewMyTeam: "Mein Team ansehen",
    guideTitle: "So funktioniert's",
    guide1T: "Picks hinzufügen (optional)",
    guide1D: "Suche oder importiere aus Favoriten / deinem Team — oder überspringe es und lass den Coach alle 6 würfeln.",
    guide2T: "Team generieren",
    guide2D: "Der Team-Coach füllt das Team mit balancierten Typen und Rollen.",
    guide3T: "Sperren & neu würfeln",
    guide3D: "Sperre Pokémon, die dir gefallen, würfle den Rest neu, dann füge alle hinzu, teile den Link oder kopiere die Sets nach Showdown.",
    yourTeamHeading: "Dein Team",
    /** Template: {kept} = locked picks, {count} = target team size. */
    lockedTarget: "{kept} gesperrt · Ziel {count}",
    searchPlaceholder: "Pokémon suchen (optional)…",
    importFavorites: "Favoriten importieren",
    importTeam: "Team importieren",
    filtersAria: "Filter",
    collapseFilters: "Filter einklappen",
    teamSizeLabel: "Team-Größe",
    generationLabel: "Generation",
    regionLabel: "Region",
    typeLabel: "Typ",
    optionAny: "Beliebig",
    allLockedHint: "Alles ist gesperrt — entsperre eine Karte zum Neu-Würfeln.",
    /** Template: {count} = unlocked slots. */
    rerollHint: "Würfelt {count} entsperrte Plätze neu",
    /** Template: {count} = slots the coach will fill. */
    fillHint: "Füllt {count} Plätze mit balancierter Abdeckung",
    fullRollHint: "Würfelt ein komplettes balanciertes Team",
    emptyHint:
      "Füge einen Pick hinzu oder generiere direkt ein komplettes Team — der Coach balanciert Typen und Rollen.",
    pickerFavTitle: "Aus Favoriten",
    pickerTeamTitle: "Aus deinem Team",
    favEmpty: "Noch keine Favoriten — tippe zuerst in einem Generator auf das Herz.",
    teamEmpty: "Dein Team ist leer — füge zuerst in einem Generator Pokémon hinzu.",
    addAllToTeam: "Alle zum Team hinzufügen",
  },

  teamChallengeUi: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "Das Team ist voll ({count}/{max}). Entferne zuerst welche.",
    alreadyInTeam: "Alle diese Pokémon sind bereits in deinem Team.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} zu deinem Team hinzugefügt.",
    idleTitle: "Bereit für eine Team-Challenge?",
    idleDesc:
      "Klicke unten, um ein zufälliges 6-Pokémon-Challenge-Team zu generieren — dann würfle deine eigene Truppe und sieh, wessen Basiswert-Summe höher ist.",
    generateChallenge: "Challenge generieren",
    howToTitle: "So nutzt du die Team-Challenge",
    howTo1T: "1. Das Challenge-Team.",
    howTo1D:
      "Diese Seite zeigt immer eine geseedete 6-Pokémon-Truppe — jeder, der denselben Link öffnet, sieht exakt dieselbe Aufstellung (das ist die „Challenge“).",
    howTo2T: "2. Würfle deins.",
    /** Segment: before the howTo2Em link-styled term. */
    howTo2S1: "Tippe auf",
    howTo2Em: "Mein Team würfeln",
    /** Segment: after the howTo2Em term. */
    howTo2S2:
      ", um deine eigene 6-Pokémon-Truppe zu generieren — ein Wurf pro Challenge, also kein Wiederholen, bis du gewinnst.",
    howTo3T: "3. Vergleichen.",
    howTo3D:
      "Beide Teams werden mit ihrer Basiswert-Summe (BST) gezeigt — die höhere Summe gewinnt, Unentschieden ist möglich.",
    howTo4T: "4. Teilen.",
    howTo4Em: "Freund herausfordern",
    howTo4D:
      "kopiert einen Link mit demselben Challenge-Team, damit ein Freund die identische Aufstellung zum Schlagen bekommt.",
    howTo5T: "5. Ergebnis exportieren.",
    howTo5Em1: "Ergebniskarte teilen",
    /** Segment: between howTo5Em1 and howTo5Em2. */
    howTo5S: "oder",
    howTo5Em2: "Karte herunterladen",
    howTo5D:
      "erstellt ein Bild des Duells (mit QR-Code) — ideal zum Posten in deiner Community.",
    howTo6T: "6. Starte deine eigene.",
    howTo6Em: "Eigene Challenge starten",
    howTo6D:
      "macht dich zum Gastgeber — du würfelst das Challenge-Team neu und teilst es mit einem Freund, statt erneut gegen deine eigene Truppe anzutreten.",
    ownerHeading: "Dein Challenge-Team ist bereit",
    yoursHeading: "Hier ist deine Chance — versuche, es zu schlagen!",
    takeHeading: "Nimm die Challenge an — würfle dein Team",
    ownerDesc:
      "Teile den Link — ein Freund würfelt sein eigenes Team, um dieses zu schlagen.",
    yoursDesc:
      "Ein Wurf pro Challenge — starte deine eigene Challenge zum Teilen mit einem Freund.",
    takeDesc:
      "Du bekommst 6 zufällige Pokémon — eine höhere Basiswert-Summe als das Challenge-Team gewinnt.",
    rerollChallenge: "Challenge neu würfeln",
    startOwn: "Eigene Challenge starten",
    rollMine: "Mein Team würfeln",
    linkCopied: "Link kopiert!",
    challengeFriend: "Freund herausfordern",
    step1T: "Team würfeln",
    step1D: "Das ist die Aufstellung, mit der du herausforderst.",
    step2T: "Link teilen",
    step2D: "Ein Freund öffnet exakt dasselbe Team.",
    step3T: "Sie würfeln & vergleichen",
    step3D: "Die BST-Summe entscheidet, wer gewinnt — exportiere eines der Teams nach Showdown.",
    ownerTeamLabel: "🫵 Dein Challenge-Team",
    challengeLabel: "🏳️ Die Challenge",
    yourTeamLabel: "Dein Team",
    theirTeamLabel: "Ihr Team",
    theChallenge: "Die Challenge",
    youWin: "Du gewinnst!",
    theirWin: "Ihr Team gewinnt!",
    challengeWins: "Die Challenge gewinnt!",
    tie: "Unentschieden!",
    higherWins: "Die höhere Basiswert-Summe gewinnt.",
    rendering: "Wird erstellt…",
    shareResult: "Ergebnis teilen",
    downloadCard: "Karte herunterladen",
    addAllToTeam: "Alle zum Team hinzufügen",
  },

  wheelGenerator: {
    welcome: "Willkommen, Trainer!",
    intro:
      "Bis zu 6 Spieler drehen abwechselnd — jeder Treffer landet unten in den Ergebnissen.",
    roundComplete: "Runde komplett — sieh dir die Ergebnisse unten an!",
    spinWheel: "Rad drehen",
    /** Template: {current} = current player number, {count} = total players. */
    playerTurn: "Spieler {current} von {count} — dreh das Rad",
    spinning: "Dreht…",
    roundCompleteButton: "Runde komplett",
    spinButton: "Drehen!",
    newRound: "Neue Runde",
    playersLabel: "Spieler",
    /** Template: {current} = spins so far, {count} = total players. */
    roundResults: "Rundenergebnisse · {current}/{count}",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    winnerLine: "👑 Spieler {player} gewinnt mit {name} ({bst} BST)!",
    /** Template: {n} = player number still to spin. */
    stillToSpin: "Spieler {n} muss noch drehen",
    /** Template: {n} = player number. */
    playerLabel: "Spieler {n}",
    roundLeader: "Rundenführer",
    shareResults: "Ergebnisse teilen",
    addAllToTeam: "Alle zum Team hinzufügen",
    /** Template: {count} = number of Pokémon added to the team. */
    addedNotice: "{count} zu deinem Team hinzugefügt.",
    alreadyInTeam: "Alle gelandeten Pokémon sind bereits in deinem Team.",
    // Shared round result view (result=1 link).
    sharedTitle: "Ergebnis der Glücksrad-Runde",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    sharedWinner: "Spieler {player} hat mit {name} ({bst} BST) gewonnen!",
    /** Template: {count} = number of players in the shared round. */
    sharedSubtitle: "Eine {count}-Spieler-Runde, geteilt auf PokeRoll",
    spinYourOwn: "Dreh dein eigenes Rad",
    loadingResults: "Lade Ergebnisse…",
  },

  fusionGenerator: {
    welcome: "Willkommen, Trainer!",
    intro: "Fusioniere zwei zufällige Pokémon zu einem neuen Hybrid — tippe auf „Zum Team hinzufügen“, um ihn zu behalten.",
    yourFusion: "Deine Fusion ist…",
  },

  /* ---------------------------------------------------------------- */
  /*  Page-level metadata + copy (app/[locale]/…)                      */
  /*  English values are verbatim from the pre-i18n pages; dynamic     */
  /*  segments use {placeholders} substituted with .replace() chains.  */
  /* ---------------------------------------------------------------- */
  pages: {
    home: {
      metaTitle: "Zufalls-Pokémon-Generator — Team, Typ & Glücksrad | PokeRoll",
      metaDescription:
        "PokeRoll ist ein kostenloser Zufalls-Pokémon-Generator mit vielen Tools — baue ein Zufalls-Team, stelle dich Challenges oder würfle ein komplettes Abenteuer, und kopiere jede Karte nach Showdown.",
      keywords: [
        "zufalls pokémon generator",
        "pokemon generator zufall",
        "random pokemon generator",
        "pokemon team generator",
        "pokémon abenteuer",
      ],
      /** Template: {date} = last-updated ISO date. */
      updatedBy: "Vom PokeRoll-Team · Zuletzt aktualisiert: {date}",
      // FAQ answers interleave text with links: s1/l1/s2/l2/s3 are the
      // segments around up to two links, aText the plain JSON-LD version.
      faq1: {
        q: "Wie viele Pokémon kann dieser Generator würfeln?",
        s1: "Er kann jede der über 1.000 Pokémon-Arten aus allen 9 Generationen und 18 Typen würfeln. Jede Karte kommt mit vollen Werten, Fähigkeiten und Artwork, und die Daten stammen aus der öffentlichen ",
        l1: "PokéAPI",
        s2: ".",
        aText:
          "Er kann jede der über 1.000 Pokémon-Arten aus allen 9 Generationen und 18 Typen würfeln. Jede Karte kommt mit vollen Werten, Fähigkeiten und Artwork, und die Daten stammen aus der öffentlichen PokéAPI (pokeapi.co).",
      },
      faq2: {
        q: "Wie hoch ist die Chance auf ein Shiny-Pokémon?",
        s1: "Unsere Shiny-Würfe spiegeln die modernen Spiele: eine Basis-Chance von 1 zu 4.096. Das ist die offizielle Rate seit Generation 6 — ältere Spiele nutzten 1 zu 8.192 — wie auf ",
        l1: "Bulbapedia",
        s2: " dokumentiert. Versuch dein Glück in der ",
        l2: "Shiny-Jagd",
        s3: ".",
        aText:
          "Unsere Shiny-Würfe spiegeln die modernen Spiele: eine Basis-Chance von 1 zu 4.096. Das ist die offizielle Rate seit Generation 6 — ältere Spiele nutzten 1 zu 8.192 — wie auf Bulbapedia dokumentiert. Versuch dein Glück in der Shiny-Jagd.",
      },
      faq3: {
        q: "Kann ich ein komplettes Team aus sechs Pokémon auf einmal generieren?",
        s1: "Ja — der ",
        l1: "Zufalls-Team-Generator",
        s2: " würfelt mit einem Tippen ein fertiges Team aus 6 Pokémon, und der ",
        l2: "Team-Coach",
        s3: " balanciert die 6 Plätze nach Typ-Abdeckung. Jedes Set lässt sich direkt nach Pokémon Showdown kopieren.",
        aText:
          "Ja — der Zufalls-Team-Generator würfelt mit einem Tippen ein fertiges Team aus 6 Pokémon, und der Team-Coach balanciert die 6 Plätze nach Typ-Abdeckung. Jedes Set lässt sich direkt nach Pokémon Showdown kopieren.",
      },
      faq4: {
        q: "Ist PokeRoll kostenlos?",
        s1: "Ja, jedes Tool auf PokeRoll ist komplett kostenlos — alle 18+ Generatoren, Challenges und Team-Tools laufen sofort in deinem Browser, ohne Anmeldung, ohne Download und ohne Limit, wie oft du würfelst.",
      },
      faq5: {
        q: "Woher stammen die Pokémon-Daten auf dieser Seite?",
        s1: "Alle Namen, Typen, Werte, Fähigkeiten und Sprites kommen von ",
        l1: "PokéAPI",
        s2: ", der offenen Community-Pokémon-Datenbank. Sie deckt über 1.000 Arten aus 9 Generationen ab, sodass Würfe immer den echten Pokédex widerspiegeln.",
        aText:
          "Alle Namen, Typen, Werte, Fähigkeiten und Sprites kommen von PokéAPI (pokeapi.co), der offenen Community-Pokémon-Datenbank. Sie deckt über 1.000 Arten aus 9 Generationen ab, sodass Würfe immer den echten Pokédex widerspiegeln.",
      },
      faq6: {
        q: "Steht PokeRoll in Verbindung mit Nintendo oder The Pokémon Company?",
        s1: "Nein. PokeRoll ist ein unabhängiges Fan-Projekt und steht in keiner Verbindung zu Nintendo, Game Freak oder The Pokémon Company und wird von diesen weder unterstützt noch gesponsert. Den vollständigen Hinweis findest du in unserem ",
        l1: "Haftungsausschluss",
        s2: ".",
        aText:
          "Nein. PokeRoll ist ein unabhängiges Fan-Projekt und steht in keiner Verbindung zu Nintendo, Game Freak oder The Pokémon Company und wird von diesen weder unterstützt noch gesponsert. Den vollständigen Hinweis findest du in unserem Haftungsausschluss.",
      },
    },

    randomGenerator: {
      metaTitle: "Zufalls-Pokémon-Generator | PokeRoll",
      /** Template: {name} = shared Pokémon display name. */
      sharedTitle: "{name} — Zufalls-Pokémon-Generator",
      metaDescription:
        "Würfle ein Zufalls-Pokémon mit einem Tippen — Name, Typ, Fähigkeit, Basiswerte und Artwork inklusive. Wende die Karte für ein kopierfertiges Showdown-Set. Kostenloses Fan-Tool.",
      /** Template: {name}; used when the name is ≤16 chars (SEO length window). */
      sharedDescLong:
        "Ich habe {name} auf PokeRoll gewürfelt — wende die Karte für sein kopierfertiges Showdown-Set, oder würfle mit einem Tippen dein eigenes Zufalls-Pokémon. Kostenloses Fan-Tool.",
      /** Template: {name}; used for longer names. */
      sharedDescShort:
        "Ich habe {name} auf PokeRoll gewürfelt — wende die Karte für sein kopierfertiges Showdown-Set, oder würfle selbst eines. Kostenloses Fan-Tool.",
      /** Template: {name}. */
      ogSharedTitle: "{name} — Zufalls-Pokémon",
      /** Template: {name}. */
      ogSharedDesc: "Ich habe {name} auf PokeRoll gewürfelt. Was bekommst du?",
      keywords: [
        "random pokemon generator",
        "zufalls pokémon generator",
        "pokemon generator zufall",
        "zufälliges pokemon generieren",
        "random pokemon",
      ],
      headerTitle: "Zufalls-Pokémon-Generator",
      headerDesc:
        "Würfle ein Zufalls-Pokémon mit einem Tippen — jeder Wurf kommt mit Name, Typ, Fähigkeit, Werten und offiziellem Sprite.",
      faqs: [
        {
          q: "Wie funktioniert der Zufalls-Pokémon-Generator?",
          a: "Jeder Wurf wählt zufällig ein Pokémon aus dem kompletten Nationalen Pokédex — über 1.000 Arten aus allen neun Generationen — und zeigt Name, Typen, Fähigkeit, Basiswerte, Größe, Gewicht und offizielles Artwork.",
        },
        {
          q: "Kann ich ein bestimmtes Ergebnis teilen oder reproduzieren?",
          a: "Ja. Nutze den Teilen-Button auf der Karte — der Link enthält das exakte Pokémon, also sieht jeder, der ihn öffnet, denselben Wurf. Du kannst die Karte auch als Bild herunterladen.",
        },
        {
          q: "Kann ich die Ergebnisse eingrenzen?",
          a: "Öffne die erweiterten Filter, um innerhalb einer bestimmten Generation, Region, eines Typs oder einer Kategorie zu würfeln — oder nutze die unten verlinkten Generator-Seiten für Gen, Region und Typ.",
        },
        {
          q: "Woher kommen die Pokémon-Daten?",
          a: "Alle Arten-Daten stammen von PokéAPI und sind lokal mit der Seite gebündelt, sodass jeder Wurf sofort da ist.",
        },
      ],
      guide: {
        introTitle: "Warum ein Zufalls-Pokémon würfeln?",
        intro:
          "Ein Zufallswurf ist der schnellste Weg raus aus dem „immer dieselben sechs Favoriten“-Denken. Ein Tippen gibt dir eine Art, die du nicht gewählt hast — mit Werten, Typen und Artwork — und schon tüftelst du an einem Moveset für ein Pokémon, das du selbst nie genommen hättest. Nutze es als Draft-Pick, als Zeichenvorlage, als Nuzlocke-Begegnungstabelle oder als ersten Slot eines brandneuen Teams.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Challenge-Starter",
            d: "Würfle einmal und mache das Ergebnis zum Starter deines nächsten Durchlaufs — egal, was kommt. Dann baue den Run darum herum.",
          },
          {
            t: "Draft & Duell",
            d: "Würfelt abwechselnd mit einem Freund — jeder behält, was er würfelt, sechs Würfe pro Person, dann treten die beiden Truppen auf Showdown gegeneinander an.",
          },
          {
            t: "Kunst- & Schreib-Prompt",
            d: "Nutze den Wurf als kreatives Briefing: Zeichne das Pokémon in deinem Stil oder schreibe den Trainer, der es bei sich tragen würde.",
          },
          {
            t: "Team-Grundstein",
            d: "Gefällt dir dein Wurf? Tippe auf Add to Team und würfle weiter — sechs Tipps später hast du eine Truppe, die sich selbst gewählt hat.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Zufall funktioniert am besten mit einer Regel. Nur Kanto? Öffne die Filter und sperre die Generation. Keine Legendären? Schließe die Kategorie vorher aus. Ein einziger Typ für einen Theme-Run? Sperre ihn vor dem ersten Tippen — die Filter sind das Regelbuch, der Wurf ist der Würfel.",
          "Spielst du mit anderen? Sprecht die Regeln laut ab, bevor jemand würfelt: wie viele Neuwürfe jeder bekommt (einer ist ein guter Standard), ob alternative Formen zählen und was bei einem Doppelgänger passiert.",
          "Der Spaß liegt darin, sich auf das Ergebnis festzulegen — ein Wurf, den du endlos rückgängig machen kannst, ist nur Stöbern mit Extra-Schritten.",
        ],
        sampleTitle: "Ein Beispielwurf",
        sample:
          "Angenommen, die Würfel geben dir Aromatisse — ein reines Fee-Pokémon mit 101 KP und 29 Initiative, das du nie in ein ernstes Team packen würdest. Jetzt die interessante Frage: Bizarro-Raum-Anker? Aromakur-Support? Plötzlich liest du eine Moveset-Seite für ein Pokémon, an dem du ein Jahrzehnt vorbeigelaufen bist. Genau darum geht es beim Wurf.",
        linksTitle: "Lust auf einen kleineren Pool?",
        linksTextBefore: "Würfle stattdessen eine einzelne Scheibe des Pokédex — probiere den",
        links: [
          { label: "Gen-1-Generator", href: "/gen/1" },
          { label: "Drachen-Typ-Generator", href: "/type/dragon" },
          { label: "Legendären-Generator", href: "/legendary" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— dieselben Würfel, kleinerer Teich.",
      },
    },

    type: {
      /** Template: {type} = localized type display name. */
      metaTitle: "Zufalls-Pokémon-Generator Typ {type} | PokeRoll",
      /** Template: {type}. */
      metaDescription:
        "Generiere sofort ein Zufalls-Pokémon vom Typ {type}: Name, Fähigkeiten, Basiswerte, Generation und Sprite — bereit zum Kopieren nach Showdown. Kostenloses Fan-Tool.",
      /** Templates: {slug} = raw English type slug (lowercase). */
      keywords: [
        "random {slug} pokemon generator",
        "zufalls pokémon generator typ {slug}",
        "{slug} pokemon generator",
      ],
      /** Template: {type}. */
      breadcrumbType: "Pokémon vom Typ {type}",
      /** Template: {type}. */
      headerTitle: "Zufalls-Pokémon-Generator Typ {type}",
      /** Template: {type}. */
      headerDesc:
        "Du suchst ein Zufalls-Pokémon vom Typ {type}? Hier ist eins — tippe auf „Erneut generieren“ für ein weiteres.",
      /** Template: {type}. */
      introS1: "Pokémon vom Typ {type} tauchten erstmals in ",
      introS2: " auf, zusammen mit der ",
      /** Template: {region} = region display name. */
      introRegionLink: "Region {region}",
      introS3: ". Würfle oben eines, durchstöbere alle 18 Typen mit dem ",
      introTypeLink: "Typ-Generator",
      introS4: ", oder bleib ",
      introRandomLink: "komplett zufällig",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Region {region} durchstöbern",
      linkTitleType: "Typ-Generator",
      linkTitleRandom: "Zufalls-Pokémon-Generator",
      guide: {
        introTitle: "Warum Pokémon vom Typ {type} würfeln?",
        intro:
          "Der Pool vom Typ {type} hält alles bereit, von Klassikern der ersten Stunde bis zu den neuesten Veröffentlichungen — und diese Seite gibt dir eines per Zufall, mit Werten, Fähigkeit und Artwork. Ein Tippen, ein {type}, kein Durchscrollen des Dex.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Mono-{type}-Run",
            d: "Würfle eines und es verankert deine Mono-{type}-Challenge — der erste Slot steht fest, fünf fehlen noch.",
          },
          {
            t: "Typ-Studie",
            d: "Würfle dich durch den Pool und notiere die Wertemuster — Pokémon vom Typ {type} teilen eine Designphilosophie, die es zu lernen lohnt.",
          },
          {
            t: "Draft-Bedingung",
            d: "Alle draften nur aus dem {type}-Pool — gleicher Typ, völlig unterschiedliche Truppen.",
          },
          {
            t: "Kunst-Prompt",
            d: "Zeichne den heutigen {type}-Wurf — tägliche Skizzen fallen leichter, wenn die Würfel das Motiv wählen.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Ein Mono-{type}-Run steht und fällt mit den gemeinsamen Schwächen — prüfe, was {type} resistiert und fürchtet, bevor du dich festlegst.",
          "„Der erste Wurf zählt“ ist die sauberste Regel; ein angekündigter Neuwurf pro Session ist die nachsichtige. Entscheide dich, bevor du tippst.",
          "Doppeltypen zählen: Trägt es {type}, ist es im Pool — Hybriden sind das Überlebensrezept von Mono-Runs.",
        ],
        sampleTitle: "Ein Beispielwurf",
        sample:
          "Ein Tippen kann dir einen {type}-Veteranen geben, den du schon dutzendmal trainiert hast — oder ein {type}, das du buchstäblich nie benutzt hast, und genau das ist das Interessante. Der Pool entscheidet.",
        linksTitle: "Mehr Würfel, mehr Themen?",
        linksTextBefore: "Probier den",
        links: [
          { label: "Typ-Generator", href: "/type" },
          { label: "Zufalls-Team-Generator", href: "/team/random" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— und komm zurück, wenn das Thema wieder nach {type} ruft.",
      },
    },

    gen: {
      /** Template: {gen} = generation number. */
      metaTitle: "Zufalls-Pokémon-Generator Generation {gen} | PokeRoll",
      /** Templates: {gen}, {region} = raw region slug (lowercase, verbatim SEO copy). */
      metaDescription:
        "Generiere ein Zufalls-Pokémon aus Generation {gen} aus der Region {region}: Name, Typ, Fähigkeit, Basiswerte und Sprite — kopiere es nach Showdown. Fan-Tool.",
      /** Templates: {gen}. */
      keywords: [
        "random pokemon generator gen {gen}",
        "zufalls pokémon generator generation {gen}",
        "pokemon generator gen {gen}",
      ],
      /** Template: {genLabel} = localized "Generation N". */
      headerTitle: "Zufalls-Pokémon-Generator {genLabel}",
      /** Template: {genLabel}. */
      headerDesc:
        "{genLabel} brachte viele Fan-Lieblinge hervor. Hier ist ein zufälliges — tippe auf „Erneut generieren“ für mehr.",
      introRegionPre: " führte die ",
      /** Template: {region} = region display name. */
      introRegionLink: "Region {region}",
      /** Template: {game} = game titles. */
      introGame: " und Pokémon {game}",
      introS3: " ein. Würfle oben eines, stöbere nach ",
      introTypeLink: "Typ",
      introS4: ", oder bleib ",
      introRandomLink: "komplett zufällig",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Region {region} durchstöbern",
      linkTitleType: "Typ-Generator",
      linkTitleRandom: "Zufalls-Pokémon-Generator",
      guide: {
        introTitle: "Warum Pokémon der {genLabel} würfeln?",
        intro:
          "{genLabel} ist eine eigene Ära — eigener Dex, eigene Designsprache, eigene Nostalgie. Diese Seite würfelt nur innerhalb der {genLabel}: Jedes Tippen ist ein Wiedersehen mit dieser Generation, von ihren Maskottchen bis zum vergessendsten Routen-Futter.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Nostalgie-Run",
            d: "Würfle eines und es verankert einen Nur-{genLabel}-Rerun — die Würfel wählen, du baust den Run drumherum.",
          },
          {
            t: "Dex-Quiz",
            d: "Würfle und nenne Typen und Entwicklungslinie des Pokémon aus dem Gedächtnis, bevor du die Karte prüfst.",
          },
          {
            t: "Mono-Gen-Draft",
            d: "Jeder Spieler draftet nur aus der {genLabel} — eine Generation, sechs Picks, endlose Debatten über ihr Meta.",
          },
          {
            t: "Ära-Debatte",
            d: "Würfle fünf und bewerte sie — ist die {genLabel} heimlich die beste Generation? Die Würfel liefern die Beweise.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Leg dich auf die Ära fest: In einem Nur-{genLabel}-Run muss jeder Slot aus diesem Dex kommen — genau da liegt die Challenge.",
          "Der erste Wurf zählt; der Charme einer einzelnen Generation liegt darin, ihre Sonderlinge zusammen mit ihren Stars zu nehmen.",
          "Formen aus späteren Generationen zählen nicht, es sei denn, eure Hausregeln sagen es — entscheide vor dem Run, nicht nach dem Wurf.",
        ],
        sampleTitle: "Ein Beispielwurf",
        sample:
          "Ein Tippen und du starrst einen {genLabel}-Stammgast an, den du komplett vergessen hattest — sein Ruf, seine Route, der NPC, der es gegen dich eingesetzt hat. Generationen sind nicht nur Listen; sie sind Erinnerungen mit Werten.",
        linksTitle: "Mehr Wege zurück?",
        linksTextBefore: "Durchstöbere die",
        links: [
          { label: "Region {region}", href: "/by/{regionSlug}" },
          { label: "Typ-Generator", href: "/type" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— oder würfle komplett zufällig über alle neun Generationen.",
      },
    },

    region: {
      // Third-version game titles that share these regions (same in all 5 locales).
      gameHoenn: "Ruby, Sapphire & Emerald",
      gameSinnoh: "Diamond, Pearl & Platinum",
      /** Templates: {region} = region display name, {gameDesc} = game titles. */
      metaTitle: "Zufalls-Pokémon-Generator {region} — {gameDesc}",
      /** Template: {region}. */
      descStart: "Generiere ein Zufalls-Pokémon aus {region}",
      descFill: " sofort",
      /** Template: {gameDesc}. */
      descFromGame: " aus Pokémon {gameDesc}",
      descEnd:
        ": Name, Typ, Fähigkeit, Basiswerte und Sprite — kopiere es nach Showdown. Kostenloses Fan-Tool.",
      /** Templates: {slug} = raw region slug; REGION_EXTRA_KEYWORDS (lib/seo.ts) are appended. */
      keywords: ["random {slug} pokemon generator", "pokemon {slug}"],
      /** Template: {slug}; used when a region has no REGION_EXTRA_KEYWORDS entry. */
      keywordFallback: "zufalls pokemon generator {slug}",
      /** Template: {region}. */
      breadcrumbRegion: "Pokémon aus {region}",
      /** Template: {region}. */
      headerTitle: "Zufalls-Pokémon-Generator {region}",
      /** Template: {region}. */
      headerDescStart: "Entdecke die Pokémon von {region}",
      /** Template: {game} = game titles. */
      headerDescGame: ", bekannt aus Pokémon {game}",
      headerDescEnd: ". Hier ist eins für dich — tippe auf „Erneut generieren“ für ein weiteres.",
      /** Template: {region}. */
      introS1: "{region} ist die Heimat des ",
      /** Template: {genLabel} = localized "Generation N". */
      introGenLink: "Pokédex der {genLabel}",
      /** Template: {game}. */
      introGame: " und der Spiele Pokémon {game}",
      introS2: ". Würfle oben eines, oder probiere stattdessen den ",
      introRandomLink: "komplett zufälligen Generator",
      introS3: ".",
      linkTitleRandom: "Zufalls-Pokémon-Generator",
      guide: {
        introTitle: "Warum Pokémon aus {region} würfeln?",
        intro:
          "{region} ist mehr als eine Karte — es ist der Dex von Pokémon {game}, mit eigenen Startern, Legenden und Routen-Stammgästen. Diese Seite würfelt nur innerhalb von {region}: ein Tippen, ein Einheimisches, direkt aus den Spielen, die es berühmt gemacht haben.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Heimkehr-Run",
            d: "Würfle eines und es verankert einen Nur-{region}-Rerun — baue das Team, das der Dex der Region erlaubt.",
          },
          {
            t: "Lokal-Dex-Quiz",
            d: "Würfle und verorte das Pokémon auf der Karte: welche Route, welche Arena, welche Edition?",
          },
          {
            t: "Regional-Draft",
            d: "Jeder Spieler draftet sechs nur aus {region} — eine Region, sehr unterschiedliche Truppen.",
          },
          {
            t: "Editions-Debatte",
            d: "Würfle fünf und beurteile sie — hält {region} heute noch stand, oder spricht da die Nostalgie?",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Regionale Runs funktionieren, weil der Pool geschlossen ist: Was nicht im {region}-Dex steht, kommt nicht ins Team.",
          "Der erste Wurf zählt — die Region gibt, das Team passt sich an. Ein angekündigter Neuwurf pro Session, wenn eure Gruppe weich ist.",
          "Entscheide früh, ob Post-Game- und DLC-Zugänge als {region}-Einheimische zählen — Hausregeln verhindern Streit um Routenfragen.",
        ],
        sampleTitle: "Ein Beispielwurf",
        sample:
          "Ein Tippen und da ist ein Gesicht aus Pokémon {game}, an das du seit Jahren nicht gedacht hast — sofort spielt das Routen-Thema in deinem Kopf. Regionen sind keine Pools; sie sind Orte.",
        linksTitle: "Weiter stöbern?",
        linksTextBefore: "Probier den",
        links: [
          { label: "Pokédex der {genLabel}", href: "/gen/{gen}" },
          { label: "Typ-Generator", href: "/type" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— oder würfle komplett zufällig über alle Regionen.",
      },
    },

    variants: {
      type: {
        title: "Zufalls-Pokémon-Typ-Generator | PokeRoll",
        description:
          "Erhalte sofort einen zufälligen Pokémon-Typ und ein passendes Pokémon — Feuer, Wasser, Elektro und alle 18 Typen. Würfle erneut oder kopiere dein Ergebnis nach Showdown.",
        keywords: [
          "zufalls pokemon typ generator",
          "pokemon typ generator",
          "random pokemon type generator",
        ],
        guide: {
          introTitle: "Warum einen zufälligen Typ würfeln?",
          intro:
            "Achtzehn Typen, ein Tippen. Ein zufälliger Typ ist der schnellste Weg zu einem Thema: Mono-Typ-Runs, Draft-Bedingungen, Quiz-Kategorien — die Würfel wählen, du legst dich fest.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Mono-Typ-Entscheider",
              d: "Würfle einmal und das ist der Typ deines nächsten Mono-Runs — kein Lobbyieren für einen Neuwurf, nur weil du Drache wolltest.",
            },
            {
              t: "Draft-Bedingung",
              d: "Jeder Spieler würfelt vor dem Draft einen Typ — deine ganze Truppe muss ihn tragen.",
            },
            {
              t: "Themen-Challenge",
              d: "Würfle einen Typ und baue dann ein Team, das seine Schwächen abdeckt, ohne sie zu teilen.",
            },
            {
              t: "Lerne die Tabelle",
              d: "Teste dich zu den Resistenzen des gewürfelten Typs, bevor du nachschaust — die Tabelle bleibt schneller hängen, wenn sie ein Spiel ist.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Der Typ-Wurf funktioniert nur als Verbindlichkeit: Entscheide vorher, dass das erste Ergebnis zählt. Ein Typ, den du neu würfeln kannst, ist nur ein Vorschlag.",
            "Spielst du mit anderen? Alle würfeln offen, Doppelte bekommen einen Neuwurf, und das war's — die Einschränkung ist der Spaß.",
            "Kombiniere den Wurf mit den Filtern der anderen Generatoren: Sperre dort den Typ und die Würfel bleiben die ganze Session in deinem Thema.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Das Rad sagt Gestein. Plötzlich planst du um eine gemeinsame Wasser- und Boden-Schwäche herum, hast Sandsturm-Nutzer im Blick und erinnerst dich, dass Gestein selbst vier Resistenzen hat. Ein Tippen, und der heutige Run hat eine Persönlichkeit.",
          linksTitle: "Lust, tiefer zu gehen?",
          linksTextBefore: "Durchstöbere einen bestimmten Typ wie",
          links: [
            { label: "Drache", href: "/type/dragon" },
            { label: "Feuer", href: "/type/fire" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— oder nimm das Ergebnis direkt mit in den Team-Generator.",
        },
      },
      ability: {
        title: "Zufalls-Pokémon-Fähigkeiten-Generator | PokeRoll",
        description:
          "Würfle eine zufällige Pokémon-Fähigkeit wie Static oder Blaze und sieh ein Pokémon, das sie hat — prüfe seine vollen Werte und Typen, dann kopiere das Set nach Showdown.",
        keywords: [
          "pokemon fähigkeiten generator",
          "zufalls pokemon fähigkeiten generator",
          "zufällige pokemon fähigkeit generieren",
        ],
        guide: {
          introTitle: "Warum eine zufällige Fähigkeit würfeln?",
          intro:
            "Fähigkeiten entscheiden, wie ein Pokémon wirklich spielt — und die meisten von uns kennen nur die berühmten zwanzig. Würfle eine per Zufall, lerne ein Pokémon kennen, das sie trägt, und entdecke, was der lange Schweif der Fähigkeiten-Liste draufhat.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Build-around-Prompt",
              d: "Würfle eine Fähigkeit und skizziere ein Set, das sie ausnutzt — je seltsamer die Fähigkeit, desto besser die Übung.",
            },
            {
              t: "Draft-Bedingung",
              d: "Jeder Spieler würfelt eine Fähigkeit und muss ein Pokémon draften, das sie hat — sofortige Knappheit, sofortiges Drama.",
            },
            {
              t: "Lerne die Liste",
              d: "Lies den Effekt der gewürfelten Fähigkeit, bevor du spickst — ein leises Quiz, das sich in Kämpfen auszahlt.",
            },
            {
              t: "Team-Kitt",
              d: "Fehlt deiner Truppe etwas? Würfle Fähigkeiten, bis eine dein Problem löst, und notiere dann, welche Pokémon sie tragen.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Entscheide vor dem Start, ob versteckte Fähigkeiten zählen — sie sind die seltensten Funde und die lautesten Streitpunkte.",
            "Ein Wurf, eine Verbindlichkeit ist das gesunde Format: Bau um das, was du bekommst, statt nach den guten zu angeln.",
            "Ist eine Fähigkeit an eine Generation gebunden, betrachte es als Geschichtsstunde und würfle den Kontext mit, nicht nur den Effekt.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Du würfelst Levitate und die Karte zeigt ein Pokémon, an dem du hundertmal vorbeigegangen bist — nur dass es jetzt genau der bodenimmune Pivot ist, den dein Team brauchte. Das ist die Fähigkeiten-Lotterie: Die Antwort war immer da, du hast nur nie die Frage gestellt.",
          linksTitle: "Weiterbauen?",
          linksTextBefore: "Kombiniere sie mit dem",
          links: [
            { label: "Attacken-Generator", href: "/move" },
            { label: "Statuswerte-Generator", href: "/bst" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— Fähigkeit, Attacken und Zahlen sind drei Seiten desselben Sets.",
        },
      },
      move: {
        title: "Zufalls-Pokémon-Attacken-Generator | PokeRoll",
        description:
          "Entdecke eine zufällige Pokémon-Attacke und ein Pokémon, das sie lernen kann — prüfe Stärke, Genauigkeit und Typ, dann kopiere das Set nach Showdown. Fan-Tool.",
        keywords: [
          "zufalls pokemon attacken generator",
          "pokemon attacken generator",
        ],
        guide: {
          introTitle: "Warum eine zufällige Attacke würfeln?",
          intro:
            "Hunderte Attacken, und gewonnen werden Kämpfe von den seltsamen. Würfle eine zufällige Attacke, sieh ein Pokémon, das sie lernt, und stell die einzige Frage, die zählt: Könnte das wirklich funktionieren?",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Moveset-Roulette",
              d: "Würfle vier Attacken und mach ein Set draus — Splash inklusive. Die besten Spieler lassen alles spielbar aussehen.",
            },
            {
              t: "Draft-Bedingung",
              d: "Würfle eine Attacke und drafte dann ein Team, in dem sie jemand einsetzen muss — Support-Attacken bekommen endlich ihren Moment.",
            },
            {
              t: "Lerne die Bibliothek",
              d: "Stärke, Genauigkeit, Effekt — lies die gewürfelte Attacke, bevor du nachschaust. Attacken-Wissen ist gratis Elo.",
            },
            {
              t: "Kampf-Prompt",
              d: "Würfle eine Attacke und entwirf die Situation, in der sie dir das Spiel gewinnt — Theorycrafting mit Startwert.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Beim Moveset-Roulette wird nicht getauscht: vier Würfe, ein Set, und Status-Attacken zählen. Die Einschränkung ist das ganze Spiel.",
            "Einigt euch, ob Z-Attacken, Dynamax-Attacken und Signature-Attacken im Pool sind, bevor jemand würfelt — Hausregeln verhindern Schmollen.",
            "Eine Attacke ist nur so gut wie ihr Anwender — beurteile also das Paar, nicht die Attacke allein.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Die Würfel geben dir Belch — eine Gift-Attacke mit Stärke 120, die nur funktioniert, wenn man vorher eine Beere gegessen hat. Nutzlos? Dann fällt dir auf, wer sie lernt, und plötzlich wohnt ein Beeren-Saft-Set die ganze Woche mietfrei in deinem Kopf.",
          linksTitle: "Das Set vollenden?",
          linksTextBefore: "Runde es ab mit dem",
          links: [
            { label: "Fähigkeiten-Generator", href: "/ability" },
            { label: "Statuswerte-Generator", href: "/bst" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— und nimm dann das Ganze mit zu Showdown.",
        },
      },
      bst: {
        title: "Zufalls-Pokémon-Statuswerte-Generator (BST) | PokeRoll",
        description:
          "Generiere eine zufällige Basiswert-Summe (BST) und deck auf, zu welchem Pokémon sie gehört — vergleiche die sechs Werte, würfle erneut und kopiere es nach Showdown. Fan-Tool.",
        keywords: [
          "zufalls pokemon statuswerte generator",
          "pokemon generator mit statuswerten",
          "pokemon zufalls generator werte",
        ],
        guide: {
          introTitle: "Warum eine zufällige Basiswert-Summe würfeln?",
          intro:
            "Die Basiswert-Summe ist die Abkürzung, die jeder Spieler benutzt und über die sich niemand einig ist. Würfle eine Zahl, lerne das Pokémon dahinter kennen und finde heraus, wie ein 480er oder 600er in freier Wildbahn wirklich aussieht.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Das Pokémon erraten",
              d: "Sieh dir zuerst die Zahl an und nenne jedes Pokémon, das deiner Meinung nach auf dieser Basiswert-Summe sitzt — und prüfe dann, wie falsch du lagst.",
            },
            {
              t: "Draft nach Zahlen",
              d: "Jeder Spieler würfelt eine Basiswert-Summe und muss ein Pokémon mit exakt dieser Summe draften — Knappheit macht seltsame Stars.",
            },
            {
              t: "Limit-Challenge",
              d: "Baue eine Truppe, in der jedes Mitglied unter einem gewürfelten Limit bleibt — maximal 500 macht Team-Building zu echtem Design.",
            },
            {
              t: "Werte-Quiz",
              d: "Rate, wie die sechs Basiswerte verteilt sind, bevor aufgedeckt wird — Min-Maxer und Wände liest man sehr unterschiedlich.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Die Basiswert-Summe ist ein Budget, kein Ranking: ein gut investierter 480er schlägt einen faulen 540er — bewerte also die Verteilung, nicht nur die Summe.",
            "Bei Limit-Challenges legst du das Limit fest, bevor du das Team würfelst — erst würfeln und später verhandeln macht Limits bedeutungslos.",
            "Megas, Ur-Formen und alternative Formen haben eigene Summen — entscheide vor dem Draft, welche Formen zählen.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Die Zahl ist 600. Ein Pseudo-Legendäres? Diesmal nicht — es ist ein Mythisches Pokémon, und die Verteilung ist über alle sechs Werte perfekt ausgeglichen, was dir genau nichts darüber verrät, wie es kämpft. Zahlen eröffnen das Gespräch; sie beenden es nie.",
          linksTitle: "Mehr Zahlenspiele?",
          linksTextBefore: "Probier den",
          links: [
            { label: "Nummern-Generator", href: "/number" },
            { label: "Fähigkeiten-Generator", href: "/ability" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— oder jage die großen Summen auf der Legendär-Seite.",
        },
      },
      number: {
        title: "Zufalls-Pokémon-Nummern-Generator | PokeRoll",
        description:
          "Würfle eine zufällige Pokédex-Nummer von 1 bis 1025 und deck auf, welches Pokémon dahintersteckt — sieh die volle Karte und kopiere sie nach Showdown. Kostenloses Fan-Tool.",
        keywords: [
          "pokemon nummern generator",
          "zufalls pokemon nummern generator",
        ],
        guide: {
          introTitle: "Warum eine zufällige Pokédex-Nummer würfeln?",
          intro:
            "Eine Zahl zwischen 1 und 1025, ein Pokémon daran gebunden. Der Nummern-Wurf ist die reinste Lotterie der Seite — keine Filter, keine Themen, nur die ganze Geschichte des Franchise in einem einzigen Zug.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Dex-Roulette",
              d: "Würfle eine Zahl, und das ist deine nächste Begegnung, dein Teamkollege oder dein Zeichenmotiv — ganz egal, was der Dex sagt.",
            },
            {
              t: "Vorher erraten",
              d: "Nenne das Pokémon nur anhand der Zahl, bevor du hinschaust — die Dex-Reihenfolge im Kopf ist eine echte Fähigkeit.",
            },
            {
              t: "Nuzlocke-Wähler",
              d: "Nutze die gewürfelte Zahl modulo des lokalen Dex, um Begegnungen fair zu bestimmen — Würfel lassen sich nicht bestechen.",
            },
            {
              t: "Party-Spiel",
              d: "Die höchste Zahl gewinnt die Runde — das einfachste Spiel der Seite, die lautesten Diskussionen.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Entscheide, was die Zahl bedeutet, bevor du würfelst: nationaler Dex oder auf den Regional-Dex eines Spiels gemappt? Andere Spiele, andere Schicksale.",
            "Ein Wurf pro Entscheidung ist das ehrliche Format — neu würfeln, bis dein Favorit kommt, ist nur Auswählen mit Extra-Schritten.",
            "Formen teilen sich Dex-Nummern — legt also vor dem Wurf fest, wie ihr damit umgeht, nicht danach.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "#387. Jemand am Tisch ruft Chelast, noch bevor die Karte lädt — und ausnahmsweise liegt er richtig. Ein Sinnoh-Run, frisch vorherbestimmt. Der Dex gibt — und nimmt.",
          linksTitle: "Mehr Zahlenspiele?",
          linksTextBefore: "Probier den",
          links: [
            { label: "Statuswerte-Generator", href: "/bst" },
            { label: "Spitznamen-Generator", href: "/nickname" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— Zahlen, Namen und Werte erzählen alle verschiedene Geschichten.",
        },
      },
      starter: {
        title: "Zufalls-Starter-Pokémon-Generator | PokeRoll",
        description:
          "Wähle ein zufälliges Starter-Pokémon aus den ersten Partnern jeder Generation, von Kanto bis Paldea — und kopiere es nach Showdown. Kostenloses Fan-Tool.",
        keywords: [
          "zufalls starter pokemon generator",
          "pokemon starter generator",
          "zufälliger starter pokemon picker",
        ],
        guide: {
          introTitle: "Warum einen zufälligen Starter würfeln?",
          intro:
            "Der erste Partner bestimmt den Ton eines ganzen Durchlaufs — und sich selbst zu entscheiden kostet vierzig Minuten Forenthreads. Lass die Würfel aus den Startern jeder Generation wählen, von Kanto bis Paldea, und starte den Run endlich.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Starter-Entscheider",
              d: "Würfle einmal, und das ist dein Partner für den nächsten Run — die Entscheidung ist gefallen, das Abenteuer kann beginnen.",
            },
            {
              t: "Nuzlocke-Auftakt",
              d: "Lass den Wurf den Starter wählen, dann bestimmt das Strecken-Glück den Rest — volle Verbindlichkeit, null Voreingenommenheit.",
            },
            {
              t: "Diskussions-Schlichter",
              d: "Diesmal Feuer, Wasser oder Pflanze? Würfel haben keine Nostalgie und keine Favoriten — perfekter Schiedsrichter.",
            },
            {
              t: "Team-Thema",
              d: "Würfle einen Starter und baue ein Team, das seine Endentwicklung unterstützt — sofortige Struktur für eine lockere Truppe.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Der Starter-Pakt ist heilig: Das erste Ergebnis zählt. Ein Veto, nur weil du den Frosch wolltest, verfehlt den ganzen Sinn.",
            "Leg zuerst den Pool fest — alle neun Generationen oder nur die Spiele, die du besitzt? Ein kleinerer Pool ist trotzdem ein fairer Wurf.",
            "Bei Gruppen-Runs würfelt jeder offen, und Tauschen ist genau einmal erlaubt — das ist das ganze Meta-Spiel.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Die Würfel sagen Panflam, und dein Sinnoh-Run hat plötzlich eine Persönlichkeit: schnell, laut und leicht am Brennen. Über Plinfa hättest du es nie gewählt — genau deshalb wird dieser Durchlauf unvergesslich.",
          linksTitle: "Run am Laufen halten?",
          linksTextBefore: "Würfle den Rest der Truppe auf dem",
          links: [
            { label: "Zufalls-Team-Generator", href: "/team/random" },
            { label: "Typ-Generator", href: "/type" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— der Starter hat gewählt, jetzt braucht das Team sechs.",
        },
      },
      "no-names": {
        title: "Zufalls-Pokémon-Generator ohne Namen — Ratespiel",
        description:
          "Ein Mystery-Pokémon mit verstecktem Namen — kannst du anhand von Artwork und Werten erraten, welches es ist? Wende die Karte, um das Showdown-Set aufzudecken.",
        keywords: [
          "pokemon ohne namen",
          "errate das pokemon",
          "pokemon mystery quiz",
          "zufalls pokemon generator ohne namen",
        ],
        guide: {
          introTitle: "Warum ein geheimnisvolles Pokémon erraten?",
          intro:
            "Eine Karte, komplette Werte, offizielles Artwork — und kein Name. Der Mystery-Generator ist ein Quiz im Taschenformat: Alles, was du brauchst, um das Pokémon zu erkennen, steht auf der Karte — nur die Antwort fehlt.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Solo-Quiz",
              d: "Rate anhand von Artwork und Werten und wende die Karte zum Prüfen — tracke deine Serie über zehn Karten.",
            },
            {
              t: "Party-Raten",
              d: "Zeig die Karte im Call, die erste richtige Antwort gewinnt den Punkt — Schnelligkeit zählt mehr als Genauigkeit.",
            },
            {
              t: "Stream-Warm-up",
              d: "Fünf Mystery-Karten vor dem eigentlichen Content — der Chat ist sofort laut, garantiert.",
            },
            {
              t: "Silhouetten-Training",
              d: "Nutze es als Aufwärmrunde für die Rate-Challenge mit Seed, wo das Quiz schwerer wird und die Scores geteilt werden.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Nicht mit dem Cursor über dem Wenden-Knopf hängen: eine verbindliche Antwort pro Karte, laut ausgesprochen, wenn andere mitspielen. Selbstvertrauen ist das Spiel.",
            "Die Werte sind fair — eine Basiswert-Summe von 600 grenzt das Feld schnell ein, und das zu wissen ist Können, kein Betrug.",
            "Den Überblick verloren? Zehn Karten, je ein Punkt, keine Minuspunkte — das sauberste Format.",
          ],
          sampleTitle: "Eine Beispielkarte",
          sample:
            "Gelbe Backen, Elektro-Typ, winzige Werte — du legst dich mit voller Brust fest: Pikachu. Das Aufdecken sagt Pachirisu, und plötzlich diskutiert der ganze Raum über regionale Nager. Zehn Karten mehr, bitte.",
          linksTitle: "Lust auf ein schwereres Quiz?",
          linksTextBefore: "Steig auf zur",
          links: [
            { label: "Rate-Challenge", href: "/challenge/guess" },
            { label: "Spitznamen-Generator", href: "/nickname" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— dasselbe Wissen, höhere Einsätze.",
        },
      },
      cute: {
        title: "Zufalls-Generator für niedliche Pokémon | PokeRoll",
        description:
          "Erhalte ein zufälliges niedliches Pokémon — sanfte, flauschige und süße Picks aus dem ganzen Pokédex. Würfle erneut für das nächste oder kopiere es nach Showdown.",
        keywords: [
          "niedliche pokemon generator",
          "zufalls niedliche pokemon generator",
        ],
        guide: {
          introTitle: "Warum ein niedliches Pokémon würfeln?",
          intro:
            "Nicht jeder Wurf muss kompetitiv sein. Der Niedlich-Generator zieht aus den weichen, flauschigen und runden Ecken des Pokédex — die Pokémon, die du wirklich als Haustier haben wolltest, einen Tipp nach dem anderen.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Wohlfühl-Wurf",
              d: "Ein Tipp, ein hinreißendes Pokémon — die günstigste Stimmungsaufhellung im Internet.",
            },
            {
              t: "Kunst-Prompt",
              d: "Zeichne das gewürfelte Schnuckelchen in deinem Stil — kleine Pokémon sind die beste tägliche Skizzenübung.",
            },
            {
              t: "Nur-niedlich-Run",
              d: "Baue ein Durchlauf-Team, in dem jedes Mitglied den Niedlichkeitstest besteht — überraschend spielbar, meistens Normal-Typen.",
            },
            {
              t: "Debatte beenden",
              d: "Jeder Spieler würfelt einmal, die Gruppe stimmt über das Niedlichste ab — die Würfel schlichten das älteste Argument des Fandoms.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Niedlichkeit ist subjektiv, aber der Wurf ist endgültig — kein Neuwurf, nur weil du dich als Fluffeluff-Haushalt siehst.",
            "Für Nur-niedlich-Runs definierst du den Standard, bevor du startest: nur die erste Entwicklungsstufe? Unter einem Meter groß? Flauschig? Das Regelwerk zählt.",
            "Entwickeln ist erlaubt — zu lieben, was daraus wird, ist die Fortgeschrittenen-Herausforderung.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Die Würfel geben dir einen kugelrunden Vogel, der quietscht, und deine Produktivität für die nächsten zehn Minuten ist dahin. Jetzt schaust du dir Plüschtiere an. Es hätte nie einen anderen Weg gegeben.",
          linksTitle: "Mehr gute Laune?",
          linksTextBefore: "Probier den",
          links: [
            { label: "Mysteriös-Generator", href: "/mythical" },
            { label: "Spitznamen-Generator", href: "/nickname" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— selten und hinreißend ist die beste Kombination.",
        },
      },
      mythical: {
        title: "Zufalls-Generator für Mysteriöse Pokémon | PokeRoll",
        description:
          "Decke ein zufälliges Mysteriöses Pokémon wie Mew, Celebi oder Jirachi auf — seltene Picks aus allen Generationen, bereit zum Kopieren nach Showdown. Fan-Tool.",
        keywords: [
          "zufalls mysteriöse pokemon generator",
          "mysteriöse pokemon generator",
        ],
        guide: {
          introTitle: "Warum ein Mythisches Pokémon würfeln?",
          intro:
            "Mythische Pokémon sind die Event-Seltenheiten — Mew, Celebi, Jirachi und ihre Erben, die Pokémon, die ganze Generationen von Spielern nie besaßen. Würfle eins und borge dir ein wenig von dieser Seltenheit.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Traumteam-Draft",
              d: "Würfle sechs Mythische Pokémon und baue die Fantasie-Truppe, die du nie auf legalem Weg zusammenstellen könntest.",
            },
            {
              t: "Was-wäre-wenn-Kampf",
              d: "Würfle eins, kopiere es zu Showdown und teste, ob die schwer erreichbaren wirklich gut sind — manche sind es, manche sind Jirachi.",
            },
            {
              t: "Sammel-Checkliste",
              d: "Verfolge, welche Mythischen Pokémon dir die Würfel gezeigt haben — ein langsamer, kostenloser Weg, die ganze Gruppe kennenzulernen.",
            },
            {
              t: "Glücks-Ritual",
              d: "Ein Wurf vor Ranked-Sessions — ein Mythisches Pokémon ist ein gutes Omen, und Aberglaube ist kostenlos.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Mythisch und Legendär sind verschiedene Clubs — der Mythische-Pool enthält nur Event-Verteilungen, und genau das macht ihn besonders.",
            "Bei Traum-Drafts verlangen Doppelte einen Neuwurf; alles andere bleibt, wie es gefallen ist.",
            "Denk daran, dass die meisten Mythischen Pokémon dieselbe gleichmäßige 600er-Verteilung haben — ihre Tricks stecken in Attacken und Fähigkeiten, nicht in den Werten.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Die Würfel geben dir Jirachi, Wunscherfüller, Veteran von genau einem Wochenende-Event im Jahr 2003. Du hast es nie gefangen. Das wirst du wahrscheinlich auch nie. Aber heute, auf dieser Seite, ging der Wunsch in Erfüllung.",
          linksTitle: "Mehr seltene Würfel?",
          linksTextBefore: "Probier den",
          links: [
            { label: "Legendär-Generator", href: "/legendary" },
            { label: "Mega-Generator", href: "/mega" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— Seltenheit kommt in mehreren Geschmacksrichtungen.",
        },
      },
      mega: {
        title: "Zufalls-Mega-Pokémon-Generator | PokeRoll",
        description:
          "Würfle eine zufällige Mega-Entwicklung oder Ur-Form — sieh die gesteigerten Werte und die Fähigkeit, dann kopiere das Set nach Showdown. Kostenloses Fan-Tool.",
        keywords: [
          "zufalls mega pokemon generator",
          "mega pokemon generator",
        ],
        guide: {
          introTitle: "Warum eine Mega-Entwicklung würfeln?",
          intro:
            "Mega-Entwicklungen und Ur-Formen sind die lautesten Was-wäre-wenn der Reihe — zeitlich begrenzte Transformationen mit erhöhten Werten, neuen Fähigkeiten und Designs, die alles gegeben haben. Würfle eine und besuche die Ära, in der sich alles weiterentwickeln konnte.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Was-wäre-wenn-Meta",
              d: "Würfle eine Mega-Entwicklung und bewerte sie ehrlich: Würde das Ding einen Platz in einem modernen Team verdienen?",
            },
            {
              t: "Draft-Entscheider",
              d: "Jeder Spieler würfelt eine Mega-Entwicklung — der Wurf entscheidet, um welchen Trumpf deine Truppe gebaut wird.",
            },
            {
              t: "Design-Studie",
              d: "Vergleiche die Mega-Entwicklung mit ihrer Grundform und finde heraus, was die Designer verstärkt haben — eine kostenlose Design-Lektion.",
            },
            {
              t: "Kampf-Prompt",
              d: "Kopiere das Set zu Showdown und spiele das Was-wäre-wenn richtig aus — Nostalgie trifft härter bei 150 Basis-Angriff.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Eine Mega-Entwicklung pro Team ist aus gutem Grund die klassische Regel — dein Wurf ist dein Trumpf, also baue um ihn herum, nicht neben ihm.",
            "Ur-Formen zählen für den Pool als Mega-Entwicklungen — entscheidet das mit eurer Gruppe vor dem ersten Wurf.",
            "Bewerte das Gesamtpaket: +100 Werte bedeuten nichts, wenn die Fähigkeit die Stärken der Grundform verrät.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Die Würfel geben dir Mega-Bibor — eine Käfer/Gift-Glaskanone mit Flexibilität und einem Traum. Du hattest vergessen, dass es existiert. Jetzt kalkulierst du Giftstachel in dein nächstes Team ein — genau dafür ist dieser Generator da.",
          linksTitle: "Mehr Transformationen?",
          linksTextBefore: "Probier den",
          links: [
            { label: "Legendär-Generator", href: "/legendary" },
            { label: "Fusions-Tool", href: "/fusion" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— offiziell oder improvisiert, Hybride machen Spaß.",
        },
      },
      nickname: {
        title: "Zufalls-Pokémon-Namen- & Spitznamen-Generator | PokeRoll",
        description:
          "Generiere ein zufälliges Pokémon zusammen mit einem lustigen, niedlichen Spitznamen — perfekt für deinen nächsten Durchlauf oder deine Nuzlocke. Kopiere das Set nach Showdown. Fan-Tool.",
        keywords: [
          "pokemon spitznamen generator",
          "zufalls pokemon spitznamen generator",
          "zufälligen pokemon namen generieren",
        ],
        guide: {
          introTitle: "Warum einen Spitznamen würfeln?",
          intro:
            "Ein Spitzname macht aus einer Spezies einen Charakter. Der Spitznamen-Generator kombiniert ein zufälliges Pokémon mit einem Namen, den man wirklich eintippen will — für Nuzlockes, Durchläufe und jeden Spielstand, in dem die Truppe Besseres verdient als „GARCHOMP“.",
          waysTitle: "So kannst du spielen",
          ways: [
            {
              t: "Nuzlocke-Namen",
              d: "Die Regeln sagen, du musst alles benennen — lass den Wurf das übernehmen, und die Bindung kommt gratis dazu.",
            },
            {
              t: "Durchlauf-Flair",
              d: "Benenne deine ganze Truppe mit gewürfelten Namen um — ein thematischer Spielstand liest sich wie eine Geschichte.",
            },
            {
              t: "Party-Spiel",
              d: "Würfle ein Pokémon, jeder wirft einen Spitznamen ein, der Lustigste gewinnt — der gewürfelte Name ist der, den es zu schlagen gilt.",
            },
            {
              t: "Schreib-Prompt",
              d: "Ein Pokémon plus ein Name ist eine Charakterskizze — schreib den Trainer, der ihn benutzen würde.",
            },
          ],
          rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
          rules: [
            "Der Nuzlocke-Pakt: Der erste gewürfelte Name ist endgültig. Die Bindung ist der Punkt, und Bindungen werden nicht kuratiert.",
            "Themen-Namen erhöhen den Einsatz — Essensnamen, Musikernamen, Sternbildnamen; wähle eine Linie, bevor der Run startet.",
            "Ehr die Gefallenen: Wenn ein benanntes Pokémon ohnmächtig wird, tritt der Name mit ihm ab. Das ist das ganze Herz des Formats.",
          ],
          sampleTitle: "Ein Beispielwurf",
          sample:
            "Route 2, erster Fang, ein gewöhnlicher Vogel — und die Würfel nennen ihn Captain Krümel. Er wird drei Team-Wipes überleben, als Legende abtreten und länger in Erinnerung bleiben als die meisten Champions. Das ist die Macht eines guten Namens.",
          linksTitle: "Die ganze Crew benennen?",
          linksTextBefore: "Würfle die Truppe zuerst auf dem",
          links: [
            { label: "Zufalls-Team-Generator", href: "/team/random" },
            { label: "Nummern-Generator", href: "/number" },
          ],
          linksJoinOr: "oder",
          linksTextAfter: "— und komm dann zurück und gib ihnen allen Namen.",
        },
      },
      noNamesPromo: {
        s1: "Lust auf ein Quiz mit mehreren Karten und Seed zum Teilen? ",
        link: "Probier die Silhouetten-Challenge →",
        linkTitle: "Errate das Pokémon",
      },
    },

    legendary: {
      metaTitle: "Zufalls-Generator für Legendäre Pokémon | PokeRoll",
      metaDescription:
        "Generiere sofort ein zufälliges Legendäres Pokémon: Name, Typ, Fähigkeit, Basiswerte und offizielles Artwork — kopiere das Set nach Showdown. Fan-Tool.",
      keywords: [
        "zufalls legendäre pokemon generator",
        "legendäre pokemon generator",
        "zufälliges legendäres pokemon",
      ],
      breadcrumbLabel: "Legendär-Generator",
      headerTitle: "Zufalls-Generator für Legendäre Pokémon",
      headerDesc:
        "Nur Legendäre Pokémon in diesem Pool — tippe auf „Erneut generieren“ für den nächsten legendären Wurf.",
      note: "Tippe auf „Erneut generieren“, um ein weiteres Legendäres zu würfeln — „Zum Team hinzufügen“ behält es in deinem Team.",
      guide: {
        introTitle: "Warum ein Legendäres Pokémon würfeln?",
        intro:
          "Dieser Pool ist nur für Legenden — die Cover-Götter, die Umherstreifer, die Trios. Jeder Wurf landet auf einem Pokémon, das man früher nur über ein Event, eine Höhle oder eine 40-minütige Zwischensequenz treffen konnte.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Traumteam",
            d: "Würfle sechs Legendäre und stell die Truppe zusammen, von der jedes zehnjährige Kind schwor, sie sei unschlagbar.",
          },
          {
            t: "Boss-Rush-Draft",
            d: "Jeder Spieler würfelt drei — die höchste kombinierte Basiswert-Summe gewinnt, und die Angeberei hält die ganze Woche.",
          },
          {
            t: "Was-wäre-wenn-Kampf",
            d: "Kopiere ein gewürfeltes Legendäres zu Showdown und teste den Mythos — manche Götter haben sehr sterbliche Movesets.",
          },
          {
            t: "Sammel-Wurf",
            d: "Ein Wurf pro Tag, bis dir die Würfel jedes Legendäre gezeigt haben — der langsamste, günstigste Abschluss-Run.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Das erste Ergebnis zählt — ein Legendäres, das du neu würfeln kannst, ist nur ein starkes Pokémon, und die Mystik ist der ganze Punkt.",
          "Legendär und Mythisch sind verschiedene Pools: Diese Seite hält den Club exklusiv, Mythische wohnen nebenan.",
          "Bei Drafts gibt es pro Spieler einen Neuwurf, angekündigt, bevor die Würfel fallen — Hausregeln halten Götter ehrlich.",
        ],
        sampleTitle: "Ein Beispielwurf",
        sample:
          "Ein Tipp: Rayquaza, Himmelsgott, der Run schreibt sich von selbst. Nächster Tipp: Regigigas, dessen Lahm-Start dafür sorgt, dass der Gott fünf Züge lang nur zuschaut. Legenden haben viele Seiten.",
        linksTitle: "Mehr seltene Würfel?",
        linksTextBefore: "Probier den",
        links: [
          { label: "Mysteriös-Generator", href: "/mythical" },
          { label: "Shiny-Jagd", href: "/challenge/shiny" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— Seltenheit im Quadrat.",
      },
    },
    adventure: {
      metaTitle: "Pokémon-Abenteuer-Generator",
      /** Template: {diff} = difficulty label (Easy / Normal / Hard / Extreme). */
      metaTitleDiff: "Pokémon-Abenteuer-Generator — Schwierigkeit {diff}",
      metaDescription:
        "Würfle ein Pokémon-Abenteuer mit einem Tippen — Trainer, Rivale, Region, Starter, Sechser-Team, Challenge und legendäre Begegnung. Teile es oder kopiere jede Karte nach Showdown.",
      keywords: [
        "pokemon abenteuer generator",
        "zufalls pokemon abenteuer generator",
        "pokemon reise generator",
      ],
      headerTitle: "Würfle dein Pokémon-Abenteuer",
      headerDesc:
        "Ein Tippen würfelt Trainer, Region, Starter, Team, Challenge und Ziel — jedes Mal ein komplettes Pokémon-Abenteuer.",
      guideTitle: "So funktioniert's",
      steps: [
        {
          n: "1",
          t: "Würfle dein Abenteuer",
          d: "Ein Tippen würfelt Trainer, Rivalen, Region, Starter, Sechser-Team, Challenge, Legendäres und Ziel.",
        },
        {
          n: "2",
          t: "Wähle eine Schwierigkeit",
          d: "Einfach, Normal, Schwer oder Extrem — je höher, desto wilder die Reise.",
        },
        {
          n: "3",
          t: "Teile es",
          d: "Kopiere den geseedeten Link, damit Freunde exakt dasselbe Abenteuer erneut spielen — oder füge das Team deinem hinzu.",
        },
      ],
      faqs: [
        {
          q: "Was umfasst ein Abenteuer?",
          a: "Einen Trainer-Namen, Rolle und Stil, einen Rivalen, eine Region, deinen Starter, ein Sechser-Team, eine Challenge, eine Arena-Reise, eine legendäre Begegnung und ein finales Ziel — alles mit einem Tippen gewürfelt.",
        },
        {
          q: "Was ist der Seed im Link?",
          a: "Ein 8-stelliger Code, der den Wurf steuert. Derselbe Seed und dieselbe Schwierigkeit erzeugen immer exakt dasselbe Abenteuer — jeder Link ist reproduzierbar.",
        },
        {
          q: "Was ändert die Schwierigkeit?",
          a: "Die Schwierigkeit skaliert das Abenteuer von Einfach bis Extrem — sie formt die Challenges, denen du begegnest, etwa Shiny-Chancen und Begegnungsregeln.",
        },
        {
          q: "Kann ich mein Abenteuer teilen?",
          a: "Ja — kopiere den Seiten-Link. Er enthält Seed und Schwierigkeit, sodass Freunde das identische Abenteuer-Manifest öffnen.",
        },
      ],
      guide: {
        introTitle: "Warum ein Abenteuer würfeln?",
        intro:
          "Der Abenteuer-Modus würfelt mit einem Tippen einen ganzen Durchlauf: einen Trainer, einen Starter, ein Team, eine Challenge und ein Ziel, alles an einen einzigen Seed gebunden. Er ist ein Kampagnen-Generator — die Würfel schreiben die Prämisse, du spielst die Geschichte.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Sofort-Challenge-Run",
            d: "Würfle ein Abenteuer und nimm seine Regeln als bindend — das Team, das es dir gibt, ist das Team, das der Run erlaubt.",
          },
          {
            t: "Challenge-Kalender",
            d: "Würfle jede Woche ein neues Abenteuer und streame oder protokolliere die Versuche — gleiches Seed-Format, vergleichbare Geschichten.",
          },
          {
            t: "Koop-Prämisse",
            d: "Teile den Seed mit einem Freund: identisches Abenteuer, getrennte Durchläufe, Wettrennen zum Ziel.",
          },
          {
            t: "Story-Idee",
            d: "Nutze den gewürfelten Trainer und das Ziel als Fan-Fiction- oder Tabletop-Prompts — die Würfel sind überraschend gut in Plot-Hooks.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Wähle den Schwierigkeitsgrad, bevor du würfelst, nicht nachdem du das Ergebnis gesehen hast — Extrem zu wählen, wenn du das Team schon kennst, ist nur Verhandeln mit dir selbst.",
          "Ein Abenteuer funktioniert, weil es bindend ist: maximal ein Neuwurf pro Run, und nur bevor du irgendetwas gefangen hast.",
          "Teile den Seed, keine Screenshots — der Link spielt exakt dasselbe Abenteuer ab, was Rennen und Vergleiche fair macht.",
        ],
        sampleTitle: "Ein Beispiel-Abenteuer",
        sample:
          "Ein einziger Seed könnte verfügen: eine Göre aus Hoenn, ein Chimchar-Starter, eine Keine-Items-Challenge und das Ziel, die Liga unterlevelt zu schlagen. Diesen Run hättest du nie selbst aufgesetzt — und genau deshalb wirst du dich daran erinnern.",
        linksTitle: "Willst du das Abenteuer ausrüsten?",
        linksTextBefore: "Würfel-Nachschub für den Run gibt es hier:",
        links: [
          { label: "Zufalls-Team-Generator", href: "/team/random" },
          { label: "Rate-Challenge", href: "/challenge/guess" },
          { label: "Shiny-Jagd", href: "/challenge/shiny" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— jede gute Kampagne braucht Nebenquests.",
      },
    },

    guess: {
      metaTitle: "Errate das Pokémon — Silhouetten-Challenge",
      metaDescription:
        "Errate versteckte Pokémon anhand ihrer Silhouetten, decke sie nacheinander zum Prüfen auf und teile dann den geseedeten Link, um einen Freund herauszufordern. Kostenloses Fan-Tool.",
      keywords: [
        "errate das pokemon",
        "pokemon ratespiel",
        "pokemon quiz",
        "wer ist dieses pokemon",
      ],
      breadcrumbLabel: "Errate das Pokémon",
      headerTitle: "Errate das Pokémon",
      /** Template: {count} = hidden Pokémon count, clamped to the difficulty cap. */
      headerDesc:
        "Wir haben die Namen von {count} Zufalls-Pokémon versteckt. Decke sie nacheinander auf und teste dein Poké-Wissen!",
      promoS1: "Lieber eine schnelle Mystery-Karte? ",
      promoLink: "Mystery-Pokémon →",
      guideTitle: "So funktioniert's",
      steps: [
        {
          t: "Studiere die Silhouetten",
          d: "Form, Größe und der Typ-Hinweis auf Einfach sind alles, was du hast — lege deine Vermutung fest.",
        },
        {
          t: "Wenden zum Aufdecken",
          d: "Klicke eine Karte, um sie zu wenden und zu sehen, ob du das Pokémon richtig genannt hast.",
        },
        {
          t: "Teilen & vergleichen",
          d: "Der Seed im Link erzeugt dieselbe Aufstellung — teile ihn und miss dich mit einem Freund.",
        },
      ],
      guide: {
        introTitle: "Warum dein Pokédex-Gedächtnis testen?",
        intro:
          "Die Rate-Challenge ist der reinste Test deines Pokédex-Wissens: eine feste Aufstellung, Hinweise, die mit dem Schwierigkeitsgrad schrumpfen, und dein Punktestand am Ende. Derselbe Seed für alle — die Ergebnisse sind also wirklich vergleichbar.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Tägliches Duell",
            d: "Teile den Seed mit einem Freund und vergleicht eure Punkte — gleiche Aufstellung, keine Ausreden.",
          },
          {
            t: "Schwierigkeitsleiter",
            d: "Starte auf Einfach mit großzügigen Hinweisen und klettere Richtung Extrem, wo die Sprites gezoomt sind und die Hinweise weg.",
          },
          {
            t: "Filter-Spießrutenlauf",
            d: "Sperre eine einzelne Generation oder einen Typ und beweise, dass du diese Scheibe des Dex wirklich kennst — nicht nur die berühmten Teile.",
          },
          {
            t: "Party-Quiz",
            d: "Lies die Karten in einem Anruf laut vor und wetteifert beim Rufen der Antwort — Tempo zählt.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Wähle Anzahl und Schwierigkeit vor der ersten Aufdeckung — zwölf auf Einfach und sechs auf Extrem sind völlig unterschiedliche Prüfungen.",
          "Keine Filterwechsel mitten im Run: Eine Mono-Wasser-Runde und eine Gesamt-Dex-Runde messen unterschiedliches Wissen.",
          "Ein Versuch pro Seed ist das ehrliche Format — der Seed hält die Aufstellung fest, ein zweiter Versuch ist also nur Auswendiglernen.",
        ],
        sampleTitle: "Eine Beispielrunde",
        sample:
          "Eine Schwer-Runde zoomt in eine Spirale aus blaugrauem Panzer. Cloyster? Omastar? Du legst dich voller Überzeugung auf Kabutops fest, und die Auflösung sagt … Shellder. Irgendwo lacht ein Rivale — und dein Revanche-Seed ist nur ein Tippen entfernt.",
        linksTitle: "Lust auf mehr Prüfungen?",
        linksTextBefore: "Weitere Prüfungen gibt es hier:",
        links: [
          { label: "Mystery-Karten-Modus", href: "/no-names" },
          { label: "Shiny-Jagd", href: "/challenge/shiny" },
          { label: "Abenteuer-Modus", href: "/adventure" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— andere Würfel, dieselben Prahlereien.",
      },
    },

    shiny: {
      metaTitle: "Zufalls-Pokémon-Generator Shiny-Jagd | PokeRoll",
      metaDescription:
        "Der Shiny-Pokémon-Generator mit echten Jagd-Chancen: Klicke auf Begegnung, finde dein Shiny und teile die Karte. Der Einfach-Modus garantiert ein Shiny innerhalb von 204 Zügen.",
      keywords: [
        "zufalls pokemon generator shiny",
        "zufalls pokemon generator shiny chance",
        "shiny pokemon generator",
      ],
      breadcrumbLabel: "Shiny-Jagd",
      headerTitle: "Shiny-Jagd-Challenge",
      headerDescEasy:
        "Einfach-Modus — jeder Klick ist ein 1-zu-204-Zug und dein Shiny ist innerhalb von 204 Begegnungen garantiert. Teile den Link und vergleiche mit einem Freund.",
      headerDescDefault:
        "Klicke auf Begegnung und sieh, wie lange es bis zu deinem Shiny dauert — dieselbe 1/4.096-Chance wie in den Spielen. Teile den Link und vergleiche mit einem Freund.",
      guideTitle: "So funktioniert's",
      steps: [
        {
          t: "Klicke auf Begegnung",
          d: "Jeder Klick ist ein Zug — 1 zu 204 auf Einfach, sonst 1 zu 4.096, und Einfach garantiert ein Shiny innerhalb von 204 Klicks.",
        },
        {
          t: "Finde dein Shiny",
          d: "Wenn es funkelt, schaltet die gefundene Karte Teilen und Herunterladen frei.",
        },
        {
          t: "Teile die Jagd",
          d: "Teile die Karte oder den geseedeten Link — Freunde sehen dein Ergebnis und starten dann ihre eigene Jagd.",
        },
      ],
      faqs: [
        {
          q: "Wie hoch sind die Shiny-Chancen?",
          a: "Normal, Schwer und Extrem nutzen dieselbe 1-zu-4.096-Rate wie die Hauptspiele. Der Einfach-Modus erhöht sie auf 1 zu 204 pro Klick.",
        },
        {
          q: "Was ist der Einfach-Modus?",
          a: "Eine freundlichere Jagd: 1-zu-204-Chance pro Begegnung, und dein Shiny erscheint garantiert innerhalb von 204 Zügen — keine endlosen Pechsträhnen.",
        },
        {
          q: "Was passiert, wenn ich ein Shiny finde?",
          a: "Die gefundene Karte schaltet Teilen und Herunterladen frei. Der geteilte Link öffnet direkt auf deinem gefundenen Shiny, und die heruntergeladene Karte trägt einen QR-Code, den Freunde scannen können, um ihre eigene Jagd zu starten.",
        },
      ],
      guide: {
        introTitle: "Warum ein Shiny jagen?",
        intro:
          "Die Shiny-Jagd simuliert das älteste Glücksspiel in Pokémon: Begegnung um Begegnung, wartend auf das Funkeln. Wähle einen Schwierigkeitsgrad, klicke dich durch den wilden Pool und sieh, wie tief die Jagd geht — das Pity-System hält es ehrlich, aber nie leicht.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Glückstest",
            d: "Starte eine Jagd und sieh, wie viele Begegnungen dein Shiny braucht — unter den Odds läufst du heiß, über den Odds schuldet dir der Pool eins.",
          },
          {
            t: "Wettrennen gegen einen Freund",
            d: "Teile den Jagd-Seed und liefere dir ein Rennen bis zur Aufdeckung — die wenigsten Begegnungen gewinnen, und der Link beweist es.",
          },
          {
            t: "Geduldstraining",
            d: "Nutze den Extrem-Modus als Meditation: Hunderte Klicks, ein Funkeln, keine Abkürzungen.",
          },
          {
            t: "Stream-Segment",
            d: "Ein Live-Shiny-Rennen ist fertiger Content — der Chat wählt den Schwierigkeitsgrad, du lieferst die Verzweiflung.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Der Schwierigkeitsgrad ist hier das ganze Spiel: Einfach garantiert einen Pity-Wurf, damit eine erste Jagd immer zu Ende geht; höhere Stufen lassen dich es verdienen.",
          "Entscheide vor dem Start, was zählt — beendet das erste Shiny die Jagd, oder hältst du auf eine bestimmte Art durch?",
          "Teile den Aufdeckungs-Link, keinen Screenshot: Er öffnet direkt auf der gefundenen Karte, also kann niemand ein Erste-Begegnung-Shiny fälschen.",
        ],
        sampleTitle: "Eine Beispieljagd",
        sample:
          "Begegnung 1: Pidgey. Begegnung 47: Pidgey. Begegnung 213: Pidgey. Du fängst an, die Odds anzuzweifeln, den Seed, deine Lebensentscheidungen — und dann funkelt Begegnung 214 golden. Jeder echte Jäger weiß genau, wie sich das anfühlt.",
        linksTitle: "Willst du die Serie am Laufen halten?",
        linksTextBefore: "Weiter geht es mit:",
        links: [
          { label: "Rate-Challenge", href: "/challenge/guess" },
          { label: "Abenteuer-Modus", href: "/adventure" },
          { label: "Zufalls-Pokémon-Generator", href: "/random-pokemon-generator" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— die Würfel schlafen nie.",
      },
    },

    favorites: {
      metaTitle: "Deine Pokémon-Favoriten | PokeRoll",
      metaDescription:
        "Speichere die Pokémon, die du liebst, und baue deine Favoriten-Sammlung — teile die Liste mit einem Link und kopiere jede Karte nach Showdown. Kostenloses Fan-Tool.",
      keywords: [
        "pokemon favoriten",
        "pokemon favoriten liste",
        "pokemon sammlung teilen",
      ],
      headerTitle: "Pokémon-Favoriten",
      headerDesc:
        "Bewahre die Pokémon, die du liebst, an einem Ort — und teile die ganze Liste mit einem einzigen Link.",
    },

    contact: {
      metaTitle: "Kontakt | PokeRoll",
      metaDescription:
        "Kontaktiere das PokeRoll-Team — schreibe eine E-Mail an hello@pokeroll.app für Feedback und Fehlermeldungen, sag hallo auf X @JoeyChou2024 oder öffne ein Issue auf GitHub. Wir antworten schnell.",
      keywords: [
        "pokeroll kontakt",
        "pokemon generator feedback",
        "pokeroll support",
      ],
      headerTitle: "Kontakt",
      headerDesc:
        "Fragen, Ideen oder ein Fehler zu melden? Wähle den Kanal, der dir passt — jede Nachricht erreicht den Macher direkt.",
      channels: [
        {
          title: "E-Mail",
          handle: "hello@pokeroll.app",
          desc: "Feedback, Fehlermeldungen oder geschäftliche Anfragen — wir lesen alles.",
          action: "E-Mail senden",
        },
        {
          title: "X (Twitter)",
          handle: "@JoeyChou2024",
          desc: "Die schnellsten Antworten. Tägliche Build-in-Public-Updates zu dem, was als Nächstes kommt.",
          action: "Auf X folgen",
        },
        {
          title: "GitHub",
          handle: "ihuajiu/pokeroll.app",
          desc: "Open Source. Einen Fehler gefunden? Öffne ein Issue, dann wird er verfolgt.",
          action: "Issue öffnen",
        },
      ],
      soloNote:
        "PokeRoll ist ein Solo-Fan-Projekt — nicht mit Nintendo oder The Pokémon Company verbunden. Antworten kommen meist innerhalb von 48 Stunden.",
      backLink: "← Zurück zum Generator",
    },

    privacy: {
      metaTitle: "Datenschutzerklärung — PokeRoll",
      metaDescription:
        "PokeRoll-Datenschutzerklärung — wir nutzen anonymes Google Analytics, speichern Favoriten und Theme nur im localStorage deines Browsers und erheben niemals persönliche Daten.",
      keywords: [
        "pokeroll datenschutzerklärung",
        "pokemon tool datenschutz",
        "fan seite datenschutz",
      ],
      headerTitle: "Datenschutzerklärung",
      intro:
        "PokeRoll ist eine kostenlose, von Fans gebaute Pokémon-Toolbox. Wir halten die Datenerhebung auf ein absolutes Minimum — du kannst jedes Tool ohne Konto nutzen, und wir fragen niemals persönliche Daten ab.",
      analytics: {
        h: "Analyse:",
        p: "Wir nutzen Google Analytics, um den Gesamt-Traffic zu verstehen (welche Seiten besucht werden, ungefähr wie viele Besucher). Diese Daten sind aggregiert und anonym — wir nutzen sie nicht, um einzelne Nutzer zu identifizieren.",
      },
      storage: {
        h: "Browser-Speicher:",
        p: "Deine Favoriten, Team-Picks und Theme-Einstellungen werden nur im localStorage deines Browsers gespeichert. Diese Daten verlassen dein Gerät nie und werden niemals auf unsere Server hochgeladen.",
      },
      personal: {
        h: "Persönliche Daten:",
        p: "Wir erheben keine Namen, E-Mail-Adressen oder andere persönliche Daten. Es gibt keine Registrierung und kein Tracking über die oben beschriebene anonyme Analyse hinaus.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Affiliate-Links:",
        s1: "Einige Shopping-Links auf dieser Seite sind Affiliate-Links — Details siehe ",
        l1: "Haftungsausschluss",
        s2: ". Affiliate-Partner können eigene Cookies gemäß ihren eigenen Datenschutzerklärungen verwenden.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Kontakt:",
        s1: "Fragen zu dieser Erklärung? Schreibe an ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Zurück zum Generator",
    },

    terms: {
      metaTitle: "Nutzungsbedingungen — PokeRoll",
      metaDescription:
        "PokeRoll-Nutzungsbedingungen — eine inoffizielle, von Fans gebaute Pokémon-Toolbox, bereitgestellt wie besehen. Pokémon ist eine Marke von Nintendo, Game Freak und The Pokémon Company.",
      keywords: [
        "pokeroll nutzungsbedingungen",
        "pokemon fan seite bedingungen",
        "inoffizielles pokemon tool",
      ],
      headerTitle: "Nutzungsbedingungen",
      intro:
        "PokeRoll ist eine inoffizielle, von Fans gebaute Pokémon-Toolbox. Mit der Nutzung dieser Seite stimmst du den folgenden Bedingungen zu.",
      unofficial: {
        h: "Inoffizielles Fan-Projekt:",
        p: "Diese Seite steht in keiner Verbindung zu Nintendo, Game Freak oder The Pokémon Company und wird von diesen weder unterstützt noch gesponsert. Pokémon und alle zugehörigen Namen, Charaktere und Artworks sind Marken von Nintendo, Game Freak und The Pokémon Company und werden hier nur zu Informations- und Unterhaltungszwecken verwendet.",
      },
      asIs: {
        h: "Bereitstellung wie besehen:",
        p: "Die Tools und Inhalte auf dieser Seite werden „wie besehen“ bereitgestellt, ohne Gewährleistung jeglicher Art. Zufallsergebnisse dienen dem Spaß; wir übernehmen keine Garantie für Verfügbarkeit, Genauigkeit oder Eignung für einen bestimmten Zweck.",
      },
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        h: "Datenquellen:",
        s1: "Pokémon-Daten (Namen, Typen, Werte, Fähigkeiten, Sprites) stammen aus der öffentlichen ",
        l1: "PokéAPI",
        s2: ". Sprites sind © ihrer jeweiligen Rechteinhaber.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Affiliate-Links:",
        s1: "Als Amazon-Partner verdienen wir an qualifizierten Käufen über die Shopping-Links auf dieser Seite. Das beeinflusst die Tools nicht — sie bleiben kostenlos. Die vollständige Offenlegung findest du im ",
        l1: "Haftungsausschluss",
        s2: ".",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Kontakt:",
        s1: "Fragen zu diesen Bedingungen? Schreibe an ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Zurück zum Generator",
    },

    disclaimer: {
      metaTitle: "Haftungsausschluss & Affiliate-Hinweis — Fan-Pokémon-Tool",
      metaDescription:
        "PokeRoll ist eine inoffizielle Fan-Seite und steht in keiner Verbindung zu Nintendo, Game Freak oder The Pokémon Company. Lies den Haftungsausschluss und die Affiliate-Offenlegung.",
      keywords: [
        "pokemon fan seite haftungsausschluss",
        "pokemon affiliate offenlegung",
        "inoffizielle pokemon seite",
      ],
      headerTitle: "Haftungsausschluss",
      intro:
        "Diese Seite ist ein inoffizielles Fan-Tool. Sie steht in keiner Verbindung zu Nintendo, Game Freak oder The Pokémon Company und wird von diesen weder unterstützt noch gesponsert. Pokémon-Namen, -Charaktere und -Artworks sind Marken ihrer jeweiligen Eigentümer und werden hier nur zu Informations- und Unterhaltungszwecken verwendet.",
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        s1: "Alle Pokémon-Daten (Namen, Typen, Fähigkeiten, Werte, Sprites) werden aus der öffentlichen ",
        l1: "PokéAPI",
        s2: " abgerufen. Sprites sind © ihrer jeweiligen Rechteinhaber.",
      },
      affiliate: {
        h: "Affiliate-Offenlegung:",
        p: "Als Amazon-Partner verdienen wir an qualifizierten Käufen über die Shopping-Links auf dieser Seite. Das beeinflusst das Tool nicht — es bleibt kostenlos nutzbar.",
      },
      backLink: "← Zurück zum Generator",
    },

    randomPokemon: {
      metaTitle: "Zufalls-Pokémon — Jetzt würfeln | PokeRoll",
      metaDescription:
        "Erhalte ein Zufalls-Pokémon mit einem Tippen — jeder Wurf kommt mit Name, Typ, Fähigkeit, Basiswerten und offiziellem Artwork, bereit zum Kopieren nach Showdown. Kostenloses Fan-Tool.",
      keywords: [
        "zufalls pokemon generator",
        "pokemon generator",
        "zufalls pokemon",
        "zufälliges pokemon generieren",
        "zufalls pokemon erhalten",
      ],
    },
    randomPokemonPicker: {
      metaTitle: "Zufalls-Pokémon-Picker | PokeRoll",
      metaDescription:
        "Wähle ein Zufalls-Pokémon mit einem Tippen — jeder Pick kommt mit Name, Typ, Fähigkeit, Basiswerten und offiziellem Artwork, bereit zum Kopieren nach Showdown. Kostenloses Fan-Tool.",
      keywords: [
        "zufalls pokemon picker",
        "pokemon generator",
        "zufalls pokemon",
        "zufälliges pokemon generieren",
        "zufalls pokemon auswählen",
      ],
    },
    pokemonRandomizer: {
      metaTitle: "Pokémon-Randomizer | PokeRoll",
      metaDescription:
        "Würfle ein zufälliges Pokémon mit einem Tippen — jeder Wurf kommt mit Name, Typ, Fähigkeit, Basiswerten und offiziellem Artwork, bereit zum Kopieren nach Showdown. Kostenloses Fan-Tool.",
      keywords: [
        "pokemon randomizer",
        "pokemon generator",
        "zufalls pokemon",
        "zufälliges pokemon generieren",
        "zufalls pokemon erhalten",
      ],
    },

    team: {
      metaTitle: "Dein Pokémon-Team | PokeRoll",
      metaDescription:
        "Deine gespeicherte Truppe aus zufällig generierten Pokémon — teile den Link mit Freunden oder kopiere jedes Set nach Showdown für Kämpfe. Kostenloses Fan-Tool.",
      keywords: [
        "pokemon team builder",
        "zufalls pokemon team builder",
        "zufalls pokemon team generator",
        "pokemon team planer",
      ],
      headerTitle: "Dein Pokémon-Team",
      headerDesc:
        "Deine gespeicherte Truppe — füge Pokémon aus jedem Generator hinzu, dann baue und teile.",
      faqs: [
        {
          q: "Wie verwende ich dieses Team in Pokémon Showdown?",
          a: "Tippe unter dem Team auf Copy Sets (die Schaltfläche mit dem Showdown-Badge), um das Team im Showdown-Textformat zu kopieren. Öffne dann play.pokemonshowdown.com/teambuilder, wähle Import/Export und füge den Text ein — jedes Set wird mit Attacken, Fähigkeit, Item, Wesen und EVs geladen, bereit zum Kämpfen oder Anpassen.",
        },
      ],
      guide: {
        introTitle: "Warum ein gespeichertes Team führen?",
        intro:
          "Dein Team ist der Ort, wo Zufallsergebnisse aufhören, Wegwerfware zu sein. Jede Karte, auf der du Add to Team tippst, landet hier — aus jedem Generator der Seite — und so setzt sich langsam eine Truppe aus Würfen zusammen, die dir wirklich gefielen.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Best-of-Sammlung",
            d: "Würfle weiter im Team-Generator und füge nur die Züge hinzu, die es wert sind, behalten zu werden — diese Seite wird deine Ruhmeshalle.",
          },
          {
            t: "Draft-Kuration",
            d: "Würfle mehr als sechs, behalte die besten sechs hier und streiche den Rest — dein ganz persönlicher Draft-Tag.",
          },
          {
            t: "Showdown-Vorbereitung",
            d: "Wenn sich die sechs richtig anfühlen, exportiere die ganze Truppe mit Copy Sets und füge sie direkt in den Showdown-Teambuilder ein.",
          },
          {
            t: "Truppe teilen",
            d: "Der Teilen-Link trägt deine exakte Aufstellung — schick ihn einem Freund, und er sieht dieselben sechs, inklusive Artwork.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Ein gespeichertes Team verdient ein Thema. Es muss nicht kompetitiv sein — „nur Pokémon, die ich in einem Durchlauf wirklich benutzen würde“ ist ein Thema. „Eins pro Generation“ auch, oder „nichts über 500 BST“.",
          "Behandle Entfernungen als endgültig. Wenn du dich dabei ertappst, denselben Slot fünfmal zu tauschen, will dieser Slot eine andere Rolle, nicht ein anderes Pokémon.",
          "Sechs ist nicht umsonst die klassische Obergrenze: klein genug, dass jedes Mitglied seinen Platz rechtfertigen muss.",
        ],
        sampleTitle: "Eine Beispieltruppe",
        sample:
          "Eine typische gespeicherte Truppe könnte als „die sechs, die meinen Smaragd-Run getragen haben“ anfangen — Swampert, Gardevoir, Aggron, Manectric, Altaria und ein VM-Maultier, das sich seinen Ruhestand verdient hat. Die Seite urteilt nicht; sie erinnert sich nur.",
        linksTitle: "Lust auf frisches Blut?",
        linksTextBefore: "Neue Kandidaten würfelst du hier:",
        links: [
          { label: "Zufalls-Team-Generator", href: "/team/random" },
          { label: "Team Coach", href: "/team/coach" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— und füge die Keeper hier wieder hinzu.",
      },
    },

    teamRandom: {
      metaTitle: "Zufalls-Pokémon-Team-Generator | PokeRoll",
      metaDescription:
        "Generiere ein Zufalls-Team aus 6 Pokémon mit einem Tippen — sperre Favoriten, würfle den Rest neu, dann exportiere jedes Set nach Showdown oder teile den Link. Kostenloses Fan-Tool.",
      keywords: [
        "zufalls pokemon team generator",
        "pokemon team generator",
        "zufalls pokemon team",
        "zufälliges pokemon team erstellen",
      ],
      headerTitle: "Zufalls-Pokémon-Team",
      headerDesc:
        "Würfle eine gefilterte Truppe aus Zufalls-Pokémon — dann füge deine Favoriten zu deinem Team hinzu.",
      faqs: [
        {
          q: "Wie werden Teams generiert?",
          a: "Jeder Wurf zieht sechs zufällige Pokémon auf einmal. Öffne die Filter, um den Pool vor dem Würfeln nach Generation, Region, Typ oder Kategorie (wie Legendär oder Starter) einzugrenzen.",
        },
        {
          q: "Warum habe ich weniger als sechs Pokémon bekommen?",
          a: "Sehr enge Filter können einen passenden Pool kleiner als sechs hinterlassen. Erweitere einen der Filter — oder stelle einen zurück auf Zufällig — und würfle erneut.",
        },
        {
          q: "Kann ich ein Team speichern oder teilen?",
          a: "Teile den Seiten-Link — die URL enthält die gewürfelte Truppe, also sehen Freunde beim Öffnen dieselben sechs. Tippe auf einer Karte auf „Zum Team hinzufügen“, um Favoriten seitenweit in deinem Team zu behalten.",
        },
        {
          q: "Wie verwende ich dieses Team in Pokémon Showdown?",
          a: "Tippe unter dem Team auf Copy Sets (die Schaltfläche mit dem Showdown-Badge), um das Team im Showdown-Textformat zu kopieren. Öffne dann play.pokemonshowdown.com/teambuilder, wähle Import/Export und füge den Text ein — jedes Set wird mit Attacken, Fähigkeit, Item, Wesen und EVs geladen, bereit zum Kämpfen oder Anpassen.",
        },
      ],
      guide: {
        introTitle: "Warum ein Zufalls-Team würfeln?",
        intro:
          "Ein Zufalls-Team nimmt die Entscheidungslähmung aus dem Teambau. Statt eine Stunde lang den Pokédex zu durchscrollen, bekommst du sechs Slots hingestellt — und dann fängt der interessante Teil an: sie zusammenarbeiten zu lassen. Nutze das Ergebnis als Challenge-Run, als freundschaftlichen Draft, als Übungstruppe oder als pure Inspiration für deinen nächsten Durchlauf.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Challenge-Run",
            d: "Verpflichte dich auf die sechs, die du für deinen nächsten Durchlauf würfelst — keine Neuwürfe. Baue um das herum, was du bekommst, inklusive unangenehmer Typ-Überschneidungen.",
          },
          {
            t: "Draft mit Freunden",
            d: "Teile den Seiten-Link — die URL trägt die exakte Truppe, also starten alle mit denselben sechs. Würfle deine eigene Antwort darauf, dann kämpft und vergleicht.",
          },
          {
            t: "Showdown-Übung",
            d: "Copy Sets gibt dir komplette Sets mit Attacken, Items und EVs. Füge sie in den Showdown-Teambuilder ein und klettere die Leiter mit einem Team, über das du nicht zu viel nachgedacht hast.",
          },
          {
            t: "Themen-Bau",
            d: "Sperre einen Typ, eine Generation oder eine Kategorie in den Filtern und würfle innerhalb deiner eigenen Einschränkung — eine Mono-Wasser-Truppe, eine Gen-3-Reunion, ein Nur-Starter-Run.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Ein Zufalls-Team fühlt sich besser an, wenn die Regeln zuerst kommen. Legendäre erlaubt? Wenn nicht, öffne die Filter und schließe die Kategorie aus, bevor du den Würfel-Button berührst. Mono-Typ-Run? Sperre den Typ. Nur die Spiele, mit denen du aufgewachsen bist? Sperre die Generation. Die Filter sind dein Regelbuch — stelle sie einmal ein und lebe dann mit dem, was die Würfel sagen.",
          "Im lockeren Spiel nimm eine unangenehme Überschneidung als Teil der Challenge an — drei Pokémon mit derselben Schwäche sind ein Rätsel, kein Bug. Bei einem Draft sprecht die Bans mit eurer Gruppe ab, bevor jemand würfelt. Bei einem Story-Run gönne dir ein Veto, wenn eine Art in deinem Spiel schlicht nicht fangbar ist.",
          "Es geht um ein Team, das du wirklich spielen würdest — nicht darum, so lange neu zu würfeln, bis es perfekt aussieht.",
        ],
        sampleTitle: "Ein Beispielwurf",
        sample:
          "Ein Tippen könnte dir Gengar, Donphan, Togekiss, Ferrothorn, Volcarona und Pelipper geben — eine voll spielbare Truppe, nur dass drei davon gegen Gestein einknicken. Diese geteilte Schwäche ist die Challenge: Flickst du sie mit Items und Attacken, oder akzeptierst du sie und bist einfach schneller als alles? Der Wurf gibt dir eine Einschränkung; was du darum herum baust, ist das Spiel.",
        linksTitle: "Lust auf einen kleineren Pool?",
        linksTextBefore: "Würfle stattdessen innerhalb einer einzelnen Scheibe des Pokédex — probiere den",
        links: [
          { label: "Gen-1-Generator", href: "/gen/1" },
          { label: "Drachen-Typ-Generator", href: "/type/dragon" },
          { label: "Legendären-Generator", href: "/legendary" },
        ],
        linksJoinOr: "oder",
        linksTextAfter:
          "— dann komm zurück und würfle ein komplettes Team innerhalb deiner Lieblingseinschränkung.",
      },
    },

    teamCoach: {
      metaTitle: "Pokémon-Team-Coach — Fülle den Rest deines Teams",
      metaDescription:
        "Sperre die Pokémon, die du bereits gewählt hast, und lass den Team-Coach den Rest mit Typ-Abdeckung und balancierten Rollen füllen — dann kopiere das Team nach Showdown. Kostenloses Fan-Tool.",
      keywords: [
        "pokemon team builder",
        "pokemon team ergänzen",
        "pokemon team coach",
        "automatischer team builder pokemon",
      ],
      breadcrumbLabel: "Team-Coach",
      headerTitle: "Pokémon-Team-Coach",
      headerDesc:
        "Sperre die Pokémon, die du bereits gewählt hast, und fülle den Rest mit Typ-Abdeckung und balancierten Rollen.",
      faqs: [
        {
          q: "Wie verwende ich dieses Team in Pokémon Showdown?",
          a: "Tippe unter dem Team auf Copy Sets (die Schaltfläche mit dem Showdown-Badge), um das Team im Showdown-Textformat zu kopieren. Öffne dann play.pokemonshowdown.com/teambuilder, wähle Import/Export und füge den Text ein — jedes Set wird mit Attacken, Fähigkeit, Item, Wesen und EVs geladen, bereit zum Kämpfen oder Anpassen.",
        },
      ],
      guide: {
        introTitle: "Warum einen Team-Coach nutzen?",
        intro:
          "Der Team Coach ist für den Moment, in dem du vier Pokémon hast, die du liebst, und keine Ahnung, was in die letzten zwei Slots gehört. Sperre deine Picks, und er füllt den Rest mit Typ-Abdeckung und balancierten Rollen — nicht einfach mehr von dem, was du schon hast.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Draft vollenden",
            d: "Deine Favoriten gesperrt? Lass den Coach die sechs mit der Abdeckung vervollständigen, die dir fehlt — dann würfle nur die Slots neu, die dir nicht gefallen.",
          },
          {
            t: "Schwäche beheben",
            d: "Wenn deine Truppe gegen einen Typ einknickt, sperre die Keeper und generiere — der Coach gewichtet bei seiner Wahl die defensive Abdeckung.",
          },
          {
            t: "Teambau lernen",
            d: "Beobachte, warum er wählt, was er wählt: Jeder Vorschlag kommt mit einer Begründung — das ist unauffällig eine Teambau-Lektion.",
          },
          {
            t: "Importieren & polieren",
            d: "Hol dein gespeichertes Team oder deine Favoriten herein, wirf die schwachen Glieder raus und lass den Coach Ersatz vorsprechen.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Sperre ehrlich. Der Coach kann nur um das herum balancieren, was du ihm gibst — sperre die Pokémon, zu denen du wirklich stehst, nicht die ganze Wunschliste.",
          "Lies die Begründung, bevor du neu würfelst. „New coverage“ und „tanky pivot“ verraten dir, was deiner Truppe gefehlt hat; taucht dieselbe Begründung immer wieder auf, ist das das echte Problem deines Teams.",
          "Ein Neuwurf pro Slot ist eine gute Hausregel — endlose Neuwürfe machen den Coach zu einem langsamen Zufallsgenerator.",
        ],
        sampleTitle: "Eine Beispielreparatur",
        sample:
          "Sperre Garchomp, Rotom-Wash und Corviknight, und der Coach könnte mit einem Feuer-Typ für das Stahl-Matchup, einer Boden-Immunität für die geteilte Schwäche und einer Wildcard „für neue Abdeckung“ antworten — genau das Gespräch, das ein guter Teammate mit dir führen würde.",
        linksTitle: "Lust auf einen anderen Ausgangspunkt?",
        linksTextBefore: "Eine frische Truppe würfelst du hier:",
        links: [
          { label: "Zufalls-Team-Generator", href: "/team/random" },
          { label: "dein gespeichertes Team", href: "/team" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— dann bring das Ergebnis zum Fertigstellen hierher zurück.",
      },
    },

    teamChallenge: {
      metaTitle: "Pokémon-Team-Challenge — Würfle ein Team, fordere einen Freund heraus",
      metaDescription:
        "Würfle ein geseedetes Team aus 6 Pokémon, teile den Link und fordere einen Freund heraus — die BST-Summe bestimmt den Gewinner, dann exportiere eines der Teams nach Showdown. Kostenloses Fan-Tool.",
      keywords: [
        "pokemon team challenge",
        "zufalls pokemon team generator",
        "zufalls pokemon team",
        "pokemon team generator",
      ],
      breadcrumbLabel: "Team-Challenge",
      headerTitle: "Pokémon-Team-Challenge",
      headerDesc:
        "Würfle ein 6-Pokémon-Challenge-Team, teile den Link und lass die BST-Summe einen Gewinner gegen deine Freunde bestimmen.",
      faqs: [
        {
          q: "Wie verwende ich dieses Team in Pokémon Showdown?",
          a: "Tippe unter dem Team auf Copy Sets (die Schaltfläche mit dem Showdown-Badge), um das Team im Showdown-Textformat zu kopieren. Öffne dann play.pokemonshowdown.com/teambuilder, wähle Import/Export und füge den Text ein — jedes Set wird mit Attacken, Fähigkeit, Item, Wesen und EVs geladen, bereit zum Kämpfen oder Anpassen.",
        },
      ],
      guide: {
        introTitle: "Warum einen Freund herausfordern?",
        intro:
          "Die Team Challenge macht aus einem Zufallswurf eine Anzeigetafel. Die Seite generiert eine geseedete Truppe, du teilst den Link, und alle, die ihn öffnen, stellen sich exakt demselben Team — die BST-Summe krönt den Gewinner.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Freunde-Duell",
            d: "Teile den Challenge-Link in deinem Gruppenchat — alle würfeln ihre eigene Antwort auf dieselbe Truppe, die höchste BST gewinnt die Runde.",
          },
          {
            t: "Stream-Segment",
            d: "Würfle live ein Challenge-Team und lass den Chat versuchen, es zu schlagen — der Link hält alle ehrlich, weil sich die Truppe nicht ändern kann.",
          },
          {
            t: "Solo-Benchmark",
            d: "Schlage deine eigenen Würfe: Halte das Challenge-Team fest und würfle deine Seite neu, bis du seine BST mit einer Truppe toppst, die du wirklich benutzen würdest.",
          },
          {
            t: "Draft-Night-Entscheider",
            d: "Nutze eine Challenge-Runde, um zu klären, wer zuerst pickt — keine Diskussionen, die Zahlen stehen auf der Seite.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Legt das Format vor dem Teilen fest: je ein Wurf, oder Best-of-Three? Der Seed bedeutet, dass die Challenge selbst feststeht — die einzige Variable ist, was du dagegen würfelst.",
          "BST entscheidet hier den Gewinner, aber Hausregeln können überstimmen: nur Mono-Typ-Antworten, keine Legendären in deiner Antwort oder „niedrigste BST gewinnt“ für eine Chaos-Runde.",
          "Exportiere danach beide Seiten nach Showdown, wenn du die echte Antwort willst — BST ist eine Anzeigetafel, kein Kampfergebnis.",
        ],
        sampleTitle: "Eine Beispiel-Challenge",
        sample:
          "Die Challenge würfelt Blissey, Shedinja, Magikarp, Regidrago, Applin und Salamence — eine Monster-Summe, getragen von drei echten Pokémon und drei Witzen. Schlägst du sie mit sechs Mittelklässlern, hast du dir die Prahlerei verdient; verlierst du gegen sie, wirst du die ganze Woche von Magikarp hören.",
        linksTitle: "Lust auf mehr Wettbewerbe?",
        linksTextBefore: "Weitere Wettbewerbe gibt es hier:",
        links: [
          { label: "Glücksrad", href: "/wheel" },
          { label: "Rate-Challenge", href: "/challenge/guess" },
          { label: "Zufalls-Team-Generator", href: "/team/random" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— dieselben Würfel, andere Anzeigetafel.",
      },
    },

    wheel: {
      metaTitle: "Zufalls-Pokémon-Generator Glücksrad | PokeRoll",
      metaDescription:
        "Dreh das Rad für ein Zufalls-Pokémon — ein lustiges Glückspiel über den ganzen Pokédex. Sieh zu, wie es landet, und kopiere deinen Pick nach Showdown. Kostenloses Fan-Tool.",
      keywords: [
        "zufalls pokemon generator glücksrad",
        "pokemon glücksrad generator",
        "zufalls pokemon glücksrad",
        "pokemon picker glücksrad",
      ],
      breadcrumbLabel: "Rad drehen",
      headerTitle: "Pokémon-Glücksrad-Generator",
      headerDesc:
        "Dreh das Rad für ein Zufalls-Pokémon — ein lustiges Glückspiel über den Pokédex — und kopiere deinen Pick nach Showdown.",
      guideTitle: "So funktioniert's",
      steps: [
        {
          n: "1",
          t: "Wähle deine Spieler",
          d: "Wähle 2-6 Spieler — jeder dreht einmal am Rad.",
        },
        {
          n: "2",
          t: "Drehen & landen",
          d: "Jede Drehung landet auf einem Pokémon und stapelt sich unten in den Rundenergebnissen.",
        },
        {
          n: "3",
          t: "Kämpfen & teilen",
          d: "Der höchste BST gewinnt die Runde — teile das Ergebnis, um Freunde herauszufordern.",
        },
      ],
      guide: {
        introTitle: "Warum ein Rad drehen?",
        intro:
          "Das Rad ist der ehrlichste Zufalls-Picker, den es gibt: Alle sehen, wie dieselbe Drehung auf demselben Segment landet. Dreht euch ab, stapelt die Ergebnisse, und die höchste BST gewinnt die Runde — kein Setup, kein Verhandeln mit den Würfeln.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Party-PK",
            d: "Zwei bis sechs Spieler, je eine Drehung — die höchste BST gewinnt die Runde. Der Verlierer legt den nächsten Einsatz fest.",
          },
          {
            t: "Draft-Starter",
            d: "Drehe sechsmal und schreib jedes Ergebnis auf — das ist deine Truppe für einen Challenge-Run, mit Wiederholungen und allem.",
          },
          {
            t: "Entscheidungshilfe",
            d: "Du kannst keinen Typ für deinen Mono-Run oder kein Spiel für den Abend wählen? Leg die Optionen aufs Rad und lass es landen.",
          },
          {
            t: "Stream-Content",
            d: "Ein sich drehendes Rad sieht vor der Kamera großartig aus — dreh für deine nächste Begegnung, deinen nächsten Teammate oder deine nächste Strafe.",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du drehst",
        rules: [
          "Einigt euch vor der ersten Drehung auf die Anzahl: je eine Drehung, oder Drehen-bis-es-passt? Räder machen mehr Spaß, wenn niemand für eine Neu-Drehung lobbyieren kann.",
          "Bei PK-Runden gehören Gleichstände zum Charme — legt vorher fest, ob Gleichstehende ein Stechen drehen oder sich die Krone teilen.",
          "Teile den Runden-Link, wenn es vorbei ist: Die URL trägt die Ergebnisse, also sind die Prahlerechte des Gewinners überprüfbar.",
        ],
        sampleTitle: "Eine Beispielrunde",
        sample:
          "Nach sechs Drehungen steht auf dem Board: ein Pseudo-Legendäres mit 670 BST, zwei Route-1-Vögel, ein Magikarp — und das selbstgefällige Gesicht deines Freundes, wenn seine letzte Drehung auf Arceus landet. Das Rad gibt — und der Runden-Link beweist es.",
        linksTitle: "Lust auf Struktur um die Drehungen?",
        linksTextBefore: "Eine komplette Truppe würfelst du im",
        links: [
          { label: "Zufalls-Team-Generator", href: "/team/random" },
          { label: "Zufalls-Pokémon-Generator", href: "/random-pokemon-generator" },
          { label: "Legendären-Generator", href: "/legendary" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— dann komm zurück und dreh für die Entscheidung.",
      },
    },

    fusion: {
      metaTitle: "Pokémon-Fusions-Generator | PokeRoll",
      metaDescription:
        "Fusioniere zwei zufällige Pokémon zu einem brandneuen Hybrid mit kombiniertem Namen, Typ und Werten — würfle erneut für ein seltsameres Paar und kopiere die Fusion nach Showdown.",
      keywords: [
        "pokemon fusion generator",
        "zufalls pokemon fusion generator",
        "pokemon fusion tool",
        "pokemon fusion erstellen",
      ],
      breadcrumbLabel: "Fusions-Tool",
      headerTitle: "Pokémon-Fusions-Generator",
      headerDesc:
        "Fusioniere zwei zufällige Pokémon zu einem brandneuen Hybrid mit kombiniertem Namen, Typ und Werten — dann kopiere die Fusion nach Showdown.",
      faqs: [
        {
          q: "Wie funktioniert der Fusions-Generator?",
          a: "Jeder Wurf wählt zwei zufällige Pokémon und fusioniert sie zu einem Hybrid — ein gemischter Name plus kombinierte Typen und Werte beider Elternteile.",
        },
        {
          q: "Kann ich eine Fusion teilen oder behalten?",
          a: "Ja. Der Teilen-Button kopiert einen Link, der exakt dieselbe Fusion reproduziert, und Herunterladen speichert die Fusionskarte als Bild.",
        },
        {
          q: "Ist das ein offizielles Pokémon-Tool?",
          a: "Nein — PokeRoll ist ein Fan-Projekt. Pokémon-Daten stammen von PokéAPI; Fusionsergebnisse werden zum Spaß generiert und sind keine offiziellen Designs.",
        },
      ],
      guide: {
        introTitle: "Warum Pokémon fusionieren?",
        intro:
          "Der Fusions-Generator beantwortet die Frage, die jeder Pokédex irgendwann stellt: Wie würden diese beiden als eins aussehen? Jeder Wurf wählt zwei zufällige Arten und mischt Name, Typen und Werte zu einem Hybrid, den es sonst nirgendwo gibt.",
        waysTitle: "So kannst du spielen",
        ways: [
          {
            t: "Kunst-Prompt",
            d: "Würfle eine Fusion und zeichne sie — der gemischte Name und die Typen sind ein fertiges Design-Briefing.",
          },
          {
            t: "Errate die Eltern",
            d: "Zeig die Fusionskarte, versteck das Ergebnis und lass Freunde raten, welche zwei Pokémon sie erzeugt haben.",
          },
          {
            t: "Eigener Dex",
            d: "Führe eine Liste deiner Lieblingsfusionen — nach zwanzig Würfen hast du den Anfang des Pokédex deiner eigenen Region.",
          },
          {
            t: "Kampf-Was-wäre-wenns",
            d: "Kopiere das Set der Fusion nach Showdown und tüftle: Würde dieser Hybrid wirklich einen Team-Slot verdienen?",
          },
        ],
        rulesTitle: "Lege deine Regeln fest, bevor du würfelst",
        rules: [
          "Beurteile eine Fusion nach ihren eigenen Maßstäben: Die besten sind die, die du wirklich zeichnen oder benutzen würdest, nicht die mit den höchsten Werten.",
          "Beim Errate-die-Eltern hält ein Hinweis pro Rater das Spiel in Gang — der Typ ist der klassische Gratistipp.",
          "Würfle frei neu, bis ein Paar etwas auslöst; Fusionen sind billig, Inspiration nicht.",
        ],
        sampleTitle: "Eine Beispielfusion",
        sample:
          "Ein Wurf könnte Gengar mit Snorlax zu einer Geist/Normal-Wand mit einem Namen fusionieren, über den du eine Woche lachst — und dann ertappst du dich dabei, wie du ernsthaft über seine EV-Verteilung nachdenkst. Das ist der Moment, in dem eine Fusion aufhört, ein Witz zu sein, und anfängt, ein Design zu sein.",
        linksTitle: "Lust auf besseres Rohmaterial?",
        linksTextBefore: "Neue Eltern holst du dir hier:",
        links: [
          { label: "Zufalls-Pokémon-Generator", href: "/random-pokemon-generator" },
          { label: "Glücksrad", href: "/wheel" },
          { label: "Zufalls-Team-Generator", href: "/team/random" },
        ],
        linksJoinOr: "oder",
        linksTextAfter: "— dann fusioniere die Keeper.",
      },
    },
  },
};
