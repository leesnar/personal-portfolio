import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotionSafe } from "../../hooks/useReducedMotionSafe";
import { useMediaQuery } from "../../hooks/useMediaQuery";

/**
 * A small, tasteful cursor: a precise dot plus a lagging ring that grows over
 * interactive targets. Renders nothing on touch / coarse pointers or under
 * reduced motion, and never intercepts pointer events.
 */
export function CustomCursor() {
  const reduce = useReducedMotionSafe();
  const finePointer = useMediaQuery("(pointer: fine)");
  const enabled = !reduce && finePointer;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(!!target?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, scale: hovering ? 1.6 : 1, opacity: hovering ? 0.9 : 0.55 }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
      />
    </>
  );
}
