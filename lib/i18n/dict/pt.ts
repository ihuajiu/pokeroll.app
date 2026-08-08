/* ------------------------------------------------------------------ */
/*  Dicionário em português (Brasil) — mesma estrutura do en.ts        */
/*  (fonte tipada)                                                     */
/*                                                                     */
/*  Os valores são as strings visíveis ao usuário. Os placeholders     */
/*  usam {name} e são substituídos com .replace() no ponto de uso      */
/*  (os dicionários precisam ser objetos planos serializáveis para     */
/*  cruzar a fronteira servidor→cliente).                              */
/* ------------------------------------------------------------------ */

export default {
  common: {
    copy: "Copiar",
    copySet: "Copiar set",
    copied: "Copiado!",
    copyShowdownSet: "Copiar set de Showdown",
    showdownSetCopied: "Set de Showdown copiado",
    showdownSetCopiedBang: "Set de Showdown copiado!",
    back: "Voltar",
    rollAdventure: "Sortear aventura",
    viewYourTeam: "Ver sua equipe",
    /** Template: {n} = generation number. */
    genShort: "Gen {n}",
    /** Template: {label} = tool label. */
    toolArtworkAlt: "Ilustração de Pokémon de exemplo de {label}",
    home: "Início",
    randomPokemon: "Pokémon aleatório",
    generateAgain: "Gerar de novo",
    generating: "Gerando…",
    generateAnotherAria: "Gerar outro Pokémon aleatório",
  },

  nav: {
    homeTitle: "Início do PokeRoll",
    menuAria: "Menu",
    /** Template: {count} = number of favorites. */
    favoritesAria: "Favoritos ({count})",
    main: {
      adventure: "Aventura",
      generators: "Geradores",
      team: "Equipe",
      challenges: "Desafios",
      tools: "Ferramentas",
      contact: "Contato",
    },
  },

  footer: {
    tagline:
      "Sorteie um Pokémon aleatório — nomes, tipos, estatísticas e shinies em um toque.",
    contactUs: "Fale conosco",
    onX: "PokeRoll no X",
    xTitle: "@JoeyChou2024 no X",
    onGithub: "PokeRoll no GitHub",
    githubTitle: "ihuajiu/pokeroll.app no GitHub",
    byRegion: "Por região",
    byType: "Por tipo",
    byGeneration: "Por geração",
    disclaimer:
      "Esta é uma ferramenta feita por fãs. Não é afiliada à Nintendo, Game Freak ou The Pokémon Company. Dados de Pokémon fornecidos por",
    pokeApi: "PokéAPI",
    disclaimerLink: "Aviso legal",
    disclaimerTitle: "Aviso legal",
    privacy: "Privacidade",
    privacyTitle: "Política de privacidade",
    terms: "Termos",
    termsTitle: "Termos de uso",
    badges: {
      fazierTitle: "Em destaque no Fazier",
      fazierAlt: "Selo de destaque no Fazier",
      tinyTitle: "Em destaque no TinyLaunch",
      tinyAlt: "Selo do TinyLaunch",
      findlyTitle: "Em destaque no Findly.tools",
      findlyAlt: "Em destaque no Findly.tools",
    },
  },

  tools: {
    groups: {
      adventure: {
        title: "Aventura",
        desc: "Sorteie seu treinador, região, inicial, equipe, desafio e objetivo em um toque.",
      },
      generator: {
        title: "Geradores",
        desc: "Sorteios de Pokémon aleatórios por tipo, habilidade, golpe, estatística, número e mais.",
      },
      challenge: {
        title: "Desafios",
        desc: "Adivinhe, cace ou gire — desafios para compartilhar com seus amigos.",
      },
      tool: {
        title: "Ferramentas",
        desc: "Utilidades práticas criadas em cima dos sorteios aleatórios.",
      },
      team: {
        title: "Equipe",
        desc: "Monte sua equipe ou sorteie uma pronta com seis.",
      },
    },
    items: {
      adventure: {
        label: "Aventura Pokémon",
        desc: "Sorteie uma aventura completa — treinador, inicial, equipe, desafio e objetivo.",
      },
      randomPokemon: {
        label: "Pokémon aleatório",
        desc: "Um Pokémon totalmente aleatório com estatísticas, tipo e sprite.",
      },
      type: {
        label: "Gerador de tipos",
        desc: "Sorteie um tipo aleatório e um Pokémon correspondente.",
      },
      ability: {
        label: "Gerador de habilidades",
        desc: "Sorteie uma habilidade aleatória e veja quem a tem.",
      },
      move: {
        label: "Gerador de golpes",
        desc: "Descubra um golpe aleatório e um de seus usuários.",
      },
      bst: {
        label: "Gerador de BST",
        desc: "Total de estatísticas base aleatório; depois revele o Pokémon.",
      },
      number: {
        label: "Gerador de números",
        desc: "Sorteie um número da Pokédex e revele qual Pokémon é.",
      },
      starter: {
        label: "Gerador de iniciais",
        desc: "Um parceiro aleatório de cada geração.",
      },
      cute: {
        label: "Gerador de fofos",
        desc: "Escolhas meigas, peludas e adoráveis.",
      },
      mythical: {
        label: "Gerador de míticos",
        desc: "Mew, Celebi, Arceus e amigos.",
      },
      legendary: {
        label: "Gerador de lendários",
        desc: "Sorteie apenas Pokémon lendários.",
      },
      mega: {
        label: "Gerador de megas",
        desc: "Megaevoluções e Reversões Primitivas.",
      },
      nickname: {
        label: "Gerador de apelidos",
        desc: "Um Pokémon acompanhado de um apelido divertido e fofo.",
      },
      guess: {
        label: "Adivinhe o Pokémon",
        desc: "Nomes ocultos — adivinhe pela silhueta e revele para conferir.",
      },
      shiny: {
        label: "Caça shiny",
        desc: "Quantos encontros faltam para o seu próximo shiny?",
      },
      mystery: {
        label: "Pokémon misterioso",
        desc: "Um card misterioso — arte visível, nome oculto.",
      },
      wheel: {
        label: "Batalha de roleta",
        desc: "Roleta multijogador — 2 a 6 jogadores giram, vence o maior BST.",
      },
      fusion: {
        label: "Ferramenta de fusão",
        desc: "Funda dois Pokémon em uma nova criatura.",
      },
      randomTeam: {
        label: "Equipe aleatória",
        desc: "Sorteie uma equipe pronta de seis Pokémon aleatórios.",
      },
      teamChallenge: {
        label: "Desafio de equipe",
        desc: "Sorteie uma equipe com seed e desafie um amigo a superá-la.",
      },
      teamCoach: {
        label: "Técnico de equipe",
        desc: "Trave suas escolhas e complete o resto com cobertura inteligente.",
      },
      myTeam: {
        label: "Minha equipe",
        desc: "Reúna favoritos em uma equipe temática.",
      },
    },
    /** Homepage "Jump straight in" cards — keyed by tool id. Several labels
     *  intentionally differ from the catalog labels above. */
    jump: {
      randomPokemon: {
        label: "Gerador aleatório",
        desc: "Invoque um Pokémon aleatório com estatísticas e arte completas.",
      },
      adventure: {
        label: "Modo aventura",
        desc: "Sorteie uma aventura Pokémon completa — treinador, inicial, equipe, desafio e objetivo.",
      },
      randomTeam: {
        label: "Equipe aleatória",
        desc: "Sorteie uma equipe pronta de seis Pokémon aleatórios.",
      },
      fusion: {
        label: "Gerador de fusões",
        desc: "Funda dois Pokémon em uma criatura híbrida.",
      },
      shiny: {
        label: "Caça shiny",
        desc: "Cace a rara forma de cor alternativa.",
      },
      guess: {
        label: "Adivinhe o Pokémon",
        desc: "Nomes ocultos — adivinhe pela silhueta e revele para conferir.",
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
    ability: "Habilidade",
    region: "Região",
    bst: "BST",
    gen: "Gen",
    height: "Altura",
    weight: "Peso",
    heightUnit: "m",
    weightUnit: "kg",
    mystery: "Mistério",
    newRoll: "Novo sorteio",
    rolling: "Sorteando…",
    flipHint: "Toque no card para virar — set de Showdown",
    showdownSet: "Set de Showdown",
    loading: "Carregando…",
    generatingSet: "Gerando set…",
    lock: "Travar — manter ao sortear de novo",
    unlock: "Destravar — permitir novo sorteio",
    addToFavorites: "Adicionar aos favoritos",
    removeFromFavorites: "Remover dos favoritos",
    favLimit: "Máximo de 15 favoritos — remova um para adicionar outro.",
    shareLink: "Compartilhar link",
    linkShared: "Link compartilhado",
    linkCopied: "Link copiado!",
    shared: "Compartilhado!",
    downloadCard: "Baixar card",
    imageSaved: "Imagem salva",
    imageSavedBang: "Imagem salva!",
    closeShowdown: "Fechar set de Showdown",
    backToCard: "Voltar ao card",
  },

  randomGenerator: {
    generation: "Geração",
    region: "Região",
    type: "Tipo",
    legendary: "Lendário",
    starter: "Inicial",
    favorites: "Favoritos",
    all: "Todos",
    any: "Qualquer",
    only: "Somente",
    exclude: "Excluir",
    favoritesTitle: "Pular Pokémon que você marcou como favorito",
    noMatch: "Nenhum Pokémon corresponde a esses filtros — tente ampliá-los.",
    advancedFilters: "Filtros avançados",
    collapseAria: "Recolher filtros avançados",
    collapseTitle: "Recolher filtros",
  },

  variantGenerator: {
    welcome: "Boas-vindas, treinador!",
    /** Template: {kind} = localized kind label. */
    yourRandom: "Seu sorteio de {kind} é…",
    buildTeam: "Montar equipe",
    kinds: {
      type: "tipo",
      ability: "habilidade",
      move: "golpe",
      bst: "total de estatísticas base",
      number: "número da Pokédex",
      starter: "Pokémon inicial",
      shiny: "Pokémon shiny",
      noNames: "Pokémon misterioso",
      cute: "Pokémon fofo",
      mythical: "Pokémon mítico",
      mega: "mega Pokémon",
      nickname: "apelido",
    },
  },

  homeTool: {
    eyebrow: "Gerador de Pokémon aleatório e ferramentas",
    title: "Gerador de",
    titleAccent: "Pokémon aleatório",
    lead: "Sorteie um Pokémon aleatório em um toque — mais de 1.000 espécies com estatísticas e arte completas. Ou sorteie uma equipe Pokémon aleatória, um desafio, até uma aventura Pokémon completa. Grátis, instantâneo e compartilhável.",
    rollPokemon: "Sortear um Pokémon",
    randomGeneratorTitle: "Gerador de Pokémon aleatório",
    stats: {
      species: "Espécies",
      types: "Tipos",
      generations: "Gerações",
    },
    jumpEyebrow: "Comece agora",
    jumpTitle: "Escolha uma ferramenta e comece a jogar",
    jumpDesc: "Os geradores mais populares — um toque, diversão instantânea.",
    explore: "Explorar",
    browseEyebrow: "Matriz de ferramentas",
    browseTitle: "Todas as formas de sortear",
    browseDesc: "O catálogo completo de ferramentas — todas as formas de sortear um Pokémon.",
  },

  homeFacts: {
    title: "PokeRoll em números",
    metricHead: "Métrica",
    valueHead: "Valor",
    noteHead: "Nota",
    facts: [
      { metric: "Espécies de Pokémon", value: "1,000+", note: "Todas as 9 gerações" },
      { metric: "Tipos de Pokémon", value: "18", note: "Todos os tipos filtráveis" },
      { metric: "Gerações", value: "9", note: "Da Gen 1 (Kanto) à Gen 9 (Paldea)" },
      { metric: "Tamanho da equipe aleatória", value: "6", note: "Uma equipe completa pronta para batalhar" },
      { metric: "Chance base de shiny", value: "1 / 4,096", note: "Igual aos jogos modernos" },
    ],
    howToTitle: "Como sortear um Pokémon aleatório em 3 passos",
    step1Pre: "Abra o",
    step1Link: "gerador de Pokémon aleatório",
    step1Post: "— sem cadastro, sem download.",
    step2: "Toque no botão de sortear para obter na hora 1 de mais de 1.000 espécies com nome, tipo, habilidade, estatísticas base e arte.",
    step3: "Vire o card para copiar um set de Pokémon Showdown pronto para usar, ou compartilhe o link com os amigos.",
    quote1:
      "“Isso resulta em uma probabilidade base de shiny de aproximadamente 16/65536, ou 1/4096.”",
    quote1Cite: "Bulbapedia, “Shiny Pokémon”",
    quote2:
      "“Todos os dados de Pokémon que você vai precisar em um só lugar, facilmente acessíveis por uma API REST moderna, gratuita e de código aberto.”",
    quote2CiteSuffix: ", atendendo mais de 50 bilhões de chamadas de API por mês",
  },

  addToTeam: {
    add: "Adicionar à equipe",
    addAria: "Adicionar à equipe",
    inTeam: "✓ Na equipe",
    removeAria: "Remover da equipe",
    /** Template: {count} = current team size. */
    viewTeam: "Ver equipe ({count})",
  },

  faq: {
    heading: "Perguntas frequentes",
  },

  relatedTools: {
    heading: "Ferramentas relacionadas",
  },

  /* ---------------------------------------------------------------- */
  /*  Page-level metadata + copy (app/[locale]/…)                      */
  /*  English values are verbatim from the pre-i18n pages; dynamic     */
  /*  segments use {placeholders} substituted with .replace() chains.  */
  /* ---------------------------------------------------------------- */
  pages: {
    home: {
      metaTitle: "Gerador de Pokémon aleatório — Equipe, tipo e roleta | PokeRoll",
      metaDescription:
        "PokeRoll é um gerador de Pokémon aleatório gratuito com várias ferramentas — monte uma equipe aleatória, encare desafios ou sorteie uma aventura completa, e copie qualquer card para o Showdown.",
      keywords: [
        "gerador de pokemon aleatorio",
        "gerador de pokemon",
        "ferramentas pokemon",
        "gerador de equipe pokemon",
        "aventura pokemon",
      ],
      /** Template: {date} = last-updated ISO date. */
      updatedBy: "Pela equipe do PokeRoll · Última atualização: {date}",
      // FAQ answers interleave text with links: s1/l1/s2/l2/s3 are the
      // segments around up to two links, aText the plain JSON-LD version.
      faq1: {
        q: "Quantos Pokémon este gerador pode sortear?",
        s1: "Ele pode sortear qualquer uma das mais de 1.000 espécies de Pokémon, distribuídas pelas 9 gerações e pelos 18 tipos. Cada card vem com estatísticas, habilidades e arte completas, e os dados vêm da ",
        l1: "PokéAPI",
        s2: " pública.",
        aText:
          "Ele pode sortear qualquer uma das mais de 1.000 espécies de Pokémon, distribuídas pelas 9 gerações e pelos 18 tipos. Cada card vem com estatísticas, habilidades e arte completas, e os dados vêm da PokéAPI pública (pokeapi.co).",
      },
      faq2: {
        q: "Qual é a chance de conseguir um Pokémon shiny?",
        s1: "Nossos sorteios de shiny replicam os jogos modernos: chance base de 1 em 4.096. Essa é a taxa oficial desde a Geração VI — os jogos anteriores usavam 1 em 8.192 — como documentado na ",
        l1: "Bulbapedia",
        s2: ". Tente a sorte no desafio ",
        l2: "Caça shiny",
        s3: ".",
        aText:
          "Nossos sorteios de shiny replicam os jogos modernos: chance base de 1 em 4.096. Essa é a taxa oficial desde a Geração VI — os jogos anteriores usavam 1 em 8.192 — como documentado na Bulbapedia. Tente a sorte no desafio Caça shiny.",
      },
      faq3: {
        q: "Posso gerar uma equipe completa de seis Pokémon de uma vez?",
        s1: "Sim — o ",
        l1: "gerador de equipe aleatória",
        s2: " sorteia uma equipe pronta de 6 Pokémon em um toque, e o ",
        l2: "Técnico de equipe",
        s3: " equilibra os 6 espaços pela cobertura de tipos. Todo set pode ser copiado direto para o Pokémon Showdown.",
        aText:
          "Sim — o gerador de equipe aleatória sorteia uma equipe pronta de 6 Pokémon em um toque, e o Técnico de equipe equilibra os 6 espaços pela cobertura de tipos. Todo set pode ser copiado direto para o Pokémon Showdown.",
      },
      faq4: {
        q: "O PokeRoll é gratuito?",
        s1: "Sim, todas as ferramentas do PokeRoll são totalmente grátis — os mais de 18 geradores, desafios e ferramentas de equipe funcionam na hora no seu navegador, sem cadastro, sem download e sem limite de sorteios.",
      },
      faq5: {
        q: "De onde vêm os dados de Pokémon deste site?",
        s1: "Todos os nomes, tipos, estatísticas, habilidades e sprites vêm da ",
        l1: "PokéAPI",
        s2: ", a base de dados aberta da comunidade Pokémon. Ela cobre mais de 1.000 espécies de 9 gerações, então os sorteios sempre refletem a Pokédex real.",
        aText:
          "Todos os nomes, tipos, estatísticas, habilidades e sprites vêm da PokéAPI (pokeapi.co), a base de dados aberta da comunidade Pokémon. Ela cobre mais de 1.000 espécies de 9 gerações, então os sorteios sempre refletem a Pokédex real.",
      },
      faq6: {
        q: "O PokeRoll é afiliado à Nintendo ou à The Pokémon Company?",
        s1: "Não. O PokeRoll é um projeto independente feito por fãs e não é afiliado, endossado ou patrocinado pela Nintendo, Game Freak ou The Pokémon Company. Veja nosso ",
        l1: "aviso legal",
        s2: " para o comunicado completo.",
        aText:
          "Não. O PokeRoll é um projeto independente feito por fãs e não é afiliado, endossado ou patrocinado pela Nintendo, Game Freak ou The Pokémon Company. Veja nosso aviso legal para o comunicado completo.",
      },
    },

    randomGenerator: {
      metaTitle: "Gerador de Pokémon aleatório | PokeRoll",
      /** Template: {name} = shared Pokémon display name. */
      sharedTitle: "{name} — Gerador de Pokémon aleatório",
      metaDescription:
        "Sorteie um Pokémon aleatório em um toque — nome, tipo, habilidade, estatísticas base e arte incluídos. Vire o card para um set de Showdown pronto para copiar. Ferramenta gratuita feita por fãs.",
      /** Template: {name}; used when the name is ≤16 chars (SEO length window). */
      sharedDescLong:
        "Sorteei {name} no PokeRoll — vire o card para ver o set de Showdown pronto para copiar, ou sorteie um Pokémon aleatório só seu em um toque. Ferramenta gratuita feita por fãs.",
      /** Template: {name}; used for longer names. */
      sharedDescShort:
        "Sorteei {name} no PokeRoll — vire o card para ver o set de Showdown pronto para copiar, ou sorteie um só seu. Ferramenta gratuita feita por fãs.",
      /** Template: {name}. */
      ogSharedTitle: "{name} — Pokémon aleatório",
      /** Template: {name}. */
      ogSharedDesc: "Sorteei {name} no PokeRoll. O que você vai tirar?",
      keywords: [
        "gerador de pokemon aleatorio",
        "gerador de pokemon",
        "pokemon aleatorio",
        "gerar pokemon aleatorio",
        "obter pokemon aleatorio",
      ],
      headerTitle: "Gerador de Pokémon aleatório",
      headerDesc:
        "Sorteie um Pokémon aleatório em um toque — cada sorteio vem com nome, tipo, habilidade, estatísticas e um sprite oficial.",
      faqs: [
        {
          q: "Como funciona o gerador de Pokémon aleatório?",
          a: "Cada sorteio escolhe um Pokémon ao acaso da Pokédex Nacional completa — mais de 1.000 espécies de todas as nove gerações — e mostra nome, tipos, habilidade, estatísticas base, altura, peso e arte oficial.",
        },
        {
          q: "Posso reproduzir ou compartilhar um resultado específico?",
          a: "Sim. Use o botão de compartilhar no card — o link carrega o Pokémon exato, então quem abrir vê o mesmo sorteio. Você também pode baixar o card como imagem.",
        },
        {
          q: "Posso restringir os resultados?",
          a: "Abra os filtros avançados para sortear dentro de uma geração, região, tipo ou categoria específicos — ou use as páginas dedicadas de geradores por Gen, Região e Tipo linkadas abaixo.",
        },
        {
          q: "De onde vêm os dados de Pokémon?",
          a: "Todos os dados das espécies vêm da PokéAPI e ficam embutidos localmente no site, então cada sorteio é instantâneo.",
        },
      ],
    },

    type: {
      /** Template: {type} = localized type display name. */
      metaTitle: "Gerador de Pokémon aleatório do tipo {type} | PokeRoll",
      /** Template: {type}. */
      metaDescription:
        "Gere um Pokémon aleatório do tipo {type} na hora: nome, habilidades, estatísticas base, geração e sprite, pronto para copiar no Showdown. Ferramenta gratuita feita por fãs.",
      /** Templates: {slug} = raw English type slug (lowercase). */
      keywords: [
        "gerador de pokemon aleatorio tipo {slug}",
        "gerador de pokemon tipo {slug}",
        "gerador de pokemon {slug}",
      ],
      /** Template: {type}. */
      breadcrumbType: "Pokémon do tipo {type}",
      /** Template: {type}. */
      headerTitle: "Gerador de Pokémon aleatório do tipo {type}",
      /** Template: {type}. */
      headerDesc:
        "Procurando um Pokémon aleatório do tipo {type}? Aqui está um — toque em «Gerar de novo» para outro.",
      /** Template: {type}. */
      introS1: "Os Pokémon do tipo {type} apareceram pela primeira vez na ",
      introS2: " junto à ",
      /** Template: {region} = region display name. */
      introRegionLink: "região de {region}",
      introS3: ". Sorteie um acima, explore os 18 tipos com o ",
      introTypeLink: "gerador de tipos",
      introS4: ", ou vá ",
      introRandomLink: "totalmente aleatório",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Explorar a região de {region}",
      linkTitleType: "Gerador de tipos",
      linkTitleRandom: "Gerador de Pokémon aleatório",
    },

    gen: {
      /** Template: {gen} = generation number. */
      metaTitle: "Gerador de Pokémon aleatório Geração {gen} | PokeRoll",
      /** Templates: {gen}, {region} = raw region slug (lowercase, verbatim SEO copy). */
      metaDescription:
        "Gere um Pokémon aleatório da Geração {gen}, da região de {region}: nome, tipo, habilidade, estatísticas base e sprite — copie no Showdown. Ferramenta feita por fãs.",
      /** Templates: {gen}. */
      keywords: [
        "gerador de pokemon aleatorio geracao {gen}",
        "gerador de pokemon geracao {gen}",
        "gerador de pokemon gen {gen}",
      ],
      /** Template: {genLabel} = localized "Generation N". */
      headerTitle: "Gerador de Pokémon aleatório da {genLabel}",
      /** Template: {genLabel}. */
      headerDesc:
        "A {genLabel} introduziu muitos Pokémon queridos dos fãs. Aqui está um aleatório — toque em «Gerar de novo» para mais.",
      introRegionPre: " apresentou a ",
      /** Template: {region} = region display name. */
      introRegionLink: "região de {region}",
      /** Template: {game} = game titles. */
      introGame: " e Pokémon {game}",
      introS3: ". Sorteie um acima, explore por ",
      introTypeLink: "tipo",
      introS4: ", ou vá ",
      introRandomLink: "totalmente aleatório",
      introS5: ".",
      /** Template: {region} = raw region slug. */
      linkTitleBrowseRegion: "Explorar a região de {region}",
      linkTitleType: "Gerador de tipos",
      linkTitleRandom: "Gerador de Pokémon aleatório",
    },

    region: {
      // Third-version game titles that share these regions (same in all 5 locales).
      gameHoenn: "Ruby, Sapphire & Emerald",
      gameSinnoh: "Diamond, Pearl & Platinum",
      /** Templates: {region} = region display name, {gameDesc} = game titles. */
      metaTitle: "Gerador de Pokémon aleatório de {region} — {gameDesc}",
      /** Template: {region}. */
      descStart: "Gere um Pokémon aleatório de {region}",
      descFill: " na hora",
      /** Template: {gameDesc}. */
      descFromGame: " de Pokémon {gameDesc}",
      descEnd:
        ": nome, tipo, habilidade, estatísticas base e sprite — copie no Showdown. Ferramenta gratuita feita por fãs.",
      /** Templates: {slug} = raw region slug; REGION_EXTRA_KEYWORDS (lib/seo.ts) are appended. */
      keywords: ["gerador de pokemon aleatorio {slug}", "pokemon {slug}"],
      /** Template: {slug}; used when a region has no REGION_EXTRA_KEYWORDS entry. */
      keywordFallback: "gerador de pokemon {slug}",
      /** Template: {region}. */
      breadcrumbRegion: "Pokémon de {region}",
      /** Template: {region}. */
      headerTitle: "Gerador de Pokémon aleatório de {region}",
      /** Template: {region}. */
      headerDescStart: "Explore os Pokémon de {region}",
      /** Template: {game} = game titles. */
      headerDescGame: ", presentes em Pokémon {game}",
      headerDescEnd: ". Aqui está um para você — toque em «Gerar de novo» para outro.",
      /** Template: {region}. */
      introS1: "{region} é o lar da ",
      /** Template: {genLabel} = localized "Generation N". */
      introGenLink: "Pokédex da {genLabel}",
      /** Template: {game}. */
      introGame: " e dos jogos Pokémon {game}",
      introS2: ". Sorteie um acima, ou experimente o ",
      introRandomLink: "gerador totalmente aleatório",
      introS3: ".",
      linkTitleRandom: "Gerador de Pokémon aleatório",
    },

    variants: {
      type: {
        title: "Gerador aleatório de tipos de Pokémon | PokeRoll",
        description:
          "Receba um tipo de Pokémon aleatório e um Pokémon correspondente na hora — Fogo, Água, Elétrico e todos os 18 tipos. Sorteie de novo para outro, ou copie seu resultado no Showdown.",
        keywords: [
          "gerador de tipos pokemon aleatorio",
          "gerador de tipos pokemon",
          "gerador de pokemon de tipo unico",
        ],
      },
      ability: {
        title: "Gerador aleatório de habilidades de Pokémon | PokeRoll",
        description:
          "Sorteie uma habilidade de Pokémon como Static ou Blaze e veja um Pokémon que a tem — confira suas estatísticas e tipagem completas, depois copie o set no Showdown.",
        keywords: [
          "gerador de habilidades pokemon",
          "gerador de habilidades pokemon aleatorio",
          "gerar habilidade pokemon aleatoria",
        ],
      },
      move: {
        title: "Gerador aleatório de golpes de Pokémon | PokeRoll",
        description:
          "Descubra um golpe de Pokémon aleatório e um Pokémon que pode aprendê-lo — confira poder, precisão e tipagem, depois copie o set no Showdown. Ferramenta feita por fãs.",
        keywords: [
          "gerador de golpes pokemon aleatorio",
          "gerador de golpes pokemon",
        ],
      },
      bst: {
        title: "Gerador aleatório de estatísticas de Pokémon (BST) | PokeRoll",
        description:
          "Gere um total de estatísticas base aleatório e revele a qual Pokémon ele pertence — compare suas seis estatísticas, sorteie de novo e copie no Showdown. Ferramenta feita por fãs.",
        keywords: [
          "gerador de estatisticas pokemon aleatorio",
          "gerador de pokemon aleatorio com estatisticas",
          "gerador pokemon aleatorio estatisticas",
        ],
      },
      number: {
        title: "Gerador aleatório de números de Pokémon | PokeRoll",
        description:
          "Sorteie um número da Pokédex de 1 a 1025 e revele qual Pokémon é — veja seu card completo, depois copie no Showdown. Ferramenta gratuita feita por fãs.",
        keywords: [
          "gerador de numeros pokemon",
          "gerador de numeros pokemon aleatorio",
        ],
      },
      starter: {
        title: "Gerador aleatório de Pokémon iniciais | PokeRoll",
        description:
          "Escolha um Pokémon inicial aleatório entre os primeiros parceiros de cada geração, de Kanto a Paldea — depois copie no Showdown. Ferramenta gratuita feita por fãs.",
        keywords: [
          "gerador de pokemon iniciais aleatorio",
          "gerador de pokemon iniciais",
          "seletor de pokemon inicial aleatorio",
        ],
      },
      "no-names": {
        title: "Gerador de Pokémon aleatório sem nomes — Jogo de adivinhação",
        description:
          "Um Pokémon misterioso com o nome oculto — você consegue adivinhar qual é pela arte e pelas estatísticas? Vire o card para revelar o set de Showdown.",
        keywords: [
          "pokemon sem nomes",
          "adivinhe o pokemon",
          "quiz de pokemon misterioso",
          "gerador de pokemon aleatorio sem nomes",
        ],
      },
      cute: {
        title: "Gerador aleatório de Pokémon fofos | PokeRoll",
        description:
          "Receba um Pokémon fofo aleatório — escolhas meigas, peludas e adoráveis de toda a Pokédex. Sorteie de novo para outro fofinho, ou copie no Showdown.",
        keywords: [
          "gerador de pokemon fofos",
          "gerador de pokemon fofos aleatorio",
        ],
      },
      mythical: {
        title: "Gerador aleatório de Pokémon míticos | PokeRoll",
        description:
          "Revele um Pokémon mítico aleatório como Mew, Celebi ou Jirachi — raridades de todas as gerações, prontos para copiar no Showdown. Ferramenta feita por fãs.",
        keywords: [
          "gerador de pokemon miticos aleatorio",
          "gerador de pokemon miticos",
        ],
      },
      mega: {
        title: "Gerador aleatório de mega Pokémon | PokeRoll",
        description:
          "Gire uma megaevolução ou reversão primitiva aleatória — veja suas estatísticas aumentadas e sua habilidade, depois copie o set no Showdown. Ferramenta gratuita feita por fãs.",
        keywords: [
          "gerador de mega pokemon aleatorio",
          "gerador de mega pokemon",
        ],
      },
      nickname: {
        title: "Gerador aleatório de nomes e apelidos de Pokémon | PokeRoll",
        description:
          "Gere um Pokémon aleatório junto com um apelido divertido e fofo — perfeito para sua próxima jornada ou Nuzlocke. Copie o set no Showdown. Ferramenta feita por fãs.",
        keywords: [
          "gerador de apelidos pokemon",
          "gerador de apelidos pokemon aleatorio",
          "gerar nome de pokemon aleatorio",
        ],
      },
      noNamesPromo: {
        s1: "Quer um quiz de vários cards com seed para compartilhar? ",
        link: "Experimente o Desafio das Silhuetas →",
        linkTitle: "Adivinhe o Pokémon",
      },
    },

    legendary: {
      metaTitle: "Gerador aleatório de Pokémon lendários | PokeRoll",
      metaDescription:
        "Gere um Pokémon lendário aleatório na hora: nome, tipo, habilidade, estatísticas base e arte oficial — copie o set no Showdown. Ferramenta feita por fãs.",
      keywords: [
        "gerador de pokemon lendarios aleatorio",
        "gerador de pokemon lendarios",
        "pokemon lendario aleatorio",
      ],
      breadcrumbLabel: "Gerador de lendários",
      headerTitle: "Gerador aleatório de Pokémon lendários",
      headerDesc:
        "Só Pokémon lendários neste grupo — toque em «Gerar de novo» para outro sorteio lendário.",
      note: "Toque em «Gerar de novo» para sortear outro lendário — «Adicionar à equipe» guarda ele na sua equipe.",
    },
  },
};
