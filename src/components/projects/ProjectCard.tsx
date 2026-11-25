"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { LocalizedProject } from "@/data/localizedProjects";
import { Locale } from "@/i18n/config";
import { useTranslation } from "@/i18n/context";
import { ArrowUpRight, ArrowRight } from "@/components/ui/Icons";
import { TechBadge } from "@/components/ui/TechBadge";
import { useInView } from "@/components/ui/ScrollReveal";

interface ProjectCardProps {
  project: LocalizedProject;
  locale?: Locale;
  reverse?: boolean;
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const { t, locale: currentLocale } = useTranslation();
  const content = project.translations[currentLocale] || project.translations.en;

  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -70px 0px",
    triggerOnce: true
  });

  // Update CSS variables directly to guarantee zero React re-renders on hover
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        transitionDuration: "1000ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
      }}
      className={`group relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] surface-card p-6 sm:p-8 transition-[transform,opacity,border-color,background-color] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] overflow-hidden ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0 spotlight-radial"
        aria-hidden="true"
      />

      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Visual / Screenshot Column */}
        <div
          style={{
            transitionDuration: "1050ms",
            transitionDelay: "120ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
          }}
          className={`lg:col-span-7 transition-[transform,opacity] ${
            reverse ? "lg:col-start-6" : ""
          } ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-7 scale-[0.96]"
          }`}
        >
          <Link
            href={`/${currentLocale}/projects/${project.slug}`}
            className="block relative rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] overflow-hidden aspect-[16/10] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] group/img shadow-xs"
            aria-label={`${t.projects.viewCaseStudy} — ${content.title}`}
          >
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              width={1200}
              height={750}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.025]"
              priority={project.number === "01"}
            />

            {/* Subtle edge inner ring */}
            <div
              className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 rounded-lg pointer-events-none"
              aria-hidden="true"
            />

            {/* Discreet corner action pill visible on desktop pointer hover */}
            <div
              className="pointer-events-none absolute bottom-3 end-3 hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-hover)] bg-[var(--bg-base)]/90 backdrop-blur-md text-[11px] font-mono font-medium text-[var(--text-primary)] opacity-0 translate-y-1.5 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-[opacity,transform] duration-200 shadow-lg"
              aria-hidden="true"
            >
              <span>{t.projects.viewCaseStudy}</span>
              <ArrowRight className="w-3 h-3 text-[var(--accent-primary)]" />
            </div>
          </Link>
        </div>

        {/* Content Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between space-y-5 ${
            reverse ? "lg:col-start-1" : ""
          }`}
        >
          {/* Header Metadata */}
          <div
            style={{
              transitionDuration: "950ms",
              transitionDelay: "220ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}
            className={`space-y-2 transition-[transform,opacity] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[var(--accent-primary)] font-semibold tracking-wider tabular-nums">
                {"//"} {project.number} · {project.year}
              </span>
              <span className="text-[var(--text-secondary)] px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)] truncate max-w-[65%]">
                {content.category}
              </span>
            </div>

            <h3
              id={`project-title-${project.id}`}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors"
            >
              <Link
                href={`/${currentLocale}/projects/${project.slug}`}
                className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-secondary)] rounded"
              >
                {content.title}
              </Link>
            </h3>

            <p className="text-xs sm:text-sm font-mono text-[var(--accent-secondary)]">
              {content.tagline}
            </p>
          </div>

          {/* Description */}
          <p
            style={{
              transitionDuration: "950ms",
              transitionDelay: "320ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}
            className={`text-sm text-[var(--text-secondary)] leading-relaxed transition-[transform,opacity] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {content.description}
          </p>

          {/* Tech Badges */}
          <div
            style={{
              transitionDuration: "950ms",
              transitionDelay: "420ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}
            className={`flex flex-wrap items-center gap-1.5 pt-1 transition-[transform,opacity] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {project.technologies.slice(0, 5).map((tech) => (
              <TechBadge key={tech} name={tech} size="sm" />
            ))}
            {project.technologies.length > 5 && (
              <span className="font-mono text-xs text-[var(--text-muted)] px-1.5 py-0.5 tabular-nums">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Separate Actions: Internal Case Study vs External Live Link */}
          <div
            style={{
              transitionDuration: "950ms",
              transitionDelay: "520ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}
            className={`flex flex-wrap items-center gap-3 pt-3 border-t border-[var(--border-subtle)] font-mono text-xs transition-[transform,opacity] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href={`/${currentLocale}/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] shadow-2xs"
            >
              <span>{t.projects.viewCaseStudy}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-base)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
              aria-label={`${t.projects.liveProject}: ${content.title}`}
            >
              <span>{t.projects.liveProject}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-current opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
