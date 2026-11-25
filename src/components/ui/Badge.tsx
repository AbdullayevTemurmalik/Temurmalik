import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "accent" | "blue" | "subtle";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className = ""
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)]",
    accent: "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border-[var(--accent-primary)]/30",
    blue: "bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] border-[var(--accent-secondary)]/30",
    subtle: "bg-transparent text-[var(--text-secondary)] border-[var(--border-subtle)]/70"
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs sm:text-sm px-3 py-1"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono border rounded-md font-medium tracking-tight ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
