// Premium Animation Variants for Framer Motion
// Elegant, minimal animations with spring physics

// ============================================
// SPRING CONFIGURATIONS
// ============================================

// Smooth spring - for elegant transitions
export const springSmooth = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

// Snappy spring - for responsive interactions
export const springSnappy = {
  type: "spring",
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

// Bouncy spring - for playful emphasis
export const springBounce = {
  type: "spring",
  stiffness: 300,
  damping: 15,
  mass: 1,
};

// Gentle spring - for subtle movements
export const springGentle = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 1.2,
};

// ============================================
// FADE ANIMATIONS
// ============================================

// Fade in from bottom with blur
export const fadeInUp = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Fade in from left with blur
export const fadeInLeft = {
  initial: { opacity: 0, x: -30, filter: "blur(8px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Fade in from right with blur
export const fadeInRight = {
  initial: { opacity: 0, x: 30, filter: "blur(8px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Simple fade with blur (no direction)
export const fadeBlur = {
  initial: { opacity: 0, filter: "blur(12px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.5, ease: "easeOut" },
};

// ============================================
// SCALE ANIMATIONS
// ============================================

// Scale in with spring
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: springSmooth,
};

// Scale in with bounce
export const scaleInBounce = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: springBounce,
};

// Scale in from center with blur
export const scaleBlur = {
  initial: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

// Stagger children - fast
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Stagger children - slow (for hero sections)
export const staggerContainerSlow = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Stagger child item with blur
export const staggerItem = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// Stagger child for cards
export const staggerCard = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: springSmooth
  },
};

// ============================================
// HOVER EFFECTS
// ============================================

// Hover scale - subtle
export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: springSnappy,
};

// Hover scale - more pronounced
export const hoverScaleLarge = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 },
  transition: springSnappy,
};

// Hover lift effect
export const hoverLift = {
  whileHover: { y: -6 },
  transition: springSnappy,
};

// Hover lift with shadow (for cards)
export const hoverLiftShadow = {
  whileHover: { 
    y: -8,
    boxShadow: "0 20px 40px -10px rgba(0, 51, 102, 0.15)"
  },
  transition: springSmooth,
};

// Hover glow effect
export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(197, 160, 89, 0.3)"
  },
  transition: { duration: 0.3 },
};

// Icon hover - scale with rotation
export const hoverIconPop = {
  whileHover: { scale: 1.15, rotate: 5 },
  whileTap: { scale: 0.95 },
  transition: springBounce,
};

// ============================================
// 3D TILT EFFECT
// ============================================

// 3D tilt on hover (use with perspective parent)
export const tilt3D = {
  whileHover: { 
    rotateX: 5,
    rotateY: -5,
    scale: 1.02,
  },
  transition: springSmooth,
};

// ============================================
// VIEWPORT SETTINGS
// ============================================

// Standard viewport trigger
export const viewportOnce = {
  once: true,
  margin: "-50px",
};

// Early viewport trigger
export const viewportEarly = {
  once: true,
  margin: "-100px",
};

// Viewport for hero elements
export const viewportHero = {
  once: true,
  amount: 0.3,
};

// ============================================
// SPECIAL EFFECTS
// ============================================

// Floating animation (continuous)
export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Floating with delay
export const floatingDelayed = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

// Pulse glow (for CTAs)
export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(197, 160, 89, 0.3)",
      "0 0 40px rgba(197, 160, 89, 0.5)",
      "0 0 20px rgba(197, 160, 89, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Text reveal - letter by letter container
export const textRevealContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

// Text reveal - single letter
export const textRevealLetter = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
};

// Shimmer effect for loading states
export const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

// Page fade in
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

// Page slide up
export const pageSlideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};
