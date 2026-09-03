import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { ScrollProgress } from "./ui/ScrollProgress";
import { getLenisInstance } from "../lib/lenis";

const NAV_OFFSET = 64; // sticky-nav height compensation for anchor targets

function prefersReduced() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Sticky nav with scroll-spy active state, a reading-progress bar, and smooth
 * in-page anchoring. Uses the shared Lenis instance when available; falls back
 * to native scrolling (instant under reduced motion) so anchors always land
 * correctly with the nav-height offset applied.
 */
export function Nav() {
  const ids = NAV_LINKS.map((l) => l.id);
  const spyActive = useScrollSpy(ids, 72);
  // optimistic highlight: show the clicked destination immediately, then hand
  // back to the scroll-spy once the smooth scroll has settled
  const [clicked, setClicked] = useState<string | null>(null);
  const clearTimer = useRef<number | undefined>(undefined);
  const active = clicked ?? spyActive;

  useEffect(() => () => window.clearTimeout(clearTimer.current), []);

  const scrollTo = (id: string | "top") => {
    if (id !== "top") {
      setClicked(id);
      window.clearTimeout(clearTimer.current);
      clearTimer.current = window.setTimeout(() => setClicked(null), 1200);
    }

    const el = id === "top" ? null : document.getElementById(id);
    if (id !== "top" && !el) return;

    // absolute target with the sticky-nav offset baked in (reliable across engines)
    const target =
      id === "top" ? 0 : (el as HTMLElement).getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      window.scrollTo({ top: target, behavior: prefersReduced() ? "auto" : "smooth" });
    }

    // keep the URL shareable without triggering a second native jump
    if (id === "top") history.replaceState(null, "", location.pathname + location.search);
    else history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <button className="nav__brand" onClick={() => scrollTo("top")}>
          Lesnar Tambun <span>· AI/ML</span>
        </button>
        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <ScrollProgress className="nav__progress" />
    </header>
  );
}
