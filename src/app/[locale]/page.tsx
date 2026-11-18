import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, locales, isValidLocale } from "@/i18n/config";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { TechMarquee } from "@/components/ui/TechMarquee";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const localizedMeta: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: "Temurmalik Abdullayev | Full-Stack, Backend & AI Developer",
    description:
      "Temurmalik Abdullayev is a Full-Stack Developer from Uzbekistan focused on Backend & AI Engineering. Explore RunCode Web, Donik Coach AI, Al Harameen and more.",
    ogLocale: "en_US"
  },
  uz: {
    title: "Temurmalik Abdullayev | Full-Stack va Backend Dasturchi",
    description:
      "Temurmalik Abdullayev — O‘zbekistondagi Full-Stack dasturchi. Backend tizimlari, AI integratsiyalari va zamonaviy veb-ilovalar yaratadi. Real loyihalarini ko‘ring.",
    ogLocale: "uz_UZ"
  },
  ru: {
    title: "Темурмалик Абдуллаев | Full-Stack, Backend и AI разработчик",
    description:
      "Темурмалик Абдуллаев — разработчик из Узбекистана, специализирующийся на бэкенде, веб-платформах и AI-интеграциях. Изучите проекты RunCode Web, Donik Coach AI, Al Harameen.",
    ogLocale: "ru_RU"
  },
  zh: {
    title: "Temurmalik Abdullayev | 全栈、后端与人工智能工程师",
    description:
      "Temurmalik Abdullayev 来自乌兹别克斯坦的全栈开发者，专注高可用后端架构与人工智能工程落地。查看 RunCode Web、Donik Coach AI 等实战项目。",
    ogLocale: "zh_CN"
  },
  es: {
    title: "Temurmalik Abdullayev | Desarrollador Full-Stack, Backend e IA",
    description:
      "Temurmalik Abdullayev es un desarrollador Full-Stack de Uzbekistán especializado en backend e integraciones de IA. Conoce RunCode Web, Donik Coach AI y Al Harameen.",
    ogLocale: "es_ES"
  },
  fr: {
    title: "Temurmalik Abdullayev | Développeur Full-Stack, Backend & IA",
    description:
      "Temurmalik Abdullayev est un développeur Full-Stack d'Ouzbékistan spécialisé en architecture backend et IA. Découvrez RunCode Web, Donik Coach AI et Al Harameen.",
    ogLocale: "fr_FR"
  },
  ja: {
    title: "Temurmalik Abdullayev | フルスタック・バックエンド＆AIエンジニア",
    description:
      "ウズベキスタン出身のフルスタックエンジニア、テムルマリク・アブドゥラエフ。堅牢なバックエンド、モダンWeb、AIモデル連携を専門としています。",
    ogLocale: "ja_JP"
  },
  de: {
    title: "Temurmalik Abdullayev | Full-Stack-, Backend- & KI-Entwickler",
    description:
      "Temurmalik Abdullayev ist ein Full-Stack-Entwickler aus Usbekistan mit Fokus auf Backend-Architektur und KI-Integrationen. Entdecken Sie RunCode Web, Donik Coach AI und Al Harameen.",
    ogLocale: "de_DE"
  },
  it: {
    title: "Temurmalik Abdullayev | Sviluppatore Full-Stack, Backend e IA",
    description:
      "Temurmalik Abdullayev è uno sviluppatore Full-Stack dell'Uzbekistan focalizzato su ingegneria backend e integrazione di IA. Scopri RunCode Web, Donik Coach AI e Al Harameen.",
    ogLocale: "it_IT"
  },
  tr: {
    title: "Temurmalik Abdullayev | Full-Stack, Arka Uç ve Yapay Zeka Geliştiricisi",
    description:
      "Temurmalik Abdullayev, Özbekistan merkezli Full-Stack geliştirici. Güvenilir arka uç sistemleri, modern web platformları ve yapay zeka entegrasyonları inşa eder.",
    ogLocale: "tr_TR"
  },
  ar: {
    title: "تيمور مالك عبد الله ييف | مطور Full-Stack، مهندس بنية خلفية وذكاء اصطناعي",
    description:
      "تيمور مالك عبد الله ييف، مطور Full-Stack من أوزبكستان متخصص في البنى الخلفية وتطبيقات الذكاء الاصطناعي. استكشف RunCode Web و Donik Coach AI والمزيد.",
    ogLocale: "ar_AR"
  }
};

export async function generateMetadata({
  params
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const meta = localizedMeta[locale as Locale] || localizedMeta.en;
  const baseUrl = siteConfig.url;

  // Generate complete hreflang language alternates
  const languageAlternates: Record<string, string> = {
    "x-default": `${baseUrl}/en`
  };
  for (const loc of locales) {
    languageAlternates[loc] = `${baseUrl}/${loc}`;
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: languageAlternates
    },
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      url: `${baseUrl}/${locale}`,
      siteName: siteConfig.name,
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.title}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/og-image.png"]
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
      <TechMarquee
        items={[
          "Backend Developer",
          "Full-Stack Developer",
          "Frontend Developer",
          "AI Engineer",
          "Software Engineer"
        ]}
        direction="left"
      />
      <About />
      <Expertise />
      <TechMarquee
        items={[
          "Node.js",
          "React.js",
          "Next.js",
          "Vue.js",
          "Python",
          "JavaScript"
        ]}
        direction="right"
      />
      <TechStack />
      <ProjectsSection />
      <Approach />
      <Contact />
    </>
  );
}
