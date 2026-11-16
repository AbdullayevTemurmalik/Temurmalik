"use client";

import React from "react";
import { useInView } from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className = "",
  id
}: SectionHeadingProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: "20px 0px -30px 0px",
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      id={id}
      style={{
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className={`mb-10 sm:mb-14 transition-all ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[var(--accent-primary)] uppercase">
          {label}
        </span>
        <span className="h-px w-8 bg-[var(--border-subtle)]" />
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
