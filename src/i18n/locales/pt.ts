import { Dictionary } from "../types";

export const pt: Dictionary = {
  nav: {
    about: "Sobre mim",
    expertise: "Especialidades",
    techStack: "Stack Tecnológica",
    projects: "Projetos",
    contact: "Contato",
    themeDark: "Modo escuro",
    themeLight: "Modo claro",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu"
  },
  hero: {
    eyebrow: "Olá, eu sou o Temurmalik.",
    heading: "Desenvolvedor Full-Stack.",
    subheading: "Especializado em Backend & Engenharia de IA.",
    description:
      "Sou Temurmalik Abdullayev, desenvolvedor de 17 anos do Uzbequistão. Construo sistemas backend confiáveis, aplicações web modernas e produtos alimentados por IA.",
    exploreBtn: "Explorar Projetos",
    contactBtn: "Contato",
    availableText: "Disponível para contratos selecionados de engenharia",
    metaTags: "Uzbequistão · Backend · IA · Engenharia Web"
  },
  terminal: {
    title: "temurmalik@portfolio: ~",
    copy: "Copiar",
    copied: "Copiado!",
    tabs: {
      whoami: "whoami",
      uptime: "uptime",
      profile: "profile.json",
      projects: "projects/",
      status: "status"
    },
    role: "Desenvolvedor Full-Stack",
    focusLabel: "Foco",
    focusValue: "Engenharia Backend & IA",
    uptimeDesc: "3 anos de experiência contínua em desenvolvimento",
    statusText: "Construindo software confiável e sistemas de inteligência artificial."
  },
  stats: {
    experienceValue: "3+",
    experienceLabel: "Anos de Experiência",
    experienceMeta: "Desenvolvimento e entregas contínuas",
    projectsValue: "30+",
    projectsLabel: "Projetos Concluídos",
    projectsMeta: "Aplicações web, backends e bots",
    clientsValue: "5+",
    clientsLabel: "Clientes Reais",
    clientsMeta: "Empresas e fundadores de produtos"
  },
  about: {
    label: "01 / Sobre mim",
    heading: "Engenharia com propósito claro.",
    subtitle:
      "Focado em sistemas backend resilientes, APIs REST escaláveis e implementações práticas de IA.",
    paragraphs: [
      "Sou Temurmalik Abdullayev, desenvolvedor de software de 17 anos baseado no Uzbequistão. Nos últimos três anos, mergulhei profundamente em arquiteturas backend, modelagem de dados e desenvolvimento web moderno.",
      "Em vez de seguir tendências efêmeras no front-end, minha mentalidade se apoia na solidez do servidor: definição clara de contratos de API, migrações com PostgreSQL e Prisma, validações estritas com Zod e sessões seguras.",
      "Ao construir produtos para usuários, combino backends robustos em Node.js e TypeScript com interfaces React e Next.js velozes e acessíveis. Também incorporo inteligência artificial prática, como modelos Google Gemini, em plataformas educacionais e automações no Telegram."
    ],
    specTitle: "Especificações do Perfil",
    specIndex: "v3.4",
    specs: {
      locationLabel: "Localização",
      locationValue: "Uzbequistão",
      ageLabel: "Idade",
      ageValue: "17 anos",
      expLabel: "Experiência",
      expValue: "3+ anos ininterruptos",
      stacksLabel: "Stacks Principais",
      stacksValue: "Node.js · TS · React · PostgreSQL",
      specLabel: "Especialização",
      specValue: "Engenharia Backend & IA",
      statusLabel: "Status",
      statusValue: "Disponível para contratos"
    }
  },
  expertise: {
    label: "02 / Áreas de Domínio",
    heading: "Competências técnicas fundamentais.",
    subtitle:
      "Habilidades aprimoradas através de lançamentos reais em produção, desafios arquiteturais e entregas a clientes.",
    coreDomain: "Domínio Principal",
    domains: [
      {
        id: "backend",
        number: "01",
        title: "Engenharia Backend",
        summary: "APIs, autenticação, modelagem de dados e arquitetura de servidores.",
        description:
          "Construção de sistemas robustos no lado do servidor com pipelines de dados consistentes, endpoints REST seguros e bancos relacionais preparados para tráfego real.",
        capabilities: [
          "Modelagem de esquemas relacionais, índices e migrações de dados",
          "Padrões de autenticação, gerenciamento de JWT e segurança de sessões",
          "Sanitização de inputs, tratamento defensivo de falhas e rate limiting",
          "Streams de WebSocket e comunicação bidirecional em tempo real"
        ],
        skills: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma ORM", "REST API", "JWT"]
      },
      {
        id: "fullstack",
        number: "02",
        title: "Desenvolvimento Full-Stack",
        summary: "Aplicações web modernas, interfaces responsivas e fluxo completo.",
        description:
          "Criação de produtos digitais integrados onde o front-end se alinha sem atrito com a semântica do back-end. Alta performance e acessibilidade em qualquer tela.",
        capabilities: [
          "Arquitetura baseada em componentes e tipagem estrita com TypeScript",
          "Layouts responsivos Mobile-First com tipografia fluida",
          "Gerenciamento de estado e divisão limpa entre cliente e servidor",
          "Otimização de Core Web Vitals e eliminação de saltos de layout"
        ],
        skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3"]
      },
      {
        id: "ai-integration",
        number: "03",
        title: "Integração de IA",
        summary: "Aplicações potencializadas por IA, automações inteligentes e modelos.",
        description:
          "Incorporação prática de modelos de inteligência artificial em produtos reais: pipelines de prompts, visão computacional multimodal e chatbots inteligentes.",
        capabilities: [
          "Análise visual para cálculo nutricional e calorias em bots",
          "Suporte educacional contextual e dicas automáticas de código",
          "Validação estrita de esquemas em saídas estruturadas JSON de LLMs",
          "Streaming de baixa latência e tratamento de contingências tolerante a falhas"
        ],
        skills: ["Gemini API", "Multimodal Vision", "Claude Code", "Cursor", "Antigravity", "Codex"]
      },
      {
        id: "infrastructure",
        number: "04",
        title: "Implantação & Infraestrutura",
        summary: "Processos de deploy, configuração de servidores, Git, CI/CD e suporte.",
        description:
          "Entrega de software de forma contínua e reproduzível: automação de CI/CD, gestão de variáveis de ambiente e hospedagem moderna sem interrupções.",
        capabilities: [
          "Pipelines de integração e entrega contínua (CI/CD)",
          "Configuração de funções Edge e Serverless na Vercel",
          "Provisionamento de containers Railway e bancos PostgreSQL",
          "Registro de erros em produção e monitoramento de estabilidade"
        ],
        skills: ["Linux", "Docker", "Git", "GitHub", "Vercel", "Railway", "Postman"]
      }
    ]
  },
  techStack: {
    label: "Fundação Técnica",
    heading: "Stack Tecnológica",
    subtitle: "Tecnologias e ferramentas que utilizo para construir produtos digitais de alta confiabilidade.",
    scopeTitle: "Escopo de Arquitetura",
    scopeIndex: "Verificado",
    primaryRole: "Desenvolvedor Full-Stack",
    specialization: "Especializado em Backend & Engenharia de IA",
    uptimeLabel: "Tempo de Atuação",
    uptimeValue: "3+ anos ininterruptos"
  },
  projects: {
    label: "03 / Projetos em Destaque",
    heading: "Projetos selecionados. Produtos reais.",
    subtitle:
      "Três sistemas centrais em produção demonstrando engenharia backend, arquiteturas full-stack e integrações reais de IA.",
    viewCaseStudy: "Ver estudo de caso",
    liveProject: "Projeto ao vivo",
    sourceCode: "Repositório",
    backToProjects: "Voltar aos projetos",
    backHome: "Voltar ao início",
    statusShipped: "Lançado",
    statusActive: "Ativo",
    allProjectsHeading: "Projetos selecionados. Produtos reais.",
    allProjectsSubtitle:
      "Análises aprofundadas sobre arquitetura backend, APIs tipadas, interfaces web responsivas e soluções práticas de inteligência artificial.",
    prevProject: "Projeto anterior",
    nextProject: "Próximo projeto",
    specificationsTitle: "Especificações",
    roleLabel: "Minha Função",
    timelineLabel: "Período / Ano",
    categoryLabel: "Categoria",
    liveEndpointLabel: "Link ativo",
    techUsedLabel: "Tecnologias & Bibliotecas",
    visitLiveBtn: "Acessar sistema",
    overviewTitle: "Visão Geral do Projeto",
    problemTitle: "Problema & Objetivos",
    solutionTitle: "Solução & Implementação",
    featuresTitle: "Recursos Validados",
    decisionsTitle: "Decisões Técnicas Chave"
  },
  approach: {
    label: "04 / Metodologia",
    heading: "Ritmo disciplinado de engenharia.",
    subtitle: "Um processo metódico que vai do diagnóstico do problema até a entrada estável em produção.",
    phasePrefix: "Fase",
    stageLabel: "Etapa",
    verifiedMethod: "Metodologia comprovada",
    steps: [
      {
        step: "01",
        title: "Compreender o problema",
        description:
          "Cada projeto se inicia com uma avaliação realista das necessidades dos usuários, formatos de dados e restrições fundamentais."
      },
      {
        step: "02",
        title: "Construir uma solução sólida",
        description:
          "Separação clara de responsabilidades, tipagem estrita, isolamento de erros e esquemas de dados prontos para escala."
      },
      {
        step: "03",
        title: "Testar, implantar e evoluir",
        description:
          "Builds automatizados, controle de qualidade rigoroso, ambientes estáveis na Vercel/Railway e monitoramento contínuo."
      }
    ]
  },
  contact: {
    label: "05 / Contato",
    heading: "Vamos construir algo extraordinário.",
    subtitle:
      "Estou disponível para avaliar contratos de engenharia backend, desenvolvimento de produtos full-stack e implementações de IA.",
    utcNote: "Operando a partir do Uzbequistão (UTC+5)",
    remoteBadge: "● Disponível para trabalho remoto com equipes de todo o mundo"
  },
  footer: {
    rights: "Todos os direitos reservados.",
    designedBy: "Projetado e desenvolvido por Temurmalik."
  },
  notFound: {
    code: "404: PÁGINA_NÃO_ENCONTRADA",
    title: "A rota solicitada não existe.",
    description:
      "O endereço informado não pôde ser localizado pelo servidor. Verifique o link ou retorne à página inicial.",
    returnHome: "Voltar ao início",
    exploreProjects: "Explorar projetos"
  }
};
