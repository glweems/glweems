import { motion, Transition, Variant } from 'framer-motion';
import React, { useMemo, useContext, PropsWithChildren } from 'react';
import { IntersectionContext } from './IntersectionObserver';

export type ScaleBoxProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
  easing?: Transition;
}>;

export const ScaleBox = ({
  children,
  delay, // order of appearance
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}: ScaleBoxProps) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delay / 5,
      ease: easing,
    }),
    [delay, duration, easing]
  );

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
