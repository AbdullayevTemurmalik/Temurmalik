import { Locale } from "./config";
import { Dictionary } from "./types";
import { en } from "./locales/en";
import { uz } from "./locales/uz";
import { ru } from "./locales/ru";
import { tr } from "./locales/tr";
import { de } from "./locales/de";
import { fr } from "./locales/fr";
import { es } from "./locales/es";
import { it } from "./locales/it";
import { pt } from "./locales/pt";
import { zh } from "./locales/zh";
import { ja } from "./locales/ja";
import { ar } from "./locales/ar";

export type { Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  uz,
  ru,
  tr,
  de,
  fr,
  es,
  it,
  pt,
  zh,
  ja,
  ar
};
