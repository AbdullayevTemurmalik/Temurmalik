import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllProjectSlugs } from "@/data/localizedProjects";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-11-25T00:00:00.000Z");
  const slugs = getAllProjectSlugs();

  // Root alternates mapping
  const rootLanguages: Record<string, string> = {
    "x-default": `${baseUrl}/en`
  };
  for (const loc of locales) {
    rootLanguages[loc] = `${baseUrl}/${loc}`;
  }

  // Projects archive alternates mapping
  const projectsArchiveLanguages: Record<string, string> = {
    "x-default": `${baseUrl}/en/projects`
  };
  for (const loc of locales) {
    projectsArchiveLanguages[loc] = `${baseUrl}/${loc}/projects`;
  }

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: rootLanguages
      }
    }
  ];

  for (const locale of locales) {
    entries.push(
      {
        url: `${baseUrl}/${locale}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 1.0,
        alternates: {
          languages: rootLanguages
        }
      },
      {
        url: `${baseUrl}/${locale}/projects`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: projectsArchiveLanguages
        }
      }
    );

    for (const slug of slugs) {
      const slugLanguages: Record<string, string> = {
        "x-default": `${baseUrl}/en/projects/${slug}`
      };
      for (const loc of locales) {
        slugLanguages[loc] = `${baseUrl}/${loc}/projects/${slug}`;
      }

      entries.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: slugLanguages
        }
      });
    }
  }

  return entries;
}
