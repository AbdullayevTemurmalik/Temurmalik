"use client";

import React, { useEffect, useRef } from "react";

/**
 * Luxury Inertia Smooth Scroll Provider.
 * Dampens mouse wheel & touchpad scroll by 50% (2x slower, calm, and velvet smooth).
 * Respects prefers-reduced-motion and preserves natural touch device behavior.
 */
export function SmoothScrollProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const isRunningRef = useRef(false);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's motion preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    currentYRef.current = window.pageYOffset;
    targetYRef.current = window.pageYOffset;

    let rafId: number | null = null;

    const animate = () => {
      const diff = targetYRef.current - currentYRef.current;

      if (Math.abs(diff) > 0.5) {
        // Silky smooth easing factor (0.08 = graceful momentum)
        currentYRef.current += diff * 0.085;
        window.scrollTo(0, currentYRef.current);
        rafId = requestAnimationFrame(animate);
      } else {
        currentYRef.current = targetYRef.current;
        window.scrollTo(0, currentYRef.current);
        isRunningRef.current = false;
        rafId = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept if body scroll is locked (e.g. intro preloader or mobile menu open)
      if (
        document.body.style.overflow === "hidden" ||
        document.body.classList.contains("overflow-hidden")
      ) {
        return;
      }

      // Don't intercept inside scrollable code blocks, textareas, or inner scroll containers
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("pre") ||
        target?.closest("textarea") ||
        target?.closest("[data-lenis-prevent]")
      ) {
        return;
      }

      // Only intercept cancelable wheel events
      if (!e.cancelable) return;

      e.preventDefault();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Dampen wheel speed by 50% (2x slower, calm and controlled)
      const speedMultiplier = 0.5;
      const delta = e.deltaY * speedMultiplier;

      targetYRef.current = Math.max(0, Math.min(maxScroll, targetYRef.current + delta));

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    // Keep target in sync if user uses keyboard, scrollbar, or native anchors
    const handleScrollSync = () => {
      if (!isRunningRef.current) {
        currentYRef.current = window.pageYOffset;
        targetYRef.current = window.pageYOffset;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScrollSync, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScrollSync);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
