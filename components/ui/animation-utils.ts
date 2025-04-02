import { Variants } from "framer-motion";

// Common easing curve for all animations
export const defaultEasing = [0.25, 0.1, 0.25, 1.0];

// Staggered children delay
export const staggerChildren = (delay = 0.05) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: delay,
    }
  }
});

// Base transition configs
export const baseTransition = {
  duration: 0.8,
  ease: defaultEasing,
};

export const fastTransition = {
  ...baseTransition,
  duration: 0.5,
};

export const quickTransition = {
  ...baseTransition,
  duration: 0.3,
};

// Fade up animation (for text elements)
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransition
  }
};

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: baseTransition
  }
};

// Card animations from different directions
export const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60, rotate: -5 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0,
    transition: {
      ...baseTransition,
      rotate: { ...baseTransition, duration: 0.6 }
    }
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: defaultEasing }
  }
};

export const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 60, rotate: 5 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0,
    transition: {
      ...baseTransition,
      rotate: { ...baseTransition, duration: 0.6 }
    }
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: defaultEasing }
  }
};

export const cardUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransition
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: defaultEasing }
  }
};

// Floating animation
export const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Parallax effect variants
export const parallaxVariants = (speed = 0.3) => ({
  initial: { y: 0 },
  animate: {
    y: ({ scrollY }: { scrollY: number }) => -scrollY * speed,
    transition: { type: "tween", ease: "linear" }
  }
});

// Modal/overlay variants
export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { ...baseTransition, duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { ...baseTransition, duration: 0.3 }
  }
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: quickTransition },
  exit: { opacity: 0, transition: quickTransition }
};

// Button hover animation
export const buttonHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: defaultEasing }
  },
  tap: { scale: 0.98 }
};

// Staggered reveal for list items
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fastTransition
  }
};

// Viewport settings
export const defaultViewport = { once: true, margin: "-100px" }; 