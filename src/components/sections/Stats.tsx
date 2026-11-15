import React from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Stats() {
  const stats = [
    {
      value: siteConfig.experienceYears,
      label: "Years of Experience",
      meta: "Uptime & production shipping"
    },
    {
      value: siteConfig.projectsCount,
      label: "Projects Completed",
      meta: "Web apps, backends & bots"
    },
    {
      value: siteConfig.clientsCount,
      label: "Real Clients",
      meta: "Businesses & product founders"
    }
  ];

  return (
    <section className="border-y border-[#26313D] bg-[#0E151E]/80 py-10 sm:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#26313D]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col ${
                idx === 0 ? "" : "pt-6 md:pt-0 md:pl-8 lg:pl-10"
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EDF3]">
                  {stat.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#79C0A5]" />
              </div>
              <p className="mt-2 text-sm sm:text-base font-medium text-[#E6EDF3]">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs font-mono text-[#8B949E]">
                {stat.meta}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
