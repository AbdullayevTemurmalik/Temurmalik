"use client";

import React, { useRef, useSyncExternalStore } from "react";
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
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!mounted) {
    return (
      <div
        className="w-8 h-8 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] opacity-50"
        aria-hidden="true"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) !== "light";

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetTheme = isDark ? "light" : "dark";

    const doc = document as Document & {
      startViewTransition?: (callback: () => Promise<void> | void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Instant toggle if View Transitions API is not supported or user prefers reduced motion
    if (typeof doc.startViewTransition !== "function" || prefersReducedMotion) {
      setTheme(targetTheme);
      return;
    }

    const btn = buttonRef.current;
    const rect = btn?.getBoundingClientRect();
    const btnX = rect ? rect.left + rect.width / 2 : event.clientX || window.innerWidth / 2;
    const btnY = rect ? rect.top + rect.height / 2 : event.clientY || 0;

    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;

    // Directional logic matching user's exact specification:
    // When switching to dark: starts from bottom viewport edge and sweeps upwards.
    // When switching to light: starts from the button at top and cascades downwards.
    let startX = btnX;
    let startY = 0;
    let endRadius = 0;

    if (targetTheme === "dark") {
      startX = btnX;
      startY = windowHeight;
      endRadius =
        Math.hypot(
          Math.max(startX, windowWidth - startX),
          windowHeight
        ) * 1.05;
    } else {
      startX = btnX;
      startY = btnY;
      endRadius =
        Math.hypot(
          Math.max(startX, windowWidth - startX),
          windowHeight - startY
        ) * 1.05;
    }

    const transition = doc.startViewTransition(() => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(targetTheme);
      document.documentElement.style.colorScheme = targetTheme;
      setTheme(targetTheme);
    });

    transition.ready
      .then(() => {
        const clipPath = [
          `circle(0px at ${startX}px ${startY}px)`,
          `circle(${Math.ceil(endRadius)}px at ${startX}px ${startY}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath: clipPath,
          },
          {
            duration: 550,
            easing: "cubic-bezier(0.2, 0.9, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
        setTheme(targetTheme);
      });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
      className="p-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] active:scale-90 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] cursor-pointer select-none"
      title={isDark ? t.nav.themeLight : t.nav.themeDark}
    >
      <span className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun Icon (light mode) */}
        <svg
          aria-hidden="true"
          className={`w-4 h-4 text-[var(--accent-highlight)] transition-[transform,opacity] duration-300 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0 absolute"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"
          />
        </svg>

        {/* Moon Icon (dark mode) */}
        <svg
          aria-hidden="true"
          className={`w-4 h-4 text-[var(--accent-primary)] transition-[transform,opacity] duration-300 ${
            !isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0 absolute"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          />
        </svg>
      </span>
    </button>
  );
}
