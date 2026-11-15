"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";

export function Terminal() {
  const [copied, setCopied] = useState(false);

  const fullTerminalText = `temurmalik@portfolio: ~
$ whoami
${siteConfig.fullName}
${siteConfig.title}
Focus: ${siteConfig.specialization.replace("Focused on ", "")}

$ uptime
${siteConfig.experienceYears.replace("+", "")} years

$ cat profile.json
{
  "age": ${siteConfig.age},
  "location": "${siteConfig.location}",
  "projects": "${siteConfig.projectsCount}",
  "clients": "${siteConfig.clientsCount}",
  "focus": ["Backend", "AI", "Full-Stack"]
}

$ ls projects/
runcode-web/
donik-coach-ai/
al-harameen/

$ status
${siteConfig.terminal.status}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullTerminalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="w-full rounded-lg border border-[#26313D] bg-[#0E151E] shadow-2xl overflow-hidden font-mono text-xs sm:text-[13px] leading-relaxed transition-all"
      aria-label="Interactive Developer Terminal"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121922] border-b border-[#26313D] select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80" title="Close" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80" title="Minimize" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#79C0A5]/80" title="Expand" />
          <span className="ml-2 text-xs text-[#8B949E] tracking-tight font-mono">
            {siteConfig.terminal.user}@{siteConfig.terminal.host}: {siteConfig.terminal.cwd}
          </span>
        </div>

        <button
          type="button"
          onClick={copyToClipboard}
          className="text-[11px] text-[#8B949E] hover:text-[#E6EDF3] px-2 py-0.5 rounded border border-[#26313D] hover:border-[#394858] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#79B8FF]"
          title="Copy terminal session"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 text-[#8B949E] space-y-4 overflow-x-auto">
        {/* Command 1: whoami */}
        <div>
          <div className="flex items-center gap-2 text-[#E6EDF3]">
            <span className="text-[#79C0A5] font-semibold">$</span>
            <span className="text-[#79B8FF]">whoami</span>
          </div>
          <div className="mt-1 pl-3 border-l border-[#26313D] text-[#E6EDF3]">
            <p className="font-semibold text-white">{siteConfig.fullName}</p>
            <p className="text-[#8B949E]">{siteConfig.title}</p>
            <p className="text-[#79C0A5] text-xs">
              Focus: Backend & AI Engineering
            </p>
          </div>
        </div>

        {/* Command 2: uptime */}
        <div>
          <div className="flex items-center gap-2 text-[#E6EDF3]">
            <span className="text-[#79C0A5] font-semibold">$</span>
            <span className="text-[#79B8FF]">uptime</span>
          </div>
          <div className="mt-1 pl-3 border-l border-[#26313D] text-[#E6EDF3]">
            <p>
              <span className="text-[#79C0A5] font-semibold">3 years</span>{" "}
              <span className="text-[#6E7681] text-xs">
                (developer experience)
              </span>
            </p>
          </div>
        </div>

        {/* Command 3: cat profile.json */}
        <div>
          <div className="flex items-center gap-2 text-[#E6EDF3]">
            <span className="text-[#79C0A5] font-semibold">$</span>
            <span className="text-[#79B8FF]">cat</span>
            <span className="text-[#E6EDF3]">profile.json</span>
          </div>
          <div className="mt-1 pl-3 border-l border-[#26313D]">
            <pre className="text-xs text-[#8B949E] font-mono leading-tight">
              <code>
                {"{\n"}
                {"  "}
                <span className="text-[#79B8FF]">&quot;age&quot;</span>:{" "}
                <span className="text-[#E5C07B]">17</span>,{"\n"}
                {"  "}
                <span className="text-[#79B8FF]">&quot;location&quot;</span>:{" "}
                <span className="text-[#79C0A5]">&quot;Uzbekistan&quot;</span>,{"\n"}
                {"  "}
                <span className="text-[#79B8FF]">&quot;projects&quot;</span>:{" "}
                <span className="text-[#79C0A5]">&quot;30+&quot;</span>,{"\n"}
                {"  "}
                <span className="text-[#79B8FF]">&quot;clients&quot;</span>:{" "}
                <span className="text-[#79C0A5]">&quot;5+&quot;</span>,{"\n"}
                {"  "}
                <span className="text-[#79B8FF]">&quot;focus&quot;</span>: [
                <span className="text-[#79C0A5]">&quot;Backend&quot;</span>,{" "}
                <span className="text-[#79C0A5]">&quot;AI&quot;</span>,{" "}
                <span className="text-[#79C0A5]">&quot;Full-Stack&quot;</span>]{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        {/* Command 4: ls projects/ */}
        <div>
          <div className="flex items-center gap-2 text-[#E6EDF3]">
            <span className="text-[#79C0A5] font-semibold">$</span>
            <span className="text-[#79B8FF]">ls</span>
            <span className="text-[#8B949E]">projects/</span>
          </div>
          <div className="mt-1 pl-3 border-l border-[#26313D] grid grid-cols-1 sm:grid-cols-3 gap-1 text-xs">
            <span className="text-[#79C0A5] hover:underline">runcode-web/</span>
            <span className="text-[#79B8FF] hover:underline">donik-coach-ai/</span>
            <span className="text-[#E5C07B] hover:underline">al-harameen/</span>
          </div>
        </div>

        {/* Command 5: status & active prompt cursor */}
        <div>
          <div className="flex items-center gap-2 text-[#E6EDF3]">
            <span className="text-[#79C0A5] font-semibold">$</span>
            <span className="text-[#79B8FF]">status</span>
          </div>
          <div className="mt-1 pl-3 border-l border-[#26313D] flex items-center gap-2 text-[#E6EDF3]">
            <span className="w-2 h-2 rounded-full bg-[#79C0A5] shrink-0" />
            <span className="text-xs sm:text-sm text-[#E6EDF3]">
              {siteConfig.terminal.status}
            </span>
          </div>
        </div>

        {/* Active prompt with blinking cursor */}
        <div className="pt-1 flex items-center gap-2 text-xs">
          <span className="text-[#79C0A5] font-semibold">
            {siteConfig.terminal.user}@{siteConfig.terminal.host}:~#
          </span>
          <span className="inline-block w-2 h-3.5 bg-[#79C0A5] animate-cursor-blink" />
        </div>
      </div>
    </div>
  );
}
