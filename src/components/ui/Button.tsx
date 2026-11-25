import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "./Icons";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  href,
  variant = "secondary",
  size = "md",
  isExternal = false,
  className = "",
  icon,
  onClick,
  type = "button"
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-medium rounded-md transition-[color,background-color,border-color,opacity,box-shadow,transform] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-4 py-2 gap-2",
    lg: "text-sm sm:text-base px-5 py-2.5 gap-2.5"
  };

  const variantStyles = {
    primary:
      "bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 font-semibold border border-transparent shadow-xs",
    secondary:
      "bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-hover)]",
    outline:
      "bg-transparent text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-secondary)]/60",
    ghost:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]/70"
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
          {icon || <ArrowUpRight className="w-3.5 h-3.5 text-current opacity-80" />}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
      {icon}
    </button>
  );
}
