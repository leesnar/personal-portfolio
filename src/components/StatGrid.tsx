import type { CSSProperties } from "react";
import type { StatItem } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";

/**
 * A grid of stat/metric blocks. Each value counts up on scroll-into-view; the
 * blocks stagger by index. Works for both the grey `.stat` blocks and the
 * flagship's translucent `.metric` blocks (same b + span structure).
 */
export function StatGrid({
  items,
  className = "stats",
  itemClassName = "stat",
  style,
}: {
  items: StatItem[];
  className?: string;
  itemClassName?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      {items.map((s, i) => (
        <Reveal key={i} className={itemClassName} index={i} step={0.06} y={16}>
          <b>
            <CountUp value={s.value} />
          </b>
          <span>{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
