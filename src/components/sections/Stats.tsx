"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/i18n/context";
import { useInView } from "@/components/ui/ScrollReveal";

interface AnimatedNumberProps {
  value: string;
  inView: boolean;
  duration?: number;
}

function AnimatedNumber({ value, inView, duration = 1200 }: AnimatedNumberProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      const raf = requestAnimationFrame(() => setDisplayCount(0));
      return () => cancelAnimationFrame(raf);
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const raf = requestAnimationFrame(() => setDisplayCount(target));
      return () => cancelAnimationFrame(raf);
    }

    let startTime: number | null = null;
    let rafId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo for a swift, natural numeric roll
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);

      setDisplayCount(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setDisplayCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [inView, target, duration]);

  if (!match) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {displayCount}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.1,
    rootMargin: "20px 0px -30px 0px",
    triggerOnce: false
  });

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
    <section
      ref={ref}
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 py-10 sm:py-12"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              style={{
                transitionDuration: "1350ms",
                transitionDelay: `${idx * 160}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              className={`flex flex-col transition-all will-change-[transform,opacity] ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } ${idx === 0 ? "" : "pt-6 md:pt-0 md:pl-8 lg:pl-10"}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                  <AnimatedNumber value={stat.value} inView={inView} />
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
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
