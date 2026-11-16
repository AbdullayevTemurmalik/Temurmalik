export interface Project {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  detailedDescription: string[];
  liveUrl: string;
  repoUrl?: string;
  technologies: string[];
  role: string;
  timeline: string;
  featured: boolean;
  status: "Shipped" | "Active" | "Beta";
  verifiedHighlights: string[];
  problemAndGoal: string;
  solutionAndArchitecture: string[];
  verifiedFeatures: string[];
  technicalDecisions: Array<{
    title: string;
    description: string;
  }>;
  // Fallback badge colors and styling
  accentColor: string;
  imageAlt: string;
  imageSrc: string;
}

export const projects: Project[] = [
  {
    id: "runcode-web",
    number: "01",
    slug: "runcode-web",
    title: "RunCode Web",
    tagline: "Modern programming learning & practice platform",
    category: "Developer Tools / Learning Platform",
    description:
      "A modern programming learning and practice platform built with React, Tailwind CSS, and a Node.js/TypeScript AI teacher backend.",
    detailedDescription: [
      "RunCode Web is an interactive developer education platform designed to make programming concepts practical and engaging.",
      "The frontend delivers a distraction-free, dark-first learning interface built with Vite and Tailwind CSS. The companion backend integrates Node.js, Express, Prisma ORM with PostgreSQL, WebSockets for real-time interactions, and Google Gemini API integration for automated programming assistance."
    ],
    liveUrl: "https://runcode-web.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "WebSockets",
      "Gemini API",
      "Tailwind CSS",
      "Vercel"
    ],
    role: "Full-Stack Developer & Backend Architect",
    timeline: "2024 — Present",
    featured: true,
    status: "Shipped",
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
      "Integrated Google Generative AI (@google/genai) to answer code questions and provide contextual hints."
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
    ],
    accentColor: "#79C0A5",
    imageAlt: "RunCode Web learning platform interface preview",
    imageSrc: "/images/projects/runcode-web.svg"
  },
  {
    id: "jobify",
    number: "02",
    slug: "jobify",
    title: "Jobify",
    tagline: "Find aspiring talents and great employers",
    category: "Full-Stack / Recruitment Platform",
    description:
      "A modern job search and talent recruitment ecosystem connecting verified job seekers with top-tier employers, featuring dynamic candidate profiles, intelligent skill filtering, and seamless recruiter workflows.",
    detailedDescription: [
      "Jobify is a full-stack recruitment platform engineered to streamline hiring pipelines in Uzbekistan and beyond. It eliminates friction by offering dedicated recruiter screening tools and direct talent matching.",
      "The platform bridges the gap between ambitious job seekers and forward-thinking companies. Built with high performance and accessibility in mind, it provides candidate profile management, categorized vacancy discovery, real-time application tracking, and an intuitive user interface."
    ],
    liveUrl: "https://jobify.uz/",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "REST API",
      "JWT Authentication"
    ],
    role: "Full-Stack Developer & Backend Architect",
    timeline: "2024 — Present",
    featured: true,
    status: "Shipped",
    verifiedHighlights: [
      "End-to-end recruitment marketplace connecting talent and companies",
      "Interactive candidate profile builder with skills tagging and CV showcase",
      "Recruiter dashboard for reviewing applicants and posting vacancies",
      "Optimized database schema using PostgreSQL and Prisma ORM for relational queries"
    ],
    problemAndGoal:
      "Finding the best candidate is always hard. Traditional job search boards are often cluttered, slow, and lack direct connection between recruiters and aspiring talents. The goal of Jobify is to provide a clean, modern platform where candidates launch their careers and recruiters easily discover and filter verified talent.",
    solutionAndArchitecture: [
      "Constructed a fast, responsive user interface with modern component architecture and clean design.",
      "Architected a scalable REST API backend with relational PostgreSQL database modeling for users, vacancies, applications, and skill taxonomies.",
      "Implemented secure JWT authentication and role-based permissions (Job Seeker vs Recruiter).",
      "Engineered high-performance filtering for quick searching across industries, job types, and salary expectations."
    ],
    verifiedFeatures: [
      "Curated talent pool and verified employer directory",
      "Real-time vacancy search with skill-based filters",
      "Direct recruiter contact and application tracking system",
      "Fully responsive mobile and desktop user experience"
    ],
    technicalDecisions: [
      {
        title: "Relational Modeling for Recruitment",
        description:
          "Leveraged PostgreSQL and Prisma ORM to efficiently model complex relationships between job categories, candidate skill tags, and multi-stage application statuses."
      },
      {
        title: "Role-Based Access Control",
        description:
          "Engineered distinct permission layers for candidates seeking opportunities and recruiters posting verified jobs, secured with JWT and session validation."
      },
      {
        title: "Performance & SEO Optimization",
        description:
          "Applied static generation and edge-ready caching to ensure fast loading times and discoverability on search engines for active job listings."
      }
    ],
    accentColor: "#38BDF8",
    imageAlt: "Jobify recruitment platform interface preview",
    imageSrc: "/images/projects/jobify.jpg"
  },
  {
    id: "donik-coach-ai",
    number: "03",
    slug: "donik-coach-ai",
    title: "Donik Coach AI",
    tagline: "Telegram-based fitness assistant & AI nutrition tracker",
    category: "Telegram Mini App / Fitness & AI",
    description:
      "A Telegram-based fitness and AI-assisted nutrition assistant featuring meal photo calorie estimation, 9 structured dietary rations, and gym workout routines.",
    detailedDescription: [
      "Donik Coach AI brings fitness planning and nutritional tracking directly to Telegram users, eliminating the friction of downloading and maintaining standalone apps.",
      "The project leverages multimodal AI to analyze meal photos for nutritional estimates, presents 9 professional nutrition regimens, and delivers guided workout routines."
    ],
    liveUrl: "https://t.me/donikcoach_bot",
    technologies: [
      "Node.js",
      "Telegram Bot API",
      "AI Vision / Gemini",
      "REST APIs",
      "PostgreSQL",
      "JavaScript"
    ],
    role: "Backend & AI Bot Developer",
    timeline: "2024",
    featured: true,
    status: "Active",
    verifiedHighlights: [
      "Shipped Telegram bot integration serving fitness and diet workflows directly in chat",
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
      "Organized gym workout programs by muscle groups and difficulty levels."
    ],
    verifiedFeatures: [
      "Meal photo analysis for calorie and macro estimation",
      "9 curated professional dietary rations for specific health goals",
      "Gym exercise and workout directory with step-by-step guidance",
      "Native Telegram bot flow with high accessibility on mobile devices"
    ],
    technicalDecisions: [
      {
        title: "Telegram Bot as Primary Client",
        description:
          "Chose Telegram as the deployment surface to maximize adoption in Uzbekistan where Telegram is the primary daily communication platform."
      },
      {
        title: "Multimodal Visual Analysis",
        description:
          "Applied image recognition models directly to photo uploads to replace cumbersome text searches with instant visual logging."
      }
    ],
    accentColor: "#79B8FF",
    imageAlt: "Donik Coach AI Telegram bot interface preview",
    imageSrc: "/images/projects/donik-coach-ai.svg"
  },
  {
    id: "al-harameen",
    number: "04",
    slug: "al-harameen",
    title: "Al Harameen Uzbekistan",
    tagline: "Official distributor digital brand & product showcase",
    category: "E-commerce / Brand Website",
    description:
      "The official brand website and product showcase for Al Harameen in Uzbekistan, presenting smart Islamic timepieces and modern wristwatches.",
    detailedDescription: [
      "Al Harameen Uzbekistan serves as the primary online presence for the official distributor of Al Harameen smart Islamic timepieces.",
      "The website provides comprehensive product specifications, Azon prayer time calculation details, Qibla compass features, official warranty terms, and direct consultation channels."
    ],
    liveUrl: "https://www.alharameenuz.uz/",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "JSON-LD SEO",
      "OpenGraph"
    ],
    role: "Frontend Developer",
    timeline: "2024",
    featured: true,
    status: "Shipped",
    verifiedHighlights: [
      "Official distributor online presentation for original Al Harameen watches",
      "Detailed technical showcase of Azon notification, Qibla direction, and Islamic calendar features",
      "Full SEO implementation with Schema.org JSON-LD Store metadata and localized tags",
      "Clean, mobile-first responsive design tailored for Uzbek consumer base"
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
    ],
    accentColor: "#E3B341",
    imageAlt: "Al Harameen Uzbekistan official brand website preview",
    imageSrc: "/images/projects/al-harameen.svg"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
