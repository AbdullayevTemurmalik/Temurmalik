/**
 * High-precision smooth scroll with luxury editorial easing.
 * Uses easeInOutSine for an ultra-calm, cinematic pace without aggressive peak velocity.
 * Listens for user interruption (wheel, touch, arrow keys) to gracefully yield control.
 */

let activeScrollRaf: number | null = null;

export function smoothScrollTo(
  targetY: number,
  customDuration?: number
): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    // Cancel any active smooth scroll animation
    if (activeScrollRaf !== null) {
      cancelAnimationFrame(activeScrollRaf);
      activeScrollRaf = null;
    }

    // Notify inertia providers (e.g. SmoothScrollProvider) to pause/sync immediately
    window.dispatchEvent(
      new CustomEvent("programmatic-scroll", { detail: { targetY } })
    );

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      window.scrollTo(0, targetY);
      resolve();
      return;
    }

    const startY = window.pageYOffset;
    const difference = targetY - startY;

    if (Math.abs(difference) < 3) {
      window.scrollTo(0, targetY);
      resolve();
      return;
    }

    const distance = Math.abs(difference);
    // Dynamic or custom duration: calm, gentle pace scaled gracefully with distance
    const duration =
      customDuration ??
      Math.min(2600, Math.max(1200, Math.round(900 + Math.sqrt(distance) * 28)));

    const startTime = performance.now();

    function cleanup() {
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchmove", cancelScroll);
      window.removeEventListener("pointerdown", handlePointerInterrupt);
      window.removeEventListener("keydown", handleKeyInterrupt);
    }

    function cancelScroll() {
      if (activeScrollRaf !== null) {
        cancelAnimationFrame(activeScrollRaf);
        activeScrollRaf = null;
      }
      cleanup();
      resolve();
    }

    function handlePointerInterrupt(e: PointerEvent) {
      if (e.clientX >= window.innerWidth - 24) {
        cancelScroll();
      }
    }

    function handleKeyInterrupt(e: KeyboardEvent) {
      if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(
          e.key
        )
      ) {
        cancelScroll();
      }
    }

    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchmove", cancelScroll, { passive: true });
    window.addEventListener("pointerdown", handlePointerInterrupt, { passive: true });
    window.addEventListener("keydown", handleKeyInterrupt, { passive: true });

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOutSine: silky, natural momentum without aggressive mid-scroll acceleration
      const ease = (1 - Math.cos(Math.PI * progress)) / 2;

      window.scrollTo(0, startY + difference * ease);

      if (progress < 1) {
        activeScrollRaf = requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
        activeScrollRaf = null;
        cleanup();
        resolve();
      }
    }

    activeScrollRaf = requestAnimationFrame(step);
  });
}
