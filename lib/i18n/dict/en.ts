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
    languageAria: "Language",
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

  adventureView: {
    /** Template: {seed} = adventure seed code. */
    seedLine: "Seed {seed} — share this link to replay the exact same adventure.",
    difficultyLabel: "Difficulty",
    addAllToTeam: "Add all to Team",
    shareAdventure: "Share Adventure",
    rollAgain: "Roll Again",
    manifest: "Adventure Manifest",
    /** Template: {difficulty} = difficulty label. */
    manifestDifficulty: "Difficulty · {difficulty}",
    /** Template: {seed} = adventure seed code. */
    manifestSeed: "Seed · {seed}",
    trainerProfile: "Trainer Profile",
    /** Template: {style} = trainer style. */
    styleLine: "Style · {style}",
    challenge: "Challenge",
    goal: "Goal",
    /** Template: {n} = team size. */
    teamCompanions: "Team · {n} unknown companions",
    yourStarter: "Your Starter",
    yourRival: "Your Rival",
    /** Templates: {name} = rival name, {type} = rival starter type. */
    rivalCounter: "{name} chose a {type}-type starter to counter yours.",
    /** Template: {n} = team size. */
    yourTeam: "Your Team ({n})",
    gymJourney: "Gym Journey",
    legendaryEncounter: "Legendary Encounter",
    /** Templates: {count} = current team size, {max} = team capacity. */
    teamFull: "Team is full ({count}/{max}). Remove some to add new Pokémon.",
    alreadyInTeam: "All these Pokémon are already in your team.",
    /** Templates: {added} = number added, {max} = team capacity. */
    addedFull: "Added {added} — team is now full ({max}/{max}).",
    /** Templates: {added} = number added, {count} = new team size, {max} = capacity. */
    addedToTeam: "Added {added} to your team ({count}/{max}).",
  },

  challengeGenerator: {
    hints: {
      guess: "Names hidden — reveal to check",
      shiny: "How many encounters to a shiny?",
    },
    createChallenge: "Create Challenge",
    shareChallenge: "Share challenge",
    filtersAria: "Filters",
    filtersTitle: "Filters",
    collapseAria: "Collapse filters",
    collapseTitle: "Collapse filters",
    difficulty: "Difficulty",
    random: "Random",
    /** Template: {max} = count cap for the current difficulty. */
    countMax: "Count (max {max})",
    typeFilter: "Type filter",
    regionFilter: "Region filter",
    /** Templates: {revealed} = flipped cards, {total} = total cards. */
    revealedProgress: "Revealed {revealed} / {total}",
    hideAll: "Hide all",
    revealAll: "Reveal all",
    silhouetteAlt: "Hidden Pokémon silhouette",
    /** Template: {types} = " · "-joined type hint list. */
    typeHint: "Hint: {types}",
    whosThat: "Who's that Pokémon?",
  },

  shinyHunt: {
    shinyTag: "✦ SHINY",
    /** Template: {odds} = odds denominator (localized number). */
    oddsGuaranteed: "1 / {odds} · GUARANTEED",
    /** Template: {odds}. */
    oddsLabel: "ODDS 1 / {odds}",
    /** Template: {odds}. */
    oddsGuaranteedLower: "1 / {odds} · guaranteed",
    /** Template: {odds}. */
    oddsLabelLower: "odds 1 / {odds}",
    encountersLabel: "Encounters",
    /** Template: {name} = Pokémon display name. */
    shinyName: "Shiny {name}",
    foundAfterPre: "Found after ",
    /** Template: {n} = encounter count (localized number). */
    foundAfterCount: "{n} encounters",
    foundAfterSep: " — ",
    verdicts: {
      absurdlyLucky: "Absurdly lucky — that's a story to tell.",
      lucky: "Lucky! Under odds.",
      overOdds: "Over odds — but you got there.",
      brutal: "Brutal hunt. This one earned its sparkle.",
    },
    shareAria: "Share your shiny",
    shareTitle: "Share your shiny",
    newHuntAria: "Start your own hunt",
    newHuntTitle: "Start your own hunt",
    rendering: "Rendering…",
    /** Template: {name} = wild Pokémon display name. */
    wildAppeared: "A wild {name} appeared…",
    notShiny: "not shiny",
    emptyState: "Tall grass rustles… start encountering to hunt your shiny.",
    encounter: "Encounter!",
  },

  favoritesClient: {
    /** navigator.share title for the favorites snapshot link. */
    shareTitle: "My Pokémon Favorites",
    sharedTitle: "Shared Favorites",
    yourTitle: "Your Favorites",
    sharedDesc: "A favorites snapshot shared with you — read-only",
    yourDesc: "Pokémon you've favorited on this device",
    /** Template: {count} = number of favorites. */
    slotsUsed: "{count} / 15 slots used",
    /** Template: {count} = number of favorites; shown when the cap is hit. */
    slotsMax: "{count} / 15 — max reached",
    /** Template: {count} = Pokémon in the shared snapshot. */
    sharedCount: "{count} Pokémon in this shared snapshot",
    copyLink: "Copy Link",
    saveToMine: "Save to My Favorites",
    /** Template: {added} = " (+n)" when the merge added entries, else "". */
    savedViewMine: "Saved{added} — View Mine",
    /** Suffix after the bolded favorites count. */
    favoritedSuffix: " favorited",
    clearAll: "Clear all",
    invalidLink: "This favorites link is invalid or has expired.",
    goToMine: "Go to My Favorites",
    emptyState:
      "No favorites yet. Roll a Pokémon and tap the heart to save it here.",
    rollPokemon: "Roll a Pokémon",
    /** Template: {name} = Pokémon display name. */
    removeAria: "Remove {name} from favorites",
    remove: "Remove",
    shareFavorites: "Share Favorites",
  },

  /* ---------------------------------------------------------------- */
  /*  Component-level UI strings (camelCase, keyed by component)        */
  /* ---------------------------------------------------------------- */

  teamClient: {
    readyTitle: "Your Pokémon team is ready",
    readyDesc: "Manage your squad — share it, or export every set to Showdown.",
    sharedTitle: "A team shared with you",
    linkCopied: "Link copied!",
    shareTeam: "Share Team",
    clearTeam: "Clear Team",
    copyLink: "Copy Link",
    backToGenerator: "Back to Generator",
    guideTitle: "How to play",
    guide1T: "Roll & add",
    guide1D: "Generate Pokémon on any tool and tap “Add to Team” to save them here.",
    guide2T: "Manage your squad",
    guide2D: "Select Pokémon to remove or clear — your team holds up to 6.",
    guide3T: "Share or export",
    guide3D: "Copy the team link for friends, or copy every set as Showdown text for battles.",
    /** Segment: followed by the selected count, then selectedSep + team size. */
    selectedPre: "Selected ",
    /** Segment: between the selected count and the team size. */
    selectedSep: " / ",
    clearSelection: "Clear selection",
    selectAll: "Select all",
    remove: "Remove",
    /** Template: {count} = number of selected Pokémon. */
    removeCount: "Remove ({count})",
    empty: "No Pokémon yet. Generate some and tap “Add to Team”.",
  },

  teamTray: {
    /** Template: {count} = current team size, {max} = max team size. */
    ariaLabel: "Your team ({count}/{max})",
    title: "Your team",
    heading: "Your Team",
    empty: "No Pokémon selected yet.",
    buildTeam: "Build a Team",
    openTeam: "Open Team",
  },

  teamGenerator: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "Team is full ({count}/{max}). Remove some first.",
    alreadyInTeam: "All rolled Pokémon are already in your team.",
    /** Template: {count} = number added. */
    addedToTeam: "Added {count} to your team.",
    readyTitle: "Your random team is ready",
    readyDesc:
      "Roll a filtered squad — lock favourites, re-roll the rest, then add them to your team or export to Showdown.",
    rolling: "Rolling…",
    roll: "Roll",
    /** Template: {count} = unlocked slots that will be re-rolled. */
    rollCount: "Roll ({count})",
    allLockedTitle: "All cards are locked — unlock one to roll",
    filtersAria: "Filters",
    collapseFilters: "Collapse filters",
    guideTitle: "How to play",
    guide1T: "Roll a squad",
    guide1D: "One tap draws a fresh random team — lock cards you like, then re-roll just the rest.",
    guide2T: "Filter the pool",
    guide2D: "Restrict by generation, region, type or team size before rolling.",
    guide3T: "Share, save or export",
    guide3D: "Copy the squad as Showdown sets, flip any card to view its set, share the link, or tap Add to Team to keep favourites.",
    generationLabel: "Generation",
    regionLabel: "Region",
    typeLabel: "Type",
    teamSizeLabel: "Team Size",
    optionRandom: "Random",
    addAllToTeam: "Add all to Team",
  },

  teamCoachUi: {
    /** Template: {max} = most picks the user can keep (count - 1). */
    keepLimit: "Keep at most {max} — leave at least 1 slot for the coach.",
    generateFailed: "Generation failed — try again.",
    /** Template: {count} = number added. */
    addedToTeam: "Added {count} to your team.",
    alreadyInTeam: "These Pokémon are already in your team.",
    readyTitle: "Your balanced team is ready",
    readyDesc:
      "Lock the Pokémon you already picked, fill the rest with type coverage — then add them to your team or export to Showdown.",
    rerollUnlocked: "Re-roll unlocked",
    generateTeam: "Generate team",
    viewMyTeam: "View my team",
    guideTitle: "How to play",
    guide1T: "Add picks (optional)",
    guide1D: "Search or import from Favorites / Your Team — or skip and let the coach roll all 6.",
    guide2T: "Generate the team",
    guide2D: "Team Coach fills the team with balanced types and roles.",
    guide3T: "Lock & re-roll",
    guide3D: "Lock Pokémon you like, re-roll the rest, then add all, share the link or copy the sets to Showdown.",
    yourTeamHeading: "Your team",
    /** Template: {kept} = locked picks, {count} = target team size. */
    lockedTarget: "{kept} locked · target {count}",
    searchPlaceholder: "Search Pokémon (optional)…",
    importFavorites: "Import Favorites",
    importTeam: "Import Team",
    filtersAria: "Filters",
    collapseFilters: "Collapse filters",
    teamSizeLabel: "Team size",
    generationLabel: "Generation",
    regionLabel: "Region",
    typeLabel: "Type",
    optionAny: "Any",
    allLockedHint: "Everything is locked — unlock a card to re-roll.",
    /** Template: {count} = unlocked slots. */
    rerollHint: "Re-rolls {count} unlocked slot(s)",
    /** Template: {count} = slots the coach will fill. */
    fillHint: "Will fill {count} slot(s) with balanced coverage",
    fullRollHint: "Rolls a full balanced team",
    emptyHint:
      "Add a pick or just generate a full team — the coach balances types and roles.",
    pickerFavTitle: "From Favorites",
    pickerTeamTitle: "From Your Team",
    favEmpty: "No favorites yet — tap the heart on any generator first.",
    teamEmpty: "Your team is empty — add Pokémon on any generator first.",
    addAllToTeam: "Add all to Team",
  },

  teamChallengeUi: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "Team is full ({count}/{max}). Remove some first.",
    alreadyInTeam: "All these Pokémon are already in your team.",
    /** Template: {count} = number added. */
    addedToTeam: "Added {count} to your team.",
    idleTitle: "Ready to start a Team Challenge?",
    idleDesc:
      "Click below to generate a random 6-Pokémon challenge team — then roll your own squad and see whose total base stats are higher.",
    generateChallenge: "Generate the challenge",
    howToTitle: "How to use the Team Challenge",
    howTo1T: "1. The challenge team.",
    howTo1D:
      "This page always shows a seeded 6-Pokémon squad — everyone who opens the same link sees the exact same lineup (that's the \"challenge\").",
    howTo2T: "2. Roll yours.",
    /** Segment: before the howTo2Em link-styled term. */
    howTo2S1: "Tap",
    howTo2Em: "Roll my team",
    /** Segment: after the howTo2Em term. */
    howTo2S2:
      "to generate your own 6-Pokémon squad — one roll per challenge, so no retrying until you win.",
    howTo3T: "3. Compare.",
    howTo3D:
      "Both teams are shown with their total base stats (BST) — the higher total wins, and ties are possible.",
    howTo4T: "4. Share.",
    howTo4Em: "Challenge a friend",
    howTo4D:
      "copies a link with the same challenge team, so a friend gets the identical lineup to try to beat.",
    howTo5T: "5. Export the result.",
    howTo5Em1: "Share the result card",
    /** Segment: between howTo5Em1 and howTo5Em2. */
    howTo5S: "or",
    howTo5Em2: "Download card",
    howTo5D:
      "creates an image of the matchup (with a QR code) — great for posting in your community.",
    howTo6T: "6. Start your own.",
    howTo6Em: "Start your own challenge",
    howTo6D:
      "makes you the host — you re-roll the challenge team and share it with a friend, instead of rolling against your own squad again.",
    ownerHeading: "Your challenge team is ready",
    yoursHeading: "Here's your shot — try to beat it!",
    takeHeading: "Take the challenge — roll your team",
    ownerDesc:
      "Share the link — a friend rolls their own team to try to beat this one.",
    yoursDesc:
      "One roll per challenge — start your own challenge to share with a friend.",
    takeDesc:
      "You get 6 random Pokémon — higher total base stats than the challenge team wins.",
    rerollChallenge: "Re-roll challenge",
    startOwn: "Start your own challenge",
    rollMine: "Roll my team",
    linkCopied: "Link copied!",
    challengeFriend: "Challenge a friend",
    step1T: "Roll a team",
    step1D: "That's the lineup you'll challenge with.",
    step2T: "Share the link",
    step2D: "A friend opens the exact same team.",
    step3T: "They roll & compare",
    step3D: "Total BST decides who wins — export either team to Showdown.",
    ownerTeamLabel: "🫵 Your challenge team",
    challengeLabel: "🏳️ The challenge",
    yourTeamLabel: "Your team",
    theirTeamLabel: "Their team",
    theChallenge: "The challenge",
    youWin: "You win!",
    theirWin: "Their team wins!",
    challengeWins: "The challenge wins!",
    tie: "It's a tie!",
    higherWins: "Higher total base stats wins.",
    rendering: "Rendering…",
    shareResult: "Share result",
    downloadCard: "Download card",
    addAllToTeam: "Add all to Team",
  },

  wheelGenerator: {
    welcome: "Welcome Trainer!",
    intro:
      "Up to 6 players take turns spinning — every landing stacks in the results below.",
    roundComplete: "Round complete — check the results below!",
    spinWheel: "Spin the wheel",
    /** Template: {current} = current player number, {count} = total players. */
    playerTurn: "Player {current} of {count} — spin the wheel",
    spinning: "Spinning…",
    roundCompleteButton: "Round complete",
    spinButton: "Spin!",
    newRound: "New round",
    playersLabel: "Players",
    /** Template: {current} = spins so far, {count} = total players. */
    roundResults: "Round results · {current}/{count}",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    winnerLine: "👑 Player {player} wins with {name} ({bst} BST)!",
    /** Template: {n} = player number still to spin. */
    stillToSpin: "Player {n} still to spin",
    /** Template: {n} = player number. */
    playerLabel: "Player {n}",
    roundLeader: "Round leader",
    shareResults: "Share results",
    addAllToTeam: "Add all to Team",
    /** Template: {count} = number of Pokémon added to the team. */
    addedNotice: "Added {count} to your team.",
    alreadyInTeam: "All landed Pokémon are already in your team.",
    // Shared round result view (result=1 link).
    sharedTitle: "Wheel round result",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    sharedWinner: "Player {player} won with {name} ({bst} BST)!",
    /** Template: {count} = number of players in the shared round. */
    sharedSubtitle: "A {count}-player round shared on PokeRoll",
    spinYourOwn: "Spin your own wheel",
    loadingResults: "Loading results…",
  },

  fusionGenerator: {
    welcome: "Welcome Trainer!",
    intro: "Fuse two random Pokémon into a new hybrid — tap Add to Team to keep it.",
    yourFusion: "Your fusion is…",
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
    adventure: {
      metaTitle: "Pokémon Adventure Generator",
      /** Template: {diff} = difficulty label (Easy / Normal / Hard / Extreme). */
      metaTitleDiff: "Pokémon Adventure Generator — {diff} Difficulty",
      metaDescription:
        "Roll a Pokémon adventure in one tap — trainer, rival, region, starter, team of six, challenge and legendary encounter. Share it or copy any card to Showdown.",
      keywords: [
        "pokemon adventure generator",
        "random pokemon adventure generator",
        "pokemon journey generator",
      ],
      headerTitle: "Roll Your Pokémon Adventure",
      headerDesc:
        "One tap rolls your trainer, region, starter, team, challenge and goal — a full Pokémon adventure every time.",
      guideTitle: "How to play",
      steps: [
        {
          n: "1",
          t: "Roll your adventure",
          d: "One tap rolls your trainer, rival, region, starter, team of six, challenge, legendary and goal.",
        },
        {
          n: "2",
          t: "Pick a difficulty",
          d: "Easy, Normal, Hard or Extreme — the higher it goes, the wilder the journey.",
        },
        {
          n: "3",
          t: "Share it",
          d: "Copy the seeded link so friends replay the exact same adventure — or add the team to yours.",
        },
      ],
      faqs: [
        {
          q: "What does one adventure include?",
          a: "A trainer name, role and style, a rival, a region, your starter, a team of six, a challenge, a gym journey, a legendary encounter and a final goal — all rolled in one tap.",
        },
        {
          q: "What is the seed in the link?",
          a: "An 8-character code that drives the roll. The same seed and difficulty always produce the exact same adventure, so every link is reproducible.",
        },
        {
          q: "What does difficulty change?",
          a: "Difficulty scales the adventure from Easy to Extreme — it shapes the challenges you face, like shiny odds and encounter rules.",
        },
        {
          q: "Can I share my adventure?",
          a: "Yes — copy the page link. It carries the seed and difficulty, so friends open the identical adventure manifest.",
        },
      ],
    },

    guess: {
      metaTitle: "Guess the Pokémon — Silhouette Challenge",
      metaDescription:
        "Guess hidden Pokémon from their silhouettes, reveal them one by one to check, then share the seeded link to challenge a friend. Free fan-made tool.",
      keywords: [
        "guess the pokemon",
        "pokemon guessing game",
        "pokemon quiz",
        "who's that pokemon",
      ],
      breadcrumbLabel: "Guess the Pokémon",
      headerTitle: "Guess the Pokémon",
      /** Template: {count} = hidden Pokémon count, clamped to the difficulty cap. */
      headerDesc:
        "We hid the names of {count} random Pokémon. Reveal them one by one and test your Poké-knowledge!",
      promoS1: "Prefer one quick mystery card instead? ",
      promoLink: "Mystery Pokémon →",
      guideTitle: "How to play",
      steps: [
        {
          t: "Study the silhouettes",
          d: "Shape, size and the Easy type hint are all you've got — lock in your guess.",
        },
        {
          t: "Flip to reveal",
          d: "Click a card to flip it and see if you named the Pokémon right.",
        },
        {
          t: "Share & compare",
          d: "The seed in the link recreates the same lineup — share it and race a friend.",
        },
      ],
    },

    shiny: {
      metaTitle: "Random Pokémon Generator Shiny Hunt | PokeRoll",
      metaDescription:
        "The shiny Pokémon generator with real hunt odds: click Encounter, find your shiny and share the card. Easy mode guarantees a shiny within 204 draws.",
      keywords: [
        "random pokemon generator shiny",
        "random pokemon generator shiny odds",
        "shiny pokemon generator",
      ],
      breadcrumbLabel: "Shiny Hunt",
      headerTitle: "Shiny Hunt Challenge",
      headerDescEasy:
        "Easy mode — every click is a 1-in-204 draw and your shiny is guaranteed within 204 encounters. Share the link and compare with a friend.",
      headerDescDefault:
        "Click Encounter and see how long it takes to find your shiny — same 1/4096 odds as the games. Share the link and compare with a friend.",
      guideTitle: "How to play",
      steps: [
        {
          t: "Click Encounter",
          d: "Each click is one draw — 1-in-204 on Easy, 1-in-4096 otherwise, and Easy guarantees a shiny within 204 clicks.",
        },
        {
          t: "Find your shiny",
          d: "When it sparkles, the found card unlocks Share and Download.",
        },
        {
          t: "Share the hunt",
          d: "Share the card or the seeded link — friends see your result, then start their own hunt.",
        },
      ],
      faqs: [
        {
          q: "What are the shiny odds?",
          a: "Normal, Hard and Extreme modes use the same 1-in-4096 rate as the mainline games. Easy mode raises it to 1-in-204 per click.",
        },
        {
          q: "What is Easy mode?",
          a: "A friendlier hunt: 1-in-204 odds per Encounter, and your shiny is guaranteed to appear within 204 draws — no endless dry streaks.",
        },
        {
          q: "What happens when I find a shiny?",
          a: "The found card unlocks Share and Download. The shared link opens straight on your found shiny, and the downloaded card image carries a QR code friends can scan to start their own hunt.",
        },
      ],
    },

    favorites: {
      metaTitle: "Your Pokémon Favorites | PokeRoll",
      metaDescription:
        "Save the Pokémon you love and build your favorites collection — share the list with a link, and copy any card to Showdown. Free fan-made tool.",
      keywords: [
        "pokemon favorites",
        "favorite pokemon list",
        "share pokemon collection",
      ],
      headerTitle: "Pokémon Favorites",
      headerDesc:
        "Keep the Pokémon you love in one place — then share the whole list with a single link.",
    },

    contact: {
      metaTitle: "Contact Us | PokeRoll",
      metaDescription:
        "Contact the PokeRoll team — email hello@pokeroll.app for feedback and bug reports, say hi on X @JoeyChou2024, or open an issue on GitHub. We reply fast.",
      keywords: [
        "contact pokeroll",
        "pokemon generator feedback",
        "pokeroll support",
      ],
      headerTitle: "Contact Us",
      headerDesc:
        "Questions, ideas or a bug to report? Pick whichever channel suits you — every message reaches the maker directly.",
      channels: [
        {
          title: "Email",
          handle: "hello@pokeroll.app",
          desc: "Feedback, bug reports or business inquiries — we read everything.",
          action: "Send email",
        },
        {
          title: "X (Twitter)",
          handle: "@JoeyChou2024",
          desc: "Fastest replies. Daily build-in-public updates on what's next.",
          action: "Follow on X",
        },
        {
          title: "GitHub",
          handle: "ihuajiu/pokeroll.app",
          desc: "Open source. Found a bug? Open an issue and it gets tracked.",
          action: "Open an issue",
        },
      ],
      soloNote:
        "PokeRoll is a solo fan-made project — not affiliated with Nintendo or The Pokémon Company. Replies usually land within 48 hours.",
      backLink: "← Back to the generator",
    },

    privacy: {
      metaTitle: "Privacy Policy — PokeRoll",
      metaDescription:
        "PokeRoll privacy policy — we use anonymous Google Analytics, store favorites and theme in your browser's localStorage only, and never collect personal data.",
      keywords: [
        "pokeroll privacy policy",
        "pokemon tool privacy",
        "fan site privacy",
      ],
      headerTitle: "Privacy Policy",
      intro:
        "PokeRoll is a free fan-made Pokémon toolbox. We keep data collection to an absolute minimum — you can use every tool without an account, and we never ask for personal information.",
      analytics: {
        h: "Analytics:",
        p: "We use Google Analytics to understand overall traffic (which pages are visited, roughly how many visitors). This data is aggregated and anonymous — we do not use it to identify individual users.",
      },
      storage: {
        h: "Browser storage:",
        p: "Your favorites, team picks and theme preferences are stored in your browser's localStorage only. This data never leaves your device and is never uploaded to our servers.",
      },
      personal: {
        h: "Personal data:",
        p: "We do not collect names, email addresses or any other personal data. There is no sign-up and no tracking beyond the anonymous analytics described above.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Affiliate links:",
        s1: "Some shopping links on this site are affiliate links — see the ",
        l1: "disclaimer",
        s2: " for details. Affiliate partners may use their own cookies per their own privacy policies.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Contact:",
        s1: "Questions about this policy? Email ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Back to the generator",
    },

    terms: {
      metaTitle: "Terms of Use — PokeRoll",
      metaDescription:
        "PokeRoll terms of use — a fan-made, unofficial Pokémon toolbox provided as is. Pokémon is a trademark of Nintendo, Game Freak and The Pokémon Company.",
      keywords: [
        "pokeroll terms of use",
        "pokemon fan site terms",
        "unofficial pokemon tool",
      ],
      headerTitle: "Terms of Use",
      intro:
        "PokeRoll is a fan-made, unofficial Pokémon toolbox. By using this site you agree to the terms below.",
      unofficial: {
        h: "Unofficial fan project:",
        p: "This site is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak or The Pokémon Company. Pokémon and all related names, characters and artwork are trademarks of Nintendo, Game Freak and The Pokémon Company, and are used here for informational and entertainment purposes only.",
      },
      asIs: {
        h: "Provided as is:",
        p: 'The tools and content on this site are provided "as is", without warranties of any kind. Random results are for fun; we make no guarantees about availability, accuracy or fitness for any purpose.',
      },
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        h: "Data sources:",
        s1: "Pokémon data (names, types, stats, abilities, sprites) comes from the public ",
        l1: "PokéAPI",
        s2: ". Sprites are © their respective rights holders.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Affiliate links:",
        s1: "As an Amazon Associate we earn from qualifying purchases made through shopping links on this site. This does not affect the tools, which remain free. See the ",
        l1: "disclaimer",
        s2: " for the full disclosure.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Contact:",
        s1: "Questions about these terms? Email ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Back to the generator",
    },

    disclaimer: {
      metaTitle: "Disclaimer & Affiliate Notice — Fan-made Pokémon Tool",
      metaDescription:
        "PokeRoll is a fan-made, unofficial site and is not affiliated with Nintendo, Game Freak or The Pokémon Company. Read the disclaimer and affiliate disclosure.",
      keywords: [
        "pokemon fan site disclaimer",
        "pokemon affiliate disclosure",
        "unofficial pokemon site",
      ],
      headerTitle: "Disclaimer",
      intro:
        "This site is a fan-made, unofficial tool. It is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak or The Pokémon Company. Pokémon names, characters and artwork are trademarks of their respective owners and are used here for informational and entertainment purposes only.",
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        s1: "All Pokémon data (names, types, abilities, stats, sprites) is fetched from the public ",
        l1: "PokéAPI",
        s2: ". Sprites are © their respective rights holders.",
      },
      affiliate: {
        h: "Affiliate disclosure:",
        p: "As an Amazon Associate we earn from qualifying purchases made through the shopping links on this site. This does not affect the tool, which remains free to use.",
      },
      backLink: "← Back to the generator",
    },

    randomPokemon: {
      metaTitle: "Random Pokémon — Roll One Now | PokeRoll",
      metaDescription:
        "Get a random Pokémon in one tap — every roll comes with name, type, ability, base stats and official artwork, ready to copy to Showdown. Free fan-made tool.",
      keywords: [
        "random pokemon generator",
        "pokemon generator",
        "random pokemon",
        "generate random pokemon",
        "get random pokemon",
      ],
    },
    randomPokemonPicker: {
      metaTitle: "Random Pokémon Picker | PokeRoll",
      metaDescription:
        "Pick a random Pokémon in one tap — every pick comes with name, type, ability, base stats and official artwork, ready to copy to Showdown. Free fan-made tool.",
      keywords: [
        "random pokemon generator",
        "pokemon generator",
        "random pokemon",
        "generate random pokemon",
        "get random pokemon",
      ],
    },
    pokemonRandomizer: {
      metaTitle: "Pokémon Randomizer | PokeRoll",
      metaDescription:
        "Randomize a Pokémon in one tap — every roll comes with name, type, ability, base stats and official artwork, ready to copy to Showdown. Free fan-made tool.",
      keywords: [
        "random pokemon generator",
        "pokemon generator",
        "random pokemon",
        "generate random pokemon",
        "get random pokemon",
      ],
    },

    team: {
      metaTitle: "Your Pokémon Team | PokeRoll",
      metaDescription:
        "Your saved squad of randomly generated Pokémon — share the link with friends, or copy every set to Showdown for battles. Free fan-made tool.",
      keywords: [
        "pokemon team builder",
        "random pokemon team builder",
        "random pokemon team generator",
        "pokemon team planner",
      ],
      headerTitle: "Your Pokémon Team",
      headerDesc:
        "Your saved squad — add Pokémon from any generator, then build and share.",
      faqs: [
        {
          q: "How do I use this team in Pokémon Showdown?",
          a: "Tap Copy Sets below the team (the button with the Showdown badge) to copy the squad in Showdown's text format. Then open play.pokemonshowdown.com/teambuilder, choose Import/Export and paste the text — every set loads with its moves, ability, item, nature and EVs, ready to battle or fine-tune.",
        },
      ],
    },

    teamRandom: {
      metaTitle: "Random Pokémon Team Generator | PokeRoll",
      metaDescription:
        "Generate a random team of 6 Pokémon in one tap — lock favourites, re-roll the rest, then export every set to Showdown or share the link. Free fan-made tool.",
      keywords: [
        "random pokemon team generator",
        "pokemon team generator",
        "random pokemon team",
        "make a random pokemon team",
      ],
      headerTitle: "Random Pokémon Team",
      headerDesc:
        "Roll a filtered squad of random Pokémon — then add your favourites to Your Team.",
      faqs: [
        {
          q: "How are teams generated?",
          a: "Each roll draws six random Pokémon at once. Open the filters to restrict the pool by generation, region, type or category (like Legendary or Starter) before rolling.",
        },
        {
          q: "Why did I get fewer than six Pokémon?",
          a: "Very narrow filters can leave a matching pool smaller than six. Widen one of the filters — or set one back to Random — and roll again.",
        },
        {
          q: "Can I save or share a team?",
          a: "Share the page link — the URL carries the rolled squad, so friends opening it see the same six. Tap Add to Team on any card to keep favourites in Your Team across the whole site.",
        },
        {
          q: "How do I use this team in Pokémon Showdown?",
          a: "Tap Copy Sets below the team (the button with the Showdown badge) to copy the squad in Showdown's text format. Then open play.pokemonshowdown.com/teambuilder, choose Import/Export and paste the text — every set loads with its moves, ability, item, nature and EVs, ready to battle or fine-tune.",
        },
      ],
    },

    teamCoach: {
      metaTitle: "Pokémon Team Coach — Fill the Rest of Your Team",
      metaDescription:
        "Lock the Pokémon you already picked and let Team Coach fill the rest with type coverage and balanced roles — then copy the team to Showdown. Free fan-made tool.",
      keywords: [
        "pokemon team builder",
        "pokemon team filler",
        "pokemon team coach",
        "auto team builder pokemon",
      ],
      breadcrumbLabel: "Team Coach",
      headerTitle: "Pokémon Team Coach",
      headerDesc:
        "Lock the Pokémon you already picked, fill the rest with type coverage and balanced roles.",
      faqs: [
        {
          q: "How do I use this team in Pokémon Showdown?",
          a: "Tap Copy Sets below the team (the button with the Showdown badge) to copy the squad in Showdown's text format. Then open play.pokemonshowdown.com/teambuilder, choose Import/Export and paste the text — every set loads with its moves, ability, item, nature and EVs, ready to battle or fine-tune.",
        },
      ],
    },

    teamChallenge: {
      metaTitle: "Pokémon Team Challenge — Roll a Team, Challenge a Friend",
      metaDescription:
        "Roll a seeded team of 6 Pokémon, share the link, and challenge a friend — total BST picks the winner, then export either team to Showdown. Free fan-made tool.",
      keywords: [
        "pokemon team challenge",
        "random pokemon team generator",
        "random pokemon team",
        "pokemon team generator",
      ],
      breadcrumbLabel: "Team Challenge",
      headerTitle: "Pokémon Team Challenge",
      headerDesc:
        "Roll a 6-Pokémon challenge team, share the link, and let total BST pick a winner against your friends.",
      faqs: [
        {
          q: "How do I use this team in Pokémon Showdown?",
          a: "Tap Copy Sets below the team (the button with the Showdown badge) to copy the squad in Showdown's text format. Then open play.pokemonshowdown.com/teambuilder, choose Import/Export and paste the text — every set loads with its moves, ability, item, nature and EVs, ready to battle or fine-tune.",
        },
      ],
    },

    wheel: {
      metaTitle: "Random Pokémon Generator Wheel | PokeRoll",
      metaDescription:
        "Spin the wheel for a random Pokémon — a fun game-of-chance picker across the whole Pokédex. Watch it land, then copy your pick to Showdown. Free fan-made tool.",
      keywords: [
        "random pokemon generator wheel",
        "pokemon wheel generator",
        "random pokemon wheel",
        "pokemon picker wheel",
      ],
      breadcrumbLabel: "Spin the Wheel",
      headerTitle: "Pokémon Wheel Generator",
      headerDesc:
        "Spin the wheel for a random Pokémon — a fun game-of-chance picker across the Pokédex — copy your pick to Showdown.",
      guideTitle: "How to play",
      steps: [
        {
          n: "1",
          t: "Pick your players",
          d: "Choose 2-6 players — each one takes a turn spinning the wheel.",
        },
        {
          n: "2",
          t: "Spin & land",
          d: "Every spin lands on a Pokémon and stacks into the round results below.",
        },
        {
          n: "3",
          t: "Battle & share",
          d: "Highest BST wins the round — share the result to challenge friends.",
        },
      ],
    },

    fusion: {
      metaTitle: "Pokémon Fusion Generator | PokeRoll",
      metaDescription:
        "Fuse two random Pokémon into a brand-new hybrid with a combined name, type and stats — roll again for a stranger pair, then copy the fusion to Showdown.",
      keywords: [
        "pokemon fusion generator",
        "random pokemon fusion generator",
        "pokemon fusion maker",
        "pokemon fusion creator",
      ],
      breadcrumbLabel: "Fusion Tool",
      headerTitle: "Pokémon Fusion Generator",
      headerDesc:
        "Fuse two random Pokémon into a brand-new hybrid with a combined name, type and stats — then copy the fusion to Showdown.",
      faqs: [
        {
          q: "How does the fusion generator work?",
          a: "Each roll picks two random Pokémon and fuses them into one hybrid — a blended name plus combined types and stats from both parents.",
        },
        {
          q: "Can I share or keep a fusion?",
          a: "Yes. The Share button copies a link that reproduces the exact same fusion, and Download saves the fusion card as an image.",
        },
        {
          q: "Is this an official Pokémon tool?",
          a: "No — PokeRoll is a fan-made project. Pokémon data comes from PokéAPI; fusion results are generated for fun and are not official designs.",
        },
      ],
    },
  },
};
