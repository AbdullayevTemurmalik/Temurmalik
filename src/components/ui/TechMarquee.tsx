"use client";

import React from "react";

interface TechMarqueeProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}

export function TechMarquee({
  items,
  direction = "left",
  className = ""
}: TechMarqueeProps) {
  // Multiply items to guarantee a continuous, seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const animationClass =
    direction === "right" ? "animate-marquee-right" : "animate-marquee-left";

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 py-3 sm:py-3.5 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Left subtle fade gradient */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10" />

      {/* Right subtle fade gradient */}
      <div className="pointer-events-none absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10" />

      {/* Scrolling Track */}
      <div className={animationClass}>
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 whitespace-nowrap font-mono text-xs sm:text-[13px] tracking-wider uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <span className="font-medium">{item}</span>
            <span className="text-[var(--accent-primary)] text-[10px] opacity-75 font-bold">
              {"//"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
