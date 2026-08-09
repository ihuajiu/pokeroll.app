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
      guide: {
        introTitle: "Por que sortear um Pokémon aleatório?",
        intro:
          "Um sorteio aleatório é o jeito mais rápido de sair da lógica dos «mesmos seis favoritos». Um toque te entrega uma espécie que você não escolheu — com estatísticas, tipagem e arte — e de repente você está teorizando um moveset para um Pokémon que nunca teria escolhido sozinho. Use como escolha de draft, tema de desenho, tabela de encontros de Nuzlocke ou o primeiro slot de uma equipe novinha em folha.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Inicial de desafio",
            d: "Sorteie uma vez e trave o resultado como o inicial da sua próxima jornada — seja qual for. Depois construa a run em volta dele.",
          },
          {
            t: "Draft e duelo",
            d: "Alterne sorteios com um amigo — cada um fica com o que sorteia, seis sorteios para cada, e depois batalhem com as duas equipes no Showdown.",
          },
          {
            t: "Tema de arte e escrita",
            d: "Use o sorteio como briefing criativo: desenhe o Pokémon no seu estilo ou escreva o treinador que o carregaria.",
          },
          {
            t: "Semente de equipe",
            d: "Gostou do que sorteou? Toque em Add to Team e sorteie de novo — seis toques depois, você tem uma equipe que se escolheu sozinha.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "O aleatório funciona melhor com uma regra atrelada. Só Kanto? Abra os filtros e trave a geração. Sem lendários? Exclua a categoria antes. Um único tipo para uma run temática? Trave antes do primeiro toque — os filtros são o livro de regras, o sorteio é o dado.",
          "Jogando com outras pessoas? Combinem as regras em voz alta antes de qualquer sorteio: quantos re-sorteios cada jogador tem (um é um bom padrão), se formas alternativas contam e o que acontece em caso de repetido.",
          "A graça é se comprometer com o que saiu — um sorteio que dá para desfazer sem fim é só navegar com passos extras.",
        ],
        sampleTitle: "Um sorteio de exemplo",
        sample:
          "Digamos que os dados te entreguem Aromatisse — um Fairy puro com 101 de HP e 29 de Speed que você nunca colocaria numa equipe séria. Agora a pergunta interessante: âncora de Trick Room? Suporte de Aromatherapy? De repente você está lendo uma página de moveset de um Pokémon que ignorou por uma década. É para isso que serve o sorteio.",
        linksTitle: "Quer um grupo mais enxuto?",
        linksTextBefore: "Sorteie uma única fatia da Pokédex — experimente o",
        links: [
          { label: "gerador da Gen 1", href: "/gen/1" },
          { label: "gerador do tipo Dragon", href: "/type/dragon" },
          { label: "gerador de Lendários", href: "/legendary" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— mesmo dado, lago menor.",
      },
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
      guide: {
        introTitle: "Por que sortear Pokémon do tipo {type}?",
        intro:
          "O grupo do tipo {type} reúne de tudo, dos clássicos do primeiro dia aos lançamentos mais recentes — e esta página te entrega um ao acaso, com estatísticas, habilidade e arte incluídos. Um toque, um {type}, sem rolar a dex.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Run mono-{type}",
            d: "Sorteie um e ele ancora seu desafio mono-{type} — o primeiro slot está decidido, faltam cinco.",
          },
          {
            t: "Estudo de tipo",
            d: "Sorteie pelo grupo e anote os padrões de estatísticas — os tipos {type} compartilham uma filosofia de design que vale a pena aprender.",
          },
          {
            t: "Restrição de draft",
            d: "Todo mundo faz draft só do grupo {type} — mesmo tipo, equipes completamente diferentes.",
          },
          {
            t: "Tema de arte",
            d: "Desenhe o {type} sorteado de hoje — os esboços diários ficam mais fáceis quando os dados escolhem o tema.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Uma run mono-{type} vive e morre pelas fraquezas compartilhadas — confira o que {type} resiste e teme antes de se comprometer.",
          "«O primeiro sorteio vale» é a regra mais limpa; um re-sorteio anunciado por sessão é a versão tolerante. Decida antes de tocar.",
          "Tipos duplos contam: se carrega {type}, está no grupo — os híbridos são o que mantém as mono-runs vivas.",
        ],
        sampleTitle: "Um sorteio de exemplo",
        sample:
          "Um toque pode te entregar um veterano {type} que você já treinou uma dúzia de vezes — ou um {type} que você literalmente nunca usou, e é esse o interessante. O grupo decide qual.",
        linksTitle: "Mais dados, mais temas?",
        linksTextBefore: "Experimente o",
        links: [
          { label: "gerador de tipos", href: "/type" },
          { label: "gerador de equipe aleatória", href: "/team/random" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— e volte quando o tema pedir {type} de novo.",
      },
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
      guide: {
        introTitle: "Por que sortear Pokémon da {genLabel}?",
        intro:
          "A {genLabel} é uma era própria — sua própria dex, sua própria linguagem de design, sua própria nostalgia. Esta página sorteia só dentro da {genLabel}: cada toque é um reencontro com aquela geração, das mascotes ao Pokémon de rota mais esquecido.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Run nostálgica",
            d: "Sorteie um e ele ancora um replay só da {genLabel} — os dados escolhem, você constrói a run em volta dele.",
          },
          {
            t: "Quiz de dex",
            d: "Sorteie e diga a tipagem e a linha evolutiva do Pokémon de memória antes de conferir o card.",
          },
          {
            t: "Draft mono-gen",
            d: "Cada jogador faz draft só da {genLabel} — uma geração, seis escolhas, discussões infinitas sobre o meta dela.",
          },
          {
            t: "Debate de eras",
            d: "Sorteie cinco e avalie — será que a {genLabel} é secretamente a melhor geração? Os dados trazem as evidências.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Comprometa-se com a era: numa run só da {genLabel}, todo slot precisa vir desta dex — é aí que mora o desafio.",
          "O primeiro sorteio vale; o charme de uma única geração é aceitar os esquisitões junto com as estrelas.",
          "Formas de gerações posteriores não contam, a menos que as regras da casa digam o contrário — decida antes da run, não depois do sorteio.",
        ],
        sampleTitle: "Um sorteio de exemplo",
        sample:
          "Um toque e você está encarando um velho conhecido da {genLabel} que tinha esquecido completamente — o grito dele, a rota dele, o NPC que usou ele contra você. Gerações não são só listas; são memórias com estatísticas.",
        linksTitle: "Mais jeitos de voltar no tempo?",
        linksTextBefore: "Explore a",
        links: [
          { label: "região de {region}", href: "/by/{regionSlug}" },
          { label: "o gerador de tipos", href: "/type" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— ou vá totalmente aleatório pelas nove gerações.",
      },
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
      guide: {
        introTitle: "Por que sortear Pokémon de {region}?",
        intro:
          "{region} é mais que um mapa — é a dex de Pokémon {game}, com seus próprios iniciais, lendários e figurinhas carimbadas das rotas. Esta página sorteia só dentro de {region}: um toque, um local, direto dos jogos que a criaram.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Run de volta ao lar",
            d: "Sorteie um e ele ancora um replay só de {region} — monte a equipe que a dex da região permite.",
          },
          {
            t: "Quiz da dex local",
            d: "Sorteie e localize o Pokémon no mapa: qual rota, qual ginásio, qual versão?",
          },
          {
            t: "Draft regional",
            d: "Cada jogador faz draft de seis só de {region} — uma região, equipes bem diferentes.",
          },
          {
            t: "Debate de versões",
            d: "Sorteie cinco e julgue — {region} ainda se sustenta, ou é a nostalgia falando?",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Runs regionais funcionam porque o grupo é fechado: se não está na dex de {region}, não entra na equipe.",
          "O primeiro sorteio vale — a região dá, a equipe se adapta. Um re-sorteio anunciado por sessão, se o seu grupo for generoso.",
          "Decida cedo se as adições de pós-jogo e DLC contam como locais de {region} — regras da casa evitam discussões de rota.",
        ],
        sampleTitle: "Um sorteio de exemplo",
        sample:
          "Um toque e aparece um rosto de Pokémon {game} em que você não pensava há anos — o tema da rota começa a tocar na sua cabeça na hora. Regiões não são grupos; são lugares.",
        linksTitle: "Quer continuar explorando?",
        linksTextBefore: "Experimente a",
        links: [
          { label: "Pokédex da {genLabel}", href: "/gen/{gen}" },
          { label: "o gerador de tipos", href: "/type" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— ou vá totalmente aleatório por todas as regiões.",
      },
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
        guide: {
          introTitle: "Por que sortear um tipo aleatório?",
          intro:
            "Dezoito tipos, um toque. Um tipo aleatório é o jeito mais rápido de escolher um tema: runs mono-tipo, restrições de draft, categorias de quiz — os dados escolhem, você se compromete.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Decisor de mono-tipo",
              d: "Sorteie uma vez e esse é o tipo da sua próxima mono-run — nada de fazer lobby por um re-sorteio porque você queria Dragon.",
            },
            {
              t: "Restrição de draft",
              d: "Cada jogador sorteia um tipo antes do draft — sua equipe inteira precisa carregá-lo.",
            },
            {
              t: "Desafio de tema",
              d: "Sorteie um tipo e monte uma equipe que cubra as fraquezas dele sem compartilhá-las.",
            },
            {
              t: "Aprenda a tabela",
              d: "Teste seus conhecimentos sobre as resistências do tipo sorteado antes de conferir — a tabela fixa mais rápido quando vira jogo.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "O sorteio de tipo só funciona como compromisso: decida de antemão que o primeiro resultado vale. Um tipo que dá para re-sortear é só uma sugestão.",
            "Jogando com outras pessoas? Todo mundo sorteia abertamente, repetidos ganham um re-sorteio, e é isso — a restrição é a diversão.",
            "Combine o sorteio com os filtros dos outros geradores: trave o tipo lá e os dados ficam dentro do seu tema a sessão inteira.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "O sorteio diz Rock. De repente você está planejando em volta de uma fraqueza compartilhada a Water e Ground, de olho em usuários de Sand Stream, e lembrando que Rock tem quatro resistências próprias. Um toque, e a run de hoje à noite ganhou personalidade.",
          linksTitle: "Quer ir mais fundo?",
          linksTextBefore: "Navegue por um tipo específico como",
          links: [
            { label: "Dragon", href: "/type/dragon" },
            { label: "Fire", href: "/type/fire" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— ou leve o resultado direto para o gerador de equipes.",
        },
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
        guide: {
          introTitle: "Por que sortear uma habilidade aleatória?",
          intro:
            "As habilidades definem como um Pokémon realmente joga — e a maioria de nós só conhece as vinte famosas. Sorteie uma ao acaso, conheça um Pokémon que a carrega e descubra o que a longa cauda da lista de habilidades é capaz de fazer.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Tema para montar set",
              d: "Sorteie uma habilidade e esboce um set que abuse dela — quanto mais estranha a habilidade, melhor o exercício.",
            },
            {
              t: "Restrição de draft",
              d: "Cada jogador sorteia uma habilidade e precisa draftar um Pokémon que a tenha — escassez instantânea, drama instantâneo.",
            },
            {
              t: "Aprenda a lista",
              d: "Leia o efeito da habilidade sorteada antes de espiar — um quiz silencioso que rende nas batalhas.",
            },
            {
              t: "Cola de equipe",
              d: "Falta algo na sua equipe? Sorteie habilidades até uma resolver seu problema, e anote quais Pokémon a carregam.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "Decida se habilidades ocultas contam antes de começar — são os resultados mais raros e as discussões mais barulhentas.",
            "Um sorteio, um compromisso é o formato saudável: construa em volta do que saiu em vez de pescar as boas.",
            "Se uma habilidade é exclusiva de uma geração, trate como aula de história e sorteie o contexto, não só o efeito.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "Você sorteia Levitate e o card mostra um Pokémon por quem você passou cem vezes — só que agora ele é o pivot imune a Ground que sua equipe precisava. É essa a loteria das habilidades: a resposta sempre esteve lá, você só nunca tinha feito a pergunta.",
          linksTitle: "Quer continuar montando?",
          linksTextBefore: "Combine com o",
          links: [
            { label: "gerador de golpes", href: "/move" },
            { label: "gerador de estatísticas", href: "/bst" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— habilidade, golpes e números são três lados do mesmo set.",
        },
      },
      move: {
        title: "Gerador aleatório de golpes de Pokémon | PokeRoll",
        description:
          "Descubra um golpe de Pokémon aleatório e um Pokémon que pode aprendê-lo — confira poder, precisão e tipagem, depois copie o set no Showdown. Ferramenta feita por fãs.",
        keywords: [
          "gerador de golpes pokemon aleatorio",
          "gerador de golpes pokemon",
        ],
        guide: {
          introTitle: "Por que sortear um golpe aleatório?",
          intro:
            "Centenas de golpes, e as batalhas são vencidas pelos estranhos. Sorteie um golpe ao acaso, veja um Pokémon que o aprende e faça a única pergunta que importa: será que isso funciona de verdade?",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Roleta de moveset",
              d: "Sorteie quatro golpes e monte um set com eles — Splash incluso. Os melhores jogadores fazem qualquer coisa parecer jogável.",
            },
            {
              t: "Restrição de draft",
              d: "Sorteie um golpe e drafte uma equipe em que alguém precise usá-lo — golpes de suporte finalmente têm seu momento.",
            },
            {
              t: "Aprenda a biblioteca",
              d: "Poder, precisão, efeito — leia o golpe sorteado antes de conferir. Conhecimento de golpes é Elo de graça.",
            },
            {
              t: "Tema de batalha",
              d: "Sorteie um golpe e projete a situação em que ele te vence o jogo — theorycrafting com uma seed.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "Na roleta de moveset, sem trocas: quatro sorteios, um set, e golpes de status contam. A restrição é o jogo inteiro.",
            "Combinem se Z-moves, golpes Max e golpes exclusivos entram no grupo antes de qualquer sorteio — regras da casa evitam mau humor.",
            "Um golpe vale tanto quanto seu usuário, então julgue a dupla, não o golpe sozinho.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "Os dados te entregam Belch — um golpe Poison de 120 de poder que só funciona depois de comer uma Berry. Inútil? Aí você repara quem o aprende, e de repente tem um set de suco de Berry morando de graça na sua cabeça a semana inteira.",
          linksTitle: "Quer fechar o set?",
          linksTextBefore: "Complete com o",
          links: [
            { label: "gerador de habilidades", href: "/ability" },
            { label: "gerador de estatísticas", href: "/bst" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— depois leve tudo para o Showdown.",
        },
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
        guide: {
          introTitle: "Por que sortear um BST aleatório?",
          intro:
            "O total de estatísticas base é o atalho que todo jogador usa e ninguém concorda. Sorteie um número, conheça o Pokémon por trás dele e aprenda como um 480 ou um 600 realmente se parecem na natureza.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Adivinhe o mon",
              d: "Veja o número primeiro e nomeie todos os Pokémon que você acha que ficam naquele BST — depois confira o quanto errou.",
            },
            {
              t: "Draft por números",
              d: "Cada jogador sorteia um BST e precisa draftar um Pokémon com exatamente aquele total — a escassez cria estrelas estranhas.",
            },
            {
              t: "Desafio de tier",
              d: "Monte uma equipe em que todos os membros fiquem abaixo de um teto sorteado — máximo de 500 transforma a montagem de equipe em design de verdade.",
            },
            {
              t: "Quiz de estatísticas",
              d: "Adivinhe como as seis estatísticas estão distribuídas antes da revelação — min-maxers e paredes se leem de formas bem diferentes.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "BST é orçamento, não ranking: um 480 bem gasto vence um 540 preguiçoso, então julgue a distribuição antes do total.",
            "Em desafios de teto, defina o teto antes de sortear a equipe — sortear primeiro e negociar depois é como os tetos perdem o sentido.",
            "Megas, formas Primitivas e formas alternativas têm seus próprios totais — decida quais formas contam antes do draft começar.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "O número é 600. Pseudo-lendário? Na verdade, desta vez é um Mítico — e a distribuição é perfeitamente igual nas seis estatísticas, o que não te diz absolutamente nada sobre como ele luta. Números abrem a conversa; nunca a fecham.",
          linksTitle: "Mais jogos de números?",
          linksTextBefore: "Experimente o",
          links: [
            { label: "gerador de números da Pokédex", href: "/number" },
            { label: "gerador de habilidades", href: "/ability" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— ou cace os totais gigantes na página de Lendários.",
        },
      },
      number: {
        title: "Gerador aleatório de números de Pokémon | PokeRoll",
        description:
          "Sorteie um número da Pokédex de 1 a 1025 e revele qual Pokémon é — veja seu card completo, depois copie no Showdown. Ferramenta gratuita feita por fãs.",
        keywords: [
          "gerador de numeros pokemon",
          "gerador de numeros pokemon aleatorio",
        ],
        guide: {
          introTitle: "Por que sortear um número aleatório da Pokédex?",
          intro:
            "Um número entre 1 e 1025, um Pokémon grudado nele. O sorteio de número da dex é a loteria mais pura do site — sem filtros, sem temas, só a história inteira da franquia em um único sorteio.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Roleta da dex",
              d: "Sorteie um número e ele vira seu próximo encontro, companheiro de equipe ou tema de desenho — o que a dex mandar.",
            },
            {
              t: "Adivinhe antes de revelar",
              d: "Chute o Pokémon só pelo número antes de olhar — decorar a ordem da dex é uma habilidade de verdade.",
            },
            {
              t: "Seletor de Nuzlocke",
              d: "Use o número sorteado em módulo com a dex local para escolher encontros com justiça — dado não aceita suborno.",
            },
            {
              t: "Jogo de festa",
              d: "Maior número vence a rodada — o jogo mais simples do site e as discussões mais barulhentas.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "Decida o que o número significa antes de sortear: dex nacional ou mapeado na dex regional de um jogo? Jogos diferentes, destinos diferentes.",
            "Um sorteio por decisão é o formato honesto — re-sortear até cair no seu favorito é só escolher com passos extras.",
            "Formas compartilham o número na dex, então combinem como lidar com elas antes do sorteio, não depois.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "#387. Alguém na mesa grita Turtwig antes mesmo de o card carregar — e desta vez está certo. Uma run de Sinnoh recém-determinada. A dex dá.",
          linksTitle: "Quer mais jogos de número?",
          linksTextBefore: "Experimente o",
          links: [
            { label: "gerador de estatísticas", href: "/bst" },
            { label: "gerador de apelidos", href: "/nickname" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— números, nomes e estatísticas contam histórias diferentes.",
        },
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
        guide: {
          introTitle: "Por que sortear um inicial aleatório?",
          intro:
            "O primeiro parceiro define o tom de uma jornada inteira — e escolher um sozinho leva quarenta minutos de tópicos de fórum. Deixe os dados escolherem entre os iniciais de todas as gerações, de Kanto a Paldea, e comece logo a run.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Decisor de inicial",
              d: "Sorteie uma vez e ele é seu parceiro na próxima run — decisão tomada, a aventura pode começar.",
            },
            {
              t: "Abertura de Nuzlocke",
              d: "Deixe o sorteio escolher o inicial e a sorte da rota decide o resto — compromisso total, viés zero.",
            },
            {
              t: "Desempatador de debate",
              d: "Fire, Water ou Grass desta vez? Os dados não têm nostalgia nem favoritos — o árbitro perfeito.",
            },
            {
              t: "Tema de equipe",
              d: "Sorteie um inicial e monte uma equipe que apoie a evolução final dele — estrutura instantânea para um time casual.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "O pacto do inicial é sagrado: vale o primeiro sorteio. Vetar o resultado porque você queria o sapo acaba com o sentido da brincadeira.",
            "Decida o grupo primeiro — as nove gerações inteiras ou só os jogos que você tem? Um grupo menor ainda é um sorteio justo.",
            "Em runs em grupo, todo mundo sorteia às claras e as trocas são permitidas exatamente uma vez — esse é o meta-jogo inteiro.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "Os dados dizem Chimchar e sua run de Sinnoh de repente tem personalidade: rápido, barulhento e levemente em chamas. Você nunca o escolheria no lugar de Piplup — e é exatamente por isso que essa jornada vai ser memorável.",
          linksTitle: "Quer seguir com a run?",
          linksTextBefore: "Sorteie o resto do time no",
          links: [
            { label: "gerador de equipe aleatória", href: "/team/random" },
            { label: "gerador de tipos", href: "/type" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— o inicial escolheu; agora o time precisa de seis.",
        },
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
        guide: {
          introTitle: "Por que adivinhar um Pokémon misterioso?",
          intro:
            "Um card, estatísticas completas, arte oficial — e nenhum nome. O gerador sem nomes é um quiz de bolso: tudo o que você precisa para identificar o Pokémon está no card, menos a resposta.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Quiz solo",
              d: "Adivinhe pela arte e pelas estatísticas e depois vire para conferir — acompanhe sua sequência de acertos ao longo de dez cards.",
            },
            {
              t: "Grito de festa",
              d: "Mostre o card numa chamada de vídeo; o primeiro grito certo ganha o ponto — velocidade importa mais que precisão.",
            },
            {
              t: "Aquecimento de stream",
              d: "Rode cinco cards misteriosos antes do conteúdo de verdade — a chat enlouquece na hora, garantido.",
            },
            {
              t: "Treino de silhuetas",
              d: "Use como aquecimento para o desafio de adivinhação com seed, onde o quiz fica mais difícil e as pontuações são compartilhadas.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "Nada de ficar em cima do botão de virar: um palpite comprometido por card, em voz alta se tiver mais gente jogando. Confiança é o jogo.",
            "Estatísticas valem — um BST de 600 encurta o leque rapidinho, e saber disso é habilidade, não trapaça.",
            "Perdeu a conta da pontuação? Dez cards, um ponto cada, sem negativos — o formato mais limpo.",
          ],
          sampleTitle: "Um card de exemplo",
          sample:
            "Bochechas amarelas, tipagem Electric, estatísticas minúsculas — você chuta com o peito aberto: Pikachu. O card vira e diz Pachirisu, e agora a sala inteira debate roedores regionais. Mais dez cards, por favor.",
          linksTitle: "Quer um quiz mais difícil?",
          linksTextBefore: "Avance para o",
          links: [
            { label: "desafio de adivinhação", href: "/challenge/guess" },
            { label: "gerador de apelidos", href: "/nickname" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— o mesmo conhecimento, apostas mais altas.",
        },
      },
      cute: {
        title: "Gerador aleatório de Pokémon fofos | PokeRoll",
        description:
          "Receba um Pokémon fofo aleatório — escolhas meigas, peludas e adoráveis de toda a Pokédex. Sorteie de novo para outro fofinho, ou copie no Showdown.",
        keywords: [
          "gerador de pokemon fofos",
          "gerador de pokemon fofos aleatorio",
        ],
        guide: {
          introTitle: "Por que sortear um Pokémon fofo?",
          intro:
            "Nem todo sorteio precisa ser competitivo. O gerador de fofos puxa dos cantos macios, peludos e redondos da Pokédex — os Pokémon que você de verdade teria como bicho de estimação, um toque por vez.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Sorteio de conforto",
              d: "Um toque, um Pokémon adorável — a melhora de humor mais barata da internet.",
            },
            {
              t: "Prompt de arte",
              d: "Desenhe o fofinho sorteado no seu estilo — Pokémon pequenos são a melhor prática diária de esboço.",
            },
            {
              t: "Run só de fofos",
              d: "Monte uma equipe de jornada em que todo membro precisa passar no teste da fofura — surpreendentemente viável, na maioria tipos Normal.",
            },
            {
              t: "Desempate de debate",
              d: "Cada jogador sorteia uma vez e o grupo vota no mais fofo — os dados arbitram a discussão mais antiga do fandom.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "Fofura é subjetiva, mas o sorteio é final — nada de re-sortear só porque na sua casa o padrão é Jigglypuff.",
            "Em runs só de fofos, defina o padrão antes de começar: só a primeira evolução? Menos de um metro? Peludo? O livro de regras importa.",
            "Evoluir sua escolha fofa é permitido — amar no que ela se transforma é o desafio avançado.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "Os dados te entregam um pássaro esférico que guincha, e sua produtividade dos próximos dez minutos foi embora. Agora você está olhando pelúcias. Não havia outro caminho possível.",
          linksTitle: "Quer mais boas vibrações?",
          linksTextBefore: "Experimente o",
          links: [
            { label: "gerador de míticos", href: "/mythical" },
            { label: "gerador de apelidos", href: "/nickname" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— raro e adorável é a melhor combinação.",
        },
      },
      mythical: {
        title: "Gerador aleatório de Pokémon míticos | PokeRoll",
        description:
          "Revele um Pokémon mítico aleatório como Mew, Celebi ou Jirachi — raridades de todas as gerações, prontos para copiar no Showdown. Ferramenta feita por fãs.",
        keywords: [
          "gerador de pokemon miticos aleatorio",
          "gerador de pokemon miticos",
        ],
        guide: {
          introTitle: "Por que sortear um Pokémon mítico?",
          intro:
            "Míticos são as raridades só de evento — Mew, Celebi, Jirachi e seus herdeiros, os Pokémon que gerações inteiras de jogadores nunca tiveram. Sorteie um e pegue emprestada um pouco dessa raridade para você.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Draft do time dos sonhos",
              d: "Sorteie seis míticos e monte a equipe de fantasia que você nunca conseguiria montar de verdade.",
            },
            {
              t: "Batalha de e se",
              d: "Sorteie um, copie no Showdown e teste se os esquivos são bons de verdade — alguns são, outros são Jirachi.",
            },
            {
              t: "Checklist de coleção",
              d: "Anote quais míticos os dados já te mostraram — um jeito lento e grátis de conhecer o conjunto inteiro.",
            },
            {
              t: "Ritual de sorte",
              d: "Um sorteio antes de sessões ranqueadas — puxar um mítico é um bom presságio, e superstição é grátis.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "Mítico e Lendário são clubes diferentes — o grupo dos míticos é só de distribuições de evento, e é isso que o torna especial.",
            "Em drafts de sonho, repetidos exigem re-sorteio; todo o resto vale como saiu.",
            "Lembre-se de que a maioria dos míticos divide o mesmo total de 600 — o truque deles está nos golpes e habilidades, não nas estatísticas.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "Os dados te entregam Jirachi, o realizador de desejos, veterano de exatamente um evento de fim de semana em 2003. Você nunca o capturou. Provavelmente nunca vai. Mas hoje, nesta página, o desejo foi atendido.",
          linksTitle: "Quer mais dados raros?",
          linksTextBefore: "Experimente o",
          links: [
            { label: "gerador de Lendários", href: "/legendary" },
            { label: "gerador de megas", href: "/mega" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— raridade vem em vários sabores.",
        },
      },
      mega: {
        title: "Gerador aleatório de mega Pokémon | PokeRoll",
        description:
          "Gire uma megaevolução ou reversão primitiva aleatória — veja suas estatísticas aumentadas e sua habilidade, depois copie o set no Showdown. Ferramenta gratuita feita por fãs.",
        keywords: [
          "gerador de mega pokemon aleatorio",
          "gerador de mega pokemon",
        ],
        guide: {
          introTitle: "Por que sortear uma megaevolução?",
          intro:
            "Megaevoluções e reversões primitivas são os «e se» mais barulhentos da franquia — transformações temporárias com estatísticas turbinadas, habilidades novas e designs que apostaram tudo. Sorteie uma e revisite a era em que qualquer coisa podia evoluir ainda mais.",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Meta do e se",
              d: "Sorteie uma Mega e julgue com honestidade: essa coisa ganharia um lugar numa equipe moderna?",
            },
            {
              t: "Decisor de draft",
              d: "Cada jogador sorteia uma Mega — o sorteio decide em torno de qual ás sua equipe é construída.",
            },
            {
              t: "Estudo de design",
              d: "Compare a Mega com a forma base e veja o que os designers amplificaram — uma aula de design grátis.",
            },
            {
              t: "Prompt de batalha",
              d: "Copie o set no Showdown e jogue o e se de verdade — a nostalgia bate mais forte com 150 de Ataque base.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "Uma Mega por equipe é a regra clássica por um motivo — seu sorteio é seu ás, então construa em volta dele, não ao lado.",
            "Primais contam como Megas para o grupo — combinem com o pessoal antes do primeiro sorteio.",
            "Julgue o pacote inteiro: +100 em estatísticas não significa nada se a habilidade trai os pontos fortes da forma base.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "Os dados te entregam Mega Beedrill — um canhão de vidro Bug/Poison com Adaptability e um sonho. Você tinha esquecido que ele existia. Agora está encaixando Fell Stinger na sua próxima equipe, que é exatamente para isso que este gerador serve.",
          linksTitle: "Quer mais transformações?",
          linksTextBefore: "Experimente o",
          links: [
            { label: "gerador de Lendários", href: "/legendary" },
            { label: "ferramenta de fusão", href: "/fusion" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— oficiais ou improvisados, híbridos são divertidos.",
        },
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
        guide: {
          introTitle: "Por que sortear um apelido?",
          intro:
            "Um apelido transforma uma espécie em um personagem. O gerador de apelidos junta um Pokémon aleatório a um nome que vale digitar — para Nuzlockes, jornadas e todo save file em que a equipe merece mais do que «GARCHOMP».",
          waysTitle: "Formas de jogar",
          ways: [
            {
              t: "Nomes de Nuzlocke",
              d: "As regras dizem que você precisa apelidar tudo — deixe o sorteio cuidar disso, e o apego vem de graça.",
            },
            {
              t: "Sabor de jornada",
              d: "Renomeie a equipe inteira com nomes sorteados — um save file temático lê como uma história.",
            },
            {
              t: "Jogo de festa",
              d: "Sorteie um Pokémon, todo mundo manda um apelido, o mais engraçado vence — o nome sorteado é o alvo a ser batido.",
            },
            {
              t: "Prompt de escrita",
              d: "Um Pokémon mais um nome é um esboço de personagem — escreva o treinador que o usaria.",
            },
          ],
          rulesTitle: "Defina suas regras antes de sortear",
          rules: [
            "O pacto do Nuzlocke: o primeiro nome sorteado é o final. O vínculo é o objetivo, e vínculos não se escolhem a dedo.",
            "Nomes temáticos aumentam a aposta — nomes de comida, de músicos, de constelações; escolha uma linha antes de a run começar.",
            "Honre os caídos: quando um Pokémon nomeado desmaia, o nome se aposenta junto. Esse é o coração do formato.",
          ],
          sampleTitle: "Um sorteio de exemplo",
          sample:
            "Rota 2, primeira captura, um pássaro comum — e os dados o batizam de Capitão Migalha. Ele vai sobreviver a três wipes de equipe, se aposentar como lenda e ser lembrado por mais tempo que a maioria dos Campeões. Esse é o poder de um bom nome.",
          linksTitle: "Vai nomear a equipe inteira?",
          linksTextBefore: "Sorteie o time primeiro no",
          links: [
            { label: "gerador de equipe aleatória", href: "/team/random" },
            { label: "gerador de números da Pokédex", href: "/number" },
          ],
          linksJoinOr: "ou",
          linksTextAfter: "— depois volte e dê nome a todos.",
        },
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
      guide: {
        introTitle: "Por que sortear um lendário?",
        intro:
          "Este grupo é só de lendas — os deuses das capas, os errantes, os trios. Todo sorteio cai num Pokémon que um dia exigiu um evento, uma caverna ou uma cutscene de 40 minutos para ser encontrado.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Time dos sonhos",
            d: "Sorteie seis lendários e monte a equipe que todo moleque de dez anos jurava ser imbatível.",
          },
          {
            t: "Draft de chefes",
            d: "Cada jogador sorteia três — o maior BST combinado vence, e o direito de se gabar dura a semana inteira.",
          },
          {
            t: "Batalha de e se",
            d: "Copie um lendário sorteado no Showdown e teste o mito — alguns deuses têm movesets bem mortais.",
          },
          {
            t: "Sorteio de coleção",
            d: "Um sorteio por dia até os dados te mostrarem todo lendário — a run de completar mais lenta e mais barata.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Vale o primeiro sorteio — um lendário que dá para re-sortear é só um Pokémon forte, e o mistério é o ponto.",
          "Lendário e Mítico são grupos diferentes: esta página mantém o clube exclusivo; os míticos moram ao lado.",
          "Em drafts, um re-sorteio por jogador, anunciado antes de os dados caírem — regras de casa mantêm os deuses honestos.",
        ],
        sampleTitle: "Um sorteio de exemplo",
        sample:
          "Um toque: Rayquaza, o deus dos céus, a run se escreve sozinha. Próximo toque: Regigigas, cuja Slow Start faz o deus passar cinco turnos como espectador. Lendas contêm multidões.",
        linksTitle: "Quer mais dados raros?",
        linksTextBefore: "Experimente o",
        links: [
          { label: "gerador de míticos", href: "/mythical" },
          { label: "caça shiny", href: "/challenge/shiny" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— raridade ao quadrado.",
      },
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
      guide: {
        introTitle: "Por que sortear uma aventura?",
        intro:
          "O modo aventura sorteia uma jornada inteira em um toque: um treinador, um inicial, uma equipe, um desafio e um objetivo, tudo amarrado a uma única seed. É um gerador de campanha — os dados escrevem a premissa, você joga a história.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Run de desafio instantânea",
            d: "Sorteie uma aventura e tome as regras dela como vinculantes — a equipe que ela te entrega é a equipe que a run permite.",
          },
          {
            t: "Calendário de desafios",
            d: "Sorteie uma aventura nova por semana e faça stream ou registre as tentativas — mesmo formato de seed, histórias comparáveis.",
          },
          {
            t: "Premissa cooperativa",
            d: "Compartilhe a seed com um amigo: aventura idêntica, jornadas separadas, corrida até o objetivo.",
          },
          {
            t: "Semente de história",
            d: "Use o treinador e o objetivo sorteados como tema de fanfic ou de RPG de mesa — os dados são surpreendentemente bons em ganchos de enredo.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Escolha a dificuldade antes de sortear, não depois de ver o resultado — escolher Extrema quando você já conhece a equipe é só negociar consigo mesmo.",
          "Uma aventura funciona porque é vinculante: no máximo um re-sorteio por run, e só antes de você capturar qualquer coisa.",
          "Compartilhe a seed, não prints — o link reproduz a aventura exata, o que torna corridas e comparações justas.",
        ],
        sampleTitle: "Uma aventura de exemplo",
        sample:
          "Uma única seed pode decretar: uma Lass de Hoenn, um Chimchar inicial, um desafio sem itens e o objetivo de vencer a liga com o nível abaixo. Você nunca teria montado essa run sozinho — e é exatamente por isso que vai se lembrar dela.",
        linksTitle: "Quer equipar a aventura?",
        linksTextBefore: "Arme a run com dados do",
        links: [
          { label: "gerador de equipe aleatória", href: "/team/random" },
          { label: "desafio de adivinhação", href: "/challenge/guess" },
          { label: "caça shiny", href: "/challenge/shiny" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— toda boa campanha precisa de missões secundárias.",
      },
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
      guide: {
        introTitle: "Por que testar sua memória da Pokédex?",
        intro:
          "O desafio de adivinhação é o teste mais puro de conhecimento da Pokédex: uma formação fixa, dicas que encolhem com a dificuldade e sua pontuação no final. A mesma seed para todo mundo — então as pontuações são genuinamente comparáveis.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Duelo diário",
            d: "Compartilhe a seed com um amigo e compare as pontuações — mesma formação, sem desculpas.",
          },
          {
            t: "Escada de dificuldade",
            d: "Comece no Fácil com dicas generosas, depois suba rumo ao Extremo, onde os sprites são ampliados e as dicas somem.",
          },
          {
            t: "Maratona de filtros",
            d: "Trave uma única geração ou tipo e prove que você conhece mesmo aquela fatia da dex — não só as partes famosas.",
          },
          {
            t: "Quiz de festa",
            d: "Leia os cards em voz alta numa chamada e corra para gritar a resposta — velocidade conta.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Escolha quantidade e dificuldade antes da primeira revelação — doze no Fácil e seis no Extremo são provas completamente diferentes.",
          "Nada de mudar os filtros no meio da rodada: uma rodada mono-Water e uma rodada com a dex inteira medem conhecimentos diferentes.",
          "Uma tentativa por seed é o formato honesto — a seed mantém a formação fixa, então uma segunda tentativa é só memorização.",
        ],
        sampleTitle: "Uma rodada de exemplo",
        sample:
          "Uma rodada no Difícil amplia uma espiral de casco azul-acinzentado. Cloyster? Omastar? Você aposta em Kabutops com total confiança, e a revelação diz... Shellder. Em algum lugar, um rival está rindo — e sua seed de revanche está a um toque de distância.",
        linksTitle: "Quer mais provas?",
        linksTextBefore: "Experimente o",
        links: [
          { label: "modo de card misterioso", href: "/no-names" },
          { label: "caça shiny", href: "/challenge/shiny" },
          { label: "modo aventura", href: "/adventure" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— dados diferentes, o mesmo direito de se gabar.",
      },
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
      guide: {
        introTitle: "Por que caçar um shiny?",
        intro:
          "A caça shiny simula a aposta mais antiga de Pokémon: encontro após encontro, esperando o brilho. Escolha uma dificuldade, clique pelo grupo de selvagens e veja quão fundo a caçada vai — as regras de garantia a mantêm honesta, mas nunca fácil.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Teste de sorte",
            d: "Comece uma caçada e veja em quantos encontros seu shiny aparece — abaixo das chances e você está quente, acima e o grupo te deve uma.",
          },
          {
            t: "Corra com um amigo",
            d: "Compartilhe a seed da caçada e corra até a revelação — quem tiver menos encontros vence, e o link prova.",
          },
          {
            t: "Treino de paciência",
            d: "Use a dificuldade Extrema como meditação: centenas de cliques, um brilho, sem atalhos.",
          },
          {
            t: "Quadro de stream",
            d: "Uma corrida de shiny ao vivo é conteúdo pronto — o chat escolhe a dificuldade, você fornece o desespero.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "A dificuldade é o jogo inteiro aqui: o Fácil garante um sorteio de garantia para que a primeira caçada sempre termine; os níveis mais altos fazem você merecer.",
          "Decida o que conta antes de começar — o primeiro shiny encerra a caçada, ou você está segurando até uma espécie específica?",
          "Compartilhe o link da revelação, não um print: ele abre direto no card encontrado, então ninguém consegue fingir um shiny de primeiro encontro.",
        ],
        sampleTitle: "Uma caçada de exemplo",
        sample:
          "Encontro 1: Pidgey. Encontro 47: Pidgey. Encontro 213: Pidgey. Você começa a questionar as chances, a seed, suas escolhas de vida — e então o encontro 214 brilha dourado. Todo caçador de verdade sabe exatamente como é isso.",
        linksTitle: "Quer manter a sequência?",
        linksTextBefore: "Experimente o",
        links: [
          { label: "desafio de adivinhação", href: "/challenge/guess" },
          { label: "modo aventura", href: "/adventure" },
          { label: "gerador de Pokémon aleatório", href: "/random-pokemon-generator" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— os dados nunca dormem.",
      },
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
      faqs: [
        {
          q: "Como uso esta equipe no Pokémon Showdown?",
          a: "Toque em Copy Sets abaixo da equipe (o botão com o selo Showdown) para copiar a equipe no formato de texto do Showdown. Depois abra play.pokemonshowdown.com/teambuilder, escolha Import/Export e cole o texto — cada set carrega com golpes, habilidade, item, natureza e EVs, pronto para batalhar ou ajustar.",
        },
      ],
      guide: {
        introTitle: "Por que manter uma equipe salva?",
        intro:
          "Sua equipe é onde os resultados aleatórios deixam de ser descartáveis. Todo card em que você toca Add to Team vem parar aqui — de qualquer gerador do site — então uma equipe vai se montando aos poucos a partir de sorteios de que você realmente gostou.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Coleção dos melhores",
            d: "Continue sorteando no gerador de equipes e adicione só os que valem a pena guardar — esta página vira seu hall da fama.",
          },
          {
            t: "Curadoria de draft",
            d: "Sorteie mais de seis, guarde os seis melhores aqui e corte o resto — seu próprio dia de draft particular.",
          },
          {
            t: "Preparação para o Showdown",
            d: "Quando os seis parecerem certos, exporte a equipe inteira com Copy Sets e cole direto no teambuilder do Showdown.",
          },
          {
            t: "Compartilhe a equipe",
            d: "O link de compartilhamento carrega sua formação exata — mande para um amigo e ele verá os mesmos seis, arte e tudo.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Uma equipe salva merece um tema. Não precisa ser competitiva — «só Pokémon que eu usaria de verdade numa jornada» já é um tema. «Um por geração» também, ou «nada acima de 500 de BST».",
          "Trate remoções como definitivas. Se você se pegar trocando o mesmo slot cinco vezes, aquele slot quer um papel diferente, não um Pokémon diferente.",
          "Seis é o limite clássico por uma razão: pequeno o bastante para que cada membro precise justificar seu lugar.",
        ],
        sampleTitle: "Uma equipe de exemplo",
        sample:
          "Uma equipe salva típica pode começar como «os seis que carregaram minha run de Emerald» — Swampert, Gardevoir, Aggron, Manectric, Altaria e um mula de HM que mereceu a aposentadoria. A página não julga; ela só lembra.",
        linksTitle: "Quer sangue novo?",
        linksTextBefore: "Sorteie novos candidatos no",
        links: [
          { label: "gerador de equipe aleatória", href: "/team/random" },
          { label: "Team Coach", href: "/team/coach" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— depois adicione os escolhidos de volta aqui.",
      },
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
        {
          q: "Como uso esta equipe no Pokémon Showdown?",
          a: "Toque em Copy Sets abaixo da equipe (o botão com o selo Showdown) para copiar a equipe no formato de texto do Showdown. Depois abra play.pokemonshowdown.com/teambuilder, escolha Import/Export e cole o texto — cada set carrega com golpes, habilidade, item, natureza e EVs, pronto para batalhar ou ajustar.",
        },
      ],
      guide: {
        introTitle: "Por que sortear uma equipe aleatória?",
        intro:
          "Uma equipe aleatória tira a paralisia de decisão da montagem de equipes. Em vez de rolar a Pokédex por uma hora, você recebe seis slots de bandeja — e é aí que a parte interessante começa: fazê-los funcionar juntos. Use o resultado como run de desafio, draft entre amigos, equipe de treino ou pura inspiração para sua próxima jornada.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Run de desafio",
            d: "Comprometa-se com os seis que sortear na sua próxima jornada — sem re-sorteios. Construa em volta do que saiu, incluindo a sobreposição de tipos estranha.",
          },
          {
            t: "Draft com amigos",
            d: "Compartilhe o link da página — a URL carrega a equipe exata, então todo mundo começa dos mesmos seis. Sorteie sua própria resposta, depois batalhe e compare.",
          },
          {
            t: "Treino no Showdown",
            d: "O Copy Sets te dá sets completos com golpes, itens e EVs. Cole no teambuilder do Showdown e suba no ladder com uma equipe que você não pensou demais.",
          },
          {
            t: "Build temática",
            d: "Trave um tipo, geração ou categoria nos filtros e sorteie dentro de uma restrição sua — uma equipe mono-Water, uma reunião da Gen 3, uma run só de Iniciais.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Uma equipe aleatória fica melhor quando as regras vêm primeiro. Lendários permitidos? Se não, abra os filtros e exclua a categoria antes de tocar no botão de sortear. Run mono-tipo? Trave o tipo. Só os jogos da sua infância? Trave a geração. Os filtros são seu livro de regras — defina uma vez e depois conviva com o que os dados disserem.",
          "No jogo casual, aceite uma sobreposição estranha como parte do desafio — três Pokémon dividindo uma fraqueza são um quebra-cabeça, não um bug. Num draft, combinem os bans com o grupo antes de qualquer sorteio. Numa run de história, permita-se um veto quando uma espécie simplesmente não pode ser capturada no seu jogo.",
          "O objetivo é uma equipe que você jogaria de verdade — não re-sortear até ela parecer perfeita.",
        ],
        sampleTitle: "Um sorteio de exemplo",
        sample:
          "Um toque pode te entregar Gengar, Donphan, Togekiss, Ferrothorn, Volcarona e Pelipper — uma equipe perfeitamente jogável, só que três deles caem para Rock. Essa fraqueza compartilhada é o desafio: você remenda com itens e golpes, ou assume e passa por cima de tudo na velocidade? O sorteio te dá uma restrição; o que você constrói em volta dela é o jogo.",
        linksTitle: "Quer um grupo mais enxuto?",
        linksTextBefore: "Sorteie dentro de uma única fatia da Pokédex — experimente o",
        links: [
          { label: "gerador da Gen 1", href: "/gen/1" },
          { label: "gerador do tipo Dragon", href: "/type/dragon" },
          { label: "gerador de Lendários", href: "/legendary" },
        ],
        linksJoinOr: "ou",
        linksTextAfter:
          "— depois volte e sorteie uma equipe inteira dentro da sua restrição favorita.",
      },
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
      faqs: [
        {
          q: "Como uso esta equipe no Pokémon Showdown?",
          a: "Toque em Copy Sets abaixo da equipe (o botão com o selo Showdown) para copiar a equipe no formato de texto do Showdown. Depois abra play.pokemonshowdown.com/teambuilder, escolha Import/Export e cole o texto — cada set carrega com golpes, habilidade, item, natureza e EVs, pronto para batalhar ou ajustar.",
        },
      ],
      guide: {
        introTitle: "Por que usar um técnico de equipe?",
        intro:
          "O Team Coach é para aquele momento em que você tem quatro Pokémon que ama e nenhuma ideia do que pertence aos dois últimos slots. Trave suas escolhas e ele preenche o resto com cobertura de tipos e papéis equilibrados — não apenas mais do que você já tem.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Complete um draft",
            d: "Travou seus favoritos? Deixe o técnico completar os seis com a cobertura que está faltando — depois re-sorteie só os slots de que não gostou.",
          },
          {
            t: "Corrija uma fraqueza",
            d: "Se sua equipe cai para um único tipo, trave os que ficam e gere — o técnico pesa a cobertura defensiva ao escolher.",
          },
          {
            t: "Aprenda a montar equipes",
            d: "Observe por que ele escolhe o que escolhe: toda sugestão vem com um motivo, o que é, discretamente, uma aula de teambuilding.",
          },
          {
            t: "Importe e refine",
            d: "Puxe sua equipe salva ou favoritos, corte os elos fracos e deixe o técnico testar substitutos.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Trave com honestidade. O técnico só consegue equilibrar em volta do que você dá a ele — trave os Pokémon aos quais você está realmente comprometido, não a lista de desejos inteira.",
          "Leia o motivo antes de re-sortear. «New coverage» e «tanky pivot» estão te dizendo o que faltava na sua equipe; se o mesmo motivo continua aparecendo, esse é o problema real do seu time.",
          "Um re-sorteio por slot é uma boa regra da casa — re-sorteios sem fim transformam o técnico num gerador aleatório lento.",
        ],
        sampleTitle: "Uma correção de exemplo",
        sample:
          "Trave Garchomp, Rotom-Wash e Corviknight e o técnico pode responder com um tipo Fire para o confronto contra Steel, um imune a Ground para a fraqueza compartilhada e um coringa «para nova cobertura» — exatamente a conversa que um bom companheiro de equipe teria com você.",
        linksTitle: "Quer um ponto de partida diferente?",
        linksTextBefore: "Sorteie uma equipe nova no",
        links: [
          { label: "gerador de equipe aleatória", href: "/team/random" },
          { label: "sua equipe salva", href: "/team" },
          { label: "Team Challenge", href: "/team/challenge" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— depois traga o resultado de volta aqui para finalizá-lo.",
      },
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
      faqs: [
        {
          q: "Como uso esta equipe no Pokémon Showdown?",
          a: "Toque em Copy Sets abaixo da equipe (o botão com o selo Showdown) para copiar a equipe no formato de texto do Showdown. Depois abra play.pokemonshowdown.com/teambuilder, escolha Import/Export e cole o texto — cada set carrega com golpes, habilidade, item, natureza e EVs, pronto para batalhar ou ajustar.",
        },
      ],
      guide: {
        introTitle: "Por que desafiar um amigo?",
        intro:
          "O Team Challenge transforma um sorteio aleatório em placar. A página gera uma equipe com seed, você compartilha o link e todo mundo que o abre enfrenta exatamente a mesma equipe — o BST total coroa o vencedor.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Duelo de amigos",
            d: "Compartilhe o link do desafio no grupo — cada um sorteia sua própria resposta à mesma equipe, e o maior BST leva a rodada.",
          },
          {
            t: "Quadro de stream",
            d: "Sorteie uma equipe de desafio ao vivo e deixe o chat tentar vencê-la — o link mantém todos honestos porque a equipe não pode mudar.",
          },
          {
            t: "Referência solo",
            d: "Vença seus próprios sorteios: mantenha a equipe de desafio fixa e re-sorteie o seu lado até superar o BST dela com uma equipe que você usaria de verdade.",
          },
          {
            t: "Desempate da noite de draft",
            d: "Use uma rodada de desafio para decidir quem escolhe primeiro — sem discussão, os números estão na página.",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Decidam o formato antes de compartilhar: um sorteio cada, ou melhor de três? A seed significa que o desafio em si é fixo — a única variável é o que você sorteia contra ele.",
          "O BST decide o vencedor aqui, mas regras da casa podem sobrepor: só respostas mono-tipo, nada de lendários na sua resposta, ou «menor BST vence» para uma rodada do caos.",
          "Exporte os dois lados para o Showdown depois, se quiser a resposta de verdade — BST é um placar, não um resultado de batalha.",
        ],
        sampleTitle: "Um desafio de exemplo",
        sample:
          "O desafio sorteia Blissey, Shedinja, Magikarp, Regidrago, Applin e Salamence — um total monstruoso carregado por três Pokémon de verdade e três piadas. Vença com seis medianos e você mereceu o direito de se gabar; perca para isso e vai ouvir falar do Magikarp a semana inteira.",
        linksTitle: "Quer mais jeitos de competir?",
        linksTextBefore: "Experimente o",
        links: [
          { label: "modo roleta", href: "/wheel" },
          { label: "desafio de adivinhação", href: "/challenge/guess" },
          { label: "gerador de equipe aleatória", href: "/team/random" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— mesmo dado, placar diferente.",
      },
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
      guide: {
        introTitle: "Por que girar uma roleta?",
        intro:
          "A roleta é o seletor aleatório mais honesto que existe: todo mundo vê o mesmo giro parar na mesma fatia. Alternem as vezes, acumulem os resultados e o maior BST leva a rodada — sem preparação, sem discutir com os dados.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "PK de festa",
            d: "De dois a seis jogadores, um giro cada — o maior BST vence a rodada. O perdedor escolhe a próxima aposta.",
          },
          {
            t: "Início de draft",
            d: "Gire seis vezes e anote cada resultado — essa é sua equipe para uma run de desafio, com repetições e tudo.",
          },
          {
            t: "Tomador de decisões",
            d: "Não consegue escolher um tipo para sua mono-run ou um jogo para a noite? Coloque as opções na roleta e deixe ela parar.",
          },
          {
            t: "Conteúdo de stream",
            d: "Uma roleta girando fica ótima na câmera — gire para seu próximo encontro, seu próximo companheiro de equipe ou sua próxima punição.",
          },
        ],
        rulesTitle: "Defina suas regras antes de girar",
        rules: [
          "Combinem a quantidade antes do primeiro giro: um giro cada, ou girar-até-gostar? Roletas são mais divertidas quando ninguém pode fazer lobby por um re-giro.",
          "Nas rodadas de PK, empates fazem parte do charme — decidam antes se os jogadores empatados giram o desempate ou dividem a coroa.",
          "Compartilhe o link da rodada quando terminar: a URL carrega os resultados, então o direito de se gabar do vencedor é verificável.",
        ],
        sampleTitle: "Uma rodada de exemplo",
        sample:
          "Seis giros depois, o placar mostra: um pseudo-lendário de 670 de BST, dois pássaros de rota inicial, um Magikarp — e a cara de convencido do seu amigo quando o último giro dele para em Arceus. A roleta dá — e o link da rodada prova.",
        linksTitle: "Quer estrutura em volta dos giros?",
        linksTextBefore: "Sorteie uma equipe inteira no",
        links: [
          { label: "gerador de equipe aleatória", href: "/team/random" },
          { label: "gerador de Pokémon aleatório", href: "/random-pokemon-generator" },
          { label: "gerador de Lendários", href: "/legendary" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— depois volte para girar o desempate.",
      },
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
      guide: {
        introTitle: "Por que fundir Pokémon?",
        intro:
          "O gerador de fusões responde à pergunta que toda Pokédex acaba fazendo: como esses dois ficariam como um só? Cada sorteio escolhe duas espécies aleatórias e mistura nome, tipagem e estatísticas num híbrido que não existe em nenhum outro lugar.",
        waysTitle: "Formas de jogar",
        ways: [
          {
            t: "Tema de arte",
            d: "Sorteie uma fusão e desenhe — o nome e a tipagem misturados são um briefing de design pronto.",
          },
          {
            t: "Adivinhe os pais",
            d: "Mostre o card da fusão, esconda o resultado e deixe os amigos adivinharem quais dois Pokémon a criaram.",
          },
          {
            t: "Dex personalizada",
            d: "Mantenha uma lista das suas fusões favoritas — depois de vinte sorteios, você tem o começo da Pokédex da sua própria região.",
          },
          {
            t: "E se... de batalha",
            d: "Copie o set da fusão para o Showdown e teorize: esse híbrido realmente mereceria um slot na equipe?",
          },
        ],
        rulesTitle: "Defina suas regras antes de sortear",
        rules: [
          "Julgue uma fusão pelos próprios méritos: as melhores são as que você desenharia ou usaria de verdade, não as de estatísticas mais altas.",
          "No adivinhe-os-pais, uma dica por adivinhador mantém o jogo andando — a tipagem é a dica clássica de graça.",
          "Re-sorteie à vontade até um par despertar algo; fusões são baratas, inspiração não.",
        ],
        sampleTitle: "Uma fusão de exemplo",
        sample:
          "Um sorteio pode fundir Gengar com Snorlax numa muralha Ghost/Normal com um nome que vai te fazer rir por uma semana — e então você se pega genuinamente pensando no EV spread dele. É quando uma fusão deixa de ser piada e começa a ser design.",
        linksTitle: "Quer matéria-prima melhor?",
        linksTextBefore: "Puxe novos pais de",
        links: [
          { label: "um gerador de Pokémon aleatório", href: "/random-pokemon-generator" },
          { label: "uma roleta", href: "/wheel" },
          { label: "um gerador de equipe aleatória", href: "/team/random" },
        ],
        linksJoinOr: "ou",
        linksTextAfter: "— depois funda os escolhidos.",
      },
    },
  },
};
