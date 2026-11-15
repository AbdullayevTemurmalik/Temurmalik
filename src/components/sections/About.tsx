import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <Container>
        <SectionHeading
          label="01 / About"
          title="Engineering with purpose."
          subtitle="Focused on resilient backend systems, scalable REST APIs, and practical AI implementations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#8B949E] leading-relaxed">
            <p>
              I&apos;m <span className="text-[#E6EDF3] font-medium">{siteConfig.fullName}</span>, a 17-year-old software developer from Uzbekistan. For the past three years, I have immersed myself in backend architectures, database modeling, and modern web application development.
            </p>
            <p>
              Rather than chasing ephemeral front-end trends, my engineering mindset is grounded in fundamental server reliability: designing predictable API contracts, managing schema migrations with PostgreSQL and Prisma, implementing bulletproof validation with Zod, and securing session state.
            </p>
            <p>
              When developing user-facing products, I pair robust Node.js and TypeScript backends with fast, accessible React and Next.js interfaces. My recent engineering work also centers on practical artificial intelligence: incorporating Google Gemini models into developer education platforms and Telegram automation tools where AI solves tangible user bottlenecks.
            </p>
          </div>

          {/* Quick Technical Specs / Profile Summary Card */}
          <div className="lg:col-span-5 rounded-lg border border-[#26313D] bg-[#121922] p-6 space-y-4 font-mono text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#26313D] text-[#E6EDF3]">
              <span className="text-[#79C0A5] font-semibold">{"//"} Profile Spec</span>
              <span className="text-[#6E7681]">v3.2</span>
            </div>

            <div className="space-y-3 divide-y divide-[#26313D]/60 text-xs">
              <div className="flex justify-between py-1.5">
                <span className="text-[#8B949E]">Location</span>
                <span className="text-[#E6EDF3]">{siteConfig.location}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[#8B949E]">Age</span>
                <span className="text-[#E6EDF3]">{siteConfig.age} years old</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[#8B949E]">Experience</span>
                <span className="text-[#79C0A5]">3+ years continuous</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[#8B949E]">Primary Stacks</span>
                <span className="text-[#E6EDF3]">Node.js · TS · React · SQL</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[#8B949E]">Specialization</span>
                <span className="text-[#79B8FF]">Backend & AI Engineering</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-[#8B949E]">Status</span>
                <span className="text-[#79C0A5] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#79C0A5]" />
                  Available for contracts
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
