"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/i18n/context";
import { localeDetails, Locale } from "@/i18n/config";

export function LocaleSwitcher() {
  const { locale, switchLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Current active locale meta
  const currentLocale =
    localeDetails.find((item) => item.code === locale) || localeDetails[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (targetCode: Locale) => {
    switchLocale(targetCode);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left font-mono">
      {/* Custom Select Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Language selector. Current: ${currentLocale.nativeName}`}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] transition-all text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] shadow-2xs cursor-pointer select-none"
      >
        {/* Globe icon */}
        <svg
          className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>

        <span className="font-semibold uppercase tracking-wider text-[11px]">
          {currentLocale.code}
        </span>

        {/* Chevron icon */}
        <svg
          className={`w-3 h-3 text-[var(--text-muted)] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[var(--accent-primary)]" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-2 w-52 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/98 backdrop-blur-xl shadow-2xl py-1.5 z-50 animate-fadeIn max-h-80 overflow-y-auto divide-y divide-[var(--border-subtle)]/40 scrollbar-thin"
        >
          <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center justify-between select-none">
            <span>Select Language</span>
            <span className="text-[var(--accent-primary)]">12 Locales</span>
          </div>

          <div className="py-1">
            {localeDetails.map((item) => {
              const isSelected = item.code === locale;
              return (
                <button
                  key={item.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer text-start ${
                    isSelected
                      ? "bg-[var(--accent-primary)]/15 text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        isSelected
                          ? "bg-[var(--accent-primary)] text-white"
                          : "bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      }`}
                    >
                      {item.code.toUpperCase()}
                    </span>
                    <span className="font-sans text-xs">{item.nativeName}</span>
                  </div>

                  {isSelected && (
                    <span className="text-[var(--accent-primary)] text-xs font-bold">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
