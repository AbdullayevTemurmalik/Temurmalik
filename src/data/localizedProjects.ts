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
