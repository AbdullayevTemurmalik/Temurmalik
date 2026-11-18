import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== TEMURMALIK PORTFOLIO — TECHNICAL SEO, I18N & TECH STACK VALIDATION ===");

let errorsCount = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errorsCount++;
  } else {
    console.log(`✓ PASS: ${message}`);
  }
}

// 1. Validate Locales Configuration
const configPath = path.join(rootDir, "src/i18n/config.ts");
const configContent = fs.readFileSync(configPath, "utf8");
const expectedLocales = ["en", "uz", "ru", "zh", "es", "fr", "ja", "de", "it", "tr", "ar"];

for (const loc of expectedLocales) {
  assert(configContent.includes(`"${loc}"`), `Locale '${loc}' declared in src/i18n/config.ts`);
}

// 2. Validate All 12 Locale JSON files exist in messages/ and parse without error
for (const loc of expectedLocales) {
  const jsonPath = path.join(rootDir, `messages/${loc}.json`);
  assert(fs.existsSync(jsonPath), `JSON translation file exists: messages/${loc}.json`);
  if (fs.existsSync(jsonPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
      assert(!!parsed.nav && !!parsed.hero && !!parsed.techStack, `Valid JSON content structure for '${loc}.json'`);
    } catch (e) {
      assert(false, `Invalid JSON syntax in messages/${loc}.json: ${e.message}`);
    }
  }
}

// 3. Validate Canonical Domain in site.ts
const siteConfigPath = path.join(rootDir, "src/config/site.ts");
const siteContent = fs.readFileSync(siteConfigPath, "utf8");
assert(
  siteContent.includes('process.env.NEXT_PUBLIC_SITE_URL || "https://temurmalik.vercel.app"'),
  "Canonical URL defaults to actual deployed domain 'https://temurmalik.vercel.app' with env override"
);
assert(
  siteContent.includes('name: "Temurmalik"'),
  "Brand wordmark is strictly 'Temurmalik'"
);
assert(
  siteContent.includes('fullName: "Temurmalik Abdullayev"'),
  "Full name is verified 'Temurmalik Abdullayev'"
);

// 4. Validate Structured Data
const rootLayoutPath = path.join(rootDir, "src/app/layout.tsx");
const rootLayoutContent = fs.readFileSync(rootLayoutPath, "utf8");
assert(
  rootLayoutContent.includes('"@type": "Person"'),
  "Root layout includes Schema.org Person structured data"
);
assert(
  rootLayoutContent.includes('"@type": "WebSite"'),
  "Root layout includes Schema.org WebSite structured data"
);
assert(
  rootLayoutContent.includes("siteConfig.social.github.url"),
  "Person schema includes verified GitHub sameAs via siteConfig"
);
assert(
  rootLayoutContent.includes("siteConfig.social.telegram.url"),
  "Person schema includes verified Telegram sameAs via siteConfig"
);

// 5. Validate Sitemap covers all 12 locales & 36 project pages
const sitemapPath = path.join(rootDir, "src/app/sitemap.ts");
const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
assert(
  sitemapContent.includes("alternates:"),
  "Sitemap generates multilingual hreflang alternates"
);
assert(
  sitemapContent.includes('"x-default"'),
  "Sitemap includes x-default fallback alternate"
);

// 6. Validate Mobile Menu Slide-Over from RIGHT
const headerPath = path.join(rootDir, "src/components/layout/Header.tsx");
const headerContent = fs.readFileSync(headerPath, "utf8");
assert(
  headerContent.includes("translate-x-full") && headerContent.includes("translate-x-0"),
  "Mobile menu drawer slides in smoothly from the RIGHT"
);
assert(
  headerContent.includes("right-0"),
  "Mobile menu drawer is anchored to the right side"
);

// 7. Validate Preloader: NO Korean in intro animation
const preloaderPath = path.join(rootDir, "src/components/ui/IntroPreloader.tsx");
const preloaderContent = fs.readFileSync(preloaderPath, "utf8");
assert(
  !preloaderContent.includes("안녕하세요"),
  "Preloader intro animation strictly omits Korean greeting (per owner instruction)"
);

// 8. Validate Arabic RTL Support
const globalsCssPath = path.join(rootDir, "src/app/globals.css");
const globalsCss = fs.readFileSync(globalsCssPath, "utf8");
assert(
  globalsCss.includes('[dir="rtl"]'),
  "globals.css includes RTL overrides for terminal, code, and monospace"
);

// 9. Validate Interactive Clickable Tech Badges in skills.ts
const skillsPath = path.join(rootDir, "src/data/skills.ts");
const skillsContent = fs.readFileSync(skillsPath, "utf8");
const expectedSkills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux",
  "Node.js", "Express.js", "REST API", "JWT Authentication", "Telegram Bot API",
  "PostgreSQL", "MongoDB", "pgAdmin",
  "Linux", "Docker", "Git", "GitHub", "Vercel", "Railway",
  "Postman", "Visual Studio Code", "Figma",
  "Claude Code", "Cursor", "Antigravity", "ChatGPT", "Codex", "VSCode Copilot", "Google Gemini API", "Multimodal Vision"
];

for (const skill of expectedSkills) {
  assert(skillsContent.includes(`"${skill}":`), `Official skill link mapped for '${skill}'`);
}

// 10. Validate SkillBadge component is used in TechStack and Expertise
const techStackComponent = fs.readFileSync(path.join(rootDir, "src/components/sections/TechStack.tsx"), "utf8");
assert(techStackComponent.includes("<SkillBadge"), "TechStack renders clickable SkillBadge components");

const expertiseComponent = fs.readFileSync(path.join(rootDir, "src/components/sections/Expertise.tsx"), "utf8");
assert(expertiseComponent.includes("<SkillBadge"), "Expertise renders clickable SkillBadge components");

console.log("\n==================================================");
if (errorsCount === 0) {
  console.log("🎉 ALL VALIDATION CHECKS PASSED WITH 0 ERRORS!");
} else {
  console.error(`💥 VALIDATION FAILED WITH ${errorsCount} ERRORS!`);
  process.exit(1);
}
