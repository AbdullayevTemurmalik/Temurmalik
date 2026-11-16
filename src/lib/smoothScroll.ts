/**
 * High-precision smooth scroll with luxury editorial easing.
 * 2x slower and more cinematic (~1200ms) than default browser scroll.
 */
export function smoothScrollTo(targetY: number, duration = 1200): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

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

    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOutCubic: silky, natural momentum
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + difference * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}
