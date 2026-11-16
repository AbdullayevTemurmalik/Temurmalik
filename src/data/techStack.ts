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
      zh: "前端工程",
      es: "Frontend",
      fr: "Front-end",
      ja: "フロントエンド",
      de: "Frontend",
      it: "Frontend",
      ko: "프론트엔드",
      tr: "Ön Yüz (Frontend)",
      ar: "الواجهة الأمامية"
    },
    shortLabels: {
      en: "UI & Client Architecture",
      uz: "Interfeys va Klient Arxitekturasi",
      ru: "Интерфейсы и клиентская архитектура",
      zh: "UI 交互与客户端架构",
      es: "UI y Arquitectura Cliente",
      fr: "UI & Architecture Client",
      ja: "UI & クライアント設計",
      de: "UI & Client-Architektur",
      it: "UI & Architettura Client",
      ko: "UI & 클라이언트 아키텍처",
      tr: "Arayüz ve İstemci Mimarisi",
      ar: "واجهة المستخدم وبنية العميل"
    },
    descriptions: {
      en: "Modern component-driven web applications, responsive styling & reactive state",
      uz: "Komponentli zamonaviy veb-ilovalar, moslashuvchan dizayn va reaktiv holat boshqaruvi",
      ru: "Компонентные веб-приложения, адаптивная верстка и реактивное управление состоянием",
      zh: "现代化组件驱动应用、全屏响应式适配及响应式状态机",
      es: "Aplicaciones web modernas basadas en componentes, diseño responsivo y estado reactivo",
      fr: "Applications web basées sur des composants, design réactif et gestion d'état réactive",
      ja: "コンポーネント指向Webアプリ、レスポンシブデザインと状態管理",
      de: "Komponentenbasierte moderne Webanwendungen, responsives Styling & reaktives State-Management",
      it: "Applicazioni web a componenti, design reattivo e gestione dello stato",
      ko: "컴포넌트 기반 최신 웹 애플리케이션, 반응형 스타일링 및 상태 관리",
      tr: "Bileşen tabanlı modern web uygulamaları, duyarlı tasarım ve reaktif durum yönetimi",
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
      zh: "后端服务",
      es: "Backend",
      fr: "Back-end",
      ja: "バックエンド",
      de: "Backend",
      it: "Backend",
      ko: "백엔드",
      tr: "Arka Yüz (Backend)",
      ar: "الواجهة الخلفية"
    },
    shortLabels: {
      en: "Server & Microservices",
      uz: "Server va Mikroservislar",
      ru: "Серверы и микросервисы",
      zh: "服务端与微服务",
      es: "Servidor y Microservicios",
      fr: "Serveur & Microservices",
      ja: "サーバー & マイクロサービス",
      de: "Server & Microservices",
      it: "Server & Microservizi",
      ko: "서버 & 마이크로서비스",
      tr: "Sunucu ve Mikroservisler",
      ar: "الخوادم والخدمات المصغرة"
    },
    descriptions: {
      en: "Predictable API contracts, secure authentication & real-time messaging protocols",
      uz: "Ishonchli API kontraktlari, xavfsiz avtorizatsiya va real-vaqt xabarlashuv protokollari",
      ru: "Надежные контракты API, безопасная авторизация и протоколы обмена сообщениями в реальном времени",
      zh: "可预测的高可用 API、安全身份校验与实时全双工协议",
      es: "Contratos de API predecibles, autenticación segura y protocolos en tiempo real",
      fr: "Contrats d'API prévisibles, authentification sécurisée et messagerie en temps réel",
      ja: "明確なAPI設計、安全な認証認可、リアルタイム通信プロトコル",
      de: "Berechenbare API-Verträge, sichere Authentifizierung & Echtzeit-Messaging",
      it: "Contratti API affidabili, autenticazione sicura e protocolli real-time",
      ko: "예측 가능한 API 규격, 안전한 인증 체계 및 실시간 통신 프로토콜",
      tr: "Öngörülebilir API sözleşmeleri, güvenli kimlik doğrulama ve gerçek zamanlı mesajlaşma",
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
      zh: "数据持久化",
      es: "Bases de Datos",
      fr: "Bases de Données",
      ja: "データベース",
      de: "Datenbanken",
      it: "Database",
      ko: "데이터베이스",
      tr: "Veri Tabanı",
      ar: "قواعد البيانات"
    },
    shortLabels: {
      en: "Relational & Document Stores",
      uz: "Relyatsion va Hujjatli Bazalar",
      ru: "Реляционные и документные БД",
      zh: "关系型与文档存储",
      es: "Almacenamiento Relacional y NoSQL",
      fr: "Bases Relationnelles & Documents",
      ja: "RDBMS & ドキュメントDB",
      de: "Relationale & Dokumenten-Stores",
      it: "Store Relazionali & Documentali",
      ko: "관계형 및 문서형 DB",
      tr: "İlişkisel ve Doküman Tabanlı",
      ar: "مخازن علائقية ومستندية"
    },
    descriptions: {
      en: "Data schemas, persistence layers, migrations & database administration",
      uz: "Ma'lumotlar sxemalari, SQL/NoSQL saqlash, xavfsiz migratsiyalar va boshqaruv",
      ru: "Схемы данных, слой персистентности, безопасные миграции и администрирование",
      zh: "数据模型定义、持久化架构、无损迁移及运维管理",
      es: "Esquemas de datos, capas de persistencia, migraciones y administración",
      fr: "Schémas de données, couches de persistance, migrations et administration",
      ja: "データスキーマ設計、永続化レイヤー、マイグレーションと管理",
      de: "Datenschemata, Persistenzebenen, Migrationen & Datenbankverwaltung",
      it: "Schemi di dati, livelli di persistenza, migrazioni e amministrazione",
      ko: "데이터 스키마 설계, 지속성 계층, 무손실 마이그레이션 및 관리",
      tr: "Veri şemaları, kalıcılık katmanları, geçişler ve veri tabanı yönetimi",
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
      zh: "DevOps 与云原生部署",
      es: "DevOps y Despliegue",
      fr: "DevOps & Déploiement",
      ja: "DevOps & クラウドデプロイ",
      de: "DevOps & Deployment",
      it: "DevOps & Rilascio",
      ko: "DevOps & 클라우드 배포",
      tr: "DevOps ve Dağıtım",
      ar: "DevOps والنشر السحابي"
    },
    shortLabels: {
      en: "Cloud Infrastructure",
      uz: "Bulutli Infratuzilma",
      ru: "Облачная инфраструктура",
      zh: "云原生基础设施",
      es: "Infraestructura Cloud",
      fr: "Infrastructure Cloud",
      ja: "クラウドインフラ",
      de: "Cloud-Infrastruktur",
      it: "Infrastruttura Cloud",
      ko: "클라우드 인프라",
      tr: "Bulut Altyapısı",
      ar: "البنية التحتية السحابية"
    },
    descriptions: {
      en: "Containerization, automated deployments, hosting & version control",
      uz: "Konteynerizatsiya, avtomatlashtirilgan CI/CD yetkazib berish va versiyalar nazorati",
      ru: "Контейнеризация, автоматизированный CI/CD деплой и контроль версий",
      zh: "容器化编排、CI/CD 自动化流水线、弹性托管与版本管控",
      es: "Contenedores, despliegues automáticos, alojamiento y control de versiones",
      fr: "Conteneurisation, déploiements automatisés, hébergement et contrôle de version",
      ja: "コンテナ化、自動デプロイ、ホスティング環境、バージョン管理",
      de: "Containerisierung, automatisierte Deployments, Hosting & Versionskontrolle",
      it: "Containerizzazione, deployment automatico, hosting e controllo versioni",
      ko: "컨테이너화, CI/CD 자동화 배포, 호스팅 및 버전 관리",
      tr: "Konteynerleştirme, otomatik dağıtım, barındırma ve sürüm kontrolü",
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
      zh: "开发与测试工具",
      es: "Herramientas de Desarrollo",
      fr: "Outils de Développement",
      ja: "開発ツール",
      de: "Entwicklungswerkzeuge",
      it: "Strumenti di Sviluppo",
      ko: "개발 도구",
      tr: "Geliştirme Araçları",
      ar: "أدوات التطوير"
    },
    shortLabels: {
      en: "Engineering Workflow",
      uz: "Muhandislik Ish Jarayoni",
      ru: "Инженерный рабочий процесс",
      zh: "工程师工作流",
      es: "Flujo de Trabajo",
      fr: "Flux de Travail",
      ja: "開発ワークフロー",
      de: "Entwicklungs-Workflow",
      it: "Workflow di Sviluppo",
      ko: "엔지니어링 워크플로우",
      tr: "Geliştirici İş Akışı",
      ar: "سير العمل الهندسي"
    },
    descriptions: {
      en: "API testing, code authoring, debugging & design collaboration",
      uz: "API testlash, kod yozish muhiti, nosozliklarni tuzatish va dizayn vositalari",
      ru: "Тестирование API, написание кода, отладка и дизайн-коллаборация",
      zh: "API 调试、现代编辑器、性能分析与设计协作工具",
      es: "Pruebas de API, edición de código, depuración y colaboración en diseño",
      fr: "Tests d'API, écriture de code, débogage et collaboration de conception",
      ja: "APIテスト、コーディング環境、デバッグ、デザイン協調",
      de: "API-Testing, Code-Erstellung, Debugging & Design-Kollaboration",
      it: "Test API, stesura del codice, debug e collaborazione sul design",
      ko: "API 테스팅, 코드 작성 환경, 디버깅 및 디자인 협업",
      tr: "API testi, kod yazımı, hata ayıklama ve tasarım iş birliği",
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
      zh: "AI 集成与智能代理系统",
      es: "Integración de IA y Sistemas Inteligentes",
      fr: "Intégration d'IA & Systèmes Intelligents",
      ja: "AIモデル統合 & インテリジェントシステム",
      de: "KI-Integration & Intelligente Systeme",
      it: "Integrazione AI & Sistemi Intelligenti",
      ko: "AI 통합 & 지능형 시스템",
      tr: "Yapay Zekâ ve Ajan Sistemleri",
      ar: "تكامل الذكاء الاصطناعي والأنظمة الذكية"
    },
    shortLabels: {
      en: "Agentic Engineering",
      uz: "Agentli Dasturlash va Modellash",
      ru: "Агентная инженерия и LLM",
      zh: "AI 代理工程与大模型应用",
      es: "Ingeniería de Agentes e IA",
      fr: "Ingénierie d'Agents & Modèles",
      ja: "AIエージェント工学 & 実装",
      de: "Agentic Engineering & Modelle",
      it: "Ingegneria di Agenti & Modelli",
      ko: "AI 에이전트 엔지니어링",
      tr: "Ajan Mühendisliği ve Modelleme",
      ar: "هندسة الوكلاء الأذكياء والنماذج"
    },
    descriptions: {
      en: "Practical model integration, multimodal vision & autonomous AI developer tooling",
      uz: "Amaliy AI modellari integratsiyasi, multimodal ko‘rish va ilg‘or AI vositalari",
      ru: "Интеграция прикладных моделей, мультимодальное зрение и современные AI-инструменты",
      zh: "大模型落地、多模态视觉识别与现代化自主式 AI 研发辅助",
      es: "Integración práctica de modelos, visión multimodal y herramientas avanzadas de IA",
      fr: "Intégration pratique de modèles, vision multimodale et outils de développement IA",
      ja: "実用モデル統合、マルチモーダル画像解析、自律型AI開発ツール群",
      de: "Praktische Modellintegration, multimodale Bilderkennung & moderne KI-Entwicklertools",
      it: "Integrazione pratica di modelli, visione multimodale e strumenti avanzati di sviluppo AI",
      ko: "실용적 모델 통합, 멀티모달 비전 및 차세대 AI 개발자 도구",
      tr: "Pratik model entegrasyonu, çok modlu görsel algılama ve otonom AI araçları",
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
