import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { TechBadge } from "@/components/ui/TechBadge";
import { ArrowUpRight, ArrowLeft, ArrowRight, GitHubIcon } from "@/components/ui/Icons";

interface ProjectDetailViewProps {
  project: Project;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  // Compute previous and next project
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <article className="py-12 sm:py-16">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-mono text-[#8B949E] mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#E6EDF3] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[#E6EDF3] transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-[#79C0A5]">{project.title}</span>
        </nav>

        {/* Project Header */}
        <div className="pb-10 border-b border-[#26313D] space-y-4">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[#79C0A5] font-semibold">{"//"} {project.number}</span>
            <span className="text-[#8B949E] px-2.5 py-0.5 rounded bg-[#16202C] border border-[#26313D]">
              {project.category}
            </span>
            <span className="text-[#79B8FF] px-2 py-0.5 rounded bg-[#16202C] border border-[#26313D]">
              Status: {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#E6EDF3]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#8B949E] font-medium max-w-3xl">
            {project.tagline}
          </p>

          {/* Actions & Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-4 font-mono text-xs">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#E6EDF3] text-[#0B0F14] font-semibold hover:bg-white transition-colors"
            >
              <span>Live Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B0F14]" />
            </a>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#16202C] text-[#E6EDF3] border border-[#26313D] hover:bg-[#1E2B3A] hover:border-[#394858] transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#16202C] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all projects</span>
            </Link>
          </div>
        </div>

        {/* Visual Showcase Banner */}
        <div className="my-10 rounded-xl border border-[#26313D] bg-[#0E151E] overflow-hidden shadow-2xl">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            width={1200}
            height={750}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Main Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-6">
          {/* Main Story & Technical Deep Dive */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#E6EDF3] tracking-tight">
                Project Overview
              </h2>
              {project.detailedDescription.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
                  {p}
                </p>
              ))}
            </section>

            {/* Problem & Goal */}
            <section className="space-y-4 pt-4 border-t border-[#26313D]/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#E6EDF3] tracking-tight">
                Problem &amp; Engineering Goals
              </h2>
              <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
                {project.problemAndGoal}
              </p>
            </section>

            {/* Solution & Implementation */}
            <section className="space-y-4 pt-4 border-t border-[#26313D]/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#E6EDF3] tracking-tight">
                Solution &amp; Implementation
              </h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#8B949E]">
                {project.solutionAndArchitecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#79C0A5] font-mono shrink-0 mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Shipped Features */}
            <section className="space-y-4 pt-4 border-t border-[#26313D]/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#E6EDF3] tracking-tight">
                Verified Production Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.verifiedFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg border border-[#26313D] bg-[#121922] text-xs sm:text-sm text-[#E6EDF3] flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#79C0A5] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Decisions */}
            {project.technicalDecisions.length > 0 && (
              <section className="space-y-4 pt-4 border-t border-[#26313D]/60">
                <h2 className="text-xl sm:text-2xl font-bold text-[#E6EDF3] tracking-tight">
                  Key Technical Decisions
                </h2>
                <div className="space-y-4">
                  {project.technicalDecisions.map((decision) => (
                    <div
                      key={decision.title}
                      className="p-5 rounded-lg border border-[#26313D] bg-[#121922] space-y-1.5"
                    >
                      <h3 className="font-mono text-sm font-semibold text-[#79B8FF]">
                        {decision.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
                        {decision.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Technical Sidebar */}
          <aside className="lg:col-span-4 rounded-xl border border-[#26313D] bg-[#121922] p-6 space-y-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between pb-4 border-b border-[#26313D] font-mono text-xs">
              <span className="text-[#79C0A5] font-semibold">{"//"} Specifications</span>
              <span className="text-[#6E7681]">Index</span>
            </div>

            {/* Metadata pairs */}
            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-[#8B949E] block mb-1">My Role</span>
                <span className="text-[#E6EDF3] font-medium">{project.role}</span>
              </div>
              <div className="pt-3 border-t border-[#26313D]/60">
                <span className="text-[#8B949E] block mb-1">Timeline</span>
                <span className="text-[#E6EDF3]">{project.timeline}</span>
              </div>
              <div className="pt-3 border-t border-[#26313D]/60">
                <span className="text-[#8B949E] block mb-1">Category</span>
                <span className="text-[#E6EDF3]">{project.category}</span>
              </div>
              <div className="pt-3 border-t border-[#26313D]/60">
                <span className="text-[#8B949E] block mb-1">Live Endpoint</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#79B8FF] hover:underline break-all inline-flex items-center gap-1"
                >
                  <span>{project.liveUrl}</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>

            {/* Tech Stack in Detail */}
            <div className="pt-4 border-t border-[#26313D]">
              <span className="text-xs font-mono text-[#8B949E] block mb-2.5">
                Technologies &amp; Libraries
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} size="sm" />
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#E6EDF3] text-[#0B0F14] font-mono text-xs font-semibold hover:bg-white transition-colors"
              >
                <span>Visit Live System</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>
        </div>

        {/* Previous / Next Project Navigation */}
        <div className="mt-16 pt-10 border-t border-[#26313D] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group p-4 rounded-lg border border-[#26313D] bg-[#121922] hover:border-[#394858] hover:bg-[#16202C] transition-all flex flex-col items-start gap-1"
          >
            <span className="text-[#8B949E] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5 text-[#79C0A5]" />
              <span>Previous Project</span>
            </span>
            <span className="text-sm font-semibold text-[#E6EDF3] group-hover:text-white">
              {prevProject.title}
            </span>
            <span className="text-[11px] text-[#79B8FF]">{prevProject.category}</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group p-4 rounded-lg border border-[#26313D] bg-[#121922] hover:border-[#394858] hover:bg-[#16202C] transition-all flex flex-col items-end gap-1 text-right"
          >
            <span className="text-[#8B949E] flex items-center gap-1">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#79C0A5]" />
            </span>
            <span className="text-sm font-semibold text-[#E6EDF3] group-hover:text-white">
              {nextProject.title}
            </span>
            <span className="text-[11px] text-[#79B8FF]">{nextProject.category}</span>
          </Link>
        </div>
      </Container>
    </article>
  );
}
