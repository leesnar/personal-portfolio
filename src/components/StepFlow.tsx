import { motion, type Variants } from "motion/react";
import type { StepItem } from "../data/content";
import { EASE } from "../lib/motion";
import { useReducedMotionSafe } from "../hooks/useReducedMotionSafe";

/**
 * Pipeline / data-flow step grid. On scroll-into-view the steps "light up"
 * sequentially (staggered), reinforcing the soft → solid progression already
 * built into the design. Reduced motion renders them all at once.
 */
export function StepFlow({ steps, six = false }: { steps: StepItem[]; six?: boolean }) {
  const reduce = useReducedMotionSafe();
  const gridClass = six ? "steps steps--six" : "steps";

  const stepClass = (variant?: string) =>
    variant === "soft" ? "step step--soft" : variant === "solid" ? "step step--solid" : "step";

  if (reduce) {
    return (
      <div className={gridClass}>
        {steps.map((s, i) => (
          <div key={i} className={stepClass(s.variant)}>
            <span className="n">{s.n}</span>
            <h4>{s.title}</h4>
            {s.body && <p>{s.body}</p>}
          </div>
        ))}
      </div>
    );
  }

  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <motion.div
      className={gridClass}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {steps.map((s, i) => (
        <motion.div key={i} className={stepClass(s.variant)} variants={item}>
          <span className="n">{s.n}</span>
          <h4>{s.title}</h4>
          {s.body && <p>{s.body}</p>}
        </motion.div>
      ))}
    </motion.div>
  );
}
