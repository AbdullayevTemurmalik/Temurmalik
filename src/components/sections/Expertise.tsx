"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/i18n/context";

export function Expertise() {
  const { t } = useTranslation();

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-[var(--bg-surface)]/40 border-t border-[var(--border-subtle)] scroll-mt-20">
      <Container>
        <SectionHeading
          label={t.expertise.label}
          title={t.expertise.heading}
          subtitle={t.expertise.subtitle}
        />

        {/* 4 Technical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.expertise.domains.map((area) => (
            <div
              key={area.id}
              className="group rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-7 transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] shadow-xs"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]/60">
                <span className="font-mono text-xs text-[var(--accent-primary)] font-semibold">
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
                    <span className="text-[var(--accent-primary)] shrink-0 mt-0.5">›</span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Technologies used in this domain */}
              <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-[var(--border-subtle)]/40">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
