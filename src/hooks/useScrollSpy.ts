import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently occupying the top of the viewport.
 * Scroll-position based (rAF-throttled) rather than IntersectionObserver, so it
 * stays correct after programmatic anchor jumps and reads reliably under Lenis,
 * which dispatches native scroll events. `ids` must be in DOM order.
 */
export function useScrollSpy(ids: string[], topOffset = 80): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    let raf = 0;
    const line = topOffset + 1;

    const compute = () => {
      raf = 0;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        // the last section whose top has crossed the offset line is the active one
        if (el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // `scrollend` guarantees a final recompute at the exact resting position,
    // which a throttled scroll listener can miss after a long programmatic jump
    window.addEventListener("scrollend", compute, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scrollend", compute);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, topOffset]);

  return active;
}
