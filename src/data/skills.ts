export interface Skill {
  id: string;
  name: string;
  url: string;
  category: "frontend" | "backend" | "database" | "devops" | "tools" | "ai";
}

export const skillsCatalog: Record<string, Skill> = {
  // FRONTEND
  "HTML5": {
    id: "html5",
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    category: "frontend"
  },
  "CSS3": {
    id: "css3",
    name: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    category: "frontend"
  },
  "JavaScript": {
    id: "javascript",
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "frontend"
  },
  "TypeScript": {
    id: "typescript",
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    category: "frontend"
  },
  "React": {
    id: "react",
    name: "React",
    url: "https://react.dev/",
    category: "frontend"
  },
  "Vue.js": {
    id: "vue",
    name: "Vue.js",
    url: "https://vuejs.org/",
    category: "frontend"
  },
  "Next.js": {
    id: "nextjs",
    name: "Next.js",
    url: "https://nextjs.org/",
    category: "frontend"
  },
  "Tailwind CSS": {
    id: "tailwindcss",
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    category: "frontend"
  },
  "Bootstrap": {
    id: "bootstrap",
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    category: "frontend"
  },
  "Redux": {
    id: "redux",
    name: "Redux",
    url: "https://redux.js.org/",
    category: "frontend"
  },
  "HTML5/CSS3": {
    id: "html5-css3",
    name: "HTML5/CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    category: "frontend"
  },
  "Responsive UI": {
    id: "responsive-ui",
    name: "Responsive UI",
    url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
    category: "frontend"
  },
  "SEO": {
    id: "seo",
    name: "SEO",
    url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    category: "frontend"
  },
  "Vite": {
    id: "vite",
    name: "Vite",
    url: "https://vite.dev/",
    category: "frontend"
  },

  // BACKEND
  "Node.js": {
    id: "nodejs",
    name: "Node.js",
    url: "https://nodejs.org/",
    category: "backend"
  },
  "Express": {
    id: "express-short",
    name: "Express",
    url: "https://expressjs.com/",
    category: "backend"
  },
  "Express.js": {
    id: "expressjs",
    name: "Express.js",
    url: "https://expressjs.com/",
    category: "backend"
  },
  "REST API": {
    id: "rest-api",
    name: "REST API",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
    category: "backend"
  },
  "REST APIs": {
    id: "rest-apis",
    name: "REST APIs",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
    category: "backend"
  },
  "JWT Authentication": {
    id: "jwt-auth",
    name: "JWT Authentication",
    url: "https://www.rfc-editor.org/rfc/rfc7519",
    category: "backend"
  },
  "JWT": {
    id: "jwt",
    name: "JWT",
    url: "https://www.rfc-editor.org/rfc/rfc7519",
    category: "backend"
  },
  "Telegram Bot API": {
    id: "telegram-bot-api",
    name: "Telegram Bot API",
    url: "https://core.telegram.org/bots/api",
    category: "backend"
  },
  "Prisma ORM": {
    id: "prisma-orm",
    name: "Prisma ORM",
    url: "https://www.prisma.io/",
    category: "backend"
  },
  "Zod": {
    id: "zod",
    name: "Zod",
    url: "https://zod.dev/",
    category: "backend"
  },
  "WebSockets": {
    id: "websockets",
    name: "WebSockets",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    category: "backend"
  },

  // DATABASE
  "PostgreSQL": {
    id: "postgresql",
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    category: "database"
  },
  "MongoDB": {
    id: "mongodb",
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    category: "database"
  },
  "pgAdmin": {
    id: "pgadmin",
    name: "pgAdmin",
    url: "https://www.pgadmin.org/",
    category: "database"
  },

  // DEVOPS & DEPLOYMENT
  "Linux": {
    id: "linux",
    name: "Linux",
    url: "https://www.kernel.org/",
    category: "devops"
  },
  "Linux CLI": {
    id: "linux-cli",
    name: "Linux CLI",
    url: "https://www.kernel.org/",
    category: "devops"
  },
  "Docker": {
    id: "docker",
    name: "Docker",
    url: "https://www.docker.com/",
    category: "devops"
  },
  "Git": {
    id: "git",
    name: "Git",
    url: "https://git-scm.com/",
    category: "devops"
  },
  "GitHub": {
    id: "github",
    name: "GitHub",
    url: "https://github.com/",
    category: "devops"
  },
  "Vercel": {
    id: "vercel",
    name: "Vercel",
    url: "https://vercel.com/",
    category: "devops"
  },
  "Railway": {
    id: "railway",
    name: "Railway",
    url: "https://railway.com/",
    category: "devops"
  },
  "CI/CD Workflows": {
    id: "cicd-workflows",
    name: "CI/CD Workflows",
    url: "https://docs.github.com/en/actions",
    category: "devops"
  },
  "Environment Config": {
    id: "environment-config",
    name: "Environment Config",
    url: "https://12factor.net/config",
    category: "devops"
  },

  // DEVELOPMENT TOOLS
  "Postman": {
    id: "postman",
    name: "Postman",
    url: "https://www.postman.com/",
    category: "tools"
  },
  "Visual Studio Code": {
    id: "vscode",
    name: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
    category: "tools"
  },
  "Figma": {
    id: "figma",
    name: "Figma",
    url: "https://www.figma.com/",
    category: "tools"
  },

  // AI INTEGRATION & INTELLIGENT SYSTEMS
  "Claude Code": {
    id: "claude-code",
    name: "Claude Code",
    url: "https://www.claude.com/product/claude-code",
    category: "ai"
  },
  "Cursor": {
    id: "cursor",
    name: "Cursor",
    url: "https://cursor.com/",
    category: "ai"
  },
  "Google Antigravity": {
    id: "google-antigravity",
    name: "Google Antigravity",
    url: "https://antigravity.google/",
    category: "ai"
  },
  "Antigravity": {
    id: "antigravity",
    name: "Google Antigravity",
    url: "https://antigravity.google/",
    category: "ai"
  },
  "ChatGPT": {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    category: "ai"
  },
  "OpenAI Codex": {
    id: "openai-codex",
    name: "OpenAI Codex",
    url: "https://openai.com/codex/",
    category: "ai"
  },
  "Codex": {
    id: "codex",
    name: "OpenAI Codex",
    url: "https://openai.com/codex/",
    category: "ai"
  },
  "GitHub Copilot (VSCode Copilot)": {
    id: "github-copilot-full",
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    category: "ai"
  },
  "VSCode Copilot": {
    id: "vscode-copilot",
    name: "VSCode Copilot",
    url: "https://github.com/features/copilot",
    category: "ai"
  },
  "Google Gemini API": {
    id: "google-gemini-api",
    name: "Google Gemini API",
    url: "https://ai.google.dev/",
    category: "ai"
  },
  "Gemini API": {
    id: "gemini-api",
    name: "Google Gemini API",
    url: "https://ai.google.dev/",
    category: "ai"
  },
  "Multimodal Vision": {
    id: "multimodal-vision",
    name: "Multimodal Vision",
    url: "https://ai.google.dev/gemini-api/docs/vision",
    category: "ai"
  },
  "Telegram Bots": {
    id: "telegram-bots",
    name: "Telegram Bots",
    url: "https://core.telegram.org/bots",
    category: "ai"
  },
  "Prompt Engineering": {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    url: "https://ai.google.dev/gemini-api/docs/prompting-strategies",
    category: "ai"
  },
  "Prompt Design": {
    id: "prompt-design",
    name: "Prompt Design",
    url: "https://ai.google.dev/gemini-api/docs/prompting-strategies",
    category: "ai"
  },
  "Automation": {
    id: "automation",
    name: "Automation",
    url: "https://core.telegram.org/bots",
    category: "ai"
  },
  "JSON-mode Outputs": {
    id: "json-mode-outputs",
    name: "JSON-mode Outputs",
    url: "https://ai.google.dev/gemini-api/docs/structured-output",
    category: "ai"
  }
};

export function getSkill(skillName: string): Skill {
  if (skillsCatalog[skillName]) {
    return skillsCatalog[skillName];
  }
  // Safe fallback if ever unmatched
  const cleanId = skillName.toLowerCase().replace(/[^a-z0-9]/g, "-");
  return {
    id: cleanId,
    name: skillName,
    url: `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(skillName)}`,
    category: "tools"
  };
}
