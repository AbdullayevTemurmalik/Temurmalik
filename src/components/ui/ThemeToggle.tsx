"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "@/i18n/context";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { t } = useTranslation();

  if (!mounted) {
    return (
      <div
        className="w-8 h-8 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] opacity-50"
        aria-hidden="true"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
      className="p-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
      title={isDark ? t.nav.themeLight : t.nav.themeDark}
    >
      {isDark ? (
        // Sun icon for switching to light mode
        <svg
          className="w-4 h-4 text-[var(--accent-highlight)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41" />
        </svg>
      ) : (
        // Moon icon for switching to dark mode
        <svg
          className="w-4 h-4 text-[var(--accent-primary)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
