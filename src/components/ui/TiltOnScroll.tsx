import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";

type TiltOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** base 2D rotation (e.g. the tilt-sheet's -6°) preserved through the tilt */
  baseRotate?: number;
  /** peak rotateX in degrees as the element travels through the viewport */
  max?: number;
  perspective?: number;
};

/**
 * Adds a subtle scroll-linked perspective tilt to device frames / sheets.
 * The element tips slightly toward the viewer as it enters and away as it
 * leaves — refined, not gimmicky. Reduced motion keeps only the base rotation.
 */
export function TiltOnScroll({
  children,
  className,
  baseRotate = 0,
  max = 5,
  perspective = 1000,
}: TiltOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [max, 0, -max]);

  if (reduce) {
    return (
      <div
        ref={ref}
        className={className}
        style={baseRotate ? { transform: `rotate(${baseRotate}deg)` } : undefined}
      >
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} style={{ perspective }}>
      <motion.div className={className} style={{ rotate: baseRotate, rotateX, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
}
