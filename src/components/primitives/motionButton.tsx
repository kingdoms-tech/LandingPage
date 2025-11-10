import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import { useHoverAnimation } from '../../hooks/useHoverAnimation';

type MotionButtonVariant = 'primary' | 'secondary' | 'ghost';
type MotionButtonSize = 'sm' | 'md' | 'lg';

interface MotionButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: MotionButtonVariant;
  size?: MotionButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<MotionButtonVariant, string> = {
  primary:
    'bg-[var(--color-accent)] text-night shadow-lacosteStrong hover:shadow-lacosteStrong focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]',
  secondary:
    'bg-surface text-primary border border-overlay-soft hover:bg-overlay-subtle focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]',
  ghost:
    'bg-transparent text-primary border border-transparent hover:border-overlay-soft focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]',
};

const sizeClasses: Record<MotionButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ variant = 'primary', size = 'md', type = 'button', fullWidth = false, className, children, ...rest }, ref) => {
    const hover = useHoverAnimation({ variant: 'button' });
    const classes = clsx(
      'relative inline-flex items-center justify-center rounded-full font-medium tracking-wider',
      'transition-colors duration-300 ease-expo uppercase',
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && 'w-full',
      className,
    );

    return (
      <motion.button
        ref={ref}
        type={type}
        className={classes}
        whileHover={hover.whileHover}
        whileTap={hover.whileTap}
        transition={hover.transition}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);

MotionButton.displayName = 'MotionButton';

