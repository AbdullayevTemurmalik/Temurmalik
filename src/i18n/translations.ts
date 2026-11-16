import { Locale } from "./config";
import { Dictionary } from "./types";
import { en } from "./locales/en";
import { uz } from "./locales/uz";
import { ru } from "./locales/ru";
import { zh } from "./locales/zh";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { ja } from "./locales/ja";
import { de } from "./locales/de";
import { it } from "./locales/it";
import { ko } from "./locales/ko";
import { tr } from "./locales/tr";
import { ar } from "./locales/ar";

export type { Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  uz,
  ru,
  zh,
  es,
  fr,
  ja,
  de,
  it,
  ko,
  tr,
  ar
};
