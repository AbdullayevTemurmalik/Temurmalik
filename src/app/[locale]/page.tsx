import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isValidLocale } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const isUz = locale === "uz";
  const title = isUz
    ? `${siteConfig.name} — Full-Stack Dasturchi | Backend va AI`
    : `${siteConfig.name} — ${siteConfig.title} | ${siteConfig.specialization}`;

  const description = isUz
    ? `${siteConfig.fullName} — Full-Stack Dasturchi, Backend va AI Muhandisligiga ixtisoslashgan. Ishonchli backend tizimlari, zamonaviy veb-ilovalar va AI agentlari yaratish bo'yicha 3+ yillik tajriba.`
    : `${siteConfig.fullName} — ${siteConfig.title}, ${siteConfig.specialization}. Building reliable backend systems, web applications, and AI integrations in ${siteConfig.location}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`
    },
    openGraph: {
      type: "website",
      locale: isUz ? "uz_UZ" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.title}`
        }
      ]
    }
  };
}

export default async function LocalizedHomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Expertise />
      <TechStack />
      <ProjectsSection />
      <Approach />
      <Contact />
    </>
  );
}
