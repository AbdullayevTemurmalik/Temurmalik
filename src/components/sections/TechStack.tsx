"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { techStackCategories } from "@/data/techStack";
import { useTranslation } from "@/i18n/context";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { useInView } from "@/components/ui/ScrollReveal";

export function TechStack() {
  const { t, locale } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px"
  });

  return (
    <section
      id="tech-stack"
      className="py-20 sm:py-28 bg-[var(--bg-surface)]/30 border-t border-[var(--border-subtle)] scroll-mt-20"
    >
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Section Narrative & Technical Focus */}
          <div
            style={{
              transitionDuration: "750ms",
              transitionDelay: "100ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`lg:col-span-4 lg:sticky lg:top-24 space-y-6 transition-all will-change-[transform,opacity] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[var(--accent-primary)] uppercase">
                {"//"} {t.techStack.label}
              </span>
              <span className="h-px w-8 bg-[var(--border-subtle)]" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                {t.techStack.heading}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {t.techStack.subtitle}
              </p>
            </div>

            {/* Engineering Positioning Card */}
            <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 space-y-3 font-mono text-xs shadow-xs">
              <div className="flex items-center justify-between pb-2.5 border-b border-[var(--border-subtle)]/60 text-[var(--text-secondary)]">
                <span className="text-[var(--accent-primary)] font-semibold">
                  {"//"} {t.techStack.scopeTitle}
                </span>
                <span className="text-[var(--text-muted)]">
                  {t.techStack.scopeIndex}
                </span>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-[var(--text-secondary)] block text-[11px]">
                    {t.techStack.primaryRoleLabel}
                  </span>
                  <span className="text-[var(--text-primary)] font-medium">
                    {t.techStack.primaryRole}
                  </span>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)]/40">
                  <span className="text-[var(--text-secondary)] block text-[11px]">
                    {t.techStack.specializationLabel}
                  </span>
                  <span className="text-[var(--accent-secondary)] font-medium">
                    {t.techStack.specialization}
                  </span>
                </div>
                <div className="pt-2 border-t border-[var(--border-subtle)]/40 flex justify-between">
                  <span className="text-[var(--text-secondary)]">
                    {t.techStack.uptimeLabel}
                  </span>
                  <span className="text-[var(--accent-primary)]">
                    {t.techStack.uptimeValue}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Categories (Frontend, Backend, Database, DevOps, Tools, AI Integration) */}
          <div
            style={{
              transitionDuration: "750ms",
              transitionDelay: "200ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`lg:col-span-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] divide-y divide-[var(--border-subtle)]/60 overflow-hidden shadow-sm transition-all will-change-[transform,opacity] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {techStackCategories.map((category) => {
              const categoryName = category.names[locale] || category.names.en;
              const shortLabel =
                category.shortLabels[locale] || category.shortLabels.en;
              const description =
                category.descriptions[locale] || category.descriptions.en;

              return (
                <div
                  key={category.id}
                  className="p-6 sm:p-7 space-y-3.5 transition-colors hover:bg-[var(--bg-surface-hover)]"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          category.id === "backend"
                            ? "bg-[var(--accent-primary)]"
                            : category.id === "ai"
                            ? "bg-[var(--accent-secondary)]"
                            : "bg-[var(--text-muted)]"
                        }`}
                      />
                      <h3 className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                        {categoryName}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {shortLabel}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {description}
                  </p>

                  {/* Skills Badges — Interactive & clickable to official websites */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skillName) => (
                      <SkillBadge
                        key={skillName}
                        skillName={skillName}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
