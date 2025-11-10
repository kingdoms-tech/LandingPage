import { forwardRef, useMemo, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { useGesture } from '@use-gesture/react';
import clsx from 'clsx';
import { useHoverAnimation } from '../../hooks/useHoverAnimation';

interface MagneticCtaProps extends Omit<HTMLMotionProps<'button'>, 'ref' | 'children'> {
  intensity?: number;
  children?: ReactNode;
}

export const MagneticCTA = forwardRef<HTMLButtonElement, MagneticCtaProps>(
  ({ intensity = 0.25, className, children, ...rest }, ref) => {
    const hover = useHoverAnimation({ variant: 'button' });
    const targetRef = useRef<HTMLButtonElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = useMemo(
      () => ({
        stiffness: 200,
        damping: 15,
        mass: 0.5,
      }),
      [],
    );

    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useGesture(
      {
        onMove: ({ event, hovering }) => {
          if (!hovering || !targetRef.current) {
            x.set(0);
            y.set(0);
            return;
          }
          const rect = targetRef.current.getBoundingClientRect();
          const distanceX = event.clientX - (rect.left + rect.width / 2);
          const distanceY = event.clientY - (rect.top + rect.height / 2);
          x.set(distanceX * intensity);
          y.set(distanceY * intensity);
        },
        onHover: ({ hovering }) => {
          if (!hovering) {
            x.set(0);
            y.set(0);
          }
        },
      },
      {
        target: targetRef,
        eventOptions: { passive: true },
      },
    );

    return (
      <motion.button
        ref={node => {
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          targetRef.current = node;
        }}
        className={clsx(
          'relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 text-base font-semibold uppercase tracking-wider text-ink shadow-lacosteStrong transition-all duration-500 ease-expo',
          'bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]',
          className,
        )}
        style={{ x: springX, y: springY }}
        whileHover={hover.whileHover}
        whileTap={hover.whileTap}
        transition={hover.transition}
        {...rest}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[color:rgba(255,255,255,0.4)] to-transparent opacity-60" />
      </motion.button>
    );
  },
);

MagneticCTA.displayName = 'MagneticCTA';

