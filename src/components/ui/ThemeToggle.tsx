"use client";

import React, { useRef, useState, useSyncExternalStore } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] opacity-50"
        aria-hidden="true"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) !== "light";

  const handleToggle = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return;

    const targetTheme = isDark ? "light" : "dark";

    setIsAnimating(true);
    const DURATION = 900;
    setTimeout(() => setIsAnimating(false), DURATION + 50);

    const btn = buttonRef.current;
    const rect = btn?.getBoundingClientRect();
    const btnX = rect
      ? rect.left + rect.width / 2
      : event.clientX || (typeof window !== "undefined" ? window.innerWidth / 2 : 200);
    const btnY = rect ? rect.top + rect.height / 2 : event.clientY || 40;

    // Accessibility: instant toggle for reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTheme(targetTheme);
      return;
    }

    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;

    // Geometry calculation matching user specification:
    // When switching to dark: starts from bottom viewport edge (aligned with button x) and sweeps upwards.
    // When switching to light: starts from top button position and sweeps downwards.
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

    // Set CSS custom properties on documentElement for the @keyframes animation
    document.documentElement.style.setProperty("--theme-x", `${startX}px`);
    document.documentElement.style.setProperty("--theme-y", `${startY}px`);
    document.documentElement.style.setProperty("--theme-r", `${Math.ceil(endRadius)}px`);
    document.documentElement.setAttribute(
      "data-theme-transition",
      targetTheme === "dark" ? "to-dark" : "to-light"
    );

    const doc = document as Document & {
      startViewTransition?: (callback: () => Promise<void> | void) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    if (typeof doc.startViewTransition === "function") {
      try {
        const transition = doc.startViewTransition(async () => {
          // 1. Manually update HTML classes so computed style changes immediately
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(targetTheme);
          document.documentElement.style.colorScheme = targetTheme;

          // 2. Sync with next-themes provider
          setTheme(targetTheme);

          // 3. Force layout recalculation so the snapshot captures the full new theme
          void document.documentElement.offsetHeight;

          // 4. Wait one frame so new theme paint is committed into view-transition-new
          await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
        });

        await transition.ready;

        // Animate pseudoElement with Web Animations API in addition to CSS keyframes
        const anim = document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${startX}px ${startY}px)`,
              `circle(${Math.ceil(endRadius)}px at ${startX}px ${startY}px)`,
            ],
          },
          {
            duration: DURATION,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );

        await anim.finished;
        await transition.finished;
      } catch {
        // Fallback safety if view transition was aborted
        setTheme(targetTheme);
      } finally {
        document.documentElement.removeAttribute("data-theme-transition");
      }
    } else {
      // High-performance hardware-accelerated fallback ripple
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.inset = "0";
      overlay.style.pointerEvents = "none";
      overlay.style.zIndex = "999999";
      overlay.style.backgroundColor = targetTheme === "dark" ? "#050507" : "#F8FAFC";
      overlay.style.willChange = "clip-path";

      document.body.appendChild(overlay);

      // Pre-apply theme at 25% of the sweep so content underneath is ready
      setTimeout(() => {
        setTheme(targetTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(targetTheme);
        document.documentElement.style.colorScheme = targetTheme;
      }, 200);

      const animation = overlay.animate(
        [
          { clipPath: `circle(0px at ${startX}px ${startY}px)` },
          { clipPath: `circle(${Math.ceil(endRadius)}px at ${startX}px ${startY}px)` },
        ],
        {
          duration: DURATION,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        }
      );

      const cleanup = () => {
        overlay.remove();
        document.documentElement.removeAttribute("data-theme-transition");
      };
      animation.onfinish = cleanup;
      animation.oncancel = cleanup;
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
      className="relative p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] active:scale-95 transition-[color,background-color,border-color,transform] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] overflow-hidden cursor-pointer select-none"
      title={isDark ? t.nav.themeLight : t.nav.themeDark}
    >
      {/* Telegram-style micro-pulse on click */}
      {isAnimating && (
        <span
          className="absolute inset-0 rounded-md bg-[var(--accent-primary)]/25 animate-ping pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Cross-fading and rotating icon glyphs */}
      <span className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun icon for Light Mode (shown in Dark) */}
        <svg
          aria-hidden="true"
          className={`w-4 h-4 text-[var(--accent-highlight)] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0 absolute pointer-events-none"
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

        {/* Moon icon for Dark Mode (shown in Light) */}
        <svg
          aria-hidden="true"
          className={`w-4 h-4 text-[var(--accent-primary)] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            !isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0 absolute pointer-events-none"
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
