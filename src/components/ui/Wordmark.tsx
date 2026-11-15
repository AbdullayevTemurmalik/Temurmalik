import Link from "next/link";
import { siteConfig } from "@/config/site";

interface WordmarkProps {
  className?: string;
}

/**
 * Typography-first wordmark reading "Temurmalik".
 * Strictly follows the branding rule: no "TM", no "TM.DEV", no monograms.
 */
export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#79B8FF] rounded ${className}`}
      aria-label={`${siteConfig.name} - Home`}
    >
      <span className="font-mono text-xs font-semibold text-[#79C0A5] transition-colors group-hover:text-[#79B8FF]">
        λ
      </span>
      <span className="font-mono text-base font-semibold tracking-tight text-[#E6EDF3] transition-colors group-hover:text-white">
        {siteConfig.name}
      </span>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#79C0A5]/80 group-hover:bg-[#79B8FF] transition-colors" />
    </Link>
  );
}
