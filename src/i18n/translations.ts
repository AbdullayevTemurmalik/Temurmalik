import { Locale } from "./config";
import { Dictionary } from "./types";

import en from "../../messages/en.json";
import uz from "../../messages/uz.json";
import ru from "../../messages/ru.json";
import zh from "../../messages/zh.json";
import es from "../../messages/es.json";
import fr from "../../messages/fr.json";
import ja from "../../messages/ja.json";
import de from "../../messages/de.json";
import it from "../../messages/it.json";
import tr from "../../messages/tr.json";
import ar from "../../messages/ar.json";

export type { Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  en: en as unknown as Dictionary,
  uz: uz as unknown as Dictionary,
  ru: ru as unknown as Dictionary,
  zh: zh as unknown as Dictionary,
  es: es as unknown as Dictionary,
  fr: fr as unknown as Dictionary,
  ja: ja as unknown as Dictionary,
  de: de as unknown as Dictionary,
  it: it as unknown as Dictionary,
  tr: tr as unknown as Dictionary,
  ar: ar as unknown as Dictionary
};
