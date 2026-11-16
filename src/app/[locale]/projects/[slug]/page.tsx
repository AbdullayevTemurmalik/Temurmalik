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
  const baseUrl = siteConfig.url;
  const title = `${content.title} — ${siteConfig.name}`;
  const description = `${content.tagline}. ${content.description}`;

  const languageAlternates: Record<string, string> = {
    "x-default": `${baseUrl}/en/projects/${slug}`
  };
  for (const loc of locales) {
    languageAlternates[loc] = `${baseUrl}/${loc}/projects/${slug}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/projects/${slug}`,
      languages: languageAlternates
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/${locale}/projects/${slug}`,
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

  const projectData = getLocalizedProject(slug, locale as Locale);
  const baseUrl = siteConfig.url;

  // Structured Data (Breadcrumbs + SoftwareApplication / CreativeWork)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/${locale}`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${baseUrl}/${locale}#projects`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: projectData?.content.title || project.slug,
        item: `${baseUrl}/${locale}/projects/${slug}`
      }
    ]
  };

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: projectData?.content.title || project.slug,
    description: projectData?.content.description,
    applicationCategory: projectData?.content.category,
    operatingSystem: "Web / Cross-platform",
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url
    },
    url: project.liveUrl
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailView project={project} />
    </>
  );
}
