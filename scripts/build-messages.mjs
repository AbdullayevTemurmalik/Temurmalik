import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const locales = ["en", "uz", "ru", "zh", "es", "fr", "ja", "de", "it", "tr", "ar"];

const extras = {
  en: {
    terminalYearsUnit: "years",
    primaryRoleLabel: "Primary Role",
    specializationLabel: "Specialization",
    openOfficialSite: "Open {name} official website",
    skip: "Skip [ESC]",
    skipAria: "Skip introductory animation"
  },
  uz: {
    terminalYearsUnit: "yil",
    primaryRoleLabel: "Asosiy Mutaxassislik",
    specializationLabel: "Ixtisoslashuv",
    openOfficialSite: "{name} rasmiy saytini ochish",
    skip: "O‘tkazib yuborish [ESC]",
    skipAria: "Kirish animatsiyasini o‘tkazib yuborish"
  },
  ru: {
    terminalYearsUnit: "года",
    primaryRoleLabel: "Основная роль",
    specializationLabel: "Специализация",
    openOfficialSite: "Открыть официальный сайт {name}",
    skip: "Пропустить [ESC]",
    skipAria: "Пропустить вступительную анимацию"
  },
  zh: {
    terminalYearsUnit: "年",
    primaryRoleLabel: "核心角色",
    specializationLabel: "专业方向",
    openOfficialSite: "打开 {name} 官方网站",
    skip: "跳过 [ESC]",
    skipAria: "跳过开场动画"
  },
  es: {
    terminalYearsUnit: "años",
    primaryRoleLabel: "Rol principal",
    specializationLabel: "Especialización",
    openOfficialSite: "Abrir sitio web oficial de {name}",
    skip: "Saltar [ESC]",
    skipAria: "Saltar animación de introducción"
  },
  fr: {
    terminalYearsUnit: "ans",
    primaryRoleLabel: "Rôle principal",
    specializationLabel: "Spécialisation",
    openOfficialSite: "Ouvrir le site officiel de {name}",
    skip: "Passer [ESC]",
    skipAria: "Passer l'animation d'introduction"
  },
  ja: {
    terminalYearsUnit: "年",
    primaryRoleLabel: "主な役割",
    specializationLabel: "専門領域",
    openOfficialSite: "{name} 公式サイトを開く",
    skip: "スキップ [ESC]",
    skipAria: "イントロアニメーションをスキップ"
  },
  de: {
    terminalYearsUnit: "Jahre",
    primaryRoleLabel: "Hauptrolle",
    specializationLabel: "Spezialisierung",
    openOfficialSite: "Offizielle Website von {name} öffnen",
    skip: "Überspringen [ESC]",
    skipAria: "Intro-Animation überspringen"
  },
  it: {
    terminalYearsUnit: "anni",
    primaryRoleLabel: "Ruolo principale",
    specializationLabel: "Specializzazione",
    openOfficialSite: "Apri il sito ufficiale di {name}",
    skip: "Salta [ESC]",
    skipAria: "Salta l'animazione introduttiva"
  },
  ko: {
    terminalYearsUnit: "년",
    primaryRoleLabel: "주요 역할",
    specializationLabel: "전문 분야",
    openOfficialSite: "{name} 공식 웹사이트 열기",
    skip: "건너뛰기 [ESC]",
    skipAria: "인트로 애니메이션 건너뛰기"
  },
  tr: {
    terminalYearsUnit: "yıl",
    primaryRoleLabel: "Temel Rol",
    specializationLabel: "Uzmanlık",
    openOfficialSite: "{name} resmi web sitesini aç",
    skip: "Atla [ESC]",
    skipAria: "Giriş animasyonunu atla"
  },
  ar: {
    terminalYearsUnit: "سنوات",
    primaryRoleLabel: "الدور الأساسي",
    specializationLabel: "التخصص",
    openOfficialSite: "فتح الموقع الرسمي لـ {name}",
    skip: "تخطي [ESC]",
    skipAria: "تخطي الرسوم المتحركة الافتتاحية"
  }
};

const messagesDir = path.join(rootDir, "messages");
if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir, { recursive: true });
}

for (const loc of locales) {
  const tsPath = path.join(rootDir, `src/i18n/locales/${loc}.ts`);
  const tsContent = fs.readFileSync(tsPath, "utf8");
  
  // Extract the JS object by trimming TS export
  const jsonText = tsContent
    .replace(/^import [^;]+;/m, "")
    .replace(/^export const \w+: Dictionary = /m, "")
    .replace(/;[\s\n]*$/, "");

  // Use eval safely to get object
  const dict = eval("(" + jsonText + ")");

  // Add extras
  const ex = extras[loc];
  dict.terminal.yearsUnit = ex.terminalYearsUnit;
  dict.techStack.primaryRoleLabel = ex.primaryRoleLabel;
  dict.techStack.specializationLabel = ex.specializationLabel;
  dict.techStack.openOfficialSite = ex.openOfficialSite;
  dict.intro = {
    skip: ex.skip,
    skipAria: ex.skipAria
  };

  // Write messages/${loc}.json
  fs.writeFileSync(path.join(messagesDir, `${loc}.json`), JSON.stringify(dict, null, 2), "utf8");

  // Re-write ts file as typed export
  const updatedTs = `import { Dictionary } from "../types";\n\nexport const ${loc}: Dictionary = ${JSON.stringify(dict, null, 2)};\n`;
  fs.writeFileSync(tsPath, updatedTs, "utf8");
}

console.log("Successfully generated all 12 JSON translation files in messages/ and synced TS files!");
