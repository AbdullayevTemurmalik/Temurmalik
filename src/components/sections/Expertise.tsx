import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertiseAreas } from "@/data/expertise";
import { techCategories } from "@/data/techStack";
import { TechBadge } from "@/components/ui/TechBadge";

export function Expertise() {
  return (
    <section id="expertise" className="py-20 sm:py-28 bg-[#0E151E]/50 border-t border-[#26313D] scroll-mt-20">
      <Container>
        <SectionHeading
          label="02 / Expertise"
          title="Technical proficiencies."
          subtitle="Specialized capabilities refined across real application deployments, architectural challenges, and client deliverables."
        />

        {/* 4 Technical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {expertiseAreas.map((area) => (
            <div
              key={area.id}
              className="group rounded-lg border border-[#26313D] bg-[#121922] p-6 sm:p-7 transition-all duration-200 hover:border-[#394858] hover:bg-[#16202C]"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#26313D]/60">
                <span className="font-mono text-xs text-[#79C0A5] font-semibold">
                  {"//"} {area.number}
                </span>
                <span className="font-mono text-xs text-[#6E7681]">Core Domain</span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#E6EDF3] tracking-tight mb-2">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#79B8FF] font-mono mb-3">
                {area.summary}
              </p>
              <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed mb-5">
                {area.description}
              </p>

              {/* Specific capabilities list */}
              <div className="space-y-1.5 pt-3 border-t border-[#26313D]/40 font-mono text-xs text-[#8B949E]">
                {area.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-2">
                    <span className="text-[#79C0A5] shrink-0 mt-0.5">›</span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Technologies used in this domain */}
              <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-[#26313D]/40">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#0E151E] text-[#8B949E] border border-[#26313D]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Tech Stack by Categories */}
        <div className="rounded-lg border border-[#26313D] bg-[#121922] p-6 sm:p-8">
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#26313D]">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E6EDF3] tracking-tight">
                Verified Technology Stack
              </h3>
              <p className="text-xs sm:text-sm text-[#8B949E] mt-1 font-mono">
                Production-tested tools, frameworks & runtimes
              </p>
            </div>
            <span className="font-mono text-xs text-[#79C0A5] hidden sm:inline-block">
              $ cat dependencies.lock
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category) => (
              <div key={category.key} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#79B8FF]" />
                  <h4 className="font-mono text-xs font-semibold text-[#E6EDF3] uppercase tracking-wider">
                    {category.title}
                  </h4>
                </div>
                <p className="text-xs text-[#8B949E] leading-normal">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.items.map((item) => (
                    <TechBadge
                      key={item.name}
                      name={item.name}
                      size="sm"
                      highlight={item.highlight}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
