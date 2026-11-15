import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export function Approach() {
  return (
    <section id="approach" className="py-20 sm:py-28 bg-[#0E151E]/60 border-t border-[#26313D] scroll-mt-20">
      <Container>
        <SectionHeading
          label="04 / Approach"
          title="Disciplined engineering rhythm."
          subtitle="A methodical workflow from problem definition to hardened production deployment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.approach.map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-[#26313D] bg-[#121922] p-6 sm:p-7 relative flex flex-col justify-between transition-colors hover:border-[#394858]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#26313D]/60 font-mono text-xs">
                  <span className="text-[#79C0A5] font-semibold">
                    {"//"} Phase {item.step}
                  </span>
                  <span className="text-[#6E7681]">Stage</span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[#E6EDF3] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#26313D]/40 font-mono text-xs text-[#6E7681]">
                <span>Verified methodology</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
