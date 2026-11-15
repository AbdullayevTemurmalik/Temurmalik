import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, ArrowRight } from "@/components/ui/Icons";
import { TechBadge } from "@/components/ui/TechBadge";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article
      className="group relative rounded-xl border border-[#26313D] bg-[#121922] p-6 sm:p-8 transition-all duration-300 hover:border-[#394858] hover:bg-[#16202C]/90 overflow-hidden"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Visual / Screenshot Column */}
        <div
          className={`lg:col-span-7 ${
            reverse ? "lg:col-start-6" : ""
          }`}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="block relative rounded-lg border border-[#26313D] bg-[#0E151E] overflow-hidden aspect-[16/10] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79B8FF] group/img"
            aria-label={`View case study for ${project.title}`}
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
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#79C0A5] font-semibold tracking-wider">
                {"//"} {project.number}
              </span>
              <span className="text-[#8B949E] px-2 py-0.5 rounded bg-[#16202C] border border-[#26313D]">
                {project.category}
              </span>
            </div>

            <h3
              id={`project-title-${project.id}`}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E6EDF3] group-hover:text-white transition-colors"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#79B8FF] rounded"
              >
                {project.title}
              </Link>
            </h3>

            <p className="text-xs sm:text-sm font-mono text-[#79B8FF]">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-[#8B949E] leading-relaxed">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <TechBadge key={tech} name={tech} size="sm" />
            ))}
            {project.technologies.length > 5 && (
              <span className="font-mono text-xs text-[#6E7681] px-1.5 py-0.5">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Separate Actions: Internal Case Study vs External Live Link */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#26313D]/70 font-mono text-xs">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#182330] text-[#E6EDF3] border border-[#26313D] hover:bg-[#202E3F] hover:border-[#394858] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79B8FF]"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#79C0A5]" />
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#16202C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79B8FF]"
              aria-label={`Open live site for ${project.title} in new tab`}
            >
              <span>Live Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-current opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
