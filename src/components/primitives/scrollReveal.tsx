import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  once?: boolean;
  delay?: number;
  direction?: RevealDirection;
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  once = true,
  delay = 0,
  direction = 'up',
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) {
      return;
    }
    const element = ref.current;
    const { x, y } = offsets[direction];
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            once,
          },
        },
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [delay, direction, once, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? undefined : { opacity: 0, ...offsets[direction] }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

