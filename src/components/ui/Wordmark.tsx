"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

interface WordmarkProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Typography-first wordmark reading "Temurmalik".
 * Strictly follows the branding rule: no "TM", no "TM.DEV", no monograms.
 * Clicking reliably navigates to homepage top and resets scroll/hash.
 */
export function Wordmark({ className = "", onClick }: WordmarkProps) {
  const { locale } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    const isHome =
      pathname === `/${locale}` ||
      pathname === "/" ||
      pathname === `/${locale}/`;

    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.pushState(null, "", `/${locale}`);
      }
    } else {
      e.preventDefault();
      router.push(`/${locale}`);
    }
  };

  return (
    <Link
      href={`/${locale}`}
      onClick={handleClick}
      className={`group inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] rounded-md px-1 py-0.5 cursor-pointer select-none ${className}`}
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
