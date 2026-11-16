"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizedProjects } from "@/data/localizedProjects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useTranslation } from "@/i18n/context";

type ProjectFilter = "all" | "fullstack" | "ai" | "backend";

export function ProjectsSection() {
  const { t, locale } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const filteredProjects = localizedProjects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fullstack") return p.id === "runcode-web";
    if (activeFilter === "ai") return p.id === "donik-coach-ai";
    if (activeFilter === "backend") return p.id === "al-harameen";
    return true;
  });

  const filters: Array<{ id: ProjectFilter; label: string; count: number }> = [
    { id: "all", label: "All Engineering", count: localizedProjects.length },
    { id: "fullstack", label: "Full-Stack", count: 1 },
    { id: "ai", label: "AI & Bots", count: 1 },
    { id: "backend", label: "Backend Architecture", count: 1 }
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label={t.projects.label}
          title={t.projects.heading}
          subtitle={t.projects.subtitle}
        />

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[var(--border-subtle)]/60 font-mono text-xs">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer flex items-center gap-2 select-none ${
                activeFilter === f.id
                  ? "bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/35 shadow-2xs"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-transparent"
              }`}
            >
              <span>{f.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === f.id
                    ? "bg-[var(--accent-primary)] text-[var(--bg-base)] font-bold"
                    : "bg-[var(--bg-surface)] text-[var(--text-muted)]"
                }`}
              >
                {f.count}
              </span>
            </button>
          ))}
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
