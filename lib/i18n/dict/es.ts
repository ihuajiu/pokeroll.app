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
  },
};
