"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LocalizedProject, localizedProjects } from "@/data/localizedProjects";
import { Container } from "@/components/ui/Container";
import { TechBadge } from "@/components/ui/TechBadge";
import { ArrowUpRight, ArrowLeft, ArrowRight, GitHubIcon } from "@/components/ui/Icons";
import { useTranslation } from "@/i18n/context";

interface ProjectDetailViewProps {
  project: LocalizedProject;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const { t, locale } = useTranslation();
  const content = project.translations[locale] || project.translations.en;

  // Compute previous and next project
  const currentIndex = localizedProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0
      ? localizedProjects[currentIndex - 1]
      : localizedProjects[localizedProjects.length - 1];
  const nextProject =
    currentIndex < localizedProjects.length - 1
      ? localizedProjects[currentIndex + 1]
      : localizedProjects[0];

  const prevContent = prevProject.translations[locale] || prevProject.translations.en;
  const nextContent = nextProject.translations[locale] || nextProject.translations.en;

  return (
    <article className="pt-[15px] md:pt-[20px] lg:pt-[40px] pb-16 sm:pb-24">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] mb-8"
          aria-label="Breadcrumb"
        >
          <Link href={`/${locale}`} className="hover:text-[var(--text-primary)] transition-colors">
            {t.projects.backHome}
          </Link>
          <span>/</span>
          <Link href={`/${locale}/projects`} className="hover:text-[var(--text-primary)] transition-colors">
            {t.nav.projects}
          </Link>
          <span>/</span>
          <span className="text-[var(--accent-primary)]">{content.title}</span>
        </nav>

        {/* Project Header */}
        <div className="pb-10 border-b border-[var(--border-subtle)] space-y-4">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[var(--accent-primary)] font-semibold">
              {"//"} {project.number} · {project.year}
            </span>
            <span className="text-[var(--text-secondary)] px-2.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              {content.category}
            </span>
            <span className="text-[var(--accent-secondary)] px-2.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              {content.statusText}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {content.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-medium max-w-3xl">
            {content.tagline}
          </p>

          {/* Actions & Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-4 font-mono text-xs">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--text-primary)] text-[var(--bg-base)] font-semibold hover:opacity-90 transition-all shadow-xs"
            >
              <span>{t.projects.liveProject}</span>
              <ArrowUpRight className="w-4 h-4 text-current" />
            </a>

            {project.secondaryLiveUrl && (
              <a
                href={project.secondaryLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-hover)] transition-colors"
              >
                <span>Telegram Bot</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent-secondary)]" />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-hover)] transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>{t.projects.sourceCode}</span>
              </a>
            )}

            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.projects.backToProjects}</span>
            </Link>
          </div>
        </div>

        {/* Visual Showcase Banner */}
        <div className="my-10 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] overflow-hidden shadow-2xl">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            width={1200}
            height={750}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-y border-[var(--border-subtle)] font-mono text-xs">
          <div>
            <span className="text-[var(--text-muted)] block uppercase tracking-wider mb-1">
              {t.projects.roleLabel}
            </span>
            <span className="text-[var(--text-primary)] font-medium">
              {content.role}
            </span>
          </div>

          <div>
            <span className="text-[var(--text-muted)] block uppercase tracking-wider mb-1">
              {t.projects.timelineLabel}
            </span>
            <span className="text-[var(--text-primary)] font-medium">
              {project.year}
            </span>
          </div>

          <div>
            <span className="text-[var(--text-muted)] block uppercase tracking-wider mb-1">
              {t.projects.categoryLabel}
            </span>
            <span className="text-[var(--text-primary)] font-medium">
              {content.category}
            </span>
          </div>

          <div>
            <span className="text-[var(--text-muted)] block uppercase tracking-wider mb-1">
              {t.projects.liveEndpointLabel}
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] hover:underline truncate block"
            >
              {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
            </a>
          </div>
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Columns */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                {t.projects.overviewTitle}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {content.detailedDescription.map((par, i) => (
                  <p key={i}>{par}</p>
                ))}
              </div>
            </section>

            {/* Problem & Goal */}
            <section className="space-y-4 pt-8 border-t border-[var(--border-subtle)]/60">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                {t.projects.problemTitle}
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {content.problemAndGoal}
              </p>
            </section>

            {/* Solution & Architecture */}
            <section className="space-y-4 pt-8 border-t border-[var(--border-subtle)]/60">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                {t.projects.solutionTitle}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {content.solutionAndArchitecture.map((par, i) => (
                  <p key={i}>{par}</p>
                ))}
              </div>
            </section>

            {/* Verified Key Features */}
            <section className="space-y-4 pt-8 border-t border-[var(--border-subtle)]/60">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                {t.projects.featuresTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                {content.verifiedFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] flex items-start gap-2.5"
                  >
                    <span className="text-[var(--accent-primary)] font-bold">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Decisions */}
            <section className="space-y-4 pt-8 border-t border-[var(--border-subtle)]/60">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                {t.projects.decisionsTitle}
              </h2>
              <div className="space-y-4">
                {content.technicalDecisions.map((dec, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2"
                  >
                    <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                      {dec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {dec.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Tech Stack & System Attributes */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 space-y-5">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] pb-3 border-b border-[var(--border-subtle)]">
                {t.projects.techUsedLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[var(--text-primary)] text-[var(--bg-base)] font-mono text-xs font-semibold hover:opacity-90 transition-colors"
                >
                  <span>{t.projects.visitLiveBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Key Verified Results */}
            <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 space-y-4 font-mono text-xs">
              <h3 className="font-semibold uppercase tracking-wider text-[var(--accent-primary)] pb-2 border-b border-[var(--border-subtle)]">
                {"//"} Verified System Notes
              </h3>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                {content.verifiedHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--accent-secondary)]">›</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Links */}
        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs sm:text-sm">
          <Link
            href={`/${locale}/projects/${prevProject.slug}`}
            className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--accent-primary)] group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="block text-[11px] text-[var(--text-muted)]">{t.projects.prevProject}</span>
              <span className="font-semibold">{prevContent.title}</span>
            </div>
          </Link>

          <Link
            href={`/${locale}/projects/${nextProject.slug}`}
            className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-right"
          >
            <div className="text-right">
              <span className="block text-[11px] text-[var(--text-muted)]">{t.projects.nextProject}</span>
              <span className="font-semibold">{nextContent.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </article>
  );
}
