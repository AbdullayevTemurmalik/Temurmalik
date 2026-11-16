import { Locale } from "@/i18n/config";

export interface LocalizedProjectContent {
  title: string;
  tagline: string;
  category: string;
  description: string;
  detailedDescription: string[];
  role: string;
  timeline: string;
  statusText: string;
  verifiedHighlights: string[];
  problemAndGoal: string;
  solutionAndArchitecture: string[];
  verifiedFeatures: string[];
  technicalDecisions: Array<{
    title: string;
    description: string;
  }>;
}

export interface LocalizedProject {
  id: string;
  number: string;
  slug: string;
  year: string;
  liveUrl: string;
  secondaryLiveUrl?: string;
  repoUrl?: string;
  technologies: string[];
  accentColor: string;
  imageSrc: string;
  imageAlt: string;
  status: "Shipped" | "Active";
  translations: Record<Locale, LocalizedProjectContent>;
}

export const localizedProjects: LocalizedProject[] = [
  {
    id: "runcode-web",
    number: "01",
    slug: "runcode-web",
    year: "2026",
    liveUrl: "https://runcode-web.vercel.app/",
    repoUrl: "https://github.com/AbdullayevTemurmalik/Runcode-Web",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Gemini API",
      "WebSockets",
      "Tailwind CSS",
      "Vercel"
    ],
    accentColor: "#78C7AD",
    imageSrc: "/images/projects/runcode-web.png",
    imageAlt: "RunCode Web modern programming learning platform interface preview",
    status: "Shipped",
    translations: {
      en: {
        title: "RunCode Web",
        tagline: "Modern programming learning & practical development platform",
        category: "Developer Tools / Learning Platform",
        description:
          "A modern programming education platform built with React, Tailwind CSS, and a resilient Node.js/TypeScript AI teacher backend.",
        detailedDescription: [
          "RunCode Web is an interactive developer education platform designed to make programming concepts practical, structured, and engaging.",
          "The frontend delivers a distraction-free, dark-first learning interface built with Vite, React, and Tailwind CSS. The companion backend integrates Node.js, Express, Prisma ORM with PostgreSQL, WebSockets for real-time interactions, and Google Gemini API integration for automated programming assistance."
        ],
        role: "Full-Stack Developer & Backend Architect",
        timeline: "2026",
        statusText: "Shipped in 2026",
        verifiedHighlights: [
          "Modular full-stack architecture with decoupled React frontend and TypeScript backend",
          "Database modeling and persistence using Prisma ORM with PostgreSQL",
          "Google Gemini API integration for educational AI assistance",
          "Fast client-side routing and lightweight bundle deployed on Vercel"
        ],
        problemAndGoal:
          "Aspiring programmers often face fragmented learning tools where reading theory and writing code are separated by excessive friction. The goal of RunCode Web is to provide a clean, cohesive interface where lessons, structured practice, and real-time guidance live together.",
        solutionAndArchitecture: [
          "Constructed a responsive, dark-mode SPA using React and Tailwind CSS with instant route transitions.",
          "Engineered a dedicated Node.js/TypeScript backend API with input validation powered by Zod and secure session cookies.",
          "Implemented Prisma ORM schema migrations for clean relational data modeling of lessons, user progress, and curriculum items.",
          "Integrated Google Generative AI to answer code questions and provide contextual hints."
        ],
        verifiedFeatures: [
          "Interactive programming curriculum and practice modules",
          "Responsive developer-focused UI with syntax-inspired styling",
          "AI Teacher backend integration for practice queries",
          "Dark-theme first design system with accessible contrast"
        ],
        technicalDecisions: [
          {
            title: "Decoupled Architecture",
            description:
              "Separated the frontend SPA and backend API services to ensure independent deployment lifecycles, clear API boundaries, and low latency."
          },
          {
            title: "Prisma ORM with PostgreSQL",
            description:
              "Selected Prisma for end-to-end type safety, automated migrations, and reliable relational integrity across educational modules."
          },
          {
            title: "Direct Gemini AI Integration",
            description:
              "Leveraged official Google GenAI SDK for low-latency reasoning and coding explanations without third-party middleware bottlenecks."
          }
        ]
      },
      uz: {
        title: "RunCode Web",
        tagline: "Zamonaviy dasturlash ta'limi va amaliyot platformasi",
        category: "Dasturlash Ta'limi / Onlayn Platforma",
        description:
          "React, Tailwind CSS hamda Node.js/TypeScript AI o‘qituvchi backend tizimi asosida qurilgan zamonaviy dasturlash ta'lim platformasi.",
        detailedDescription: [
          "RunCode Web — dasturlash asoslari va texnologiyalarni amaliy, tizimli hamda interaktiv tarzda o‘rganish uchun mo‘ljallangan ta'lim platformasi.",
          "Foydalanuvchi interfeysi Vite, React va Tailwind CSS yordamida tezkor, qulay va chalg‘itmaydigan qorong‘u rejimda yaratilgan. Backend qismida Node.js, Express, PostgreSQL bilan Prisma ORM, real-vaqt aloqasi uchun WebSockets va sun'iy intellekt maslahatchisi uchun Google Gemini API integratsiya qilingan."
        ],
        role: "Full-Stack Dasturchi va Backend Arxitektori",
        timeline: "2026",
        statusText: "2026-yilda ishga tushirilgan",
        verifiedHighlights: [
          "React frontend va TypeScript backend ajratilgan modulli to‘liq sikldagi arxitektura",
          "PostgreSQL va Prisma ORM orqali darslar va foydalanuvchilar progressini xavfsiz boshqarish",
          "O‘quvchilarga kod yozishda ko‘maklashuvchi Google Gemini sun'iy intellekti integratsiyasi",
          "Vercel platformasida sub-soniyalik yuklanish va optimallashtirilgan hajm"
        ],
        problemAndGoal:
          "Dasturlashni endi boshlayotgan o‘quvchilar nazariya va amaliyot o‘rtasidagi uzilish tufayli ko‘p qiyinchiliklarga duch kelishadi. RunCode Web loyihasining bosh maqsadi — nazariya, amaliy kod muharriri va AI yordamchini yagona qulay oynada birlashtirish.",
        solutionAndArchitecture: [
          "React va Tailwind CSS asosida bir zumda yuklanadigan, interaktiv va qorong‘u rejimli SPA ishlab chiqildi.",
          "TypeScript va Express yordamida qat'iy Zod ma'lumot tekshiruvi va xavfsiz sessiyalarga ega backend yaratildi.",
          "Prisma ORM sxemalari orqali kurslar, modullar va test natijalari mustahkam relyatsion bazada tartibga solindi.",
          "Google Generative AI moduli ulanib, kod xatolarini tushuntirish va to‘g‘ri yo‘nalish ko‘rsatish yo‘lga qo‘yildi."
        ],
        verifiedFeatures: [
          "Interaktiv dasturlash darslari va amaliy mashg‘ulotlar",
          "Dasturchilar uchun maxsus sintaksis uslubidagi qulay interfeys",
          "AI O‘qituvchi orqali real-vaqtda yordam olish imkoniyati",
          "Qorong‘u va yorug‘ rejimda ko‘zga qulay yuqori kontrastli dizayn"
        ],
        technicalDecisions: [
          {
            title: "Mustaqil Modulli Arxitektura",
            description:
              "Frontend va backend tizimlari alohida ajratilib, yangilanishlarni xavfsiz va kechikishlarsiz yetkazib berish ta'minlandi."
          },
          {
            title: "PostgreSQL va Prisma ORM",
            description:
              "To‘liq tip xavfsizligi, tezkor SQL so‘rovlari va xavfsiz migratsiyalar uchun Prisma tanlandi."
          },
          {
            title: "To‘g‘ridan-to‘g‘ri Gemini AI Integratsiyasi",
            description:
              "Ortiqcha qatlamlarsiz rasmiy SDK orqali foydalanuvchi kodini tahlil qiluvchi tezkor AI ulandi."
          }
        ]
      },
      ru: {
        title: "RunCode Web",
        tagline: "Современная платформа для интерактивного обучения программированию и практики",
        category: "Образовательная платформа / Веб-разработка",
        description:
          "Интерактивная образовательная платформа на React, Tailwind CSS и серверной архитектуре Node.js/TypeScript с интеграцией AI-наставника.",
        detailedDescription: [
          "RunCode Web — это интерактивная платформа для изучения программирования, созданная для того, чтобы сделать практику структурированной, удобной и понятной.",
          "Фронтенд реализован на React и Tailwind CSS с удобным темным интерфейсом. Бэкенд объединяет Node.js, Express, PostgreSQL с Prisma ORM, WebSockets для взаимодействия в реальном времени и Google Gemini API для подсказок по коду."
        ],
        role: "Full-Stack разработчик и бэкенд-архитектор",
        timeline: "2026",
        statusText: "Запущено в 2026 году",
        verifiedHighlights: [
          "Модульная full-stack архитектура с независимым React фронтендом и TypeScript бэкендом",
          "Реляционная структура данных и миграции через Prisma ORM с PostgreSQL",
          "Интеграция Google Gemini API для контекстной помощи и анализа кода",
          "Мгновенная маршрутизация и оптимизированная сборка, развернутая на Vercel"
        ],
        problemAndGoal:
          "Начинающие разработчики часто сталкиваются с разрывом между теорией и практикой. Цель RunCode Web — объединить структурированные уроки, редактор кода и AI-помощника в едином чистом окне без лишних отвлечений.",
        solutionAndArchitecture: [
          "Создан быстрый SPA на React и Tailwind CSS с плавной сменой маршрутов.",
          "Разработан надежный API на Node.js/TypeScript с валидацией Zod и безопасными сессиями.",
          "Настроена схема базы данных Prisma ORM для уроков, прогресса пользователей и тестов.",
          "Подключена модель Google Gemini для объяснения ошибок и выдачи подсказок."
        ],
        verifiedFeatures: [
          "Интерактивная программа обучения и практические задачи",
          "Удобный темный интерфейс в стиле редактора кода",
          "AI-наставник для ответов на вопросы по коду",
          "Высокая контрастность и доступность оформления"
        ],
        technicalDecisions: [
          {
            title: "Модульная архитектура",
            description:
              "Разделение фронтенда и API обеспечило независимое развертывание и минимальную задержку."
          },
          {
            title: "Prisma ORM и PostgreSQL",
            description:
              "Гарантированная типизация, чистые миграции и целостность реляционных данных."
          },
          {
            title: "Прямая интеграция Gemini AI",
            description:
              "Использование официального SDK Google GenAI для быстрого контекстного анализа кода."
          }
        ]
      },
      tr: {
        title: "RunCode Web",
        tagline: "Modern programlama eğitimi ve pratik geliştirme platformu",
        category: "Geliştirici Araçları / Eğitim Platformu",
        description:
          "React, Tailwind CSS ve yapay zeka destekli Node.js/TypeScript mimarisi üzerine kurulu modern kodlama platformu.",
        detailedDescription: [
          "RunCode Web, programlama kavramlarını yapılandırılmış, uygulamalı ve ilgi çekici şekilde öğretmek için tasarlanmış etkileşimli bir platformdur.",
          "Kullanıcı arayüzü React ve Tailwind CSS ile karanlık tema öncelikli olarak inşa edilmiştir. Arka uçta Node.js, Express, PostgreSQL, Prisma ORM, gerçek zamanlı WebSockets ve kod yardımı sağlayan Google Gemini API yer alır."
        ],
        role: "Full-Stack Geliştirici ve Arka Uç Mimarı",
        timeline: "2026",
        statusText: "2026'da yayına alındı",
        verifiedHighlights: [
          "Ayrılmış React ön yüz ve TypeScript arka uç ile modüler full-stack mimarisi",
          "PostgreSQL ve Prisma ORM ile güvenli veritabanı modellemesi ve geçişleri",
          "Eğitim amaçlı yapay zeka desteği için Google Gemini API entegrasyonu",
          "Vercel üzerinde barındırılan ultra hızlı istemci yönlendirmesi"
        ],
        problemAndGoal:
          "Yeni başlayan yazılımcılar teori okuma ile kod yazma arasındaki kopukluk nedeniyle zorlanırlar. RunCode Web'in amacı, dersleri, pratik kodlamayı ve yapay zeka rehberliğini tek bir arayüzde birleştirmektir.",
        solutionAndArchitecture: [
          "React ve Tailwind CSS ile hızlı, dikkat dağıtmayan karanlık modlu tek sayfa uygulaması geliştirildi.",
          "Zod veri doğrulaması ve güvenli oturum yönetimi içeren Node.js/TypeScript API tasarlandı.",
          "Prisma ORM ile kullanıcı ilerlemesi ve müfredat verileri ilişkisel olarak modellendi.",
          "Kod hatalarını anında açıklayan Google Gemini modeli entegre edildi."
        ],
        verifiedFeatures: [
          "İnteraktif kodlama müfredatı ve uygulama modülleri",
          "Sözdizimi vurgulu geliştirici dostu koyu tema",
          "Anlık soru-cevap sağlayan AI Öğretmen entegrasyonu",
          "Yüksek kontrastlı, erişilebilir modern tasarım"
        ],
        technicalDecisions: [
          {
            title: "Ayrık Mimari",
            description:
              "Ön yüz ve arka yüz servislerinin bağımsız dağıtımı için ayrılmış mimari tercih edildi."
          },
          {
            title: "Prisma ORM ve PostgreSQL",
            description:
              "Uçtan uca tip güvenliği ve güvenilir veri bütünlüğü için Prisma seçildi."
          },
          {
            title: "Doğrudan Gemini Entegrasyonu",
            description:
              "Hızlı yanıt süresi için resmi Google GenAI SDK kullanıldı."
          }
        ]
      },
      de: {
        title: "RunCode Web",
        tagline: "Moderne Programmierlern- und Praxisentwicklungsplattform",
        category: "Entwickler-Tools / Lernplattform",
        description:
          "Eine moderne Programmier-Lernplattform, entwickelt mit React, Tailwind CSS und einem robusten Node.js/TypeScript KI-Backend.",
        detailedDescription: [
          "RunCode Web ist eine interaktive Plattform für angehende Softwareentwickler, die Programmierkonzepte praxisnah und strukturiert vermittelt.",
          "Das Frontend bietet eine ablenkungsfreie Benutzeroberfläche mit React und Tailwind CSS. Das Backend nutzt Node.js, Express, PostgreSQL mit Prisma ORM, WebSockets für Echtzeitinteraktion und die Google Gemini API für automatische Programmierunterstützung."
        ],
        role: "Full-Stack-Entwickler & Backend-Architekt",
        timeline: "2026",
        statusText: "Veröffentlicht 2026",
        verifiedHighlights: [
          "Modulare Full-Stack-Architektur mit entkoppeltem React-Frontend und TypeScript-Backend",
          "Datenbankmodellierung und -migrationen mit Prisma ORM und PostgreSQL",
          "Google Gemini API-Integration für KI-gestützte Code-Hilfe",
          "Extrem schnelles Client-Routing auf Vercel bereitgestellt"
        ],
        problemAndGoal:
          "Angehende Entwickler erleben oft Brüche zwischen reiner Theorie und praktischer Code-Ausführung. Das Ziel von RunCode Web ist eine einheitliche Oberfläche, in der Lektionen, Editor und KI-Feedback nahtlos zusammenwirken.",
        solutionAndArchitecture: [
          "Erstellung einer reaktionsschnellen Dark-Mode SPA mit React und Tailwind CSS.",
          "Entwicklung einer sicheren Node.js/TypeScript REST-API mit Zod-Validierung.",
          "Prisma ORM-Datenbankschema für Lerninhalte, Fortschritt und Tests.",
          "Einbindung von Google Gemini zur Analyse von Programmcode und Hilfestellungen."
        ],
        verifiedFeatures: [
          "Interaktiver Lehrplan mit praxisnahen Modulen",
          "Fokus-orientierte Benutzeroberfläche im Editor-Stil",
          "KI-Tutor für kontextbezogene Code-Erklärungen",
          "Barrierefreies Dark-Theme Design"
        ],
        technicalDecisions: [
          {
            title: "Entkoppelte Architektur",
            description:
              "Unabhängige Deployment-Zyklen und geringe Latenz durch getrennte Frontend- und Backend-Services."
          },
          {
            title: "Prisma ORM mit PostgreSQL",
            description:
              "Typensicherheit von Anfang bis Ende und verlässliche Datenintegrität."
          },
          {
            title: "Direkte Gemini-Integration",
            description:
              "Direkte Nutzung des Google GenAI SDKs ohne bremsende Middleware."
          }
        ]
      },
      fr: {
        title: "RunCode Web",
        tagline: "Plateforme moderne d'apprentissage du code et de pratique applicative",
        category: "Outils de développement / Plateforme éducative",
        description:
          "Plateforme d'apprentissage du code conçue avec React, Tailwind CSS et un backend Node.js/TypeScript avec tuteur IA.",
        detailedDescription: [
          "RunCode Web est une plateforme interactive d'apprentissage pour développeurs, pensée pour structurer l'enseignement par la pratique.",
          "L'interface offre un environnement épuré conçu avec React et Tailwind CSS. Le backend combine Node.js, Express, PostgreSQL avec Prisma ORM, WebSockets et l'API Google Gemini pour l'assistance au code."
        ],
        role: "Développeur Full-Stack & Architecte Backend",
        timeline: "2026",
        statusText: "Lancé en 2026",
        verifiedHighlights: [
          "Architecture full-stack modulaire avec frontend React et backend TypeScript découplés",
          "Modélisation des données et migrations via Prisma ORM avec PostgreSQL",
          "Intégration de l'API Google Gemini pour l'assistance pédagogique IA",
          "Routage client ultra-rapide déployé sur Vercel"
        ],
        problemAndGoal:
          "Les apprenants se heurtent souvent à la déconnexion entre théorie et pratique. RunCode Web réunit dans une même interface cours interactifs, éditeur et guidage IA.",
        solutionAndArchitecture: [
          "Développement d'une SPA réactive en mode sombre avec React et Tailwind CSS.",
          "Création d'une API Node.js/TypeScript avec validation rigoureuse via Zod.",
          "Schémas relationnels Prisma ORM pour les cours, utilisateurs et progrès.",
          "Intégration du modèle Google Gemini pour l'explication instantanée du code."
        ],
        verifiedFeatures: [
          "Modules d'apprentissage interactifs et exercices pratiques",
          "Interface utilisateur claire inspirée des éditeurs de code",
          "Tuteur IA pour répondre aux questions de programmation",
          "Design haute lisibilité avec contraste accessible"
        ],
        technicalDecisions: [
          {
            title: "Architecture découplée",
            description:
              "Séparation du frontend et de l'API pour des déploiements indépendants et une faible latence."
          },
          {
            title: "Prisma ORM et PostgreSQL",
            description:
              "Sécurité de typage de bout en bout et intégrité relationnelle garantie."
          },
          {
            title: "Intégration directe Gemini",
            description:
              "Utilisation du SDK officiel Google GenAI pour une réactivité maximale."
          }
        ]
      },
      es: {
        title: "RunCode Web",
        tagline: "Plataforma moderna de aprendizaje de programación y desarrollo práctico",
        category: "Herramientas para desarrolladores / Plataforma educativa",
        description:
          "Plataforma interactiva de aprendizaje de programación construida con React, Tailwind CSS y backend Node.js/TypeScript con tutor IA.",
        detailedDescription: [
          "RunCode Web es una plataforma educativa interactiva diseñada para hacer que el aprendizaje de programación sea práctico y estructurado.",
          "El frontend ofrece una interfaz oscura sin distracciones creada con React y Tailwind CSS. El backend integra Node.js, Express, PostgreSQL con Prisma ORM, WebSockets y la API de Google Gemini para asistencia en programación."
        ],
        role: "Desarrollador Full-Stack y Arquitecto Backend",
        timeline: "2026",
        statusText: "Lanzado en 2026",
        verifiedHighlights: [
          "Arquitectura full-stack modular con frontend React y backend TypeScript desacoplados",
          "Modelado de datos y migraciones relacionales con Prisma ORM y PostgreSQL",
          "Integración de Google Gemini API para asistencia educativa inteligente",
          "Enrutamiento del cliente ultrarrápido desplegado en Vercel"
        ],
        problemAndGoal:
          "Los estudiantes a menudo sufren la separación entre la lectura teórica y la escritura práctica de código. RunCode Web reúne lecciones, editor y asistencia de IA en un entorno único y fluido.",
        solutionAndArchitecture: [
          "Desarrollo de una SPA rápida en modo oscuro con React y Tailwind CSS.",
          "Creación de una API robusta en Node.js/TypeScript con validación Zod.",
          "Esquemas relacionales en Prisma ORM para cursos, seguimiento y evaluaciones.",
          "Conexión con Google Gemini para resolver dudas y depurar errores de sintaxis."
        ],
        verifiedFeatures: [
          "Módulos interactivos y prácticas estructuradas de programación",
          "Interfaz oscura inspirada en entornos de desarrollo modernos",
          "Asistente IA para consultas en tiempo real sobre código",
          "Diseño accesible con contraste optimizado"
        ],
        technicalDecisions: [
          {
            title: "Arquitectura desacoplada",
            description:
              "Separación del frontend y el backend para ciclos de despliegue independientes y latencia reducida."
          },
          {
            title: "Prisma ORM con PostgreSQL",
            description:
              "Seguridad de tipos integral y consistencia relacional garantizada."
          },
          {
            title: "Integración directa de Gemini",
            description:
              "Uso del SDK oficial de Google GenAI para respuestas rápidas y contextuales."
          }
        ]
      },
      it: {
        title: "RunCode Web",
        tagline: "Piattaforma moderna per l'apprendimento della programmazione e lo sviluppo pratico",
        category: "Strumenti per sviluppatori / Piattaforma educativa",
        description:
          "Piattaforma educativa interattiva sviluppata con React, Tailwind CSS e backend Node.js/TypeScript con tutor AI.",
        detailedDescription: [
          "RunCode Web è una piattaforma educativa interattiva per sviluppatori, creata per rendere l'apprendimento pratico, strutturato ed efficace.",
          "Il frontend offre un'interfaccia dark priva di distrazioni con React e Tailwind CSS. Il backend adotta Node.js, Express, PostgreSQL con Prisma ORM, WebSockets e l'API Google Gemini."
        ],
        role: "Sviluppatore Full-Stack e Architetto Backend",
        timeline: "2026",
        statusText: "Rilasciato nel 2026",
        verifiedHighlights: [
          "Architettura full-stack modulare con frontend React e backend TypeScript disaccoppiati",
          "Modellazione e migrazione del database relazionale con Prisma ORM e PostgreSQL",
          "Integrazione dell'API Google Gemini per il tutoraggio intelligente",
          "Routing lato client ultra-veloce distribuito su Vercel"
        ],
        problemAndGoal:
          "Spesso gli studenti affrontano una separazione frustrante tra teoria e codice reale. RunCode Web integra lezioni, editor e assistenza AI in un'unica interfaccia fluida.",
        solutionAndArchitecture: [
          "Creazione di una SPA reattiva con React e Tailwind CSS a tema scuro.",
          "Sviluppo di un'API sicura in Node.js/TypeScript con convalida tramite Zod.",
          "Schema Prisma ORM per tracciare progressi, lezioni e valutazioni.",
          "Integrazione di Google Gemini per il chiarimento del codice in tempo reale."
        ],
        verifiedFeatures: [
          "Curriculum di programmazione interattivo ed esercitazioni",
          "Interfaccia scura focalizzata sullo sviluppo",
          "Tutor AI per spiegazioni sul codice",
          "Design ad alto contrasto conforme all'accessibilità"
        ],
        technicalDecisions: [
          {
            title: "Architettura disaccoppiata",
            description:
              "Frontend e backend separati per garantire rilasci indipendenti e tempi di risposta ottimali."
          },
          {
            title: "Prisma ORM e PostgreSQL",
            description:
              "Sicurezza dei tipi end-to-end e integrità del database."
          },
          {
            title: "Integrazione diretta con Gemini",
            description:
              "SDK ufficiale Google GenAI per un'elaborazione rapida e accurata."
          }
        ]
      },
      ko: {
        title: "RunCode Web",
        tagline: "최신 프로그래밍 학습 및 실무 실습 플랫폼",
        category: "개발자 도구 / 교육 플랫폼",
        description:
          "React, Tailwind CSS 및 Node.js/TypeScript AI 튜터 백엔드 기반의 현대적 프로그래밍 학습 플랫폼.",
        detailedDescription: [
          "RunCode Web은 프로그래밍 핵심 개념을 구조화되고 실용적이며 몰입감 있게 학습할 수 있도록 설계된 인터랙티브 교육 플랫폼입니다.",
          "프론트엔드는 집중도를 높이는 다크 테마 기반으로 React와 Tailwind CSS로 제작되었으며, 백엔드는 Node.js, Express, Prisma ORM과 PostgreSQL, 실시간 WebSockets, 그리고 코드 분석을 위한 Google Gemini API가 결합되어 있습니다."
        ],
        role: "풀스택 개발자 & 백엔드 아키텍트",
        timeline: "2026",
        statusText: "2026년 배포 완료",
        verifiedHighlights: [
          "독립적인 React 프론트엔드와 TypeScript 백엔드를 갖춘 모듈형 풀스택 아키텍처",
          "Prisma ORM과 PostgreSQL을 활용한 관계형 데이터 모델링 및 마이그레이션",
          "학습 질의응답 및 코드 분석을 위한 Google Gemini API 연동",
          "Vercel에 배포된 초고속 클라이언트 라우팅 및 최적화 번들"
        ],
        problemAndGoal:
          "초보 개발자들은 이론 습득과 실제 코드 작성 사이의 큰 장벽을 겪습니다. RunCode Web의 핵심 목표는 강의, 실습 편집기, AI 가이드를 단일 화면에 유기적으로 통합하는 것입니다.",
        solutionAndArchitecture: [
          "React와 Tailwind CSS를 활용한 반응형 다크 모드 SPA 구축.",
          "Zod 기반 엄격한 유효성 검증과 보안 세션을 갖춘 Node.js/TypeScript REST API 개발.",
          "Prisma ORM을 통해 강의 커리큘럼, 학습 진행률, 퀴즈 결과를 체계적으로 관리.",
          "Google Gemini를 연동하여 코드 오류 설명과 맞춤형 힌트 제공."
        ],
        verifiedFeatures: [
          "인터랙티브 프로그래밍 커리큘럼 및 실습 모듈",
          "개발자 친화적인 코드 신택스 스타일 UI",
          "실시간 질의응답을 지원하는 AI 튜터 백엔드",
          "명확한 명도 대비를 갖춘 접근성 다크 디자인 시스템"
        ],
        technicalDecisions: [
          {
            title: "독립 모듈형 아키텍처",
            description:
              "프론트엔드와 백엔드 서비스를 분리하여 독립적인 배포 주기와 낮은 지연 시간을 확보."
          },
          {
            title: "PostgreSQL & Prisma ORM",
            description:
              "엔드투엔드 타입 안정성과 안전한 관계형 데이터 정합성을 위해 Prisma 선택."
          },
          {
            title: "Gemini AI 직접 연동",
            description:
              "중간 병목 없이 실시간 응답을 제공하기 위해 공식 Google GenAI SDK 채택."
          }
        ]
      },
      zh: {
        title: "RunCode Web",
        tagline: "现代编程学习与实战开发交互平台",
        category: "开发者工具 / 在线教育平台",
        description:
          "基于 React、Tailwind CSS 及 Node.js/TypeScript 架构构建的现代编程学习平台，深度集成 AI 编程导师。",
        detailedDescription: [
          "RunCode Web 是一款专为开发者打造的交互式编程教学平台，致力于让代码学习更加系统、高效与直观。",
          "前端采用 React 和 Tailwind CSS 打造沉浸式暗黑开发界面；后端采用 Node.js、Express、PostgreSQL 与 Prisma ORM，辅以 WebSockets 实时通讯及 Google Gemini API 自动化辅助。"
        ],
        role: "全栈开发者兼后端架构师",
        timeline: "2026",
        statusText: "2026年正式上线",
        verifiedHighlights: [
          "前后端分离的模块化全栈架构，React 前端与 TypeScript 后端独立解耦",
          "采用 Prisma ORM 与 PostgreSQL 实现结构化关系型数据持久化与迁移",
          "集成 Google Gemini API，提供实时的智能代码教学与辅导",
          "在 Vercel 上实现毫秒级首屏加载与轻量级打包部署"
        ],
        problemAndGoal:
          "初学编程者常在理论学习与实际动手之间遭遇阻碍。RunCode Web 的核心目标是将系统化课程、在线编辑器与 AI 实时导师融于一体，消除学习阻力。",
        solutionAndArchitecture: [
          "使用 React 与 Tailwind CSS 构建快速无刷新的暗黑模式单页应用。",
          "基于 Node.js/TypeScript 搭建具备 Zod 严格校验与安全会话的后端 API。",
          "设计 Prisma ORM 关系型数据模型，规范课程体系、学习进度与评测数据。",
          "接入 Google Gemini 智能模型，实时诊断代码错误并给出指导。"
        ],
        verifiedFeatures: [
          "交互式编程课程与在线实操练习模块",
          "专为程序员定制的高对比度暗黑视觉系统",
          "实时在线解答的 AI 导师辅导功能",
          "响应式布局与无障碍高标准交互"
        ],
        technicalDecisions: [
          {
            title: "前后端解耦架构",
            description:
              "前端单页应用与后端服务彻底解耦，确保低网络延迟与独立敏捷部署。"
          },
          {
            title: "Prisma ORM 与 PostgreSQL",
            description:
              "提供端到端强类型约束与可靠的关系型事务保障。"
          },
          {
            title: "原生集成 Gemini AI",
            description:
              "采用 Google GenAI 官方 SDK，消除中间层瓶颈，保障秒级智能推断。"
          }
        ]
      },
      ja: {
        title: "RunCode Web",
        tagline: "最新のプログラミング学習・実践開発プラットフォーム",
        category: "開発者ツール / 学習プラットフォーム",
        description:
          "React、Tailwind CSS、およびAIメンターを統合したNode.js/TypeScriptバックエンドによる最新のプログラミング学習環境。",
        detailedDescription: [
          "RunCode Webは、プログラミングの基礎と実践を体系的かつ直感的に学べるインタラクティブな開発学習プラットフォームです。",
          "フロントエンドはReactとTailwind CSSを用いた集中しやすいダークモードUIを採用。バックエンドはNode.js、Express、PostgreSQLとPrisma ORM、リアルタイムWebSockets、そしてGoogle Gemini APIを連携させています。"
        ],
        role: "フルスタックエンジニア 兼 バックエンドアーキテクト",
        timeline: "2026",
        statusText: "2026年ローンチ",
        verifiedHighlights: [
          "ReactフロントエンドとTypeScriptバックエンドを疎結合にしたモジュール型フルスタック設計",
          "Prisma ORMとPostgreSQLによる堅牢なリレーショナルデータモデリング",
          "学習支援AIアシスタントとしてのGoogle Gemini API連携",
          "Vercelでの高速配信と最適化されたクライアントルーティング"
        ],
        problemAndGoal:
          "学習者が理論の読解と実際のコード記述の間で感じる学習摩擦を解消するため、レッスン、実践環境、AIの助言をひとつの画面にシームレスに統合しました。",
        solutionAndArchitecture: [
          "ReactとTailwind CSSで快適に動作するダークモードSPAを構築。",
          "Zodによる入力バリデーションを備えたNode.js/TypeScript APIを開発。",
          "Prisma ORMスキーマによる受講進捗と教材のリレーショナル管理。",
          "Google Geminiを組み込み、リアルタイムでのコード質問・エラー解説を実現。"
        ],
        verifiedFeatures: [
          "対話型のプログラミングカリキュラムと演習機能",
          "開発者に適したシンタックス調の洗練されたUI",
          "コードをその場で解説するAIメンター機能",
          "視認性の高いダークテーマデザインシステム"
        ],
        technicalDecisions: [
          {
            title: "疎結合アーキテクチャ",
            description:
              "フロントとバックエンドを分離し、独立したデプロイサイクルと低レイテンシを実現。"
          },
          {
            title: "Prisma ORM & PostgreSQL",
            description:
              "エンドツーエンドの型安全性と整合性の高いデータベース構造を担保。"
          },
          {
            title: "Gemini AIの直接統合",
            description:
              "公式SDKを用いて無駄なオーバーヘッドを排除し、高速な応答性を確保。"
          }
        ]
      },
      ar: {
        title: "RunCode Web",
        tagline: "منصة حديثة لتعلم البرمجة والتطوير العملي التفاعلي",
        category: "أدوات المطورين / منصة تعليمية",
        description:
          "منصة تعليمية متطورة مبنية باستخدام React و Tailwind CSS مع بنية تحتية قوية بـ Node.js/TypeScript ومدعومة بمعلم ذكاء اصطناعي.",
        detailedDescription: [
          "تعد RunCode Web منصة تفاعلية مخصصة للمطورين لتقديم مفاهيم البرمجة بطريقة عملية ومنظمة وسهلة الفهم.",
          "توفر الواجهة الأمامية تجربة تعلم هادئة بالوضع الداكن مع React و Tailwind CSS. ويدمج الواجهة الخلفية بين Node.js و Express و PostgreSQL عبر Prisma ORM وتقنية WebSockets ونموذج Google Gemini API."
        ],
        role: "مطور Full-Stack ومهندس البنية الخلفية",
        timeline: "2026",
        statusText: "أُطلقت في 2026",
        verifiedHighlights: [
          "بنية برمجية معيارية متكاملة تفصل بين واجهة React وبنية TypeScript الخلفية",
          "نمذجة قواعد البيانات وإدارة الترحيلات عبر Prisma ORM مع PostgreSQL",
          "تكامل ذكي مع Google Gemini API للمساعدة البرمجية وشرح الأكواد",
          "توجيه سريع للعميل مع نشر خفيف وسلس عبر Vercel"
        ],
        problemAndGoal:
          "يواجه المتعلمون غالباً فجوة بين قراءة النظرية وتطبيق الكود عملياً. هدف RunCode Web هو جمع الدروس، والمحرر، والدعم الذكي في بيئة موحدة وواضحة.",
        solutionAndArchitecture: [
          "تطوير تطبيق أحادي الصفحة سريع بالوضع الداكن باستخدام React و Tailwind CSS.",
          "بناء واجهة برمجية آمنة بـ Node.js/TypeScript مع التحقق الصارم عبر Zod.",
          "تنظيم جداول قاعدة البيانات عبر Prisma ORM للدروس والتقدم والاختبارات.",
          "ربط الذكاء الاصطناعي من Google Gemini لتحليل الأخطاء وشرح الحلول."
        ],
        verifiedFeatures: [
          "منهج برمجي تفاعلي مع وحدات تطبيقية",
          "واجهة مظلمة مصممة بأسلوب محررات الأكواد الاحترافية",
          "معلم ذكاء اصطناعي للمساعدة الفورية في حل المسائل",
          "تصميم عالي التباين متوافق مع معايير الوصول"
        ],
        technicalDecisions: [
          {
            title: "بنية مستقلة منفصلة",
            description:
              "فصل الواجهة عن الخادم لضمان نشر مرن واستجابة فائقة السرعة."
          },
          {
            title: "Prisma ORM مع PostgreSQL",
            description:
              "أمان كامل للأنماط البرمجية وسلامة موثوقة للبيانات العلائقية."
          },
          {
            title: "تكامل مباشر مع Gemini AI",
            description:
              "الاعتماد على مكتبة Google GenAI الرسمية لتقليل زمن الاستجابة إلى أدنى حد."
          }
        ]
      }
    }
  },
  {
    id: "donik-coach-ai",
    number: "02",
    slug: "donik-coach-ai",
    year: "2026",
    liveUrl: "https://t.me/donikcoach_bot",
    secondaryLiveUrl: "https://donikcoachfitness.vercel.app/",
    technologies: [
      "Node.js",
      "Telegram Bot API",
      "React",
      "Gemini Multimodal",
      "REST API",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel"
    ],
    accentColor: "#79B8FF",
    imageSrc: "/images/projects/donik-coach-ai.png",
    imageAlt: "Donik Coach AI fitness platform and Telegram bot interface preview",
    status: "Active",
    translations: {
      en: {
        title: "Donik Coach AI",
        tagline: "Telegram Mini App & Web fitness platform with AI nutrition tracking",
        category: "Telegram Mini App / Fitness & AI",
        description:
          "A Telegram Mini App and web platform featuring meal photo calorie estimation, 9 structured dietary rations, and gym workout routines.",
        detailedDescription: [
          "Donik Coach AI brings fitness planning and nutritional tracking directly to Telegram and mobile web users, eliminating the friction of manual food logging.",
          "The system leverages multimodal AI to analyze meal photos for nutritional estimates, presents 9 professional nutrition regimens, and delivers structured gym workout routines with secure phone authentication."
        ],
        role: "Backend & AI Bot Developer",
        timeline: "2026",
        statusText: "Active in 2026",
        verifiedHighlights: [
          "Shipped Telegram bot and web platform serving fitness and diet workflows",
          "Photo-based calorie and meal composition estimation via multimodal AI",
          "Structured library of 9 professional meal plans (dietary rations)",
          "Curated gym exercise catalog and workout program delivery"
        ],
        problemAndGoal:
          "Nutrition tracking is typically tedious, requiring manual search and food item weighing that causes high user drop-off. Donik Coach AI addresses this by allowing users to simply photograph their meal within Telegram and receive immediate calorie insights alongside structured fitness regimens.",
        solutionAndArchitecture: [
          "Built Telegram webhook and command handlers for responsive user interactions.",
          "Integrated multimodal AI models to interpret food photos, recognize ingredients, and calculate approximate nutritional macros.",
          "Structured 9 distinct nutritional regimens tailored to common fitness goals (weight loss, muscle gain, maintenance).",
          "Engineered a companion web login dashboard for account management and exercise tracking."
        ],
        verifiedFeatures: [
          "Meal photo analysis for calorie and macro estimation",
          "9 curated professional dietary rations for specific health goals",
          "Gym exercise and workout directory with step-by-step guidance",
          "Native Telegram bot flow alongside web platform access"
        ],
        technicalDecisions: [
          {
            title: "Telegram Bot as Primary Client",
            description:
              "Chose Telegram as the primary deployment surface to maximize adoption in Uzbekistan where Telegram is the primary daily communication platform."
          },
          {
            title: "Multimodal Visual Analysis",
            description:
              "Applied image recognition models directly to photo uploads to replace cumbersome text searches with instant visual logging."
          }
        ]
      },
      uz: {
        title: "Donik Coach AI",
        tagline: "Taom suratidan kaloriya aniqlash, 9 ta ratsion va zal mashqlari platformasi",
        category: "Telegram Mini Ilova / Fitnes va AI",
        description:
          "Taom suratidan kaloriya va ozuqa moddalarini aniqlash, 9 ta professional ratsion hamda zal mashg‘ulotlarini o‘z ichiga olgan aqlli platforma.",
        detailedDescription: [
          "Donik Coach AI fitnes rejalashtirish va ovqatlanish tahlilini to‘g‘ridan-to‘g‘ri Telegram va veb-platformaga olib chiqadi, bu esa ortiqcha qo‘lda qidirish qiyinchiliklarini bartaraf etadi.",
          "Tizim multimodal AI yordamida taom fotosuratlarini tahlil qiladi, 9 xil maxsus ratsionni tavsiya etadi va zal mashqlari bo‘yicha batafsil dasturlarni taqdim etadi."
        ],
        role: "Backend va AI Bot Dasturchisi",
        timeline: "2026",
        statusText: "2026-yilda faol",
        verifiedHighlights: [
          "Telegram boti va veb-fitnes platformasi orqali to‘liq ishlaydigan fitnes ekotizimi",
          "Multimodal sun'iy intellekt orqali taom fotosuratidan oqsil, yog‘, uglevod va kaloriyalarni hisoblash",
          "9 ta individual maqsadlar uchun tuzilgan professional ratsionlar majmuasi",
          "Mushak guruhlari bo‘yicha tizimlashtirilgan zal mashqlari bazasi"
        ],
        problemAndGoal:
          "Har kuni kaloriyalarni daftarga yoki noqulay ilovalarga yozib borish foydalanuvchilarning 80% ida tashlab ketishga sabab bo‘ladi. Donik Coach AI taomni shunchaki rasmga olib yuborish orqali tezkor tahlil beradi va tartibli mashg‘ulotlar tizimini yo‘lga qo‘yadi.",
        solutionAndArchitecture: [
          "Telegram Bot API webhooklari orqali soniyali tezkor aloqa yo‘lga qo‘yildi.",
          "Multimodal AI ko‘rish modeli orqali rasmdagi ingredientlar va ozuqaviy qiymatlar aniqlanadi.",
          "Turli maqsadlar (vazn tashlash, mushak massasi to‘plash, quritish) uchun 9 ta professional menyu kiritildi.",
          "Foydalanuvchi telefon raqami orqali xavfsiz avtorizatsiya qilinadigan veb-panel qurildi."
        ],
        verifiedFeatures: [
          "Taom suratidan kaloriya va makronutriyentlarni avtomatik aniqlash",
          "9 ta ilmiy asoslangan professional taomlanish ratsioni",
          "Zal mashg‘ulotlari va to‘g‘ri texnika bo‘yicha ko‘rsatmalar",
          "Telegram bot va veb-portalning yagona ma'lumotlar bazasi orqali integratsiyasi"
        ],
        technicalDecisions: [
          {
            title: "Telegram Bot Boshlang‘ich Platforma Sifatida",
            description:
              "O‘zbekiston bozorida Telegram eng ommabop aloqa vositasi bo‘lgani sababli foydalanuvchilar uchun kirish to‘sig‘i minimallashtirildi."
          },
          {
            title: "Multimodal AI Tahlili",
            description:
              "Qo‘lda yozish o‘rniga tasvirni to‘g‘ridan-to‘g‘ri tahlil qiluvchi ko‘rish modellari joriy etildi."
          }
        ]
      },
      ru: {
        title: "Donik Coach AI",
        tagline: "Telegram Mini App и веб-платформа с оценкой калорий по фото блюда и 9 рационом",
        category: "Telegram Mini App / Фитнес и AI",
        description:
          "Умная фитнес-платформа и Telegram-бот с определением калорий по фото блюда, 9 профессиональными рационами питания и базой упражнений.",
        detailedDescription: [
          "Donik Coach AI переносит учет питания и тренировок прямо в Telegram и мобильный веб, избавляя от ручного подсчета калорий.",
          "Мультимодальный AI распознает блюда по фото и рассчитывает КБЖУ, предлагает 9 готовых рационов и каталог тренировок с авторизацией по номеру телефона."
        ],
        role: "Бэкенд и AI Bot разработчик",
        timeline: "2026",
        statusText: "Активен в 2026",
        verifiedHighlights: [
          "Работающая экосистема на базе Telegram-бота и веб-портала для фитнеса",
          "Определение калорийности и баланса БЖУ по фотографии блюда через мультимодальный AI",
          "Коллекция из 9 научно обоснованных рационов питания для разных целей",
          "Каталог упражнений в тренажерном зале с правильной техникой выполнения"
        ],
        problemAndGoal:
          "Ручной учет калорий отнимает много времени, из-за чего 80% пользователей бросают диету. Donik Coach AI решает эту проблему быстрой отправкой фото блюда в Telegram с мгновенным результатом.",
        solutionAndArchitecture: [
          "Реализованы вебхуки Telegram Bot API для мгновенной обработки сообщений.",
          "Подключена мультимодальная модель компьютерного зрения для распознавания ингредиентов и веса.",
          "Сформировано 9 специализированных планов питания (похудение, набор массы, сушка).",
          "Разработан личный кабинет с безопасным входом по номеру телефона."
        ],
        verifiedFeatures: [
          "Автоматический расчет калорий и макронутриентов по фото",
          "9 профессиональных программ питания под разные цели",
          "База тренировок и упражнений для спортзала",
          "Синхронизация Telegram-бота и веб-платформы через единую базу"
        ],
        technicalDecisions: [
          {
            title: "Telegram как основная платформа",
            description:
              "Telegram — главный канал связи в Узбекистане, что обеспечивает максимальный охват и удобство."
          },
          {
            title: "Мультимодальный AI анализ",
            description:
              "Прямой анализ изображений заменил неудобный ручной поиск продуктов по базам данных."
          }
        ]
      },
      tr: {
        title: "Donik Coach AI",
        tagline: "Yemek fotoğrafından kalori analizi, 9 beslenme programı ve Telegram Mini App platformu",
        category: "Telegram Mini App / Fitness ve Yapay Zeka",
        description:
          "Yemek fotoğraflarından kalori ve makro tahmini yapan, 9 diyet programı ve spor salonu rehberi sunan yapay zeka destekli platform.",
        detailedDescription: [
          "Donik Coach AI, beslenme takibini ve fitness planlamasını doğrudan Telegram ve web ortamına taşıyarak manuel kayıt zahmetini ortadan kaldırır.",
          "Sistem, yemek fotoğraflarını çok modlu yapay zeka ile analiz eder, hedefe özel 9 diyet programı sunar ve telefon numarasıyla güvenli giriş sağlayan web paneli barındırır."
        ],
        role: "Arka Uç ve AI Bot Geliştiricisi",
        timeline: "2026",
        statusText: "2026'da aktif",
        verifiedHighlights: [
          "Telegram botu ve web platformuyla çalışan kapsamlı fitness ekosistemi",
          "Görsel AI ile yemek fotoğraflarından protein, yağ, karbonhidrat ve kalori analizi",
          "Farklı fitness hedefleri için hazırlanmış 9 profesyonel beslenme programı",
          "Ayrıntılı egzersiz rehberi ve antrenman modülleri"
        ],
        problemAndGoal:
          "Geleneksel beslenme takibi yorucudur ve kullanıcıların çoğu kısa sürede bırakır. Donik Coach AI, tek bir fotoğraf göndererek anında besin değerlerini almayı ve düzenli antrenmanı kolaylaştırır.",
        solutionAndArchitecture: [
          "Telegram Bot API webhookları ile hızlı ve kesintisiz yanıt mimarisi kuruldu.",
          "Çok modlu görsel yapay zeka entegre edilerek yemek analizi otomatikleştirildi.",
          "Kilo verme, kas geliştirme ve form koruma için 9 beslenme rasyonu hazırlandı.",
          "Telefon doğrulamasıyla çalışan güvenli web paneli inşa edildi."
        ],
        verifiedFeatures: [
          "Fotoğraftan anında kalori ve makro besin hesabı",
          "9 profesyonel hedef odaklı beslenme planı",
          "Kas gruplarına göre düzenlenmiş spor salonu egzersizleri",
          "Ortak veritabanı üzerinden Telegram ve web entegrasyonu"
        ],
        technicalDecisions: [
          {
            title: "Telegram Odaklı Mimari",
            description:
              "Kullanıcıların en sık kullandığı platform olması sebebiyle Telegram ana kanal olarak seçildi."
          },
          {
            title: "Görsel AI ile Hızlı Kayıt",
            description:
              "Manuel veri girişi yerine görsel zeka modelleriyle kullanım sürtünmesi sıfıra indirildi."
          }
        ]
      },
      de: {
        title: "Donik Coach AI",
        tagline: "Telegram Mini App & Web-Fitnessplattform mit KI-Ernährungstracking per Foto",
        category: "Telegram Mini App / Fitness & KI",
        description:
          "Eine intelligente Fitnessplattform mit KI-Kalorienschätzung per Foto, 9 Ernährungsplänen und Trainingsanleitungen.",
        detailedDescription: [
          "Donik Coach AI bringt Ernährungs- und Trainingsplanung direkt zu Telegram- und Webnutzern, ohne mühsames manuelles Zählen von Kalorien.",
          "Ein multimodales KI-Modell analysiert Fotos von Mahlzeiten, errechnet Nährwerte, stellt 9 professionelle Diätpläne bereit und bietet detaillierte Gym-Übungen."
        ],
        role: "Backend- & KI-Bot-Entwickler",
        timeline: "2026",
        statusText: "Aktiv in 2026",
        verifiedHighlights: [
          "Vollständiges Fitness-Ökosystem mit Telegram-Bot und Web-Dashboard",
          "Foto-basierte Kalorien- und Makronährstoffschätzung mittels multimodaler KI",
          "9 strukturierte Ernährungspläne für Gewichtsverlust, Muskelaufbau und Definition",
          "Umfassender Übungskatalog mit genauen Trainingsanleitungen"
        ],
        problemAndGoal:
          "Manuelles Eintragen von Lebensmitteln führt bei den meisten Nutzern schnell zu Frust. Donik Coach AI löst dies, indem ein einfaches Foto in Telegram genügt, um Nährwerte und Trainingshinweise zu erhalten.",
        solutionAndArchitecture: [
          "Telegram Bot API Webhooks für blitzschnelle Antwortzeiten.",
          "Integration multimodaler Bildverarbeitungsmodelle zur automatischen Lebensmittelerkennung.",
          "Strukturierung von 9 zielgerichteten Ernährungsplänen.",
          "Web-Dashboard mit sicherer Authentifizierung über Mobilfunknummer."
        ],
        verifiedFeatures: [
          "Automatische Kalorien- und Makroberechnung aus Fotos",
          "9 maßgeschneiderte professionelle Ernährungspläne",
          "Strukturiertes Gym-Workout-Verzeichnis",
          "Nahtlose Synchronisation zwischen Telegram und Webportal"
        ],
        technicalDecisions: [
          {
            title: "Telegram als primäre Plattform",
            description:
              "Höchste Nutzerbindung durch direkten Zugang im täglichen Messenger."
          },
          {
            title: "Multimodale visuelle Erkennung",
            description:
              "Bilderfassung ersetzt langwierige Textsuche in Datenbanken."
          }
        ]
      },
      fr: {
        title: "Donik Coach AI",
        tagline: "Mini App Telegram & plateforme fitness avec suivi nutritionnel IA par photo",
        category: "Mini App Telegram / Fitness & IA",
        description:
          "Plateforme fitness intelligente proposant l'estimation des calories par photo de repas, 9 rations alimentaires et des entraînements en salle.",
        detailedDescription: [
          "Donik Coach AI simplifie le suivi nutritionnel et l'entraînement directement sur Telegram et le web mobile.",
          "Grâce à une IA multimodale, le système évalue la composition nutritionnelle à partir d'une photo, offre 9 plans alimentaires sur mesure et structure les séances de musculation."
        ],
        role: "Développeur Backend & Bot IA",
        timeline: "2026",
        statusText: "Actif en 2026",
        verifiedHighlights: [
          "Écosystème fitness complet associant bot Telegram et tableau de bord web",
          "Estimation calorique et répartition en macronutriments par analyse photo IA",
          "9 plans alimentaires professionnels adaptés aux différents objectifs sportifs",
          "Guide d'exercices de musculation avec exécution détaillée"
        ],
        problemAndGoal:
          "La saisie manuelle des aliments décourage la grande majorité des sportifs. Donik Coach AI permet d'envoyer simplement une photo dans Telegram pour obtenir une estimation immédiate.",
        solutionAndArchitecture: [
          "Déploiement de webhooks Telegram Bot API hautement réactifs.",
          "Intégration de modèles de vision IA pour reconnaître les ingrédients et calculer les macros.",
          "Élaboration de 9 régimes nutritionnels ciblés.",
          "Portail web sécurisé avec authentification par numéro de téléphone."
        ],
        verifiedFeatures: [
          "Analyse instantanée des calories par prise de vue",
          "9 régimes alimentaires élaborés scientifiquement",
          "Catalogue d'exercices guidés pour la musculation",
          "Synchronisation unifiée entre Telegram et le web"
        ],
        technicalDecisions: [
          {
            title: "Telegram en canal principal",
            description:
              "Facilité d'accès maximale dans l'application de messagerie la plus populaire."
          },
          {
            title: "Vision multimodale par IA",
            description:
              "Remplacement de la saisie manuelle par la reconnaissance visuelle instantanée."
          }
        ]
      },
      es: {
        title: "Donik Coach AI",
        tagline: "Mini App de Telegram y plataforma fitness con cálculo nutricional por foto y 9 dietas",
        category: "Mini App de Telegram / Fitness e IA",
        description:
          "Plataforma de fitness y bot de Telegram con análisis calórico por fotografía, 9 planes alimenticios y rutinas de gimnasio.",
        detailedDescription: [
          "Donik Coach AI traslada el control nutricional y la planificación de entrenamientos a Telegram y la web móvil, eliminando registros manuales tediosos.",
          "A través de IA multimodal, analiza fotos de comidas para estimar macronutrientes, brinda 9 planes nutricionales adaptados y organiza rutinas de gimnasio."
        ],
        role: "Desarrollador Backend y Bot IA",
        timeline: "2026",
        statusText: "Activo en 2026",
        verifiedHighlights: [
          "Ecosistema fitness operativo con bot de Telegram y panel web de control",
          "Estimación de calorías y macronutrientes a partir de fotos con IA multimodal",
          "Catálogo de 9 planes nutricionales estructurados para distintos objetivos",
          "Guía detallada de ejercicios de fuerza y rutinas de gimnasio"
        ],
        problemAndGoal:
          "Pesar alimentos y buscar ingredientes manualmente provoca que muchos usuarios abandonen. Donik Coach AI permite fotografiar el plato y recibir al instante el desglose calórico y su rutina diaria.",
        solutionAndArchitecture: [
          "Webhooks del Telegram Bot API para comunicación inmediata.",
          "Modelos de visión por IA para clasificar alimentos y estimar su valor nutricional.",
          "Estructuración de 9 raciones dietéticas para pérdida de peso o ganancia muscular.",
          "Panel web con autenticación segura mediante número telefónico."
        ],
        verifiedFeatures: [
          "Reconocimiento de comidas y estimación calórica por imagen",
          "9 programas nutricionales profesionales",
          "Directorio de ejercicios de gimnasio con técnica explicada",
          "Sincronización integral entre Telegram y el navegador"
        ],
        technicalDecisions: [
          {
            title: "Telegram como cliente prioritario",
            description:
              "Aprovechamiento de la mensajería diaria para eliminar fricciones de acceso."
          },
          {
            title: "Análisis visual multimodal",
            description:
              "Sustitución de formularios manuales por procesamiento de imágenes con IA."
          }
        ]
      },
      it: {
        title: "Donik Coach AI",
        tagline: "Mini App Telegram e piattaforma fitness con stima calorica da foto e 9 piani alimentari",
        category: "Mini App Telegram / Fitness e IA",
        description:
          "Piattaforma intelligente di fitness e bot Telegram con stima calorica tramite foto, 9 piani nutrizionali e schede di allenamento.",
        detailedDescription: [
          "Donik Coach AI porta la pianificazione nutrizionale e il fitness su Telegram e sul web, superando il tedioso tracciamento manuale.",
          "Il sistema impiega IA multimodale per analizzare le foto dei pasti, calcolare le calorie, suggerire 9 piani alimentari e fornire schede per la palestra."
        ],
        role: "Sviluppatore Backend e Bot AI",
        timeline: "2026",
        statusText: "Attivo nel 2026",
        verifiedHighlights: [
          "Ecosistema fitness con bot Telegram e dashboard web sincronizzati",
          "Calcolo di calorie e macronutrienti da foto del pasto con IA visiva",
          "9 regimi nutrizionali specifici per ogni obiettivo di salute",
          "Schede di allenamento in palestra con indicazioni tecniche"
        ],
        problemAndGoal:
          "Registrare ogni ingrediente a mano causa abbandoni frequenti. Donik Coach AI consente di scattare una foto al piatto in Telegram per ricevere istantaneamente le calorie e proseguire il programma.",
        solutionAndArchitecture: [
          "Webhook Telegram ad alta reattività per gestire comandi e media.",
          "Modelli di computer vision per riconoscere cibi e calcolare le porzioni.",
          "9 piani dietetici formulati per diverse esigenze energetiche.",
          "Pannello web sicuro con accesso tramite numero telefonico."
        ],
        verifiedFeatures: [
          "Stima calorica automatizzata tramite scatto fotografico",
          "9 piani nutrizionali certificati",
          "Archivio esercizi per la palestra con istruzioni chiare",
          "Integrazione rapida tra bot Telegram e portale web"
        ],
        technicalDecisions: [
          {
            title: "Telegram come canale primario",
            description:
              "Accesso immediato nell'app di messaggistica più usata, abbattendo le barriere all'uso."
          },
          {
            title: "Analisi multimodale",
            description:
              "L'elaborazione delle immagini riduce drasticamente i tempi di registrazione."
          }
        ]
      },
      ko: {
        title: "Donik Coach AI",
        tagline: "식사 사진 기반 칼로리 추정, 9가지 식단 및 헬스장 운동 루틴 텔레그램 플랫폼",
        category: "텔레그램 미니 앱 / 피트니스 & AI",
        description:
          "식사 사진을 통한 칼로리 및 영양소 자동 분석, 9가지 전문 식단 및 헬스장 운동 가이드를 제공하는 지능형 피트니스 플랫폼.",
        detailedDescription: [
          "Donik Coach AI는 번거로운 수동 식단 입력을 없애고 텔레그램과 모바일 웹에서 직접 영양 관리와 운동 플랜을 실행할 수 있도록 돕습니다.",
          "멀티모달 AI를 활용하여 음식 사진 한 장으로 영양 성분을 분석하고, 목표별 9가지 식단 플랜과 전화번호 인증 기반의 안전한 웹 대시보드를 제공합니다."
        ],
        role: "백엔드 및 AI 봇 개발자",
        timeline: "2026",
        statusText: "2026년 운영 중",
        verifiedHighlights: [
          "텔레그램 봇과 반응형 웹 대시보드가 결합된 피트니스 생태계",
          "멀티모달 AI를 활용한 식사 사진 칼로리 및 탄단지 영양소 자동 추정",
          "감량, 증량, 린매스업을 위한 9가지 전문 맞춤형 식단 라이브러리",
          "부위별 운동 가이드와 올바른 자세 지침을 담은 운동 디렉토리"
        ],
        problemAndGoal:
          "매 끼니마다 무게를 재고 칼로리를 손으로 검색해 기록하는 방식은 80% 이상의 이용자가 중도 포기하게 만듭니다. Donik Coach AI는 사진 전송만으로 즉각적인 영양 인사이트를 제공합니다.",
        solutionAndArchitecture: [
          "Telegram Bot API 웹훅을 통한 즉각적인 메시지 및 미디어 처리.",
          "멀티모달 비전 모델을 연결하여 사진 속 식재료와 대략적인 양 자동 인식.",
          "체계적인 9가지 식단 데이터를 구조화하여 목표별 맞춤 제공.",
          "전화번호 인증을 거치는 안전한 웹 관리 패널 구축."
        ],
        verifiedFeatures: [
          "사진 한 장으로 칼로리와 영양 성분 즉시 계산",
          "9가지 과학적 맞춤형 전문 식단 플랜",
          "근육 부위별 헬스장 운동 동작 라이브러리",
          "단일 데이터베이스를 통한 봇과 웹 대시보드 실시간 동기화"
        ],
        technicalDecisions: [
          {
            title: "텔레그램 중심 클라이언트 설계",
            description:
              "우즈베키스탄에서 가장 널리 쓰이는 메신저를 채택하여 사용자의 진입 장벽을 완전히 제거."
          },
          {
            title: "멀티모달 시각 분석",
            description:
              "번거로운 텍스트 검색 대신 사진 촬영으로 식단을 기록하도록 개선하여 지속적인 기록률 향상."
          }
        ]
      },
      zh: {
        title: "Donik Coach AI",
        tagline: "Telegram 小程序与 Web 健身平台，基于 AI 图像热量识别与 9 种定制饮食方案",
        category: "Telegram 小程序 / 健身与人工智能",
        description:
          "集照片热量智能测算、9套专业饮食食谱及器械训练计划于一体的 Telegram 智能健身应用与 Web 平台。",
        detailedDescription: [
          "Donik Coach AI 将科学膳食追踪与健身指导无缝集成至 Telegram 及移动端网页，彻底摆脱传统繁琐的手动打卡。",
          "系统通过多模态 AI 模型分析餐食图片并估算热量宏量指标，提供 9 套针对性专业膳食方案，并配备器械训练标准动作指引。"
        ],
        role: "后端开发兼 AI 机器人工程师",
        timeline: "2026",
        statusText: "2026年持续稳定运行",
        verifiedHighlights: [
          "由 Telegram 机器人与 Web 管理后台共同组成的闭环健身生态系统",
          "基于多模态视觉模型实现拍摄菜品自动识别蛋白质、脂肪、碳水及卡路里",
          "内置针对减脂、增肌与塑形等不同目标的 9 套科学食谱体系",
          "按肌群分类的系统化健身房训练动作指导库"
        ],
        problemAndGoal:
          "每日手工录入食材卡路里极其繁琐，导致超过80%的用户中途放弃。Donik Coach AI 只需在 Telegram 中发送一张食物照片，即可秒级获取营养数据与个性化运动建议。",
        solutionAndArchitecture: [
          "搭建高并发 Telegram Webhook，确保指令交互毫秒级响应。",
          "接入多模态视觉 AI 模型，自动识别食材种类与大致分量。",
          "归纳 9 大定制化专业营养摄入方案，适应不同体能阶段。",
          "开发支持手机号码安全认证的专属 Web 仪表盘。"
        ],
        verifiedFeatures: [
          "随手拍餐食即时估算卡路里与三大宏量营养素",
          "9 套经专业验证的科学饮食营养食谱",
          "标准动作解析与器械训练全套指导",
          "Telegram 机器人与网页端统一数据同步"
        ],
        technicalDecisions: [
          {
            title: "以 Telegram 为主入口",
            description:
              "利用高频使用的即时通讯工具，将用户使用阻力降至最低。"
          },
          {
            title: "多模态视觉智能解析",
            description:
              "以图像识别取代繁琐文本检索，大幅提升用户持续记录意愿。"
          }
        ]
      },
      ja: {
        title: "Donik Coach AI",
        tagline: "食事写真からのAIカロリー推定・9つの食事プラン・ジムワークアウト対応プラットフォーム",
        category: "Telegram Mini App / フィットネス & AI",
        description:
          "食事写真からカロリーや栄養価を自動判定し、9種類のプロフェッショナルな食事プランとジムトレーニングを提供するAI搭載フィットネスシステム。",
        detailedDescription: [
          "Donik Coach AIは、面倒な手動入力の手間を省き、TelegramやモバイルWebから手軽に栄養とワークアウトを管理できるフィットネス基盤です。",
          "マルチモーダルAIが食事写真を瞬時に解析してPFCバランスとカロリーを算出し、9つの目的に応じた食事プログラムと体系的な筋トレメニューを配信します。"
        ],
        role: "バックエンド & AI Bot エンジニア",
        timeline: "2026",
        statusText: "2026年稼働中",
        verifiedHighlights: [
          "Telegram BotとWebダッシュボードが連動する統合フィットネスエコシステム",
          "マルチモーダルAIによる食事画像からの瞬時カロリー・PFCバランス推定",
          "減量・筋肥大・体型維持など目的に応じた9つの専門食事メニュー",
          "部位別トレーニングと正しいフォームのガイダンスカタログ"
        ],
        problemAndGoal:
          "日々のカロリー計算は手間がかかり、継続できない人が大半です。Donik Coach AIはTelegramで料理の写真を送るだけで即座に栄養情報を把握できる環境を提供します。"
        ,
        solutionAndArchitecture: [
          "Telegram Bot API Webhookによるリアルタイムな応答処理。",
          "マルチモーダル画像認識モデルによる食材検出とカロリー自動推定。",
          "目的に応じた9つの食事メニューの構造化データベース構築。",
          "電話番号認証を備えた安全なWeb管理ダッシュボードの開発。"
        ],
        verifiedFeatures: [
          "写真送信による自動カロリー・栄養素計算",
          "専門的に設計された9つの目的別食事メニュー",
          "ジムでの筋トレに対応した部位別種目カタログ",
          "TelegramとWebポータルのリアルタイム同期"
        ],
        technicalDecisions: [
          {
            title: "Telegram主軸のクライアント設計",
            description:
              "日常的なメッセンジャー上で完結させることで継続率を最大化。"
          },
          {
            title: "画像認識AIの活用",
            description:
              "手作業のテキスト検索をなくし、画像1枚で完結する快適なUXを実現。"
          }
        ]
      },
      ar: {
        title: "Donik Coach AI",
        tagline: "تطبيق تيليجرام مصغر ومنصة ويب للياقة البدنية مع حساب السعرات عبر الصور و 9 برامج غذائية",
        category: "تطبيق تيليجرام مصغر / لياقة بدنية وذكاء اصطناعي",
        description:
          "منصة ذكية لحساب السعرات الحرارية من صور الوجبات، وتوفير 9 حميات غذائية احترافية، وتمارين رياضية متكاملة.",
        detailedDescription: [
          "تنقل Donik Coach AI تتبع التغذية وجداول التمرين مباشرة إلى تيليجرام والويب دون عناء الحساب اليدوي اليومي.",
          "يعتمد النظام على ذكاء اصطناعي متعدد الوسائط لتحليل صور الأطعمة، وتقديم 9 أنظمة غذائية مخصصة، وجداول تمارين رياضية دقيقة."
        ],
        role: "مطور الواجهة الخلفية وبوت الذكاء الاصطناعي",
        timeline: "2026",
        statusText: "نشط في 2026",
        verifiedHighlights: [
          "منظومة رياضية متكاملة تجمع بين بوت تيليجرام ولوحة تحكم ويب تفاعلية",
          "تقدير ذكي للسعرات والقيم الغذائية عبر الصور بواسطة الذكاء الاصطناعي متعدد الوسائط",
          "مكتبة تضم 9 برامج غذائية مدروسة لمختلف أهداف اللياقة البدنية",
          "دليل شامل لتمارين الصالات الرياضية وشرح التقنيات الصحيحة"
        ],
        problemAndGoal:
          "غالباً ما يؤدي التسجيل اليدوي المرهق للوجبات إلى ترك الحمية. تحل Donik Coach AI ذلك بالسماح بإرسال صورة الوجبة لتلقي التحليل الفوري وتوجيهات التمرين.",
        solutionAndArchitecture: [
          "تطوير خطافات ويب Telegram Bot API لاستجابة فورية للأوامر والصور.",
          "دمج نماذج الرؤية الحاسوبية للتعرف على المكونات وحساب الماكروز بدقة.",
          "بناء 9 أنظمة غذائية متوازنة لإنقاص الوزن أو بناء العضلات.",
          "إنشاء بوابة ويب بتسجيل دخول آمن عبر رقم الهاتف."
        ],
        verifiedFeatures: [
          "تحليل صور الوجبات وحساب السعرات والماكروز تلقائياً",
          "9 أنظمة غذائية متخصصة ومصممة علمياً",
          "دليل تمارين كمال الأجسام واللياقة البدنية",
          "مزامنة موحدة بين بوت تيليجرام ومنصة الويب"
        ],
        technicalDecisions: [
          {
            title: "تيليجرام كواجهة أساسية",
            description:
              "الاستفادة من أكثر تطبيقات المراسلة انتشاراً لضمان سهولة الوصول دون حواجز."
          },
          {
            title: "التحليل البصري بالذكاء الاصطناعي",
            description:
              "استبدال البحث النصي المعقد بالتحليل الفوري للصور الملتقطة."
          }
        ]
      }
    }
  },
  {
    id: "al-harameen",
    number: "03",
    slug: "al-harameen",
    year: "2025",
    liveUrl: "https://www.alharameenuz.uz/",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "JSON-LD SEO",
      "OpenGraph",
      "Responsive UI"
    ],
    accentColor: "#E3B341",
    imageSrc: "/images/projects/al-harameen.jpg",
    imageAlt: "Al Harameen Uzbekistan official distributor brand website and certificate preview",
    status: "Shipped",
    translations: {
      en: {
        title: "Al Harameen Uzbekistan",
        tagline: "Official distributor digital brand & product showcase website",
        category: "E-commerce / Brand Showcase",
        description:
          "The official brand website and product showcase for Al Harameen in Uzbekistan, presenting smart Islamic timepieces and authorized distributor certificate.",
        detailedDescription: [
          "Al Harameen Uzbekistan serves as the primary digital presence for the official distributor of Al Harameen smart Islamic timepieces and modern wristwatches.",
          "The website provides comprehensive product specifications, Azon prayer time calculation details, Qibla compass features, official 1-year warranty documentation, and direct ordering channels."
        ],
        role: "Frontend Developer",
        timeline: "2025",
        statusText: "Shipped in 2025",
        verifiedHighlights: [
          "Official distributor online presentation for original Al Harameen watches",
          "Detailed technical showcase of Azon notification, Qibla direction, and Islamic calendar features",
          "Full SEO implementation with Schema.org JSON-LD Store metadata and localized tags",
          "Clean, mobile-first responsive design tailored for the Uzbek market"
        ],
        problemAndGoal:
          "Al Harameen needed an authentic, high-credibility digital showcase in Uzbekistan to distinguish official distributor products, communicate features (such as Azon sound and Qibla compass), and channel verified inquiries.",
        solutionAndArchitecture: [
          "Constructed a clean, high-performance responsive website using modern React and Tailwind CSS.",
          "Implemented comprehensive structured data (JSON-LD Store/Brand schema) and OpenGraph tags to ensure optimal search engine rankings and social preview cards.",
          "Organized product displays highlighting genuine warranty coverage, exact technical specifications, and official retail distribution channels.",
          "Integrated direct communication bridges to Telegram and Instagram channels for customer support."
        ],
        verifiedFeatures: [
          "Comprehensive Islamic watch catalog (Azon sound, prayer calculation, Qibla compass)",
          "Official 1-year warranty and authenticity verification documentation",
          "Structured search engine metadata with high Google ranking in region",
          "Fast static delivery with responsive mobile navigation"
        ],
        technicalDecisions: [
          {
            title: "Static-First Performance",
            description:
              "Engineered the showcase as a high-speed static bundle to ensure sub-second loading on mobile cellular networks across Uzbekistan."
          },
          {
            title: "Structured Schema Integration",
            description:
              "Embedded rich JSON-LD data so search engines index the business as the authorized distributor with official pricing context."
          }
        ]
      },
      uz: {
        title: "Al Harameen Uzbekistan",
        tagline: "Al Harameen brendining O‘zbekistondagi rasmiy distribyutori sayti",
        category: "Elektron Tijorat / Rasmiy Distribyutor",
        description:
          "Al Harameen original aqlli islomiy soatlari va devor azon soatlarining O‘zbekistondagi rasmiy distribyutori veb-sayti va mahsulotlar katalogi.",
        detailedDescription: [
          "Al Harameen Uzbekistan — Al Harameen brendining O‘zbekistondagi rasmiy distribyutorining birlamchi onlayn vitrinasi va brend veb-sayti.",
          "Sayt original aqlli islomiy qo‘l va stol/devor soatlari, azon ovozi, namoz vaqtlari va qibla yo‘nalishini ko‘rsatuvchi funksiyalar, rasmiy 1 yillik kafolat va O‘zbekiston bo‘ylab yetkazib berish shartlarini taqdim etadi."
        ],
        role: "Frontend Dasturchisi",
        timeline: "2025",
        statusText: "2025-yilda ishga tushirilgan",
        verifiedHighlights: [
          "Original Al Harameen brendining O‘zbekistondagi rasmiy distribyutori sertifikati va taqdimoti",
          "Azon ovozi, qibla kompas va namoz vaqtlari hisob-kitoblarining texnik vitrinasi",
          "Google qidiruv tizimida yuqori o‘rinlar uchun to‘liq JSON-LD va OpenGraph SEO optimallashtiruvi",
          "Mobil qurilmalarda tezkor yuklanuvchi va xaridorga qulay zamonaviy dizayn"
        ],
        problemAndGoal:
          "Bozordagi nusxalar (feyklar) orasida mijozlarga rasmiy distribyutorning haqiqiy mahsulotlarini ko‘rsatish, rasmiy sertifikat va 1 yillik kafolat bilan xaridorlar ishonchini qozonish talab etilgan edi.",
        solutionAndArchitecture: [
          "React va Tailwind CSS asosida tezkor, oqlangan va premium ko‘rinishdagi interfeys qurildi.",
          "Mahsulotlar katalogi azon, qibla va taqvim xususiyatlari bo‘yicha to‘liq ta'riflandi.",
          "Schema.org Store va Brand formatidagi JSON-LD ma'lumotlari kiritilib, qidiruv natijalari yaxshilandi.",
          "Buyurtmalarni tezkor qabul qilish uchun Telegram va telefon orqali aloqa bog‘landi."
        ],
        verifiedFeatures: [
          "Islomiy qo‘l va devor soatlarining to‘liq modeli katalogi",
          "Rasmiy sertifikat va 1 yillik kafolat kafolati",
          "Tezkor yuklanuvchi, barcha smartfonlarga moslashgan interfeys",
          "O‘zbekiston bo‘ylab buyurtma berishning qulay mexanizmi"
        ],
        technicalDecisions: [
          {
            title: "Yuqori Tezlikdagi Statik Yetkazib Berish",
            description:
              "Mobil internet tezligi past bo‘lgan sharoitda ham sayt bir zumda ochilishi uchun yengil va optimallashtirilgan tuzilma tanlandi."
          },
          {
            title: "Qidiruv Tizimlari Uchun Strukturaviy Ma'lumot",
            description:
              "Google va boshqa qidiruv platformalarida brend distribyutori sifatida birinchi o‘rinlarda chiqishi uchun maxsus Schema integratsiya qilindi."
          }
        ]
      },
      ru: {
        title: "Al Harameen Uzbekistan",
        tagline: "Официальный сайт и витрина оригинальной продукции Al Harameen в Узбекистане",
        category: "Электронная коммерция / Официальный дистрибьютор",
        description:
          "Официальный веб-сайт и каталог оригинальных исламских часов Al Harameen в Узбекистане с сертификатом дистрибьютора и 1 годом гарантии.",
        detailedDescription: [
          "Al Harameen Uzbekistan — ключевая цифровая площадка официального дистрибьютора оригинальных часов Al Harameen на территории Узбекистана.",
          "Сайт представляет смарт-часы с расчетом времени намаза, звуком азана, определением направления киблы, официальным сертификатом подлинности и быстрой доставкой по всей стране."
        ],
        role: "Frontend разработчик",
        timeline: "2025",
        statusText: "Запущен в 2025 году",
        verifiedHighlights: [
          "Официальная презентация бренда и сертификат дистрибьютора оригинальных часов Al Harameen",
          "Подробная витрина моделей со звуковым оповещением азана и компасом киблы",
          "Полная SEO-оптимизация со структурированными данными JSON-LD и метатегами OpenGraph",
          "Быстрая адаптивная верстка, оптимизированная для мобильных пользователей Узбекистана"
        ],
        problemAndGoal:
          "На фоне обилия подделок дистрибьютору требовался авторитетный цифровой ресурс, подтверждающий официальный статус, 1 год гарантии и прямую связь для оформления заказов.",
        solutionAndArchitecture: [
          "Разработан легкий и производительный веб-сайт на React и Tailwind CSS.",
          "Внедрена микроразметка Schema.org (Store/Brand) в формате JSON-LD для высоких позиций в Google.",
          "Организован каталог продукции с акцентом на оригинальные характеристики и гарантию.",
          "Настроена быстрая интеграция с Telegram и Instagram для мгновенной консультации покупателей."
        ],
        verifiedFeatures: [
          "Каталог исламских наручных и настенных часов (азан, кибла, лунный календарь)",
          "Сертификат официального дистрибьютора и документация гарантии",
          "Оптимизированная статическая сборка для мобильных сетей",
          "Удобное оформление заказа с доставкой по Узбекистану"
        ],
        technicalDecisions: [
          {
            title: "Максимальная скорость отдачи",
            description:
              "Использование статической генерации для мгновенного открытия даже на медленном мобильном интернете."
          },
          {
            title: "Структурированные данные SEO",
            description:
              "Интеграция Schema JSON-LD для распознавания сайта поисковиками как официального дистрибьютора."
          }
        ]
      },
      tr: {
        title: "Al Harameen Uzbekistan",
        tagline: "Al Harameen markasının Özbekistan'daki resmi distribütör vitrini ve web sitesi",
        category: "E-Ticaret / Resmi Distribütör",
        description:
          "Al Harameen akıllı ezan saatleri ve duvar saatlerinin Özbekistan resmi distribütörlüğü için hazırlanan marka vitrini ve ürün kataloğu.",
        detailedDescription: [
          "Al Harameen Uzbekistan, Al Harameen markasının Özbekistan'daki yetkili distribütörünün dijital varlığı ve resmi ürün vitrinidir.",
          "Sitede ezan vakti hesabı, kıble pusulası, 1 yıllık resmi garanti sertifikası ve Özbekistan geneli teslimat şartları sunulmaktadır."
        ],
        role: "Ön Yüz Geliştiricisi",
        timeline: "2025",
        statusText: "2025'te yayına alındı",
        verifiedHighlights: [
          "Orijinal Al Harameen saatleri için resmi distribütörlük sunumu ve sertifika vitrini",
          "Ezan sesi, kıble yönü ve namaz vakitleri özelliklerinin detaylı tanıtımı",
          "Schema.org JSON-LD ve OpenGraph ile kapsamlı arama motoru optimizasyonu",
          "Mobil öncelikli, modern ve akıcı kullanıcı deneyimi"
        ],
        problemAndGoal:
          "Pazardaki sahte ürünler arasında orijinal garantili saatleri tanıtmak ve distribütör yetkisini belgeleyerek güven sağlamak hedeflendi.",
        solutionAndArchitecture: [
          "React ve Tailwind CSS ile hızlı yüklenen, şık bir marka vitrini oluşturuldu.",
          "Arama motorlarında üst sıralara çıkmak için zengin JSON-LD verileri entegre edildi.",
          "Teknik özellikler, garanti koşulları ve orijinal ürün sertifikası ön plana çıkarıldı.",
          "Hızlı sipariş için Telegram ve telefon hatları bağlandı."
        ],
        verifiedFeatures: [
          "Kapsamlı İslami saat kataloğu (Ezan sesi, namaz takvimi, kıble pusulası)",
          "1 yıllık resmi garanti ve orijinallik belgesi",
          "Mobil cihazlara tam uyumlu hafif web yapısı",
          "Özbekistan geneli hızlı sipariş akışı"
        ],
        technicalDecisions: [
          {
            title: "Statik Performans Önceliği",
            description:
              "Mobil ağlarda bile saniyenin altında açılış için hafif yapı tercih edildi."
          },
          {
            title: "Yapılandırılmış Veri Optimizasyonu",
            description:
              "Google'da yetkili distribütör olarak tescillenmek için Schema JSON-LD uygulandı."
          }
        ]
      },
      de: {
        title: "Al Harameen Uzbekistan",
        tagline: "Offizielle Marken- und Produkt-Showcase-Website des Al Harameen Distributors in Usbekistan",
        category: "E-Commerce / Offizieller Distributor",
        description:
          "Offizielle Marken-Website und Produkt-Präsentation für Al Harameen in Usbekistan mit autorisiertem Zertifikat und 1 Jahr Garantie.",
        detailedDescription: [
          "Al Harameen Uzbekistan dient als primäre digitale Anlaufstelle für den autorisierten Distributor von Al Harameen Azan-Uhren in Usbekistan.",
          "Die Website bietet vollständige Produktspezifikationen, Azan-Gebetszeitberechnungen, Qibla-Kompass-Funktionen und das offizielle Vertriebszertifikat."
        ],
        role: "Frontend-Entwickler",
        timeline: "2025",
        statusText: "Veröffentlicht 2025",
        verifiedHighlights: [
          "Offizielle Präsentation des autorisierten Al Harameen Distributors in Usbekistan",
          "Detaillierte Präsentation der Azan-Funktion, Gebetszeiten und Qibla-Ausrichtung",
          "Umfassende SEO-Optimierung mit Schema.org JSON-LD und OpenGraph-Tags",
          "Schnelles, mobil-optimiertes Design für den usbekischen Markt"
        ],
        problemAndGoal:
          "Zur Abgrenzung von Fälschungen benötigte der Distributor eine glaubwürdige digitale Plattform, die Echtheit, Garantie und direkten Kontakt gewährleistet.",
        solutionAndArchitecture: [
          "Entwicklung einer schnellen Marken-Webseite mit React und Tailwind CSS.",
          "Einbindung strukturierter Daten (JSON-LD Store/Brand Schema) für Top-Suchmaschinenrankings.",
          "Strukturierte Produktseiten mit Fokus auf 1 Jahr Garantie und Originalität.",
          "Direkte Anbindung an Telegram-Support für schnelle Kaufabwicklung."
        ],
        verifiedFeatures: [
          "Islamischer Uhrenkatalog (Azan-Ruf, Gebetszeiten, Qibla-Kompass)",
          "Offizielles Vertriebszertifikat und 1 Jahr Garantiebeleg",
          "Optimierte Ladezeit für Mobilfunknetze",
          "Schnelle Bestellkanäle für ganz Usbekistan"
        ],
        technicalDecisions: [
          {
            title: "Statische Bereitstellung",
            description:
              "Minimale Ladezeiten auf mobilen Geräten durch statisch optimierte Auslieferung."
          },
          {
            title: "Strukturierte Schema-Daten",
            description:
              "Optimierte Auffindbarkeit in Suchmaschinen als verifizierter Distributor."
          }
        ]
      },
      fr: {
        title: "Al Harameen Uzbekistan",
        tagline: "Site officiel de présentation et vitrine de produits du distributeur Al Harameen en Ouzbékistan",
        category: "E-commerce / Distributeur Officiel",
        description:
          "Site vitrine officiel de la marque Al Harameen en Ouzbékistan, présentant montres islamiques connectées et certificat de distribution.",
        detailedDescription: [
          "Al Harameen Uzbekistan constitue la présence en ligne officielle du distributeur agréé des montres et horloges islamiques Al Harameen.",
          "Le site détaille le calcul des heures de prière (Athan), la boussole de la Qibla, la garantie constructeur d'un an et le certificat officiel."
        ],
        role: "Développeur Frontend",
        timeline: "2025",
        statusText: "Lancé en 2025",
        verifiedHighlights: [
          "Présentation officielle du distributeur agréé pour les montres Al Harameen authentiques",
          "Vitrine technique détaillée des fonctions d'appel à la prière et direction de la Qibla",
          "Optimisation SEO complète avec balisage Schema.org JSON-LD et OpenGraph",
          "Design responsive et léger, adapté aux réseaux mobiles d'Ouzbékistan"
        ],
        problemAndGoal:
          "Face aux contrefaçons sur le marché, le distributeur avait besoin d'un site garantissant l'authenticité des produits et facilitant les commandes fiables.",
        solutionAndArchitecture: [
          "Création d'un site élégant et performant avec React et Tailwind CSS.",
          "Intégration de microdonnées Schema.org pour un référencement Google optimal.",
          "Présentation claire du certificat officiel et de la garantie d'un an.",
          "Passerelles directes vers Telegram et Instagram pour le service client."
        ],
        verifiedFeatures: [
          "Catalogue complet de montres et horloges islamiques (Athan, Qibla, calendrier)",
          "Certificat d'authenticité et documentation de garantie d'un an",
          "Affichage rapide optimisé pour smartphones",
          "Processus de commande rapide pour tout l'Ouzbékistan"
        ],
        technicalDecisions: [
          {
            title: "Performance statique prioritaire",
            description:
              "Temps de chargement instantané grâce à une architecture statique légère."
          },
          {
            title: "Données structurées SEO",
            description:
              "Indexation certifiée en tant que distributeur officiel par les moteurs de recherche."
          }
        ]
      },
      es: {
        title: "Al Harameen Uzbekistan",
        tagline: "Sitio web oficial y catálogo de productos del distribuidor Al Harameen en Uzbekistán",
        category: "Comercio Electrónico / Distribuidor Oficial",
        description:
          "Página web oficial y catálogo de relojes islámicos Al Harameen en Uzbekistán con certificado de distribuidor y garantía de 1 año.",
        detailedDescription: [
          "Al Harameen Uzbekistan representa la presencia digital oficial del distribuidor de relojes inteligentes islámicos Al Harameen.",
          "El portal detalla el cálculo del horario de oración Azan, la brújula Qibla, el certificado oficial de distribución y la garantía de 1 año."
        ],
        role: "Desarrollador Frontend",
        timeline: "2025",
        statusText: "Lanzado en 2025",
        verifiedHighlights: [
          "Presentación oficial de la marca y certificación de distribuidor autorizado",
          "Exhibición técnica de funciones de notificación Azan y orientación de Qibla",
          "Optimización SEO integral con metadatos estructurados JSON-LD y OpenGraph",
          "Diseño adaptable, limpio y de carga veloz para dispositivos móviles"
        ],
        problemAndGoal:
          "Para contrarrestar imitaciones, el distribuidor requería una vitrina confiable que certificara la autenticidad y respaldara las compras con garantía real.",
        solutionAndArchitecture: [
          "Construcción de un sitio ágil con React y Tailwind CSS de alta estética visual.",
          "Integración de datos estructurados Schema.org para posicionamiento en buscadores.",
          "Diseño de fichas técnicas con certificado de garantía y distribución oficial.",
          "Canales directos hacia Telegram e Instagram para atención comercial inmediata."
        ],
        verifiedFeatures: [
          "Catálogo completo de relojes islámicos (notificación Azan, Qibla, calendario)",
          "Documentación oficial de garantía de 1 año y autenticidad",
          "Navegación móvil intuitiva y carga ultrarrápida",
          "Canal de pedidos directos para todo Uzbekistán"
        ],
        technicalDecisions: [
          {
            title: "Rendimiento estático prioritario",
            description:
              "Optimización estática para carga inmediata incluso en redes móviles de baja velocidad."
          },
          {
            title: "Esquema estructurado para SEO",
            description:
              "Reconocimiento inequívoco como distribuidor oficial por los motores de búsqueda."
          }
        ]
      },
      it: {
        title: "Al Harameen Uzbekistan",
        tagline: "Sito web ufficiale e vetrina prodotti del distributore Al Harameen in Uzbekistan",
        category: "E-commerce / Distributore Ufficiale",
        description:
          "Sito web del brand e vetrina prodotti per Al Harameen in Uzbekistan, con orologi islamici intelligenti e certificato di garanzia.",
        detailedDescription: [
          "Al Harameen Uzbekistan è il canale digitale principale del distributore ufficiale degli orologi islamici Al Harameen.",
          "Il sito illustra il calcolo dei tempi di preghiera Azan, la bussola per la Qibla, la garanzia ufficiale di 1 anno e il certificato autorizzato."
        ],
        role: "Sviluppatore Frontend",
        timeline: "2025",
        statusText: "Rilasciato nel 2025",
        verifiedHighlights: [
          "Presentazione ufficiale del marchio con certificato di distributore autorizzato",
          "Vetrina tecnica delle funzionalità con avviso Azan e bussola per la Qibla",
          "Ottimizzazione SEO completa con Schema.org JSON-LD e tag OpenGraph",
          "Design reattivo e ultra-rapido per l'esperienza mobile"
        ],
        problemAndGoal:
          "Di fronte alle copie sul mercato, il distributore necessitava di una presenza digitale autorevole per garantire l'autenticità e la copertura della garanzia.",
        solutionAndArchitecture: [
          "Sviluppo di un sito performante con React e Tailwind CSS.",
          "Implementazione di metadati strutturati JSON-LD per la massima indicizzazione su Google.",
          "Esposizione accurata delle specifiche tecniche e del certificato ufficiale.",
          "Integrazione diretta con Telegram per l'assistenza agli ordini."
        ],
        verifiedFeatures: [
          "Catalogo orologi islamici da polso e da parete (Azan, Qibla, calendario)",
          "Certificazione di autenticità e garanzia ufficiale di 1 anno",
          "Caricamento immediato ottimizzato per reti mobili",
          "Procedura d'ordine rapida con consegna in tutto l'Uzbekistan"
        ],
        technicalDecisions: [
          {
            title: "Prestazioni statiche elevate",
            description:
              "Architettura statica per un caricamento in meno di un secondo su dispositivi mobili."
          },
          {
            title: "Dati strutturati SEO",
            description:
              "Certificazione del profilo commerciale tramite schemi JSON-LD Store e Brand."
          }
        ]
      },
      ko: {
        title: "Al Harameen Uzbekistan",
        tagline: "Al Harameen 우즈베키스탄 공식 디스트리뷰터 브랜드 및 제품 쇼케이스 웹사이트",
        category: "이커머스 / 공식 디스트리뷰터",
        description:
          "우즈베키스탄 내 Al Harameen 오리지널 스마트 이슬람 시계의 공식 브랜드 사이트, 공인 인증서 및 1년 무상 보증 쇼케이스.",
        detailedDescription: [
          "Al Harameen Uzbekistan은 우즈베키스탄 공식 유통사의 대표 디지털 채널로서 스마트 이슬람 손목시계 및 아잔 벽시계를 소개합니다.",
          "정확한 아잔 기도 시간 계산, 키블라 나침반 기능, 공식 1년 보증서 및 전국 배송 시스템을 체계적으로 안내합니다."
        ],
        role: "프론트엔드 개발자",
        timeline: "2025",
        statusText: "2025년 배포 완료",
        verifiedHighlights: [
          "정품 Al Harameen 우즈베키스탄 공식 디스트리뷰터 인증서 및 브랜드 쇼케이스",
          "아잔 알림음, 키블라 방위, 이슬람력 연동 기능의 정밀한 기술 사양 소개",
          "Schema.org JSON-LD 매장 메타데이터와 OpenGraph를 통한 완전한 검색엔진 최적화",
          "모바일 네트워크 환경에 최적화된 초경량 반응형 사용자 경험"
        ],
        problemAndGoal:
          "시중의 모조품과 차별화하여 공식 디스트리뷰터의 정품 신뢰도를 입증하고 1년 보증을 바탕으로 직접 주문을 유치할 공신력 있는 웹사이트가 필요했습니다.",
        solutionAndArchitecture: [
          "React와 Tailwind CSS 기반의 세련되고 로딩이 빠른 브랜드 쇼케이스 개발.",
          "구글 검색 최상위 노출을 위한 Schema.org Store/Brand 구조화 데이터 마크업 구현.",
          "정품 인증서와 1년 보증 혜택을 강조한 신뢰도 중심의 카탈로그 구성.",
          "텔레그램과 인스타그램을 연동하여 원클릭 고객 상담 및 주문 유도."
        ],
        verifiedFeatures: [
          "스마트 이슬람 손목시계 및 벽시계 전체 라인업 카탈로그",
          "공식 인증서 및 1년 정품 보증 문서화",
          "스마트폰 환경에서도 1초 미만으로 열리는 최적화된 정적 번들",
          "우즈베키스탄 전역 대상의 간편 주문 프로세스"
        ],
        technicalDecisions: [
          {
            title: "정적 우선 고성능 전송",
            description:
              "모바일 네트워크 속도가 느린 환경에서도 즉각 표시되도록 경량 정적 번들 구축."
          },
          {
            title: "구조화된 SEO 마크업",
            description:
              "검색엔진이 공인 디스트리뷰터로 정확히 인식하도록 Schema JSON-LD 깊이 있게 적용."
          }
        ]
      },
      zh: {
        title: "Al Harameen Uzbekistan",
        tagline: "Al Harameen 品牌在乌兹别克斯坦官方分销商展示与品牌官网",
        category: "电子商务 / 官方授权分销",
        description:
          "Al Harameen 智能伊斯兰钟表在乌兹别克斯坦的官方品牌网站，展示官方授权证书及一年正品保修。",
        detailedDescription: [
          "Al Harameen Uzbekistan 是 Al Harameen 智能礼拜手表及挂钟在乌兹别克斯坦官方分销商的数字化展示门户。",
          "该网站详细展示了全功能宣礼报时、朝向指南针、伊斯兰历法、官方授权证书及一年质保服务。"
        ],
        role: "前端开发工程师",
        timeline: "2025",
        statusText: "2025年正式交付",
        verifiedHighlights: [
          "正品 Al Harameen 钟表在乌兹别克斯坦官方授权分销商权威认证展示",
          "宣礼报时声、朝向指南针及精准礼拜时刻计算的全面技术呈现",
          "完整的搜索引擎优化，包含 Schema.org JSON-LD 商店结构化数据与 OpenGraph",
          "专为移动端网络环境调优的高性能响应式界面"
        ],
        problemAndGoal:
          "针对市场上仿冒品泛滥的痛点，官方分销商迫切需要一个极具公信力的数字门户，展示权威授权、正品保修与直接订购通道。",
        solutionAndArchitecture: [
          "基于 React 与 Tailwind CSS 开发高颜值、加载迅捷的现代化品牌官网。",
          "引入 Schema.org (Store/Brand) 结构化元数据，强化 Google 本地搜索权重。",
          "系统梳理产品系列，重点展示官方授权资质与正品售后承诺。",
          "无缝打通 Telegram 与电话沟通渠道，实现快速订单转化。"
        ],
        verifiedFeatures: [
          "全系列伊斯兰智能手表与挂钟目录（阿赞报时、朝向定位、历法换算）",
          "官方授权证书展示与 1 年正品保修承诺",
          "针对移动蜂窝网络的极速静态页面加载体验",
          "覆盖乌兹别克斯坦全境的便捷订购流程"
        ],
        technicalDecisions: [
          {
            title: "静态优先的高性能方案",
            description:
              "采用轻量化静态优化方案，确保在各类移动网络下均可秒开。"
          },
          {
            title: "结构化 SEO 架构",
            description:
              "深度嵌入 JSON-LD 规范数据，确保被搜索引擎识别为官方认证销售渠道。"
          }
        ]
      },
      ja: {
        title: "Al Harameen Uzbekistan",
        tagline: "ウズベキスタンにおけるAl Harameen正規代理店の公式ブランド＆製品ショーケース",
        category: "Eコマース / 正規代理店",
        description:
          "ウズベキスタンにおけるAl Harameenスマートイスラム時計の公式ブランドサイト。正規代理店証明書と1年保証を提示。",
        detailedDescription: [
          "Al Harameen Uzbekistanは、Al Harameenスマートイスラム時計およびアザン時計のウズベキスタン正規代理店公式Webサイトです。",
          "正確な礼拝時刻計算、アザン通知機能、キブラコンパス、1年間の公式保証書、および国内配送システムを網羅しています。"
        ],
        role: "フロントエンドエンジニア",
        timeline: "2025",
        statusText: "2025年公開",
        verifiedHighlights: [
          "純正Al Harameen製品のウズベキスタン正規代理店証明および公式ブランドプレゼンテーション",
          "アザン通知音、キブラ方位、礼拝カレンダー機能の詳細な技術仕様展示",
          "Schema.org JSON-LD店舗メタデータとOpenGraphによる徹底したSEO最適化",
          "モバイルネットワークに最適化された軽量で美しいレスポンシブデザイン"
        ],
        problemAndGoal:
          "市場の模倣品と一線を画し、正規代理店としての信頼性を確立するため、公式証明書と保証体制を明確に伝えるデジタル拠点が必要でした。"
        ,
        solutionAndArchitecture: [
          "ReactとTailwind CSSを用いた高速で洗練されたブランドWebサイトの構築。",
          "Google検索で上位表示を狙うSchema.org構造化データの埋め込み。",
          "正規保証と仕様を明確にした製品ラインナップの体系的整理。",
          "迅速な購入相談のためのTelegramおよび電話窓口連携。"
        ],
        verifiedFeatures: [
          "イスラムスマートウォッチ＆置時計の全製品カタログ",
          "1年間公式保証書および正規代理店認定証の提示",
          "スマートフォンでの快適な閲覧とサブ秒速の表示スピード",
          "ウズベキスタン全国へのスムーズな注文フロー"
        ],
        technicalDecisions: [
          {
            title: "静的配信による高速化",
            description:
              "モバイル通信環境下でも即時表示を実現する軽量な静的配信を採用。"
          },
          {
            title: "構造化マークアップの実装",
            description:
              "検索エンジンから正規販売代理店として正しく認識されるためのJSON-LD連携。"
          }
        ]
      },
      ar: {
        title: "Al Harameen Uzbekistan",
        tagline: "الموقع الرسمي وواجهة المنتجات للموزع المعتمد لساعات الحرمين في أوزبكستان",
        category: "تجارة إلكترونية / موزع معتمد",
        description:
          "الموقع الرسمي وكتالوج منتجات ساعات الحرمين الإسلامية الذكية وساعات الأذان في أوزبكستان مع شهادة التوزيع المعتمدة وضمان لمدة عام.",
        detailedDescription: [
          "يمثل Al Harameen Uzbekistan الواجهة الرقمية الرسمية للموزع المعتمد لساعات الحرمين الإسلامية الذكية في أوزبكستان.",
          "يقدم الموقع مواصفات الساعات الدقيقة، ومواقيت الأذان، وبوصلة تحديد القبلة، وشهادة التوزيع الرسمية وضمان لمدة عام مع التوصيل."
        ],
        role: "مطور الواجهة الأمامية",
        timeline: "2025",
        statusText: "أُطلق في 2025",
        verifiedHighlights: [
          "التقديم الرقمي الرسمي للموزع المعتمد لساعات الحرمين الأصلية في أوزبكستان",
          "عرض تقني دقيق لمزايا تنبيهات الأذان، اتجاه القبلة، والتقويم الهجري",
          "تحسين محركات البحث الكامل ببيانات Schema.org JSON-LD المنظمة ووسوم OpenGraph",
          "تصميم متجاوب وسريع وخفيف مخصص لمستخدمي الهواتف الذكية في أوزبكستان"
        ],
        problemAndGoal:
          "في ظل انتشار النسخ المقلدة، كان الموزع بحاجة إلى منصة رقمية ذات موثوقية عالية لتأكيد الأصالة والضمان واستقبال الطلبات المباشرة.",
        solutionAndArchitecture: [
          "بناء موقع سريع وجذاب بصرياً باستخدام React و Tailwind CSS.",
          "دمج البيانات المنظمة Schema.org لتحقيق أعلى مراتب الظهور في محركات البحث.",
          "تنظيم صفحات المنتجات مع إبراز شهادة الاعتماد والضمان لمدة عام كامل.",
          "ربط قنوات التواصل المباشرة عبر تيليجرام لتسريع عمليات البيع."
        ],
        verifiedFeatures: [
          "كتالوج متكامل للساعات الإسلامية اليدوية والجدارية (الأذان، القبلة، التقويم)",
          "شهادة التوزيع الرسمية ووثائق الضمان المعتمد لمدة عام",
          "تحميل فائق السرعة عبر شبكات الهاتف المحمول",
          "آلية طلب سهلة ومباشرة لجميع أنحاء أوزبكستان"
        ],
        technicalDecisions: [
          {
            title: "أداء فائق بالبناء الثابت",
            description:
              "اعتماد حزم ثابتة ومحسنة لضمان التحميل في أجزاء من الثانية عبر شبكات الجوال."
          },
          {
            title: "بيانات Schema المنظمة",
            description:
              "تأكيد هوية المتجر كموزع رسمي معتمد لدى محركات البحث العالمية."
          }
        ]
      }
    }
  }
];

export function getLocalizedProject(slug: string, locale: Locale) {
  const project = localizedProjects.find((p) => p.slug === slug);
  if (!project) return null;
  const content = project.translations[locale] || project.translations.en;
  return {
    ...project,
    content
  };
}

export function getAllProjectSlugs(): string[] {
  return localizedProjects.map((p) => p.slug);
}
