"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/i18n/context";
import { useInView } from "@/components/ui/ScrollReveal";

export function About() {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label={t.about.label}
          title={t.about.heading}
          subtitle={t.about.subtitle}
        />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Main Story & Philosophy */}
          <div
            style={{
              transitionDuration: "750ms",
              transitionDelay: "150ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`lg:col-span-7 space-y-5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed transition-all will-change-[transform,opacity] ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {t.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Quick Technical Specs / Profile Summary Card */}
          <div
            style={{
              transitionDuration: "750ms",
              transitionDelay: "300ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`lg:col-span-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 space-y-4 font-mono text-xs sm:text-sm shadow-xs transition-all will-change-[transform,opacity] ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-[var(--text-primary)]">
              <span className="text-[var(--accent-primary)] font-semibold">
                {"//"} {t.about.specTitle}
              </span>
              <span className="text-[var(--text-muted)]">
                {t.about.specIndex}
              </span>
            </div>

            <div className="space-y-3 divide-y divide-[var(--border-subtle)]/60 text-xs">
              <div className="flex justify-between py-1.5">
                <span className="text-[var(--text-secondary)]">
                  {t.about.specs.locationLabel}
                </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {t.about.specs.locationValue}
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[var(--text-secondary)]">
                  {t.about.specs.ageLabel}
                </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {t.about.specs.ageValue}
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[var(--text-secondary)]">
                  {t.about.specs.expLabel}
                </span>
                <span className="text-[var(--accent-primary)] font-medium">
                  {t.about.specs.expValue}
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[var(--text-secondary)]">
                  {t.about.specs.stacksLabel}
                </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {t.about.specs.stacksValue}
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[var(--text-secondary)]">
                  {t.about.specs.specLabel}
                </span>
                <span className="text-[var(--accent-secondary)] font-medium">
                  {t.about.specs.specValue}
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[var(--text-secondary)]">
                  {t.about.specs.statusLabel}
                </span>
                <span className="text-[var(--accent-primary)] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                  {t.about.specs.statusValue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
