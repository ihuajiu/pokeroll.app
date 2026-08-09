/* ------------------------------------------------------------------ */
/*  Diccionario en español — misma estructura que en.ts (fuente tipada) */
/*                                                                     */
/*  Los valores son las cadenas visibles para el usuario. Los          */
/*  placeholders usan {name} y se sustituyen con .replace() en el      */
/*  punto de uso (los diccionarios deben ser objetos planos            */
/*  serializables para cruzar la frontera servidor→cliente).           */
/* ------------------------------------------------------------------ */

export default {
  common: {
    copy: "Copiar",
    copySet: "Copiar set",
    copied: "¡Copiado!",
    copyShowdownSet: "Copiar set de Showdown",
    showdownSetCopied: "Set de Showdown copiado",
    showdownSetCopiedBang: "¡Set de Showdown copiado!",
    back: "Volver",
    rollAdventure: "Generar aventura",
    viewYourTeam: "Ver tu equipo",
    /** Template: {n} = generation number. */
    genShort: "Gen {n}",
    /** Template: {label} = tool label. */
    toolArtworkAlt: "Ilustración de Pokémon de ejemplo de {label}",
    home: "Inicio",
    randomPokemon: "Pokémon aleatorio",
    generateAgain: "Generar de nuevo",
    generating: "Generando…",
    generateAnotherAria: "Generar otro Pokémon aleatorio",
  },

  nav: {
    homeTitle: "Inicio de PokeRoll",
    menuAria: "Menú",
    languageAria: "Idioma",
    /** Template: {count} = number of favorites. */
    favoritesAria: "Favoritos ({count})",
    main: {
      adventure: "Aventura",
      generators: "Generadores",
      team: "Equipo",
      challenges: "Desafíos",
      tools: "Herramientas",
      contact: "Contacto",
    },
  },

  footer: {
    tagline:
      "Genera un Pokémon aleatorio: nombres, tipos, estadísticas y shinies con un toque.",
    contactUs: "Contáctanos",
    onX: "PokeRoll en X",
    xTitle: "@JoeyChou2024 en X",
    onGithub: "PokeRoll en GitHub",
    githubTitle: "ihuajiu/pokeroll.app en GitHub",
    byRegion: "Por región",
    byType: "Por tipo",
    byGeneration: "Por generación",
    disclaimer:
      "Esta es una herramienta hecha por fans. No está afiliada a Nintendo, Game Freak o The Pokémon Company. Datos de Pokémon proporcionados por",
    pokeApi: "PokéAPI",
    disclaimerLink: "Aviso legal",
    disclaimerTitle: "Aviso legal",
    privacy: "Privacidad",
    privacyTitle: "Política de privacidad",
    terms: "Términos",
    termsTitle: "Términos de uso",
    badges: {
      fazierTitle: "Destacado en Fazier",
      fazierAlt: "Insignia de destacado en Fazier",
      tinyTitle: "Destacado en TinyLaunch",
      tinyAlt: "Insignia de TinyLaunch",
      findlyTitle: "Destacado en Findly.tools",
      findlyAlt: "Destacado en Findly.tools",
    },
  },

  tools: {
    groups: {
      adventure: {
        title: "Aventura",
        desc: "Genera tu entrenador, región, inicial, equipo, desafío y meta con un toque.",
      },
      generator: {
        title: "Generadores",
        desc: "Tiradas de Pokémon aleatorias por tipo, habilidad, movimiento, estadística, número y más.",
      },
      challenge: {
        title: "Desafíos",
        desc: "Adivina, caza o gira la ruleta: desafíos para compartir con tus amigos.",
      },
      tool: {
        title: "Herramientas",
        desc: "Utilidades prácticas construidas sobre las tiradas aleatorias.",
      },
      team: {
        title: "Equipo",
        desc: "Arma tu equipo o genera uno listo de seis.",
      },
    },
    items: {
      adventure: {
        label: "Aventura Pokémon",
        desc: "Genera una aventura completa: entrenador, inicial, equipo, desafío y meta.",
      },
      randomPokemon: {
        label: "Pokémon aleatorio",
        desc: "Un Pokémon totalmente aleatorio con estadísticas, tipo y sprite.",
      },
      type: {
        label: "Generador de tipos",
        desc: "Genera un tipo al azar y un Pokémon que lo tenga.",
      },
      ability: {
        label: "Generador de habilidades",
        desc: "Genera una habilidad al azar y mira quién la tiene.",
      },
      move: {
        label: "Generador de movimientos",
        desc: "Descubre un movimiento al azar y uno de sus usuarios.",
      },
      bst: {
        label: "Generador de BST",
        desc: "Total de estadísticas base al azar; luego revela el Pokémon.",
      },
      number: {
        label: "Generador de números",
        desc: "Genera un número de Pokédex y revela qué Pokémon es.",
      },
      starter: {
        label: "Generador de iniciales",
        desc: "Un compañero al azar de cada generación.",
      },
      cute: {
        label: "Generador de adorables",
        desc: "Elecciones suaves, peludas y adorables.",
      },
      mythical: {
        label: "Generador de singulares",
        desc: "Mew, Celebi, Arceus y amigos.",
      },
      legendary: {
        label: "Generador de legendarios",
        desc: "Genera solo Pokémon legendarios.",
      },
      mega: {
        label: "Generador de megas",
        desc: "Megaevoluciones y Reversiones Primigenias.",
      },
      nickname: {
        label: "Generador de apodos",
        desc: "Un Pokémon acompañado de un apodo divertido y tierno.",
      },
      guess: {
        label: "Adivina el Pokémon",
        desc: "Nombres ocultos: adivina por la silueta y revela para comprobar.",
      },
      shiny: {
        label: "Caza shiny",
        desc: "¿Cuántos encuentros faltan para tu próximo shiny?",
      },
      mystery: {
        label: "Pokémon misterioso",
        desc: "Una carta misteriosa: ilustración visible, nombre oculto.",
      },
      wheel: {
        label: "Batalla de ruleta",
        desc: "Ruleta multijugador: 2-6 jugadores giran, gana el BST más alto.",
      },
      fusion: {
        label: "Herramienta de fusión",
        desc: "Fusiona dos Pokémon en una nueva criatura.",
      },
      randomTeam: {
        label: "Equipo aleatorio",
        desc: "Genera un equipo listo de seis Pokémon al azar.",
      },
      teamChallenge: {
        label: "Desafío de equipo",
        desc: "Genera un equipo con semilla y desafía a un amigo a superarlo.",
      },
      teamCoach: {
        label: "Entrenador de equipo",
        desc: "Bloquea tus elecciones y completa el resto con cobertura inteligente.",
      },
      myTeam: {
        label: "Mi equipo",
        desc: "Reúne favoritos en un equipo temático.",
      },
    },
    /** Homepage "Jump straight in" cards — keyed by tool id. Several labels
     *  intentionally differ from the catalog labels above. */
    jump: {
      randomPokemon: {
        label: "Generador aleatorio",
        desc: "Invoca un Pokémon al azar con estadísticas e ilustración completas.",
      },
      adventure: {
        label: "Modo aventura",
        desc: "Genera una aventura Pokémon completa: entrenador, inicial, equipo, desafío y meta.",
      },
      randomTeam: {
        label: "Equipo aleatorio",
        desc: "Genera un equipo listo de seis Pokémon al azar.",
      },
      fusion: {
        label: "Generador de fusiones",
        desc: "Fusiona dos Pokémon en una criatura híbrida.",
      },
      shiny: {
        label: "Caza shiny",
        desc: "Caza la rara forma de color alternativo.",
      },
      guess: {
        label: "Adivina el Pokémon",
        desc: "Nombres ocultos: adivina por la silueta y revela para comprobar.",
      },
    },
  },

  heroCard: {
    stats: {
      hp: "PS",
      atk: "ATQ",
      def: "DEF",
      spa: "ATE",
      spd: "DFE",
      spe: "VEL",
    },
    forms: {
      mega: "Mega",
      alolan: "de Alola",
      galarian: "de Galar",
      hisuian: "de Hisui",
      paldean: "de Paldea",
      gigantamax: "Gigantamax",
    },
    ability: "Habilidad",
    region: "Región",
    bst: "BST",
    gen: "Gen",
    height: "Altura",
    weight: "Peso",
    heightUnit: "m",
    weightUnit: "kg",
    mystery: "Misterioso",
    newRoll: "Nueva tirada",
    rolling: "Generando…",
    flipHint: "Toca la carta para girarla — set de Showdown",
    showdownSet: "Set de Showdown",
    loading: "Cargando…",
    generatingSet: "Generando set…",
    lock: "Bloquear — conservar al regenerar",
    unlock: "Desbloquear — permitir regenerar",
    addToFavorites: "Añadir a favoritos",
    removeFromFavorites: "Quitar de favoritos",
    favLimit: "Máximo 15 favoritos: elimina uno para añadir otro.",
    shareLink: "Compartir enlace",
    linkShared: "Enlace compartido",
    linkCopied: "¡Enlace copiado!",
    shared: "¡Compartido!",
    downloadCard: "Descargar carta",
    imageSaved: "Imagen guardada",
    imageSavedBang: "¡Imagen guardada!",
    closeShowdown: "Cerrar set de Showdown",
    backToCard: "Volver a la carta",
  },

  randomGenerator: {
    generation: "Generación",
    region: "Región",
    type: "Tipo",
    legendary: "Legendario",
    starter: "Inicial",
    favorites: "Favoritos",
    all: "Todos",
    any: "Cualquiera",
    only: "Solo",
    exclude: "Excluir",
    favoritesTitle: "Omitir los Pokémon que marcaste como favoritos",
    noMatch: "Ningún Pokémon coincide con esos filtros: prueba a ampliarlos.",
    advancedFilters: "Filtros avanzados",
    collapseAria: "Contraer filtros avanzados",
    collapseTitle: "Contraer filtros",
  },

  variantGenerator: {
    welcome: "¡Bienvenido, entrenador!",
    /** Template: {kind} = localized kind label. */
    yourRandom: "Tu {kind} al azar es…",
    buildTeam: "Crear equipo",
    kinds: {
      type: "tipo",
      ability: "habilidad",
      move: "movimiento",
      bst: "total de estadísticas base",
      number: "número de Pokédex",
      starter: "Pokémon inicial",
      shiny: "Pokémon shiny",
      noNames: "Pokémon misterioso",
      cute: "Pokémon adorable",
      mythical: "Pokémon singular",
      mega: "mega Pokémon",
      nickname: "apodo",
    },
  },

  homeTool: {
    eyebrow: "Generador de Pokémon aleatorio y herramientas",
    title: "Generador de",
    titleAccent: "Pokémon aleatorio",
    lead: "Genera un Pokémon aleatorio con un toque: más de 1.000 especies con estadísticas e ilustración completas. O genera un equipo Pokémon aleatorio, un desafío, incluso una aventura Pokémon completa. Gratis, al instante y para compartir.",
    rollPokemon: "Generar un Pokémon",
    randomGeneratorTitle: "Generador de Pokémon aleatorio",
    stats: {
      species: "Especies",
      types: "Tipos",
      generations: "Generaciones",
    },
    jumpEyebrow: "Empieza ya",
    jumpTitle: "Elige una herramienta y empieza a jugar",
    jumpDesc: "Los generadores más populares: un toque y diversión instantánea.",
    explore: "Explorar",
    browseEyebrow: "Matriz de herramientas",
    browseTitle: "Todas las formas de generar",
    browseDesc: "El catálogo completo de herramientas: todas las formas de generar un Pokémon.",
  },

  homeFacts: {
    title: "PokeRoll en números",
    metricHead: "Métrica",
    valueHead: "Valor",
    noteHead: "Nota",
    facts: [
      { metric: "Especies de Pokémon", value: "1,000+", note: "Las 9 generaciones" },
      { metric: "Tipos de Pokémon", value: "18", note: "Todos filtrables" },
      { metric: "Generaciones", value: "9", note: "De la Gen 1 (Kanto) a la Gen 9 (Paldea)" },
      { metric: "Tamaño del equipo aleatorio", value: "6", note: "Un equipo completo listo para combatir" },
      { metric: "Probabilidad base de shiny", value: "1 / 4,096", note: "Igual que en los juegos modernos" },
    ],
    howToTitle: "Cómo generar un Pokémon aleatorio en 3 pasos",
    step1Pre: "Abre el",
    step1Link: "generador de Pokémon aleatorio",
    step1Post: "— sin registro ni descargas.",
    step2: "Pulsa el botón de generar para obtener al instante 1 de más de 1.000 especies con nombre, tipo, habilidad, estadísticas base e ilustración.",
    step3: "Gira la carta para copiar un set de Pokémon Showdown listo para usar, o comparte el enlace con tus amigos.",
    quote1:
      "«Esto resulta en una probabilidad base de shiny de aproximadamente 16/65536, o 1/4096.»",
    quote1Cite: "Bulbapedia, «Pokémon shiny»",
    quote2:
      "«Todos los datos de Pokémon que necesitarás en un solo lugar, fácilmente accesibles a través de una API REST moderna, gratuita y de código abierto.»",
    quote2CiteSuffix: ", con más de 50 000 millones de llamadas a la API cada mes",
  },

  addToTeam: {
    add: "Añadir al equipo",
    addAria: "Añadir al equipo",
    inTeam: "✓ En el equipo",
    removeAria: "Quitar del equipo",
    /** Template: {count} = current team size. */
    viewTeam: "Ver equipo ({count})",
  },

  faq: {
    heading: "Preguntas frecuentes",
  },

  relatedTools: {
    heading: "Herramientas relacionadas",
  },

  adventureView: {
    /** Template: {seed} = adventure seed code. */
    seedLine: "Semilla {seed} — comparte este enlace para repetir exactamente la misma aventura.",
    difficultyLabel: "Dificultad",
    addAllToTeam: "Añadir todo al equipo",
    shareAdventure: "Compartir aventura",
    rollAgain: "Generar de nuevo",
    manifest: "Manifiesto de la aventura",
    /** Template: {difficulty} = difficulty label. */
    manifestDifficulty: "Dificultad · {difficulty}",
    /** Template: {seed} = adventure seed code. */
    manifestSeed: "Semilla · {seed}",
    trainerProfile: "Perfil de entrenador",
    /** Template: {style} = trainer style. */
    styleLine: "Estilo · {style}",
    challenge: "Desafío",
    goal: "Meta",
    /** Template: {n} = team size. */
    teamCompanions: "Equipo · {n} compañeros desconocidos",
    yourStarter: "Tu inicial",
    yourRival: "Tu rival",
    /** Templates: {name} = rival name, {type} = rival starter type. */
    rivalCounter: "{name} eligió un inicial de tipo {type} para contrarrestar el tuyo.",
    /** Template: {n} = team size. */
    yourTeam: "Tu equipo ({n})",
    gymJourney: "Ruta de gimnasios",
    legendaryEncounter: "Encuentro legendario",
    /** Templates: {count} = current team size, {max} = team capacity. */
    teamFull: "El equipo está lleno ({count}/{max}). Quita algunos para añadir nuevos Pokémon.",
    alreadyInTeam: "Todos estos Pokémon ya están en tu equipo.",
    /** Templates: {added} = number added, {max} = team capacity. */
    addedFull: "{added} añadidos — el equipo ya está lleno ({max}/{max}).",
    /** Templates: {added} = number added, {count} = new team size, {max} = capacity. */
    addedToTeam: "{added} añadidos a tu equipo ({count}/{max}).",
  },

  challengeGenerator: {
    hints: {
      guess: "Nombres ocultos — revela para comprobar",
      shiny: "¿Cuántos encuentros faltan para un shiny?",
    },
    createChallenge: "Crear desafío",
    shareChallenge: "Compartir desafío",
    filtersAria: "Filtros",
    filtersTitle: "Filtros",
    collapseAria: "Contraer filtros",
    collapseTitle: "Contraer filtros",
    difficulty: "Dificultad",
    random: "Al azar",
    /** Template: {max} = count cap for the current difficulty. */
    countMax: "Cantidad (máx. {max})",
    typeFilter: "Filtro de tipo",
    regionFilter: "Filtro de región",
    /** Templates: {revealed} = flipped cards, {total} = total cards. */
    revealedProgress: "Revelados {revealed} / {total}",
    hideAll: "Ocultar todos",
    revealAll: "Revelar todos",
    silhouetteAlt: "Silueta de Pokémon oculto",
    /** Template: {types} = " · "-joined type hint list. */
    typeHint: "Pista: {types}",
    whosThat: "¿Quién es ese Pokémon?",
  },

  shinyHunt: {
    shinyTag: "✦ SHINY",
    /** Template: {odds} = odds denominator (localized number). */
    oddsGuaranteed: "1 / {odds} · GARANTIZADO",
    /** Template: {odds}. */
    oddsLabel: "PROBABILIDAD 1 / {odds}",
    /** Template: {odds}. */
    oddsGuaranteedLower: "1 / {odds} · garantizado",
    /** Template: {odds}. */
    oddsLabelLower: "probabilidad 1 / {odds}",
    encountersLabel: "Encuentros",
    /** Template: {name} = Pokémon display name. */
    shinyName: "Shiny {name}",
    foundAfterPre: "Encontrado tras ",
    /** Template: {n} = encounter count (localized number). */
    foundAfterCount: "{n} encuentros",
    foundAfterSep: " — ",
    verdicts: {
      absurdlyLucky: "Suerte absurda — una historia para contar.",
      lucky: "¡Qué suerte! Por debajo de la probabilidad.",
      overOdds: "Por encima de la probabilidad — pero lo lograste.",
      brutal: "Caza brutal. Este shiny se ganó su brillo.",
    },
    shareAria: "Comparte tu shiny",
    shareTitle: "Comparte tu shiny",
    newHuntAria: "Empieza tu propia caza",
    newHuntTitle: "Empieza tu propia caza",
    rendering: "Renderizando…",
    /** Template: {name} = wild Pokémon display name. */
    wildAppeared: "Apareció un {name} salvaje…",
    notShiny: "no es shiny",
    emptyState: "La hierba alta se agita… empieza a buscar encuentros para cazar tu shiny.",
    encounter: "¡Encuentro!",
  },

  favoritesClient: {
    /** navigator.share title for the favorites snapshot link. */
    shareTitle: "Mis Pokémon favoritos",
    sharedTitle: "Favoritos compartidos",
    yourTitle: "Tus favoritos",
    sharedDesc: "Una lista de favoritos compartida contigo — solo lectura",
    yourDesc: "Los Pokémon que marcaste como favoritos en este dispositivo",
    /** Template: {count} = number of favorites. */
    slotsUsed: "{count} / 15 espacios usados",
    /** Template: {count} = number of favorites; shown when the cap is hit. */
    slotsMax: "{count} / 15 — máximo alcanzado",
    /** Template: {count} = Pokémon in the shared snapshot. */
    sharedCount: "{count} Pokémon en esta lista compartida",
    copyLink: "Copiar enlace",
    saveToMine: "Guardar en mis favoritos",
    /** Template: {added} = " (+n)" when the merge added entries, else "". */
    savedViewMine: "Guardado{added} — Ver los míos",
    /** Suffix after the bolded favorites count. */
    favoritedSuffix: " favoritos",
    clearAll: "Borrar todo",
    invalidLink: "Este enlace de favoritos no es válido o ha caducado.",
    goToMine: "Ir a mis favoritos",
    emptyState:
      "Aún no tienes favoritos. Genera un Pokémon y toca el corazón para guardarlo aquí.",
    rollPokemon: "Generar un Pokémon",
    /** Template: {name} = Pokémon display name. */
    removeAria: "Quitar {name} de favoritos",
    remove: "Quitar",
    shareFavorites: "Compartir favoritos",
  },

  /* ---------------------------------------------------------------- */
  /*  Component-level UI strings (camelCase, keyed by component)        */
  /* ---------------------------------------------------------------- */

  teamClient: {
    readyTitle: "Tu equipo Pokémon está listo",
    readyDesc: "Gestiona tu equipo — compártelo o exporta cada set a Showdown.",
    sharedTitle: "Un equipo compartido contigo",
    linkCopied: "¡Enlace copiado!",
    shareTeam: "Compartir equipo",
    clearTeam: "Vaciar equipo",
    copyLink: "Copiar enlace",
    backToGenerator: "Volver al generador",
    guideTitle: "Cómo jugar",
    guide1T: "Genera y añade",
    guide1D: "Genera Pokémon en cualquier herramienta y toca «Añadir al equipo» para guardarlos aquí.",
    guide2T: "Gestiona tu equipo",
    guide2D: "Selecciona Pokémon para quitarlos o vaciar el equipo — tu equipo admite hasta 6.",
    guide3T: "Comparte o exporta",
    guide3D: "Copia el enlace del equipo para tus amigos, o copia cada set como texto de Showdown para tus combates.",
    /** Segment: followed by the selected count, then selectedSep + team size. */
    selectedPre: "Seleccionados ",
    /** Segment: between the selected count and the team size. */
    selectedSep: " / ",
    clearSelection: "Borrar selección",
    selectAll: "Seleccionar todo",
    remove: "Quitar",
    /** Template: {count} = number of selected Pokémon. */
    removeCount: "Quitar ({count})",
    empty: "Aún no hay Pokémon. Genera algunos y toca «Añadir al equipo».",
  },

  teamTray: {
    /** Template: {count} = current team size, {max} = max team size. */
    ariaLabel: "Tu equipo ({count}/{max})",
    title: "Tu equipo",
    heading: "Tu equipo",
    empty: "Aún no hay Pokémon seleccionados.",
    buildTeam: "Crear equipo",
    openTeam: "Abrir equipo",
  },

  teamGenerator: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "El equipo está lleno ({count}/{max}). Quita algunos primero.",
    alreadyInTeam: "Todos los Pokémon generados ya están en tu equipo.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} añadidos a tu equipo.",
    readyTitle: "Tu equipo aleatorio está listo",
    readyDesc:
      "Genera un equipo filtrado — bloquea tus favoritos, vuelve a generar el resto y luego añádelos a tu equipo o expórtalos a Showdown.",
    rolling: "Generando…",
    roll: "Generar",
    /** Template: {count} = unlocked slots that will be re-rolled. */
    rollCount: "Generar ({count})",
    allLockedTitle: "Todas las cartas están bloqueadas — desbloquea una para generar",
    filtersAria: "Filtros",
    collapseFilters: "Contraer filtros",
    guideTitle: "Cómo jugar",
    guide1T: "Genera un equipo",
    guide1D: "Un toque crea un equipo aleatorio nuevo — bloquea las cartas que te gusten y vuelve a generar solo el resto.",
    guide2T: "Filtra el grupo",
    guide2D: "Restringe por generación, región, tipo o tamaño del equipo antes de generar.",
    guide3T: "Comparte, guarda o exporta",
    guide3D: "Copia el equipo como sets de Showdown, gira cualquier carta para ver su set, comparte el enlace o toca «Añadir al equipo» para conservar tus favoritos.",
    generationLabel: "Generación",
    regionLabel: "Región",
    typeLabel: "Tipo",
    teamSizeLabel: "Tamaño del equipo",
    optionRandom: "Al azar",
    addAllToTeam: "Añadir todo al equipo",
  },

  teamCoachUi: {
    /** Template: {max} = most picks the user can keep (count - 1). */
    keepLimit: "Conserva como máximo {max} — deja al menos 1 espacio para el entrenador.",
    generateFailed: "Error al generar — inténtalo de nuevo.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} añadidos a tu equipo.",
    alreadyInTeam: "Estos Pokémon ya están en tu equipo.",
    readyTitle: "Tu equipo equilibrado está listo",
    readyDesc:
      "Bloquea los Pokémon que ya elegiste y completa el resto con cobertura de tipos — luego añádelos a tu equipo o expórtalos a Showdown.",
    rerollUnlocked: "Regenerar desbloqueados",
    generateTeam: "Generar equipo",
    viewMyTeam: "Ver mi equipo",
    guideTitle: "Cómo jugar",
    guide1T: "Añade elecciones (opcional)",
    guide1D: "Busca o importa desde Favoritos / Tu equipo — o sáltatelo y deja que el entrenador genere los 6.",
    guide2T: "Genera el equipo",
    guide2D: "El Entrenador de equipo completa el equipo con tipos y roles equilibrados.",
    guide3T: "Bloquea y regenera",
    guide3D: "Bloquea los Pokémon que te gusten, regenera el resto y luego añade todo, comparte el enlace o copia los sets a Showdown.",
    yourTeamHeading: "Tu equipo",
    /** Template: {kept} = locked picks, {count} = target team size. */
    lockedTarget: "{kept} bloqueados · objetivo {count}",
    searchPlaceholder: "Buscar Pokémon (opcional)…",
    importFavorites: "Importar favoritos",
    importTeam: "Importar equipo",
    filtersAria: "Filtros",
    collapseFilters: "Contraer filtros",
    teamSizeLabel: "Tamaño del equipo",
    generationLabel: "Generación",
    regionLabel: "Región",
    typeLabel: "Tipo",
    optionAny: "Cualquiera",
    allLockedHint: "Todo está bloqueado — desbloquea una carta para regenerar.",
    /** Template: {count} = unlocked slots. */
    rerollHint: "Regenera {count} espacio(s) desbloqueado(s)",
    /** Template: {count} = slots the coach will fill. */
    fillHint: "Completará {count} espacio(s) con cobertura equilibrada",
    fullRollHint: "Genera un equipo equilibrado completo",
    emptyHint:
      "Añade una elección o genera un equipo completo — el entrenador equilibra tipos y roles.",
    pickerFavTitle: "Desde favoritos",
    pickerTeamTitle: "Desde tu equipo",
    favEmpty: "Aún no hay favoritos — toca primero el corazón en cualquier generador.",
    teamEmpty: "Tu equipo está vacío — añade Pokémon en cualquier generador primero.",
    addAllToTeam: "Añadir todo al equipo",
  },

  teamChallengeUi: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "El equipo está lleno ({count}/{max}). Quita algunos primero.",
    alreadyInTeam: "Todos estos Pokémon ya están en tu equipo.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} añadidos a tu equipo.",
    idleTitle: "¿Listo para un desafío de equipo?",
    idleDesc:
      "Pulsa abajo para generar un equipo de desafío aleatorio de 6 Pokémon — luego genera tu propio equipo y mira quién tiene el total de estadísticas base más alto.",
    generateChallenge: "Generar el desafío",
    howToTitle: "Cómo usar el Desafío de equipo",
    howTo1T: "1. El equipo de desafío.",
    howTo1D:
      "Esta página siempre muestra un equipo de 6 Pokémon con semilla — todos los que abran el mismo enlace verán exactamente la misma alineación (ese es el \"desafío\").",
    howTo2T: "2. Genera el tuyo.",
    /** Segment: before the howTo2Em link-styled term. */
    howTo2S1: "Toca",
    howTo2Em: "Generar mi equipo",
    /** Segment: after the howTo2Em term. */
    howTo2S2:
      "para generar tu propio equipo de 6 Pokémon — una tirada por desafío, así que no hay reintentos hasta que ganes.",
    howTo3T: "3. Compara.",
    howTo3D:
      "Ambos equipos se muestran con su total de estadísticas base (BST) — gana el total más alto, y puede haber empates.",
    howTo4T: "4. Comparte.",
    howTo4Em: "Desafiar a un amigo",
    howTo4D:
      "copia un enlace con el mismo equipo de desafío, para que un amigo reciba la misma alineación e intente superarla.",
    howTo5T: "5. Exporta el resultado.",
    howTo5Em1: "Compartir la carta del resultado",
    /** Segment: between howTo5Em1 and howTo5Em2. */
    howTo5S: "o",
    howTo5Em2: "Descargar carta",
    howTo5D:
      "crea una imagen del enfrentamiento (con un código QR) — perfecta para publicar en tu comunidad.",
    howTo6T: "6. Crea el tuyo.",
    howTo6Em: "Crear tu propio desafío",
    howTo6D:
      "te convierte en el anfitrión — regeneras el equipo de desafío y lo compartes con un amigo, en lugar de volver a tirar contra tu propio equipo.",
    ownerHeading: "Tu equipo de desafío está listo",
    yoursHeading: "Aquí va tu intento — ¡intenta superarlo!",
    takeHeading: "Acepta el desafío — genera tu equipo",
    ownerDesc:
      "Comparte el enlace — un amigo genera su propio equipo para intentar superar este.",
    yoursDesc:
      "Una tirada por desafío — crea tu propio desafío para compartirlo con un amigo.",
    takeDesc:
      "Recibes 6 Pokémon aleatorios — gana quien tenga un total de estadísticas base más alto que el equipo de desafío.",
    rerollChallenge: "Regenerar desafío",
    startOwn: "Crear tu propio desafío",
    rollMine: "Generar mi equipo",
    linkCopied: "¡Enlace copiado!",
    challengeFriend: "Desafiar a un amigo",
    step1T: "Genera un equipo",
    step1D: "Esa es la alineación con la que desafiarás.",
    step2T: "Comparte el enlace",
    step2D: "Un amigo abre exactamente el mismo equipo.",
    step3T: "Ellos generan y comparan",
    step3D: "El BST total decide quién gana — exporta cualquiera de los equipos a Showdown.",
    ownerTeamLabel: "🫵 Tu equipo de desafío",
    challengeLabel: "🏳️ El desafío",
    yourTeamLabel: "Tu equipo",
    theirTeamLabel: "Su equipo",
    theChallenge: "El desafío",
    youWin: "¡Ganas!",
    theirWin: "¡Gana su equipo!",
    challengeWins: "¡Gana el desafío!",
    tie: "¡Empate!",
    higherWins: "Gana el total de estadísticas base más alto.",
    rendering: "Renderizando…",
    shareResult: "Compartir resultado",
    downloadCard: "Descargar carta",
    addAllToTeam: "Añadir todo al equipo",
  },

  wheelGenerator: {
    welcome: "¡Bienvenido, entrenador!",
    intro:
      "Hasta 6 jugadores giran por turnos — cada resultado se apila en los resultados de abajo.",
    roundComplete: "Ronda completa — ¡mira los resultados de abajo!",
    spinWheel: "Girar la ruleta",
    /** Template: {current} = current player number, {count} = total players. */
    playerTurn: "Jugador {current} de {count} — gira la ruleta",
    spinning: "Girando…",
    roundCompleteButton: "Ronda completa",
    spinButton: "¡Gira!",
    newRound: "Nueva ronda",
    playersLabel: "Jugadores",
    /** Template: {current} = spins so far, {count} = total players. */
    roundResults: "Resultados de la ronda · {current}/{count}",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    winnerLine: "👑 ¡El jugador {player} gana con {name} ({bst} BST)!",
    /** Template: {n} = player number still to spin. */
    stillToSpin: "Al jugador {n} aún le toca girar",
    /** Template: {n} = player number. */
    playerLabel: "Jugador {n}",
    roundLeader: "Líder de la ronda",
    shareResults: "Compartir resultados",
    addAllToTeam: "Añadir todo al equipo",
    /** Template: {count} = number of Pokémon added to the team. */
    addedNotice: "{count} añadidos a tu equipo.",
    alreadyInTeam: "Todos los Pokémon obtenidos ya están en tu equipo.",
    // Shared round result view (result=1 link).
    sharedTitle: "Resultado de ronda de ruleta",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    sharedWinner: "¡El jugador {player} ganó con {name} ({bst} BST)!",
    /** Template: {count} = number of players in the shared round. */
    sharedSubtitle: "Una ronda de {count} jugadores compartida en PokeRoll",
    spinYourOwn: "Gira tu propia ruleta",
    loadingResults: "Cargando resultados…",
  },

  fusionGenerator: {
    welcome: "¡Bienvenido, entrenador!",
    intro: "Fusiona dos Pokémon aleatorios en un nuevo híbrido — toca «Añadir al equipo» para conservarlo.",
    yourFusion: "Tu fusión es…",
  },

  /* ---------------------------------------------------------------- */
  /*  Page-level metadata + copy (app/[locale]/…)                      */
  /*  English values are verbatim from the pre-i18n pages; dynamic     */
  /*  segments use {placeholders} substituted with .replace() chains.  */
  /* ---------------------------------------------------------------- */
  pages: {
    home: {
      metaTitle: "Generador de Pokémon aleatorio — Equipo, tipo y ruleta | PokeRoll",
      metaDescription:
        "PokeRoll es un generador de Pokémon aleatorio gratuito con muchas herramientas: crea un equipo al azar, acepta desafíos o genera una aventura completa, y copia cualquier carta a Showdown.",
      keywords: [
        "generador de pokemon aleatorio",
        "generador de pokemon",
        "herramientas pokemon",
        "generador de equipo pokemon",
        "aventura pokemon",
      ],
      /** Template: {date} = last-updated ISO date. */
      updatedBy: "Por el equipo de PokeRoll · Última actualización: {date}",
      // FAQ answers interleave text with links: s1/l1/s2/l2/s3 are the
      // segments around up to two links, aText the plain JSON-LD version.
      faq1: {
        q: "¿Cuántos Pokémon puede generar este generador?",
        s1: "Puede generar cualquiera de las más de 1.000 especies de Pokémon, repartidas en las 9 generaciones y los 18 tipos. Cada carta incluye estadísticas, habilidades e ilustración completas, y los datos provienen de la pública ",
        l1: "PokéAPI",
        s2: ".",
        aText:
          "Puede generar cualquiera de las más de 1.000 especies de Pokémon, repartidas en las 9 generaciones y los 18 tipos. Cada carta incluye estadísticas, habilidades e ilustración completas, y los datos provienen de la PokéAPI pública (pokeapi.co).",
      },
      faq2: {
        q: "¿Cuál es la probabilidad de obtener un Pokémon shiny?",
        s1: "Nuestras tiradas de shinies replican los juegos modernos: una probabilidad base de 1 entre 4.096. Es la tasa oficial desde la sexta generación (los juegos anteriores usaban 1 entre 8.192), como documenta ",
        l1: "Bulbapedia",
        s2: ". Prueba tu suerte en el desafío ",
        l2: "Caza shiny",
        s3: ".",
        aText:
          "Nuestras tiradas de shinies replican los juegos modernos: una probabilidad base de 1 entre 4.096. Es la tasa oficial desde la sexta generación (los juegos anteriores usaban 1 entre 8.192), como documenta Bulbapedia. Prueba tu suerte en el desafío Caza shiny.",
      },
      faq3: {
        q: "¿Puedo generar un equipo completo de seis Pokémon a la vez?",
        s1: "Sí: el ",
        l1: "generador de equipo aleatorio",
        s2: " crea un equipo listo de 6 Pokémon con un toque, y el ",
        l2: "Entrenador de equipo",
        s3: " equilibra los 6 puestos por cobertura de tipos. Cada set se puede copiar directamente en Pokémon Showdown.",
        aText:
          "Sí: el generador de equipo aleatorio crea un equipo listo de 6 Pokémon con un toque, y el Entrenador de equipo equilibra los 6 puestos por cobertura de tipos. Cada set se puede copiar directamente en Pokémon Showdown.",
      },
      faq4: {
        q: "¿PokeRoll es gratis?",
        s1: "Sí, todas las herramientas de PokeRoll son completamente gratis: los más de 18 generadores, desafíos y herramientas de equipo funcionan al instante en tu navegador, sin registro, sin descarga y sin límite de tiradas.",
      },
      faq5: {
        q: "¿De dónde provienen los datos de Pokémon de este sitio?",
        s1: "Todos los nombres, tipos, estadísticas, habilidades y sprites provienen de ",
        l1: "PokéAPI",
        s2: ", la base de datos abierta de la comunidad Pokémon. Cubre más de 1.000 especies de 9 generaciones, así que las tiradas siempre reflejan la Pokédex real.",
        aText:
          "Todos los nombres, tipos, estadísticas, habilidades y sprites provienen de PokéAPI (pokeapi.co), la base de datos abierta de la comunidad Pokémon. Cubre más de 1.000 especies de 9 generaciones, así que las tiradas siempre reflejan la Pokédex real.",
      },
      faq6: {
        q: "¿PokeRoll está afiliado a Nintendo o The Pokémon Company?",
        s1: "No. PokeRoll es un proyecto independiente hecho por fans y no está afiliado, respaldado ni patrocinado por Nintendo, Game Freak o The Pokémon Company. Consulta nuestro ",
        l1: "aviso legal",
        s2: " para ver el aviso completo.",
        aText:
          "No. PokeRoll es un proyecto independiente hecho por fans y no está afiliado, respaldado ni patrocinado por Nintendo, Game Freak o The Pokémon Company. Consulta nuestro aviso legal para ver el aviso completo.",
      },
    },

    randomGenerator: {
      metaTitle: "Generador de Pokémon aleatorio | PokeRoll",
      /** Template: {name} = shared Pokémon display name. */
      sharedTitle: "{name} — Generador de Pokémon aleatorio",
      metaDescription:
        "Genera un Pokémon aleatorio con un toque: nombre, tipo, habilidad, estadísticas base e ilustración incluidos. Gira la carta para obtener un set de Showdown listo para copiar. Herramienta gratuita hecha por fans.",
      /** Template: {name}; used when the name is ≤16 chars (SEO length window). */
      sharedDescLong:
        "Me salió {name} en PokeRoll: gira la carta para ver su set de Showdown listo para copiar, o genera tu propio Pokémon aleatorio con un toque. Herramienta gratuita hecha por fans.",
      /** Template: {name}; used for longer names. */
      sharedDescShort:
        "Me salió {name} en PokeRoll: gira la carta para ver su set de Showdown listo para copiar, o genera el tuyo al azar. Herramienta gratuita hecha por fans.",
      /** Template: {name}. */
      ogSharedTitle: "{name} — Pokémon aleatorio",
      /** Template: {name}. */
      ogSharedDesc: "Me salió {name} en PokeRoll. ¿Qué te saldrá a ti?",
      keywords: [
        "generador de pokemon aleatorio",
        "generador de pokemon",
        "pokemon aleatorio",
        "generar pokemon aleatorio",
        "obtener pokemon aleatorio",
      ],
      headerTitle: "Generador de Pokémon aleatorio",
      headerDesc:
        "Genera un Pokémon aleatorio con un toque: cada tirada incluye su nombre, tipo, habilidad, estadísticas y un sprite oficial.",
      faqs: [
        {
          q: "¿Cómo funciona el generador de Pokémon aleatorio?",
          a: "Cada tirada elige un Pokémon al azar de la Pokédex Nacional completa — más de 1.000 especies de las nueve generaciones — y muestra su nombre, tipos, habilidad, estadísticas base, altura, peso e ilustración oficial.",
        },
        {
          q: "¿Puedo reproducir o compartir un resultado concreto?",
          a: "Sí. Usa el botón de compartir de la carta: el enlace lleva el Pokémon exacto, así que quien lo abra verá la misma tirada. También puedes descargar la carta como imagen.",
        },
        {
          q: "¿Puedo acotar los resultados?",
          a: "Abre los filtros avanzados para generar dentro de una generación, región, tipo o categoría concretos, o usa las páginas dedicadas de generadores por Gen, Región y Tipo enlazadas abajo.",
        },
        {
          q: "¿De dónde provienen los datos de Pokémon?",
          a: "Todos los datos de las especies provienen de PokéAPI y se incluyen localmente con el sitio, así que cada tirada es instantánea.",
        },
      ],
    },

    type: {
      /** Template: {type} = localized type display name. */
      metaTitle: "Generador de Pokémon aleatorio de tipo {type} | PokeRoll",
      /** Template: {type}. */
      metaDescription:
        "Genera al instante un Pokémon aleatorio de tipo {type}: nombre, habilidades, estadísticas base, generación y sprite, listo para copiar en Showdown. Herramienta gratuita hecha por fans.",
      /** Templates: {slug} = raw English type slug (lowercase). */
      keywords: [
        "generador de pokemon aleatorio tipo {slug}",
        "generador de pokemon tipo {slug}",
        "generador de pokemon {slug}",
      ],
      /** Template: {type}. */
      breadcrumbType: "Pokémon de tipo {type}",
      /** Template: {type}. */
      headerTitle: "Generador de Pokémon aleatorio de tipo {type}",
      /** Template: {type}. */
      headerDesc:
        "¿Buscas un Pokémon aleatorio de tipo {type}? Aquí tienes uno: pulsa «Generar de nuevo» para obtener otro.",
      /** Template: {type}. */
      introS1: "Los Pokémon de tipo {type} aparecieron por primera vez en la ",
      introS2: " junto a la ",
      /** Template: {region} = region display name. */
      introRegionLink: "región de {region}",
      introS3: ". Genera uno arriba, explora los 18 tipos con el ",
      introTypeLink: "generador de tipos",
      introS4: ", o elige ",
      introRandomLink: "totalmente al azar",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Explorar la región de {region}",
      linkTitleType: "Generador de tipos",
      linkTitleRandom: "Generador de Pokémon aleatorio",
    },

    gen: {
      /** Template: {gen} = generation number. */
      metaTitle: "Generador de Pokémon aleatorio Generación {gen} | PokeRoll",
      /** Templates: {gen}, {region} = raw region slug (lowercase, verbatim SEO copy). */
      metaDescription:
        "Genera un Pokémon aleatorio de la Generación {gen}, de la región de {region}: nombre, tipo, habilidad, estadísticas base y sprite, listo para copiar en Showdown. Herramienta hecha por fans.",
      /** Templates: {gen}. */
      keywords: [
        "generador de pokemon aleatorio gen {gen}",
        "generador de pokemon generacion {gen}",
        "generador de pokemon gen {gen}",
      ],
      /** Template: {genLabel} = localized "Generation N". */
      headerTitle: "Generador de Pokémon aleatorio de la {genLabel}",
      /** Template: {genLabel}. */
      headerDesc:
        "La {genLabel} introdujo muchos Pokémon favoritos de los fans. Aquí tienes uno al azar: pulsa «Generar de nuevo» para ver más.",
      introRegionPre: " presentó la ",
      /** Template: {region} = region display name. */
      introRegionLink: "región de {region}",
      /** Template: {game} = game titles. */
      introGame: " y Pokémon {game}",
      introS3: ". Genera uno arriba, explora por ",
      introTypeLink: "tipo",
      introS4: ", o elige ",
      introRandomLink: "totalmente al azar",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Explorar la región de {region}",
      linkTitleType: "Generador de tipos",
      linkTitleRandom: "Generador de Pokémon aleatorio",
    },

    region: {
      // Third-version game titles that share these regions (same in all 5 locales).
      gameHoenn: "Ruby, Sapphire & Emerald",
      gameSinnoh: "Diamond, Pearl & Platinum",
      /** Templates: {region} = region display name, {gameDesc} = game titles. */
      metaTitle: "Generador de Pokémon aleatorio de {region} — {gameDesc}",
      /** Template: {region}. */
      descStart: "Genera un Pokémon aleatorio de {region}",
      descFill: " al instante",
      /** Template: {gameDesc}. */
      descFromGame: " de Pokémon {gameDesc}",
      descEnd:
        ": nombre, tipo, habilidad, estadísticas base y sprite, listo para copiar en Showdown. Herramienta gratuita hecha por fans.",
      /** Templates: {slug} = raw region slug; REGION_EXTRA_KEYWORDS (lib/seo.ts) are appended. */
      keywords: ["generador de pokemon aleatorio {slug}", "pokemon {slug}"],
      /** Template: {slug}; used when a region has no REGION_EXTRA_KEYWORDS entry. */
      keywordFallback: "generador de pokemon {slug}",
      /** Template: {region}. */
      breadcrumbRegion: "Pokémon de {region}",
      /** Template: {region}. */
      headerTitle: "Generador de Pokémon aleatorio de {region}",
      /** Template: {region}. */
      headerDescStart: "Explora los Pokémon de {region}",
      /** Template: {game} = game titles. */
      headerDescGame: ", presentes en Pokémon {game}",
      headerDescEnd: ". Aquí tienes uno: pulsa «Generar de nuevo» para obtener otro.",
      /** Template: {region}. */
      introS1: "{region} es el hogar de la ",
      /** Template: {genLabel} = localized "Generation N". */
      introGenLink: "Pokédex de la {genLabel}",
      /** Template: {game}. */
      introGame: " y de los juegos Pokémon {game}",
      introS2: ". Genera uno arriba, o prueba el ",
      introRandomLink: "generador totalmente aleatorio",
      introS3: ".",
      linkTitleRandom: "Generador de Pokémon aleatorio",
    },

    variants: {
      type: {
        title: "Generador aleatorio de tipos de Pokémon | PokeRoll",
        description:
          "Obtén un tipo de Pokémon al azar y un Pokémon que lo tenga al instante: Fuego, Agua, Eléctrico y los 18 tipos. Genera otro o copia tu resultado en Showdown.",
        keywords: [
          "generador de tipos pokemon aleatorio",
          "generador de tipos pokemon",
          "generador de pokemon de un solo tipo",
        ],
      },
      ability: {
        title: "Generador aleatorio de habilidades de Pokémon | PokeRoll",
        description:
          "Genera una habilidad de Pokémon al azar como Static o Blaze y mira un Pokémon que la tenga: consulta sus estadísticas y tipos completos y luego copia el set en Showdown.",
        keywords: [
          "generador de habilidades pokemon",
          "generador de habilidades pokemon aleatorio",
          "generar habilidad pokemon aleatoria",
        ],
      },
      move: {
        title: "Generador aleatorio de movimientos de Pokémon | PokeRoll",
        description:
          "Descubre un movimiento de Pokémon al azar y un Pokémon que puede aprenderlo: consulta su potencia, precisión y tipo, y luego copia el set en Showdown. Herramienta hecha por fans.",
        keywords: [
          "generador de movimientos pokemon aleatorio",
          "generador de movimientos pokemon",
        ],
      },
      bst: {
        title: "Generador aleatorio de estadísticas de Pokémon (BST) | PokeRoll",
        description:
          "Genera un total de estadísticas base al azar y revela a qué Pokémon pertenece: compara sus seis estadísticas, genera otro y cópialo en Showdown. Herramienta hecha por fans.",
        keywords: [
          "generador de estadisticas pokemon aleatorio",
          "generador de pokemon aleatorio con estadisticas",
          "generador pokemon aleatorio estadisticas",
        ],
      },
      number: {
        title: "Generador aleatorio de números de Pokémon | PokeRoll",
        description:
          "Genera un número de Pokédex al azar del 1 al 1025 y revela qué Pokémon es: mira su carta completa y cópiala en Showdown. Herramienta gratuita hecha por fans.",
        keywords: [
          "generador de numeros pokemon",
          "generador de numeros pokemon aleatorio",
        ],
      },
      starter: {
        title: "Generador aleatorio de Pokémon iniciales | PokeRoll",
        description:
          "Elige un Pokémon inicial al azar entre los primeros compañeros de cada generación, de Kanto a Paldea, y cópialo en Showdown. Herramienta gratuita hecha por fans.",
        keywords: [
          "generador de pokemon iniciales aleatorio",
          "generador de pokemon iniciales",
          "selector de pokemon inicial aleatorio",
        ],
      },
      "no-names": {
        title: "Generador de Pokémon aleatorio sin nombres — Juego de adivinanzas",
        description:
          "Un Pokémon misterioso con el nombre oculto: ¿puedes adivinar cuál es por su ilustración y estadísticas? Gira la carta para revelar el set de Showdown.",
        keywords: [
          "pokemon sin nombres",
          "adivina el pokemon",
          "quiz de pokemon misterioso",
          "generador de pokemon aleatorio sin nombres",
        ],
      },
      cute: {
        title: "Generador aleatorio de Pokémon adorables | PokeRoll",
        description:
          "Obtén un Pokémon adorable al azar: elecciones suaves, peludas y tiernas de toda la Pokédex. Genera otro o cópialo en Showdown.",
        keywords: [
          "generador de pokemon adorables",
          "generador de pokemon adorables aleatorio",
        ],
      },
      mythical: {
        title: "Generador aleatorio de Pokémon singulares | PokeRoll",
        description:
          "Revela un Pokémon singular al azar como Mew, Celebi o Jirachi: rarezas de todas las generaciones, listas para copiar en Showdown. Herramienta hecha por fans.",
        keywords: [
          "generador de pokemon singulares aleatorio",
          "generador de pokemon singulares",
        ],
      },
      mega: {
        title: "Generador aleatorio de mega Pokémon | PokeRoll",
        description:
          "Gira una megaevolución o reversión primigenia al azar: mira sus estadísticas mejoradas y su habilidad, y copia el set en Showdown. Herramienta gratuita hecha por fans.",
        keywords: [
          "generador de mega pokemon aleatorio",
          "generador de mega pokemon",
        ],
      },
      nickname: {
        title: "Generador aleatorio de nombres y apodos de Pokémon | PokeRoll",
        description:
          "Genera un Pokémon al azar junto con un apodo divertido y tierno: perfecto para tu próxima partida o Nuzlocke. Copia el set en Showdown. Herramienta hecha por fans.",
        keywords: [
          "generador de apodos pokemon",
          "generador de apodos pokemon aleatorio",
          "generar nombre de pokemon aleatorio",
        ],
      },
      noNamesPromo: {
        s1: "¿Quieres un quiz de varias cartas con semilla para compartir? ",
        link: "Prueba el desafío de las siluetas →",
        linkTitle: "Adivina el Pokémon",
      },
    },

    legendary: {
      metaTitle: "Generador aleatorio de Pokémon legendarios | PokeRoll",
      metaDescription:
        "Genera un Pokémon legendario al azar al instante: nombre, tipo, habilidad, estadísticas base e ilustración oficial, listo para copiar en Showdown. Herramienta hecha por fans.",
      keywords: [
        "generador de pokemon legendarios aleatorio",
        "generador de pokemon legendarios",
        "pokemon legendario aleatorio",
      ],
      breadcrumbLabel: "Generador de legendarios",
      headerTitle: "Generador aleatorio de Pokémon legendarios",
      headerDesc:
        "En este grupo solo hay Pokémon legendarios: pulsa «Generar de nuevo» para otra tirada legendaria.",
      note: "Pulsa «Generar de nuevo» para generar otro legendario: «Añadir al equipo» lo guarda en tu equipo.",
    },
    adventure: {
      metaTitle: "Generador de aventuras Pokémon",
      /** Template: {diff} = difficulty label (Easy / Normal / Hard / Extreme). */
      metaTitleDiff: "Generador de aventuras Pokémon — Dificultad {diff}",
      metaDescription:
        "Genera una aventura Pokémon con un toque: entrenador, rival, región, inicial, equipo de seis, desafío y encuentro legendario. Compártela o copia cualquier carta a Showdown.",
      keywords: [
        "generador de aventuras pokemon",
        "generador de aventura pokemon aleatoria",
        "generador de viaje pokemon",
      ],
      headerTitle: "Genera tu aventura Pokémon",
      headerDesc:
        "Un toque genera tu entrenador, región, inicial, equipo, desafío y meta — una aventura Pokémon completa cada vez.",
      guideTitle: "Cómo jugar",
      steps: [
        {
          n: "1",
          t: "Genera tu aventura",
          d: "Un toque genera tu entrenador, rival, región, inicial, equipo de seis, desafío, legendario y meta.",
        },
        {
          n: "2",
          t: "Elige una dificultad",
          d: "Fácil, Normal, Difícil o Extrema — cuanto más alta, más salvaje el viaje.",
        },
        {
          n: "3",
          t: "Compártela",
          d: "Copia el enlace con semilla para que tus amigos repitan exactamente la misma aventura — o añade el equipo al tuyo.",
        },
      ],
      faqs: [
        {
          q: "¿Qué incluye una aventura?",
          a: "Un nombre de entrenador, rol y estilo, un rival, una región, tu inicial, un equipo de seis, un desafío, una ruta de gimnasios, un encuentro legendario y una meta final — todo generado con un toque.",
        },
        {
          q: "¿Qué es la semilla del enlace?",
          a: "Un código de 8 caracteres que dirige la tirada. La misma semilla y dificultad siempre producen exactamente la misma aventura, así que cada enlace es reproducible.",
        },
        {
          q: "¿Qué cambia la dificultad?",
          a: "La dificultad escala la aventura de Fácil a Extrema — da forma a los desafíos que enfrentas, como las probabilidades de shiny y las reglas de encuentros.",
        },
        {
          q: "¿Puedo compartir mi aventura?",
          a: "Sí — copia el enlace de la página. Lleva la semilla y la dificultad, así que tus amigos abren el mismo manifiesto de aventura.",
        },
      ],
    },

    guess: {
      metaTitle: "Adivina el Pokémon — Desafío de siluetas",
      metaDescription:
        "Adivina Pokémon ocultos por sus siluetas, revélalos uno a uno para comprobar y luego comparte el enlace con semilla para desafiar a un amigo. Herramienta gratuita hecha por fans.",
      keywords: [
        "adivina el pokemon",
        "juego de adivinar pokemon",
        "quiz de pokemon",
        "quien es ese pokemon",
      ],
      breadcrumbLabel: "Adivina el Pokémon",
      headerTitle: "Adivina el Pokémon",
      /** Template: {count} = hidden Pokémon count, clamped to the difficulty cap. */
      headerDesc:
        "Ocultamos los nombres de {count} Pokémon aleatorios. ¡Revélalos uno a uno y pon a prueba tus conocimientos Pokémon!",
      promoS1: "¿Prefieres una sola carta misteriosa rápida? ",
      promoLink: "Pokémon misterioso →",
      guideTitle: "Cómo jugar",
      steps: [
        {
          t: "Estudia las siluetas",
          d: "Forma, tamaño y la pista de tipo en Fácil es todo lo que tienes — decide tu respuesta.",
        },
        {
          t: "Gira para revelar",
          d: "Haz clic en una carta para girarla y ver si acertaste el Pokémon.",
        },
        {
          t: "Comparte y compara",
          d: "La semilla del enlace recrea la misma alineación — compártela y compite con un amigo.",
        },
      ],
    },

    shiny: {
      metaTitle: "Caza shiny del generador de Pokémon aleatorio | PokeRoll",
      metaDescription:
        "El generador de Pokémon shiny con probabilidades de caza reales: haz clic en Encuentro, encuentra tu shiny y comparte la carta. El modo Fácil garantiza un shiny en 204 tiradas.",
      keywords: [
        "generador de pokemon aleatorio shiny",
        "probabilidades shiny generador de pokemon aleatorio",
        "generador de pokemon shiny",
      ],
      breadcrumbLabel: "Caza shiny",
      headerTitle: "Desafío de caza shiny",
      headerDescEasy:
        "Modo Fácil — cada clic es una tirada de 1 entre 204 y tu shiny está garantizado en 204 encuentros. Comparte el enlace y compara con un amigo.",
      headerDescDefault:
        "Haz clic en Encuentro y mira cuánto tardas en encontrar tu shiny — las mismas probabilidades de 1/4096 que en los juegos. Comparte el enlace y compara con un amigo.",
      guideTitle: "Cómo jugar",
      steps: [
        {
          t: "Haz clic en Encuentro",
          d: "Cada clic es una tirada — 1 entre 204 en Fácil, 1 entre 4096 en los demás, y Fácil garantiza un shiny en 204 clics.",
        },
        {
          t: "Encuentra tu shiny",
          d: "Cuando brille, la carta encontrada desbloquea Compartir y Descargar.",
        },
        {
          t: "Comparte la caza",
          d: "Comparte la carta o el enlace con semilla — tus amigos ven tu resultado y luego empiezan su propia caza.",
        },
      ],
      faqs: [
        {
          q: "¿Cuáles son las probabilidades de shiny?",
          a: "Los modos Normal, Difícil y Extremo usan la misma tasa de 1 entre 4096 que los juegos principales. El modo Fácil la sube a 1 entre 204 por clic.",
        },
        {
          q: "¿Qué es el modo Fácil?",
          a: "Una caza más amable: probabilidades de 1 entre 204 por encuentro, y tu shiny está garantizado en 204 tiradas — sin rachas de mala suerte eternas.",
        },
        {
          q: "¿Qué pasa cuando encuentro un shiny?",
          a: "La carta encontrada desbloquea Compartir y Descargar. El enlace compartido abre directamente tu shiny encontrado, y la imagen de la carta descargada lleva un código QR que tus amigos pueden escanear para empezar su propia caza.",
        },
      ],
    },

    favorites: {
      metaTitle: "Tus Pokémon favoritos | PokeRoll",
      metaDescription:
        "Guarda los Pokémon que te encantan y crea tu colección de favoritos — comparte la lista con un enlace y copia cualquier carta a Showdown. Herramienta gratuita hecha por fans.",
      keywords: [
        "pokemon favoritos",
        "lista de pokemon favoritos",
        "compartir coleccion pokemon",
      ],
      headerTitle: "Pokémon favoritos",
      headerDesc:
        "Guarda los Pokémon que te encantan en un solo lugar — luego comparte toda la lista con un solo enlace.",
    },

    contact: {
      metaTitle: "Contáctanos | PokeRoll",
      metaDescription:
        "Contacta al equipo de PokeRoll — escribe a hello@pokeroll.app para comentarios y reportes de errores, salúdanos en X @JoeyChou2024, o abre un issue en GitHub. Respondemos rápido.",
      keywords: [
        "contacto pokeroll",
        "comentarios generador de pokemon",
        "soporte pokeroll",
      ],
      headerTitle: "Contáctanos",
      headerDesc:
        "¿Preguntas, ideas o un error que reportar? Elige el canal que prefieras — cada mensaje llega directamente al creador.",
      channels: [
        {
          title: "Email",
          handle: "hello@pokeroll.app",
          desc: "Comentarios, reportes de errores o consultas comerciales — lo leemos todo.",
          action: "Enviar correo",
        },
        {
          title: "X (Twitter)",
          handle: "@JoeyChou2024",
          desc: "Las respuestas más rápidas. Actualizaciones diarias de desarrollo en público sobre lo que viene.",
          action: "Seguir en X",
        },
        {
          title: "GitHub",
          handle: "ihuajiu/pokeroll.app",
          desc: "Código abierto. ¿Encontraste un error? Abre un issue y queda registrado.",
          action: "Abrir un issue",
        },
      ],
      soloNote:
        "PokeRoll es un proyecto hecho por fans de una sola persona — no está afiliado a Nintendo ni a The Pokémon Company. Las respuestas suelen llegar en 48 horas.",
      backLink: "← Volver al generador",
    },

    privacy: {
      metaTitle: "Política de privacidad — PokeRoll",
      metaDescription:
        "Política de privacidad de PokeRoll — usamos Google Analytics anónimo, guardamos favoritos y tema solo en el localStorage de tu navegador y nunca recopilamos datos personales.",
      keywords: [
        "politica de privacidad pokeroll",
        "privacidad herramienta pokemon",
        "privacidad sitio de fans",
      ],
      headerTitle: "Política de privacidad",
      intro:
        "PokeRoll es una caja de herramientas Pokémon gratuita hecha por fans. Mantenemos la recopilación de datos al mínimo absoluto — puedes usar todas las herramientas sin cuenta y nunca pedimos información personal.",
      analytics: {
        h: "Analítica:",
        p: "Usamos Google Analytics para entender el tráfico general (qué páginas se visitan y aproximadamente cuántos visitantes hay). Estos datos son agregados y anónimos — no los usamos para identificar usuarios individuales.",
      },
      storage: {
        h: "Almacenamiento del navegador:",
        p: "Tus favoritos, elecciones de equipo y preferencias de tema se guardan solo en el localStorage de tu navegador. Estos datos nunca salen de tu dispositivo ni se suben a nuestros servidores.",
      },
      personal: {
        h: "Datos personales:",
        p: "No recopilamos nombres, direcciones de correo ni ningún otro dato personal. No hay registro ni seguimiento más allá de la analítica anónima descrita arriba.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Enlaces de afiliado:",
        s1: "Algunos enlaces de compras de este sitio son enlaces de afiliado — consulta el ",
        l1: "aviso legal",
        s2: " para más detalles. Los socios de afiliación pueden usar sus propias cookies según sus propias políticas de privacidad.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Contacto:",
        s1: "¿Preguntas sobre esta política? Escribe a ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Volver al generador",
    },

    terms: {
      metaTitle: "Términos de uso — PokeRoll",
      metaDescription:
        "Términos de uso de PokeRoll — una caja de herramientas Pokémon no oficial hecha por fans, proporcionada tal cual. Pokémon es una marca registrada de Nintendo, Game Freak y The Pokémon Company.",
      keywords: [
        "terminos de uso pokeroll",
        "terminos sitio de fans pokemon",
        "herramienta pokemon no oficial",
      ],
      headerTitle: "Términos de uso",
      intro:
        "PokeRoll es una caja de herramientas Pokémon no oficial hecha por fans. Al usar este sitio aceptas los siguientes términos.",
      unofficial: {
        h: "Proyecto de fans no oficial:",
        p: "Este sitio no está afiliado, respaldado ni patrocinado por Nintendo, Game Freak o The Pokémon Company. Pokémon y todos los nombres, personajes e ilustraciones relacionados son marcas registradas de Nintendo, Game Freak y The Pokémon Company, y se usan aquí solo con fines informativos y de entretenimiento.",
      },
      asIs: {
        h: "Se proporciona tal cual:",
        p: 'Las herramientas y el contenido de este sitio se proporcionan «tal cual», sin garantías de ningún tipo. Los resultados aleatorios son para divertirse; no garantizamos disponibilidad, exactitud ni idoneidad para ningún propósito.',
      },
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        h: "Fuentes de datos:",
        s1: "Los datos de Pokémon (nombres, tipos, estadísticas, habilidades, sprites) provienen de la pública ",
        l1: "PokéAPI",
        s2: ". Los sprites son © de sus respectivos titulares de derechos.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Enlaces de afiliado:",
        s1: "Como asociados de Amazon ganamos por las compras que cumplan los requisitos realizadas a través de los enlaces de compras de este sitio. Esto no afecta a las herramientas, que siguen siendo gratuitas. Consulta el ",
        l1: "aviso legal",
        s2: " para ver la declaración completa.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Contacto:",
        s1: "¿Preguntas sobre estos términos? Escribe a ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Volver al generador",
    },

    disclaimer: {
      metaTitle: "Aviso legal y nota de afiliación — Herramienta Pokémon hecha por fans",
      metaDescription:
        "PokeRoll es un sitio no oficial hecho por fans y no está afiliado a Nintendo, Game Freak o The Pokémon Company. Lee el aviso legal y la declaración de afiliación.",
      keywords: [
        "aviso legal sitio de fans pokemon",
        "declaracion de afiliacion pokemon",
        "sitio pokemon no oficial",
      ],
      headerTitle: "Aviso legal",
      intro:
        "Este sitio es una herramienta no oficial hecha por fans. No está afiliada, respaldada ni patrocinada por Nintendo, Game Freak o The Pokémon Company. Los nombres, personajes e ilustraciones de Pokémon son marcas registradas de sus respectivos propietarios y se usan aquí solo con fines informativos y de entretenimiento.",
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        s1: "Todos los datos de Pokémon (nombres, tipos, habilidades, estadísticas, sprites) se obtienen de la pública ",
        l1: "PokéAPI",
        s2: ". Los sprites son © de sus respectivos titulares de derechos.",
      },
      affiliate: {
        h: "Declaración de afiliación:",
        p: "Como asociados de Amazon ganamos por las compras que cumplan los requisitos realizadas a través de los enlaces de compras de este sitio. Esto no afecta a la herramienta, que sigue siendo gratuita.",
      },
      backLink: "← Volver al generador",
    },

    randomPokemon: {
      metaTitle: "Pokémon aleatorio — Genera uno ahora | PokeRoll",
      metaDescription:
        "Obtén un Pokémon aleatorio con un toque — cada tirada incluye nombre, tipo, habilidad, estadísticas base e ilustración oficial, listo para copiar en Showdown. Herramienta gratuita hecha por fans.",
      keywords: [
        "generador de pokemon aleatorio",
        "generador de pokemon",
        "pokemon aleatorio",
        "generar pokemon aleatorio",
        "obtener pokemon aleatorio",
      ],
    },
    randomPokemonPicker: {
      metaTitle: "Selector de Pokémon aleatorio | PokeRoll",
      metaDescription:
        "Elige un Pokémon aleatorio con un toque — cada elección incluye nombre, tipo, habilidad, estadísticas base e ilustración oficial, listo para copiar en Showdown. Herramienta gratuita hecha por fans.",
      keywords: [
        "generador de pokemon aleatorio",
        "generador de pokemon",
        "pokemon aleatorio",
        "generar pokemon aleatorio",
        "obtener pokemon aleatorio",
      ],
    },
    pokemonRandomizer: {
      metaTitle: "Randomizer de Pokémon | PokeRoll",
      metaDescription:
        "Aleatoriza un Pokémon con un toque — cada tirada incluye nombre, tipo, habilidad, estadísticas base e ilustración oficial, listo para copiar en Showdown. Herramienta gratuita hecha por fans.",
      keywords: [
        "generador de pokemon aleatorio",
        "generador de pokemon",
        "pokemon aleatorio",
        "generar pokemon aleatorio",
        "obtener pokemon aleatorio",
      ],
    },

    team: {
      metaTitle: "Tu equipo Pokémon | PokeRoll",
      metaDescription:
        "Tu equipo guardado de Pokémon generados al azar — comparte el enlace con amigos o copia cada set a Showdown para tus combates. Herramienta gratuita hecha por fans.",
      keywords: [
        "creador de equipos pokemon",
        "creador de equipos pokemon aleatorios",
        "generador de equipos pokemon aleatorios",
        "planificador de equipos pokemon",
      ],
      headerTitle: "Tu equipo Pokémon",
      headerDesc:
        "Tu equipo guardado — añade Pokémon desde cualquier generador, luego arma y comparte.",
      faqs: [
        {
          q: "¿Cómo uso este equipo en Pokémon Showdown?",
          a: "Toca Copy Sets bajo el equipo (el botón con la insignia Showdown) para copiar el equipo en el formato de texto de Showdown. Luego abre play.pokemonshowdown.com/teambuilder, elige Import/Export y pega el texto — cada set se carga con sus movimientos, habilidad, objeto, naturaleza y EVs, listo para combatir o ajustar.",
        },
      ],
    },

    teamRandom: {
      metaTitle: "Generador de equipo Pokémon aleatorio | PokeRoll",
      metaDescription:
        "Genera un equipo aleatorio de 6 Pokémon con un toque — bloquea tus favoritos, vuelve a generar el resto y luego exporta cada set a Showdown o comparte el enlace. Herramienta gratuita hecha por fans.",
      keywords: [
        "generador de equipo pokemon aleatorio",
        "generador de equipos pokemon",
        "equipo pokemon aleatorio",
        "crear un equipo pokemon aleatorio",
      ],
      headerTitle: "Equipo Pokémon aleatorio",
      headerDesc:
        "Genera un equipo filtrado de Pokémon aleatorios — luego añade tus favoritos a Tu equipo.",
      faqs: [
        {
          q: "¿Cómo se generan los equipos?",
          a: "Cada tirada genera seis Pokémon aleatorios a la vez. Abre los filtros para restringir el grupo por generación, región, tipo o categoría (como Legendario o Inicial) antes de generar.",
        },
        {
          q: "¿Por qué obtuve menos de seis Pokémon?",
          a: "Los filtros muy estrechos pueden dejar un grupo de coincidencias menor que seis. Amplía uno de los filtros — o vuelve a poner uno en Al azar — y genera de nuevo.",
        },
        {
          q: "¿Puedo guardar o compartir un equipo?",
          a: "Comparte el enlace de la página — la URL lleva el equipo generado, así que los amigos que lo abran verán los mismos seis. Toca «Añadir al equipo» en cualquier carta para conservar favoritos en Tu equipo en todo el sitio.",
        },
        {
          q: "¿Cómo uso este equipo en Pokémon Showdown?",
          a: "Toca Copy Sets bajo el equipo (el botón con la insignia Showdown) para copiar el equipo en el formato de texto de Showdown. Luego abre play.pokemonshowdown.com/teambuilder, elige Import/Export y pega el texto — cada set se carga con sus movimientos, habilidad, objeto, naturaleza y EVs, listo para combatir o ajustar.",
        },
      ],
    },

    teamCoach: {
      metaTitle: "Entrenador de equipo Pokémon — Completa el resto de tu equipo",
      metaDescription:
        "Bloquea los Pokémon que ya elegiste y deja que el Entrenador de equipo complete el resto con cobertura de tipos y roles equilibrados — luego copia el equipo a Showdown. Herramienta gratuita hecha por fans.",
      keywords: [
        "creador de equipos pokemon",
        "completar equipo pokemon",
        "entrenador de equipo pokemon",
        "creador automatico de equipos pokemon",
      ],
      breadcrumbLabel: "Entrenador de equipo",
      headerTitle: "Entrenador de equipo Pokémon",
      headerDesc:
        "Bloquea los Pokémon que ya elegiste y completa el resto con cobertura de tipos y roles equilibrados.",
      faqs: [
        {
          q: "¿Cómo uso este equipo en Pokémon Showdown?",
          a: "Toca Copy Sets bajo el equipo (el botón con la insignia Showdown) para copiar el equipo en el formato de texto de Showdown. Luego abre play.pokemonshowdown.com/teambuilder, elige Import/Export y pega el texto — cada set se carga con sus movimientos, habilidad, objeto, naturaleza y EVs, listo para combatir o ajustar.",
        },
      ],
    },

    teamChallenge: {
      metaTitle: "Desafío de equipo Pokémon — Genera un equipo y desafía a un amigo",
      metaDescription:
        "Genera un equipo de 6 Pokémon con semilla, comparte el enlace y desafía a un amigo — el BST total decide el ganador, luego exporta cualquier equipo a Showdown. Herramienta gratuita hecha por fans.",
      keywords: [
        "desafio de equipo pokemon",
        "generador de equipo pokemon aleatorio",
        "equipo pokemon aleatorio",
        "generador de equipos pokemon",
      ],
      breadcrumbLabel: "Desafío de equipo",
      headerTitle: "Desafío de equipo Pokémon",
      headerDesc:
        "Genera un equipo de desafío de 6 Pokémon, comparte el enlace y deja que el BST total decida un ganador contra tus amigos.",
      faqs: [
        {
          q: "¿Cómo uso este equipo en Pokémon Showdown?",
          a: "Toca Copy Sets bajo el equipo (el botón con la insignia Showdown) para copiar el equipo en el formato de texto de Showdown. Luego abre play.pokemonshowdown.com/teambuilder, elige Import/Export y pega el texto — cada set se carga con sus movimientos, habilidad, objeto, naturaleza y EVs, listo para combatir o ajustar.",
        },
      ],
    },

    wheel: {
      metaTitle: "Ruleta del generador de Pokémon aleatorio | PokeRoll",
      metaDescription:
        "Gira la ruleta para obtener un Pokémon aleatorio — un divertido selector de azar en toda la Pokédex. Mira dónde cae y copia tu elección a Showdown. Herramienta gratuita hecha por fans.",
      keywords: [
        "ruleta generador de pokemon aleatorio",
        "generador de ruleta pokemon",
        "ruleta pokemon aleatoria",
        "ruleta para elegir pokemon",
      ],
      breadcrumbLabel: "Gira la ruleta",
      headerTitle: "Generador de ruleta Pokémon",
      headerDesc:
        "Gira la ruleta para obtener un Pokémon aleatorio — un divertido selector de azar en toda la Pokédex — copia tu elección a Showdown.",
      guideTitle: "Cómo jugar",
      steps: [
        {
          n: "1",
          t: "Elige tus jugadores",
          d: "Elige de 2 a 6 jugadores — cada uno gira la ruleta por turnos.",
        },
        {
          n: "2",
          t: "Gira y mira dónde cae",
          d: "Cada giro cae en un Pokémon y se apila en los resultados de la ronda de abajo.",
        },
        {
          n: "3",
          t: "Combate y comparte",
          d: "El BST más alto gana la ronda — comparte el resultado para desafiar a tus amigos.",
        },
      ],
    },

    fusion: {
      metaTitle: "Generador de fusiones Pokémon | PokeRoll",
      metaDescription:
        "Fusiona dos Pokémon aleatorios en un híbrido totalmente nuevo con nombre, tipo y estadísticas combinados — genera de nuevo para una pareja más extraña y copia la fusión a Showdown.",
      keywords: [
        "generador de fusiones pokemon",
        "generador de fusion pokemon aleatoria",
        "creador de fusiones pokemon",
        "creador de fusion pokemon",
      ],
      breadcrumbLabel: "Herramienta de fusión",
      headerTitle: "Generador de fusiones Pokémon",
      headerDesc:
        "Fusiona dos Pokémon aleatorios en un híbrido totalmente nuevo con nombre, tipo y estadísticas combinados — luego copia la fusión a Showdown.",
      faqs: [
        {
          q: "¿Cómo funciona el generador de fusiones?",
          a: "Cada tirada elige dos Pokémon aleatorios y los fusiona en un solo híbrido — un nombre mezclado más tipos y estadísticas combinados de ambos padres.",
        },
        {
          q: "¿Puedo compartir o conservar una fusión?",
          a: "Sí. El botón Compartir copia un enlace que reproduce exactamente la misma fusión, y Descargar guarda la carta de la fusión como imagen.",
        },
        {
          q: "¿Es esta una herramienta oficial de Pokémon?",
          a: "No — PokeRoll es un proyecto hecho por fans. Los datos de Pokémon provienen de PokéAPI; los resultados de fusión se generan por diversión y no son diseños oficiales.",
        },
      ],
    },
  },
};
