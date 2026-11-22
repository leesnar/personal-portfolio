import { useEffect, useState } from "react";

/** Entries follow the document order. The last section may be shorter than the viewport. */
export function useScrollSpy(ids: string[], topOffset = 76): string | null {
  const [active, setActive] = useState<string | null>(null);
  const orderedIds = ids.join(",");
  useEffect(() => {
    if (!orderedIds) return;
    const targets = orderedIds.split(",").map(id => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    let frame = 0;
    let requested = location.hash.slice(1);
    function compute() {
      frame = 0;
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      let current = targets[0];
      for (const target of targets) {
        if (atBottom || target.getBoundingClientRect().top <= topOffset + 2) current = target;
      }
      // Two short final sections can share the same maximum scroll position.
      const selected = targets.find(target => target.id === requested);
      if (atBottom && selected) {
        const boundary = selected.getBoundingClientRect();
        if (boundary.top >= topOffset - 2 && boundary.top < innerHeight) current = selected;
      }
      setActive(current?.id ?? null);
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(compute); };
    const onHash = () => { requested = location.hash.slice(1); schedule(); };
    const onManualScroll = () => { requested = ""; schedule(); };
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) onManualScroll();
    };
    const onAnchor = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (link) { requested = link.hash.slice(1); schedule(); }
    };
    compute();
    window.addEventListener("hashchange", onHash);
    window.addEventListener("wheel", onManualScroll, { passive: true });
    window.addEventListener("touchmove", onManualScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onAnchor);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("wheel", onManualScroll);
      window.removeEventListener("touchmove", onManualScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onAnchor);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [orderedIds, topOffset]);
  return active;
}
