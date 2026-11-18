"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Rock-solid Inertia Smooth Scroll Provider.
 * - Frame-rate independent exponential smoothing (60Hz / 120Hz / 144Hz / 240Hz).
 * - Zero race conditions with native scrollbar dragging, keyboard scrolling, or touch.
 * - Respects browser zoom (Ctrl+Wheel), horizontal swipes, and inner scrollable dropdowns/containers.
 * - Auto-resets cleanly on route changes.
 */
export function SmoothScrollProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRunningRef = useRef(false);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);
  const lastWrittenYRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Reset scroll state cleanly on route navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    isRunningRef.current = false;
    const y = window.scrollY;
    currentYRef.current = y;
    targetYRef.current = y;
    lastWrittenYRef.current = Math.round(y);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's motion preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const syncFromWindow = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      isRunningRef.current = false;
      const y = window.scrollY;
      currentYRef.current = y;
      targetYRef.current = y;
      lastWrittenYRef.current = Math.round(y);
    };

    syncFromWindow();

    const animate = (now: number) => {
      const dt = Math.min(Math.max((now - lastTimeRef.current) / 1000, 0.001), 0.05);
      lastTimeRef.current = now;

      const diff = targetYRef.current - currentYRef.current;

      if (Math.abs(diff) > 0.5) {
        // Frame-rate independent velvety exponential smoothing (6.0 rad/s)
        const factor = 1 - Math.exp(-6.0 * dt);
        currentYRef.current += diff * factor;

        const roundedY = Math.round(currentYRef.current);
        window.scrollTo({ top: roundedY, behavior: "instant" as ScrollBehavior });
        lastWrittenYRef.current = window.scrollY;

        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        currentYRef.current = targetYRef.current;
        const roundedY = Math.round(targetYRef.current);
        window.scrollTo({ top: roundedY, behavior: "instant" as ScrollBehavior });
        lastWrittenYRef.current = window.scrollY;

        isRunningRef.current = false;
        rafIdRef.current = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Never intercept browser zoom (Ctrl/Meta + wheel)
      if (e.ctrlKey || e.metaKey) return;

      // Never intercept if body scroll is locked (preloader / mobile drawer)
      if (
        document.body.style.overflow === "hidden" ||
        document.body.classList.contains("overflow-hidden")
      ) {
        return;
      }

      // Let horizontal trackpad swipes pass through natively
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      const target = e.target as HTMLElement | null;

      // Never intercept inside explicitly protected dropdowns, dialogs, or form inputs
      if (
        target?.closest("[data-lenis-prevent]") ||
        target?.closest("[data-scroll-prevent]") ||
        target?.closest("[role='listbox']") ||
        target?.closest("[role='dialog']") ||
        target?.closest("textarea") ||
        target?.closest("select")
      ) {
        return;
      }

      // Check if any ancestor actually has vertical overflow that can scroll in this direction
      let el: HTMLElement | null = target;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        if (
          (overflowY === "auto" || overflowY === "scroll") &&
          el.scrollHeight > el.clientHeight + 2
        ) {
          const canScrollDown =
            e.deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1;
          const canScrollUp = e.deltaY < 0 && el.scrollTop > 1;
          if (canScrollDown || canScrollUp) {
            return;
          }
        }
        el = el.parentElement;
      }

      if (!e.cancelable) return;
      e.preventDefault();

      // Normalize wheel delta across Chrome, Firefox (line mode), and Safari
      let normalizedDelta = e.deltaY;
      if (e.deltaMode === 1) {
        normalizedDelta *= 32;
      } else if (e.deltaMode === 2) {
        normalizedDelta *= window.innerHeight;
      }

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Re-sync from real scroll position whenever starting a new wheel gesture
      if (!isRunningRef.current) {
        const y = window.scrollY;
        currentYRef.current = y;
        targetYRef.current = y;
        lastWrittenYRef.current = Math.round(y);
      }

      // Calibrated responsive luxury scroll pace (0.26x)
      const speedMultiplier = 0.26;
      const delta = normalizedDelta * speedMultiplier;

      targetYRef.current = Math.max(
        0,
        Math.min(maxScroll, targetYRef.current + delta)
      );

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        lastTimeRef.current = performance.now();
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    // Detect genuine native scroll (scrollbar drag, keyboard, touch, anchor jump)
    const handleScrollSync = () => {
      if (isRunningRef.current) {
        // Only treat as native interruption if browser scrollY diverged from our last written Y
        if (Math.abs(window.scrollY - lastWrittenYRef.current) > 3) {
          syncFromWindow();
        }
      } else {
        const y = window.scrollY;
        currentYRef.current = y;
        targetYRef.current = y;
        lastWrittenYRef.current = Math.round(y);
      }
    };

    // Immediately yield when user clicks near the right scrollbar edge
    const handlePointerDown = (e: PointerEvent) => {
      if (e.clientX >= window.innerWidth - 24) {
        syncFromWindow();
      }
    };

    // Immediately yield when user presses navigation keys
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(
          e.key
        )
      ) {
        syncFromWindow();
      }
    };

    // Pause inertia when programmatic smooth scroll (nav links / logo) runs
    const handleProgrammaticScroll = (e: Event) => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      isRunningRef.current = false;
      const customEvent = e as CustomEvent<{ targetY?: number }>;
      const target =
        typeof customEvent.detail?.targetY === "number"
          ? customEvent.detail.targetY
          : window.scrollY;
      currentYRef.current = target;
      targetYRef.current = target;
      lastWrittenYRef.current = Math.round(target);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScrollSync, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("touchstart", syncFromWindow, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: true });
    window.addEventListener("programmatic-scroll", handleProgrammaticScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScrollSync);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("touchstart", syncFromWindow);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("programmatic-scroll", handleProgrammaticScroll);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return <>{children}</>;
}
