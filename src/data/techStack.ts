export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "AI" | "Deployment";
  highlight?: boolean;
}

export interface TechCategory {
  title: string;
  key: "Frontend" | "Backend" | "Database" | "AI" | "Deployment";
  description: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Backend",
    key: "Backend",
    description: "Server runtimes, HTTP microservices & real-time protocols",
    items: [
      { name: "Node.js", category: "Backend", highlight: true },
      { name: "Express.js", category: "Backend", highlight: true },
      { name: "TypeScript", category: "Backend", highlight: true },
      { name: "REST APIs", category: "Backend", highlight: true },
      { name: "WebSockets", category: "Backend" },
      { name: "Zod", category: "Backend" }
    ]
  },
  {
    title: "Frontend",
    key: "Frontend",
    description: "Modern UI rendering, reactive state & design systems",
    items: [
      { name: "React", category: "Frontend", highlight: true },
      { name: "Next.js", category: "Frontend", highlight: true },
      { name: "Tailwind CSS", category: "Frontend", highlight: true },
      { name: "JavaScript (ES6+)", category: "Frontend" },
      { name: "HTML5 / CSS3", category: "Frontend" },
      { name: "Vite", category: "Frontend" }
    ]
  },
  {
    title: "Database",
    key: "Database",
    description: "Relational persistence, data modeling & type-safe queries",
    items: [
      { name: "PostgreSQL", category: "Database", highlight: true },
      { name: "Prisma ORM", category: "Database", highlight: true },
      { name: "Relational Schema Design", category: "Database" },
      { name: "Data Migrations", category: "Database" }
    ]
  },
  {
    title: "AI Integration",
    key: "AI",
    description: "Model integration, multimodal vision & intelligent automation",
    items: [
      { name: "Google Gemini API", category: "AI", highlight: true },
      { name: "Multimodal Vision", category: "AI", highlight: true },
      { name: "Telegram Bot API", category: "AI", highlight: true },
      { name: "Prompt Architecture", category: "AI" }
    ]
  },
  {
    title: "Workflow & Deployment",
    key: "Deployment",
    description: "Version control, hosting infrastructure & CI automation",
    items: [
      { name: "Git", category: "Deployment", highlight: true },
      { name: "GitHub", category: "Deployment", highlight: true },
      { name: "Vercel", category: "Deployment", highlight: true },
      { name: "Railway", category: "Deployment", highlight: true },
      { name: "Linux CLI", category: "Deployment" },
      { name: "CI / CD", category: "Deployment" }
    ]
  }
];
