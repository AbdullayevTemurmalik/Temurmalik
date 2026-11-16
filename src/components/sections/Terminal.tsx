"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

export function Terminal() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "whoami" | "uptime" | "profile" | "projects" | "status"
  >("whoami");
  // Steps 1 to 5 reveal sequentially every 2.2 seconds
  const [visibleSteps, setVisibleSteps] = useState<number>(1);
  const { t } = useTranslation();

  useEffect(() => {
    // Respect reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const raf = requestAnimationFrame(() => setVisibleSteps(5));
      return () => cancelAnimationFrame(raf);
    }

    // Sequentially reveal 1 command every 2.2 seconds
    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      setVisibleSteps(current);
      if (current >= 5) {
        clearInterval(interval);
      }
    }, 2200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTabClick = (
    tab: "whoami" | "uptime" | "profile" | "projects" | "status"
  ) => {
    setActiveTab(tab);
    // If user clicks a tab, instantly reveal all steps
    setVisibleSteps(5);
  };

  const fullTerminalText = `temurmalik@portfolio: ~
$ whoami
${siteConfig.fullName}
${t.terminal.role}
${t.terminal.focusLabel}: ${t.terminal.focusValue}

$ uptime
3 ${t.terminal.yearsUnit} (${t.terminal.uptimeDesc})

$ cat profile.json
{
  "age": 17,
  "location": "${siteConfig.location}",
  "projects": "100+",
  "clients": "10+",
  "focus": ["Backend", "AI", "Full-Stack"]
}

$ ls projects/
runcode-web/
jobify/
donik-coach-ai/
al-harameen/

$ status
${t.terminal.statusText}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullTerminalText);
    setCopied(true);
    setVisibleSteps(5);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden font-mono text-xs sm:text-[13px] leading-relaxed transition-colors select-text"
      aria-label="Interactive Developer Terminal"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-base)] border-b border-[var(--border-subtle)] select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80" title="Close" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80" title="Minimize" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)]/80" title="Expand" />
          <span className="ml-2 text-xs text-[var(--text-muted)] tracking-tight font-mono">
            {siteConfig.terminal.user}@{siteConfig.terminal.host}: {siteConfig.terminal.cwd}
          </span>
        </div>

        <button
          type="button"
          onClick={copyToClipboard}
          className="text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2 py-0.5 rounded border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)]"
          title="Copy terminal session"
        >
          {copied ? t.terminal.copied : t.terminal.copy}
        </button>
      </div>

      {/* Terminal Interactive Quick Navigation Bar */}
      <div className="flex items-center gap-1 px-3 py-1.5 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]/70 overflow-x-auto text-[11px]">
        {(["whoami", "uptime", "profile", "projects", "status"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === tab
                ? "bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/30"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
            }`}
          >
            ${tab}
          </button>
        ))}
      </div>

      {/* Terminal Body with Fixed Stable Height (Zero Layout Shift at all steps) */}
      <div className="p-4 sm:p-5 text-[var(--text-secondary)] space-y-4 overflow-y-auto overflow-x-auto h-[580px] sm:h-[530px] flex flex-col justify-start">
        {/* Command 1: whoami (Visible at step >= 1) */}
        {visibleSteps >= 1 && (
          <div
            className={`animate-terminal-step transition-opacity duration-300 ${
              activeTab !== "whoami" ? "opacity-75" : ""
            }`}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">whoami</span>
            </div>
            <div className="mt-1 pl-3 border-l border-[var(--border-subtle)] text-[var(--text-primary)]">
              <p className="font-semibold text-[var(--text-primary)]">{siteConfig.fullName}</p>
              <p className="text-[var(--text-secondary)]">{t.terminal.role}</p>
              <p className="text-[var(--accent-primary)] text-xs">
                {t.terminal.focusLabel}: {t.terminal.focusValue}
              </p>
            </div>
          </div>
        )}

        {/* Command 2: uptime (Visible at step >= 2) */}
        {visibleSteps >= 2 && (
          <div
            className={`animate-terminal-step transition-opacity duration-300 ${
              activeTab !== "uptime" ? "opacity-75" : ""
            }`}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">uptime</span>
            </div>
            <div className="mt-1 pl-3 border-l border-[var(--border-subtle)] text-[var(--text-primary)]">
              <p>
                <span className="text-[var(--accent-primary)] font-semibold">
                  3 {t.terminal.yearsUnit}
                </span>{" "}
                <span className="text-[var(--text-muted)] text-xs">
                  ({t.terminal.uptimeDesc})
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Command 3: cat profile.json (Visible at step >= 3) */}
        {visibleSteps >= 3 && (
          <div
            className={`animate-terminal-step transition-opacity duration-300 ${
              activeTab !== "profile" ? "opacity-75" : ""
            }`}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">cat profile.json</span>
            </div>
            <pre className="mt-1 pl-3 border-l border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs font-mono">
{`{
  "age": 17,
  "location": "Uzbekistan",
  "projects": "100+",
  "clients": "10+",
  "focus": ["Backend", "AI", "Full-Stack"]
}`}
            </pre>
          </div>
        )}

        {/* Command 4: ls projects/ (Visible at step >= 4) */}
        {visibleSteps >= 4 && (
          <div
            className={`animate-terminal-step transition-opacity duration-300 ${
              activeTab !== "projects" ? "opacity-75" : ""
            }`}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">ls projects/</span>
            </div>
            <div className="mt-1 pl-3 border-l border-[var(--border-subtle)] flex flex-wrap gap-x-3 gap-y-1 sm:grid sm:grid-cols-4 sm:gap-1 text-xs">
              <span className="text-[var(--accent-primary)]">runcode-web/</span>
              <span className="text-[#38BDF8]">jobify/</span>
              <span className="text-[var(--accent-secondary)]">donik-coach-ai/</span>
              <span className="text-[var(--accent-highlight)]">al-harameen/</span>
            </div>
          </div>
        )}

        {/* Command 5: status (Visible at step >= 5) */}
        {visibleSteps >= 5 && (
          <div
            className={`animate-terminal-step transition-opacity duration-300 ${
              activeTab !== "status" ? "opacity-75" : ""
            }`}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">status</span>
            </div>
            <div className="mt-1 pl-3 border-l border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]" />
              </span>
              <span>{t.terminal.statusText}</span>
            </div>
          </div>
        )}

        {/* Active blinking terminal prompt (stays at current loading position or bottom) */}
        <div className="pt-2 flex items-center gap-2 text-[var(--text-secondary)]">
          <span className="text-[var(--accent-primary)] font-semibold">$</span>
          <span className="inline-block w-2 h-4 bg-[var(--accent-primary)] animate-cursor-blink" />
          {visibleSteps < 5 && (
            <span className="text-[10px] text-[var(--text-muted)] animate-pulse">
              executing...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
