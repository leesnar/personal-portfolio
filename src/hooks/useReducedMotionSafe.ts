import { useReducedMotion } from "motion/react";

/** Framer Motion's hook can return null before hydration; coerce to boolean. */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false;
}
