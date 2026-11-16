"use client";

import React from "react";
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
  // triggerOnce: true ensures cards stay stably rendered once visible without layout lag
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.05,
    rootMargin: "50px 0px -20px 0px",
    triggerOnce: true
  });

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className={`group relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] overflow-hidden shadow-xs ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Subtle dynamic mouse spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 ease-out z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(120, 199, 173, 0.075), transparent 75%)`
        }}
        aria-hidden="true"
      />
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Visual / Screenshot Column */}
        <div
          style={{
            transitionDuration: "500ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          }}
          className={`lg:col-span-7 transition-all ${
            reverse ? "lg:col-start-6" : ""
          } ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-[0.99]"
          }`}
        >
          <Link
            href={`/${currentLocale}/projects/${project.slug}`}
            className="block relative rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] overflow-hidden aspect-[16/10] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] group/img"
            aria-label={`${t.projects.viewCaseStudy} — ${content.title}`}
          >
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              width={1200}
              height={750}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
              priority={project.number === "01"}
            />
            {/* Subtle overlay border */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-lg pointer-events-none" />
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
              transitionDuration: "500ms",
              transitionDelay: "60ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`space-y-2 transition-all ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--accent-primary)] font-semibold tracking-wider">
                {"//"} {project.number} · {project.year}
              </span>
              <span className="text-[var(--text-secondary)] px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-subtle)]">
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
              transitionDuration: "500ms",
              transitionDelay: "120ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`text-sm text-[var(--text-secondary)] leading-relaxed transition-all ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {content.description}
          </p>

          {/* Tech Badges */}
          <div
            style={{
              transitionDuration: "500ms",
              transitionDelay: "180ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`flex flex-wrap gap-1.5 pt-1 transition-all ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {project.technologies.slice(0, 5).map((tech) => (
              <TechBadge key={tech} name={tech} size="sm" />
            ))}
            {project.technologies.length > 5 && (
              <span className="font-mono text-xs text-[var(--text-muted)] px-1.5 py-0.5">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Separate Actions: Internal Case Study vs External Live Link */}
          <div
            style={{
              transitionDuration: "500ms",
              transitionDelay: "240ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className={`flex flex-wrap items-center gap-3 pt-3 border-t border-[var(--border-subtle)] font-mono text-xs transition-all ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
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
