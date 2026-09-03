import type Lenis from "lenis";

/**
 * Module-level handle on the active Lenis instance. Set from inside the
 * ReactLenis provider and read by the nav so anchor scrolling never depends on
 * hook/context timing. Null when smooth scroll is off (reduced motion).
 */
let instance: Lenis | null = null;

export function setLenisInstance(l: Lenis | null) {
  instance = l;
}

export function getLenisInstance(): Lenis | null {
  return instance;
}
