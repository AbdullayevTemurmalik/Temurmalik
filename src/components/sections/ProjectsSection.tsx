"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizedProjects } from "@/data/localizedProjects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useTranslation } from "@/i18n/context";

export function ProjectsSection() {
  const { t, locale } = useTranslation();

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label={t.projects.label}
          title={t.projects.heading}
          subtitle={t.projects.subtitle}
        />

        <div className="space-y-10 sm:space-y-12">
          {localizedProjects.map((project, index) => (
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
