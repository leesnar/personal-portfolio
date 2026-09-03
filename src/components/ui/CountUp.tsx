import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { EASE } from "../../lib/motion";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

type CountUpProps = {
  /** the full label as authored, e.g. "92.86%", "ρ = 0.7887", "25,192", "3.05 / 5" */
  value: string;
  className?: string;
  duration?: number;
};

type Parsed = {
  prefix: string;
  suffix: string;
  target: number | null;
  decimals: number;
  group: boolean;
};

function parse(value: string): Parsed {
  const match = value.match(/-?\d[\d,]*(?:\.\d+)?/);
  if (!match || match.index == null) {
    return { prefix: "", suffix: "", target: null, decimals: 0, group: false };
  }
  const raw = match[0];
  const prefix = value.slice(0, match.index);
  const suffix = value.slice(match.index + raw.length);
  const group = raw.includes(",");
  const clean = raw.replace(/,/g, "");
  const dot = clean.indexOf(".");
  const decimals = dot === -1 ? 0 : clean.length - dot - 1;
  return { prefix, suffix, target: parseFloat(clean), decimals, group };
}

function format(n: number, decimals: number, group: boolean): string {
  if (group) {
    return n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return n.toFixed(decimals);
}

/**
 * Counts a numeric label up from zero when it scrolls into view, preserving any
 * surrounding text and the exact decimal precision / thousands grouping of the
 * source. Non-numeric labels render unchanged; reduced-motion shows the final
 * value immediately. This never alters the copy — only how it arrives.
 */
export function CountUp({ value, className, duration = 1.4 }: CountUpProps) {
  const { prefix, suffix, target, decimals, group } = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotionSafe();
  // fail-safe: if the observer can't run, show the final value rather than 0
  const canObserve = typeof IntersectionObserver !== "undefined";
  const [display, setDisplay] = useState<string>(() =>
    reduce || !canObserve || target == null ? value : prefix + format(0, decimals, group) + suffix,
  );

  useEffect(() => {
    if (target == null) return;
    if (reduce || !canObserve) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(prefix + format(v, decimals, group) + suffix),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, target]);

  return (
    <span ref={ref} className={className}>
      {target == null ? value : display}
    </span>
  );
}
