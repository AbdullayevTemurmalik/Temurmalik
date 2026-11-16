import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  localizedProjects,
  getLocalizedProject,
  getAllProjectSlugs
} from "@/data/localizedProjects";
import { siteConfig } from "@/config/site";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { Locale, locales, isValidLocale } from "@/i18n/config";

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) return {};

  const typedLocale = locale as Locale;
  const projectData = getLocalizedProject(slug, typedLocale);

  if (!projectData) {
    return {
      title: "Project Not Found"
    };
  }

  const { content } = projectData;
  const title = `${content.title} — ${siteConfig.name}`;
  const description = `${content.tagline}. ${content.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteConfig.url}/${locale}/projects/${slug}`,
      images: [
        {
          url: projectData.imageSrc,
          width: 1200,
          height: 750,
          alt: projectData.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [projectData.imageSrc]
    }
  };
}

export default async function LocalizedProjectDetailPage({
  params
}: ProjectPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const project = localizedProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
