export const locales = [
  "en",
  "uz",
  "ru",
  "zh",
  "es",
  "fr",
  "ja",
  "de",
  "it",
  "ko",
  "tr",
  "ar"
] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export interface LocaleMeta {
  code: Locale;
  label: string;
  nativeName: string;
  dir?: "ltr" | "rtl";
}

export const localeDetails: LocaleMeta[] = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "uz", label: "Uzbek", nativeName: "O‘zbekcha" },
  { code: "ru", label: "Russian", nativeName: "Русский" },
  { code: "zh", label: "Chinese", nativeName: "简体中文" },
  { code: "es", label: "Spanish", nativeName: "Español" },
  { code: "fr", label: "French", nativeName: "Français" },
  { code: "ja", label: "Japanese", nativeName: "日本語" },
  { code: "de", label: "German", nativeName: "Deutsch" },
  { code: "it", label: "Italian", nativeName: "Italiano" },
  { code: "ko", label: "Korean", nativeName: "한국어" },
  { code: "tr", label: "Turkish", nativeName: "Türkçe" },
  { code: "ar", label: "Arabic", nativeName: "العربية", dir: "rtl" }
];

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}
