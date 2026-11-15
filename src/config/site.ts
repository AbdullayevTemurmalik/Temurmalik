export interface SocialLink {
  name: string;
  url: string;
  label: string;
  isConfigured: boolean;
  icon: "github" | "instagram" | "email";
}

export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  specialization: string;
  shortBio: string;
  longBio: string[];
  age: number;
  location: string;
  experienceYears: string; // "3 years" / "3+"
  projectsCount: string;   // "30+"
  clientsCount: string;    // "5+"
  url: string;
  isAvailableForWork: boolean;
  availabilityText: string;
  heroFocusTags: string[];
  terminal: {
    user: string;
    host: string;
    cwd: string;
    status: string;
  };
  social: {
    github: SocialLink;
    instagram: SocialLink;
    email: SocialLink;
  };
  approach: Array<{
    step: string;
    title: string;
    description: string;
  }>;
}

/**
 * Single source of truth for Temurmalik's profile, contact details, and site configuration.
 * Editable by the owner in one central place.
 */
export const siteConfig: SiteConfig = {
  name: "Temurmalik",
  fullName: "Temurmalik Abdullayev",
  title: "Full-Stack Developer",
  specialization: "Focused on Backend & AI Engineering",
  shortBio:
    "I'm Temurmalik Abdullayev, a 17-year-old developer from Uzbekistan. I build reliable backend systems, modern web applications, and AI-powered products.",
  longBio: [
    "I specialize in architecting resilient backend systems, designing clean RESTful APIs, and building modern, responsive web applications. My engineering philosophy centers on simplicity, predictable data flows, and maintainable software that solves real user needs.",
    "Over the past 3 years, I have engineered full-stack architectures using Node.js, Express, PostgreSQL, and React/Next.js, while exploring practical artificial intelligence integrations including Google Gemini models and real-time bots.",
    "I believe in shipping production-ready code with disciplined error handling, typed safety, and verified functionality rather than over-engineering or vanity features."
  ],
  age: 17,
  location: "Uzbekistan",
  experienceYears: "3+",
  projectsCount: "30+",
  clientsCount: "5+",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://temurmalik.dev",
  isAvailableForWork: true,
  availabilityText: "Available for select engineering contracts",
  heroFocusTags: ["Uzbekistan", "Backend", "AI", "Web Engineering"],
  terminal: {
    user: "temurmalik",
    host: "portfolio",
    cwd: "~",
    status: "Building reliable software."
  },
  social: {
    github: {
      name: "GitHub",
      url: "https://github.com/AbdullayevTemurmalik",
      label: "github.com/AbdullayevTemurmalik",
      isConfigured: true,
      icon: "github"
    },
    // Configurable placeholders for email and Instagram.
    // If not set, production gracefully hides or marks as unconfigured without broken links.
    email: {
      name: "Email",
      url: process.env.NEXT_PUBLIC_CONTACT_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}` : "",
      label: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "email@temurmalik.dev (configure via ENV)",
      isConfigured: Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
      icon: "email"
    },
    instagram: {
      name: "Instagram",
      url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
      label: process.env.NEXT_PUBLIC_INSTAGRAM_URL ? "@instagram" : "@instagram (configure via ENV)",
      isConfigured: Boolean(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
      icon: "instagram"
    }
  },
  approach: [
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
};
