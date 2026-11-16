import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";
import { getAllProjectSlugs } from "@/data/localizedProjects";

interface ProjectRedirectProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectRedirect({ params }: ProjectRedirectProps) {
  const { slug } = await params;
  redirect(`/${defaultLocale}/projects/${slug}`);
}
