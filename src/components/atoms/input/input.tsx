import { forwardRef } from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`;

const LabelText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px rgba(0, 255, 148, 0.15);
  }
`;

const HelperText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, helperText, ...rest }, ref) => (
  <Wrapper>
    {label && <LabelText>{label}</LabelText>}
    <StyledInput ref={ref} {...rest} />
    {helperText && <HelperText>{helperText}</HelperText>}
  </Wrapper>
));

Input.displayName = 'Input';

