"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { siteConfig } from "@/config/site";
import { GitHubIcon, TelegramIcon, InstagramIcon, MailIcon } from "@/components/ui/Icons";
import { useTranslation } from "@/i18n/context";

export function Footer() {
  const currentYear = 2026;
  const { t, locale } = useTranslation();

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-base)] pt-12 pb-16 text-[var(--text-secondary)]">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[var(--border-subtle)]">
          <div className="space-y-2">
            <Wordmark />
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-mono max-w-sm">
              {t.hero.heading} · {t.hero.subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs sm:text-sm">
            <Link href={`/${locale}#about`} className="hover:text-[var(--text-primary)] transition-colors">
              {t.nav.about}
            </Link>
            <Link href={`/${locale}#expertise`} className="hover:text-[var(--text-primary)] transition-colors">
              {t.nav.expertise}
            </Link>
            <Link href={`/${locale}#tech-stack`} className="hover:text-[var(--text-primary)] transition-colors">
              {t.nav.techStack}
            </Link>
            <Link href={`/${locale}#projects`} className="hover:text-[var(--text-primary)] transition-colors">
              {t.nav.projects}
            </Link>
            <Link href={`/${locale}#contact`} className="hover:text-[var(--text-primary)] transition-colors">
              {t.nav.contact}
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="space-y-1">
            <p className="text-[var(--text-primary)]">
              © {currentYear} {siteConfig.fullName}. {t.footer.rights}
            </p>
            <p className="text-[var(--text-muted)]">
              {t.footer.designedBy}
            </p>
          </div>

          {/* Social Links — All 4 verified channels */}
          <div className="flex items-center gap-3">
            {/* Telegram - Primary */}
            <a
              href={siteConfig.social.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram @TM_Backdev"
              className="p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] hover:border-[var(--border-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href={siteConfig.social.email.url}
              aria-label="Email tmaq77@gmail.com"
              className="p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--border-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
            >
              <MailIcon className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href={siteConfig.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Temurmalik Abdullayev"
              className="p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @temur_devv"
              className="p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-highlight)] hover:border-[var(--border-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
