import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllProjectSlugs } from "@/data/localizedProjects";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-11-16T00:00:00.000Z");
  const slugs = getAllProjectSlugs();

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0
    }
  ];

  for (const locale of locales) {
    entries.push(
      {
        url: `${baseUrl}/${locale}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 1.0
      },
      {
        url: `${baseUrl}/${locale}/projects`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9
      }
    );

    for (const slug of slugs) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8
      });
    }
  }

  return entries;
}
