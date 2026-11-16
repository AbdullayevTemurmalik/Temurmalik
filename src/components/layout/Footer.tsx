"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { siteConfig } from "@/config/site";
import {
  GitHubIcon,
  TelegramIcon,
  InstagramIcon,
  MailIcon
} from "@/components/ui/Icons";
import { useTranslation } from "@/i18n/context";

function LiveTashkentClock() {
  const [time, setTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Tashkent",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(now);
        setTime(formatted);
      } catch {
        setTime("");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[11px] text-[var(--text-secondary)] font-mono select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]" />
      </span>
      <span>Tashkent (UTC+5) · {time}</span>
    </div>
  );
}

export function Footer() {
  const currentYear = 2026;
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-base)] py-10 sm:py-12 text-[var(--text-secondary)]">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
          {/* Brand & Copyright Notice */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
            <Wordmark />
            <span className="hidden sm:inline text-[var(--border-subtle)]">|</span>
            <p className="text-[var(--text-secondary)]">
              © {currentYear} {siteConfig.fullName}. {t.footer.rights}
            </p>
          </div>

          {/* Live Tashkent Availability Beacon */}
          <LiveTashkentClock />

          {/* Social Links — All 4 verified authentic channels */}
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
