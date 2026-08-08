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
      },
      move: {
        title: "Zufalls-Pokémon-Attacken-Generator | PokeRoll",
        description:
          "Entdecke eine zufällige Pokémon-Attacke und ein Pokémon, das sie lernen kann — prüfe Stärke, Genauigkeit und Typ, dann kopiere das Set nach Showdown. Fan-Tool.",
        keywords: [
          "zufalls pokemon attacken generator",
          "pokemon attacken generator",
        ],
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
      },
      number: {
        title: "Zufalls-Pokémon-Nummern-Generator | PokeRoll",
        description:
          "Würfle eine zufällige Pokédex-Nummer von 1 bis 1025 und deck auf, welches Pokémon dahintersteckt — sieh die volle Karte und kopiere sie nach Showdown. Kostenloses Fan-Tool.",
        keywords: [
          "pokemon nummern generator",
          "zufalls pokemon nummern generator",
        ],
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
      },
      cute: {
        title: "Zufalls-Generator für niedliche Pokémon | PokeRoll",
        description:
          "Erhalte ein zufälliges niedliches Pokémon — sanfte, flauschige und süße Picks aus dem ganzen Pokédex. Würfle erneut für das nächste oder kopiere es nach Showdown.",
        keywords: [
          "niedliche pokemon generator",
          "zufalls niedliche pokemon generator",
        ],
      },
      mythical: {
        title: "Zufalls-Generator für Mysteriöse Pokémon | PokeRoll",
        description:
          "Decke ein zufälliges Mysteriöses Pokémon wie Mew, Celebi oder Jirachi auf — seltene Picks aus allen Generationen, bereit zum Kopieren nach Showdown. Fan-Tool.",
        keywords: [
          "zufalls mysteriöse pokemon generator",
          "mysteriöse pokemon generator",
        ],
      },
      mega: {
        title: "Zufalls-Mega-Pokémon-Generator | PokeRoll",
        description:
          "Würfle eine zufällige Mega-Entwicklung oder Ur-Form — sieh die gesteigerten Werte und die Fähigkeit, dann kopiere das Set nach Showdown. Kostenloses Fan-Tool.",
        keywords: [
          "zufalls mega pokemon generator",
          "mega pokemon generator",
        ],
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
    },
  },
};
