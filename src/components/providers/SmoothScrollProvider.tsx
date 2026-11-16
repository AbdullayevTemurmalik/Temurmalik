"use client";

import React, { useEffect, useRef } from "react";

/**
 * Luxury Inertia Smooth Scroll Provider.
 * Dampens mouse wheel & touchpad scroll to an ultra-calm, velvet pace (speedMultiplier: 0.26, lerp: 0.052).
 * Respects prefers-reduced-motion and gracefully synchronizes with programmatic scrolls.
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
        // Calm, velvety deceleration (0.052)
        currentYRef.current += diff * 0.052;
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

      // If the wheel event is predominantly horizontal (e.g. trackpad side-swipe), let native handle it
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      // Don't intercept inside scrollable code blocks, textareas, horizontal scrollers, or inner scroll containers
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("pre") ||
        target?.closest("textarea") ||
        target?.closest("[data-lenis-prevent]") ||
        target?.closest(".overflow-x-auto")
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

      // Calibrated slower wheel speed for a controlled, calm downward pace
      const speedMultiplier = 0.26;
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

    // Pause inertia immediately when a programmatic smooth scroll begins
    const handleProgrammaticScroll = (e: Event) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      isRunningRef.current = false;
      const customEvent = e as CustomEvent<{ targetY?: number }>;
      const target =
        typeof customEvent.detail?.targetY === "number"
          ? customEvent.detail.targetY
          : window.pageYOffset;
      currentYRef.current = target;
      targetYRef.current = target;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScrollSync, { passive: true });
    window.addEventListener("programmatic-scroll", handleProgrammaticScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScrollSync);
      window.removeEventListener("programmatic-scroll", handleProgrammaticScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
