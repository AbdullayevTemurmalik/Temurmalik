import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { GitHubIcon, InstagramIcon, MailIcon, ArrowUpRight } from "@/components/ui/Icons";

export function Contact() {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[#26313D] scroll-mt-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            label="05 / Contact"
            title="Let's build something useful."
            subtitle="I'm open to discussing backend engineering contracts, full-stack product development, and practical AI integrations."
            className="text-center [&>div]:justify-center [&>p]:mx-auto"
          />

          {/* Contact Direct Channels */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-mono text-xs sm:text-sm">
            {/* GitHub - Verified official */}
            <a
              href={siteConfig.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#16202C] text-[#E6EDF3] border border-[#26313D] hover:border-[#79B8FF]/60 hover:bg-[#1C2836] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79B8FF]"
              aria-label="Visit Temurmalik on GitHub"
            >
              <GitHubIcon className="w-4 h-4 text-[#79C0A5]" />
              <span>GitHub / AbdullayevTemurmalik</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8B949E]" />
            </a>

            {/* Email - Configured / Graceful Fallback */}
            {siteConfig.social.email.isConfigured ? (
              <a
                href={siteConfig.social.email.url}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#16202C] text-[#E6EDF3] border border-[#26313D] hover:border-[#79C0A5]/60 hover:bg-[#1C2836] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79B8FF]"
                aria-label="Send email to Temurmalik"
              >
                <MailIcon className="w-4 h-4 text-[#79C0A5]" />
                <span>{siteConfig.social.email.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8B949E]" />
              </a>
            ) : isDev ? (
              <div
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#121922]/50 text-[#6E7681] border border-dashed border-[#26313D] cursor-not-allowed text-xs"
                title="Configurable via NEXT_PUBLIC_CONTACT_EMAIL in .env"
              >
                <MailIcon className="w-4 h-4 opacity-50" />
                <span>Email (configure via ENV)</span>
              </div>
            ) : null}

            {/* Instagram - Configured / Graceful Fallback */}
            {siteConfig.social.instagram.isConfigured ? (
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#16202C] text-[#E6EDF3] border border-[#26313D] hover:border-[#79B8FF]/60 hover:bg-[#1C2836] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79B8FF]"
                aria-label="Visit Temurmalik on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#79C0A5]" />
                <span>{siteConfig.social.instagram.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8B949E]" />
              </a>
            ) : isDev ? (
              <div
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#121922]/50 text-[#6E7681] border border-dashed border-[#26313D] cursor-not-allowed text-xs"
                title="Configurable via NEXT_PUBLIC_INSTAGRAM_URL in .env"
              >
                <InstagramIcon className="w-4 h-4 opacity-50" />
                <span>Instagram (configure via ENV)</span>
              </div>
            ) : null}
          </div>

          {/* Direct Notice */}
          <p className="mt-8 text-xs font-mono text-[#6E7681]">
            Operating from Uzbekistan (UTC+5) · Responsive for remote collaboration worldwide
          </p>
        </div>
      </Container>
    </section>
  );
}
