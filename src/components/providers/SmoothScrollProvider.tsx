"use client";

import React, { useEffect, useRef } from "react";

/**
 * Luxury Inertia Smooth Scroll Provider.
 * Calibrated smooth pace (speedMultiplier: 0.22, lerp: 0.052).
 * Strictly yields to native scrollbar dragging, touch, and dropdown/modal scrolling.
 */
export function SmoothScrollProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const isRunningRef = useRef(false);
  const isRafScrollingRef = useRef(false);
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

      if (Math.abs(diff) > 0.4) {
        // Calibrated velvety deceleration (0.052) for fluid, responsive editorial glide
        currentYRef.current += diff * 0.052;
        isRafScrollingRef.current = true;
        window.scrollTo(0, currentYRef.current);
        // Reset flag on next frame
        requestAnimationFrame(() => {
          isRafScrollingRef.current = false;
        });
        rafId = requestAnimationFrame(animate);
      } else {
        currentYRef.current = targetYRef.current;
        isRafScrollingRef.current = true;
        window.scrollTo(0, currentYRef.current);
        requestAnimationFrame(() => {
          isRafScrollingRef.current = false;
        });
        isRunningRef.current = false;
        rafId = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept if body scroll is locked (e.g. mobile drawer open)
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

      // NEVER intercept inside dropdowns, dialogs, code blocks, textareas, or scrollable containers
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("[data-lenis-prevent]") ||
        target?.closest("[data-scroll-prevent]") ||
        target?.closest("[role='listbox']") ||
        target?.closest("[role='dialog']") ||
        target?.closest(".overflow-y-auto") ||
        target?.closest(".overflow-y-scroll") ||
        target?.closest(".overflow-x-auto") ||
        target?.closest("pre") ||
        target?.closest("textarea")
      ) {
        return;
      }

      // Check if any ancestor is scrollable and can consume the wheel event
      let el: HTMLElement | null = target;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        if (
          (overflowY === "auto" || overflowY === "scroll") &&
          el.scrollHeight > el.clientHeight
        ) {
          return;
        }
        el = el.parentElement;
      }

      // Only intercept cancelable wheel events
      if (!e.cancelable) return;

      e.preventDefault();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Calibrated responsive wheel pace (0.22) — comfortable, not sluggish
      const speedMultiplier = 0.22;
      const delta = e.deltaY * speedMultiplier;

      targetYRef.current = Math.max(0, Math.min(maxScroll, targetYRef.current + delta));

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    // User scrolled via native scrollbar, keyboard arrows, touch, or anchor links
    const handleScrollSync = () => {
      if (!isRafScrollingRef.current) {
        // Stop any running inertia immediately to prevent fighting native scrollbar
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        isRunningRef.current = false;
        currentYRef.current = window.pageYOffset;
        targetYRef.current = window.pageYOffset;
      }
    };

    // Cancel inertia when user clicks native scrollbar track/thumb
    const handleMouseDown = (e: MouseEvent) => {
      // If clicking near right edge (native scrollbar track is ~16-20px wide)
      if (e.clientX >= window.innerWidth - 20) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        isRunningRef.current = false;
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
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("touchstart", handleScrollSync, { passive: true });
    window.addEventListener("programmatic-scroll", handleProgrammaticScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScrollSync);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleScrollSync);
      window.removeEventListener("programmatic-scroll", handleProgrammaticScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
