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
    winnerCard: "WINNER card",
    winnerSavedBang: "WINNER card saved!",
    shareMenu: "Share",
    shareCopyLink: "Copy link",
    shareWinnerImage: "WINNER image",
    shareSaveCard: "Save card",
    winnerPopupTitle: "Your roll is a WINNER!",
    winnerShareText: "I rolled {name} on PokeRoll — what will YOU get? 🎲",
    winnerClose: "Close",
    winnerOriginalCard: "Original card",
    winnerRollAgain: "Roll again",
    winnerCopyImage: "Copy image",
    winnerImageCopied: "Image copied!",
    winnerDownload: "Download",
    winnerTcgDownload: "TCG Download",
    winnerLightMode: "Light mode",
    winnerDarkMode: "Dark mode",
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
      guide: {
        introTitle: "Why roll a random Pokémon?",
        intro:
          "A random roll is the fastest way out of 'same six favourites' thinking. One tap hands you a species you didn't choose — with stats, typing and artwork — and suddenly you're theorycrafting a moveset for a Pokémon you'd never have picked yourself. Use it as a draft pick, a drawing prompt, a Nuzlocke encounter table, or the first slot of a brand-new team.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Challenge starter",
            d: "Roll once and lock the result as your next playthrough's starter — whatever it is. Then build the run around it.",
          },
          {
            t: "Draft & duel",
            d: "Take turns rolling with a friend — each of you keeps what you roll, six rolls each, then battle the two squads on Showdown.",
          },
          {
            t: "Art & writing prompt",
            d: "Use the roll as a creative brief: draw the Pokémon in your style, or write the trainer who would carry it.",
          },
          {
            t: "Team seed",
            d: "Like what you rolled? Tap Add to Team and roll again — six taps later you have a squad that chose itself.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Random works best with a rule attached. Only Kanto? Open the filters and lock the generation. No legendaries? Exclude the category first. A single type for a theme run? Lock it before the first tap — the filters are the rulebook, the roll is the dice.",
          "Playing with others? Agree the rules out loud before anyone rolls: how many rerolls each player gets (one is a good default), whether alternate forms count, and what happens on a duplicate.",
          "The fun is committing to what you get — a roll you can endlessly undo is just browsing with extra steps.",
        ],
        sampleTitle: "A sample roll",
        sample:
          "Say the dice hand you Aromatisse — a pure Fairy with 101 HP and 29 Speed that you'd never put on a serious team. Now the interesting question: Trick Room anchor? Aromatherapy support? Suddenly you're reading a moveset page for a Pokémon you walked past for a decade. That's the point of the roll.",
        linksTitle: "Want a narrower pool?",
        linksTextBefore: "Roll a single slice of the Pokédex instead — try the",
        links: [
          { label: "Gen 1 generator", href: "/gen/1" },
          { label: "Dragon-type generator", href: "/type/dragon" },
          { label: "Legendary generator", href: "/legendary" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— same dice, smaller pond.",
      },
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
      guide: {
        introTitle: "Why roll {type}-type Pokémon?",
        intro:
          "The {type}-type pool holds everything from day-one classics to the newest releases — and this page hands you one at random, stats, ability and artwork included. One tap, one {type}, no scrolling the dex.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Mono-{type} run",
            d: "Roll one and it anchors your mono-{type} challenge — the first slot is decided, five to go.",
          },
          {
            t: "Type study",
            d: "Roll through the pool and note the stat patterns — {type}-types share a design philosophy worth learning.",
          },
          {
            t: "Draft constraint",
            d: "Everyone drafts from the {type} pool only — same type, wildly different squads.",
          },
          {
            t: "Art prompt",
            d: "Draw today's {type} roll — daily sketches are easier when the dice choose the subject.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "A mono-{type} run lives and dies by its shared weaknesses — check what {type} resists and fears before you commit.",
          "First roll stands is the cleanest rule; one announced re-roll per session is the forgiving one. Pick before you tap.",
          "Dual-types count: if it carries {type}, it's in the pool — hybrids are how mono-runs survive.",
        ],
        sampleTitle: "A sample roll",
        sample:
          "One tap might hand you a {type} veteran you've trained a dozen times — or a {type} you've literally never used, and that's the interesting one. The pool decides which.",
        linksTitle: "More dice, more themes?",
        linksTextBefore: "Try the",
        links: [
          { label: "type generator", href: "/type" },
          { label: "random team generator", href: "/team/random" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— then come back when the theme calls for {type} again.",
      },
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
      guide: {
        introTitle: "Why roll {genLabel} Pokémon?",
        intro:
          "{genLabel} is its own era — its own dex, its own design language, its own nostalgia. This page rolls only within {genLabel}: every tap is a reunion with that generation, from its mascots to its most forgotten route fodder.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Nostalgia run",
            d: "Roll one and it anchors a {genLabel}-only replay — the dice pick, you build the run around it.",
          },
          {
            t: "Dex quiz",
            d: "Roll and name the Pokémon's typing and evolution line from memory before you check the card.",
          },
          {
            t: "Mono-gen draft",
            d: "Each player drafts from {genLabel} only — one generation, six picks, endless arguments about its meta.",
          },
          {
            t: "Era debate",
            d: "Roll five and rate them — is {genLabel} secretly the best generation? The dice provide the evidence.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Commit to the era: in a {genLabel}-only run, every slot must come from this dex — that's where the challenge lives.",
          "First roll stands; the charm of a single generation is taking its weirdos with its stars.",
          "Forms from later generations don't count unless your house rules say so — decide before the run, not after the roll.",
        ],
        sampleTitle: "A sample roll",
        sample:
          "One tap and you're staring at a {genLabel} regular you'd completely forgotten — its cry, its route, the NPC who used it against you. Generations aren't just lists; they're memories with stats.",
        linksTitle: "More ways back?",
        linksTextBefore: "Browse the",
        links: [
          { label: "{region} region", href: "/by/{regionSlug}" },
          { label: "type generator", href: "/type" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— or go fully random across all nine generations.",
      },
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
      guide: {
        introTitle: "Why roll {region} Pokémon?",
        intro:
          "{region} is more than a map — it's the dex of Pokémon {game}, with its own starters, legends and route regulars. This page rolls only within {region}: one tap, one local, straight from the games that made it.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Homecoming run",
            d: "Roll one and it anchors a {region}-only replay — build the team the region's dex allows.",
          },
          {
            t: "Local dex quiz",
            d: "Roll and place the Pokémon on the map: which route, which gym, which version?",
          },
          {
            t: "Regional draft",
            d: "Each player drafts six from {region} only — one region, very different squads.",
          },
          {
            t: "Version debate",
            d: "Roll five and judge them — does {region} still hold up, or is it nostalgia talking?",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Regional runs work because the pool is closed: if it isn't in the {region} dex, it isn't on the team.",
          "First roll stands — the region gives, the team adapts. One announced re-roll per session if your group is soft.",
          "Decide early whether post-game and DLC additions count as {region} locals — house rules prevent route arguments.",
        ],
        sampleTitle: "A sample roll",
        sample:
          "One tap and there's a face from Pokémon {game} you haven't thought about in years — the route theme starts playing in your head immediately. Regions aren't pools; they're places.",
        linksTitle: "Keep exploring?",
        linksTextBefore: "Try the",
        links: [
          { label: "{genLabel} Pokédex", href: "/gen/{gen}" },
          { label: "type generator", href: "/type" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— or go fully random across every region.",
      },
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
        guide: {
          introTitle: "Why roll a random type?",
          intro:
            "Eighteen types, one tap. A random type is the fastest way to pick a theme: mono-type runs, draft constraints, quiz categories — the dice choose, you commit.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Mono-type decider",
              d: "Roll once and that's the type of your next mono-run — no lobbying for a re-roll because you wanted Dragon.",
            },
            {
              t: "Draft constraint",
              d: "Every player rolls a type before drafting — your whole squad must carry it.",
            },
            {
              t: "Theme challenge",
              d: "Roll a type, then build a team that covers its weaknesses without sharing them.",
            },
            {
              t: "Learn the chart",
              d: "Quiz yourself on the rolled type's resistances before you check — the chart sticks faster when it's a game.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "The type roll only works as a commitment device: decide beforehand that the first result stands. A type you can reroll is just a suggestion.",
            "Playing with others? Everyone rolls in the open, duplicates get one re-roll, and that's it — the constraint is the fun.",
            "Pair the roll with the filters on other generators: lock the type there and the dice stay inside your theme all session.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "The wheel says Rock. Suddenly you're planning around a shared Water and Ground weakness, eyeing Sand Stream users, and remembering that Rock has four resistances of its own. One tap, and tonight's run has a personality.",
          linksTitle: "Want to go deeper?",
          linksTextBefore: "Browse a specific type like",
          links: [
            { label: "Dragon", href: "/type/dragon" },
            { label: "Fire", href: "/type/fire" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— or take the result straight to the team generator.",
        },
        faqs: [
          {
            q: "What is a random type generator?",
            a: "Every roll picks one of the 18 Pokémon types at random — Normal, Fire, Water and the rest — and the page rolls only Pokémon of that type, so you can explore it in one tap.",
          },
          {
            q: "How do I use it?",
            a: "Roll for a theme, then build a mono-type team around it, draft with friends using the same type, or quiz yourself on the type chart.",
          },
          {
            q: "Does it include dual types?",
            a: "Yes — Pokémon that carry the rolled type as either of their two types are included in the pool.",
          },
          {
            q: "Is PokeRoll free?",
            a: "Yes — free, no sign-up and no download, like every generator on the site.",
          },
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
        guide: {
          introTitle: "Why roll a random ability?",
          intro:
            "Abilities decide how a Pokémon actually plays — and most of us only know the famous twenty. Roll one at random, meet a Pokémon that carries it, and discover what the long tail of the ability list can do.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Build-around prompt",
              d: "Roll an ability and sketch a set that abuses it — the weirder the ability, the better the exercise.",
            },
            {
              t: "Draft constraint",
              d: "Each player rolls an ability and must draft a Pokémon that has it — instant scarcity, instant drama.",
            },
            {
              t: "Learn the list",
              d: "Read the rolled ability's effect before you peek — a quiet quiz that pays off in battles.",
            },
            {
              t: "Team glue",
              d: "Missing something in your squad? Roll abilities until one solves your problem, then note which Pokémon carry it.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "Decide whether hidden abilities count before you start — they're the rarest pulls and the loudest arguments.",
            "One roll, one commitment is the healthy format: build around what you get rather than fishing for the good ones.",
            "If an ability is generation-locked, treat it as a history lesson and roll the context, not just the effect.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "You roll Levitate and the card shows a Pokémon you've passed a hundred times — except now it's the Ground-immune pivot your team needed. That's the ability lottery: the answer was always there, you just never asked the question.",
          linksTitle: "Keep building?",
          linksTextBefore: "Pair it with the",
          links: [
            { label: "move generator", href: "/move" },
            { label: "stats generator", href: "/bst" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— ability, moves and numbers are three sides of the same set.",
        },
        faqs: [
          {
            q: "What is a Pokémon ability?",
            a: "An ability is a passive skill that affects battle — like Intimidate lowering the foe's Attack on switch-in, or Levitate granting Ground immunity. Every species has one or more.",
          },
          {
            q: "Does it include hidden abilities?",
            a: "Yes. Rolls can land on standard, hidden and signature abilities. The card shows the ability's effect text so you know exactly what you're working with.",
          },
          {
            q: "Can I use a rolled ability in Showdown?",
            a: "Absolutely — the ability slot is part of the copy-ready Showdown set, so you can build a set around the roll immediately.",
          },
          {
            q: "Where does the ability data come from?",
            a: "All species and ability data comes from PokéAPI and is bundled with the site, so every roll is instant.",
          },
        ],
      },
      move: {
        title: "Random Pokémon Move Generator | PokeRoll",
        description:
          "Discover a random Pokémon move and a Pokémon that can learn it — check its power, accuracy and typing, then copy the set to Showdown. Fan-made tool.",
        keywords: ["random pokemon move generator", "pokemon move generator"],
        guide: {
          introTitle: "Why roll a random move?",
          intro:
            "Hundreds of moves, and battles are won by the weird ones. Roll a random move, see a Pokémon that learns it, and ask the only question that matters: could this actually work?",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Moveset roulette",
              d: "Roll four moves and make a set out of them — Splash and all. The best players make anything look playable.",
            },
            {
              t: "Draft constraint",
              d: "Roll a move, then draft a team where someone has to run it — support moves get their moment for once.",
            },
            {
              t: "Learn the library",
              d: "Power, accuracy, effect — read the rolled move before you check. Move knowledge is free Elo.",
            },
            {
              t: "Battle prompt",
              d: "Roll a move and design the situation where it wins you the game — theorycrafting with a seed.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "For moveset roulette, no swaps: four rolls, one set, and status moves count. The constraint is the whole game.",
            "Agree whether Z-moves, Max moves and signature moves are in the pool before anyone rolls — house rules prevent sulking.",
            "A move is only as good as its user, so judge the pair, not the move alone.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "The dice hand you Belch — a 120-power Poison move that only works after eating a Berry. Useless? Then you notice who learns it, and suddenly there's a Berry-juice set living rent-free in your head all week.",
          linksTitle: "Finish the set?",
          linksTextBefore: "Round it out with the",
          links: [
            { label: "ability generator", href: "/ability" },
            { label: "stats generator", href: "/bst" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— then take the whole thing to Showdown.",
        },
        faqs: [
          {
            q: "What is a random move generator?",
            a: "Every roll picks one Pokémon move at random from the full move pool across all generations and shows its type, category, power, accuracy, PP and effect text.",
          },
          {
            q: "Which moves are included?",
            a: "The pool covers standard level-up, TM, TR and egg moves from every generation. Gimmick-only moves such as Z-Moves and Max Moves are left out because they don't exist in regular movesets.",
          },
          {
            q: "How do I use a rolled move?",
            a: "Use the copy button to drop it into a Showdown set, or roll a few and build a moveset around them as a teambuilding challenge.",
          },
          {
            q: "Is PokeRoll free?",
            a: "Yes — free, no sign-up and no download, like every generator on the site.",
          },
        ],
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
        guide: {
          introTitle: "Why roll a random BST?",
          intro:
            "Base Stat Total is the shorthand every player uses and nobody agrees on. Roll a number, meet the Pokémon behind it, and learn what a 480 or a 600 really looks like in the wild.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Guess the mon",
              d: "See the number first and name every Pokémon you think sits at that BST — then check how wrong you were.",
            },
            {
              t: "Draft by numbers",
              d: "Each player rolls a BST and must draft a Pokémon at exactly that total — scarcity makes strange stars.",
            },
            {
              t: "Tier challenge",
              d: "Build a squad where every member lands under a rolled cap — 500 max turns team building into real design.",
            },
            {
              t: "Stat quiz",
              d: "Guess how the six stats are distributed before the reveal — min-maxers and walls read very differently.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "BST is a budget, not a ranking: a well-spent 480 beats a lazy 540, so judge the spread before the total.",
            "For cap challenges, set the cap before rolling the team — rolling first and negotiating later is how caps become meaningless.",
            "Megas, Primals and alternate forms have their own totals — decide which forms count before the draft starts.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "The number is 600. Pseudo-legendary? Actually it's a Mythical this time — and the spread is perfectly even across all six stats, which tells you exactly nothing about how it fights. Numbers open the conversation; they never close it.",
          linksTitle: "More numbers games?",
          linksTextBefore: "Try the",
          links: [
            { label: "Pokédex number generator", href: "/number" },
            { label: "ability generator", href: "/ability" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— or hunt the big totals on the Legendary page.",
        },
        faqs: [
          {
            q: "What is BST?",
            a: "BST (Base Stat Total) is the sum of a Pokémon's six base stats — HP, Attack, Defense, Sp. Atk, Sp. Def and Speed. It's a rough measure of how strong a species is on paper.",
          },
          {
            q: "What range can I roll?",
            a: "The whole dex is in the pool — from low-BST early-route Pokémon under 300 up to box-art legends and Mega forms pushing past 600.",
          },
          {
            q: "Can I filter by BST range?",
            a: "Not on this page — the roll covers everything. It pairs well with the Team Builder: roll, check the stats, then decide if the pull fits your squad.",
          },
          {
            q: "Why does BST matter?",
            a: "It's the fastest shorthand for power. A 600-BST pull is a serious battler; a 250-BST pull is a challenge-run pick. The dice decide which kind of run you're having.",
          },
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
        guide: {
          introTitle: "Why roll a random Pokédex number?",
          intro:
            "One number between 1 and 1025, one Pokémon attached to it. The dex number roll is the purest lottery on the site — no filters, no themes, just the whole history of the franchise in a single draw.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Dex roulette",
              d: "Roll a number and that's your next encounter, teammate or drawing subject — whatever the dex says.",
            },
            {
              t: "Guess before reveal",
              d: "Call the Pokémon from the number alone before you look — dex-order memory is a real skill.",
            },
            {
              t: "Nuzlocke picker",
              d: "Use the rolled number modulo the local dex to pick encounters fairly — the dice can't be bribed.",
            },
            {
              t: "Party game",
              d: "Highest number wins the round — simplest game on the site, loudest arguments.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "Decide what the number means before you roll: national dex, or mapped onto a game's regional dex? Different games, different fates.",
            "One roll per decision is the honest format — re-rolling until you hit a favourite is just picking with extra steps.",
            "Forms share dex numbers, so agree how you handle them before the roll, not after.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "#387. Someone at the table yells Turtwig before the card even loads — and for once they're right. One Sinnoh run, freshly destined. The dex giveth.",
          linksTitle: "More number games?",
          linksTextBefore: "Try the",
          links: [
            { label: "BST generator", href: "/bst" },
            { label: "nickname generator", href: "/nickname" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— numbers, names and stats all tell different stories.",
        },
        faqs: [
          {
            q: "What is the Pokédex number generator?",
            a: "Every roll picks a National Pokédex number and shows you the species behind it — from #001 Bulbasaur to #1025 and beyond. No categories, no filters, just the dex.",
          },
          {
            q: "Can I go straight to a specific number?",
            a: "The roll is random, but the share link carries the exact number — open it and anyone sees the same Pokémon.",
          },
          {
            q: "Which dex is used?",
            a: "The full National Pokédex across all nine generations, with official artwork and stats for every species.",
          },
          {
            q: "What can I use it for?",
            a: "Dex completion checklists, nuzlocke encounter tables, drawing prompts — or just to discover species you've never looked at twice.",
          },
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
        guide: {
          introTitle: "Why roll a random starter?",
          intro:
            "The first partner sets the tone of an entire playthrough — and choosing one yourself takes forty minutes of forum threads. Let the dice pick from every generation's starters, from Kanto to Paldea, and start the run already.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Starter decider",
              d: "Roll once and that's your partner for the next run — the decision is made, the adventure can start.",
            },
            {
              t: "Nuzlocke opener",
              d: "Let the roll choose the starter, then the route luck chooses everything else — full commitment, zero bias.",
            },
            {
              t: "Debate settler",
              d: "Fire, Water or Grass this time? The dice have no nostalgia and no favourites — perfect referee.",
            },
            {
              t: "Team theme",
              d: "Roll a starter and build a team that supports its final evolution — instant structure for a casual squad.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "The starter pact is sacred: first roll stands. Vetoing the result because you wanted the frog defeats the entire point.",
            "Decide the pool first — all nine generations, or only the games you own? A smaller pool is still a fair roll.",
            "For group runs, everyone rolls in the open and trades are allowed exactly once — that's the whole meta-game.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "The dice say Chimchar, and your Sinnoh run suddenly has a personality: fast, loud, and slightly on fire. You'd never have picked it over Piplup — which is exactly why this playthrough will be memorable.",
          linksTitle: "Keep the run going?",
          linksTextBefore: "Roll the rest of the squad on the",
          links: [
            { label: "random team generator", href: "/team/random" },
            { label: "type generator", href: "/type" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— the starter has chosen, now the team needs six.",
        },
        faqs: [
          {
            q: "What counts as a starter Pokémon?",
            a: "Starters are the first-partner Pokémon — the trio of Grass, Fire and Water offered at the start of each mainline game, from Bulbasaur in Kanto to Sprigatito in Paldea.",
          },
          {
            q: "Which generations are included?",
            a: "All of them — every regional starter from Generation I through IX, including the Hisui and Paldea variations where they exist.",
          },
          {
            q: "Can I roll a full team of starters?",
            a: "Yes — roll six and you have a starter-only squad for a challenge run or a Showdown theme team.",
          },
          {
            q: "Why would I use a random starter?",
            a: "It removes choice paralysis: the dice pick your next playthrough's partner, and you build the run around whatever you get.",
          },
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
        guide: {
          introTitle: "Why guess a mystery Pokémon?",
          intro:
            "One card, full stats, official artwork — and no name. The no-names generator is a pocket-sized quiz: everything you need to identify the Pokémon is on the card except the answer.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Solo quiz",
              d: "Guess from the artwork and stats, then flip to check — track your streak across ten cards.",
            },
            {
              t: "Party shout-out",
              d: "Show the card on a call, first correct shout wins the point — speed matters more than accuracy.",
            },
            {
              t: "Stream warm-up",
              d: "Run five mystery cards before the real content — chat gets loud immediately, guaranteed.",
            },
            {
              t: "Silhouette training",
              d: "Use it as warm-up for the seeded guess challenge, where the quiz gets harder and the scores get shared.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "No hovering the flip button: one committed guess per card, out loud if others are playing. Confidence is the game.",
            "Stats are fair game — a 600 BST narrows the field fast, and knowing that is skill, not cheating.",
            "Losing track of your score? Ten cards, one point each, no negatives — the cleanest format.",
          ],
          sampleTitle: "A sample card",
          sample:
            "Yellow cheeks, Electric typing, tiny stats — you commit with your whole chest: Pikachu. The flip says Pachirisu, and now the whole room is debating regional rodents. Ten more cards, please.",
          linksTitle: "Want a harder quiz?",
          linksTextBefore: "Graduate to the",
          links: [
            { label: "silhouette challenge", href: "/challenge/guess" },
            { label: "nickname generator", href: "/nickname" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— same knowledge, higher stakes.",
        },
        faqs: [
          {
            q: "What is the Mystery Pokémon page?",
            a: "It shows a full Pokémon card with everything except the name — stats, types, ability and artwork included. Your job: figure out who it is.",
          },
          {
            q: "Is the card complete?",
            a: "Yes — only the name is hidden. If you can identify a Pokémon from its stats, ability and artwork alone, you know your dex.",
          },
          {
            q: "How is this different from the Guess challenge?",
            a: "The Guess challenge hides names behind silhouettes for a scored quiz; here you get one card at a time with full info, perfect for a quick brain-teaser.",
          },
          {
            q: "Does it work on mobile?",
            a: "Yes — the card and reveal work with a tap, so it plays just as well on a phone.",
          },
        ],
      },
      cute: {
        title: "Random Cute Pokémon Generator | PokeRoll",
        description:
          "Get a random cute Pokémon — soft, fluffy and adorable picks from across the whole Pokédex. Roll again for another cutie, or copy it to Showdown.",
        keywords: ["cute pokemon generator", "random cute pokemon generator"],
        guide: {
          introTitle: "Why roll a cute Pokémon?",
          intro:
            "Not every roll needs to be competitive. The cute generator pulls from the soft, fluffy and round corners of the Pokédex — the Pokémon you'd actually want as a pet, one tap at a time.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Comfort roll",
              d: "One tap, one adorable Pokémon — the cheapest mood improvement on the internet.",
            },
            {
              t: "Art prompt",
              d: "Draw the rolled cutie in your style — small Pokémon make the best daily sketch practice.",
            },
            {
              t: "Cute-only run",
              d: "Build a playthrough team where every member must pass the cute test — surprisingly viable, mostly Normal types.",
            },
            {
              t: "Settle the debate",
              d: "Each player rolls once, group votes on the cutest — the dice referee the oldest argument in the fandom.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "Cute is subjective, but the roll is final — no re-rolling because you think you're a Jigglypuff household.",
            "For cute-only runs, define the standard before you start: first stage only? Under a metre tall? Fluffy? The rulebook matters.",
            "Evolving your cute pick is allowed — loving what it becomes is the advanced challenge.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "The dice hand you a spherical bird that squeaks, and your productivity for the next ten minutes is gone. You're looking at plushies now. There was never another way this could go.",
          linksTitle: "More good vibes?",
          linksTextBefore: "Try the",
          links: [
            { label: "mythical generator", href: "/mythical" },
            { label: "nickname generator", href: "/nickname" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— rare and adorable is the best combination.",
        },
        faqs: [
          {
            q: "What counts as a cute Pokémon?",
            a: "This page rolls from a hand-picked list of the dex's cutest — Eevee, Jigglypuff, Pikachu and hundreds of fluffballs, round ones and tiny ones that fans love.",
          },
          {
            q: "How was the list built?",
            a: "From community favourites and fan polls rather than raw stats — if a species is universally called cute, it's on the list.",
          },
          {
            q: "Can I build a cute-only team?",
            a: "Yes — roll six and you have an adorable squad ready for casual battles or a themed run. Some of them are secretly strong.",
          },
          {
            q: "Is it just for fun?",
            a: "Mostly, but cute Pokémon win hearts — and occasionally real battles. Use the Showdown export and let the fluff fight.",
          },
        ],
      },
      mythical: {
        title: "Random Mythical Pokémon Generator | PokeRoll",
        description:
          "Reveal a random Mythical Pokémon like Mew, Celebi or Jirachi — rare picks from across every generation, ready to copy to Showdown. Fan-made tool.",
        keywords: [
          "random mythical pokemon generator",
          "mythical pokemon generator",
        ],
        guide: {
          introTitle: "Why roll a Mythical Pokémon?",
          intro:
            "Mythicals are the event-only rarities — Mew, Celebi, Jirachi and their heirs, the Pokémon entire generations of players never owned. Roll one and borrow a little of that rarity for yourself.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Dream team draft",
              d: "Roll six Mythicals and build the fantasy squad you could never legitimately assemble.",
            },
            {
              t: "What-if battle",
              d: "Roll one, copy it to Showdown, and test whether the elusive ones are actually good — some are, some are Jirachi.",
            },
            {
              t: "Collection checklist",
              d: "Track which Mythicals the dice have shown you — a slow, free way to meet the full set.",
            },
            {
              t: "Lucky pull ritual",
              d: "One roll before ranked sessions — a Mythical pull is a good omen, and superstition is free.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "Mythical and Legendary are different clubs — the Mythical pool is event distributions only, and that's what makes it special.",
            "For dream drafts, duplicates demand a re-roll; everything else stands as rolled.",
            "Remember that most Mythicals share the same 600-even spread — their tricks are in their moves and abilities, not their stats.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "The dice hand you Jirachi, wish granter, veteran of exactly one weekend event in 2003. You never caught it. You probably never will. But today, on this page, the wish came through.",
          linksTitle: "More rare dice?",
          linksTextBefore: "Try the",
          links: [
            { label: "Legendary generator", href: "/legendary" },
            { label: "Mega generator", href: "/mega" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— rarity comes in several flavours.",
        },
        faqs: [
          {
            q: "What counts as a Mythical Pokémon?",
            a: "Mythicals are the event-only species — Mew, Celebi, Jirachi, Darkrai, Magearna and their peers — Pokémon that normally require a distribution event, a serial code or a special quest to obtain.",
          },
          {
            q: "How is Mythical different from Legendary?",
            a: "Legendaries appear in the story and can usually be caught in-game; Mythicals are almost always distributed as events. PokeRoll keeps the two pools separate — this page rolls Mythicals only, the Legendary page rolls the rest.",
          },
          {
            q: "Can I build a team around a Mythical?",
            a: "Yes. Roll one, tap Add to Team, then fill the other five slots — or roll five more Mythicals for a full event-only squad.",
          },
          {
            q: "Can Mythicals be used on Pokémon Showdown?",
            a: "Most can be used in casual or custom formats, though several are restricted in official tiers. The copy-ready set exports anyway, so you can try them wherever the format allows.",
          },
        ],
      },
      mega: {
        title: "Random Mega Pokémon Generator | PokeRoll",
        description:
          "Spin a random Mega Evolution or Primal Reversion Pokémon — see its boosted stats and ability, then copy the set to Showdown. Free fan-made tool.",
        keywords: ["random mega pokemon generator", "mega pokemon generator"],
        guide: {
          introTitle: "Why roll a Mega Evolution?",
          intro:
            "Mega Evolutions and Primal Reversions are the franchise's loudest what-ifs — temporary transformations with boosted stats, new abilities, and designs that went all-in. Roll one and revisit the era when anything could evolve further.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "What-if meta",
              d: "Roll a Mega and judge it honestly: would this thing earn a slot on a modern team?",
            },
            {
              t: "Draft decider",
              d: "Each player rolls a Mega — the roll decides which ace your squad is built around.",
            },
            {
              t: "Design study",
              d: "Compare the Mega with its base form and spot what the designers amplified — a free design lesson.",
            },
            {
              t: "Battle prompt",
              d: "Copy the set to Showdown and play the what-if for real — nostalgia hits harder at 150 base Attack.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "One Mega per team is the classic rule for a reason — your roll is your ace, so build around it, not beside it.",
            "Primals count as Megas for pool purposes — decide with your group before the first roll.",
            "Judge the whole package: +100 stats means nothing if the ability betrays the base form's strengths.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "The dice hand you Mega Beedrill — a Bug/Poison glass cannon with Adaptability and a dream. You forgot it existed. Now you're pricing Fell Stinger into your next team, which is exactly what this generator is for.",
          linksTitle: "More transformations?",
          linksTextBefore: "Try the",
          links: [
            { label: "Legendary generator", href: "/legendary" },
            { label: "fusion tool", href: "/fusion" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— official or improvised, hybrids are fun.",
        },
        faqs: [
          {
            q: "What is a Mega Evolution?",
            a: "Mega Evolution is a temporary battle-only form that certain Pokémon take with a Mega Stone — boosted stats, often a new type or ability, and a redesigned look.",
          },
          {
            q: "Which Pokémon can Mega Evolve?",
            a: "Around 46 species have Mega forms, plus Primal Reversion for Groudon and Kyogre. This page rolls only from that list.",
          },
          {
            q: "Can I use a Mega in Pokémon Showdown?",
            a: "Yes — Mega forms are standard in most Showdown formats. The card exports a copy-ready set, and the Mega Stone is included in the item slot.",
          },
          {
            q: "Is there any limit on Megas per team?",
            a: "In official rules only one Pokémon per team can Mega Evolve per battle. The generator rolls one at a time, but you can experiment with a full Mega squad casually.",
          },
        ],
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
        guide: {
          introTitle: "Why roll a nickname?",
          intro:
            "A nickname turns a species into a character. The nickname generator pairs a random Pokémon with a name worth typing in — for Nuzlockes, playthroughs, and every save file where the squad deserves better than 'GARCHOMP'.",
          waysTitle: "Ways to play",
          ways: [
            {
              t: "Nuzlocke naming",
              d: "The rules say you must nickname everything — let the roll handle it, and the attachment comes free.",
            },
            {
              t: "Playthrough flavour",
              d: "Rename your whole squad with rolled names — a themed save file reads like a story.",
            },
            {
              t: "Party game",
              d: "Roll a Pokémon, everyone pitches a nickname, funniest wins — the rolled name is the one to beat.",
            },
            {
              t: "Writing prompt",
              d: "A Pokémon plus a name is a character sketch — write the trainer who'd use it.",
            },
          ],
          rulesTitle: "Set your rules before you roll",
          rules: [
            "The Nuzlocke pact: the first rolled name is final. The bond is the point, and bonds aren't curated.",
            "Theme naming raises the stakes — food names, musician names, constellation names; pick a lane before the run starts.",
            "Honour the fallen: when a named Pokémon faints, the name retires with it. That's the whole heart of the format.",
          ],
          sampleTitle: "A sample roll",
          sample:
            "Route 2, first catch, a common bird — and the dice name it Captain Crumb. He will outlive three team wipes, retire a legend, and be remembered longer than most Champions. That's the power of a good name.",
          linksTitle: "Name the whole crew?",
          linksTextBefore: "Roll the squad first on the",
          links: [
            { label: "random team generator", href: "/team/random" },
            { label: "number generator", href: "/number" },
          ],
          linksJoinOr: "or",
          linksTextAfter: "— then come back and give them all names.",
        },
        faqs: [
          {
            q: "What does the nickname generator do?",
            a: "It pairs a rolled Pokémon with a themed nickname — from cute and punny to competitive and edgy — so you never stare at a blank nickname box again.",
          },
          {
            q: "Where do the nicknames come from?",
            a: "From themed word lists built for each style: nature puns, food names, anime references, mythology and more. The combination is random every roll, so duplicates are rare.",
          },
          {
            q: "Can I use the nicknames in the games?",
            a: "Yes — game nickname rules apply, and PokeRoll keeps suggestions clean and short enough to fit every mainline game.",
          },
          {
            q: "Does it work for any Pokémon?",
            a: "Yes — the generator rolls across the whole dex, so every species gets a fitting suggestion, including shiny hunting and Nuzlocke naming.",
          },
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
      guide: {
        introTitle: "Why roll a Legendary?",
        intro:
          "This pool is legends only — the box-art gods, the roamers, the trios. Every roll lands on a Pokémon that once required an event, a cave, or a 40-minute cutscene to meet.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Dream team",
            d: "Roll six Legendaries and assemble the squad that every ten-year-old swore was unbeatable.",
          },
          {
            t: "Boss rush draft",
            d: "Each player rolls three — highest combined BST wins, and bragging rights last all week.",
          },
          {
            t: "What-if battle",
            d: "Copy a rolled Legend to Showdown and test the myth — some gods have very mortal movesets.",
          },
          {
            t: "Collection roll",
            d: "One roll a day until the dice have shown you every Legendary — the slowest, cheapest completion run.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "First roll stands — a Legendary you can reroll is just a strong Pokémon, and the mystique is the whole point.",
          "Legendary and Mythical are different pools: this page keeps the club exclusive, Mythicals live next door.",
          "For drafts, one re-roll per player, announced before the dice land — house rules keep gods honest.",
        ],
        sampleTitle: "A sample roll",
        sample:
          "One tap: Rayquaza, sky god, the run writes itself. Next tap: Regigigas, whose Slow Start means the god spends five turns as a spectator. Legends contain multitudes.",
        linksTitle: "More rare dice?",
        linksTextBefore: "Try the",
        links: [
          { label: "Mythical generator", href: "/mythical" },
          { label: "shiny hunt", href: "/challenge/shiny" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— rarity squared.",
      },
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
      guide: {
        introTitle: "Why roll an adventure?",
        intro:
          "Adventure mode rolls an entire playthrough in one tap: a trainer, a starter, a team, a challenge and a goal, all tied to a single seed. It's a campaign generator — the dice write the premise, you play the story.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Instant challenge run",
            d: "Roll an adventure and take its rules as binding — the team it hands you is the team the run allows.",
          },
          {
            t: "Challenge calendar",
            d: "Roll a new adventure each week and stream or log the attempts — same seed format, comparable stories.",
          },
          {
            t: "Co-op premise",
            d: "Share the seed with a friend: identical adventure, separate playthroughs, race to the goal.",
          },
          {
            t: "Story seed",
            d: "Use the rolled trainer and goal as fan-fiction or tabletop prompts — the dice are surprisingly good at plot hooks.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Pick the difficulty before you roll, not after you see the result — choosing Extreme once you know the team is just negotiating with yourself.",
          "An adventure works because it's binding: one re-roll per run, maximum, and only before you've caught anything.",
          "Share the seed, not screenshots — the link replays the exact adventure, which makes races and comparisons fair.",
        ],
        sampleTitle: "A sample adventure",
        sample:
          "A single seed might decree: a Lass from Hoenn, a Chimchar starter, a no-items challenge, and a goal of beating the league under-levelled. You'd never have set that run up yourself — and that's exactly why you'll remember it.",
        linksTitle: "Want to stock the adventure?",
        linksTextBefore: "Arm the run with dice from the",
        links: [
          { label: "random team generator", href: "/team/random" },
          { label: "guess challenge", href: "/challenge/guess" },
          { label: "shiny hunt", href: "/challenge/shiny" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— every good campaign needs side quests.",
      },
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
      guide: {
        introTitle: "Why test your Pokédex memory?",
        intro:
          "The guess challenge is the purest test of Pokédex knowledge: a fixed lineup, hints that shrink with the difficulty, and your score at the end. Same seed for everyone — so scores are genuinely comparable.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Daily duel",
            d: "Share the seed with a friend and compare scores — same lineup, no excuses.",
          },
          {
            t: "Difficulty ladder",
            d: "Start on Easy with generous hints, then climb towards Extreme, where the sprites are zoomed and the hints are gone.",
          },
          {
            t: "Filter gauntlet",
            d: "Lock a single generation or type and prove you actually know that slice of the dex — not just the famous bits.",
          },
          {
            t: "Party quiz",
            d: "Read the cards aloud on a call and race to shout the answer — speed counts.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Pick count and difficulty before the first reveal — twelve on Easy and six on Extreme are completely different exams.",
          "No mid-run filter changes: a mono-Water round and an all-dex round measure different knowledge.",
          "One attempt per seed is the honest format — the seed keeps the lineup fixed, so a second try is just memorization.",
        ],
        sampleTitle: "A sample round",
        sample:
          "A Hard round zooms into a spiral of blue-grey shell. Cloyster? Omastar? You commit to Kabutops with full confidence, and the reveal says... Shellder. Somewhere a rival is laughing — and your rematch seed is one tap away.",
        linksTitle: "Want more exams?",
        linksTextBefore: "Try the",
        links: [
          { label: "mystery card mode", href: "/no-names" },
          { label: "shiny hunt", href: "/challenge/shiny" },
          { label: "adventure mode", href: "/adventure" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— different dice, same bragging rights.",
      },
      faqs: [
        {
          q: "How does Guess the Pokémon work?",
          a: "A set of hidden Pokémon are shown as silhouettes. Lock in your guesses, then flip the cards to reveal the answers — your score is based on how many you named correctly.",
        },
        {
          q: "What do difficulty levels change?",
          a: "Easy gives bigger sprites and a type hint per card; Extreme zooms in, drops the hints and limits the lineup. Same seed, same lineup, harder exam.",
        },
        {
          q: "Can I challenge a friend?",
          a: "Yes — the share link carries the seed, so opening it recreates the exact same lineup. Compare scores and settle who knows the dex better.",
        },
        {
          q: "Where do the silhouettes come from?",
          a: "Official Pokémon artwork and sprites, converted to silhouettes on the fly. Everything runs in your browser — no downloads, no sign-up.",
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
      guide: {
        introTitle: "Why hunt a shiny?",
        intro:
          "The shiny hunt simulates the oldest gamble in Pokémon: encounter after encounter, waiting for the sparkle. Pick a difficulty, click through the wild pool, and see how deep the hunt goes — the pity rules keep it honest but never easy.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Luck test",
            d: "Start a hunt and see how many encounters your shiny takes — under odds and you're hot, over odds and the pool owes you one.",
          },
          {
            t: "Race a friend",
            d: "Share the hunt seed and race to the reveal — fewest encounters wins, and the link proves it.",
          },
          {
            t: "Patience training",
            d: "Use Extreme difficulty as meditation: hundreds of clicks, one sparkle, no shortcuts.",
          },
          {
            t: "Stream segment",
            d: "A live shiny race is ready-made content — chat picks the difficulty, you provide the despair.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Difficulty is the whole game here: Easy guarantees a pity draw so a first hunt always finishes; higher tiers make you earn it.",
          "Decide what counts before you start — does the first shiny end the hunt, or are you holding out for a specific species?",
          "Share the reveal link, not a screenshot: it opens straight on the found card, so nobody can fake a first-encounter shiny.",
        ],
        sampleTitle: "A sample hunt",
        sample:
          "Encounter 1: Pidgey. Encounter 47: Pidgey. Encounter 213: Pidgey. You start questioning the odds, the seed, your life choices — and then encounter 214 sparkles gold. Every real hunter knows exactly what that feels like.",
        linksTitle: "Want to keep the streak going?",
        linksTextBefore: "Try the",
        links: [
          { label: "guess challenge", href: "/challenge/guess" },
          { label: "adventure mode", href: "/adventure" },
          { label: "random Pokémon generator", href: "/random-pokemon-generator" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— the dice never sleep.",
      },
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
      faqs: [
        {
          q: "How do I contact the PokeRoll team?",
          a: "Three ways: email hello@pokeroll.app, tag @JoeyChou2024 on X, or open an issue on the GitHub repository. Every channel reaches the maker directly.",
        },
        {
          q: "How fast do you reply?",
          a: "Usually within 48 hours. X gets the fastest responses, and GitHub issues are tracked until resolved.",
        },
        {
          q: "Can I report a bug or request a feature?",
          a: "Please do — bug reports and feature ideas are exactly what the contact channels are for. GitHub issues are best for bugs because they stay tracked.",
        },
        {
          q: "Is PokeRoll affiliated with Nintendo or The Pokémon Company?",
          a: "No. PokeRoll is a solo fan-made project using PokéAPI data. All Pokémon content belongs to its respective owners, and this site is not endorsed by them.",
        },
      ],
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
      guide: {
        introTitle: "Why keep a saved team?",
        intro:
          "Your Team is where random results stop being disposable. Every card you tap Add to Team on lands here — from any generator on the site — so a squad slowly assembles itself out of rolls you actually liked.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Best-of collection",
            d: "Keep rolling on the team generator and add only the pulls worth keeping — this page becomes your hall of fame.",
          },
          {
            t: "Draft curation",
            d: "Roll more than six, keep the best six here and cut the rest — your own personal draft day.",
          },
          {
            t: "Showdown staging",
            d: "Once the six feel right, export the whole squad with Copy Sets and paste it straight into the Showdown teambuilder.",
          },
          {
            t: "Share the squad",
            d: "The share link carries your exact lineup — send it to a friend and they see the same six, artwork and all.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "A saved team deserves a theme. It doesn't have to be competitive — 'only Pokémon I'd actually use on a playthrough' is a theme. So is 'one per generation', or 'nothing over 500 BST'.",
          "Treat removals as final. If you catch yourself swapping the same slot five times, that slot wants a different role, not a different Pokémon.",
          "Six is the classic cap for a reason: small enough that every member has to justify its place.",
        ],
        sampleTitle: "A sample squad",
        sample:
          "A typical saved squad might start as 'the six that carried my Emerald run' — Swampert, Gardevoir, Aggron, Manectric, Altaria, and an HM mule that earned its retirement. The page doesn't judge; it just remembers.",
        linksTitle: "Want fresh blood?",
        linksTextBefore: "Roll new candidates on the",
        links: [
          { label: "random team generator", href: "/team/random" },
          { label: "Team Coach", href: "/team/coach" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— then add the keepers back here.",
      },
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
      guide: {
        introTitle: "Why roll a random team?",
        intro:
          "A random team takes the decision paralysis out of team building. Instead of scrolling the Pokédex for an hour, you get six slots handed to you — and that's when the interesting part starts: making them work together. Use the result as a challenge run, a friendly draft, a practice squad, or pure inspiration for your next playthrough.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Challenge run",
            d: "Commit to the six you roll on your next playthrough — no rerolls. Build around what you get, awkward type overlap included.",
          },
          {
            t: "Draft with friends",
            d: "Share the page link — the URL carries the exact squad, so everyone starts from the same six. Roll your own answer to it, then battle and compare.",
          },
          {
            t: "Showdown practice",
            d: "Copy Sets gives you full sets with moves, items and EVs. Paste them into the Showdown teambuilder and ladder with a team you didn't overthink.",
          },
          {
            t: "Theme build",
            d: "Lock a type, generation or category in the filters and roll inside a constraint of your own — a mono-Water squad, a Gen 3 reunion, an all-Starters run.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "A random team feels better when the rules come first. Legendaries allowed? If not, open the filters and exclude the category before you touch the Roll button. Mono-type run? Lock the type. Only the games you grew up with? Lock the generation. The filters are your rulebook — set them once, then live with what the dice say.",
          "For casual play, accept an awkward overlap as part of the challenge — three Pokémon sharing a weakness is a puzzle, not a bug. For a draft, agree the bans with your group before anyone rolls. For a story run, allow yourself one veto when a species simply can't be caught in your game.",
          "The point is a team you would actually play — not rerolling until it looks perfect.",
        ],
        sampleTitle: "A sample roll",
        sample:
          "One tap might hand you Gengar, Donphan, Togekiss, Ferrothorn, Volcarona and Pelipper — a perfectly usable squad, except three of them fold to Rock. That shared weakness is the challenge: do you patch it with items and moves, or lean in and out-speed everything? The roll gives you a constraint; what you build around it is the game.",
        linksTitle: "Want a narrower pool?",
        linksTextBefore: "Roll inside a single slice of the Pokédex instead — try the",
        links: [
          { label: "Gen 1 generator", href: "/gen/1" },
          { label: "Dragon-type generator", href: "/type/dragon" },
          { label: "Legendary generator", href: "/legendary" },
        ],
        linksJoinOr: "or",
        linksTextAfter:
          "— then come back and roll a full team inside your favourite constraint.",
      },
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
      guide: {
        introTitle: "Why use a team coach?",
        intro:
          "Team Coach is for the moment you have four Pokémon you love and no idea what belongs in the last two slots. Lock your picks, and it fills the rest with type coverage and balanced roles — not just more of what you already have.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Finish a draft",
            d: "Locked in your favourites? Let the coach complete the six with the coverage you're missing — then re-roll just the slots you don't like.",
          },
          {
            t: "Fix a weakness",
            d: "If your squad folds to one type, lock the keepers and generate — the coach weighs defensive coverage when it picks.",
          },
          {
            t: "Learn team building",
            d: "Watch why it picks what it picks: every suggestion comes with a reason, which is quietly a teambuilding lesson.",
          },
          {
            t: "Import & polish",
            d: "Pull in your saved team or favourites, drop the weak links, and let the coach audition replacements.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Lock honestly. The coach can only balance around what you give it — lock the Pokémon you're actually committed to, not the whole wishlist.",
          "Read the reason before you re-roll. 'New coverage' and 'tanky pivot' are telling you what your squad was missing; if the same reason keeps appearing, that's your team's real problem.",
          "One re-roll per slot is a good house rule — endless re-rolls turn the coach into a slow random generator.",
        ],
        sampleTitle: "A sample fix",
        sample:
          "Lock Garchomp, Rotom-Wash and Corviknight and the coach might answer with a Fire type for the Steel matchup, a Ground immune for the shared weakness, and a wildcard 'for new coverage' — the exact conversation a good teammate would have with you.",
        linksTitle: "Want a different starting point?",
        linksTextBefore: "Roll a fresh squad on the",
        links: [
          { label: "random team generator", href: "/team/random" },
          { label: "your saved team", href: "/team" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— then bring the result back here to finish it.",
      },
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
      guide: {
        introTitle: "Why challenge a friend?",
        intro:
          "Team Challenge turns a random roll into a scoreboard. The page generates a seeded squad, you share the link, and everyone who opens it faces the exact same team — total BST crowns the winner.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Friend duel",
            d: "Share the challenge link in your group chat — everyone rolls their own answer to the same squad, highest BST takes the round.",
          },
          {
            t: "Stream segment",
            d: "Roll a challenge team live and let chat try to beat it — the link keeps everyone honest because the squad can't change.",
          },
          {
            t: "Solo benchmark",
            d: "Beat your own rolls: keep the challenge team fixed and re-roll your side until you top its BST with a squad you'd actually use.",
          },
          {
            t: "Draft night decider",
            d: "Use a challenge round to settle who picks first — no arguments, the numbers are on the page.",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Decide the format before sharing: one roll each, or best of three? The seed means the challenge itself is fixed — the only variable is what you roll against it.",
          "BST decides the winner here, but house rules can override: mono-type answers only, no legendaries in your response, or 'lowest BST wins' for a chaos round.",
          "Export both sides to Showdown afterwards if you want the real answer — BST is a scoreboard, not a battle result.",
        ],
        sampleTitle: "A sample challenge",
        sample:
          "The challenge rolls Blissey, Shedinja, Magikarp, Regidrago, Applin and Salamence — a monster total carried by three real Pokémon and three jokes. Beat it with six mid-tiers and you've earned the bragging rights; lose to it and you'll hear about Magikarp all week.",
        linksTitle: "Want more ways to compete?",
        linksTextBefore: "Spin the",
        links: [
          { label: "wheel", href: "/wheel" },
          { label: "guess challenge", href: "/challenge/guess" },
          { label: "random team generator", href: "/team/random" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— same dice, different scoreboard.",
      },
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
      guide: {
        introTitle: "Why spin a wheel?",
        intro:
          "The wheel is the most honest random picker there is: everyone watches the same spin land on the same slice. Take turns, stack the results, and the highest BST takes the round — no setup, no arguing with the dice.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Party PK",
            d: "Two to six players, one spin each — highest BST wins the round. Loser picks the next stake.",
          },
          {
            t: "Draft starter",
            d: "Spin six times and write each result down — that's your squad for a challenge run, repeats and all.",
          },
          {
            t: "Decision maker",
            d: "Can't pick a type for your mono-run or a game for the evening? Put the options on the wheel and let it land.",
          },
          {
            t: "Stream content",
            d: "A spinning wheel reads great on camera — spin for your next encounter, your next teammate, or your next punishment.",
          },
        ],
        rulesTitle: "Set your rules before you spin",
        rules: [
          "Agree the count before the first spin: one spin each, or spin-until-you-like-it? Wheels are more fun when nobody can lobby for a re-spin.",
          "For PK rounds, ties are part of the charm — decide beforehand whether tied players spin off or share the crown.",
          "Share the round link when it's over: the URL carries the results, so the winner's bragging rights are verifiable.",
        ],
        sampleTitle: "A sample round",
        sample:
          "Six spins in, the board reads: a 670-BST pseudo-legendary, two route-one birds, a Magikarp — and your friend's smug face when their last spin lands on Arceus. The wheel giveth, and the round link proves it.",
        linksTitle: "Want structure around the spins?",
        linksTextBefore: "Roll a full squad on the",
        links: [
          { label: "random team generator", href: "/team/random" },
          { label: "random Pokémon generator", href: "/random-pokemon-generator" },
          { label: "Legendary generator", href: "/legendary" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— then come back to spin for the decider.",
      },
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
      guide: {
        introTitle: "Why fuse Pokémon?",
        intro:
          "The fusion generator answers the question every Pokédex eventually asks: what would these two look like as one? Each roll picks two random species and blends name, typing and stats into a hybrid that doesn't exist anywhere else.",
        waysTitle: "Ways to play",
        ways: [
          {
            t: "Art prompt",
            d: "Roll a fusion and draw it — the blended name and typing are a ready-made design brief.",
          },
          {
            t: "Guess the parents",
            d: "Show the fusion card, hide the result, and let friends guess which two Pokémon made it.",
          },
          {
            t: "Custom dex",
            d: "Keep a running list of your favourite fusions — after twenty rolls you have the start of your own region's Pokédex.",
          },
          {
            t: "Battle what-ifs",
            d: "Copy the fusion's set to Showdown and theorycraft: would this hybrid actually earn a team slot?",
          },
        ],
        rulesTitle: "Set your rules before you roll",
        rules: [
          "Judge a fusion on its own terms: the best ones are the ones you'd genuinely draw or use, not the ones with the highest stats.",
          "For guess-the-parents, one hint per guesser keeps the game moving — typing is the classic freebie.",
          "Re-roll freely until a pair sparks something; fusions are cheap, inspiration isn't.",
        ],
        sampleTitle: "A sample fusion",
        sample:
          "One roll might fuse Gengar with Snorlax into a Ghost/Normal wall with a name you'll laugh at for a week — and then you catch yourself genuinely wondering about its EV spread. That's when a fusion stops being a joke and starts being a design.",
        linksTitle: "Want better raw material?",
        linksTextBefore: "Pull new parents from the",
        links: [
          { label: "random Pokémon generator", href: "/random-pokemon-generator" },
          { label: "wheel", href: "/wheel" },
          { label: "random team generator", href: "/team/random" },
        ],
        linksJoinOr: "or",
        linksTextAfter: "— then fuse the keepers.",
      },
    },
  },
};
