import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register once at module level — idempotent, safe to call multiple times
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialises Lenis smooth scroll and wires it to the GSAP ticker so
 * ScrollTrigger stays in sync. Call once at the App root.
 *
 * Skipped automatically when the user prefers reduced motion.
 */
export function useLenis() {
  useEffect(() => {
    // Respect the user's motion preference — fall back to native scroll
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      // Exponential-out curve: snappy start, cushioned stop
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Keep ScrollTrigger's scroll position in sync with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from the GSAP ticker so both animate in the same rAF frame.
    // lagSmoothing(0) prevents GSAP from capping large dt values, which would
    // break the smooth interpolation.
    function onTick(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);
}
