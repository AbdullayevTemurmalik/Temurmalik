"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();

  // If initialLocale changes between navigations, sync state during render
  if (initialLocale !== prevInitialLocale && isValidLocale(initialLocale)) {
    setPrevInitialLocale(initialLocale);
    setLocale(initialLocale);
  }

  // Update external systems (cookies & document lang)
  useEffect(() => {
    if (locale && isValidLocale(locale)) {
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const switchLocale = (targetLocale: Locale) => {
    if (targetLocale === locale) return;

    setLocale(targetLocale);

    if (pathname) {
      const segments = pathname.split("/");
      if (segments[1] === "en" || segments[1] === "uz") {
        segments[1] = targetLocale;
        const newPath = segments.join("/");
        router.push(newPath);
      } else {
        router.push(`/${targetLocale}${pathname}`);
      }
    } else {
      router.push(`/${targetLocale}`);
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
