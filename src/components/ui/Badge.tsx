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
    neutral: "bg-[#16202C] text-[#8B949E] border-[#26313D]",
    accent: "bg-[#79C0A5]/10 text-[#79C0A5] border-[#79C0A5]/30",
    blue: "bg-[#79B8FF]/10 text-[#79B8FF] border-[#79B8FF]/30",
    subtle: "bg-transparent text-[#8B949E] border-[#26313D]/60"
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
