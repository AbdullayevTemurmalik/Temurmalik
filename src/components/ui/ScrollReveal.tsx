"use client";

import React, { useEffect, useRef, useState, useTransition } from "react";

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * High-performance, lightweight hook using native IntersectionObserver.
 * GPU-accelerated with full prefers-reduced-motion support.
 * Continuous reveal (triggerOnce: false) ensures scrolling up and down keeps animations alive.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0.08,
    rootMargin = "20px 0px -30px 0px",
    triggerOnce = true
  } = options;

  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect user's motion preferences
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const timer = requestAnimationFrame(() => {
        startTransition(() => {
          setInView(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    }

    if (!("IntersectionObserver" in window)) {
      const timer = requestAnimationFrame(() => {
        startTransition(() => {
          setInView(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTransition(() => {
            setInView(true);
          });
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          startTransition(() => {
            setInView(false);
          });
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-down" | "scale-up";
  delay?: number; // ms
  duration?: number; // ms — 2x slower cinematic pace
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.08,
  rootMargin = "20px 0px -30px 0px",
  triggerOnce = true,
  as: Component = "div"
}: ScrollRevealProps) {
  const { ref, inView } = useInView<HTMLElement>({
    threshold,
    rootMargin,
    triggerOnce
  });

  const getAnimationStyles = () => {
    switch (animation) {
      case "fade-in":
        return inView ? "opacity-100" : "opacity-0";
      case "fade-down":
        return inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-8";
      case "scale-up":
        return inView
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-[0.97] translate-y-4";
      case "fade-up":
      default:
        return inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8";
    }
  };

  return (
    <Component
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className={`transition-all ${getAnimationStyles()} ${className}`}
    >
      {children}
    </Component>
  );
}
