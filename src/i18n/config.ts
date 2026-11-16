export const locales = [
  "en",
  "uz",
  "ru",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "zh",
  "ja",
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
  { code: "tr", label: "Turkish", nativeName: "Türkçe" },
  { code: "de", label: "German", nativeName: "Deutsch" },
  { code: "fr", label: "French", nativeName: "Français" },
  { code: "es", label: "Spanish", nativeName: "Español" },
  { code: "it", label: "Italian", nativeName: "Italiano" },
  { code: "pt", label: "Portuguese", nativeName: "Português" },
  { code: "zh", label: "Chinese", nativeName: "中文" },
  { code: "ja", label: "Japanese", nativeName: "日本語" },
  { code: "ar", label: "Arabic", nativeName: "العربية", dir: "rtl" }
];

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}
