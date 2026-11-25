import React from "react";
import { notFound } from "next/navigation";
import { Locale, locales, isValidLocale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/context";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IntroPreloader } from "@/components/ui/IntroPreloader";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `try{document.documentElement.lang='${locale}';document.documentElement.dir='${locale === "ar" ? "rtl" : "ltr"}';}catch(e){}`
        }}
      />
      <I18nProvider initialLocale={locale as Locale}>
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <IntroPreloader />
          <CommandPalette />
          <Header />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
