import { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { TargetAndTransition, Transition, VariantLabels } from 'framer-motion';

type HoverVariant = 'button' | 'card' | 'link' | 'image';

interface HoverAnimationConfig {
  variant?: HoverVariant;
}

interface HoverAnimationResult {
  whileHover?: TargetAndTransition | VariantLabels;
  whileTap?: TargetAndTransition | VariantLabels;
  transition?: Transition;
}

const hoverPresets: Record<HoverVariant, HoverAnimationResult> = {
  button: {
    whileHover: { scale: 1.02, y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
  card: {
    whileHover: { y: -3, opacity: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' },
    whileTap: { scale: 0.99 },
    transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] },
  },
  link: {
    whileHover: { color: 'var(--color-text-primary)' },
    whileTap: {},
    transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] },
  },
  image: {
    whileHover: { scale: 1.01, filter: 'brightness(1.05)' },
    whileTap: {},
    transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
  },
};

export const useHoverAnimation = ({ variant = 'button' }: HoverAnimationConfig = {}): HoverAnimationResult => {
  const prefersReducedMotion = useReducedMotion();

  return useMemo(() => {
    if (prefersReducedMotion) {
      return {};
    }
    return hoverPresets[variant];
  }, [prefersReducedMotion, variant]);
};

