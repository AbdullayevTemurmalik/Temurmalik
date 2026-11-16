import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" }
  ],
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description: `${siteConfig.fullName} — ${siteConfig.title}, ${siteConfig.specialization}. Building reliable backend systems, web applications, and AI integrations in ${siteConfig.location}.`,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  keywords: [
    "Temurmalik",
    "Temurmalik Abdullayev",
    "Full-Stack Developer",
    "Backend Engineer",
    "AI Engineering",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "PostgreSQL",
    "Uzbekistan Developer"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: `${siteConfig.fullName} — ${siteConfig.title}, ${siteConfig.specialization}. 3 years of building reliable software.`,
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
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: `${siteConfig.fullName} — ${siteConfig.title}, ${siteConfig.specialization}.`,
    images: ["/images/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Data for Person and WebSite
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.shortBio,
    url: siteConfig.url,
    email: "tmaq77@gmail.com",
    sameAs: [
      siteConfig.social.github.url,
      siteConfig.social.telegram.url,
      siteConfig.social.instagram.url
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Uzbekistan"
    },
    knowsAbout: [
      "Backend Architecture",
      "API Development",
      "Full-Stack Web Development",
      "Artificial Intelligence Integration",
      "Node.js",
      "PostgreSQL",
      "React"
    ]
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: `${siteConfig.fullName} — Personal Portfolio & Engineering Case Studies.`
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="font-sans antialiased bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen flex flex-col selection:bg-[var(--accent-primary)]/20 selection:text-[var(--text-primary)]">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--bg-surface)] border border-[var(--accent-secondary)] text-[var(--accent-secondary)] font-mono text-sm rounded shadow-lg"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
