import React from "react";

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
  return (
    <div className={`mb-10 sm:mb-14 ${className}`} id={id}>
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#79C0A5] uppercase">
          {label}
        </span>
        <span className="h-px w-8 bg-[#26313D]" />
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#E6EDF3]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-[#8B949E] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
