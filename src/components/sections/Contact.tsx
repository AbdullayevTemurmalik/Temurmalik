"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import {
  GitHubIcon,
  TelegramIcon,
  InstagramIcon,
  MailIcon,
  ArrowUpRight
} from "@/components/ui/Icons";
import { useTranslation } from "@/i18n/context";
import { useInView } from "@/components/ui/ScrollReveal";

export function Contact() {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -65px 0px",
    triggerOnce: true
  });

  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const contactMethods = [
    {
      key: "telegram",
      name: "Telegram",
      handle: siteConfig.social.telegram.label,
      url: siteConfig.social.telegram.url,
      icon: TelegramIcon,
      accentColor: "text-[var(--accent-secondary)]",
      ariaLabel: "Contact Temurmalik on Telegram @TM_Backdev",
      isExternal: true
    },
    {
      key: "email",
      name: "Email",
      handle: siteConfig.social.email.label,
      url: siteConfig.social.email.url,
      icon: MailIcon,
      accentColor: "text-[var(--accent-primary)]",
      ariaLabel: "Send direct email to tmaq77@gmail.com",
      isExternal: false
    },
    {
      key: "github",
      name: "GitHub",
      handle: siteConfig.social.github.handle,
      url: siteConfig.social.github.url,
      icon: GitHubIcon,
      accentColor: "text-[var(--text-primary)]",
      ariaLabel: "View Temurmalik's GitHub repositories",
      isExternal: true
    },
    {
      key: "instagram",
      name: "Instagram",
      handle: siteConfig.social.instagram.label,
      url: siteConfig.social.instagram.url,
      icon: InstagramIcon,
      accentColor: "text-[var(--accent-highlight)]",
      ariaLabel: "View Temurmalik's Instagram profile @temur_devv",
      isExternal: true
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-t border-[var(--border-subtle)] scroll-mt-20"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            label={t.contact.label}
            title={t.contact.heading}
            subtitle={t.contact.subtitle}
            className="text-center [&>div]:justify-center [&>p]:mx-auto"
          />

          {/* Contact Direct Channels — 4 Verified Channels Staggered Reveal */}
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 font-mono text-xs sm:text-sm"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.key}
                  href={method.url}
                  target={method.isExternal ? "_blank" : undefined}
                  rel={method.isExternal ? "noopener noreferrer" : undefined}
                  aria-label={method.ariaLabel}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    transitionDuration: "900ms",
                    transitionDelay: `${idx * 115}ms`,
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
                  }}
                  className={`group relative overflow-hidden flex items-center justify-between p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-hover)] transition-[transform,opacity,border-color,background-color] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] shadow-xs ${
                    inView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-[0.97]"
                  }`}
                >
                  {/* Interactive Cursor Spotlight Glow */}
                  <div
                    className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
                    style={{
                      opacity: hoveredIdx === idx ? 1 : 0,
                      background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(120, 199, 173, 0.08), transparent 80%)`
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    <span className="p-2 rounded-md bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="text-left">
                      <span className="block text-[11px] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
                        {method.name}
                      </span>
                      <span className="text-[var(--text-primary)] font-medium transition-colors">
                        {method.handle}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="relative z-10 w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors shrink-0" />
                </a>
              );
            })}
          </div>

          {/* Direct Notice */}
          <div className="mt-10 pt-6 border-t border-[var(--border-subtle)]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)]">
            <span>{t.contact.utcNote}</span>
            <span className="text-[var(--accent-primary)]">
              {t.contact.remoteBadge}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
