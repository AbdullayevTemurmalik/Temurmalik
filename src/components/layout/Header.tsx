"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ui/Wordmark";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTranslation } from "@/i18n/context";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const { t, locale } = useTranslation();

  const activeSectionRef = useRef<string>("");
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

      // When an active section was clicked: if user scrolls away from that section, turn indicator OFF
      const currentActive = activeSectionRef.current;
      if (currentActive) {
        const el = document.getElementById(currentActive);
        if (el) {
          const rect = el.getBoundingClientRect();
          const isOutOfView =
            rect.bottom < 70 || rect.top > window.innerHeight * 0.7;
          if (isOutOfView) {
            setActiveSection("");
          }
        } else {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Close mobile menu cleanly on Escape key or browser back/forward navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePopState = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [mobileMenuOpen]);

  // Lock background scroll while mobile menu is open, ensuring cleanup on unmount
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    setActiveSection(sectionId);
    activeSectionRef.current = sectionId;
    isProgrammaticScrollRef.current = true;
    setMobileMenuOpen(false);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 2000);

    const isHome =
      pathname === `/${locale}` || pathname === "/" || pathname === `/${locale}/`;

    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        // Wait two frames so mobile drawer unmount effect unlocks scroll cleanly first
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const yOffset = -70;
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
          });
        });
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
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-[background-color,border-color,padding,box-shadow] duration-200 ${
          scrolled
            ? "bg-[var(--bg-base)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-sm"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Wordmark */}
            <Wordmark onClick={handleResetActive} />

            {/* Desktop Navigation Links */}
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
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent-primary)] rounded-full transition-[opacity,transform] duration-200" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Controls */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>

            {/* Mobile Right Controls: Switchers + Menu Button */}
            <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <LocaleSwitcher />
              <ThemeToggle />

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="min-w-[38px] min-h-[38px] flex items-center justify-center p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-md border border-[var(--border-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              >
                {mobileMenuOpen ? (
                  <svg
                    aria-hidden="true"
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
                    aria-hidden="true"
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
      </header>

      {/* Mobile Slide-Over Backdrop & Drawer rendered OUTSIDE <header>
          so backdrop-blur-md on sticky <header> NEVER traps position:fixed inside a 60px box */}
      <div
        className={`fixed inset-0 z-[55] bg-black/65 transition-opacity duration-250 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Over Drawer from RIGHT */}
      <div
        id="mobile-navigation-drawer"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen ? true : undefined}
        className={`fixed inset-y-0 right-0 z-[60] w-[300px] max-w-[85vw] bg-[var(--bg-base)] border-l border-[var(--border-subtle)] shadow-2xl flex flex-col md:hidden transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] overscroll-contain ${
          mobileMenuOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal={mobileMenuOpen ? "true" : undefined}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/50">
          <span
            translate="no"
            className="font-mono text-xs text-[var(--accent-primary)] font-semibold tracking-wider uppercase flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" aria-hidden="true" />
            ~/navigation
          </span>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              menuButtonRef.current?.focus();
            }}
            className="min-w-[38px] min-h-[38px] flex items-center justify-center p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-md border border-[var(--border-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] transition-colors cursor-pointer"
            aria-label={t.nav.closeMenu}
          >
            <svg
              aria-hidden="true"
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
        <nav
          data-lenis-prevent
          data-scroll-prevent
          onWheel={(e) => e.stopPropagation()}
          aria-label="Mobile Navigation Links"
          className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 flex flex-col gap-2.5 font-mono text-sm"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <Link
                key={item.sectionId}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.sectionId)}
                className={`px-4 py-3.5 rounded-lg border transition-[color,background-color,border-color,box-shadow] duration-150 flex items-center justify-between ${
                  isActive
                    ? "border-[var(--accent-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs"
                    : "border-[var(--border-subtle)] bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)]"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-[var(--accent-primary)] font-mono" aria-hidden="true">
                  {isActive ? "●" : "→"}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer with Quick Connect & Profile Identity */}
        <div className="p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 flex flex-col gap-3 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-muted)]">Direct Contact:</span>
            <a
              href={siteConfig.social.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Telegram</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="text-[var(--text-muted)] text-[11px] leading-relaxed pt-2 border-t border-[var(--border-subtle)]">
            <p className="font-semibold text-[var(--text-secondary)]">{siteConfig.fullName}</p>
            <p>{siteConfig.title} · {siteConfig.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
