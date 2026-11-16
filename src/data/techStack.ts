import { Locale } from "@/i18n/config";

export interface TechStackCategory {
  id: string;
  names: Partial<Record<Locale, string>> & { en: string; uz: string };
  shortLabels: Partial<Record<Locale, string>> & { en: string; uz: string };
  descriptions: Partial<Record<Locale, string>> & { en: string; uz: string };
  skills: string[];
}

export const techStackCategories: TechStackCategory[] = [
  {
    id: "frontend",
    names: {
      en: "Frontend",
      uz: "Frontend",
      ru: "Фронтенд",
      tr: "Ön Yüz (Frontend)",
      de: "Frontend",
      fr: "Front-end",
      es: "Frontend",
      it: "Frontend",
      pt: "Frontend",
      zh: "前端工程",
      ja: "フロントエンド",
      ar: "الواجهة الأمامية"
    },
    shortLabels: {
      en: "UI & Client Architecture",
      uz: "Interfeys va Klient Arxitekturasi",
      ru: "Интерфейсы и клиентская архитектура",
      tr: "Arayüz ve İstemci Mimarisi",
      de: "UI & Client-Architektur",
      fr: "UI & Architecture Client",
      es: "UI y Arquitectura Cliente",
      it: "UI & Architettura Client",
      pt: "UI e Arquitetura Cliente",
      zh: "UI 交互与客户端架构",
      ja: "UI & クライアント設計",
      ar: "واجهة المستخدم وبنية العميل"
    },
    descriptions: {
      en: "Modern component-driven web applications, responsive styling & reactive state",
      uz: "Komponentli zamonaviy veb-ilovalar, moslashuvchan dizayn va reaktiv holat boshqaruvi",
      ru: "Компонентные веб-приложения, адаптивная верстка и реактивное управление состоянием",
      tr: "Bileşen tabanlı modern web uygulamaları, duyarlı tasarım ve reaktif durum yönetimi",
      de: "Komponentenbasierte moderne Webanwendungen, responsives Styling & reaktives State-Management",
      fr: "Applications web basées sur des composants, design réactif et gestion d'état réactive",
      es: "Aplicaciones web modernas basadas en componentes, diseño responsivo y estado reactivo",
      it: "Applicazioni web a componenti, design reattivo e gestione dello stato",
      pt: "Aplicações web modernas em componentes, estilo responsivo e estado reativo",
      zh: "现代化组件驱动应用、全屏响应式适配及响应式状态机",
      ja: "コンポーネント指向Webアプリ、レスポンシブデザインと状態管理",
      ar: "تطبيقات ويب عصرية قائمة على المكونات، تصميم متجاوب وإدارة حالة تفاعلية"
    },
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux"
    ]
  },
  {
    id: "backend",
    names: {
      en: "Backend",
      uz: "Backend",
      ru: "Бэкенд",
      tr: "Arka Yüz (Backend)",
      de: "Backend",
      fr: "Back-end",
      es: "Backend",
      it: "Backend",
      pt: "Backend",
      zh: "后端服务",
      ja: "バックエンド",
      ar: "الواجهة الخلفية"
    },
    shortLabels: {
      en: "Server & Microservices",
      uz: "Server va Mikroservislar",
      ru: "Серверы и микросервисы",
      tr: "Sunucu ve Mikroservisler",
      de: "Server & Microservices",
      fr: "Serveur & Microservices",
      es: "Servidor y Microservicios",
      it: "Server & Microservizi",
      pt: "Servidor e Microsserviços",
      zh: "服务端与微服务",
      ja: "サーバー & マイクロサービス",
      ar: "الخوادم والخدمات المصغرة"
    },
    descriptions: {
      en: "Predictable API contracts, secure authentication & real-time messaging protocols",
      uz: "Ishonchli API kontraktlari, xavfsiz avtorizatsiya va real-vaqt xabarlashuv protokollari",
      ru: "Надежные контракты API, безопасная авторизация и протоколы обмена сообщениями в реальном времени",
      tr: "Öngörülebilir API sözleşmeleri, güvenli kimlik doğrulama ve gerçek zamanlı mesajlaşma",
      de: "Berechenbare API-Verträge, sichere Authentifizierung & Echtzeit-Messaging",
      fr: "Contrats d'API prévisibles, authentification sécurisée et messagerie en temps réel",
      es: "Contratos de API predecibles, autenticación segura y protocolos en tiempo real",
      it: "Contratti API affidabili, autenticazione sicura e protocolli real-time",
      pt: "Contratos de API previsíveis, autenticação segura e mensagens em tempo real",
      zh: "可预测的高可用 API、安全身份校验与实时全双工协议",
      ja: "明確なAPI設計、安全な認証認可、リアルタイム通信プロトコル",
      ar: "عقود برمجية متوقعة، مصادقة آمنة وبروتوكولات مراسلة فورية"
    },
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Telegram Bot API"
    ]
  },
  {
    id: "database",
    names: {
      en: "Database",
      uz: "Ma'lumotlar Bazasi",
      ru: "Базы Данных",
      tr: "Veri Tabanı",
      de: "Datenbanken",
      fr: "Bases de Données",
      es: "Bases de Datos",
      it: "Database",
      pt: "Bancos de Dados",
      zh: "数据持久化",
      ja: "データベース",
      ar: "قواعد البيانات"
    },
    shortLabels: {
      en: "Relational & Document Stores",
      uz: "Relyatsion va Hujjatli Bazalar",
      ru: "Реляционные и документные БД",
      tr: "İlişkisel ve Doküman Tabanlı",
      de: "Relationale & Dokumenten-Stores",
      fr: "Bases Relationnelles & Documents",
      es: "Almacenamiento Relacional y NoSQL",
      it: "Store Relazionali & Documentali",
      pt: "Bancos Relacionais e NoSQL",
      zh: "关系型与文档存储",
      ja: "RDBMS & ドキュメントDB",
      ar: "مخازن علائقية ومستندية"
    },
    descriptions: {
      en: "Data schemas, persistence layers, migrations & database administration",
      uz: "Ma'lumotlar sxemalari, SQL/NoSQL saqlash, xavfsiz migratsiyalar va boshqaruv",
      ru: "Схемы данных, слой персистентности, безопасные миграции и администрирование",
      tr: "Veri şemaları, kalıcılık katmanları, geçişler ve veri tabanı yönetimi",
      de: "Datenschemata, Persistenzebenen, Migrationen & Datenbankverwaltung",
      fr: "Schémas de données, couches de persistance, migrations et administration",
      es: "Esquemas de datos, capas de persistencia, migraciones y administración",
      it: "Schemi di dati, livelli di persistenza, migrazioni e amministrazione",
      pt: "Modelagem de esquemas, camadas de persistência, migrações e administração",
      zh: "数据模型定义、持久化架构、无损迁移及运维管理",
      ja: "データスキーマ設計、永続化レイヤー、マイグレーションと管理",
      ar: "مخططات البيانات، طبقات الاستدامة، الترحيل وإدارة الخوادم"
    },
    skills: [
      "PostgreSQL",
      "MongoDB",
      "pgAdmin"
    ]
  },
  {
    id: "devops",
    names: {
      en: "DevOps & Deployment",
      uz: "DevOps va Joylashtirish",
      ru: "DevOps и Развертывание",
      tr: "DevOps ve Dağıtım",
      de: "DevOps & Deployment",
      fr: "DevOps & Déploiement",
      es: "DevOps y Despliegue",
      it: "DevOps & Rilascio",
      pt: "DevOps e Implantação",
      zh: "DevOps 与云原生部署",
      ja: "DevOps & クラウドデプロイ",
      ar: "DevOps والنشر السحابي"
    },
    shortLabels: {
      en: "Cloud Infrastructure",
      uz: "Bulutli Infratuzilma",
      ru: "Облачная инфраструктура",
      tr: "Bulut Altyapısı",
      de: "Cloud-Infrastruktur",
      fr: "Infrastructure Cloud",
      es: "Infraestructura Cloud",
      it: "Infrastruttura Cloud",
      pt: "Infraestrutura Cloud",
      zh: "云原生基础设施",
      ja: "クラウドインフラ",
      ar: "البنية التحتية السحابية"
    },
    descriptions: {
      en: "Containerization, automated deployments, hosting & version control",
      uz: "Konteynerizatsiya, avtomatlashtirilgan CI/CD yetkazib berish va versiyalar nazorati",
      ru: "Контейнеризация, автоматизированный CI/CD деплой и контроль версий",
      tr: "Konteynerleştirme, otomatik dağıtım, barındırma ve sürüm kontrolü",
      de: "Containerisierung, automatisierte Deployments, Hosting & Versionskontrolle",
      fr: "Conteneurisation, déploiements automatisés, hébergement et contrôle de version",
      es: "Contenedores, despliegues automáticos, alojamiento y control de versiones",
      it: "Containerizzazione, deployment automatico, hosting e controllo versioni",
      pt: "Conteinerização, deploys automatizados, hospedagem e controle de versão",
      zh: "容器化编排、CI/CD 自动化流水线、弹性托管与版本管控",
      ja: "コンテナ化、自動デプロイ、ホスティング環境、バージョン管理",
      ar: "الحاويات، النشر المؤتمت، الاستضافة وإدارة الإصدارات"
    },
    skills: [
      "Linux",
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Railway"
    ]
  },
  {
    id: "tools",
    names: {
      en: "Development Tools",
      uz: "Dasturlash Vositalari",
      ru: "Инструменты Разработки",
      tr: "Geliştirme Araçları",
      de: "Entwicklungswerkzeuge",
      fr: "Outils de Développement",
      es: "Herramientas de Desarrollo",
      it: "Strumenti di Sviluppo",
      pt: "Ferramentas de Desenvolvimento",
      zh: "开发与测试工具",
      ja: "開発ツール",
      ar: "أدوات التطوير"
    },
    shortLabels: {
      en: "Engineering Workflow",
      uz: "Muhandislik Ish Jarayoni",
      ru: "Инженерный рабочий процесс",
      tr: "Geliştirici İş Akışı",
      de: "Entwicklungs-Workflow",
      fr: "Flux de Travail",
      es: "Flujo de Trabajo",
      it: "Workflow di Sviluppo",
      pt: "Fluxo de Trabalho",
      zh: "工程师工作流",
      ja: "開発ワークフロー",
      ar: "سير العمل الهندسي"
    },
    descriptions: {
      en: "API testing, code authoring, debugging & design collaboration",
      uz: "API testlash, kod yozish muhiti, nosozliklarni tuzatish va dizayn vositalari",
      ru: "Тестирование API, написание кода, отладка и дизайн-коллаборация",
      tr: "API testi, kod yazımı, hata ayıklama ve tasarım iş birliği",
      de: "API-Testing, Code-Erstellung, Debugging & Design-Kollaboration",
      fr: "Tests d'API, écriture de code, débogage et collaboration de conception",
      es: "Pruebas de API, edición de código, depuración y colaboración en diseño",
      it: "Test API, stesura del codice, debug e collaborazione sul design",
      pt: "Testes de API, escrita de código, depuração e colaboração de design",
      zh: "API 调试、现代编辑器、性能分析与设计协作工具",
      ja: "APIテスト、コーディング環境、デバッグ、デザイン協調",
      ar: "اختبار API، تحرير الكود، تصحيح الأخطاء والتصميم"
    },
    skills: [
      "Postman",
      "Visual Studio Code",
      "Figma"
    ]
  },
  {
    id: "ai",
    names: {
      en: "AI Integration & Intelligent Systems",
      uz: "Sun'iy Intellekt va Agent Tizimlari",
      ru: "Интеграция AI и Агентные Системы",
      tr: "Yapay Zekâ ve Ajan Sistemleri",
      de: "KI-Integration & Intelligente Systeme",
      fr: "Intégration d'IA & Systèmes Intelligents",
      es: "Integración de IA y Sistemas Inteligentes",
      it: "Integrazione AI & Sistemi Intelligenti",
      pt: "Integração de IA e Sistemas Inteligentes",
      zh: "AI 集成与智能代理系统",
      ja: "AIモデル統合 & インテリジェントシステム",
      ar: "تكامل الذكاء الاصطناعي والأنظمة الذكية"
    },
    shortLabels: {
      en: "Agentic Engineering",
      uz: "Agentli Dasturlash va Modellash",
      ru: "Агентная инженерия и LLM",
      tr: "Ajan Mühendisliği ve Modelleme",
      de: "Agentic Engineering & Modelle",
      fr: "Ingénierie d'Agents & Modèles",
      es: "Ingeniería de Agentes e IA",
      it: "Ingegneria di Agenti & Modelli",
      pt: "Engenharia de Agentes e Modelagem",
      zh: "AI 代理工程与大模型应用",
      ja: "AIエージェント工学 & 実装",
      ar: "هندسة الوكلاء الأذكياء والنماذج"
    },
    descriptions: {
      en: "Practical model integration, multimodal vision & autonomous AI developer tooling",
      uz: "Amaliy AI modellari integratsiyasi, multimodal ko‘rish va ilg‘or AI vositalari",
      ru: "Интеграция прикладных моделей, мультимодальное зрение и современные AI-инструменты",
      tr: "Pratik model entegrasyonu, çok modlu görsel algılama ve otonom AI araçları",
      de: "Praktische Modellintegration, multimodale Bilderkennung & moderne KI-Entwicklertools",
      fr: "Intégration pratique de modèles, vision multimodale et outils de développement IA",
      es: "Integración práctica de modelos, visión multimodal y herramientas avanzadas de IA",
      it: "Integrazione pratica di modelli, visione multimodale e strumenti avanzati di sviluppo AI",
      pt: "Integração prática de modelos, visão multimodal e ferramentas avançadas de IA",
      zh: "大模型落地、多模态视觉识别与现代化自主式 AI 研发辅助",
      ja: "実用モデル統合、マルチモーダル画像解析、自律型AI開発ツール群",
      ar: "تكامل النماذج العملي، الرؤية متعددة الوسائط وأدوات تطوير الذكاء الاصطناعي"
    },
    skills: [
      "Claude Code",
      "Cursor",
      "Antigravity",
      "ChatGPT",
      "Codex",
      "VSCode Copilot",
      "Google Gemini API",
      "Multimodal Vision"
    ]
  }
];

export const skillCategories = techStackCategories;
