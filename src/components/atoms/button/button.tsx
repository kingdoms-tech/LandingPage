import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const buttonStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => (theme.mode === 'dark' ? '#0B0B0C' : '#FFFFFF')};
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.md};
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: none;
  `,
};

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
};

const StyledButton = styled(motion.button)<{ $variant: ButtonVariant; $size: ButtonSize; $fullWidth: boolean }>`
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  ${props => buttonStyles[props.$variant]}
  ${props => sizeStyles[props.$size]}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, type = 'button', children, ...rest }, ref) => {
    const isDisabled = Boolean(rest.disabled);

    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        whileHover={{ y: -2, boxShadow: isDisabled ? undefined : '0 16px 32px rgba(0, 255, 148, 0.15)' }}
        whileTap={{ scale: isDisabled ? 1 : 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        type={type}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

