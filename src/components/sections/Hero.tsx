import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Terminal } from "./Terminal";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#79C0A5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[#79B8FF]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Availability Indicator */}
            {siteConfig.isAvailableForWork && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#26313D] bg-[#121922] text-xs font-mono text-[#8B949E]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#79C0A5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#79C0A5]" />
                </span>
                <span>{siteConfig.availabilityText}</span>
              </div>
            )}

            {/* Intro & Main Headings */}
            <div className="space-y-2">
              <p className="font-mono text-sm sm:text-base text-[#79C0A5] font-medium">
                Hey, I&apos;m {siteConfig.name}.
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E6EDF3] leading-[1.1]">
                Full-Stack Developer.
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#8B949E] tracking-tight">
                {siteConfig.specialization}.
              </p>
            </div>

            {/* Short Credible Description */}
            <p className="text-base sm:text-lg text-[#8B949E] max-w-xl leading-relaxed">
              {siteConfig.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="#projects" variant="primary" size="lg">
                Explore Projects
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Small Code-Like Metadata */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#6E7681]">
              <span>{siteConfig.heroFocusTags.join(" · ")}</span>
            </div>
          </div>

          {/* Right Column: Terminal Panel */}
          <div className="lg:col-span-5 w-full">
            <Terminal />
          </div>
        </div>
      </Container>
    </section>
  );
}
