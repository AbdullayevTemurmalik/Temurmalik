import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Expertise />
      <ProjectsSection />
      <Approach />
      <Contact />
    </>
  );
}
