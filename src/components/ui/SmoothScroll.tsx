"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let lenis: Lenis | undefined;
    let rafId: number | undefined;

    // Defer init off the critical path so hydration work finishes first;
    // native scroll works in the meantime
    const init = () => {
      lenis = new Lenis({
        duration: 0.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      document.documentElement.classList.add("lenis", "lenis-smooth");

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    const supportsIdle = "requestIdleCallback" in window;
    const idleId = supportsIdle
      ? window.requestIdleCallback(init)
      : window.setTimeout(init, 200);

    return () => {
      if (supportsIdle) {
        window.cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      lenis?.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return <>{children}</>;
}
