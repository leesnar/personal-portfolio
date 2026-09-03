/** Shared motion constants so every animation uses one eased curve and timing. */
export const EASE = [0.22, 1, 0.36, 1] as const; // easeOutExpo — matches --ease-out-expo
export const REVEAL_DURATION = 0.7;
export const STAGGER_STEP = 0.08;

/** Consistent lift-on-hover used across cards. */
export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.3, ease: EASE } },
} as const;
