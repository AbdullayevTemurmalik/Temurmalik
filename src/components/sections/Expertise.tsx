"use client";

import React, { useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/i18n/context";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { useInView } from "@/components/ui/ScrollReveal";

export function Expertise() {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: "0px 0px -65px 0px",
    triggerOnce: true
  });

  // Update CSS custom properties directly to prevent per-mousemove React re-renders
  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section
      id="expertise"
      className="py-20 sm:py-28 bg-[var(--bg-surface)]/40 border-t border-[var(--border-subtle)] scroll-mt-20"
    >
      <Container>
        <SectionHeading
          label={t.expertise.label}
          title={t.expertise.heading}
          subtitle={t.expertise.subtitle}
        />

        {/* 4 Technical Cards — Smooth Staggered Scroll Reveal */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.expertise.domains.map((area, idx) => (
            <div
              key={area.id}
              onMouseMove={handleCardMouseMove}
              style={{
                transitionDuration: "950ms",
                transitionDelay: `${idx * 130}ms`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
              }}
              className={`group relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] surface-card p-6 sm:p-7 transition-[transform,opacity,border-color,background-color] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] ${
                inView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-9 scale-[0.97]"
              }`}
            >
              {/* Interactive Cursor Spotlight Glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 spotlight-radial"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]/60">
                  <span className="font-mono text-xs text-[var(--accent-primary)] font-semibold tabular-nums">
                    {"//"} {area.number}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {t.expertise.coreDomain}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] tracking-tight mb-2">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--accent-secondary)] font-mono mb-3">
                  {area.summary}
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {area.description}
                </p>

                {/* Specific capabilities list */}
                <div className="space-y-1.5 pt-3 border-t border-[var(--border-subtle)]/40 font-mono text-xs text-[var(--text-secondary)]">
                  {area.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)] shrink-0 mt-0.5" aria-hidden="true">
                        ›
                      </span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used in this domain */}
                <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-[var(--border-subtle)]/40">
                  {area.skills.map((skill) => (
                    <SkillBadge
                      key={skill}
                      skillName={skill}
                      className="text-[11px] py-1 px-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
