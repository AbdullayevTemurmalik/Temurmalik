"use client";

import React from "react";
import { useTranslation } from "@/i18n/context";
import { locales } from "@/i18n/config";

export function LocaleSwitcher() {
  const { locale, switchLocale } = useTranslation();

  return (
    <div
      className="inline-flex items-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-0.5 font-mono text-xs"
      role="group"
      aria-label="Language selection"
    >
      {locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchLocale(loc)}
            className={`px-2 py-1 rounded transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)] ${
              isActive
                ? "bg-[var(--accent-primary)] text-white font-bold shadow-xs"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
            }`}
            aria-pressed={isActive}
            aria-label={`Switch to ${loc === "en" ? "English" : "O‘zbekcha"}`}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
