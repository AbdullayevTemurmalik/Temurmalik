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
    "inline-flex items-center justify-center font-mono font-medium rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79B8FF] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-4 py-2 gap-2",
    lg: "text-sm sm:text-base px-5 py-2.5 gap-2.5"
  };

  const variantStyles = {
    primary:
      "bg-[#E6EDF3] text-[#0B0F14] hover:bg-white active:bg-[#CBD5E1] font-semibold border border-transparent shadow-sm",
    secondary:
      "bg-[#16202C] text-[#E6EDF3] border border-[#26313D] hover:bg-[#1E2B3A] hover:border-[#394858] active:bg-[#16202C]",
    outline:
      "bg-transparent text-[#E6EDF3] border border-[#26313D] hover:border-[#79B8FF]/50 hover:text-white",
    ghost:
      "bg-transparent text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#16202C]/60"
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
