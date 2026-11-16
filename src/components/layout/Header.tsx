"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ui/Wordmark";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchIcon } from "@/components/ui/Icons";
import { useTranslation } from "@/i18n/context";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const { t, locale } = useTranslation();

  const activeSectionRef = useRef<string>("");
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync ref with state so scroll event listener has freshest value without re-binding
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

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

      // If scrolled back to top of the page, clear indicator
      if (window.scrollY < 80) {
        if (activeSectionRef.current !== "") {
          setActiveSection("");
        }
        return;
      }

      // If programmatically gliding towards the clicked target, don't clear indicator early
      if (isProgrammaticScrollRef.current) return;

      // When an active section was clicked: if user scrolls away from that section, turn indicator OFF!
      const currentActive = activeSectionRef.current;
      if (currentActive) {
        const el = document.getElementById(currentActive);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active area bounds: if scrolled past the section (top or bottom), it turns OFF
          const isOutOfView =
            rect.bottom < 70 || rect.top > window.innerHeight * 0.7;
          if (isOutOfView) {
            setActiveSection("");
          }
        } else {
          setActiveSection("");
        }
      }
      // CRITICAL: When no section is active, DO NOT auto-activate other sections on scroll!
      // They stay cleanly off so manual scrolling never flickers or auto-lights indicators.
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

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

  // Active state is explicitly triggered ONLY when the user clicks a nav link
  // Uses 2x slower cinematic smooth scroll (~1250ms)
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    setActiveSection(sectionId);
    activeSectionRef.current = sectionId;
    isProgrammaticScrollRef.current = true;
    setMobileMenuOpen(false);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    // Allow smooth scroll to complete before scroll-away checking is active
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 2000);

    const isHome =
      pathname === `/${locale}` || pathname === "/" || pathname === `/${locale}/`;

    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -70; // offset for sticky header
        const y = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset + yOffset);
        const dist = Math.abs(y - window.pageYOffset);
        const calculatedDuration = Math.min(
          2400,
          Math.max(1000, Math.round(800 + Math.sqrt(dist) * 26))
        );
        smoothScrollTo(y, calculatedDuration);
        window.history.pushState(null, "", `#${sectionId}`);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isProgrammaticScrollRef.current = false;
        }, calculatedDuration + 150);
      }
    }
  };

  const handleResetActive = () => {
    setActiveSection("");
    activeSectionRef.current = "";
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    isProgrammaticScrollRef.current = false;
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
          {/* Brand Wordmark — Clicking smoothly navigates to top and resets active state */}
          <Wordmark onClick={handleResetActive} />

          {/* Desktop Navigation Links — Pure, clean typography */}
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
                  {/* Subtle 2px terminal accent line indicator that ONLY renders when clicked */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent-primary)] rounded-full transition-all duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Command Menu + Language & Theme Switcher */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "k", metaKey: true })
                );
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-md transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
              title="Quick Search & Commands (Cmd+K)"
              aria-label="Open Command Menu"
            >
              <SearchIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span className="hidden xl:inline text-[11px] text-[var(--text-muted)]">Search</span>
              <kbd className="text-[10px] bg-[var(--bg-base)] border border-[var(--border-subtle)] px-1 py-0.5 rounded text-[var(--text-muted)]">
                ⌘K
              </kbd>
            </button>
            <LocaleSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls: Search + Switchers + Menu Button */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "k", metaKey: true })
                );
              }}
              className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] rounded-md border border-[var(--border-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
              aria-label="Search and Commands"
            >
              <SearchIcon className="w-4 h-4 text-[var(--accent-primary)]" />
            </button>
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
        className={`fixed inset-y-0 right-0 z-50 w-[300px] max-w-[85vw] bg-[var(--bg-base)] border-l border-[var(--border-subtle)] shadow-2xl flex flex-col md:hidden transform transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100 visible pointer-events-auto"
            : "translate-x-full opacity-0 invisible pointer-events-none"
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
