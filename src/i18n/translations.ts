import { Locale } from "./config";

export interface Dictionary {
  nav: {
    about: string;
    expertise: string;
    techStack: string;
    projects: string;
    contact: string;
    themeDark: string;
    themeLight: string;
    language: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    description: string;
    exploreBtn: string;
    contactBtn: string;
    availableText: string;
    metaTags: string;
  };
  terminal: {
    title: string;
    copy: string;
    copied: string;
    tabs: {
      whoami: string;
      uptime: string;
      profile: string;
      projects: string;
      status: string;
    };
    role: string;
    focusLabel: string;
    focusValue: string;
    uptimeDesc: string;
    statusText: string;
  };
  stats: {
    experienceValue: string;
    experienceLabel: string;
    experienceMeta: string;
    projectsValue: string;
    projectsLabel: string;
    projectsMeta: string;
    clientsValue: string;
    clientsLabel: string;
    clientsMeta: string;
  };
  about: {
    label: string;
    heading: string;
    subtitle: string;
    paragraphs: string[];
    specTitle: string;
    specIndex: string;
    specs: {
      locationLabel: string;
      locationValue: string;
      ageLabel: string;
      ageValue: string;
      expLabel: string;
      expValue: string;
      stacksLabel: string;
      stacksValue: string;
      specLabel: string;
      specValue: string;
      statusLabel: string;
      statusValue: string;
    };
  };
  expertise: {
    label: string;
    heading: string;
    subtitle: string;
    coreDomain: string;
    domains: Array<{
      id: string;
      number: string;
      title: string;
      summary: string;
      description: string;
      capabilities: string[];
      skills: string[];
    }>;
  };
  techStack: {
    label: string;
    heading: string;
    subtitle: string;
    scopeTitle: string;
    scopeIndex: string;
    primaryRole: string;
    specialization: string;
    uptimeLabel: string;
    uptimeValue: string;
  };
  projects: {
    label: string;
    heading: string;
    subtitle: string;
    viewCaseStudy: string;
    liveProject: string;
    sourceCode: string;
    backToProjects: string;
    backHome: string;
    statusShipped: string;
    statusActive: string;
    allProjectsHeading: string;
    allProjectsSubtitle: string;
    prevProject: string;
    nextProject: string;
    specificationsTitle: string;
    roleLabel: string;
    timelineLabel: string;
    categoryLabel: string;
    liveEndpointLabel: string;
    techUsedLabel: string;
    visitLiveBtn: string;
    overviewTitle: string;
    problemTitle: string;
    solutionTitle: string;
    featuresTitle: string;
    decisionsTitle: string;
  };
  approach: {
    label: string;
    heading: string;
    subtitle: string;
    phasePrefix: string;
    stageLabel: string;
    verifiedMethod: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    label: string;
    heading: string;
    subtitle: string;
    utcNote: string;
    remoteBadge: string;
  };
  footer: {
    rights: string;
    designedBy: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    returnHome: string;
    exploreProjects: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      expertise: "Expertise",
      techStack: "Tech Stack",
      projects: "Projects",
      contact: "Contact",
      themeDark: "Dark mode",
      themeLight: "Light mode",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      eyebrow: "Hello, I'm Temurmalik.",
      heading: "Full-Stack Developer.",
      subheading: "Focused on Backend & AI Engineering.",
      description:
        "I'm Temurmalik Abdullayev, a 17-year-old developer from Uzbekistan. I build reliable backend systems, modern web applications, and AI-powered products.",
      exploreBtn: "Explore Projects",
      contactBtn: "Contact",
      availableText: "Available for select engineering contracts",
      metaTags: "Uzbekistan · Backend · AI · Web Engineering"
    },
    terminal: {
      title: "temurmalik@portfolio: ~",
      copy: "Copy",
      copied: "Copied!",
      tabs: {
        whoami: "whoami",
        uptime: "uptime",
        profile: "profile.json",
        projects: "projects/",
        status: "status"
      },
      role: "Full-Stack Developer",
      focusLabel: "Focus",
      focusValue: "Backend & AI Engineering",
      uptimeDesc: "3 years continuous uptime (developer experience)",
      statusText: "Building reliable software & AI systems."
    },
    stats: {
      experienceValue: "3+",
      experienceLabel: "Years of Experience",
      experienceMeta: "Continuous development & shipping",
      projectsValue: "30+",
      projectsLabel: "Projects Completed",
      projectsMeta: "Full-stack apps, backends & bots",
      clientsValue: "5+",
      clientsLabel: "Real Clients",
      clientsMeta: "Businesses & product founders"
    },
    about: {
      label: "01 / About",
      heading: "Engineering with purpose.",
      subtitle:
        "Focused on resilient backend systems, scalable REST APIs, and practical AI implementations.",
      paragraphs: [
        "I'm Temurmalik Abdullayev, a 17-year-old software developer from Uzbekistan. For the past three years, I have immersed myself in backend architectures, database modeling, and modern web application development.",
        "Rather than chasing ephemeral front-end trends, my engineering mindset is grounded in fundamental server reliability: designing predictable API contracts, managing schema migrations with PostgreSQL and Prisma, implementing bulletproof validation with Zod, and securing session state.",
        "When developing user-facing products, I pair robust Node.js and TypeScript backends with fast, accessible React and Next.js interfaces. My recent engineering work also centers on practical artificial intelligence: incorporating Google Gemini models into developer education platforms and Telegram automation tools where AI solves tangible user bottlenecks."
      ],
      specTitle: "Profile Spec",
      specIndex: "v3.4",
      specs: {
        locationLabel: "Location",
        locationValue: "Uzbekistan",
        ageLabel: "Age",
        ageValue: "17 years old",
        expLabel: "Experience",
        expValue: "3+ years continuous",
        stacksLabel: "Primary Stacks",
        stacksValue: "Node.js · TS · React · PostgreSQL",
        specLabel: "Specialization",
        specValue: "Backend & AI Engineering",
        statusLabel: "Status",
        statusValue: "Available for contracts"
      }
    },
    expertise: {
      label: "02 / Expertise",
      heading: "Technical proficiencies.",
      subtitle:
        "Specialized capabilities refined across real application deployments, architectural challenges, and client deliverables.",
      coreDomain: "Core Domain",
      domains: [
        {
          id: "backend",
          number: "01",
          title: "Backend Engineering",
          summary: "APIs, authentication, database modeling, and backend architecture.",
          description:
            "Designing robust server-side systems with predictable data pipelines, clean REST endpoints, structured validation, and relational database schemas that remain resilient under real traffic.",
          capabilities: [
            "Relational schema design, indexes & data migrations",
            "Authentication patterns, JWT handling & session security",
            "Input sanitization, defensive error handling & rate limiting",
            "WebSocket streams & real-time bidirectional messaging"
          ],
          skills: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma ORM", "REST API", "JWT"]
        },
        {
          id: "fullstack",
          number: "02",
          title: "Full-Stack Development",
          summary: "Modern web apps, responsive interfaces, and end-to-end development.",
          description:
            "Building seamless digital products where the frontend matches backend semantics with zero friction. High-performance, accessible, and responsive across every device breakpoint.",
          capabilities: [
            "Component-driven architecture & strict TypeScript typings",
            "Mobile-first responsive layouts with fluid typography",
            "State management & clean client-server boundaries",
            "Core Web Vitals optimization & zero-layout-shift design"
          ],
          skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3"]
        },
        {
          id: "ai-integration",
          number: "03",
          title: "AI Integration",
          summary: "AI-enabled applications, intelligent automation, and model integration.",
          description:
            "Integrating practical artificial intelligence models directly into usable products. Building prompt pipelines, multimodal vision analysis, structured responses, and responsive conversational bots.",
          capabilities: [
            "Image parsing for nutrition & macro estimation in bots",
            "Contextual educational assistance & automated code hints",
            "Strict schema enforcement on LLM structured JSON outputs",
            "Low-latency streaming & error-tolerant fallback handling"
          ],
          skills: ["Gemini API", "Multimodal Vision", "Claude Code", "Cursor", "Antigravity", "Codex"]
        },
        {
          id: "infrastructure",
          number: "04",
          title: "Deployment & Infrastructure",
          summary: "Deployment workflows, server configuration, Git, CI/CD, and maintenance.",
          description:
            "Shipping software with disciplined reproducibility. Automated continuous delivery, environment variable management, server monitoring, and zero-downtime rollouts on modern cloud platforms.",
          capabilities: [
            "Continuous integration & automated deployment pipelines",
            "Vercel Edge & Serverless function configurations",
            "Railway container & PostgreSQL managed provisioning",
            "Production debugging, error logging & uptime monitoring"
          ],
          skills: ["Linux", "Docker", "Git", "GitHub", "Vercel", "Railway", "Postman"]
        }
      ]
    },
    techStack: {
      label: "Technical Foundation",
      heading: "Tech Stack",
      subtitle: "Technologies and tools I use to build reliable digital products.",
      scopeTitle: "Architecture Scope",
      scopeIndex: "Verified",
      primaryRole: "Full-Stack Developer",
      specialization: "Focused on Backend & AI Engineering",
      uptimeLabel: "Terminal Uptime",
      uptimeValue: "3+ years continuous"
    },
    projects: {
      label: "03 / Selected Work",
      heading: "Selected projects. Real products.",
      subtitle:
        "Three core production systems demonstrating backend engineering, full-stack architectures, and practical AI integrations.",
      viewCaseStudy: "View Case Study",
      liveProject: "Live Project",
      sourceCode: "Source Repository",
      backToProjects: "Back to all projects",
      backHome: "Back to Home",
      statusShipped: "Shipped",
      statusActive: "Active",
      allProjectsHeading: "Selected projects. Real products.",
      allProjectsSubtitle:
        "Deep dives into backend architecture, typed APIs, responsive web interfaces, and practical AI implementations.",
      prevProject: "Previous Project",
      nextProject: "Next Project",
      specificationsTitle: "Specifications",
      roleLabel: "My Role",
      timelineLabel: "Timeline / Year",
      categoryLabel: "Category",
      liveEndpointLabel: "Live Endpoint",
      techUsedLabel: "Technologies & Libraries",
      visitLiveBtn: "Visit Live System",
      overviewTitle: "Project Overview",
      problemTitle: "Problem & Engineering Goals",
      solutionTitle: "Solution & Implementation",
      featuresTitle: "Verified Production Features",
      decisionsTitle: "Key Technical Decisions"
    },
    approach: {
      label: "04 / Approach",
      heading: "Disciplined engineering rhythm.",
      subtitle: "A methodical workflow from problem definition to hardened production deployment.",
      phasePrefix: "Phase",
      stageLabel: "Stage",
      verifiedMethod: "Verified methodology",
      steps: [
        {
          step: "01",
          title: "Understand the problem",
          description:
            "Every project begins with a clear assessment of user requirements, data contracts, and core constraints. No speculative code or premature abstractions."
        },
        {
          step: "02",
          title: "Build a reliable solution",
          description:
            "Engineered with clean separation of concerns, strong typing, robust error boundaries, secure auth, and scalable database schemas."
        },
        {
          step: "03",
          title: "Test, deploy and refine",
          description:
            "Automated builds, rigorous manual QA, reproducible environments on Vercel/Railway, and disciplined post-launch monitoring."
        }
      ]
    },
    contact: {
      label: "05 / Contact",
      heading: "Let's build something great.",
      subtitle:
        "I'm open to discussing backend engineering contracts, full-stack product development, and practical AI integrations.",
      utcNote: "Operating from Uzbekistan (UTC+5)",
      remoteBadge: "● Responsive for remote collaboration worldwide"
    },
    footer: {
      rights: "All rights reserved.",
      designedBy: "Designed & engineered by Temurmalik."
    },
    notFound: {
      code: "404: RESOURCE_NOT_FOUND",
      title: "Route does not exist.",
      description:
        "The requested path could not be resolved by the server router. Please verify the URL or return to the main workstation.",
      returnHome: "Return Home",
      exploreProjects: "Explore Projects"
    }
  },
  uz: {
    nav: {
      about: "Haqida",
      expertise: "Yo‘nalishlar",
      techStack: "Texnologiyalar",
      projects: "Loyihalar",
      contact: "Bog‘lanish",
      themeDark: "Tungi rejim",
      themeLight: "Kunduzgi rejim",
      language: "Til",
      openMenu: "Menyuni ochish",
      closeMenu: "Menyuni yopish"
    },
    hero: {
      eyebrow: "Assalomu alaykum, men Temurmalik.",
      heading: "Full-Stack Dasturchi.",
      subheading: "Backend va AI Muhandisligiga ixtisoslashgan.",
      description:
        "Men Temurmalik Abdullayev — O‘zbekistondan 17 yoshli dasturchiman. Ishonchli backend tizimlari, zamonaviy veb-ilovalar va sun'iy intellektga asoslangan mahsulotlar yarataman.",
      exploreBtn: "Loyihalarni ko‘rish",
      contactBtn: "Bog‘lanish",
      availableText: "Yangi loyihalar va shartnomalar uchun ochiq",
      metaTags: "O‘zbekiston · Backend · AI · Veb Muhandislik"
    },
    terminal: {
      title: "temurmalik@portfolio: ~",
      copy: "Nusxalash",
      copied: "Nusxalandi!",
      tabs: {
        whoami: "whoami",
        uptime: "uptime",
        profile: "profile.json",
        projects: "projects/",
        status: "status"
      },
      role: "Full-Stack Dasturchi",
      focusLabel: "Yo‘nalish",
      focusValue: "Backend va AI Muhandisligi",
      uptimeDesc: "3 yil uzluksiz dasturlash tajribasi",
      statusText: "Ishonchli dasturiy ta'minot va AI tizimlari yaratilmoqda."
    },
    stats: {
      experienceValue: "3+",
      experienceLabel: "Yil Tajriba",
      experienceMeta: "Uzluksiz amaliyot va loyihalar",
      projectsValue: "30+",
      projectsLabel: "Tugallangan Loyihalar",
      projectsMeta: "Veb-ilovalar, backend va botlar",
      clientsValue: "5+",
      clientsLabel: "Real Mijozlar",
      clientsMeta: "Bizneslar va startap asoschilari"
    },
    about: {
      label: "01 / Haqida",
      heading: "Maqsadli va puxta muhandislik.",
      subtitle:
        "Ishonchli backend tizimlari, kengaytiriladigan REST API-lar va amaliy sun'iy intellekt integratsiyalari.",
      paragraphs: [
        "Men Temurmalik Abdullayev — O‘zbekistonda faoliyat yurituvchi 17 yoshli dasturchiman. So‘nggi uch yil davomida asosiy e'tiborimni backend arxitekturasi, ma'lumotlar bazalarini loyihalash va zamonaviy to‘liq sikldagi (full-stack) veb-ilovalarni ishlab chiqishga qaratdim.",
        "Vaqtinchalik trendlar ortidan quvish o‘rniga, mening muhandislik yondashuvim fundamental server barqarorligiga tayanadi: aniq REST API kontraktlari, PostgreSQL va Prisma orqali xavfsiz ma'lumotlar sxemalari, Zod orqali qat'iy tekshiruv va ishonchli sessiyalar xavfsizligi.",
        "Foydalanuvchilar bilan ishlovchi mahsulotlar yaratishda tezkor va xavfsiz Node.js hamda TypeScript backendini qulay React va Next.js interfeyslari bilan birlashtiraman. Shuningdek, so‘nggi ishlarimda Google Gemini va agentik AI modellarini ta'lim platformalari hamda Telegram ekotizimida real muammolarni hal qilish uchun muvaffaqiyatli qo‘lladim."
      ],
      specTitle: "Profil Ma'lumotlari",
      specIndex: "v3.4",
      specs: {
        locationLabel: "Manzil",
        locationValue: "O‘zbekiston",
        ageLabel: "Yosh",
        ageValue: "17 yoshda",
        expLabel: "Tajriba",
        expValue: "3+ yil uzluksiz",
        stacksLabel: "Asosiy Steklar",
        stacksValue: "Node.js · TS · React · PostgreSQL",
        specLabel: "Mutaxassislik",
        specValue: "Backend va AI Muhandisligi",
        statusLabel: "Holat",
        statusValue: "Shartnomalar uchun ochiq"
      }
    },
    expertise: {
      label: "02 / Yo‘nalishlar",
      heading: "Texnik yo‘nalishlar va salohiyat.",
      subtitle:
        "Real loyihalarni ishga tushirish, arxitekturaviy vazifalar va mijozlar talablari asosida shakllangan ko‘nikmalar.",
      coreDomain: "Asosiy Soha",
      domains: [
        {
          id: "backend",
          number: "01",
          title: "Backend Muhandisligi",
          summary: "API-lar, autentifikatsiya, ma'lumotlar modellari va backend arxitekturasi.",
          description:
            "Aniq ma'lumotlar oqimi, xavfsiz REST endpointlar, strukturali tekshiruv va real yuklamalarga chidamli relyatsion ma'lumotlar bazalari arxitekturasini loyihalash.",
          capabilities: [
            "Relyatsion sxemalar, indekslar va ma'lumotlar migratsiyasi",
            "Autentifikatsiya andozalari, JWT va sessiyalar xavfsizligi",
            "Ma'lumotlarni sanitizatsiya qilish, himoya va rate limiting",
            "WebSocket oqimlari va ikki tomonlama real-vaqt xabarlashuv"
          ],
          skills: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma ORM", "REST API", "JWT"]
        },
        {
          id: "fullstack",
          number: "02",
          title: "Full-Stack Dasturlash",
          summary: "Zamonaviy veb-ilovalar, moslashuvchan interfeyslar va to‘liq sikldagi ishlab chiqish.",
          description:
            "Foydalanuvchi interfeysi (UI) va backend semantikasi uzviy bog‘langan mukammal tizimlar yaratish. Har qanday qurilma ekraniga to‘liq moslashuvchan va yuqori tezlikdagi yechimlar.",
          capabilities: [
            "Komponentli arxitektura va qat'iy TypeScript tiplari",
            "Mobil qurilmalarga moslashuvchan dizayn va qulay shriftlar",
            "Holat boshqaruvi (state management) va toza kod bazasi",
            "Core Web Vitals optimallashtirish va tezkor sahifa yuklanishi"
          ],
          skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3"]
        },
        {
          id: "ai-integration",
          number: "03",
          title: "Sun'iy Intellekt Integratsiyasi",
          summary: "AI-ga asoslangan ilovalar, aqlli avtomatlashtirish va modellarni amaliy bog‘lash.",
          description:
            "Sun'iy intellekt imkoniyatlarini foydalanuvchilar ehtiyojlariga mos amaliy mahsulotlarga kiritish. Prompt tizimlari, multimodal rasm tahlili va aqlli botlar yaratish.",
          capabilities: [
            "Botlarda taom suratidan kaloriya va oziqa moddalarini aniqlash",
            "Dasturlash o‘rganuvchilar uchun kontekstual AI yordamchi",
            "LLM JSON formatidagi ma'lumotlarni qat'iy tekshirish",
            "Tezkor oqimli (streaming) javoblar va xatolarni qayta ishlash"
          ],
          skills: ["Gemini API", "Multimodal Vision", "Claude Code", "Cursor", "Antigravity", "Codex"]
        },
        {
          id: "infrastructure",
          number: "04",
          title: "DevOps va Infratuzilma",
          summary: "Server sozlamalari, Git, CI/CD jarayonlari va ishlab chiqarish qo‘llab-quvvatlovi.",
          description:
            "Dasturiy ta'minotni intizomli va uzluksiz yetkazib berish. Avtomatlashtirilgan CI/CD, konfiguratsiya nazorati va bulutli platformalarda uzluksiz server faoliyati.",
          capabilities: [
            "Uzluksiz integratsiya va avtomatik serverga yuklash (CI/CD)",
            "Vercel Edge va Serverless funksiyalarini sozlash",
            "Railway konteynerlari va PostgreSQL boshqaruvi",
            "Server xatolarini monitoring qilish va monitoring tizimlari"
          ],
          skills: ["Linux", "Docker", "Git", "GitHub", "Vercel", "Railway", "Postman"]
        }
      ]
    },
    techStack: {
      label: "Texnik Baza",
      heading: "Texnologiyalar",
      subtitle: "Ishonchli raqamli mahsulotlar yaratishda foydalanadigan texnologiyalar va vositalarim.",
      scopeTitle: "Arxitektura Doirasi",
      scopeIndex: "Tasdiqlangan",
      primaryRole: "Full-Stack Dasturchi",
      specialization: "Backend va AI Muhandisligiga ixtisoslashgan",
      uptimeLabel: "Uzluksiz Tajriba",
      uptimeValue: "3+ yil faol amaliyot"
    },
    projects: {
      label: "03 / Tanlangan Ishlar",
      heading: "Tanlangan loyihalar. Real mahsulotlar.",
      subtitle:
        "Backend muhandisligi, to‘liq sikldagi arxitektura va amaliy AI integratsiyasini aks ettiruvchi uchta asosiy loyiha.",
      viewCaseStudy: "Keysni ko‘rish",
      liveProject: "Loyiha sayti",
      sourceCode: "Manba kodi",
      backToProjects: "Barcha loyihalarga qaytish",
      backHome: "Bosh sahifaga",
      statusShipped: "Ishga tushirilgan",
      statusActive: "Faol",
      allProjectsHeading: "Tanlangan loyihalar. Real mahsulotlar.",
      allProjectsSubtitle:
        "Backend arxitekturasi, tiplangan API-lar, zamonaviy veb-interfeyslar va amaliy AI integratsiyalarining chuqur tahlili.",
      prevProject: "Oldingi loyiha",
      nextProject: "Keyingi loyiha",
      specificationsTitle: "Texnik Ko‘rsatkichlar",
      roleLabel: "Mening rolim",
      timelineLabel: "Yil / Muddat",
      categoryLabel: "Kategoriya",
      liveEndpointLabel: "Jonli havola",
      techUsedLabel: "Texnologiyalar va kutubxonalar",
      visitLiveBtn: "Jonli loyihaga o‘tish",
      overviewTitle: "Loyiha Haqida Umumiy Ma'lumot",
      problemTitle: "Muammo va Muhandislik Maqsadlari",
      solutionTitle: "Yechim va Amalga Oshirish",
      featuresTitle: "Ishga Tushirilgan Funksiyalar",
      decisionsTitle: "Asosiy Texnik Qarorlar"
    },
    approach: {
      label: "04 / Yondashuv",
      heading: "Puxta va tizimli ishlab chiqish.",
      subtitle: "Vazifani aniqlashdan tortib, ishlab chiqarishga xavfsiz topshirishgacha bo‘lgan aniq bosqichlar.",
      phasePrefix: "Bosqich",
      stageLabel: "Bosqich",
      verifiedMethod: "Tasdiqlangan metodologiya",
      steps: [
        {
          step: "01",
          title: "Muammoni chuqur tahlil qilish",
          description:
            "Har bir loyiha foydalanuvchi talablari, ma'lumotlar formati va texnik cheklovlarni aniq belgilashdan boshlanadi. Hech qanday taxminiy yoki ortiqcha kod yozilmaydi."
        },
        {
          step: "02",
          title: "Ishonchli va xavfsiz yechim qurish",
          description:
            "Modulli arxitektura, qat'iy tiplashtirish, mustahkam xatolarni ushlash chegaralari, xavfsiz avtorizatsiya va kengaytiriladigan ma'lumotlar bazasi sxemalari."
        },
        {
          step: "03",
          title: "Sinov, serverga joylashtirish va takomillashtirish",
          description:
            "Avtomatlashtirilgan testlar, qat'iy sifat nazorati, Vercel/Railway platformalarida uzluksiz ishlash va monitoring."
        }
      ]
    },
    contact: {
      label: "05 / Bog‘lanish",
      heading: "Keling, ajoyib loyiha yaratamiz.",
      subtitle:
        "Backend muhandislik shartnomalari, to‘liq sikldagi veb-mahsulotlar va AI integratsiyalari bo‘yicha takliflar uchun doimo ochiqman.",
      utcNote: "O‘zbekiston vaqt zonasi bo‘yicha (UTC+5)",
      remoteBadge: "● Butun dunyo bo‘ylab masofaviy hamkorlik uchun ochiq"
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      designedBy: "Temurmalik tomonidan loyihalangan va ishlab chiqilgan."
    },
    notFound: {
      code: "404: SAHIFA_TOPILMADI",
      title: "Sahifa mavjud emas.",
      description:
        "Siz qidirayotgan yo‘l server routeri tomonidan topilmadi. Havolani tekshiring yoki bosh sahifaga qayting.",
      returnHome: "Bosh sahifaga qaytish",
      exploreProjects: "Loyihalarni ko‘rish"
    }
  }
};
