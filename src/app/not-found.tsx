import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, TerminalIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-24 sm:py-32">
      <Container className="max-w-xl text-center">
        {/* Terminal Window Box */}
        <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-2xl text-left font-mono">
          <div className="px-4 py-2.5 bg-[var(--bg-base)] border-b border-[var(--border-subtle)] flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E06C75]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)]" />
              <span className="ml-2 text-xs text-[var(--text-muted)]">
                terminal — 404 router error
              </span>
            </div>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">
              HTTP 404
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[var(--accent-secondary)]">
              <span className="text-[var(--accent-primary)]">$</span>
              <span>resolve_route --target current_path</span>
            </div>

            <div className="pl-4 border-l border-[#E06C75]/60 text-[#E06C75] space-y-1">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5" />
                <p className="font-bold tracking-wider">ERROR: ROUTE_NOT_FOUND</p>
              </div>
              <p className="text-[var(--text-primary)] font-sans text-base sm:text-lg font-semibold pt-1">
                Requested path does not exist.
              </p>
              <p className="text-[var(--text-secondary)] font-sans text-xs sm:text-sm">
                The requested resource could not be located on this server. Please verify the URL or return to the workstation.
              </p>
            </div>
          </div>
        </div>

        {/* Back CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-xs sm:text-sm">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--text-primary)] text-[var(--bg-base)] font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/en#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-hover)] active:scale-[0.98] transition-all"
          >
            <span>Explore Projects</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
