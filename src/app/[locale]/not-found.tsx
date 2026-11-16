"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowLeft } from "@/components/ui/Icons";
import { useTranslation } from "@/i18n/context";

export default function LocalizedNotFound() {
  const { t, locale } = useTranslation();

  return (
    <div className="py-24 sm:py-32 flex-1 flex items-center justify-center">
      <Container className="max-w-2xl text-center">
        {/* Terminal Window Box */}
        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-2xl text-left font-mono">
          <div className="px-4 py-2.5 bg-[var(--bg-base)] border-b border-[var(--border-subtle)] flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E06C75]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#79C0A5]" />
            <span className="ml-2 text-xs text-[var(--text-muted)]">terminal — 404 error</span>
          </div>

          <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[var(--accent-secondary)]">
              <span className="text-[var(--accent-primary)]">$</span>
              <span>resolve_route --target current_path</span>
            </div>

            <div className="pl-4 border-l border-[#E06C75]/60 text-[#E06C75] space-y-1">
              <p className="font-bold">{t.notFound.code}</p>
              <p className="text-[var(--text-primary)] font-sans text-base font-semibold">
                {t.notFound.title}
              </p>
              <p className="text-[var(--text-secondary)] font-sans text-sm">
                {t.notFound.description}
              </p>
            </div>
          </div>
        </div>

        {/* Back CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-xs sm:text-sm">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--text-primary)] text-[var(--bg-base)] font-semibold hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.notFound.returnHome}</span>
          </Link>

          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] transition-colors"
          >
            <span>{t.notFound.exploreProjects}</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
