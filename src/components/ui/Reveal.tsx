import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { EASE, REVEAL_DURATION } from "../../lib/motion";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

type Tag = "div" | "section" | "article" | "li" | "tr" | "span" | "p" | "h2" | "h3" | "h4";

type RevealProps = {
  as?: Tag;
  children: ReactNode;
  className?: string;
  /** vertical offset the element rises from */
  y?: number;
  /** explicit delay, or derive one from `index` for grouped staggering */
  delay?: number;
  index?: number;
  step?: number;
  amount?: number;
  /** add the shared lift-on-hover treatment */
  lift?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Scroll-triggered fade + rise. Fail-safe by design:
 *   · prefers-reduced-motion  → render fully visible, no transform
 *   · no IntersectionObserver → render fully visible (never stuck hidden)
 * Otherwise animates once when it enters the viewport, on the shared eased curve.
 */
export function Reveal({
  as = "div",
  children,
  className,
  y = 24,
  delay,
  index,
  step = 0.08,
  amount = 0.15,
  lift = false,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotionSafe();
  const canObserve = typeof IntersectionObserver !== "undefined";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion[as] as any;

  if (reduce || !canObserve) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  const resolvedDelay = delay ?? (index != null ? index * step : 0);
  const hoverProps = lift ? { whileHover: { y: -6, transition: { duration: 0.3, ease: EASE } } } : {};

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: REVEAL_DURATION, delay: resolvedDelay, ease: EASE }}
      {...hoverProps}
      {...(lift ? { "data-cursor": "hover" } : {})}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
