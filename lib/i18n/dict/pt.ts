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
    languageAria: "Idioma",
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

  adventureView: {
    /** Template: {seed} = adventure seed code. */
    seedLine: "Seed {seed} — compartilhe este link para repetir exatamente a mesma aventura.",
    difficultyLabel: "Dificuldade",
    addAllToTeam: "Adicionar tudo à equipe",
    shareAdventure: "Compartilhar aventura",
    rollAgain: "Sortear de novo",
    manifest: "Manifesto da aventura",
    /** Template: {difficulty} = difficulty label. */
    manifestDifficulty: "Dificuldade · {difficulty}",
    /** Template: {seed} = adventure seed code. */
    manifestSeed: "Seed · {seed}",
    trainerProfile: "Perfil do treinador",
    /** Template: {style} = trainer style. */
    styleLine: "Estilo · {style}",
    challenge: "Desafio",
    goal: "Objetivo",
    /** Template: {n} = team size. */
    teamCompanions: "Equipe · {n} companheiros desconhecidos",
    yourStarter: "Seu inicial",
    yourRival: "Seu rival",
    /** Templates: {name} = rival name, {type} = rival starter type. */
    rivalCounter: "{name} escolheu um inicial do tipo {type} para contra-atacar o seu.",
    /** Template: {n} = team size. */
    yourTeam: "Sua equipe ({n})",
    gymJourney: "Jornada dos ginásios",
    legendaryEncounter: "Encontro lendário",
    /** Templates: {count} = current team size, {max} = team capacity. */
    teamFull: "A equipe está cheia ({count}/{max}). Remova alguns para adicionar novos Pokémon.",
    alreadyInTeam: "Todos esses Pokémon já estão na sua equipe.",
    /** Templates: {added} = number added, {max} = team capacity. */
    addedFull: "{added} adicionados — a equipe agora está cheia ({max}/{max}).",
    /** Templates: {added} = number added, {count} = new team size, {max} = capacity. */
    addedToTeam: "{added} adicionados à sua equipe ({count}/{max}).",
  },

  challengeGenerator: {
    hints: {
      guess: "Nomes ocultos — revele para conferir",
      shiny: "Quantos encontros até um shiny?",
    },
    createChallenge: "Criar desafio",
    shareChallenge: "Compartilhar desafio",
    filtersAria: "Filtros",
    filtersTitle: "Filtros",
    collapseAria: "Recolher filtros",
    collapseTitle: "Recolher filtros",
    difficulty: "Dificuldade",
    random: "Aleatório",
    /** Template: {max} = count cap for the current difficulty. */
    countMax: "Quantidade (máx. {max})",
    typeFilter: "Filtro de tipo",
    regionFilter: "Filtro de região",
    /** Templates: {revealed} = flipped cards, {total} = total cards. */
    revealedProgress: "Revelados {revealed} / {total}",
    hideAll: "Ocultar tudo",
    revealAll: "Revelar tudo",
    silhouetteAlt: "Silhueta de Pokémon oculto",
    /** Template: {types} = " · "-joined type hint list. */
    typeHint: "Dica: {types}",
    whosThat: "Quem é esse Pokémon?",
  },

  shinyHunt: {
    shinyTag: "✦ SHINY",
    /** Template: {odds} = odds denominator (localized number). */
    oddsGuaranteed: "1 / {odds} · GARANTIDO",
    /** Template: {odds}. */
    oddsLabel: "CHANCE 1 / {odds}",
    /** Template: {odds}. */
    oddsGuaranteedLower: "1 / {odds} · garantido",
    /** Template: {odds}. */
    oddsLabelLower: "chance 1 / {odds}",
    encountersLabel: "Encontros",
    /** Template: {name} = Pokémon display name. */
    shinyName: "Shiny {name}",
    foundAfterPre: "Encontrado após ",
    /** Template: {n} = encounter count (localized number). */
    foundAfterCount: "{n} encontros",
    foundAfterSep: " — ",
    verdicts: {
      absurdlyLucky: "Sorte absurda — essa é uma história para contar.",
      lucky: "Sortudo! Abaixo da chance média.",
      overOdds: "Acima da chance média — mas você conseguiu.",
      brutal: "Caçada brutal. Este conquistou o brilho por mérito.",
    },
    shareAria: "Compartilhar seu shiny",
    shareTitle: "Compartilhar seu shiny",
    newHuntAria: "Começar sua própria caçada",
    newHuntTitle: "Começar sua própria caçada",
    rendering: "Renderizando…",
    /** Template: {name} = wild Pokémon display name. */
    wildAppeared: "Um {name} selvagem apareceu…",
    notShiny: "não é shiny",
    emptyState: "A grama alta balança… comece os encontros para caçar seu shiny.",
    encounter: "Encontrar!",
  },

  favoritesClient: {
    /** navigator.share title for the favorites snapshot link. */
    shareTitle: "Meus Pokémon favoritos",
    sharedTitle: "Favoritos compartilhados",
    yourTitle: "Seus favoritos",
    sharedDesc: "Uma lista de favoritos compartilhada com você — somente leitura",
    yourDesc: "Pokémon que você favoritou neste dispositivo",
    /** Template: {count} = number of favorites. */
    slotsUsed: "{count} / 15 espaços usados",
    /** Template: {count} = number of favorites; shown when the cap is hit. */
    slotsMax: "{count} / 15 — limite atingido",
    /** Template: {count} = Pokémon in the shared snapshot. */
    sharedCount: "{count} Pokémon nesta lista compartilhada",
    copyLink: "Copiar link",
    saveToMine: "Salvar nos meus favoritos",
    /** Template: {added} = " (+n)" when the merge added entries, else "". */
    savedViewMine: "Salvo{added} — Ver os meus",
    /** Suffix after the bolded favorites count. */
    favoritedSuffix: " favoritados",
    clearAll: "Limpar tudo",
    invalidLink: "Este link de favoritos é inválido ou expirou.",
    goToMine: "Ir para meus favoritos",
    emptyState:
      "Nenhum favorito ainda. Sorteie um Pokémon e toque no coração para salvá-lo aqui.",
    rollPokemon: "Sortear um Pokémon",
    /** Template: {name} = Pokémon display name. */
    removeAria: "Remover {name} dos favoritos",
    remove: "Remover",
    shareFavorites: "Compartilhar favoritos",
  },

  /* ---------------------------------------------------------------- */
  /*  Component-level UI strings (camelCase, keyed by component)        */
  /* ---------------------------------------------------------------- */

  teamClient: {
    readyTitle: "Sua equipe Pokémon está pronta",
    readyDesc: "Gerencie sua equipe — compartilhe-a ou exporte todos os sets para o Showdown.",
    sharedTitle: "Uma equipe compartilhada com você",
    linkCopied: "Link copiado!",
    shareTeam: "Compartilhar equipe",
    clearTeam: "Limpar equipe",
    copyLink: "Copiar link",
    backToGenerator: "Voltar ao gerador",
    guideTitle: "Como jogar",
    guide1T: "Sorteie e adicione",
    guide1D: "Gere Pokémon em qualquer ferramenta e toque em «Adicionar à equipe» para salvá-los aqui.",
    guide2T: "Gerencie sua equipe",
    guide2D: "Selecione Pokémon para remover ou limpar — sua equipe comporta até 6.",
    guide3T: "Compartilhe ou exporte",
    guide3D: "Copie o link da equipe para os amigos, ou copie todos os sets como texto do Showdown para batalhas.",
    /** Segment: followed by the selected count, then selectedSep + team size. */
    selectedPre: "Selecionados ",
    /** Segment: between the selected count and the team size. */
    selectedSep: " / ",
    clearSelection: "Limpar seleção",
    selectAll: "Selecionar tudo",
    remove: "Remover",
    /** Template: {count} = number of selected Pokémon. */
    removeCount: "Remover ({count})",
    empty: "Nenhum Pokémon ainda. Gere alguns e toque em «Adicionar à equipe».",
  },

  teamTray: {
    /** Template: {count} = current team size, {max} = max team size. */
    ariaLabel: "Sua equipe ({count}/{max})",
    title: "Sua equipe",
    heading: "Sua equipe",
    empty: "Nenhum Pokémon selecionado ainda.",
    buildTeam: "Montar uma equipe",
    openTeam: "Abrir equipe",
  },

  teamGenerator: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "A equipe está cheia ({count}/{max}). Remova alguns primeiro.",
    alreadyInTeam: "Todos os Pokémon sorteados já estão na sua equipe.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} adicionados à sua equipe.",
    readyTitle: "Sua equipe aleatória está pronta",
    readyDesc:
      "Sorteie uma equipe filtrada — trave os favoritos, sorteie de novo o resto, depois adicione-os à sua equipe ou exporte para o Showdown.",
    rolling: "Sorteando…",
    roll: "Sortear",
    /** Template: {count} = unlocked slots that will be re-rolled. */
    rollCount: "Sortear ({count})",
    allLockedTitle: "Todos os cards estão travados — destrave um para sortear",
    filtersAria: "Filtros",
    collapseFilters: "Recolher filtros",
    guideTitle: "Como jogar",
    guide1T: "Sorteie uma equipe",
    guide1D: "Um toque sorteia uma nova equipe aleatória — trave os cards que você gosta e sorteie de novo apenas o resto.",
    guide2T: "Filtre o grupo",
    guide2D: "Restrinja por geração, região, tipo ou tamanho da equipe antes de sortear.",
    guide3T: "Compartilhe, salve ou exporte",
    guide3D: "Copie a equipe como sets de Showdown, vire qualquer card para ver seu set, compartilhe o link ou toque em «Adicionar à equipe» para guardar os favoritos.",
    generationLabel: "Geração",
    regionLabel: "Região",
    typeLabel: "Tipo",
    teamSizeLabel: "Tamanho da equipe",
    optionRandom: "Aleatório",
    addAllToTeam: "Adicionar tudo à equipe",
  },

  teamCoachUi: {
    /** Template: {max} = most picks the user can keep (count - 1). */
    keepLimit: "Mantenha no máximo {max} — deixe pelo menos 1 espaço para o técnico.",
    generateFailed: "A geração falhou — tente de novo.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} adicionados à sua equipe.",
    alreadyInTeam: "Esses Pokémon já estão na sua equipe.",
    readyTitle: "Sua equipe equilibrada está pronta",
    readyDesc:
      "Trave os Pokémon que você já escolheu, preencha o resto com cobertura de tipos — depois adicione-os à sua equipe ou exporte para o Showdown.",
    rerollUnlocked: "Sortear de novo os destravados",
    generateTeam: "Gerar equipe",
    viewMyTeam: "Ver minha equipe",
    guideTitle: "Como jogar",
    guide1T: "Adicione escolhas (opcional)",
    guide1D: "Busque ou importe dos Favoritos / Sua equipe — ou pule e deixe o técnico sortear os 6.",
    guide2T: "Gere a equipe",
    guide2D: "O Técnico de equipe preenche a equipe com tipos e papéis equilibrados.",
    guide3T: "Trave e sorteie de novo",
    guide3D: "Trave os Pokémon que você gosta, sorteie de novo o resto, depois adicione todos, compartilhe o link ou copie os sets para o Showdown.",
    yourTeamHeading: "Sua equipe",
    /** Template: {kept} = locked picks, {count} = target team size. */
    lockedTarget: "{kept} travados · meta de {count}",
    searchPlaceholder: "Buscar Pokémon (opcional)…",
    importFavorites: "Importar favoritos",
    importTeam: "Importar equipe",
    filtersAria: "Filtros",
    collapseFilters: "Recolher filtros",
    teamSizeLabel: "Tamanho da equipe",
    generationLabel: "Geração",
    regionLabel: "Região",
    typeLabel: "Tipo",
    optionAny: "Qualquer",
    allLockedHint: "Tudo está travado — destrave um card para sortear de novo.",
    /** Template: {count} = unlocked slots. */
    rerollHint: "Sorteia de novo {count} espaço(s) destravado(s)",
    /** Template: {count} = slots the coach will fill. */
    fillHint: "Vai preencher {count} espaço(s) com cobertura equilibrada",
    fullRollHint: "Sorteia uma equipe completa e equilibrada",
    emptyHint:
      "Adicione uma escolha ou gere uma equipe completa — o técnico equilibra tipos e papéis.",
    pickerFavTitle: "Dos favoritos",
    pickerTeamTitle: "Da sua equipe",
    favEmpty: "Nenhum favorito ainda — toque no coração em qualquer gerador primeiro.",
    teamEmpty: "Sua equipe está vazia — adicione Pokémon em qualquer gerador primeiro.",
    addAllToTeam: "Adicionar tudo à equipe",
  },

  teamChallengeUi: {
    /** Template: {count} = current team size, {max} = max team size. */
    teamFull: "A equipe está cheia ({count}/{max}). Remova alguns primeiro.",
    alreadyInTeam: "Todos esses Pokémon já estão na sua equipe.",
    /** Template: {count} = number added. */
    addedToTeam: "{count} adicionados à sua equipe.",
    idleTitle: "Pronto para começar um desafio de equipe?",
    idleDesc:
      "Clique abaixo para gerar uma equipe de desafio aleatória de 6 Pokémon — depois sorteie a sua própria equipe e veja quem tem o maior total de estatísticas base.",
    generateChallenge: "Gerar o desafio",
    howToTitle: "Como usar o desafio de equipe",
    howTo1T: "1. A equipe de desafio.",
    howTo1D:
      "Esta página sempre mostra uma equipe de 6 Pokémon com seed — todo mundo que abre o mesmo link vê exatamente a mesma formação (esse é o \"desafio\").",
    howTo2T: "2. Sorteie a sua.",
    /** Segment: before the howTo2Em link-styled term. */
    howTo2S1: "Toque em",
    howTo2Em: "Sortear minha equipe",
    /** Segment: after the howTo2Em term. */
    howTo2S2:
      "para gerar sua própria equipe de 6 Pokémon — um sorteio por desafio, então nada de tentar de novo até vencer.",
    howTo3T: "3. Compare.",
    howTo3D:
      "As duas equipes são exibidas com seus totais de estatísticas base (BST) — o maior total vence, e empates são possíveis.",
    howTo4T: "4. Compartilhe.",
    howTo4Em: "Desafiar um amigo",
    howTo4D:
      "copia um link com a mesma equipe de desafio, para um amigo receber a formação idêntica e tentar superá-la.",
    howTo5T: "5. Exporte o resultado.",
    howTo5Em1: "Compartilhar o card do resultado",
    /** Segment: between howTo5Em1 and howTo5Em2. */
    howTo5S: "ou",
    howTo5Em2: "Baixar card",
    howTo5D:
      "cria uma imagem do confronto (com um QR code) — ótimo para postar na sua comunidade.",
    howTo6T: "6. Comece o seu.",
    howTo6Em: "Começar seu próprio desafio",
    howTo6D:
      "torna você o anfitrião — você sorteia de novo a equipe de desafio e a compartilha com um amigo, em vez de sortear contra a sua própria equipe de novo.",
    ownerHeading: "Sua equipe de desafio está pronta",
    yoursHeading: "Aqui está sua chance — tente superá-la!",
    takeHeading: "Aceite o desafio — sorteie sua equipe",
    ownerDesc:
      "Compartilhe o link — um amigo sorteia a própria equipe para tentar superar esta.",
    yoursDesc:
      "Um sorteio por desafio — comece seu próprio desafio para compartilhar com um amigo.",
    takeDesc:
      "Você recebe 6 Pokémon aleatórios — vence quem tiver o total de estatísticas base maior que a equipe de desafio.",
    rerollChallenge: "Sortear desafio de novo",
    startOwn: "Começar seu próprio desafio",
    rollMine: "Sortear minha equipe",
    linkCopied: "Link copiado!",
    challengeFriend: "Desafiar um amigo",
    step1T: "Sorteie uma equipe",
    step1D: "Essa é a formação com que você vai desafiar.",
    step2T: "Compartilhe o link",
    step2D: "Um amigo abre exatamente a mesma equipe.",
    step3T: "Ele sorteia e compara",
    step3D: "O BST total decide quem vence — exporte qualquer equipe para o Showdown.",
    ownerTeamLabel: "🫵 Sua equipe de desafio",
    challengeLabel: "🏳️ O desafio",
    yourTeamLabel: "Sua equipe",
    theirTeamLabel: "Equipe do adversário",
    theChallenge: "O desafio",
    youWin: "Você venceu!",
    theirWin: "A equipe do adversário venceu!",
    challengeWins: "O desafio venceu!",
    tie: "Empate!",
    higherWins: "Vence o maior total de estatísticas base.",
    rendering: "Renderizando…",
    shareResult: "Compartilhar resultado",
    downloadCard: "Baixar card",
    addAllToTeam: "Adicionar tudo à equipe",
  },

  wheelGenerator: {
    welcome: "Boas-vindas, treinador!",
    intro:
      "Até 6 jogadores se revezam girando — cada resultado se acumula nos resultados abaixo.",
    roundComplete: "Rodada completa — confira os resultados abaixo!",
    spinWheel: "Girar a roleta",
    /** Template: {current} = current player number, {count} = total players. */
    playerTurn: "Jogador {current} de {count} — gire a roleta",
    spinning: "Girando…",
    roundCompleteButton: "Rodada completa",
    spinButton: "Girar!",
    newRound: "Nova rodada",
    playersLabel: "Jogadores",
    /** Template: {current} = spins so far, {count} = total players. */
    roundResults: "Resultados da rodada · {current}/{count}",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    winnerLine: "👑 O jogador {player} vence com {name} ({bst} BST)!",
    /** Template: {n} = player number still to spin. */
    stillToSpin: "O jogador {n} ainda vai girar",
    /** Template: {n} = player number. */
    playerLabel: "Jogador {n}",
    roundLeader: "Líder da rodada",
    shareResults: "Compartilhar resultados",
    addAllToTeam: "Adicionar tudo à equipe",
    /** Template: {count} = number of Pokémon added to the team. */
    addedNotice: "{count} adicionados à sua equipe.",
    alreadyInTeam: "Todos os Pokémon sorteados já estão na sua equipe.",
    // Shared round result view (result=1 link).
    sharedTitle: "Resultado da rodada da roleta",
    /** Template: {player} = winning player number, {name} = Pokémon name, {bst} = base stat total. */
    sharedWinner: "O jogador {player} venceu com {name} ({bst} BST)!",
    /** Template: {count} = number of players in the shared round. */
    sharedSubtitle: "Uma rodada de {count} jogadores compartilhada no PokeRoll",
    spinYourOwn: "Gire sua própria roleta",
    loadingResults: "Carregando resultados…",
  },

  fusionGenerator: {
    welcome: "Boas-vindas, treinador!",
    intro: "Funda dois Pokémon aleatórios em um novo híbrido — toque em «Adicionar à equipe» para ficar com ele.",
    yourFusion: "Sua fusão é…",
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
    adventure: {
      metaTitle: "Gerador de aventura Pokémon",
      /** Template: {diff} = difficulty label (Easy / Normal / Hard / Extreme). */
      metaTitleDiff: "Gerador de aventura Pokémon — Dificuldade {diff}",
      metaDescription:
        "Sorteie uma aventura Pokémon em um toque — treinador, rival, região, inicial, equipe de seis, desafio e encontro lendário. Compartilhe ou copie qualquer card para o Showdown.",
      keywords: [
        "gerador de aventura pokemon",
        "gerador de aventura pokemon aleatoria",
        "gerador de jornada pokemon",
      ],
      headerTitle: "Sorteie sua aventura Pokémon",
      headerDesc:
        "Um toque sorteia seu treinador, região, inicial, equipe, desafio e objetivo — uma aventura Pokémon completa a cada vez.",
      guideTitle: "Como jogar",
      steps: [
        {
          n: "1",
          t: "Sorteie sua aventura",
          d: "Um toque sorteia seu treinador, rival, região, inicial, equipe de seis, desafio, lendário e objetivo.",
        },
        {
          n: "2",
          t: "Escolha uma dificuldade",
          d: "Fácil, Normal, Difícil ou Extrema — quanto mais alta, mais selvagem a jornada.",
        },
        {
          n: "3",
          t: "Compartilhe",
          d: "Copie o link com seed para os amigos repetirem exatamente a mesma aventura — ou adicione a equipe à sua.",
        },
      ],
      faqs: [
        {
          q: "O que uma aventura inclui?",
          a: "Um nome de treinador, função e estilo, um rival, uma região, seu inicial, uma equipe de seis, um desafio, uma jornada de ginásios, um encontro lendário e um objetivo final — tudo sorteado em um toque.",
        },
        {
          q: "O que é a seed no link?",
          a: "Um código de 8 caracteres que comanda o sorteio. A mesma seed e dificuldade sempre produzem exatamente a mesma aventura, então todo link é reproduzível.",
        },
        {
          q: "O que a dificuldade muda?",
          a: "A dificuldade escala a aventura de Fácil a Extrema — ela molda os desafios que você enfrenta, como as chances de shiny e as regras de encontro.",
        },
        {
          q: "Posso compartilhar minha aventura?",
          a: "Sim — copie o link da página. Ele carrega a seed e a dificuldade, então os amigos abrem o manifesto de aventura idêntico.",
        },
      ],
    },

    guess: {
      metaTitle: "Adivinhe o Pokémon — Desafio das silhuetas",
      metaDescription:
        "Adivinhe Pokémon ocultos pelas silhuetas, revele-os um a um para conferir e depois compartilhe o link com seed para desafiar um amigo. Ferramenta gratuita feita por fãs.",
      keywords: [
        "adivinhe o pokemon",
        "jogo de adivinhar pokemon",
        "quiz de pokemon",
        "quem e esse pokemon",
      ],
      breadcrumbLabel: "Adivinhe o Pokémon",
      headerTitle: "Adivinhe o Pokémon",
      /** Template: {count} = hidden Pokémon count, clamped to the difficulty cap. */
      headerDesc:
        "Escondemos os nomes de {count} Pokémon aleatórios. Revele-os um a um e teste seu conhecimento Pokémon!",
      promoS1: "Prefere um card misterioso rápido? ",
      promoLink: "Pokémon misterioso →",
      guideTitle: "Como jogar",
      steps: [
        {
          t: "Estude as silhuetas",
          d: "Forma, tamanho e a dica de tipo no Fácil são tudo o que você tem — confirme seu palpite.",
        },
        {
          t: "Vire para revelar",
          d: "Clique em um card para virá-lo e ver se você acertou o nome do Pokémon.",
        },
        {
          t: "Compartilhe e compare",
          d: "A seed no link recria a mesma formação — compartilhe e dispute com um amigo.",
        },
      ],
    },

    shiny: {
      metaTitle: "Gerador de Pokémon aleatório — Caça shiny | PokeRoll",
      metaDescription:
        "O gerador de Pokémon shiny com chances reais de caçada: clique em Encontrar, ache seu shiny e compartilhe o card. O modo Fácil garante um shiny em até 204 sorteios.",
      keywords: [
        "gerador de pokemon aleatorio shiny",
        "chances de shiny gerador de pokemon aleatorio",
        "gerador de pokemon shiny",
      ],
      breadcrumbLabel: "Caça shiny",
      headerTitle: "Desafio de caça shiny",
      headerDescEasy:
        "Modo Fácil — cada clique é um sorteio de 1 em 204 e seu shiny é garantido em até 204 encontros. Compartilhe o link e compare com um amigo.",
      headerDescDefault:
        "Clique em Encontrar e veja quanto tempo leva para achar seu shiny — as mesmas chances de 1/4096 dos jogos. Compartilhe o link e compare com um amigo.",
      guideTitle: "Como jogar",
      steps: [
        {
          t: "Clique em Encontrar",
          d: "Cada clique é um sorteio — 1 em 204 no Fácil, 1 em 4096 nos demais, e o Fácil garante um shiny em até 204 cliques.",
        },
        {
          t: "Ache seu shiny",
          d: "Quando ele brilhar, o card encontrado libera Compartilhar e Baixar.",
        },
        {
          t: "Compartilhe a caçada",
          d: "Compartilhe o card ou o link com seed — os amigos veem seu resultado e depois começam a própria caçada.",
        },
      ],
      faqs: [
        {
          q: "Quais são as chances de shiny?",
          a: "Os modos Normal, Difícil e Extremo usam a mesma taxa de 1 em 4096 dos jogos principais. O modo Fácil aumenta para 1 em 204 por clique.",
        },
        {
          q: "O que é o modo Fácil?",
          a: "Uma caçada mais amigável: chances de 1 em 204 por Encontrar, e seu shiny é garantido em até 204 sorteios — sem sequências infinitas de azar.",
        },
        {
          q: "O que acontece quando acho um shiny?",
          a: "O card encontrado libera Compartilhar e Baixar. O link compartilhado abre direto no seu shiny encontrado, e a imagem do card baixada traz um QR code que os amigos podem escanear para começar a própria caçada.",
        },
      ],
    },

    favorites: {
      metaTitle: "Seus Pokémon favoritos | PokeRoll",
      metaDescription:
        "Salve os Pokémon que você ama e monte sua coleção de favoritos — compartilhe a lista com um link e copie qualquer card para o Showdown. Ferramenta gratuita feita por fãs.",
      keywords: [
        "pokemon favoritos",
        "lista de pokemon favoritos",
        "compartilhar colecao pokemon",
      ],
      headerTitle: "Pokémon favoritos",
      headerDesc:
        "Guarde os Pokémon que você ama em um só lugar — depois compartilhe a lista inteira com um único link.",
    },

    contact: {
      metaTitle: "Fale conosco | PokeRoll",
      metaDescription:
        "Fale com a equipe do PokeRoll — envie um e-mail para hello@pokeroll.app para feedback e relatos de bugs, dê um oi no X @JoeyChou2024 ou abra uma issue no GitHub. Respondemos rápido.",
      keywords: [
        "contato pokeroll",
        "feedback gerador de pokemon",
        "suporte pokeroll",
      ],
      headerTitle: "Fale conosco",
      headerDesc:
        "Dúvidas, ideias ou um bug para relatar? Escolha o canal que preferir — toda mensagem chega direto ao criador.",
      channels: [
        {
          title: "Email",
          handle: "hello@pokeroll.app",
          desc: "Feedback, relatos de bugs ou assuntos comerciais — lemos tudo.",
          action: "Enviar e-mail",
        },
        {
          title: "X (Twitter)",
          handle: "@JoeyChou2024",
          desc: "As respostas mais rápidas. Atualizações diárias de bastidores sobre o que vem por aí.",
          action: "Seguir no X",
        },
        {
          title: "GitHub",
          handle: "ihuajiu/pokeroll.app",
          desc: "Código aberto. Achou um bug? Abra uma issue e ela será acompanhada.",
          action: "Abrir uma issue",
        },
      ],
      soloNote:
        "O PokeRoll é um projeto solo feito por fãs — não é afiliado à Nintendo nem à The Pokémon Company. As respostas costumam chegar em até 48 horas.",
      backLink: "← Voltar ao gerador",
    },

    privacy: {
      metaTitle: "Política de privacidade — PokeRoll",
      metaDescription:
        "Política de privacidade do PokeRoll — usamos o Google Analytics de forma anônima, guardamos favoritos e tema apenas no localStorage do seu navegador e nunca coletamos dados pessoais.",
      keywords: [
        "politica de privacidade pokeroll",
        "privacidade ferramenta pokemon",
        "privacidade site de fas",
      ],
      headerTitle: "Política de privacidade",
      intro:
        "O PokeRoll é uma caixa de ferramentas Pokémon gratuita feita por fãs. Mantemos a coleta de dados no mínimo absoluto — você pode usar todas as ferramentas sem conta, e nunca pedimos informações pessoais.",
      analytics: {
        h: "Analytics:",
        p: "Usamos o Google Analytics para entender o tráfego geral (quais páginas são visitadas e aproximadamente quantos visitantes). Esses dados são agregados e anônimos — não os usamos para identificar usuários individuais.",
      },
      storage: {
        h: "Armazenamento do navegador:",
        p: "Seus favoritos, escolhas de equipe e preferências de tema ficam armazenados apenas no localStorage do seu navegador. Esses dados nunca saem do seu dispositivo e nunca são enviados aos nossos servidores.",
      },
      personal: {
        h: "Dados pessoais:",
        p: "Não coletamos nomes, endereços de e-mail nem nenhum outro dado pessoal. Não há cadastro nem rastreamento além do analytics anônimo descrito acima.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Links de afiliados:",
        s1: "Alguns links de compras neste site são links de afiliados — veja o ",
        l1: "aviso legal",
        s2: " para detalhes. Os parceiros de afiliados podem usar seus próprios cookies conforme suas próprias políticas de privacidade.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Contato:",
        s1: "Dúvidas sobre esta política? Envie um e-mail para ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Voltar ao gerador",
    },

    terms: {
      metaTitle: "Termos de uso — PokeRoll",
      metaDescription:
        "Termos de uso do PokeRoll — uma caixa de ferramentas Pokémon não oficial, feita por fãs e fornecida como está. Pokémon é uma marca registrada da Nintendo, Game Freak e The Pokémon Company.",
      keywords: [
        "termos de uso pokeroll",
        "termos site de fas pokemon",
        "ferramenta pokemon nao oficial",
      ],
      headerTitle: "Termos de uso",
      intro:
        "O PokeRoll é uma caixa de ferramentas Pokémon não oficial, feita por fãs. Ao usar este site, você concorda com os termos abaixo.",
      unofficial: {
        h: "Projeto de fãs não oficial:",
        p: "Este site não é afiliado, endossado ou patrocinado pela Nintendo, Game Freak ou The Pokémon Company. Pokémon e todos os nomes, personagens e artes relacionados são marcas registradas da Nintendo, Game Freak e The Pokémon Company, e são usados aqui apenas para fins informativos e de entretenimento.",
      },
      asIs: {
        h: "Fornecido como está:",
        p: 'As ferramentas e o conteúdo deste site são fornecidos "como estão", sem garantias de nenhum tipo. Os resultados aleatórios são para diversão; não garantimos disponibilidade, precisão ou adequação a nenhum fim.',
      },
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        h: "Fontes de dados:",
        s1: "Os dados de Pokémon (nomes, tipos, estatísticas, habilidades, sprites) vêm da ",
        l1: "PokéAPI",
        s2: " pública. Os sprites são © de seus respectivos detentores de direitos.",
      },
      // s1/l1/s2 are the segments around the /disclaimer link.
      affiliate: {
        h: "Links de afiliados:",
        s1: "Como Associado da Amazon, recebemos comissões por compras qualificadas feitas por meio dos links de compras deste site. Isso não afeta as ferramentas, que continuam gratuitas. Veja o ",
        l1: "aviso legal",
        s2: " para o comunicado completo.",
      },
      // s1/l1/s2 are the segments around the mailto link.
      contact: {
        h: "Contato:",
        s1: "Dúvidas sobre estes termos? Envie um e-mail para ",
        l1: "hello@pokeroll.app",
        s2: ".",
      },
      backLink: "← Voltar ao gerador",
    },

    disclaimer: {
      metaTitle: "Aviso legal e comunicado de afiliados — Ferramenta Pokémon feita por fãs",
      metaDescription:
        "O PokeRoll é um site não oficial, feito por fãs, e não é afiliado à Nintendo, Game Freak ou The Pokémon Company. Leia o aviso legal e o comunicado de afiliados.",
      keywords: [
        "aviso legal site de fas pokemon",
        "comunicado de afiliados pokemon",
        "site pokemon nao oficial",
      ],
      headerTitle: "Aviso legal",
      intro:
        "Este site é uma ferramenta não oficial, feita por fãs. Não é afiliada, endossada ou patrocinada pela Nintendo, Game Freak ou The Pokémon Company. Nomes, personagens e artes de Pokémon são marcas registradas de seus respectivos donos e são usados aqui apenas para fins informativos e de entretenimento.",
      // s1/l1/s2 are the segments around the PokéAPI link.
      dataSources: {
        s1: "Todos os dados de Pokémon (nomes, tipos, habilidades, estatísticas, sprites) são obtidos da ",
        l1: "PokéAPI",
        s2: " pública. Os sprites são © de seus respectivos detentores de direitos.",
      },
      affiliate: {
        h: "Comunicado de afiliados:",
        p: "Como Associado da Amazon, recebemos comissões por compras qualificadas feitas por meio dos links de compras deste site. Isso não afeta a ferramenta, que continua gratuita.",
      },
      backLink: "← Voltar ao gerador",
    },

    randomPokemon: {
      metaTitle: "Pokémon aleatório — Sorteie um agora | PokeRoll",
      metaDescription:
        "Receba um Pokémon aleatório em um toque — todo sorteio vem com nome, tipo, habilidade, estatísticas base e arte oficial, pronto para copiar no Showdown. Ferramenta gratuita feita por fãs.",
      keywords: [
        "gerador de pokemon aleatorio",
        "gerador de pokemon",
        "pokemon aleatorio",
        "gerar pokemon aleatorio",
        "obter pokemon aleatorio",
      ],
    },
    randomPokemonPicker: {
      metaTitle: "Seletor de Pokémon aleatório | PokeRoll",
      metaDescription:
        "Escolha um Pokémon aleatório em um toque — toda escolha vem com nome, tipo, habilidade, estatísticas base e arte oficial, pronto para copiar no Showdown. Ferramenta gratuita feita por fãs.",
      keywords: [
        "gerador de pokemon aleatorio",
        "gerador de pokemon",
        "pokemon aleatorio",
        "gerar pokemon aleatorio",
        "obter pokemon aleatorio",
      ],
    },
    pokemonRandomizer: {
      metaTitle: "Randomizador de Pokémon | PokeRoll",
      metaDescription:
        "Randomize um Pokémon em um toque — todo sorteio vem com nome, tipo, habilidade, estatísticas base e arte oficial, pronto para copiar no Showdown. Ferramenta gratuita feita por fãs.",
      keywords: [
        "gerador de pokemon aleatorio",
        "gerador de pokemon",
        "pokemon aleatorio",
        "gerar pokemon aleatorio",
        "obter pokemon aleatorio",
      ],
    },

    team: {
      metaTitle: "Sua equipe Pokémon | PokeRoll",
      metaDescription:
        "Sua equipe salva de Pokémon gerados aleatoriamente — compartilhe o link com os amigos ou copie todos os sets para o Showdown para batalhar. Ferramenta gratuita feita por fãs.",
      keywords: [
        "montador de equipe pokemon",
        "montador de equipe pokemon aleatoria",
        "gerador de equipe pokemon aleatoria",
        "planejador de equipe pokemon",
      ],
      headerTitle: "Sua equipe Pokémon",
      headerDesc:
        "Sua equipe salva — adicione Pokémon de qualquer gerador, depois monte e compartilhe.",
    },

    teamRandom: {
      metaTitle: "Gerador de equipe Pokémon aleatória | PokeRoll",
      metaDescription:
        "Gere uma equipe aleatória de 6 Pokémon em um toque — trave os favoritos, sorteie de novo o resto, depois exporte todos os sets para o Showdown ou compartilhe o link. Ferramenta gratuita feita por fãs.",
      keywords: [
        "gerador de equipe pokemon aleatoria",
        "gerador de equipe pokemon",
        "equipe pokemon aleatoria",
        "montar uma equipe pokemon aleatoria",
      ],
      headerTitle: "Equipe Pokémon aleatória",
      headerDesc:
        "Sorteie uma equipe filtrada de Pokémon aleatórios — depois adicione seus favoritos à Sua equipe.",
      faqs: [
        {
          q: "Como as equipes são geradas?",
          a: "Cada sorteio puxa seis Pokémon aleatórios de uma vez. Abra os filtros para restringir o grupo por geração, região, tipo ou categoria (como Lendário ou Inicial) antes de sortear.",
        },
        {
          q: "Por que recebi menos de seis Pokémon?",
          a: "Filtros muito restritos podem deixar um grupo correspondente menor que seis. Amplie um dos filtros — ou volte um para Aleatório — e sorteie de novo.",
        },
        {
          q: "Posso salvar ou compartilhar uma equipe?",
          a: "Compartilhe o link da página — a URL carrega a equipe sorteada, então os amigos que a abrirem veem os mesmos seis. Toque em «Adicionar à equipe» em qualquer card para guardar os favoritos na Sua equipe em todo o site.",
        },
      ],
    },

    teamCoach: {
      metaTitle: "Técnico de equipe Pokémon — Complete o resto da sua equipe",
      metaDescription:
        "Trave os Pokémon que você já escolheu e deixe o Técnico de equipe preencher o resto com cobertura de tipos e papéis equilibrados — depois copie a equipe para o Showdown. Ferramenta gratuita feita por fãs.",
      keywords: [
        "montador de equipe pokemon",
        "completador de equipe pokemon",
        "tecnico de equipe pokemon",
        "montador automatico de equipe pokemon",
      ],
      breadcrumbLabel: "Técnico de equipe",
      headerTitle: "Técnico de equipe Pokémon",
      headerDesc:
        "Trave os Pokémon que você já escolheu, preencha o resto com cobertura de tipos e papéis equilibrados.",
    },

    teamChallenge: {
      metaTitle: "Desafio de equipe Pokémon — Sorteie uma equipe, desafie um amigo",
      metaDescription:
        "Sorteie uma equipe de 6 Pokémon com seed, compartilhe o link e desafie um amigo — o BST total decide o vencedor, depois exporte qualquer equipe para o Showdown. Ferramenta gratuita feita por fãs.",
      keywords: [
        "desafio de equipe pokemon",
        "gerador de equipe pokemon aleatoria",
        "equipe pokemon aleatoria",
        "gerador de equipe pokemon",
      ],
      breadcrumbLabel: "Desafio de equipe",
      headerTitle: "Desafio de equipe Pokémon",
      headerDesc:
        "Sorteie uma equipe de desafio de 6 Pokémon, compartilhe o link e deixe o BST total decidir o vencedor contra seus amigos.",
    },

    wheel: {
      metaTitle: "Roleta do gerador de Pokémon aleatório | PokeRoll",
      metaDescription:
        "Gire a roleta para um Pokémon aleatório — um divertido seletor de sorte por toda a Pokédex. Veja onde ela para, depois copie sua escolha para o Showdown. Ferramenta gratuita feita por fãs.",
      keywords: [
        "roleta gerador de pokemon aleatorio",
        "gerador de roleta pokemon",
        "roleta de pokemon aleatorio",
        "roleta seletora de pokemon",
      ],
      breadcrumbLabel: "Girar a roleta",
      headerTitle: "Gerador de roleta Pokémon",
      headerDesc:
        "Gire a roleta para um Pokémon aleatório — um divertido seletor de sorte pela Pokédex — e copie sua escolha para o Showdown.",
      guideTitle: "Como jogar",
      steps: [
        {
          n: "1",
          t: "Escolha os jogadores",
          d: "Escolha de 2 a 6 jogadores — cada um tem sua vez de girar a roleta.",
        },
        {
          n: "2",
          t: "Gire e veja onde para",
          d: "Cada giro para em um Pokémon e se acumula nos resultados da rodada abaixo.",
        },
        {
          n: "3",
          t: "Batalhe e compartilhe",
          d: "O maior BST vence a rodada — compartilhe o resultado para desafiar os amigos.",
        },
      ],
    },

    fusion: {
      metaTitle: "Gerador de fusões Pokémon | PokeRoll",
      metaDescription:
        "Funda dois Pokémon aleatórios em um híbrido inédito com nome, tipo e estatísticas combinados — sorteie de novo para um par mais estranho, depois copie a fusão para o Showdown.",
      keywords: [
        "gerador de fusoes pokemon",
        "gerador de fusao pokemon aleatoria",
        "criador de fusoes pokemon",
        "ferramenta de fusao pokemon",
      ],
      breadcrumbLabel: "Ferramenta de fusão",
      headerTitle: "Gerador de fusões Pokémon",
      headerDesc:
        "Funda dois Pokémon aleatórios em um híbrido inédito com nome, tipo e estatísticas combinados — depois copie a fusão para o Showdown.",
      faqs: [
        {
          q: "Como funciona o gerador de fusões?",
          a: "Cada sorteio escolhe dois Pokémon aleatórios e os funde em um híbrido — um nome misturado mais tipos e estatísticas combinados dos dois pais.",
        },
        {
          q: "Posso compartilhar ou guardar uma fusão?",
          a: "Sim. O botão Compartilhar copia um link que reproduz exatamente a mesma fusão, e Baixar salva o card da fusão como imagem.",
        },
        {
          q: "Esta é uma ferramenta oficial de Pokémon?",
          a: "Não — o PokeRoll é um projeto feito por fãs. Os dados de Pokémon vêm da PokéAPI; os resultados de fusão são gerados por diversão e não são designs oficiais.",
        },
      ],
    },
  },
};
