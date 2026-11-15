import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label="03 / Selected Work"
          title="Selected projects. Real products."
          subtitle="Three core production systems demonstrating backend engineering, full-stack architectures, and practical AI integrations."
        />

        <div className="space-y-10 sm:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
