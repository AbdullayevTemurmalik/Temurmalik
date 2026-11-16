"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Locale, defaultLocale, isValidLocale } from "./config";
import { dictionaries, Dictionary } from "./translations";

interface I18nContextType {
  locale: Locale;
  t: Dictionary;
  switchLocale: (targetLocale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  initialLocale
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [prevInitialLocale, setPrevInitialLocale] = useState(initialLocale);
  const router = useRouter();

  // If initialLocale changes between navigations, sync state during render
  if (initialLocale !== prevInitialLocale && isValidLocale(initialLocale)) {
    setPrevInitialLocale(initialLocale);
    setLocale(initialLocale);
  }

  // Update external systems (cookies & document lang & dir for RTL)
  useEffect(() => {
    if (locale && isValidLocale(locale)) {
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale]);

  const switchLocale = (targetLocale: Locale) => {
    if (targetLocale === locale) return;

    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`;
    }

    setLocale(targetLocale);

    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const hash = window.location.hash || "";
      const segments = currentPath.split("/").filter(Boolean);

      let targetPath = `/${targetLocale}`;
      if (segments.length > 0 && isValidLocale(segments[0])) {
        segments[0] = targetLocale;
        targetPath = `/${segments.join("/")}${hash}`;
      } else {
        const cleanPath = currentPath === "/" ? "" : currentPath;
        targetPath = `/${targetLocale}${cleanPath}${hash}`;
      }

      router.push(targetPath);
    }
  };

  const t = dictionaries[locale] || dictionaries[defaultLocale];

  return (
    <I18nContext.Provider value={{ locale, t, switchLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      locale: defaultLocale,
      t: dictionaries[defaultLocale],
      switchLocale: () => {}
    };
  }
  return context;
}
