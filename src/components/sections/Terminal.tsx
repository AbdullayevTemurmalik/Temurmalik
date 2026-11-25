"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

type TerminalTab = "whoami" | "uptime" | "profile" | "projects" | "status";

export function Terminal() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<TerminalTab>("whoami");
  // Steps 1 to 5 reveal sequentially every 2.2 seconds
  const [visibleSteps, setVisibleSteps] = useState<number>(1);
  const { t, locale } = useTranslation();

  const stepRefs = useRef<Partial<Record<TerminalTab, HTMLDivElement | null>>>({});

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

  const handleTabClick = (tab: TerminalTab) => {
    setActiveTab(tab);
    setVisibleSteps(5);
    requestAnimationFrame(() => {
      stepRefs.current[tab]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      });
    });
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
  "age": ${siteConfig.age},
  "location": "${siteConfig.location}",
  "projects": "${siteConfig.projectsCount}",
  "clients": "${siteConfig.clientsCount}",
  "focus": ["Backend", "AI", "Full-Stack"]
}

$ ls projects/
runcode-web/
jobify/
donik-coach-ai/
al-harameen/

$ status
${t.terminal.statusText}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullTerminalText);
      setCopied(true);
      setVisibleSteps(5);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const blockClass = (tab: TerminalTab) =>
    `animate-terminal-step rounded-r px-2 py-1 transition-[opacity,background-color] duration-300 ${
      activeTab === tab
        ? "opacity-100 bg-[var(--accent-primary)]/[0.04]"
        : "opacity-75 hover:opacity-100"
    }`;

  return (
    <div
      translate="no"
      className="terminal-window w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] surface-card overflow-hidden font-mono text-xs sm:text-[13px] leading-relaxed transition-colors select-text"
      aria-label="Interactive Developer Terminal"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-base)] border-b border-[var(--border-subtle)] select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)]/80" aria-hidden="true" />
          <span className="ml-2 text-xs text-[var(--text-muted)] tracking-tight font-mono">
            {siteConfig.terminal.user}@{siteConfig.terminal.host}: {siteConfig.terminal.cwd}
          </span>
        </div>

        <button
          type="button"
          onClick={copyToClipboard}
          aria-live="polite"
          className="text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2 py-0.5 rounded border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)] cursor-pointer"
          title="Copy terminal session"
        >
          {copied ? t.terminal.copied : t.terminal.copy}
        </button>
      </div>

      {/* Terminal Interactive Quick Navigation Bar */}
      <div
        role="tablist"
        aria-label="Terminal sections"
        className="flex items-center gap-1 px-3 py-1.5 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]/70 overflow-x-auto text-[11px]"
      >
        {(["whoami", "uptime", "profile", "projects", "status"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => handleTabClick(tab)}
            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
              activeTab === tab
                ? "bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/30"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] border border-transparent"
            }`}
          >
            ${tab}
          </button>
        ))}
      </div>

      {/* Terminal Body with Fixed Stable Height (Zero Layout Shift at all steps) */}
      <div className="p-4 sm:p-5 text-[var(--text-secondary)] space-y-3.5 overflow-y-auto overflow-x-auto overscroll-contain h-[580px] sm:h-[530px] flex flex-col justify-start">
        {/* Command 1: whoami */}
        {visibleSteps >= 1 && (
          <div
            ref={(el) => {
              stepRefs.current.whoami = el;
            }}
            className={blockClass("whoami")}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">whoami</span>
            </div>
            <div
              className={`mt-1 pl-3 border-l text-[var(--text-primary)] ${
                activeTab === "whoami" ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]"
              }`}
            >
              <p className="font-semibold text-[var(--text-primary)]">{siteConfig.fullName}</p>
              <p className="text-[var(--text-secondary)]">{t.terminal.role}</p>
              <p className="text-[var(--accent-primary)] text-xs">
                {t.terminal.focusLabel}: {t.terminal.focusValue}
              </p>
            </div>
          </div>
        )}

        {/* Command 2: uptime */}
        {visibleSteps >= 2 && (
          <div
            ref={(el) => {
              stepRefs.current.uptime = el;
            }}
            className={blockClass("uptime")}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">uptime</span>
            </div>
            <div
              className={`mt-1 pl-3 border-l text-[var(--text-primary)] ${
                activeTab === "uptime" ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]"
              }`}
            >
              <p>
                <span className="text-[var(--accent-primary)] font-semibold tabular-nums">
                  3 {t.terminal.yearsUnit}
                </span>{" "}
                <span className="text-[var(--text-muted)] text-xs">
                  ({t.terminal.uptimeDesc})
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Command 3: cat profile.json */}
        {visibleSteps >= 3 && (
          <div
            ref={(el) => {
              stepRefs.current.profile = el;
            }}
            className={blockClass("profile")}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">cat profile.json</span>
            </div>
            <pre
              className={`mt-1 pl-3 border-l text-[var(--text-secondary)] text-xs font-mono ${
                activeTab === "profile" ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]"
              }`}
            >
{`{
  "age": ${siteConfig.age},
  "location": "${siteConfig.location}",
  "projects": "${siteConfig.projectsCount}",
  "clients": "${siteConfig.clientsCount}",
  "focus": ["Backend", "AI", "Full-Stack"]
}`}
            </pre>
          </div>
        )}

        {/* Command 4: ls projects/ — Directly clickable to case studies */}
        {visibleSteps >= 4 && (
          <div
            ref={(el) => {
              stepRefs.current.projects = el;
            }}
            className={blockClass("projects")}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">ls projects/</span>
            </div>
            <div
              className={`mt-1 pl-3 border-l flex flex-wrap gap-x-3 gap-y-1 sm:grid sm:grid-cols-4 sm:gap-1 text-xs ${
                activeTab === "projects" ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]"
              }`}
            >
              <Link
                href={`/${locale}/projects/runcode-web`}
                className="text-[var(--accent-primary)] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)] rounded"
              >
                runcode-web/
              </Link>
              <Link
                href={`/${locale}/projects/jobify`}
                className="text-[var(--accent-secondary)] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)] rounded"
              >
                jobify/
              </Link>
              <Link
                href={`/${locale}/projects/donik-coach-ai`}
                className="text-[var(--accent-secondary)] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)] rounded"
              >
                donik-coach-ai/
              </Link>
              <Link
                href={`/${locale}/projects/al-harameen`}
                className="text-[var(--accent-highlight)] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)] rounded"
              >
                al-harameen/
              </Link>
            </div>
          </div>
        )}

        {/* Command 5: status */}
        {visibleSteps >= 5 && (
          <div
            ref={(el) => {
              stepRefs.current.status = el;
            }}
            className={blockClass("status")}
          >
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">$</span>
              <span className="text-[var(--accent-secondary)]">status</span>
            </div>
            <div
              className={`mt-1 pl-3 border-l text-xs text-[var(--text-secondary)] flex items-center gap-2 ${
                activeTab === "status" ? "border-[var(--accent-primary)]" : "border-[var(--border-subtle)]"
              }`}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]" />
              </span>
              <span>{t.terminal.statusText}</span>
            </div>
          </div>
        )}

        {/* Active blinking terminal prompt */}
        <div className="pt-2 flex items-center gap-2 text-[var(--text-secondary)]" aria-hidden="true">
          <span className="text-[var(--accent-primary)] font-semibold">$</span>
          <span className="inline-block w-2 h-4 bg-[var(--accent-primary)] animate-cursor-blink" />
          {visibleSteps < 5 && (
            <span className="text-[10px] text-[var(--text-muted)] animate-pulse">
              executing…
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
