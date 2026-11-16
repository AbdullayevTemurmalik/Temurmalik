"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ui/Wordmark";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTranslation } from "@/i18n/context";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const { t, locale } = useTranslation();

  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: t.nav.about, href: `/${locale}#about`, sectionId: "about" },
    { label: t.nav.expertise, href: `/${locale}#expertise`, sectionId: "expertise" },
    { label: t.nav.techStack, href: `/${locale}#tech-stack`, sectionId: "tech-stack" },
    { label: t.nav.projects, href: `/${locale}#projects`, sectionId: "projects" },
    { label: t.nav.contact, href: `/${locale}#contact`, sectionId: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Don't override active section while smooth-scrolling programmatically from a click
      if (isManualScrollRef.current) return;

      const isHome = pathname === `/${locale}` || pathname === "/" || pathname === `/${locale}/`;
      if (!isHome) {
        setActiveSection("");
        return;
      }

      // Check if user has scrolled near bottom of page (guarantee Contact is active)
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = ["about", "expertise", "tech-stack", "projects", "contact"];
      const headerFocalPoint = 130;
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerFocalPoint && rect.bottom > headerFocalPoint) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [pathname, locale]);

  // Escape key handler for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const isHome = pathname === `/${locale}` || pathname === "/" || pathname === `/${locale}/`;
    if (isHome) {
      e.preventDefault();
      setActiveSection(sectionId);
      isManualScrollRef.current = true;
      setMobileMenuOpen(false);

      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -70; // offset for sticky header
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
      }

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 850);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[var(--bg-base)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-sm"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <Wordmark />

          {/* Desktop Navigation Links — Pure, clean typography without noisy hover boxes */}
          <nav
            className="hidden md:flex items-center gap-1 font-mono text-xs sm:text-sm"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <Link
                  key={item.sectionId}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.sectionId)}
                  className={`relative px-3 py-1.5 rounded font-mono transition-colors duration-150 outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)] ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                  {/* Subtle 2px terminal accent line indicator that ONLY renders on the active link */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent-primary)] rounded-full transition-all duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Language & Theme Switcher */}
          <div className="hidden md:flex items-center gap-2.5">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls: Switchers + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-md border border-[var(--border-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Slide-Over Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Over Drawer from RIGHT */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[300px] max-w-[85vw] bg-[var(--bg-base)] border-l border-[var(--border-subtle)] shadow-2xl flex flex-col md:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/40">
          <span className="font-mono text-xs text-[var(--accent-primary)] font-semibold tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            ~/navigation
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-md border border-[var(--border-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] transition-colors"
            aria-label={t.nav.closeMenu}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-2 font-mono text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <Link
                key={item.sectionId}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.sectionId)}
                className={`px-4 py-3 rounded-lg border transition-all flex items-center justify-between ${
                  isActive
                    ? "border-[var(--accent-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs"
                    : "border-[var(--border-subtle)] bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)]"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-[var(--accent-primary)] font-mono">
                  {isActive ? "●" : "→"}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer with Quick Connect & Profile Identity */}
        <div className="p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 flex flex-col gap-3 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-muted)]">Direct Contact:</span>
            <a
              href="https://t.me/TM_Backdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Telegram</span>
              <span>↗</span>
            </a>
          </div>
          <div className="text-[var(--text-muted)] text-[11px] leading-relaxed pt-2 border-t border-[var(--border-subtle)]">
            <p className="font-semibold text-[var(--text-secondary)]">Temurmalik Abdullayev</p>
            <p>Full-Stack Developer · Uzbekistan</p>
          </div>
        </div>
      </div>
    </header>
  );
}
