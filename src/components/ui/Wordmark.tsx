"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

interface WordmarkProps {
  className?: string;
}

/**
 * Typography-first wordmark reading "Temurmalik".
 * Strictly follows the branding rule: no "TM", no "TM.DEV", no monograms.
 */
export function Wordmark({ className = "" }: WordmarkProps) {
  const { locale } = useTranslation();

  return (
    <Link
      href={`/${locale}`}
      className={`group inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] rounded-md px-1 py-0.5 ${className}`}
      aria-label={`${siteConfig.name} - Home`}
    >
      <span className="font-mono text-sm font-bold text-[var(--accent-primary)] transition-colors">
        λ
      </span>
      <span className="font-mono text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] transition-colors">
        {siteConfig.name}
      </span>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] transition-colors" />
    </Link>
  );
}
