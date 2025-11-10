import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import { useHoverAnimation } from '../../hooks/useHoverAnimation';

interface HoverCardProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> {
  elevation?: 'sm' | 'md';
  children?: ReactNode;
}

const elevationClasses: Record<NonNullable<HoverCardProps['elevation']>, string> = {
  sm: 'bg-overlay-subtle backdrop-blur-xl border border-overlay-subtle',
  md: 'bg-overlay-soft backdrop-blur-2xl border border-overlay-soft',
};

export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
  ({ elevation = 'md', className, children, ...rest }, ref) => {
    const hover = useHoverAnimation({ variant: 'card' });
    const classes = clsx(
      'relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ease-expo text-primary',
      elevationClasses[elevation],
      className,
    );

    return (
      <motion.div
        ref={ref}
        className={classes}
        whileHover={hover.whileHover}
        whileTap={hover.whileTap}
        transition={hover.transition}
        {...rest}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[color:var(--overlay-subtle)] to-transparent" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  },
);

HoverCard.displayName = 'HoverCard';

