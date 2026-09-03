import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";
import { setLenisInstance } from "../../lib/lenis";

/** Publishes the active Lenis instance to the module singleton (see lib/lenis). */
function LenisCapture() {
  const lenis = useLenis();
  useEffect(() => {
    setLenisInstance(lenis ?? null);
    return () => setLenisInstance(null);
  }, [lenis]);
  return null;
}

/**
 * Lenis smooth scrolling at the document root. Disabled entirely under
 * prefers-reduced-motion (native scrolling, instant anchor jumps). The eased
 * curve is gentle so in-page anchor navigation still lands precisely.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotionSafe();

  if (reduce) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <LenisCapture />
      {children}
    </ReactLenis>
  );
}
