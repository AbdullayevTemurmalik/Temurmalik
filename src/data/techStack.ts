import { Locale } from "@/i18n/config";

export interface TechStackCategory {
  id: string;
  names: Record<Locale, string>;
  shortLabels: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  skills: string[];
}

export const techStackCategories: TechStackCategory[] = [
  {
    id: "frontend",
    names: {
      en: "Frontend",
      uz: "Frontend"
    },
    shortLabels: {
      en: "UI & Client Architecture",
      uz: "Interfeys va Klient Arxitekturasi"
    },
    descriptions: {
      en: "Modern component-driven web applications, responsive styling & reactive state",
      uz: "Komponentli zamonaviy veb-ilovalar, moslashuvchan dizayn va reaktiv holat boshqaruvi"
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
      uz: "Backend"
    },
    shortLabels: {
      en: "Server & Microservices",
      uz: "Server va Mikroservislar"
    },
    descriptions: {
      en: "Predictable API contracts, secure authentication & real-time messaging",
      uz: "Ishonchli API kontraktlari, xavfsiz avtorizatsiya va real-vaqt xabarlashuv protokollari"
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
      uz: "Ma'lumotlar Bazasi"
    },
    shortLabels: {
      en: "Relational & Document Stores",
      uz: "Relyatsion va Hujjatli Bazalar"
    },
    descriptions: {
      en: "Data schemas, persistence layers, migrations & database administration",
      uz: "Ma'lumotlar sxemalari, SQL/NoSQL saqlash, xavfsiz migratsiyalar va boshqaruv"
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
      uz: "DevOps va Joylashtirish"
    },
    shortLabels: {
      en: "Cloud Infrastructure",
      uz: "Bulutli Infratuzilma"
    },
    descriptions: {
      en: "Containerization, automated deployments, hosting & version control",
      uz: "Konteynerizatsiya, avtomatlashtirilgan CI/CD yetkazib berish va versiyalar nazorati"
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
      uz: "Dasturlash Vositalari"
    },
    shortLabels: {
      en: "Engineering Workflow",
      uz: "Muhandislik Ish Jarayoni"
    },
    descriptions: {
      en: "API testing, code authoring, debugging & design collaboration",
      uz: "API testlash, kod yozish muhiti, nosozliklarni tuzatish va dizayn vositalari"
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
      uz: "Sun'iy Intellekt va Agent Tizimlari"
    },
    shortLabels: {
      en: "Agentic Engineering",
      uz: "Agentli Dasturlash va Modellash"
    },
    descriptions: {
      en: "Practical model integration, multimodal vision & autonomous AI developer tooling",
      uz: "Amaliy AI modellari integratsiyasi, multimodal ko‘rish va ilg‘or AI vositalari"
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

