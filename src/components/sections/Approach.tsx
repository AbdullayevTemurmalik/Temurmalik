"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/i18n/context";
import { useInView } from "@/components/ui/ScrollReveal";

export function Approach() {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -65px 0px",
    triggerOnce: true
  });

  return (
    <section
      id="approach"
      className="py-20 sm:py-28 bg-[var(--bg-surface)]/50 border-t border-[var(--border-subtle)] scroll-mt-20"
    >
      <Container>
        <SectionHeading
          label={t.approach.label}
          title={t.approach.heading}
          subtitle={t.approach.subtitle}
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {t.approach.steps.map((item, idx) => (
            <div
              key={item.step}
              style={{
                transitionDuration: "950ms",
                transitionDelay: `${idx * 140}ms`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
              }}
              className={`rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-7 relative flex flex-col justify-between transition-[transform,opacity,border-color] hover:border-[var(--border-hover)] shadow-xs ${
                inView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-9 scale-[0.97]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]/60 font-mono text-xs">
                  <span className="text-[var(--accent-primary)] font-semibold">
                    {"//"} {t.approach.phasePrefix} {item.step}
                  </span>
                  <span className="text-[var(--text-muted)]">
                    {t.approach.stageLabel}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/40 font-mono text-xs text-[var(--text-muted)]">
                <span>{t.approach.verifiedMethod}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
