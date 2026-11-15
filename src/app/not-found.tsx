import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, TerminalIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-24 sm:py-32">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          {/* Terminal error badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#26313D] bg-[#121922] font-mono text-xs text-[#E06C75]">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>404: RESOURCE_NOT_FOUND</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6EDF3]">
            Route does not exist.
          </h1>

          <p className="text-sm text-[#8B949E] leading-relaxed">
            The requested path could not be resolved by the server router. Please verify the URL or return to the main workstation.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#E6EDF3] text-[#0B0F14] font-semibold hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#16202C] text-[#E6EDF3] border border-[#26313D] hover:bg-[#1E2B3A] transition-colors"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
