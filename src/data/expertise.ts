export interface ExpertiseArea {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  skills: string[];
  capabilities: string[];
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "backend",
    number: "01",
    title: "Backend Engineering",
    summary:
      "APIs, authentication, database modeling, backend architecture and integrations.",
    description:
      "Designing robust server-side systems with predictable data pipelines, clean REST endpoints, structured validation, and relational database schemas that remain resilient under real traffic.",
    skills: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma ORM", "REST APIs", "Zod"],
    capabilities: [
      "Relational schema design, indexes & data migrations",
      "Authentication patterns, session cookies & JWT handling",
      "Input sanitization, defensive error handling & rate limiting",
      "WebSocket streams & real-time bidirectional messaging"
    ]
  },
  {
    id: "fullstack",
    number: "02",
    title: "Full-Stack Development",
    summary:
      "Modern web apps, responsive interfaces and end-to-end product development.",
    description:
      "Building seamless end-to-end digital products where the frontend UI matches backend semantics with zero disconnect. High-performance, accessible, and responsive across every device breakpoint.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
    capabilities: [
      "Component-driven architecture & strict TypeScript typings",
      "Mobile-first responsive layouts with fluid typography",
      "State management & clean client-server boundaries",
      "Core Web Vitals optimization & zero-layout-shift design"
    ]
  },
  {
    id: "ai-integration",
    number: "03",
    title: "AI Integration",
    summary:
      "AI-enabled applications, intelligent automation and practical model integration.",
    description:
      "Integrating practical artificial intelligence models directly into usable products. Building prompt pipelines, multimodal vision analysis, structured responses, and responsive conversational bots.",
    skills: ["Google Gemini API", "Multimodal Vision", "Telegram Bots", "Prompt Engineering", "JSON-mode Outputs"],
    capabilities: [
      "Image parsing for nutrition & macro estimation in bots",
      "Contextual educational assistance & automated code hints",
      "Strict schema enforcement on LLM structured JSON outputs",
      "Low-latency streaming & error-tolerant fallback handling"
    ]
  },
  {
    id: "infrastructure",
    number: "04",
    title: "Deployment & Infrastructure",
    summary:
      "Deployment workflows, server configuration, Git, CI/CD and production maintenance.",
    description:
      "Shipping software with disciplined reproducibility. Automated continuous delivery, environment variable management, server monitoring, and zero-downtime rollouts on modern cloud platforms.",
    skills: ["Git", "GitHub", "Vercel", "Railway", "CI/CD Workflows", "Environment Config", "Linux CLI"],
    capabilities: [
      "Continuous integration & automated deployment pipelines",
      "Vercel Edge & Serverless function configurations",
      "Railway container & PostgreSQL managed provisioning",
      "Production debugging, error logging & uptime monitoring"
    ]
  }
];
