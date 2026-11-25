"use client";

import React, { useEffect, useRef } from "react";

/**
 * Hairline scroll-depth indicator pinned cleanly above the sticky header.
 * Updates directly via DOM style transform to avoid React re-renders during scroll.
 */
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const el = barRef.current;
      if (!el) return;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;

      el.style.transform = `scaleX(${progress.toFixed(4)})`;
      el.style.opacity = progress > 0.005 ? "1" : "0";
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 inset-x-0 z-50 h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left rtl:origin-right opacity-0 transition-opacity duration-200 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)]"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
