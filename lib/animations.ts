import { Variants } from "framer-motion";

// Refined easing curves - smooth, professional motion
export const easing = {
  // Subtle spring physics - natural, refined motion
  spring: [0.25, 0.46, 0.45, 0.94] as const,
  // Smooth deceleration - elegant and controlled
  smooth: [0.23, 1, 0.32, 1] as const,
  // Emphasized entrance - confident but not aggressive
  emphasized: [0.16, 1, 0.3, 1] as const,
  // Gentle ease - whisper-soft motion
  gentle: [0.33, 1, 0.68, 1] as const,
};

// Hero-specific orchestrated entrance
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      duration: 0.3,
      ease: easing.gentle,
    },
  },
};

// Layered fade with subtle vertical shift
export const heroElement: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing.smooth,
    },
  },
};

// Name entrance - confident but refined
export const heroName: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easing.emphasized,
    },
  },
};

// Profile image with subtle scale
export const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easing.spring,
    },
  },
};

// Contact elements - minimal fade
export const heroContact: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.gentle,
    },
  },
};

// General stagger container (for other sections)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Fade up animation for sections
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.emphasized,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing.emphasized,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing.emphasized,
    },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing.emphasized,
    },
  },
};

// Brutal border expansion (for cards)
export const brutalExpand: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easing.emphasized,
    },
  },
};

// Header reveal with line expansion
export const headerReveal: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: easing.emphasized,
    },
  },
};

// Border grow animation (for left borders on content blocks)
export const borderGrow: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.emphasized,
    },
  },
};

// Viewport animation options (for scroll triggers)
export const scrollViewport = {
  once: true, // Only animate once
  margin: "0px 0px -400px 0px", // Trigger 400px before element enters viewport
  amount: 0, // Trigger as soon as any part becomes visible (combined with margin)
};
