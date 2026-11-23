"use client";

import React from "react";
import { getSkill, Skill } from "@/data/skills";
import { useTranslation } from "@/i18n/context";

interface SkillBadgeProps {
  skillName: string;
  className?: string;
  showCategoryDot?: boolean;
}

export function SkillBadge({
  skillName,
  className = "",
  showCategoryDot = true
}: SkillBadgeProps) {
  const { t } = useTranslation();
  const skill: Skill = getSkill(skillName);

  // Localized aria label
  const openLabel = t.techStack?.openOfficialSite
    ? t.techStack.openOfficialSite.replace("{name}", skill.name)
    : `Open ${skill.name} official website`;

  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={openLabel}
      className={`group/badge font-mono text-xs px-2.5 py-1.5 rounded-md bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-surface-hover)] hover:-translate-y-0.5 transition-[color,background-color,border-color,transform] duration-150 inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] cursor-pointer select-none shadow-2xs ${className}`}
    >
      {showCategoryDot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]/70 group-hover/badge:bg-[var(--accent-primary)] transition-colors shrink-0"
          aria-hidden="true"
        />
      )}
      <span className="font-medium group-hover/badge:text-[var(--text-primary)]">
        {skill.name}
      </span>
      {/* Subtle external link icon */}
      <svg
        className="w-2.5 h-2.5 text-[var(--text-muted)] opacity-40 group-hover/badge:opacity-100 group-hover/badge:text-[var(--accent-primary)] transition-[color,opacity,transform] duration-150 transform group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
