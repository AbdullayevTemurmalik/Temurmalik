"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/i18n/context";

export function Stats() {
  const { t } = useTranslation();

  const stats = [
    {
      value: t.stats.experienceValue,
      label: t.stats.experienceLabel,
      meta: t.stats.experienceMeta
    },
    {
      value: t.stats.projectsValue,
      label: t.stats.projectsLabel,
      meta: t.stats.projectsMeta
    },
    {
      value: t.stats.clientsValue,
      label: t.stats.clientsLabel,
      meta: t.stats.clientsMeta
    }
  ];

  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 py-10 sm:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col ${
                idx === 0 ? "" : "pt-6 md:pt-0 md:pl-8 lg:pl-10"
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                  {stat.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
              </div>
              <p className="mt-2 text-sm sm:text-base font-medium text-[var(--text-primary)]">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs font-mono text-[var(--text-secondary)]">
                {stat.meta}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
