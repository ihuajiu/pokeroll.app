/* ------------------------------------------------------------------ */
/*  English dictionary — type source for all locales                   */
/*                                                                     */
/*  Values are the verbatim user-facing strings previously hardcoded   */
/*  in the components. Placeholders use {name} and are substituted     */
/*  with .replace() at the call site (dictionaries must stay plain     */
/*  serializable objects so they can cross the server→client line).    */
/* ------------------------------------------------------------------ */

export default {
  common: {
    copy: "Copy",
    copySet: "Copy Set",
    copied: "Copied!",
    copyShowdownSet: "Copy Showdown set",
    showdownSetCopied: "Showdown set copied",
    showdownSetCopiedBang: "Showdown set copied!",
    back: "Back",
    rollAdventure: "Roll Adventure",
    viewYourTeam: "View your team",
    /** Template: {n} = generation number. */
    genShort: "Gen {n}",
    /** Template: {label} = tool label. */
    toolArtworkAlt: "{label} example Pokémon artwork",
    home: "Home",
    randomPokemon: "Random Pokémon",
    generateAgain: "Generate Again",
    generating: "Generating…",
    generateAnotherAria: "Generate another random Pokémon",
  },

  nav: {
    homeTitle: "PokeRoll home",
    menuAria: "Menu",
    /** Template: {count} = number of favorites. */
    favoritesAria: "Favorites ({count})",
    main: {
      adventure: "Adventure",
      generators: "Generators",
      team: "Team",
      challenges: "Challenges",
      tools: "Tools",
      contact: "Contact",
    },
  },

  footer: {
    tagline:
      "Roll a random Pokémon — names, types, stats and shinies in one tap.",
    contactUs: "Contact us",
    onX: "PokeRoll on X",
    xTitle: "@JoeyChou2024 on X",
    onGithub: "PokeRoll on GitHub",
    githubTitle: "ihuajiu/pokeroll.app on GitHub",
    byRegion: "By Region",
    byType: "By Type",
    byGeneration: "By Generation",
    disclaimer:
      "This is a fan-made tool. Not affiliated with Nintendo, Game Freak or The Pokémon Company. Pokémon data provided by",
    pokeApi: "PokéAPI",
    disclaimerLink: "Disclaimer",
    disclaimerTitle: "Disclaimer",
    privacy: "Privacy",
    privacyTitle: "Privacy Policy",
    terms: "Terms",
    termsTitle: "Terms of Use",
    badges: {
      fazierTitle: "Featured on Fazier",
      fazierAlt: "Featured on Fazier badge",
      tinyTitle: "Featured on TinyLaunch",
      tinyAlt: "TinyLaunch Badge",
      findlyTitle: "Featured on Findly.tools",
      findlyAlt: "Featured on Findly.tools",
    },
  },

  tools: {
    groups: {
      adventure: {
        title: "Adventure",
        desc: "Roll your trainer, region, starter, team, challenge and goal in one tap.",
      },
      generator: {
        title: "Generators",
        desc: "Random Pokémon pulls by type, ability, move, stat, number and more.",
      },
      challenge: {
        title: "Challenges",
        desc: "Guess, hunt or spin — shareable challenges for you and your friends.",
      },
      tool: {
        title: "Tools",
        desc: "Handy utilities built on top of the random rolls.",
      },
      team: {
        title: "Team",
        desc: "Build your squad or roll a ready-made team of six.",
      },
    },
    items: {
      adventure: {
        label: "Pokémon Adventure",
        desc: "Roll a full adventure — trainer, starter, team, challenge & goal.",
      },
      randomPokemon: {
        label: "Random Pokémon",
        desc: "A fully random Pokémon with stats, type and sprite.",
      },
      type: {
        label: "Type Generator",
        desc: "Roll a random type and a matching Pokémon.",
      },
      ability: {
        label: "Ability Generator",
        desc: "Roll a random ability, see who has it.",
      },
      move: {
        label: "Move Generator",
        desc: "Discover a random move and one of its users.",
      },
      bst: {
        label: "BST Generator",
        desc: "Random base stat total, then reveal the Pokémon.",
      },
      number: {
        label: "Number Generator",
        desc: "Roll a Pokédex number and reveal which Pokémon.",
      },
      starter: {
        label: "Starter Generator",
        desc: "A random partner from every generation.",
      },
      cute: {
        label: "Cute Generator",
        desc: "Soft, fluffy and adorable picks.",
      },
      mythical: {
        label: "Mythical Generator",
        desc: "Mew, Celebi, Arceus and friends.",
      },
      legendary: {
        label: "Legendary Generator",
        desc: "Roll only Legendary Pokémon.",
      },
      mega: {
        label: "Mega Generator",
        desc: "Mega Evolutions and Primal Reversions.",
      },
      nickname: {
        label: "Nickname Generator",
        desc: "A Pokémon paired with a fun cute nickname.",
      },
      guess: {
        label: "Guess the Pokémon",
        desc: "Names hidden — guess from the silhouette, reveal to check.",
      },
      shiny: {
        label: "Shiny Hunt",
        desc: "How many encounters until your next shiny?",
      },
      mystery: {
        label: "Mystery Pokémon",
        desc: "One mystery card — artwork shown, name hidden.",
      },
      wheel: {
        label: "Wheel Battle",
        desc: "Multiplayer wheel — 2-6 players spin, highest BST wins.",
      },
      fusion: {
        label: "Fusion Tool",
        desc: "Fuse two Pokémon into one new creature.",
      },
      randomTeam: {
        label: "Random Team",
        desc: "Roll a ready-made squad of six random Pokémon.",
      },
      teamChallenge: {
        label: "Team Challenge",
        desc: "Roll a seeded team and challenge a friend to beat it.",
      },
      teamCoach: {
        label: "Team Coach",
        desc: "Lock your picks, fill the rest with smart coverage.",
      },
      myTeam: {
        label: "My Team",
        desc: "Collect favourites into a themed squad.",
      },
    },
    /** Homepage "Jump straight in" cards — keyed by tool id. Several labels
     *  intentionally differ from the catalog labels above. */
    jump: {
      randomPokemon: {
        label: "Random Generator",
        desc: "Summon a random Pokémon with full stats & artwork.",
      },
      adventure: {
        label: "Adventure Mode",
        desc: "Roll a full Pokémon adventure — trainer, starter, team, challenge & goal.",
      },
      randomTeam: {
        label: "Random Team",
        desc: "Roll a ready-made squad of six random Pokémon.",
      },
      fusion: {
        label: "Fusion Generator",
        desc: "Fuse two Pokémon into one hybrid creature.",
      },
      shiny: {
        label: "Shiny Hunt",
        desc: "Hunt the rare recolored form.",
      },
      guess: {
        label: "Guess the Pokémon",
        desc: "Names hidden — guess from the silhouette, reveal to check.",
      },
    },
  },

  heroCard: {
    stats: {
      hp: "HP",
      atk: "ATK",
      def: "DEF",
      spa: "SPA",
      spd: "SPD",
      spe: "SPE",
    },
    forms: {
      mega: "Mega",
      alolan: "Alolan",
      galarian: "Galarian",
      hisuian: "Hisuian",
      paldean: "Paldean",
      gigantamax: "Gigantamax",
    },
    ability: "Ability",
    region: "Region",
    bst: "BST",
    gen: "Gen",
    height: "Height",
    weight: "Weight",
    heightUnit: "m",
    weightUnit: "kg",
    mystery: "Mystery",
    newRoll: "New roll",
    rolling: "Rolling…",
    flipHint: "Tap card to flip — Showdown set",
    showdownSet: "Showdown Set",
    loading: "Loading…",
    generatingSet: "Generating set…",
    lock: "Lock — keep on re-roll",
    unlock: "Unlock — allow re-roll",
    addToFavorites: "Add to favorites",
    removeFromFavorites: "Remove from favorites",
    favLimit: "Max 15 favorites — remove one to add another.",
    shareLink: "Share link",
    linkShared: "Link shared",
    linkCopied: "Link copied!",
    shared: "Shared!",
    downloadCard: "Download card",
    imageSaved: "Image saved",
    imageSavedBang: "Image saved!",
    closeShowdown: "Close Showdown set",
    backToCard: "Back to card",
  },

  randomGenerator: {
    generation: "Generation",
    region: "Region",
    type: "Type",
    legendary: "Legendary",
    starter: "Starter",
    favorites: "Favorites",
    all: "All",
    any: "Any",
    only: "Only",
    exclude: "Exclude",
    favoritesTitle: "Skip Pokémon you have favorited",
    noMatch: "No Pokémon match those filters — try widening them.",
    advancedFilters: "Advanced filters",
    collapseAria: "Collapse advanced filters",
    collapseTitle: "Collapse filters",
  },

  variantGenerator: {
    welcome: "Welcome Trainer!",
    /** Template: {kind} = localized kind label. */
    yourRandom: "Your random {kind} is…",
    buildTeam: "Build Team",
    kinds: {
      type: "Type",
      ability: "Ability",
      move: "Move",
      bst: "Base Stat Total",
      number: "Pokédex Number",
      starter: "Starter Pokémon",
      shiny: "Shiny Pokémon",
      noNames: "Mystery Pokémon",
      cute: "Cute Pokémon",
      mythical: "Mythical Pokémon",
      mega: "Mega Pokémon",
      nickname: "Nickname",
    },
  },

  homeTool: {
    eyebrow: "Random Pokémon Generator & Tools",
    title: "Random Pokémon",
    titleAccent: "Generator",
    lead: "Roll a random Pokémon in one tap — 1,000+ species with full stats and artwork. Or roll a random Pokémon team, a challenge run, even a full Pokémon adventure. Free, instant and shareable.",
    rollPokemon: "Roll a Pokémon",
    randomGeneratorTitle: "Random Pokémon Generator",
    stats: {
      species: "Species",
      types: "Types",
      generations: "Generations",
    },
    jumpEyebrow: "Jump straight in",
    jumpTitle: "Pick a tool, start playing",
    jumpDesc: "The most popular generators — one tap, instant fun.",
    explore: "Explore",
    browseEyebrow: "Tool matrix",
    browseTitle: "Every way to roll",
    browseDesc: "The complete tool catalog — every way to roll a Pokémon.",
  },

  homeFacts: {
    title: "PokeRoll in numbers",
    metricHead: "Metric",
    valueHead: "Value",
    noteHead: "Note",
    facts: [
      { metric: "Pokémon species", value: "1,000+", note: "All 9 generations" },
      { metric: "Pokémon types", value: "18", note: "Every type filterable" },
      { metric: "Generations", value: "9", note: "Gen 1 (Kanto) to Gen 9 (Paldea)" },
      { metric: "Random team size", value: "6", note: "A full battle-ready squad" },
      { metric: "Base shiny odds", value: "1 / 4,096", note: "Mirrors the modern games" },
    ],
    howToTitle: "How to roll a random Pokémon in 3 steps",
    step1Pre: "Open the",
    step1Link: "Random Pokémon Generator",
    step1Post: "— no sign-up, no download.",
    step2: "Tap the roll button to instantly get 1 of 1,000+ species with name, type, ability, base stats and artwork.",
    step3: "Flip the card to copy a ready-made Pokémon Showdown set, or share the link with friends.",
    quote1:
      "“This results in a base Shiny probability of approximately 16/65536, or 1/4096.”",
    quote1Cite: "Bulbapedia, “Shiny Pokémon”",
    quote2:
      "“All the Pokémon data you’ll ever need in one place, easily accessible through a modern free open-source RESTful API.”",
    quote2CiteSuffix: ", serving over 50 billion API calls each month",
  },

  addToTeam: {
    add: "Add to Team",
    addAria: "Add to team",
    inTeam: "✓ In Team",
    removeAria: "Remove from team",
    /** Template: {count} = current team size. */
    viewTeam: "View Team ({count})",
  },

  faq: {
    heading: "FAQ",
  },

  relatedTools: {
    heading: "Related tools",
  },

  /* ---------------------------------------------------------------- */
  /*  Page-level metadata + copy (app/[locale]/…)                      */
  /*  English values are verbatim from the pre-i18n pages; dynamic     */
  /*  segments use {placeholders} substituted with .replace() chains.  */
  /* ---------------------------------------------------------------- */
  pages: {
    home: {
      metaTitle: "Random Pokémon Generator — Team, Type & Wheel | PokeRoll",
      metaDescription:
        "PokeRoll is a free random Pokémon generator and toolbox — build a random team, take on challenges or roll a full adventure, and copy any card to Showdown.",
      keywords: [
        "pokemon generator",
        "pokemon randomizer",
        "pokemon tools",
        "pokemon team generator",
        "pokemon adventure",
      ],
      /** Template: {date} = last-updated ISO date. */
      updatedBy: "By the PokeRoll Team · Last updated {date}",
      // FAQ answers interleave text with links: s1/l1/s2/l2/s3 are the
      // segments around up to two links, aText the plain JSON-LD version.
      faq1: {
        q: "How many Pokémon can this generator roll?",
        s1: "It can roll any of 1,000+ Pokémon species spanning all 9 generations and 18 types. Every card comes with full stats, abilities and artwork, and the data is sourced from the public ",
        l1: "PokéAPI",
        s2: ".",
        aText:
          "It can roll any of 1,000+ Pokémon species spanning all 9 generations and 18 types. Every card comes with full stats, abilities and artwork, and the data is sourced from the public PokéAPI (pokeapi.co).",
      },
      faq2: {
        q: "What are the odds of getting a shiny Pokémon?",
        s1: "Our shiny rolls mirror the modern games: a 1 in 4,096 base chance. That is the official rate since Generation VI — earlier games used 1 in 8,192 — as documented on ",
        l1: "Bulbapedia",
        s2: ". Try your luck in the ",
        l2: "Shiny Hunt challenge",
        s3: ".",
        aText:
          "Our shiny rolls mirror the modern games: a 1 in 4,096 base chance. That is the official rate since Generation VI — earlier games used 1 in 8,192 — as documented on Bulbapedia. Try your luck in the Shiny Hunt challenge.",
      },
      faq3: {
        q: "Can I generate a full team of six Pokémon at once?",
        s1: "Yes — the ",
        l1: "Random Team generator",
        s2: " rolls a ready-made squad of 6 Pokémon in one tap, and the ",
        l2: "Team Coach",
        s3: " balances the 6 slots by type coverage. Every set can be copied straight into Pokémon Showdown.",
        aText:
          "Yes — the Random Team generator rolls a ready-made squad of 6 Pokémon in one tap, and the Team Coach balances the 6 slots by type coverage. Every set can be copied straight into Pokémon Showdown.",
      },
      faq4: {
        q: "Is PokeRoll free to use?",
        s1: "Yes, every tool on PokeRoll is completely free — all 18+ generators, challenges and team tools work instantly in your browser with no sign-up, no download and no limits on how many times you roll.",
      },
      faq5: {
        q: "Where does the Pokémon data on this site come from?",
        s1: "All names, types, stats, abilities and sprites come from ",
        l1: "PokéAPI",
        s2: ", the open community Pokémon database. It covers 1,000+ species across 9 generations, so rolls always reflect the real Pokédex.",
        aText:
          "All names, types, stats, abilities and sprites come from PokéAPI (pokeapi.co), the open community Pokémon database. It covers 1,000+ species across 9 generations, so rolls always reflect the real Pokédex.",
      },
      faq6: {
        q: "Is PokeRoll affiliated with Nintendo or The Pokémon Company?",
        s1: "No. PokeRoll is an independent fan-made project and is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak or The Pokémon Company. See our ",
        l1: "disclaimer",
        s2: " for the full notice.",
        aText:
          "No. PokeRoll is an independent fan-made project and is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak or The Pokémon Company. See our disclaimer for the full notice.",
      },
    },

    randomGenerator: {
      metaTitle: "Random Pokémon Generator | PokeRoll",
      /** Template: {name} = shared Pokémon display name. */
      sharedTitle: "{name} — Random Pokémon Generator",
      metaDescription:
        "Roll a random Pokémon in one tap — name, type, ability, base stats and artwork included. Flip the card for a copy-ready Showdown set. Free fan-made tool.",
      /** Template: {name}; used when the name is ≤16 chars (SEO length window). */
      sharedDescLong:
        "I rolled {name} on PokeRoll — flip the card for its copy-ready Showdown set, or roll a random Pokémon of your own in one tap. Free fan-made tool.",
      /** Template: {name}; used for longer names. */
      sharedDescShort:
        "I rolled {name} on PokeRoll — flip the card for its copy-ready Showdown set, or roll a random one of your own. Free fan-made tool.",
      /** Template: {name}. */
      ogSharedTitle: "{name} — Random Pokémon",
      /** Template: {name}. */
      ogSharedDesc: "I rolled {name} on PokeRoll. What will you get?",
      keywords: [
        "random pokemon generator",
        "pokemon generator",
        "random pokemon",
        "generate random pokemon",
        "get random pokemon",
      ],
      headerTitle: "Random Pokémon Generator",
      headerDesc:
        "Roll a random Pokémon in one tap — every pull comes with its name, type, ability, stats and an official sprite.",
      faqs: [
        {
          q: "How does the random Pokémon generator work?",
          a: "Every roll picks one Pokémon at random from the full National Pokédex — over 1,000 species across all nine generations — and shows its name, types, ability, base stats, height, weight and official artwork.",
        },
        {
          q: "Can I reproduce or share a specific result?",
          a: "Yes. Use the Share button on the card — the link carries the exact Pokémon, so anyone opening it sees the same pull. You can also download the card as an image.",
        },
        {
          q: "Can I narrow the results down?",
          a: "Open the advanced filters to roll within a specific generation, region, type or category — or use the dedicated Gen, Region and Type generator pages linked below.",
        },
        {
          q: "Where does the Pokémon data come from?",
          a: "All species data comes from PokéAPI and is bundled locally with the site, so every roll is instant.",
        },
      ],
    },

    type: {
      /** Template: {type} = localized type display name. */
      metaTitle: "Random {type}-type Pokémon Generator | PokeRoll",
      /** Template: {type}. */
      metaDescription:
        "Generate a random {type}-type Pokémon instantly: name, abilities, base stats, generation and sprite, ready to copy to Showdown. Free fan-made tool.",
      /** Templates: {slug} = raw English type slug (lowercase). */
      keywords: [
        "random {slug} type pokemon generator",
        "random {slug} pokemon generator",
        "{slug} pokemon generator",
      ],
      /** Template: {type}. */
      breadcrumbType: "{type}-type Pokémon",
      /** Template: {type}. */
      headerTitle: "Random {type}-type Pokémon Generator",
      /** Template: {type}. */
      headerDesc:
        "Looking for a random {type}-type Pokémon? Here's one — tap Generate Again for another.",
      /** Template: {type}. */
      introS1: "{type}-type Pokémon first appeared in ",
      introS2: " alongside the ",
      /** Template: {region} = region display name. */
      introRegionLink: "{region} region",
      introS3: ". Roll one above, browse all 18 types with the ",
      introTypeLink: "Type Generator",
      introS4: ", or go ",
      introRandomLink: "fully random",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Browse {region} region",
      linkTitleType: "Type generator",
      linkTitleRandom: "Random Pokémon Generator",
    },

    gen: {
      /** Template: {gen} = generation number. */
      metaTitle: "Random Pokémon Generator Gen {gen} | PokeRoll",
      /** Templates: {gen}, {region} = raw region slug (lowercase, verbatim SEO copy). */
      metaDescription:
        "Generate a random Generation {gen} Pokémon from the {region} region: name, type, ability, base stats and sprite — copy it to Showdown. Fan-made tool.",
      /** Templates: {gen}. */
      keywords: [
        "random pokemon generator gen {gen}",
        "gen {gen} pokemon generator",
        "pokemon random generator gen {gen}",
      ],
      /** Template: {genLabel} = localized "Generation N". */
      headerTitle: "Random {genLabel} Pokémon Generator",
      /** Template: {genLabel}. */
      headerDesc:
        "{genLabel} introduced many fan-favorite Pokémon. Here's a random one — tap Generate Again for more.",
      introRegionPre: " introduced the ",
      /** Template: {region} = region display name. */
      introRegionLink: "{region} region",
      /** Template: {game} = game titles. */
      introGame: " and Pokémon {game}",
      introS3: ". Roll one above, browse by ",
      introTypeLink: "type",
      introS4: ", or go ",
      introRandomLink: "fully random",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Browse {region} region",
      linkTitleType: "Type generator",
      linkTitleRandom: "Random Pokémon Generator",
    },

    region: {
      // Third-version game titles that share these regions (same in all 5 locales).
      gameHoenn: "Ruby, Sapphire & Emerald",
      gameSinnoh: "Diamond, Pearl & Platinum",
      /** Templates: {region} = region display name, {gameDesc} = game titles. */
      metaTitle: "Random {region} Pokémon Generator — {gameDesc}",
      /** Template: {region}. */
      descStart: "Generate a random {region} Pokémon",
      descFill: " instantly",
      /** Template: {gameDesc}. */
      descFromGame: " from Pokémon {gameDesc}",
      descEnd:
        ": name, type, ability, base stats and sprite — copy it to Showdown. Free fan-made tool.",
      /** Templates: {slug} = raw region slug; REGION_EXTRA_KEYWORDS (lib/seo.ts) are appended. */
      keywords: ["random {slug} pokemon generator", "{slug} pokemon"],
      /** Template: {slug}; used when a region has no REGION_EXTRA_KEYWORDS entry. */
      keywordFallback: "random pokemon generator {slug}",
      /** Template: {region}. */
      breadcrumbRegion: "{region} Pokémon",
      /** Template: {region}. */
      headerTitle: "Random {region} Pokémon Generator",
      /** Template: {region}. */
      headerDescStart: "Explore the Pokémon of {region}",
      /** Template: {game} = game titles. */
      headerDescGame: ", featured in Pokémon {game}",
      headerDescEnd: ". Here's one for you — tap Generate Again for another.",
      /** Template: {region}. */
      introS1: "{region} is home to the ",
      /** Template: {genLabel} = localized "Generation N". */
      introGenLink: "{genLabel} Pokédex",
      /** Template: {game}. */
      introGame: " and the games Pokémon {game}",
      introS2: ". Roll one above, or try the ",
      introRandomLink: "fully random generator",
      introS3: " instead.",
      linkTitleRandom: "Random Pokémon Generator",
    },

    variants: {
      type: {
        title: "Random Pokémon Type Generator | PokeRoll",
        description:
          "Get a random Pokémon type and a matching Pokémon instantly — Fire, Water, Electric and all 18 types. Roll again for another, or copy your match to Showdown.",
        keywords: [
          "random pokemon type generator",
          "pokemon type generator",
          "random pokemon single type generator",
        ],
      },
      ability: {
        title: "Random Pokémon Ability Generator | PokeRoll",
        description:
          "Roll a random Pokémon ability like Static or Blaze and see a Pokémon that has it — check its full stats and typing, then copy the set to Showdown.",
        keywords: [
          "pokemon ability generator",
          "random pokemon ability generator",
          "generate random pokemon ability",
        ],
      },
      move: {
        title: "Random Pokémon Move Generator | PokeRoll",
        description:
          "Discover a random Pokémon move and a Pokémon that can learn it — check its power, accuracy and typing, then copy the set to Showdown. Fan-made tool.",
        keywords: ["random pokemon move generator", "pokemon move generator"],
      },
      bst: {
        title: "Random Pokémon Stats Generator (BST) | PokeRoll",
        description:
          "Generate a random Base Stat Total and reveal the Pokémon it belongs to — compare its six stats, roll again, then copy it to Showdown. Fan-made tool.",
        keywords: [
          "random pokemon stats generator",
          "random pokemon generator with stats",
          "pokemon random generator stats",
        ],
      },
      number: {
        title: "Random Pokémon Number Generator | PokeRoll",
        description:
          "Roll a random Pokédex number from 1 to 1025 and reveal which Pokémon it is — see its full card, then copy it to Showdown. Free fan-made tool.",
        keywords: [
          "pokemon number generator",
          "random pokemon number generator",
        ],
      },
      starter: {
        title: "Random Starter Pokémon Generator | PokeRoll",
        description:
          "Pick a random starter Pokémon from the first partners of every generation, from Kanto to Paldea — then copy it to Showdown. Free fan-made tool.",
        keywords: [
          "random starter pokemon generator",
          "pokemon starter generator",
          "random starter pokemon picker",
        ],
      },
      "no-names": {
        title: "Random Pokémon Generator Without Names — Guessing Game",
        description:
          "A mystery Pokémon with its name hidden — can you guess which one it is from its artwork and stats? Flip the card to reveal the Showdown set.",
        keywords: [
          "pokemon without names",
          "guess the pokemon",
          "pokemon mystery quiz",
          "random pokemon generator without names",
        ],
      },
      cute: {
        title: "Random Cute Pokémon Generator | PokeRoll",
        description:
          "Get a random cute Pokémon — soft, fluffy and adorable picks from across the whole Pokédex. Roll again for another cutie, or copy it to Showdown.",
        keywords: ["cute pokemon generator", "random cute pokemon generator"],
      },
      mythical: {
        title: "Random Mythical Pokémon Generator | PokeRoll",
        description:
          "Reveal a random Mythical Pokémon like Mew, Celebi or Jirachi — rare picks from across every generation, ready to copy to Showdown. Fan-made tool.",
        keywords: [
          "random mythical pokemon generator",
          "mythical pokemon generator",
        ],
      },
      mega: {
        title: "Random Mega Pokémon Generator | PokeRoll",
        description:
          "Spin a random Mega Evolution or Primal Reversion Pokémon — see its boosted stats and ability, then copy the set to Showdown. Free fan-made tool.",
        keywords: ["random mega pokemon generator", "mega pokemon generator"],
      },
      nickname: {
        title: "Random Pokémon Name & Nickname Generator | PokeRoll",
        description:
          "Generate a random Pokémon paired with a fun, cute nickname — perfect for your next playthrough or Nuzlocke. Copy the set to Showdown. Fan-made tool.",
        keywords: [
          "pokemon nickname generator",
          "random pokemon nickname generator",
          "generate random pokemon name",
        ],
      },
      noNamesPromo: {
        s1: "Want a seeded multi-card quiz to share? ",
        link: "Try the Silhouette Challenge →",
        linkTitle: "Guess the Pokémon",
      },
    },

    legendary: {
      metaTitle: "Random Legendary Pokémon Generator | PokeRoll",
      metaDescription:
        "Generate a random Legendary Pokémon instantly: name, type, ability, base stats and official artwork — copy the set to Showdown. Fan-made tool.",
      keywords: [
        "random legendary pokemon generator",
        "legendary pokemon generator",
        "random legendary pokemon",
      ],
      breadcrumbLabel: "Legendary Generator",
      headerTitle: "Random Legendary Pokémon Generator",
      headerDesc:
        "Only Legendary Pokémon in this pool — tap Generate Again for another legendary roll.",
      note: "Tap Generate Again to roll another Legendary — Add to Team keeps it in your squad.",
    },
  },
};
