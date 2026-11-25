import React from "react";

interface TechBadgeProps {
  name: string;
  size?: "sm" | "md";
  highlight?: boolean;
}

export function TechBadge({ name, size = "sm", highlight = false }: TechBadgeProps) {
  return (
    <span
      translate="no"
      className={`inline-flex items-center font-mono rounded border transition-colors shadow-2xs ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs sm:text-sm"
      } ${
        highlight
          ? "bg-[var(--bg-surface-hover)] text-[var(--text-primary)] border-[var(--border-hover)] font-medium"
          : "bg-[var(--bg-base)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
      }`}
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]/75 mr-1.5 shrink-0"
        aria-hidden="true"
      />
      {name}
    </span>
  );
}
