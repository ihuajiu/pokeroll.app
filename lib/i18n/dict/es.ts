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
      guide: {
        introTitle: "¿Por qué generar un Pokémon al azar?",
        intro:
          "Una tirada al azar es la forma más rápida de salir del pensamiento de «los mismos seis favoritos». Un toque te entrega una especie que no elegiste — con estadísticas, tipos e ilustración — y de pronto estás teorizando un moveset para un Pokémon que jamás habrías elegido por tu cuenta. Úsalo como pick de draft, consigna de dibujo, tabla de encuentros de Nuzlocke o el primer slot de un equipo completamente nuevo.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Inicial de desafío",
            d: "Genera una vez y fija el resultado como el inicial de tu próxima partida — sea lo que sea. Luego construye la aventura alrededor de él.",
          },
          {
            t: "Draft y duelo",
            d: "Túrnate para generar con un amigo — cada quien se queda con lo que le sale, seis tiradas cada uno, y luego combatan los dos equipos en Showdown.",
          },
          {
            t: "Consigna de arte y escritura",
            d: "Usa la tirada como brief creativo: dibuja el Pokémon en tu estilo, o escribe al entrenador que lo llevaría.",
          },
          {
            t: "Semilla de equipo",
            d: "¿Te gustó lo que salió? Toca Add to Team y genera de nuevo — seis toques después tienes un equipo que se eligió solo.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Lo aleatorio funciona mejor con una regla adjunta. ¿Solo Kanto? Abre los filtros y fija la generación. ¿Sin legendarios? Excluye la categoría primero. ¿Un solo tipo para una partida temática? Fíjalo antes del primer toque — los filtros son el reglamento, la tirada son los dados.",
          "¿Juegas con otros? Acuerden las reglas en voz alta antes de que alguien genere: cuántas regeneraciones tiene cada jugador (una es un buen estándar), si las formas alternas cuentan y qué pasa con un duplicado.",
          "La gracia es comprometerse con lo que te toca — una tirada que puedes deshacer infinitamente es solo navegar con pasos extra.",
        ],
        sampleTitle: "Una tirada de ejemplo",
        sample:
          "Digamos que los dados te entregan Aromatisse — un Hada puro con 101 de PS y 29 de Velocidad que jamás pondrías en un equipo serio. Ahora la pregunta interesante: ¿ancla de Trick Room? ¿soporte de Aromatherapy? De pronto estás leyendo una página de movesets de un Pokémon que ignoraste por una década. De eso se trata la tirada.",
        linksTitle: "¿Quieres un grupo más acotado?",
        linksTextBefore: "Genera una sola porción de la Pokédex — prueba el",
        links: [
          { label: "generador de Gen 1", href: "/gen/1" },
          { label: "generador de tipo Dragón", href: "/type/dragon" },
          { label: "generador de Legendarios", href: "/legendary" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— mismos dados, estanque más pequeño.",
      },
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
      guide: {
        introTitle: "¿Por qué generar Pokémon de tipo {type}?",
        intro:
          "El grupo de tipo {type} abarca desde los clásicos del primer día hasta los lanzamientos más recientes — y esta página te entrega uno al azar, con estadísticas, habilidad e ilustración incluidas. Un toque, un {type}, sin recorrer la dex.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Partida mono-{type}",
            d: "Genera uno y ancla tu desafío mono-{type} — el primer slot ya está decidido, faltan cinco.",
          },
          {
            t: "Estudio de tipo",
            d: "Genera a lo largo del grupo y anota los patrones de estadísticas — los de tipo {type} comparten una filosofía de diseño que vale la pena aprender.",
          },
          {
            t: "Restricción de draft",
            d: "Todos draftean solo del grupo de {type} — mismo tipo, equipos completamente distintos.",
          },
          {
            t: "Consigna de arte",
            d: "Dibuja la tirada de tipo {type} de hoy — los bocetos diarios son más fáciles cuando los dados eligen el tema.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Una partida mono-{type} vive y muere por sus debilidades compartidas — revisa qué resiste y qué teme el tipo {type} antes de comprometerte.",
          "«La primera tirada cuenta» es la regla más limpia; una regeneración anunciada por sesión es la indulgente. Elige antes de tocar.",
          "Los doble tipo cuentan: si lleva {type}, está en el grupo — los híbridos son la forma en que las partidas mono-tipo sobreviven.",
        ],
        sampleTitle: "Una tirada de ejemplo",
        sample:
          "Un toque puede entregarte un veterano de tipo {type} que has entrenado una docena de veces — o un {type} que literalmente jamás usaste, y ese es el interesante. El grupo decide cuál.",
        linksTitle: "¿Más dados, más temas?",
        linksTextBefore: "Prueba el",
        links: [
          { label: "generador de tipos", href: "/type" },
          { label: "generador de equipos aleatorios", href: "/team/random" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— y vuelve cuando el tema pida {type} de nuevo.",
      },
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
      guide: {
        introTitle: "¿Por qué generar Pokémon de la {genLabel}?",
        intro:
          "La {genLabel} es su propia era — su propia dex, su propio lenguaje de diseño, su propia nostalgia. Esta página genera solo dentro de la {genLabel}: cada toque es un reencuentro con esa generación, desde sus mascotas hasta su relleno de ruta más olvidado.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Partida de nostalgia",
            d: "Genera uno y ancla una rejugada solo de la {genLabel} — los dados eligen, tú construyes la partida a su alrededor.",
          },
          {
            t: "Quiz de dex",
            d: "Genera y di de memoria el tipo y la línea evolutiva del Pokémon antes de mirar la carta.",
          },
          {
            t: "Draft mono-gen",
            d: "Cada jugador draftea solo de la {genLabel} — una generación, seis picks, discusiones infinitas sobre su meta.",
          },
          {
            t: "Debate de eras",
            d: "Genera cinco y puntúalos — ¿es la {genLabel} en secreto la mejor generación? Los dados aportan la evidencia.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Comprométete con la era: en una partida solo de la {genLabel}, cada slot debe salir de esta dex — ahí es donde vive el desafío.",
          "La primera tirada cuenta; el encanto de una sola generación es aceptar a sus raritos junto a sus estrellas.",
          "Las formas de generaciones posteriores no cuentan salvo que tus reglas caseras lo digan — decídelo antes de la partida, no después de la tirada.",
        ],
        sampleTitle: "Una tirada de ejemplo",
        sample:
          "Un toque y estás mirando a un habitual de la {genLabel} que habías olvidado por completo — su grito, su ruta, el NPC que lo usó contra ti. Las generaciones no son solo listas; son recuerdos con estadísticas.",
        linksTitle: "¿Más formas de volver?",
        linksTextBefore: "Explora la",
        links: [
          { label: "región de {region}", href: "/by/{regionSlug}" },
          { label: "generador de tipos", href: "/type" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— o ve totalmente al azar por las nueve generaciones.",
      },
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
      guide: {
        introTitle: "¿Por qué generar Pokémon de {region}?",
        intro:
          "{region} es más que un mapa — es la dex de Pokémon {game}, con sus propios iniciales, leyendas y habituales de ruta. Esta página genera solo dentro de {region}: un toque, un local, directo de los juegos que lo crearon.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Partida de regreso",
            d: "Genera uno y ancla una rejugada solo de {region} — construye el equipo que la dex de la región permite.",
          },
          {
            t: "Quiz de dex local",
            d: "Genera y ubica al Pokémon en el mapa: ¿qué ruta, qué gimnasio, qué versión?",
          },
          {
            t: "Draft regional",
            d: "Cada jugador draftea seis solo de {region} — una región, equipos muy distintos.",
          },
          {
            t: "Debate de versiones",
            d: "Genera cinco y júzgalos — ¿{region} sigue a la altura, o es la nostalgia la que habla?",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Las partidas regionales funcionan porque el grupo es cerrado: si no está en la dex de {region}, no está en el equipo.",
          "La primera tirada cuenta — la región da, el equipo se adapta. Una regeneración anunciada por sesión si tu grupo es blando.",
          "Decide pronto si las incorporaciones del post-juego y del DLC cuentan como locales de {region} — las reglas caseras evitan discusiones de ruta.",
        ],
        sampleTitle: "Una tirada de ejemplo",
        sample:
          "Un toque y aparece una cara de Pokémon {game} en la que no pensabas desde hace años — el tema de la ruta empieza a sonar en tu cabeza al instante. Las regiones no son grupos; son lugares.",
        linksTitle: "¿Sigues explorando?",
        linksTextBefore: "Prueba la",
        links: [
          { label: "Pokédex de la {genLabel}", href: "/gen/{gen}" },
          { label: "generador de tipos", href: "/type" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— o ve totalmente al azar por todas las regiones.",
      },
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
        guide: {
          introTitle: "¿Por qué generar un tipo al azar?",
          intro:
            "Dieciocho tipos, un toque. Un tipo al azar es la forma más rápida de elegir un tema: partidas mono-tipo, restricciones de draft, categorías de quiz — los dados eligen, tú te comprometes.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Decisor mono-tipo",
              d: "Genera una vez y ese es el tipo de tu próxima partida mono-tipo — nada de cabildear una regeneración porque querías Dragón.",
            },
            {
              t: "Restricción de draft",
              d: "Cada jugador genera un tipo antes de draftear — todo tu equipo debe llevarlo.",
            },
            {
              t: "Desafío temático",
              d: "Genera un tipo y luego construye un equipo que cubra sus debilidades sin compartirlas.",
            },
            {
              t: "Aprende la tabla",
              d: "Ponte a prueba con las resistencias del tipo generado antes de consultar — la tabla se graba más rápido cuando es un juego.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "La tirada de tipo solo funciona como mecanismo de compromiso: decide de antemano que el primer resultado cuenta. Un tipo que puedes regenerar es solo una sugerencia.",
            "¿Juegas con otros? Todos generan a la vista, los duplicados tienen una regeneración, y ya está — la restricción es la diversión.",
            "Combina la tirada con los filtros de otros generadores: fija el tipo allí y los dados se mantienen dentro de tu tema toda la sesión.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "La ruleta dice Roca. De pronto estás planificando alrededor de una debilidad compartida a Agua y Tierra, mirando usuarios de Sand Stream y recordando que Roca tiene cuatro resistencias propias. Un toque, y la partida de esta noche tiene personalidad.",
          linksTitle: "¿Quieres profundizar?",
          linksTextBefore: "Explora un tipo concreto como",
          links: [
            { label: "Dragón", href: "/type/dragon" },
            { label: "Fuego", href: "/type/fire" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— o lleva el resultado directo al generador de equipos.",
        },
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
        guide: {
          introTitle: "¿Por qué generar una habilidad al azar?",
          intro:
            "Las habilidades deciden cómo juega realmente un Pokémon — y la mayoría solo conocemos las veinte famosas. Genera una al azar, conoce a un Pokémon que la lleva y descubre lo que la larga cola de la lista de habilidades puede hacer.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Consigna para construir",
              d: "Genera una habilidad y esboza un set que la abuse — cuanto más rara la habilidad, mejor el ejercicio.",
            },
            {
              t: "Restricción de draft",
              d: "Cada jugador genera una habilidad y debe draftear un Pokémon que la tenga — escasez instantánea, drama instantáneo.",
            },
            {
              t: "Aprende la lista",
              d: "Lee el efecto de la habilidad generada antes de espiar — un quiz silencioso que rinde en los combates.",
            },
            {
              t: "Pegamento de equipo",
              d: "¿Algo le falta a tu equipo? Genera habilidades hasta que una resuelva tu problema, y luego anota qué Pokémon la llevan.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "Decide si las habilidades ocultas cuentan antes de empezar — son las tiradas más raras y las discusiones más ruidosas.",
            "Una tirada, un compromiso es el formato sano: construye alrededor de lo que te toca en vez de pescar las buenas.",
            "Si una habilidad está limitada a una generación, tómala como una lección de historia y genera el contexto, no solo el efecto.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "Generas Levitate y la carta muestra un Pokémon junto al que pasaste cien veces — salvo que ahora es el pivote inmune a Tierra que tu equipo necesitaba. Esa es la lotería de habilidades: la respuesta siempre estuvo ahí, solo que nunca hiciste la pregunta.",
          linksTitle: "¿Sigues construyendo?",
          linksTextBefore: "Combínala con el",
          links: [
            { label: "generador de movimientos", href: "/move" },
            { label: "generador de estadísticas", href: "/bst" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— habilidad, movimientos y números son tres caras del mismo set.",
        },
      },
      move: {
        title: "Generador aleatorio de movimientos de Pokémon | PokeRoll",
        description:
          "Descubre un movimiento de Pokémon al azar y un Pokémon que puede aprenderlo: consulta su potencia, precisión y tipo, y luego copia el set en Showdown. Herramienta hecha por fans.",
        keywords: [
          "generador de movimientos pokemon aleatorio",
          "generador de movimientos pokemon",
        ],
        guide: {
          introTitle: "¿Por qué generar un movimiento al azar?",
          intro:
            "Cientos de movimientos, y los combates se ganan con los raros. Genera un movimiento al azar, mira un Pokémon que lo aprende y haz la única pregunta que importa: ¿podría funcionar de verdad?",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Ruleta de movesets",
              d: "Genera cuatro movimientos y arma un set con ellos — con Splash y todo. Los mejores jugadores hacen que cualquier cosa parezca jugable.",
            },
            {
              t: "Restricción de draft",
              d: "Genera un movimiento y luego draftea un equipo donde alguien tenga que llevarlo — los movimientos de soporte tienen su momento por una vez.",
            },
            {
              t: "Aprende la biblioteca",
              d: "Potencia, precisión, efecto — lee el movimiento generado antes de consultar. El conocimiento de movimientos es Elo gratis.",
            },
            {
              t: "Consigna de combate",
              d: "Genera un movimiento y diseña la situación en la que te gana la partida — theorycrafting con semilla.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "En la ruleta de movesets no hay cambios: cuatro tiradas, un set, y los movimientos de estado cuentan. La restricción es todo el juego.",
            "Acuerden si los movimientos Z, los movimientos Max y los movimientos insignia están en el grupo antes de que alguien genere — las reglas caseras evitan pucheros.",
            "Un movimiento solo es tan bueno como su usuario, así que juzga la pareja, no el movimiento a solas.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "Los dados te entregan Belch — un movimiento Veneno de 120 de potencia que solo funciona tras comer una baya. ¿Inútil? Entonces notas quién lo aprende, y de pronto hay un set de jugo de bayas viviendo gratis en tu cabeza toda la semana.",
          linksTitle: "¿Completas el set?",
          linksTextBefore: "Complétalo con el",
          links: [
            { label: "generador de habilidades", href: "/ability" },
            { label: "generador de estadísticas", href: "/bst" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— y luego lleva todo el conjunto a Showdown.",
        },
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
        guide: {
          introTitle: "¿Por qué generar un BST al azar?",
          intro:
            "El total de estadísticas base es la abreviatura que usa todo jugador y en la que nadie se pone de acuerdo. Genera un número, conoce al Pokémon que hay detrás y aprende cómo se ve de verdad un 480 o un 600 en la naturaleza.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Adivina al Pokémon",
              d: "Mira primero el número y nombra todos los Pokémon que creas que tienen ese BST — luego comprueba lo equivocado que estabas.",
            },
            {
              t: "Draft por números",
              d: "Cada jugador genera un BST y debe draftear un Pokémon con exactamente ese total — la escasez crea estrellas extrañas.",
            },
            {
              t: "Desafío de tope",
              d: "Arma un equipo donde cada miembro quede por debajo de un tope generado — un máximo de 500 convierte el teambuilding en diseño de verdad.",
            },
            {
              t: "Quiz de estadísticas",
              d: "Adivina cómo se reparten las seis estadísticas antes de la revelación — los min-maxers y los muros se leen muy distinto.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "El BST es un presupuesto, no un ranking: un 480 bien invertido vence a un 540 perezoso, así que juzga la distribución antes que el total.",
            "En los desafíos de tope, fija el tope antes de generar el equipo — generar primero y negociar después es cómo los topes dejan de significar algo.",
            "Las megas, las reversiones primigenias y las formas alternativas tienen totales propios — decide qué formas cuentan antes de que empiece el draft.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "El número es 600. ¿Pseudo-legendario? Esta vez en realidad es un singular — y la distribución es perfectamente pareja en las seis estadísticas, lo que no te dice absolutamente nada de cómo combate. Los números abren la conversación; nunca la cierran.",
          linksTitle: "¿Más juegos de números?",
          linksTextBefore: "Prueba el",
          links: [
            { label: "generador de números de Pokédex", href: "/number" },
            { label: "generador de habilidades", href: "/ability" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— o caza los totales grandes en la página de legendarios.",
        },
      },
      number: {
        title: "Generador aleatorio de números de Pokémon | PokeRoll",
        description:
          "Genera un número de Pokédex al azar del 1 al 1025 y revela qué Pokémon es: mira su carta completa y cópiala en Showdown. Herramienta gratuita hecha por fans.",
        keywords: [
          "generador de numeros pokemon",
          "generador de numeros pokemon aleatorio",
        ],
        guide: {
          introTitle: "¿Por qué generar un número de Pokédex al azar?",
          intro:
            "Un número entre el 1 y el 1025, un Pokémon pegado a él. La tirada de número de la Pokédex es la lotería más pura del sitio — sin filtros, sin temas, solo toda la historia de la franquicia en un solo sorteo.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Ruleta dex",
              d: "Genera un número y ese es tu próximo encuentro, compañero o sujeto de dibujo — lo que diga la dex.",
            },
            {
              t: "Adivina antes de revelar",
              d: "Di el Pokémon solo con el número antes de mirar — la memoria del orden de la dex es una habilidad real.",
            },
            {
              t: "Selector de Nuzlocke",
              d: "Usa el número generado en módulo de la dex local para elegir encuentros con justicia — a los dados no se les soborna.",
            },
            {
              t: "Juego de fiesta",
              d: "El número más alto gana la ronda — el juego más simple del sitio, las discusiones más ruidosas.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "Decide qué significa el número antes de generar: ¿dex nacional, o mapeado a la dex regional de un juego? Juegos distintos, destinos distintos.",
            "Una tirada por decisión es el formato honesto — regenerar hasta dar con un favorito es solo elegir con pasos extra.",
            "Las formas comparten número de dex, así que acuerda cómo manejarlas antes de la tirada, no después.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "#387. Alguien en la mesa grita Turtwig antes de que la carta siquiera cargue — y por una vez tiene razón. Una partida de Sinnoh recién destinada. La dex da.",
          linksTitle: "¿Más juegos de números?",
          linksTextBefore: "Prueba el",
          links: [
            { label: "generador de BST", href: "/bst" },
            { label: "generador de apodos", href: "/nickname" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— números, nombres y estadísticas cuentan historias distintas.",
        },
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
        guide: {
          introTitle: "¿Por qué generar un inicial al azar?",
          intro:
            "El primer compañero marca el tono de toda la partida — y elegirlo tú te lleva cuarenta minutos de hilos en foros. Deja que los dados escojan entre los iniciales de todas las generaciones, de Kanto a Paldea, y empieza la aventura de una vez.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Decisor de inicial",
              d: "Genera una vez y ese es tu compañero para la próxima partida — decisión tomada, la aventura puede empezar.",
            },
            {
              t: "Apertura de Nuzlocke",
              d: "Deja que la tirada elija el inicial y que la suerte de las rutas elija todo lo demás — compromiso total, cero sesgo.",
            },
            {
              t: "Zanjador de debates",
              d: "¿Fuego, Agua o Planta esta vez? Los dados no tienen nostalgia ni favoritos — el árbitro perfecto.",
            },
            {
              t: "Tema de equipo",
              d: "Genera un inicial y arma un equipo que apoye su evolución final — estructura instantánea para un equipo casual.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "El pacto del inicial es sagrado: la primera tirada vale. Vetar el resultado porque querías la rana destruye todo el sentido.",
            "Decide el grupo primero — ¿las nueve generaciones, o solo los juegos que tienes? Un grupo más pequeño sigue siendo una tirada justa.",
            "En las partidas en grupo, todos generan a la vista y los intercambios se permiten una sola vez — ese es todo el meta-juego.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "Los dados dicen Chimchar y tu partida de Sinnoh de pronto tiene personalidad: rápido, ruidoso y ligeramente en llamas. Jamás lo habrías elegido por encima de Piplup — y es exactamente por eso que esta partida será memorable.",
          linksTitle: "¿Sigues con la partida?",
          linksTextBefore: "Genera el resto del equipo en el",
          links: [
            { label: "generador de equipos aleatorios", href: "/team/random" },
            { label: "generador de tipos", href: "/type" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— el inicial ya eligió, ahora el equipo necesita seis.",
        },
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
        guide: {
          introTitle: "¿Por qué adivinar un Pokémon misterioso?",
          intro:
            "Una carta, estadísticas completas, ilustración oficial — y sin nombre. El generador sin nombres es un quiz de bolsillo: todo lo que necesitas para identificar al Pokémon está en la carta, menos la respuesta.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Quiz en solitario",
              d: "Adivina por la ilustración y las estadísticas, luego gira para comprobar — lleva tu racha a lo largo de diez cartas.",
            },
            {
              t: "Grito en grupo",
              d: "Muestra la carta en una llamada, el primer grito correcto se lleva el punto — la velocidad importa más que la precisión.",
            },
            {
              t: "Calentamiento de stream",
              d: "Haz cinco cartas misteriosas antes del contenido real — el chat se alborota al instante, garantizado.",
            },
            {
              t: "Entrenamiento de siluetas",
              d: "Úsalo como calentamiento para el desafío de adivinar con semilla, donde el quiz se pone más difícil y los puntajes se comparten.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "Nada de acechar el botón de girar: una apuesta comprometida por carta, en voz alta si juegan otros. La confianza es el juego.",
            "Las estadísticas valen — un BST de 600 reduce el campo rápido, y saberlo es habilidad, no trampa.",
            "¿Perdiste la cuenta de tu puntaje? Diez cartas, un punto cada una, sin negativos — el formato más limpio.",
          ],
          sampleTitle: "Una carta de ejemplo",
          sample:
            "Mejillas amarillas, tipo Eléctrico, estadísticas diminutas — apuestas con todo el pecho: Pikachu. La carta dice Pachirisu, y ahora toda la sala debate sobre roedores regionales. Diez cartas más, por favor.",
          linksTitle: "¿Quieres un quiz más difícil?",
          linksTextBefore: "Pasa al",
          links: [
            { label: "desafío de las siluetas", href: "/challenge/guess" },
            { label: "generador de apodos", href: "/nickname" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— mismo conocimiento, apuestas más altas.",
        },
      },
      cute: {
        title: "Generador aleatorio de Pokémon adorables | PokeRoll",
        description:
          "Obtén un Pokémon adorable al azar: elecciones suaves, peludas y tiernas de toda la Pokédex. Genera otro o cópialo en Showdown.",
        keywords: [
          "generador de pokemon adorables",
          "generador de pokemon adorables aleatorio",
        ],
        guide: {
          introTitle: "¿Por qué generar un Pokémon adorable?",
          intro:
            "No toda tirada necesita ser competitiva. El generador de adorables saca de los rincones suaves, esponjosos y redonditos de la Pokédex — los Pokémon que de verdad querrías como mascota, de un toque a la vez.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Tirada de consuelo",
              d: "Un toque, un Pokémon adorable — la mejora de ánimo más barata de internet.",
            },
            {
              t: "Consigna de arte",
              d: "Dibuja al adorable generado en tu estilo — los Pokémon pequeños son la mejor práctica diaria de bocetos.",
            },
            {
              t: "Partida solo-adorables",
              d: "Arma un equipo de partida donde cada miembro deba pasar el test de adorable — sorprendentemente viable, casi todo tipos Normal.",
            },
            {
              t: "Zanja el debate",
              d: "Cada jugador genera una vez y el grupo vota al más adorable — los dados arbitran el argumento más viejo del fandom.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "Lo adorable es subjetivo, pero la tirada es definitiva — nada de regenerar porque crees que en tu casa se es de Jigglypuff.",
            "En las partidas solo-adorables, define el estándar antes de empezar: ¿solo primera etapa? ¿Menos de un metro? ¿Esponjoso? El reglamento importa.",
            "Evolucionar a tu adorable elegido está permitido — querer en lo que se convierte es el desafío avanzado.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "Los dados te entregan un pájaro esférico que chirría, y tu productividad de los próximos diez minutos se esfumó. Ya estás mirando peluches. No había otra forma de que esto terminara.",
          linksTitle: "¿Más buenas vibras?",
          linksTextBefore: "Prueba el",
          links: [
            { label: "generador de singulares", href: "/mythical" },
            { label: "generador de apodos", href: "/nickname" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— raro y adorable es la mejor combinación.",
        },
      },
      mythical: {
        title: "Generador aleatorio de Pokémon singulares | PokeRoll",
        description:
          "Revela un Pokémon singular al azar como Mew, Celebi o Jirachi: rarezas de todas las generaciones, listas para copiar en Showdown. Herramienta hecha por fans.",
        keywords: [
          "generador de pokemon singulares aleatorio",
          "generador de pokemon singulares",
        ],
        guide: {
          introTitle: "¿Por qué generar un Pokémon singular?",
          intro:
            "Los singulares son las rarezas solo de evento — Mew, Celebi, Jirachi y sus herederos, los Pokémon que generaciones enteras de jugadores nunca tuvieron. Genera uno y toma prestada un poco de esa rareza.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Draft del equipo soñado",
              d: "Genera seis singulares y arma el equipo de fantasía que jamás podrías montar de forma legítima.",
            },
            {
              t: "Combate hipotético",
              d: "Genera uno, cópialo a Showdown y comprueba si los escurridizos son realmente buenos — algunos lo son, otros son Jirachi.",
            },
            {
              t: "Lista de colección",
              d: "Lleva cuenta de qué singulares te han mostrado los dados — una forma lenta y gratis de conocer el set completo.",
            },
            {
              t: "Ritual de tirada de la suerte",
              d: "Una tirada antes de las sesiones clasificatorias — sacar un singular es un buen augurio, y la superstición es gratis.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "Singular y legendario son clubs distintos — el grupo de singulares es solo de distribuciones de evento, y eso es lo que lo hace especial.",
            "En los drafts soñados, los repetidos exigen una nueva tirada; todo lo demás se queda como salió.",
            "Recuerda que la mayoría de los singulares comparten la misma distribución pareja de 600 — su truco está en sus movimientos y habilidades, no en sus estadísticas.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "Los dados te entregan a Jirachi, concededor de deseos, veterano de exactamente un evento de fin de semana en 2003. Nunca lo atrapaste. Probablemente nunca lo harás. Pero hoy, en esta página, el deseo se cumplió.",
          linksTitle: "¿Más dados raros?",
          linksTextBefore: "Prueba el",
          links: [
            { label: "generador de legendarios", href: "/legendary" },
            { label: "generador de megas", href: "/mega" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— la rareza viene en varios sabores.",
        },
      },
      mega: {
        title: "Generador aleatorio de mega Pokémon | PokeRoll",
        description:
          "Gira una megaevolución o reversión primigenia al azar: mira sus estadísticas mejoradas y su habilidad, y copia el set en Showdown. Herramienta gratuita hecha por fans.",
        keywords: [
          "generador de mega pokemon aleatorio",
          "generador de mega pokemon",
        ],
        guide: {
          introTitle: "¿Por qué generar una megaevolución?",
          intro:
            "Las megaevoluciones y las reversiones primigenias son los hipotéticos más ruidosos de la franquicia — transformaciones temporales con estadísticas mejoradas, habilidades nuevas y diseños que apostaron todo. Genera una y revisita la era en la que cualquier cosa podía evolucionar más.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Meta hipotético",
              d: "Genera una mega y juégala con honestidad: ¿se ganaría un puesto en un equipo moderno?",
            },
            {
              t: "Decisor de draft",
              d: "Cada jugador genera una mega — la tirada decide alrededor de qué as construyes tu equipo.",
            },
            {
              t: "Estudio de diseño",
              d: "Compara la mega con su forma base y detecta qué amplificaron los diseñadores — una lección de diseño gratis.",
            },
            {
              t: "Consigna de combate",
              d: "Copia el set a Showdown y juega el hipotético de verdad — la nostalgia pega más fuerte con 150 de Ataque base.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "Una mega por equipo es la regla clásica por algo — tu tirada es tu as, así que construye alrededor de ella, no a su lado.",
            "Las reversiones primigenias cuentan como megas para el grupo — decídanlo con tu grupo antes de la primera tirada.",
            "Juzga el paquete completo: +100 en estadísticas no significa nada si la habilidad traiciona las fortalezas de la forma base.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "Los dados te entregan a Mega Beedrill — un cañón de cristal Bicho/Veneno con Adaptabilidad y un sueño. Olvidaste que existía. Ahora estás encajando Picadura Letal en tu próximo equipo, que es exactamente para lo que sirve este generador.",
          linksTitle: "¿Más transformaciones?",
          linksTextBefore: "Prueba el",
          links: [
            { label: "generador de legendarios", href: "/legendary" },
            { label: "generador de fusiones", href: "/fusion" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— oficial o improvisada, la mezcla es divertida.",
        },
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
        guide: {
          introTitle: "¿Por qué generar un apodo?",
          intro:
            "Un apodo convierte una especie en un personaje. El generador de apodos empareja un Pokémon al azar con un nombre que merece la pena escribir — para Nuzlockes, partidas y todo archivo de guardado donde el equipo merece algo mejor que 'GARCHOMP'.",
          waysTitle: "Formas de jugar",
          ways: [
            {
              t: "Nombres para Nuzlocke",
              d: "Las reglas dicen que debes poner apodo a todo — deja que la tirada se encargue y el cariño viene gratis.",
            },
            {
              t: "Sabor de partida",
              d: "Renombra todo tu equipo con nombres generados — un archivo de guardado temático se lee como una historia.",
            },
            {
              t: "Juego de fiesta",
              d: "Genera un Pokémon, todos proponen un apodo y gana el más gracioso — el nombre generado es el que hay que batir.",
            },
            {
              t: "Consigna de escritura",
              d: "Un Pokémon más un nombre es un boceto de personaje — escribe al entrenador que lo usaría.",
            },
          ],
          rulesTitle: "Define tus reglas antes de generar",
          rules: [
            "El pacto Nuzlocke: el primer nombre generado es definitivo. El vínculo es el punto, y los vínculos no se curan.",
            "Poner nombres temáticos sube la apuesta — nombres de comida, de músicos, de constelaciones; elige un carril antes de que empiece la partida.",
            "Honra a los caídos: cuando un Pokémon con nombre se debilita, el nombre se retira con él. Ese es todo el corazón del formato.",
          ],
          sampleTitle: "Una tirada de ejemplo",
          sample:
            "Ruta 2, primera captura, un pájaro común — y los dados lo llaman Capitán Miga. Sobrevivirá a tres muertes de equipo, se retirará como leyenda y será recordado más tiempo que la mayoría de los Campeones. Ese es el poder de un buen nombre.",
          linksTitle: "¿Nombres para toda la tripulación?",
          linksTextBefore: "Genera el equipo primero en el",
          links: [
            { label: "generador de equipos aleatorios", href: "/team/random" },
            { label: "generador de números", href: "/number" },
          ],
          linksJoinOr: "o",
          linksTextAfter: "— y luego vuelve y ponles nombre a todos.",
        },
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
      guide: {
        introTitle: "¿Por qué generar un legendario?",
        intro:
          "Este grupo es solo de leyendas — los dioses de la carátula, los errantes, los tríos. Cada tirada cae en un Pokémon que antes requería un evento, una cueva o una cinemática de 40 minutos para conocer.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Equipo soñado",
            d: "Genera seis legendarios y arma el equipo que todo niño de diez años juró que era imbatible.",
          },
          {
            t: "Draft de jefes",
            d: "Cada jugador genera tres — gana el BST combinado más alto, y el derecho a presumir dura toda la semana.",
          },
          {
            t: "Combate hipotético",
            d: "Copia un legendario generado a Showdown y pon a prueba el mito — algunos dioses tienen movesets muy mortales.",
          },
          {
            t: "Tirada de colección",
            d: "Una tirada al día hasta que los dados te hayan mostrado cada legendario — la partida de colección más lenta y barata.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "La primera tirada vale — un legendario que puedes regenerar es solo un Pokémon fuerte, y el misterio es todo el punto.",
          "Legendario y singular son grupos distintos: esta página mantiene el club exclusivo, los singulares viven al lado.",
          "En los drafts, una nueva tirada por jugador, anunciada antes de que caigan los dados — las reglas caseras mantienen honestos a los dioses.",
        ],
        sampleTitle: "Una tirada de ejemplo",
        sample:
          "Un toque: Rayquaza, dios del cielo, la partida se escribe sola. Otro toque: Regigigas, cuyo Inicio Lento hace que el dios pase cinco turnos como espectador. Las leyendas contienen multitudes.",
        linksTitle: "¿Más dados raros?",
        linksTextBefore: "Prueba el",
        links: [
          { label: "generador de singulares", href: "/mythical" },
          { label: "modo de caza shiny", href: "/challenge/shiny" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— rareza al cuadrado.",
      },
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
      guide: {
        introTitle: "¿Por qué generar una aventura?",
        intro:
          "El modo aventura genera una partida completa con un toque: un entrenador, un inicial, un equipo, un desafío y una meta, todo atado a una sola semilla. Es un generador de campañas — los dados escriben la premisa, tú juegas la historia.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Partida de desafío instantánea",
            d: "Genera una aventura y toma sus reglas como vinculantes — el equipo que te entrega es el equipo que la partida permite.",
          },
          {
            t: "Calendario de desafíos",
            d: "Genera una aventura nueva cada semana y haz stream o registra los intentos — mismo formato de semilla, historias comparables.",
          },
          {
            t: "Premisa cooperativa",
            d: "Comparte la semilla con un amigo: aventura idéntica, partidas separadas, carrera hacia la meta.",
          },
          {
            t: "Semilla de historia",
            d: "Usa el entrenador y la meta generados como consignas de fan-fiction o de juego de mesa — los dados son sorprendentemente buenos para ganchos de trama.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Elige la dificultad antes de generar, no después de ver el resultado — elegir Extrema cuando ya conoces el equipo es solo negociar contigo mismo.",
          "Una aventura funciona porque es vinculante: una regeneración por partida, máximo, y solo antes de haber atrapado algo.",
          "Comparte la semilla, no capturas de pantalla — el enlace reproduce la aventura exacta, lo que hace justas las carreras y las comparaciones.",
        ],
        sampleTitle: "Una aventura de ejemplo",
        sample:
          "Una sola semilla podría decretar: una Lass de Hoenn, un Chimchar inicial, un desafío sin objetos y una meta de vencer la liga por debajo del nivel. Jamás habrías montado esa partida por tu cuenta — y es exactamente por eso que la recordarás.",
        linksTitle: "¿Quieres surtir la aventura?",
        linksTextBefore: "Arma la partida con dados del",
        links: [
          { label: "generador de equipos aleatorios", href: "/team/random" },
          { label: "desafío de adivinar", href: "/challenge/guess" },
          { label: "modo de caza shiny", href: "/challenge/shiny" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— toda buena campaña necesita misiones secundarias.",
      },
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
      guide: {
        introTitle: "¿Por qué poner a prueba tu memoria de la Pokédex?",
        intro:
          "El desafío de adivinar es la prueba más pura del conocimiento de la Pokédex: una alineación fija, pistas que se reducen con la dificultad y tu puntaje al final. La misma semilla para todos — así que los puntajes son genuinamente comparables.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Duelo diario",
            d: "Comparte la semilla con un amigo y comparen puntajes — misma alineación, sin excusas.",
          },
          {
            t: "Escalera de dificultad",
            d: "Empieza en Fácil con pistas generosas, luego sube hacia Extrema, donde los sprites están ampliados y las pistas desaparecieron.",
          },
          {
            t: "Maratón de filtros",
            d: "Fija una sola generación o tipo y demuestra que realmente conoces esa porción de la dex — no solo lo famoso.",
          },
          {
            t: "Quiz de fiesta",
            d: "Lee las cartas en voz alta en una llamada y corre a gritar la respuesta — la velocidad cuenta.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Elige cantidad y dificultad antes de la primera revelación — doce en Fácil y seis en Extrema son exámenes completamente distintos.",
          "Sin cambios de filtros a mitad de ronda: una ronda mono-Agua y una ronda de toda la dex miden conocimientos distintos.",
          "Un intento por semilla es el formato honesto — la semilla mantiene la alineación fija, así que un segundo intento es solo memorización.",
        ],
        sampleTitle: "Una ronda de ejemplo",
        sample:
          "Una ronda en Difícil hace zoom a una espiral de caparazón gris azulado. ¿Cloyster? ¿Omastar? Te comprometes con Kabutops con total confianza, y la revelación dice... Shellder. En algún lugar un rival se está riendo — y tu semilla de revancha está a un toque.",
        linksTitle: "¿Quieres más exámenes?",
        linksTextBefore: "Prueba el",
        links: [
          { label: "modo de carta misteriosa", href: "/no-names" },
          { label: "el modo de caza shiny", href: "/challenge/shiny" },
          { label: "el modo aventura", href: "/adventure" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— dados distintos, los mismos derechos de fanfarronear.",
      },
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
      guide: {
        introTitle: "¿Por qué cazar un shiny?",
        intro:
          "La caza shiny simula la apuesta más antigua de Pokémon: encuentro tras encuentro, esperando el destello. Elige una dificultad, haz clic por el grupo salvaje y mira qué tan profunda va la caza — las reglas de compasión la mantienen honesta pero nunca fácil.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Prueba de suerte",
            d: "Empieza una caza y mira cuántos encuentros toma tu shiny — por debajo de las probabilidades y estás caliente, por encima y el grupo te debe una.",
          },
          {
            t: "Carrera con un amigo",
            d: "Comparte la semilla de la caza y corran hacia la revelación — gana quien use menos encuentros, y el enlace lo demuestra.",
          },
          {
            t: "Entrenamiento de paciencia",
            d: "Usa la dificultad Extrema como meditación: cientos de clics, un destello, sin atajos.",
          },
          {
            t: "Segmento de stream",
            d: "Una carrera shiny en vivo es contenido listo para usar — el chat elige la dificultad, tú pones la desesperación.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "La dificultad es todo el juego aquí: Fácil garantiza una tirada de compasión para que una primera caza siempre termine; los niveles más altos te hacen ganártelo.",
          "Decide qué cuenta antes de empezar — ¿el primer shiny termina la caza, o resistes por una especie específica?",
          "Comparte el enlace de la revelación, no una captura: abre directo en la carta encontrada, así que nadie puede fingir un shiny al primer encuentro.",
        ],
        sampleTitle: "Una caza de ejemplo",
        sample:
          "Encuentro 1: Pidgey. Encuentro 47: Pidgey. Encuentro 213: Pidgey. Empiezas a cuestionar las probabilidades, la semilla, tus decisiones de vida — y entonces el encuentro 214 destella dorado. Todo cazador de verdad sabe exactamente cómo se siente.",
        linksTitle: "¿Quieres mantener la racha?",
        linksTextBefore: "Prueba el",
        links: [
          { label: "desafío de adivinar", href: "/challenge/guess" },
          { label: "modo aventura", href: "/adventure" },
          { label: "generador de Pokémon aleatorio", href: "/random-pokemon-generator" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— los dados nunca duermen.",
      },
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
      guide: {
        introTitle: "¿Por qué guardar un equipo?",
        intro:
          "Tu equipo es donde los resultados aleatorios dejan de ser desechables. Cada carta en la que tocas Add to Team aterriza aquí — desde cualquier generador del sitio — así que un equipo se va armando solo con tiradas que de verdad te gustaron.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Colección de lo mejor",
            d: "Sigue generando en el generador de equipos y añade solo las tiradas que valen la pena — esta página se vuelve tu salón de la fama.",
          },
          {
            t: "Curaduría de draft",
            d: "Genera más de seis, quédate con los mejores seis aquí y corta el resto — tu propio día de draft personal.",
          },
          {
            t: "Preparación para Showdown",
            d: "Cuando los seis se sientan bien, exporta todo el equipo con Copy Sets y pégalo directo en el teambuilder de Showdown.",
          },
          {
            t: "Comparte el equipo",
            d: "El enlace para compartir lleva tu alineación exacta — mándalo a un amigo y verá los mismos seis, con ilustración y todo.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Un equipo guardado merece un tema. No tiene que ser competitivo — «solo Pokémon que usaría en una partida» es un tema. También «uno por generación», o «nada por encima de 500 de BST».",
          "Trata las eliminaciones como definitivas. Si te descubres cambiando el mismo slot cinco veces, ese slot quiere un rol distinto, no un Pokémon distinto.",
          "Seis es el límite clásico por una razón: lo bastante pequeño para que cada miembro tenga que justificar su lugar.",
        ],
        sampleTitle: "Un equipo de ejemplo",
        sample:
          "Un equipo guardado típico podría empezar como «los seis que cargaron mi partida de Emerald» — Swampert, Gardevoir, Aggron, Manectric, Altaria y una mula de MO que se ganó su retiro. La página no juzga; solo recuerda.",
        linksTitle: "¿Quieres sangre nueva?",
        linksTextBefore: "Genera nuevos candidatos en el",
        links: [
          { label: "generador de equipos aleatorios", href: "/team/random" },
          { label: "Team Coach", href: "/team/coach" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— luego añade los que valgan la pena aquí.",
      },
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
      guide: {
        introTitle: "¿Por qué generar un equipo al azar?",
        intro:
          "Un equipo aleatorio elimina la parálisis por decisión de armar equipos. En vez de recorrer la Pokédex por una hora, recibes seis slots ya entregados — y ahí empieza la parte interesante: hacer que funcionen juntos. Usa el resultado como partida de desafío, draft amistoso, equipo de práctica o pura inspiración para tu próxima aventura.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Partida de desafío",
            d: "Comprométete con los seis que te salgan en tu próxima partida — sin regeneraciones. Construye alrededor de lo que te toca, con la superposición de tipos incómoda incluida.",
          },
          {
            t: "Draft con amigos",
            d: "Comparte el enlace de la página — la URL lleva el equipo exacto, así que todos parten de los mismos seis. Genera tu propia respuesta, luego combatan y comparen.",
          },
          {
            t: "Práctica en Showdown",
            d: "Copy Sets te da sets completos con movimientos, objetos y EVs. Pégalos en el teambuilder de Showdown y sube escalera con un equipo que no sobrepensaste.",
          },
          {
            t: "Construcción temática",
            d: "Fija un tipo, generación o categoría en los filtros y genera dentro de una restricción propia — un equipo mono-Agua, una reunión de Gen 3, una partida de puros Iniciales.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Un equipo aleatorio se siente mejor cuando las reglas vienen primero. ¿Legendarios permitidos? Si no, abre los filtros y excluye la categoría antes de tocar el botón de generar. ¿Partida mono-tipo? Fija el tipo. ¿Solo los juegos con los que creciste? Fija la generación. Los filtros son tu reglamento — configúralos una vez y luego vive con lo que digan los dados.",
          "Para juego casual, acepta una superposición incómoda como parte del desafío — tres Pokémon compartiendo una debilidad es un rompecabezas, no un bug. Para un draft, acuerda los baneos con tu grupo antes de que alguien genere. Para una partida de historia, date un veto cuando una especie simplemente no pueda atraparse en tu juego.",
          "El punto es un equipo que de verdad jugarías — no regenerar hasta que se vea perfecto.",
        ],
        sampleTitle: "Una tirada de ejemplo",
        sample:
          "Un toque podría entregarte Gengar, Donphan, Togekiss, Ferrothorn, Volcarona y Pelipper — un equipo perfectamente usable, salvo que tres de ellos caen ante Roca. Esa debilidad compartida es el desafío: ¿la parchas con objetos y movimientos, o te apoyas y superas en velocidad a todo? La tirada te da una restricción; lo que construyes alrededor es el juego.",
        linksTitle: "¿Quieres un grupo más acotado?",
        linksTextBefore: "Genera dentro de una sola porción de la Pokédex — prueba el",
        links: [
          { label: "generador de Gen 1", href: "/gen/1" },
          { label: "generador de tipo Dragón", href: "/type/dragon" },
          { label: "generador de Legendarios", href: "/legendary" },
        ],
        linksJoinOr: "o",
        linksTextAfter:
          "— luego vuelve y genera un equipo completo dentro de tu restricción favorita.",
      },
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
      guide: {
        introTitle: "¿Por qué usar un entrenador de equipo?",
        intro:
          "Team Coach es para ese momento en que tienes cuatro Pokémon que amas y ni idea de qué va en los últimos dos slots. Bloquea tus elecciones y él completa el resto con cobertura de tipos y roles equilibrados — no solo más de lo que ya tienes.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Termina un draft",
            d: "¿Ya fijaste tus favoritos? Deja que el entrenador complete los seis con la cobertura que te falta — luego regenera solo los slots que no te gusten.",
          },
          {
            t: "Corrige una debilidad",
            d: "Si tu equipo cae ante un tipo, bloquea los que conservas y genera — el entrenador pesa la cobertura defensiva al elegir.",
          },
          {
            t: "Aprende a armar equipos",
            d: "Observa por qué elige lo que elige: cada sugerencia viene con una razón, lo que es discretamente una lección de teambuilding.",
          },
          {
            t: "Importa y pule",
            d: "Trae tu equipo guardado o tus favoritos, suelta los eslabones débiles y deja que el entrenador audicione reemplazos.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Bloquea con honestidad. El entrenador solo puede equilibrar alrededor de lo que le das — bloquea los Pokémon a los que de verdad estás comprometido, no toda la lista de deseos.",
          "Lee la razón antes de regenerar. «New coverage» y «tanky pivot» te están diciendo qué le faltaba a tu equipo; si la misma razón sigue apareciendo, ese es el problema real de tu equipo.",
          "Una regeneración por slot es una buena regla de la casa — las regeneraciones infinitas convierten al entrenador en un generador aleatorio lento.",
        ],
        sampleTitle: "Una corrección de ejemplo",
        sample:
          "Bloquea Garchomp, Rotom-Wash y Corviknight y el entrenador podría responder con un tipo Fuego para el enfrentamiento contra Acero, un inmune a Tierra para la debilidad compartida y un comodín «for new coverage» — la conversación exacta que tendría contigo un buen compañero de equipo.",
        linksTitle: "¿Quieres un punto de partida distinto?",
        linksTextBefore: "Genera un equipo nuevo desde",
        links: [
          { label: "el generador de equipos aleatorios", href: "/team/random" },
          { label: "tu equipo guardado", href: "/team" },
          { label: "el Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— luego trae el resultado aquí para terminarlo.",
      },
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
      guide: {
        introTitle: "¿Por qué desafiar a un amigo?",
        intro:
          "Team Challenge convierte una tirada aleatoria en un marcador. La página genera un equipo con semilla, compartes el enlace y todos los que lo abren enfrentan exactamente el mismo equipo — el BST total corona al ganador.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Duelo de amigos",
            d: "Comparte el enlace del desafío en tu grupo de chat — todos generan su propia respuesta al mismo equipo, el BST más alto gana la ronda.",
          },
          {
            t: "Segmento de stream",
            d: "Genera un equipo de desafío en vivo y deja que el chat intente vencerlo — el enlace mantiene a todos honestos porque el equipo no puede cambiar.",
          },
          {
            t: "Referencia en solitario",
            d: "Supera tus propias tiradas: mantén fijo el equipo de desafío y regenera tu lado hasta superar su BST con un equipo que de verdad usarías.",
          },
          {
            t: "Decisor de noche de draft",
            d: "Usa una ronda de desafío para decidir quién elige primero — sin discusiones, los números están en la página.",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Decide el formato antes de compartir: ¿una tirada cada uno, o al mejor de tres? La semilla significa que el desafío en sí es fijo — la única variable es lo que generas contra él.",
          "El BST decide al ganador aquí, pero las reglas de la casa pueden imponerse: solo respuestas mono-tipo, sin legendarios en tu respuesta, o «gana el BST más bajo» para una ronda de caos.",
          "Exporta ambos lados a Showdown después si quieres la respuesta real — el BST es un marcador, no un resultado de combate.",
        ],
        sampleTitle: "Un desafío de ejemplo",
        sample:
          "El desafío genera Blissey, Shedinja, Magikarp, Regidrago, Applin y Salamence — un total monstruoso cargado por tres Pokémon reales y tres bromas. Véncelo con seis de nivel medio y te ganaste el derecho a fanfarronear; pierde contra él y escucharás sobre Magikarp toda la semana.",
        linksTitle: "¿Quieres más formas de competir?",
        linksTextBefore: "Prueba la",
        links: [
          { label: "ruleta", href: "/wheel" },
          { label: "el desafío de adivinar", href: "/challenge/guess" },
          { label: "el generador de equipos aleatorios", href: "/team/random" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— mismos dados, marcador distinto.",
      },
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
      guide: {
        introTitle: "¿Por qué girar una ruleta?",
        intro:
          "La ruleta es el selector de azar más honesto que existe: todos ven el mismo giro caer en la misma porción. Túrnense, apilen los resultados y el BST más alto gana la ronda — sin preparación, sin discutir con los dados.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "PK de fiesta",
            d: "De dos a seis jugadores, un giro cada uno — el BST más alto gana la ronda. El perdedor elige la próxima apuesta.",
          },
          {
            t: "Inicial de draft",
            d: "Gira seis veces y anota cada resultado — ese es tu equipo para una partida de desafío, con repetidos y todo.",
          },
          {
            t: "Tomador de decisiones",
            d: "¿No eliges un tipo para tu mono-run o un juego para la noche? Pon las opciones en la ruleta y deja que caiga.",
          },
          {
            t: "Contenido de stream",
            d: "Una ruleta girando se ve genial en cámara — gira para tu próximo encuentro, tu próximo compañero o tu próximo castigo.",
          },
        ],
        rulesTitle: "Define tus reglas antes de girar",
        rules: [
          "Acuerda la cantidad antes del primer giro: ¿un giro cada uno, o girar hasta que te guste? Las ruletas son más divertidas cuando nadie puede cabildear por un re-giro.",
          "En rondas de PK, los empates son parte del encanto — decidan de antemano si los empatados giran un desempate o comparten la corona.",
          "Comparte el enlace de la ronda al terminar: la URL lleva los resultados, así que el derecho a fanfarronear del ganador es verificable.",
        ],
        sampleTitle: "Una ronda de ejemplo",
        sample:
          "A seis giros, el tablero dice: un pseudo-legendario de 670 de BST, dos pájaros de ruta inicial, un Magikarp — y la cara de suficiencia de tu amigo cuando su último giro cae en Arceus. La ruleta da, y el enlace de la ronda lo demuestra.",
        linksTitle: "¿Quieres estructura alrededor de los giros?",
        linksTextBefore: "Genera un equipo completo en el",
        links: [
          { label: "generador de equipos aleatorios", href: "/team/random" },
          { label: "generador de Pokémon aleatorio", href: "/random-pokemon-generator" },
          { label: "generador de Legendarios", href: "/legendary" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— luego vuelve a girar para el desempate.",
      },
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
      guide: {
        introTitle: "¿Por qué fusionar Pokémon?",
        intro:
          "El generador de fusiones responde la pregunta que toda Pokédex termina haciendo: ¿cómo se verían estos dos como uno solo? Cada tirada elige dos especies al azar y mezcla nombre, tipos y estadísticas en un híbrido que no existe en ningún otro lado.",
        waysTitle: "Formas de jugar",
        ways: [
          {
            t: "Consigna de arte",
            d: "Genera una fusión y dibújala — el nombre mezclado y los tipos son un brief de diseño listo para usar.",
          },
          {
            t: "Adivina los padres",
            d: "Muestra la carta de la fusión, oculta el resultado y deja que tus amigos adivinen qué dos Pokémon la formaron.",
          },
          {
            t: "Dex personalizada",
            d: "Lleva una lista de tus fusiones favoritas — después de veinte tiradas tienes el inicio de la Pokédex de tu propia región.",
          },
          {
            t: "Hipótesis de combate",
            d: "Copia el set de la fusión a Showdown y teoriza: ¿este híbrido de verdad se ganaría un slot en el equipo?",
          },
        ],
        rulesTitle: "Define tus reglas antes de generar",
        rules: [
          "Juzga cada fusión por sus propios términos: las mejores son las que de verdad dibujarías o usarías, no las de estadísticas más altas.",
          "Para adivinar los padres, una pista por adivinador mantiene el juego en movimiento — el tipo es la pista gratis clásica.",
          "Regenera libremente hasta que una pareja encienda algo; las fusiones son baratas, la inspiración no.",
        ],
        sampleTitle: "Una fusión de ejemplo",
        sample:
          "Una tirada podría fusionar Gengar con Snorlax en un muro Fantasma/Normal con un nombre que te hará reír por una semana — y luego te descubres genuinamente preguntándote por su reparto de EVs. Ahí es cuando una fusión deja de ser una broma y empieza a ser un diseño.",
        linksTitle: "¿Quieres mejor materia prima?",
        linksTextBefore: "Busca nuevos padres en",
        links: [
          { label: "el generador de Pokémon aleatorio", href: "/random-pokemon-generator" },
          { label: "la ruleta", href: "/wheel" },
          { label: "el generador de equipos aleatorios", href: "/team/random" },
        ],
        linksJoinOr: "o",
        linksTextAfter: "— luego fusiona los que valgan la pena.",
      },
    },
  },
};
