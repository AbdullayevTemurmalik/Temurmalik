"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Terminal } from "./Terminal";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function Hero() {
  const { t, locale } = useTranslation();

  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[var(--accent-secondary)]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Availability Indicator */}
            {siteConfig.isAvailableForWork && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-secondary)] shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]" />
                </span>
                <span>{t.hero.availableText}</span>
              </div>
            )}

            {/* Intro & Main Headings */}
            <div className="space-y-2">
              <p className="font-mono text-sm sm:text-base text-[var(--accent-primary)] font-medium">
                {t.hero.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                {t.hero.heading}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[var(--text-secondary)] tracking-tight">
                {t.hero.subheading}
              </p>
            </div>

            {/* Short Credible Description */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Action Buttons — Unified Without Redundant Text */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`/${locale}#projects`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-mono text-xs sm:text-sm font-semibold transition-all duration-200 bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 active:scale-[0.98] shadow-xs"
              >
                {t.hero.exploreBtn}
              </Link>
              <Link
                href={`/${locale}#contact`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-mono text-xs sm:text-sm font-medium transition-all duration-200 bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] active:scale-[0.98]"
              >
                {t.hero.contactBtn}
              </Link>
            </div>

            {/* Technical Metadata */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <span>{t.hero.metaTags}</span>
            </div>
          </div>

          {/* Right Column: Terminal Panel */}
          <div className="lg:col-span-5 w-full">
            <Terminal />
          </div>
        </div>
      </Container>
    </section>
  );
}
