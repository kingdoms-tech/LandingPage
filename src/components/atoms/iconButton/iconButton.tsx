import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import styled from 'styled-components';

export interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'surface' | 'transparent';
  size?: 'sm' | 'md';
}

const StyledIconButton = styled(motion.button)<{ $variant: 'surface' | 'transparent'; $size: 'sm' | 'md' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $variant, theme }) => ($variant === 'surface' ? theme.colors.surface : 'transparent')};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: ${({ theme }) => theme.transitions.default};
  width: ${({ $size, theme }) => ($size === 'sm' ? theme.spacing.xl : theme.spacing.xxl)};
  height: ${({ $size, theme }) => ($size === 'sm' ? theme.spacing.xl : theme.spacing.xxl)};
  padding: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
`;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'surface', size = 'md', type = 'button', children, ...rest }, ref) => {
    const isDisabled = Boolean(rest.disabled);

    return (
      <StyledIconButton
        ref={ref}
        $variant={variant}
        $size={size}
        whileHover={{ scale: isDisabled ? 1 : 1.05 }}
        whileTap={{ scale: isDisabled ? 1 : 0.95 }}
        type={type}
        {...rest}
      >
        {children}
      </StyledIconButton>
    );
  },
);

IconButton.displayName = 'IconButton';

