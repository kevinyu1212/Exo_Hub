/**
 * Exo-Motion: 유저의 시선을 끄는 부드러운 움직임
 */
export const exoAnimation = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  hoverScale: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
  },
  pageTransition: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }
};
