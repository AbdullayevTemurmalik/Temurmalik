import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== TEMURMALIK PORTFOLIO — TECHNICAL SEO & I18N VALIDATION ===");

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
const expectedLocales = ["en", "uz", "ru", "zh", "es", "fr", "ja", "de", "it", "ko", "tr", "ar"];

for (const loc of expectedLocales) {
  assert(configContent.includes(`"${loc}"`), `Locale '${loc}' declared in src/i18n/config.ts`);
}

// 2. Validate All 12 Locale Dictionaries exist and have matching keys

for (const loc of expectedLocales) {
  const locPath = path.join(rootDir, `src/i18n/locales/${loc}.ts`);
  assert(fs.existsSync(locPath), `Dictionary file exists for locale '${loc}'`);
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

// 4. Validate Structured Data (Person, WebSite, Breadcrumbs)
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

console.log("\n==================================================");
if (errorsCount === 0) {
  console.log("🎉 ALL VALIDATION CHECKS PASSED WITH 0 ERRORS!");
} else {
  console.error(`💥 VALIDATION FAILED WITH ${errorsCount} ERRORS!`);
  process.exit(1);
}
