"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "@/i18n/context";
import { siteConfig } from "@/config/site";
import { smoothScrollTo } from "@/lib/smoothScroll";
import {
  SearchIcon,
  GitHubIcon,
  TelegramIcon,
  MailIcon,
  TerminalIcon,
  ArrowRight
} from "@/components/ui/Icons";

interface PaletteItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Projects" | "Actions";
  icon?: React.ElementType;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { locale, t } = useTranslation();

  const isHome =
    pathname === `/${locale}` || pathname === "/" || pathname === `/${locale}/`;

  const navigateToSection = useCallback(
    (sectionId: string) => {
      setIsOpen(false);
      if (isHome) {
        if (!sectionId) {
          smoothScrollTo(0, 1600);
          window.history.pushState(null, "", `/${locale}`);
          return;
        }
        const el = document.getElementById(sectionId);
        if (el) {
          const y = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - 70);
          smoothScrollTo(y, 1600);
          window.history.pushState(null, "", `#${sectionId}`);
        }
      } else {
        router.push(`/${locale}#${sectionId}`);
      }
    },
    [isHome, locale, router]
  );

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
      setIsOpen(false);
    }, 1200);
  }, []);

  const items: PaletteItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Home",
      subtitle: "Return to workstation top",
      category: "Navigation",
      icon: TerminalIcon,
      action: () => navigateToSection("")
    },
    {
      id: "nav-about",
      title: "01 / About",
      subtitle: t.about.heading,
      category: "Navigation",
      icon: ArrowRight,
      action: () => navigateToSection("about")
    },
    {
      id: "nav-expertise",
      title: "02 / Expertise",
      subtitle: t.expertise.heading,
      category: "Navigation",
      icon: ArrowRight,
      action: () => navigateToSection("expertise")
    },
    {
      id: "nav-tech-stack",
      title: "03 / Tech Stack",
      subtitle: "35+ Verified technologies & official links",
      category: "Navigation",
      icon: ArrowRight,
      action: () => navigateToSection("tech-stack")
    },
    {
      id: "nav-projects",
      title: "04 / Featured Projects",
      subtitle: "RunCode Web, Donik Coach AI, Al Harameen",
      category: "Navigation",
      icon: ArrowRight,
      action: () => navigateToSection("projects")
    },
    {
      id: "nav-contact",
      title: "05 / Contact",
      subtitle: "Direct engineering contact",
      category: "Navigation",
      icon: ArrowRight,
      action: () => navigateToSection("contact")
    },

    // Projects
    {
      id: "proj-runcode",
      title: "RunCode Web",
      subtitle: "Full-Stack code execution platform & sandboxed runner",
      category: "Projects",
      icon: TerminalIcon,
      action: () => {
        setIsOpen(false);
        router.push(`/${locale}/projects/runcode-web`);
      }
    },
    {
      id: "proj-jobify",
      title: "Jobify",
      subtitle: "Full-Stack recruitment platform & verified talent marketplace",
      category: "Projects",
      icon: TerminalIcon,
      action: () => {
        setIsOpen(false);
        router.push(`/${locale}/projects/jobify`);
      }
    },
    {
      id: "proj-donik",
      title: "Donik Coach AI",
      subtitle: "Multi-model AI coaching system & Telegram bot",
      category: "Projects",
      icon: TerminalIcon,
      action: () => {
        setIsOpen(false);
        router.push(`/${locale}/projects/donik-coach-ai`);
      }
    },
    {
      id: "proj-harameen",
      title: "Al Harameen",
      subtitle: "High-concurrency backend architecture & transactional API",
      category: "Projects",
      icon: TerminalIcon,
      action: () => {
        setIsOpen(false);
        router.push(`/${locale}/projects/al-harameen`);
      }
    },

    // Quick Actions
    {
      id: "act-email",
      title: "Copy Email",
      subtitle: siteConfig.social.email.url.replace("mailto:", ""),
      category: "Actions",
      icon: MailIcon,
      action: () => copyToClipboard(siteConfig.social.email.url.replace("mailto:", ""), "Email Copied!")
    },
    {
      id: "act-telegram",
      title: "Open Telegram",
      subtitle: siteConfig.social.telegram.label,
      category: "Actions",
      icon: TelegramIcon,
      action: () => {
        setIsOpen(false);
        window.open(siteConfig.social.telegram.url, "_blank", "noopener,noreferrer");
      }
    },
    {
      id: "act-github",
      title: "View GitHub Profile",
      subtitle: siteConfig.social.github.url,
      category: "Actions",
      icon: GitHubIcon,
      action: () => {
        setIsOpen(false);
        window.open(siteConfig.social.github.url, "_blank", "noopener,noreferrer");
      }
    }
  ];

  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Global Keyboard Listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus and reset when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setQuery("");
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle arrow keys and Enter inside palette
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm animate-terminal-step"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
          <SearchIcon className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none text-xs sm:text-sm"
          />
          <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[10px] text-[var(--text-muted)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="max-h-[380px] overflow-y-auto p-2 space-y-1"
        >
          {copiedText ? (
            <div className="p-6 text-center text-xs font-mono text-[var(--accent-primary)] animate-pulse">
              ✓ {copiedText}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-[var(--text-muted)]">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon || TerminalIcon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/30 text-[var(--text-primary)]"
                      : "border border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`p-1.5 rounded-md border ${
                        isSelected
                          ? "border-[var(--accent-primary)]/40 text-[var(--accent-primary)] bg-[var(--bg-base)]"
                          : "border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-surface)]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <div className="truncate">
                      <p className="font-semibold text-xs sm:text-[13px] truncate">
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="text-[11px] text-[var(--text-muted)] truncate">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--text-muted)] shrink-0 ml-2 uppercase tracking-wider font-mono">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--border-subtle)] bg-[var(--bg-base)] text-[11px] text-[var(--text-muted)] select-none">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[var(--accent-primary)] font-semibold">
            λ Temurmalik
          </span>
        </div>
      </div>
    </div>
  );
}
