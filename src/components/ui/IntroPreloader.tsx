"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { useTranslation } from "@/i18n/context";

interface Greeting {
  text: string;
  lang: string;
  duration: number;
}

const GREETINGS: Greeting[] = [
  { text: "Hello", lang: "en", duration: 140 },
  { text: "Salom", lang: "uz", duration: 130 },
  { text: "Привет", lang: "ru", duration: 120 },
  { text: "你好", lang: "zh", duration: 110 },
  { text: "Hola", lang: "es", duration: 105 },
  { text: "Bonjour", lang: "fr", duration: 100 },
  { text: "こんにちは", lang: "ja", duration: 100 },
  { text: "Hallo", lang: "de", duration: 95 },
  { text: "Ciao", lang: "it", duration: 95 },
  { text: "안녕하세요", lang: "ko", duration: 95 },
  { text: "Merhaba", lang: "tr", duration: 95 },
  { text: "Assalomu alaykum", lang: "uz", duration: 380 }
];

const emptySubscribe = () => () => {};

const isSeenSnapshot = (): boolean => {
  try {
    return (
      document.documentElement.classList.contains("intro-seen") ||
      sessionStorage.getItem("temurmalik_intro_seen") === "true" ||
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    );
  } catch {
    return true;
  }
};

const isSeenServerSnapshot = (): boolean => false;

export function IntroPreloader() {
  const isAlreadySeen = useSyncExternalStore(
    emptySubscribe,
    isSeenSnapshot,
    isSeenServerSnapshot
  );

  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const { locale } = useTranslation();
  const sequenceStartedRef = useRef(false);

  const handleSkip = () => {
    try {
      sessionStorage.setItem("temurmalik_intro_seen", "true");
      document.documentElement.classList.add("intro-seen");
    } catch {}
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
    setIsFinished(true);
  };

  useEffect(() => {
    if (isAlreadySeen || isFinished) return;
    if (sequenceStartedRef.current) return;
    sequenceStartedRef.current = true;

    // Lock body scroll during intro
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    // Keyboard listener for Escape key to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    let timer: NodeJS.Timeout;

    const playGreeting = (currIdx: number) => {
      if (currIdx >= GREETINGS.length - 1) {
        // Last greeting ("Assalomu alaykum") - linger slightly, then slide up exit
        timer = setTimeout(() => {
          setIsExiting(true);

          // Exit transition duration: 550ms with cubic-bezier(0.76, 0, 0.24, 1)
          timer = setTimeout(() => {
            try {
              sessionStorage.setItem("temurmalik_intro_seen", "true");
              document.documentElement.classList.add("intro-seen");
            } catch {}
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
            setIsFinished(true);
          }, 550);
        }, GREETINGS[currIdx].duration);
        return;
      }

      timer = setTimeout(() => {
        setIndex(currIdx + 1);
        playGreeting(currIdx + 1);
      }, GREETINGS[currIdx].duration);
    };

    playGreeting(0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isAlreadySeen, isFinished]);

  if (isAlreadySeen || isFinished) {
    return null;
  }

  const currentGreeting = GREETINGS[index] || GREETINGS[0];
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <div
      id="intro-preloader-root"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome greeting intro"
      className={`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 bg-[var(--bg-base)] text-[var(--text-primary)] transition-transform duration-[550ms] ease-curtain ${
        isExiting ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      style={{
        willChange: "transform"
      }}
    >
      {/* Screen reader only announcement */}
      <div className="sr-only" role="status" aria-live="polite">
        Welcome to Temurmalik Abdullayev portfolio.
      </div>

      {/* Top Bar: Brand & Accessible Skip button */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-[var(--text-muted)] select-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
          <span className="tracking-wider uppercase font-semibold text-[var(--text-secondary)]">
            Temurmalik
          </span>
        </div>

        <button
          type="button"
          onClick={handleSkip}
          className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] px-2.5 py-1 rounded border border-[var(--border-subtle)] hover:border-[var(--border-hover)] bg-[var(--bg-surface)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
          aria-label={locale === "uz" ? "Kirish animatsiyasini o‘tkazib yuborish" : "Skip introductory animation"}
        >
          {locale === "uz" ? "O‘tkazib yuborish [ESC]" : "Skip [ESC]"}
        </button>
      </div>

      {/* Center: Greeting Word with Dennis Snellenberg-inspired Accent Bullet */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center my-auto px-4"
        aria-hidden="true"
      >
        <div
          className="inline-flex items-center gap-3 sm:gap-4 md:gap-5 transition-opacity duration-75"
          style={{
            fontFamily:
              'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans", sans-serif'
          }}
        >
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--accent-primary)] animate-pulse shrink-0" />
          <span className="font-semibold tracking-tight text-[clamp(2.15rem,6.5vw,4.5rem)] text-[var(--text-primary)] select-none leading-none">
            {currentGreeting.text}
          </span>
        </div>
      </div>

      {/* Bottom Bar: Engineering Progress Indicator */}
      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono text-[var(--text-muted)] select-none">
        <span>Uzbekistan (UTC+5)</span>
        <span className="text-[var(--accent-primary)] font-semibold">
          {stepNumber} / 12
        </span>
      </div>

      {/* Dennis Snellenberg signature curved SVG curtain bottom */}
      <svg
        className="absolute top-full left-0 w-full overflow-visible pointer-events-none fill-[var(--bg-base)]"
        style={{ height: "120px" }}
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={
            isExiting
              ? "M0 0 L1000 0 L1000 0 Q500 0 0 0 Z"
              : "M0 0 L1000 0 L1000 60 Q500 120 0 60 Z"
          }
          className="transition-all duration-[550ms] ease-curtain fill-[var(--bg-base)]"
        />
      </svg>
    </div>
  );
}
