import { motion, useScroll, useSpring } from "motion/react";

/** Thin reading-progress bar; scaleX tracks document scroll. GPU-cheap. */
export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return <motion.div className={className} style={{ scaleX }} aria-hidden="true" />;
}
