import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

type DoodleProps = {
  children: ReactNode;
  className?: string;
  /** parallax travel in px across the element's scroll range */
  parallax?: number;
  /** base rotation preserved through the motion transform (e.g. the swirl's 192°) */
  baseRotate?: number;
  /** gentle looping idle motion (used for the sparkle) */
  idle?: boolean;
};

/**
 * Wraps a signature doodle so it drifts with scroll (parallax) and, optionally,
 * breathes with a small idle loop — personality touches, not a redesign.
 * Reduced motion renders it static with only its base rotation.
 */
export function Doodle({ children, className, parallax = 0, baseRotate = 0, idle = false }: DoodleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  if (reduce) {
    return (
      <span
        className={className}
        style={{ display: "inline-block", transform: baseRotate ? `rotate(${baseRotate}deg)` : undefined }}
      >
        {children}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: "inline-block", rotate: baseRotate, y: parallax ? y : 0 }}
      animate={idle ? { rotate: [baseRotate, baseRotate + 6, baseRotate], scale: [1, 1.06, 1] } : undefined}
      transition={idle ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      {children}
    </motion.span>
  );
}
