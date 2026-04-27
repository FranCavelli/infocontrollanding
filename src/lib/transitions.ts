import type { TransitionDirectionalAnimations } from "astro";

const enter = {
  name: "info-fade-in",
  duration: "550ms",
  easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
  fillMode: "both",
  delay: "120ms",
};
const leave = {
  name: "info-fade-out",
  duration: "320ms",
  easing: "cubic-bezier(0.5, 0, 0.7, 0.4)",
  fillMode: "both",
};

export const pageFade: TransitionDirectionalAnimations = {
  forwards: { old: leave, new: enter },
  backwards: { old: leave, new: enter },
};
