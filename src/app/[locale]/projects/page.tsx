import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizedProjects } from "@/data/localizedProjects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { siteConfig } from "@/config/site";
import { ArrowLeft } from "@/components/ui/Icons";
import { Locale, locales, isValidLocale } from "@/i18n/config";
import { dictionaries } from "@/i18n/translations";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface ProjectsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) return {};

  const isUz = locale === "uz";
  const title = isUz
    ? `Tanlangan Loyihalar — ${siteConfig.name}`
    : `Selected Projects — ${siteConfig.name}`;

  const description = isUz
    ? `${siteConfig.fullName} tomonidan yaratilgan real production loyihalari va arxitektura tahlillari: RunCode Web, Donik Coach AI va Al Harameen Uzbekistan.`
    : `Case studies and production systems built by ${siteConfig.fullName}: RunCode Web, Donik Coach AI, and Al Harameen Uzbekistan.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects`
    }
  };
}

export default async function LocalizedProjectsPage({
  params
}: ProjectsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const t = dictionaries[typedLocale];

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] mb-8"
          aria-label="Breadcrumb"
        >
          <Link href={`/${typedLocale}`} className="hover:text-[var(--text-primary)] transition-colors">
            {t.projects.backHome}
          </Link>
          <span>/</span>
          <span className="text-[var(--accent-primary)]">{t.nav.projects}</span>
        </nav>

        <div className="pb-8 mb-10 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <SectionHeading
              label={t.projects.label}
              title={t.projects.allProjectsHeading}
              subtitle={t.projects.allProjectsSubtitle}
              className="mb-0"
            />
          </div>

          <Link
            href={`/${typedLocale}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>{t.projects.backHome}</span>
          </Link>
        </div>

        <div className="space-y-12">
          {localizedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={typedLocale}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
