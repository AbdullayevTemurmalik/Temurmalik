"use client";

import React, { useState, useEffect } from "react";
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

      // Simple active section detection on home pages (e.g. /en or /uz)
      const isHome = pathname === `/${locale}` || pathname === "/" || pathname === `/${locale}/`;
      if (isHome) {
        const sections = ["about", "expertise", "tech-stack", "projects", "contact"];
        let current = "";
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160 && rect.bottom >= 160) {
              current = section;
              break;
            }
          }
        }
        setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
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

          {/* Desktop Navigation Links — Unified without duplicate button */}
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
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    isActive
                      ? "text-[var(--text-primary)] bg-[var(--bg-surface)] font-semibold shadow-2xs border border-[var(--border-subtle)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                  }`}
                >
                  {item.label}
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[61px] z-50 bg-[var(--bg-base)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)] md:hidden flex flex-col px-6 py-8 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-2 font-mono text-base">
            {navItems.map((item) => (
              <Link
                key={item.sectionId}
                href={item.href}
                onClick={handleNavClick}
                className="px-4 py-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[var(--accent-primary)]">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
            <p>Temurmalik Abdullayev · {t.hero.heading}</p>
            <p className="mt-1 text-[var(--text-muted)]">O‘zbekiston · 3 years uptime</p>
          </div>
        </div>
      )}
    </header>
  );
}
