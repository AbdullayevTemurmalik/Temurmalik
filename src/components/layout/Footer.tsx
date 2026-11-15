import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { siteConfig } from "@/config/site";
import { GitHubIcon, InstagramIcon, MailIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-[#26313D] bg-[#0B0F14] pt-12 pb-16 text-[#8B949E]">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#26313D]/60">
          <div className="space-y-2">
            <Wordmark />
            <p className="text-xs sm:text-sm text-[#8B949E] font-mono max-w-sm">
              {siteConfig.title} · {siteConfig.specialization}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs sm:text-sm">
            <Link href="/#about" className="hover:text-[#E6EDF3] transition-colors">
              About
            </Link>
            <Link href="/#expertise" className="hover:text-[#E6EDF3] transition-colors">
              Expertise
            </Link>
            <Link href="/#projects" className="hover:text-[#E6EDF3] transition-colors">
              Projects
            </Link>
            <Link href="/#approach" className="hover:text-[#E6EDF3] transition-colors">
              Approach
            </Link>
            <Link href="/#contact" className="hover:text-[#E6EDF3] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="space-y-1">
            <p className="text-[#E6EDF3]">
              © {currentYear} {siteConfig.fullName}. All rights reserved.
            </p>
            <p className="text-[#6E7681]">
              Designed & engineered by {siteConfig.name}.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* GitHub - verified official */}
            <a
              href={siteConfig.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Temurmalik Abdullayev"
              className="p-2 rounded-md border border-[#26313D] bg-[#121922] text-[#8B949E] hover:text-[#E6EDF3] hover:border-[#394858] transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            {/* Email - if configured */}
            {siteConfig.social.email.isConfigured ? (
              <a
                href={siteConfig.social.email.url}
                aria-label="Send email to Temurmalik"
                className="p-2 rounded-md border border-[#26313D] bg-[#121922] text-[#8B949E] hover:text-[#E6EDF3] hover:border-[#394858] transition-colors"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            ) : process.env.NODE_ENV === "development" ? (
              <span
                title="Email unconfigured in ENV (NEXT_PUBLIC_CONTACT_EMAIL)"
                className="p-2 rounded-md border border-[#26313D]/40 bg-[#121922]/50 text-[#6E7681] cursor-not-allowed"
                aria-hidden="true"
              >
                <MailIcon className="w-4 h-4 opacity-40" />
              </span>
            ) : null}

            {/* Instagram - if configured */}
            {siteConfig.social.instagram.isConfigured ? (
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile of Temurmalik"
                className="p-2 rounded-md border border-[#26313D] bg-[#121922] text-[#8B949E] hover:text-[#E6EDF3] hover:border-[#394858] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            ) : process.env.NODE_ENV === "development" ? (
              <span
                title="Instagram unconfigured in ENV (NEXT_PUBLIC_INSTAGRAM_URL)"
                className="p-2 rounded-md border border-[#26313D]/40 bg-[#121922]/50 text-[#6E7681] cursor-not-allowed"
                aria-hidden="true"
              >
                <InstagramIcon className="w-4 h-4 opacity-40" />
              </span>
            ) : null}
          </div>
        </div>
      </Container>
    </footer>
  );
}
