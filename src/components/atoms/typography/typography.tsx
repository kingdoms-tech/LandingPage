import styled, { css } from 'styled-components';

type TypographyVariant = 'display' | 'heading' | 'subtitle' | 'body' | 'caption';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: TypographyVariant;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
}

const variantStyles = {
  display: css`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: ${({ theme }) => theme.typography.lineHeights.tight};
    letter-spacing: -0.02em;
  `,
  heading: css`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: ${({ theme }) => theme.typography.lineHeights.snug};
    letter-spacing: -0.015em;
  `,
  subtitle: css`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  `,
  body: css`
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
};

const StyledText = styled.p<{
  $variant: TypographyVariant;
  $weight: 'regular' | 'medium' | 'semibold' | 'bold';
  $align: 'left' | 'center' | 'right';
}>`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: ${({ $align }) => $align};
  font-weight: ${({ theme, $weight }) => theme.typography.fontWeights[$weight]};
  ${props => variantStyles[props.$variant]}
`;

export const Typography: React.FC<TypographyProps> = ({
  as,
  variant = 'body',
  weight = 'regular',
  align = 'left',
  children,
  ...rest
}) => (
  <StyledText as={as} $variant={variant} $weight={weight} $align={align} {...rest}>
    {children}
  </StyledText>
);

