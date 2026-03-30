/* ==============================================
   i18n — Translations (EN / PT)
   ============================================== */

const TRANSLATIONS = {
  en: {
    /* Sidebar */
    nav_title_navigation:   "Navigation",
    nav_main_page:          "Main Page",
    nav_experiences:        "Experiences",
    nav_portfolio:          "Portfolio",
    nav_title_profile:      "Profile",
    nav_languages:          "Languages",
    nav_courses:            "Courses",
    nav_trivia:             "Trivia",
    nav_title_contact:      "Contact",

    /* Top nav tabs */
    tab_main_page:          "Main Page",
    tab_talk:               "Talk",
    tab_read:               "Read",
    tab_view_source:        "View source",
    tab_view_history:       "View history",
    search_placeholder:     "Search Donk Wiki",

    /* Hero */
    site_sub:               "From Donk Wiki",
    quote_text:             "The Donklii is afraid of nothing!!",

    /* Table of contents */
    toc_contents:           "Contents",
    toc_experiences:        "Experiences",
    toc_portfolio:          "Portfolio",
    toc_languages:          "Languages",
    toc_courses:            "Courses",
    toc_trivia:             "Trivia",

    /* Intro */
    intro_p: `I'm a game programmer with practical and academic experience since 2023.
      I've shipped around 6 games across different scopes and mechanics, working as
      solo programmer or programming lead. I'm comfortable with multiple engines —
      <span class="destaque">Unreal Engine</span>, <span class="destaque">Godot</span>,
      <span class="destaque">Roblox Studio</span>, and <span class="destaque">Unity</span> —
      across 2D, 3D, and VR. I also handle audio direction, 3D animation, and 3D modeling
      when needed.`,

    /* Experiences section */
    section_experiences:    "Experiences &amp; Skills",
    h3_professional:        "Professional",
    exp_professional_li:    `<span class="cor-secundaria">FullStack Developer</span> at <span class="destaque">Net Soluções</span> (2026 – present).`,
    h3_game_dev:            "Game Development",
    exp_games_1:            `<span class="destaque">~6 games shipped</span> across different scopes and mechanics, since 2023.`,
    exp_games_2:            `Commonly works as <span class="cor-secundaria">solo programmer</span> or <span class="cor-secundaria">programming lead</span>.`,
    exp_games_3:            `Experience with <span class="destaque">Unreal Engine</span>, <span class="destaque">Godot</span>, <span class="destaque">Roblox Studio</span>, and <span class="destaque">Unity</span>.`,
    exp_games_4:            `Development across <span class="cor-secundaria">2D</span>, <span class="cor-secundaria">3D</span>, and <span class="cor-secundaria">VR</span>.`,
    exp_games_5:            `<span class="destaque">Sound design</span> and <span class="cor-secundaria">audio direction</span>.`,
    exp_games_6:            `<span class="destaque">3D modeling and animation</span>.`,
    exp_games_7:            `<span class="cor-secundaria">Photography</span> and <span class="destaque">filming</span> for game assets and presentations.`,

    /* Avatar / Infobox */
    avatar_title_bio:       "Biography",
    avatar_also_known:      "Also known as",
    avatar_affiliation:     "Affiliation",
    avatar_occupation:      "Occupation",
    avatar_occupation_val:  "Game Programmer / FullStack Dev",
    avatar_title_desc:      "Description",
    avatar_age:             "Age",
    avatar_lang_label:      "Languages",
    avatar_lang_val:        "English, Portuguese",
    avatar_nationality:     "Nationality",
    avatar_nationality_val: "Brazilian",
    avatar_location:        "Location",
    avatar_title_contact:   "Contact",
    avatar_email:           "Email",
    avatar_phone:           "Phone",
    avatar_discord:         "Discord",
    avatar_handle:          "Handle",

    /* Portfolio tab labels */
    tab_unreal:             "Unreal Engine",
    tab_godot:              "Godot",
    tab_roblox:             "Roblox",
    tab_github:             "GitHub",

    /* — Roblox tab — */
    roblox_title:           "My Experience with Roblox",
    roblox_intro:           `Over the years I've built solid familiarity with <span class="cor-secundaria">Roblox Studio</span> — my first and favority game engine.`,
    roblox_skibidi_h:       "SKIBIDI TOILETS: OBBY",
    roblox_skibidi_p:       `My <span class="cor-secundaria">first published game</span> on Roblox was this one. It's… not good. But it got finished — and that is very important.`,
    roblox_skibidi_platform:`Platform: <span class="destaque">Roblox</span>`,
    roblox_skibidi_role:    `Role: <span class="cor-secundaria">Solo programmer</span>`,
    roblox_skibidi_genre:   `Genre: <span class="destaque">Platformer</span>`,
    roblox_skibidi_play:    "▶ Play on Roblox",
    roblox_ryan_h:          "Ryan Gosling Tycoon",
    roblox_ryan_p:          `A much more ambitious project — coming soon. The idea is to relive iconic Ryan Gosling movies and stories — be him, literally.`,
    roblox_ryan_video:      "Presentation Video",
    roblox_morse_h:         "Morse Code (morse offline!!)",
    roblox_morse_p:         `A game made in <span class="cor-secundaria">4 hours</span> with no purpose whatsoever, in the middle of the night.`,
    roblox_morse_platform:  `Platform: <span class="destaque">Roblox</span>`,
    roblox_morse_time:      `Time: <span class="cor-secundaria">4 hours</span>`,
    roblox_morse_role:      `Role: <span class="cor-secundaria">Solo Programmer</span>`,
    roblox_morse_play:      "▶ Play on Roblox",

    /* — Godot tab — */
    godot_title:            "My Experience with Godot",
    godot_intro:            `I've spent around <span class="cor-secundaria">500 hours</span> in the <span class="cor-secundaria">Godot Engine</span>, mostly focused on <span class="destaque">2D programming</span> and <span class="destaque">audio implementation</span>.`,
    godot_func_h:           "Funcionário do Dia",
    godot_func_p:           `A <span class="cor-secundaria">memory game</span> inspired by old browser games — made in only 3 hours for a game jam, where I served as <span class="destaque">lead programmer</span>. You play as an overworked office employee trying to survive the day.`,
    godot_func_engine:      `Engine: <span class="destaque">Godot</span>`,
    godot_func_jam:         `Jam: <span class="destaque">3 hours</span>`,
    godot_func_role:        `Role: <span class="cor-secundaria">Lead Programmer</span>`,
    godot_func_genre:       `Genre: <span class="destaque">Puzzle</span>`,
    godot_func_theme:       `Jam theme: <span class="cor-secundaria">Air Conditioning</span>`,
    godot_func_play:        "▶ Play on itch.io",
    godot_polter_h:         "Poltermafia",
    godot_polter_p:         `A puzzle game made in one week for a game jam, built around the theme of <span class="destaque">possession</span>. I was the <span class="cor-secundaria">solo programmer</span>.`,
    godot_polter_engine:    `Engine: <span class="destaque">Godot</span>`,
    godot_polter_jam:       `Jam: <span class="destaque">1 week</span>`,
    godot_polter_role:      `Role: <span class="cor-secundaria">Solo Programmer</span>`,
    godot_polter_genre:     `Genre: <span class="destaque">Puzzle</span>`,
    godot_polter_theme:     `Jam theme: <span class="cor-secundaria">Possession</span>`,
    godot_arce_h:           "Arce Armorum",
    godot_arce_p1:          `A discontinued demo following a wizard searching for his magical staff, fighting living weapons that guard a castle. I handled all <span class="destaque">programming</span> and <span class="destaque">audio direction</span>; visuals were done by another team member.`,
    godot_arce_p2:          `The published version is <span class="cor-secundaria">not the latest build</span> — several improvements were made afterward but never released.`,
    godot_arce_caption:     `Trailer produced by a team member who also composed the <span class="destaque">music</span>.`,
    godot_arce_engine:      `Engine: <span class="destaque">Godot</span>`,
    godot_arce_genre:       `Genre: <span class="destaque">Metroidvania</span>`,
    godot_arce_role:        `Role: <span class="cor-secundaria">Programmer &amp; Audio Director</span>`,
    godot_arce_status:      `Status: <span class="cor-secundaria">Discontinued Demo</span>`,
    godot_arce_play:        "▶ View on itch.io",
    godot_other_h:          "Other Projects",
    godot_other_p1:         `I also worked on smaller projects as <span class="destaque">experiments</span> or for <span class="cor-secundaria">university coursework</span>.`,
    godot_other_p2:         `One example is an <span class="cor-secundaria">unnamed game</span> built to demonstrate <span class="destaque">AI concepts</span>, featuring:`,
    godot_other_li1:        `<span class="destaque">Pathfinding algorithms</span>`,
    godot_other_li2:        `<span class="destaque">Autonomous behaviors</span>`,
    godot_other_li3:        `<span class="destaque">Decision trees</span>`,
    godot_other_li4:        `<span class="destaque">Outcome simulation</span>`,
    godot_other_p3:         `The player has no direct control — the only interaction is choosing a <span class="destaque">buff</span> when leveling up; all <span class="cor-secundaria">NPCs make their own decisions</span>. The project is available on my <span class="destaque">GitHub</span>.`,

    /* — Unreal tab — */
    unreal_title:           "My Experience with Unreal Engine",
    unreal_intro:           `My Unreal Engine work has focused on <span class="cor-secundaria">3D development</span>, including jam projects where I operated as <span class="destaque">a solo or lead programmer.</span>`,
    unreal_lobo_h:          "Lobo Tomia",
    unreal_lobo_p:          `A puzzle/exploration game with a visual aesthetic inspired by <span class="cor-secundaria">This War of Mine</span>, made in one week for a game jam. I was the <span class="destaque">lead programmer</span>, responsible for core systems and the gameplay loop.`,
    unreal_lobo_engine:     `Engine: <span class="destaque">Unreal Engine</span>`,
    unreal_lobo_jam:        `Jam: <span class="destaque">1 week</span>`,
    unreal_lobo_role:       `Role: <span class="cor-secundaria">Lead Programmer</span>`,
    unreal_lobo_aesthetic:  `Aesthetic: <span class="destaque">This War of Mine</span>-inspired`,
    unreal_lobo_genre:      `Genre: <span class="destaque">Puzzle</span>`,
    unreal_lobo_theme:      `Jam theme: <span class="cor-secundaria">Curiosity</span>`,
    unreal_lobo_play:       "▶ View on itch.io",
    unreal_lobo_drive:      "📁 Latest version (Google Drive)",
    unreal_ossuario_h:      "Ossuário",
    unreal_ossuario_p:      `A <span class="cor-secundaria">VR puzzle game</span> made in one week for a game jam, built entirely in <span class="destaque">Unreal Engine</span>. I was the <span class="destaque">solo programmer</span>, responsible for VR interactions and puzzle mechanics.`,
    unreal_ossuario_engine: `Engine: <span class="destaque">Unreal Engine</span>`,
    unreal_ossuario_jam:    `Jam: <span class="destaque">1 week</span>`,
    unreal_ossuario_role:   `Role: <span class="cor-secundaria">Solo Programmer</span>`,
    unreal_ossuario_platform:`Platform: <span class="destaque">VR</span>`,
    unreal_ossuario_genre:  `Genre: <span class="destaque">Puzzle</span>`,
    unreal_ossuario_play:   "▶ View on itch.io",

    /* — GitHub tab — */
    github_title:           "My GitHub",
    github_p1:              `My <span class="cor-secundaria">GitHub</span> isn't the most active place. Since I work mostly on <span class="cor-secundaria">Roblox projects</span> — which are hosted on their own platform — I don't usually push much there.`,
    github_p2:              `Because I usually work solo, I tend to write code for myself and keep it clean enough to follow later rather than heavily commenting it.`,
    github_p3:              `That said, there is some public content: mostly <span class="cor-secundaria">university projects</span> and experiments with <span class="cor-secundaria">Godot</span> and web technologies.`,
    github_caption:         "Click the logo to check it out — if you're curious!",

    /* Languages section */
    section_prog_languages: "Programming Languages",

    /* Courses section */
    section_courses:        "Completed Courses",
    course_group_game:      "Game Design &amp; Development",
    course_1:               "Fundamentals of Digital Games",
    course_2:               "Digital Game Engines",
    course_3:               "Advanced Techniques for Digital Game Engines",
    course_4:               "Artificial Intelligence for Games",
    course_5:               "Audio and Soundtracks for Games",
    course_6:               "Game Mechanics and Balancing",
    course_7:               "Computer Graphics and Rendering",
    course_8:               `Level Design For Games <span class="in-progress">(in progress)</span>`,
    course_9:               "Introduction to Clowning",

    /* Trivia section */
    section_trivia:         "Trivia",
    trivia_1:               `My clown name used to be "Chupetinha"`,
    trivia_2:               "I really like Valve's games",
    trivia_3:               "Ryan Gosling Tycoon is the game I've spent the most time working on",
    trivia_4:               "I have an unfinished technical course in hardware",
    trivia_5:               "This page is inspired by the Barotrauma wiki :>",

    /* Footer */
    footer_edited:          "This page was last edited on 29 March 2026.",
    footer_rights:          "Content by Donklii. All rights reserved.",
    footer_about:           "About",
    footer_contact:         "Contact",
  },

  /* ============================================================ */

  pt: {
    /* Sidebar */
    nav_title_navigation:   "Navegação",
    nav_main_page:          "Página Principal",
    nav_experiences:        "Experiências",
    nav_portfolio:          "Portfólio",
    nav_title_profile:      "Perfil",
    nav_languages:          "Linguagens",
    nav_courses:            "Cursos",
    nav_trivia:             "Curiosidades",
    nav_title_contact:      "Contato",

    /* Top nav tabs */
    tab_main_page:          "Página Principal",
    tab_talk:               "Discussão",
    tab_read:               "Ler",
    tab_view_source:        "Ver código",
    tab_view_history:       "Ver histórico",
    search_placeholder:     "Pesquisar Donk Wiki",

    /* Hero */
    site_sub:               "Da Donk Wiki",
    quote_text:             "O Donklii não tem medo de nada!!",

    /* Table of contents */
    toc_contents:           "Conteúdo",
    toc_experiences:        "Experiências",
    toc_portfolio:          "Portfólio",
    toc_languages:          "Linguagens",
    toc_courses:            "Cursos",
    toc_trivia:             "Curiosidades",

    /* Intro */
    intro_p: `Sou um programador de jogos com experiência prática e acadêmica desde 2023.
      Lancei cerca de 6 jogos em diferentes escopos e mecânicas, atuando como
      programador solo ou líder de programação. Tenho familiaridade com múltiplas engines —
      <span class="destaque">Unreal Engine</span>, <span class="destaque">Godot</span>,
      <span class="destaque">Roblox Studio</span> e <span class="destaque">Unity</span> —
      em 2D, 3D e VR. Também cuido de direção de áudio, animação 3D e modelagem 3D
      quando necessário.`,

    /* Experiences section */
    section_experiences:    "Experiências &amp; Habilidades",
    h3_professional:        "Profissional",
    exp_professional_li:    `<span class="cor-secundaria">Desenvolvedor FullStack</span> na <span class="destaque">Net Soluções</span> (2026 – presente).`,
    h3_game_dev:            "Desenvolvimento de Jogos",
    exp_games_1:            `<span class="destaque">~6 jogos lançados</span> em diferentes escopos e mecânicas, desde 2023.`,
    exp_games_2:            `Atua comumente como <span class="cor-secundaria">programador solo</span> ou <span class="cor-secundaria">líder de programação</span>.`,
    exp_games_3:            `Experiência com <span class="destaque">Unreal Engine</span>, <span class="destaque">Godot</span>, <span class="destaque">Roblox Studio</span> e <span class="destaque">Unity</span>.`,
    exp_games_4:            `Desenvolvimento em <span class="cor-secundaria">2D</span>, <span class="cor-secundaria">3D</span> e <span class="cor-secundaria">VR</span>.`,
    exp_games_5:            `<span class="destaque">Design de som</span> e <span class="cor-secundaria">direção de áudio</span>.`,
    exp_games_6:            `<span class="destaque">Modelagem e animação 3D</span>.`,
    exp_games_7:            `<span class="cor-secundaria">Fotografia</span> e <span class="destaque">filmagem</span> para assets e apresentações de jogos.`,

    /* Avatar / Infobox */
    avatar_title_bio:       "Biografia",
    avatar_also_known:      "Também conhecido como",
    avatar_affiliation:     "Afiliação",
    avatar_occupation:      "Ocupação",
    avatar_occupation_val:  "Programador de Jogos / Dev FullStack",
    avatar_title_desc:      "Descrição",
    avatar_age:             "Idade",
    avatar_lang_label:      "Idiomas",
    avatar_lang_val:        "Inglês, Português",
    avatar_nationality:     "Nacionalidade",
    avatar_nationality_val: "Brasileiro",
    avatar_location:        "Localização",
    avatar_title_contact:   "Contato",
    avatar_email:           "E-mail",
    avatar_phone:           "Telefone",
    avatar_discord:         "Discord",
    avatar_handle:          "Arroba",

    /* Portfolio tab labels */
    tab_unreal:             "Unreal Engine",
    tab_godot:              "Godot",
    tab_roblox:             "Roblox",
    tab_github:             "GitHub",

    /* — Roblox tab — */
    roblox_title:           "Minha Experiência com Roblox",
    roblox_intro:           `Ao longo dos anos, construí familiaridade sólida com o <span class="cor-secundaria">Roblox Studio</span> — minha primeira e favorita game engine.`,
    roblox_skibidi_h:       "SKIBIDI TOILETS: OBBY",
    roblox_skibidi_p:       `Meu <span class="cor-secundaria">primeiro jogo publicado</span> no Roblox foi esse. Não é bom. Mas foi concluído — e isso é muito importante.`,
    roblox_skibidi_platform:`Plataforma: <span class="destaque">Roblox</span>`,
    roblox_skibidi_role:    `Função: <span class="cor-secundaria">Programador solo</span>`,
    roblox_skibidi_genre:   `Gênero: <span class="destaque">Platformer</span>`,
    roblox_skibidi_play:    "▶ Jogar no Roblox",
    roblox_ryan_h:          "Ryan Gosling Tycoon",
    roblox_ryan_p:          `Um projeto muito mais ambicioso — em breve. A ideia é reviver filmes e histórias icônicas do Ryan Gosling — ser ele, literalmente.`,
    roblox_ryan_video:      "Vídeo de Apresentação",
    roblox_morse_h:         "Código Morse (morse offline!!)",
    roblox_morse_p:         `Um jogo feito em <span class="cor-secundaria">4 horas</span> sem nenhum propósito específico, no meio da madrugada.`,
    roblox_morse_platform:  `Plataforma: <span class="destaque">Roblox</span>`,
    roblox_morse_time:      `Tempo: <span class="cor-secundaria">4 horas</span>`,
    roblox_morse_role:      `Função: <span class="cor-secundaria">Programador Solo</span>`,
    roblox_morse_play:      "▶ Jogar no Roblox",

    /* — Godot tab — */
    godot_title:            "Minha Experiência com Godot",
    godot_intro:            `Já investi cerca de <span class="cor-secundaria">500 horas</span> na <span class="cor-secundaria">Godot Engine</span>, com foco em <span class="destaque">programação 2D</span> e <span class="destaque">implementação de áudio</span>.`,
    godot_func_h:           "Funcionário do Dia",
    godot_func_p:           `Um <span class="cor-secundaria">jogo de memória</span> inspirado em jogos antigos de browser — feito em apenas 3 horas para uma game jam, onde atuei como <span class="destaque">programador líder</span>. O jogador assume o papel de um funcionário sobrecarregado tentando sobreviver ao dia.`,
    godot_func_engine:      `Engine: <span class="destaque">Godot</span>`,
    godot_func_jam:         `Jam: <span class="destaque">3 horas</span>`,
    godot_func_role:        `Função: <span class="cor-secundaria">Programador Líder</span>`,
    godot_func_genre:       `Gênero: <span class="destaque">Puzzle</span>`,
    godot_func_theme:       `Tema da jam: <span class="cor-secundaria">Ar-condicionado</span>`,
    godot_func_play:        "▶ Jogar no itch.io",
    godot_polter_h:         "Poltermafia",
    godot_polter_p:         `Um jogo de puzzle feito em uma semana para uma game jam, com o tema de <span class="destaque">possessão</span>. Fui o <span class="cor-secundaria">programador solo</span>.`,
    godot_polter_engine:    `Engine: <span class="destaque">Godot</span>`,
    godot_polter_jam:       `Jam: <span class="destaque">1 semana</span>`,
    godot_polter_role:      `Função: <span class="cor-secundaria">Programador Solo</span>`,
    godot_polter_genre:     `Gênero: <span class="destaque">Puzzle</span>`,
    godot_polter_theme:     `Tema da jam: <span class="cor-secundaria">Possessão</span>`,
    godot_arce_h:           "Arce Armorum",
    godot_arce_p1:          `Uma demo descontinuada sobre um mago em busca do seu cajado mágico, enfrentando armas vivas que guardam um castelo. Fui responsável por toda a <span class="destaque">programação</span> e <span class="destaque">direção de áudio</span>; os visuais foram feitos por outro membro da equipe.`,
    godot_arce_p2:          `A versão publicada <span class="cor-secundaria">não é a build mais recente</span> — várias melhorias foram feitas depois mas nunca lançadas.`,
    godot_arce_caption:     `Trailer produzido por um membro da equipe que também compôs a <span class="destaque">trilha sonora</span>.`,
    godot_arce_engine:      `Engine: <span class="destaque">Godot</span>`,
    godot_arce_genre:       `Gênero: <span class="destaque">Metroidvania</span>`,
    godot_arce_role:        `Função: <span class="cor-secundaria">Programador &amp; Diretor de Áudio</span>`,
    godot_arce_status:      `Status: <span class="cor-secundaria">Demo Descontinuada</span>`,
    godot_arce_play:        "▶ Ver no itch.io",
    godot_other_h:          "Outros Projetos",
    godot_other_p1:         `Também trabalhei em projetos menores como <span class="destaque">experimentos</span> ou para <span class="cor-secundaria">trabalhos da faculdade</span>.`,
    godot_other_p2:         `Um exemplo é um <span class="cor-secundaria">jogo sem nome</span> feito para demonstrar <span class="destaque">conceitos de IA</span>, com:`,
    godot_other_li1:        `<span class="destaque">Algoritmos de pathfinding</span>`,
    godot_other_li2:        `<span class="destaque">Comportamentos autônomos</span>`,
    godot_other_li3:        `<span class="destaque">Árvores de decisão</span>`,
    godot_other_li4:        `<span class="destaque">Simulação de resultados</span>`,
    godot_other_p3:         `O jogador não tem controle direto — a única interação é escolher um <span class="destaque">buff</span> ao subir de nível; todos os <span class="cor-secundaria">NPCs tomam suas próprias decisões</span>. O projeto está disponível no meu <span class="destaque">GitHub</span>.`,

    /* — Unreal tab — */
    unreal_title:           "Minha Experiência com Unreal Engine",
    unreal_intro:           `Meu trabalho com Unreal Engine focou em <span class="cor-secundaria">desenvolvimento 3D</span>, incluindo projetos de jam onde atuei como <span class="destaque">programador solo ou líder.</span>`,
    unreal_lobo_h:          "Lobo Tomia",
    unreal_lobo_p:          `Um jogo de puzzle/exploração com estética visual inspirada em <span class="cor-secundaria">This War of Mine</span>, feito em uma semana para uma game jam. Fui o <span class="destaque">programador líder</span>, responsável pelos sistemas principais e pelo loop de gameplay.`,
    unreal_lobo_engine:     `Engine: <span class="destaque">Unreal Engine</span>`,
    unreal_lobo_jam:        `Jam: <span class="destaque">1 semana</span>`,
    unreal_lobo_role:       `Função: <span class="cor-secundaria">Programador Líder</span>`,
    unreal_lobo_aesthetic:  `Estética: inspirada em <span class="destaque">This War of Mine</span>`,
    unreal_lobo_genre:      `Gênero: <span class="destaque">Puzzle</span>`,
    unreal_lobo_theme:      `Tema da jam: <span class="cor-secundaria">Curiosidade</span>`,
    unreal_lobo_play:       "▶ Ver no itch.io",
    unreal_lobo_drive:      "📁 Versão mais recente (Google Drive)",
    unreal_ossuario_h:      "Ossuário",
    unreal_ossuario_p:      `Um <span class="cor-secundaria">jogo de puzzle em VR</span> feito em uma semana para uma game jam, construído inteiramente em <span class="destaque">Unreal Engine</span>. Fui o <span class="destaque">programador solo</span>, responsável pelas interações VR e mecânicas de puzzle.`,
    unreal_ossuario_engine: `Engine: <span class="destaque">Unreal Engine</span>`,
    unreal_ossuario_jam:    `Jam: <span class="destaque">1 semana</span>`,
    unreal_ossuario_role:   `Função: <span class="cor-secundaria">Programador Solo</span>`,
    unreal_ossuario_platform:`Plataforma: <span class="destaque">VR</span>`,
    unreal_ossuario_genre:  `Gênero: <span class="destaque">Puzzle</span>`,
    unreal_ossuario_play:   "▶ Ver no itch.io",

    /* — GitHub tab — */
    github_title:           "Meu GitHub",
    github_p1:              `Meu <span class="cor-secundaria">GitHub</span> não é o lugar mais ativo. Como trabalho principalmente com <span class="cor-secundaria">projetos Roblox</span> — hospedados na própria plataforma — geralmente não publico muito por lá.`,
    github_p2:              `Como costumo trabalhar sozinho, escrevo código para mim mesmo e o mantenho limpo o suficiente para entender depois, sem comentários excessivos.`,
    github_p3:              `Dito isso, há algum conteúdo público: principalmente <span class="cor-secundaria">projetos da faculdade</span> e experimentos com <span class="cor-secundaria">Godot</span> e tecnologias web.`,
    github_caption:         "Clique no logo para conferir — se tiver curiosidade!",

    /* Languages section */
    section_prog_languages: "Linguagens de Programação",

    /* Courses section */
    section_courses:        "Cursos Concluídos",
    course_group_game:      "Design e Desenvolvimento de Jogos",
    course_1:               "Fundamentos de Jogos Digitais",
    course_2:               "Engines para Jogos Digitais",
    course_3:               "Técnicas Avançadas para Engines de Jogos Digitais",
    course_4:               "Inteligência Artificial para Jogos",
    course_5:               "Áudio e Trilhas Sonoras para Jogos",
    course_6:               "Mecânicas e Balanceamento de Jogos",
    course_7:               "Computação Gráfica e Renderização",
    course_8:               `Level Design para Jogos <span class="in-progress">(em andamento)</span>`,
    course_9:               "Introdução à Palhaçaria",

    /* Trivia section */
    section_trivia:         "Curiosidades",
    trivia_1:               `Meu nome de palhaço era "Chupetinha"`,
    trivia_2:               "Eu gosto muito dos jogos da Valve",
    trivia_3:               "Ryan Gosling Tycoon é o jogo que passei mais tempo desenvolvendo",
    trivia_4:               "Tenho um curso técnico de hardware inacabado",
    trivia_5:               "Esta página é inspirada na wiki do Barotrauma :>",

    /* Footer */
    footer_edited:          "Esta página foi editada pela última vez em 29 de março de 2026.",
    footer_rights:          "Conteúdo por Donklii. Todos os direitos reservados.",
    footer_about:           "Sobre",
    footer_contact:         "Contato",
  }
};

/* ==============================================
   Engine
   ============================================== */

var currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'en';

function applyTranslations(lang) {
  var t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
      el.setAttribute('aria-label', t[key]);
    }
  });

  var btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'PT' : 'EN';

  currentLang = lang;
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

function toggleLanguage() {
  applyTranslations(currentLang === 'en' ? 'pt' : 'en');
}

document.addEventListener('DOMContentLoaded', function () {
  applyTranslations(currentLang);
});
