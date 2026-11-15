"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ui/Wordmark";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Expertise", href: "/#expertise", sectionId: "expertise" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Approach", href: "/#approach", sectionId: "approach" },
  { label: "Contact", href: "/#contact", sectionId: "contact" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection on homepage
      if (pathname === "/") {
        const sections = navItems.map((item) => item.sectionId);
        let current = "";
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140 && rect.bottom >= 140) {
              current = section;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close mobile menu on escape key
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
          ? "bg-[#0B0F14]/90 backdrop-blur-md border-b border-[#26313D]/80 py-3.5 shadow-sm"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Wordmark />

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 sm:gap-2 font-mono text-xs sm:text-sm"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === "/" && activeSection === item.sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md transition-colors relative ${
                    isActive
                      ? "text-[#E6EDF3] bg-[#16202C] font-medium"
                      : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#121922]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#79C0A5] rounded-full" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/#contact"
              className="ml-3 px-3.5 py-1.5 rounded-md border border-[#26313D] bg-[#121922] text-[#E6EDF3] hover:border-[#79B8FF]/60 hover:text-white transition-all text-xs font-semibold"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#121922] rounded-md border border-[#26313D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79B8FF]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[61px] z-50 bg-[#0B0F14]/95 backdrop-blur-lg border-b border-[#26313D] md:hidden flex flex-col px-6 py-8 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-3 font-mono text-base">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="px-4 py-3 rounded-md border border-[#26313D]/60 bg-[#121922] text-[#E6EDF3] hover:border-[#79C0A5]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <span className="text-xs text-[#79C0A5]">→</span>
                </div>
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={handleNavClick}
              className="mt-4 px-4 py-3 text-center rounded-md font-semibold bg-[#E6EDF3] text-[#0B0F14] hover:bg-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-auto pt-8 border-t border-[#26313D] text-xs font-mono text-[#8B949E]">
            <p>Temurmalik Abdullayev · Full-Stack Developer</p>
            <p className="mt-1 text-[#6E7681]">Uzbekistan · 3 years uptime</p>
          </div>
        </div>
      )}
    </header>
  );
}
