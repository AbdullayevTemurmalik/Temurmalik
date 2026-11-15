import React from "react";

interface TechBadgeProps {
  name: string;
  size?: "sm" | "md";
  highlight?: boolean;
}

export function TechBadge({ name, size = "sm", highlight = false }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-mono rounded border transition-colors ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs sm:text-sm"
      } ${
        highlight
          ? "bg-[#182330] text-[#E6EDF3] border-[#394858]"
          : "bg-[#121922] text-[#8B949E] border-[#26313D] hover:border-[#394858] hover:text-[#E6EDF3]"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#79C0A5]/60 mr-1.5 shrink-0" />
      {name}
    </span>
  );
}
