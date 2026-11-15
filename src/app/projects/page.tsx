import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { siteConfig } from "@/config/site";
import { ArrowLeft } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: `Selected Projects — ${siteConfig.name}`,
  description: `Case studies and production systems built by ${siteConfig.fullName}: RunCode Web, Donik Coach AI, and Al Harameen Uzbekistan.`,
  alternates: {
    canonical: "/projects"
  }
};

export default function ProjectsIndexPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs font-mono text-[#8B949E] mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#E6EDF3] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#79C0A5]">Projects</span>
        </nav>

        <div className="pb-8 mb-10 border-b border-[#26313D] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <SectionHeading
              label="Engineering Case Studies"
              title="Selected projects. Real products."
              subtitle="Deep dives into backend architecture, typed APIs, responsive web interfaces, and practical AI implementations."
              className="mb-0"
            />
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#79C0A5]" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
