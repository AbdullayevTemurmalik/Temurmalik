"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizedProjects } from "@/data/localizedProjects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useTranslation } from "@/i18n/context";
import { Locale } from "@/i18n/config";

type ProjectFilter = "all" | "fullstack" | "ai" | "backend";

const localizedFilterLabels: Record<Locale, Record<ProjectFilter, string>> = {
  en: { all: "All Engineering", fullstack: "Full-Stack", ai: "AI & Bots", backend: "Backend Architecture" },
  uz: { all: "Barchasi", fullstack: "Full-Stack", ai: "AI va Botlar", backend: "Backend Arxitektura" },
  ru: { all: "Все проекты", fullstack: "Full-Stack", ai: "AI и Боты", backend: "Бэкенд-архитектура" },
  zh: { all: "全部工程", fullstack: "全栈应用", ai: "AI 与机器人", backend: "后端架构" },
  es: { all: "Todos", fullstack: "Full-Stack", ai: "IA y Bots", backend: "Arquitectura Backend" },
  fr: { all: "Tout", fullstack: "Full-Stack", ai: "IA & Bots", backend: "Architecture Backend" },
  ja: { all: "すべて", fullstack: "フルスタック", ai: "AI・Bot", backend: "バックエンド設計" },
  de: { all: "Alle Systeme", fullstack: "Full-Stack", ai: "KI & Bots", backend: "Backend-Architektur" },
  it: { all: "Tutti", fullstack: "Full-Stack", ai: "IA & Bot", backend: "Architettura Backend" },
  tr: { all: "Tümü", fullstack: "Full-Stack", ai: "YZ & Botlar", backend: "Backend Mimarisi" },
  ar: { all: "جميع المشاريع", fullstack: "تطوير متكامل", ai: "الذكاء الاصطناعي والبوتات", backend: "هندسة الخوادم" }
};

export function ProjectsSection() {
  const { t, locale } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const filteredProjects = localizedProjects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fullstack") return p.id === "runcode-web" || p.id === "jobify";
    if (activeFilter === "ai") return p.id === "donik-coach-ai";
    if (activeFilter === "backend") return p.id === "jobify" || p.id === "al-harameen";
    return true;
  });

  const labels = localizedFilterLabels[locale] || localizedFilterLabels.en;

  const filters: Array<{ id: ProjectFilter; label: string; count: number }> = [
    { id: "all", label: labels.all, count: localizedProjects.length },
    { id: "fullstack", label: labels.fullstack, count: 2 },
    { id: "ai", label: labels.ai, count: 1 },
    { id: "backend", label: labels.backend, count: 2 }
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label={t.projects.label}
          title={t.projects.heading}
          subtitle={t.projects.subtitle}
        />

        {/* Interactive Filter Pills with native aria-pressed state */}
        <div
          role="group"
          aria-label="Filter projects by engineering domain"
          className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-[var(--border-subtle)]/60 font-mono text-xs"
        >
          {filters.map((f) => {
            const isPressed = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isPressed}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 rounded-md transition-[color,background-color,border-color,box-shadow] duration-150 cursor-pointer flex items-center gap-2 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)] ${
                  isPressed
                    ? "bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/35 shadow-2xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-transparent"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full tabular-nums ${
                    isPressed
                      ? "bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold"
                      : "bg-[var(--bg-surface)] text-[var(--text-muted)]"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards List */}
        <div className="space-y-10 sm:space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
