import styled from 'styled-components';

export type TagTone = 'accent' | 'neutral';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: TagTone;
}

const StyledTag = styled.span<{ $tone: TagTone }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  background: ${({ $tone, theme }) => ($tone === 'accent' ? theme.colors.accent : theme.colors.surface)};
  color: ${({ $tone, theme }) =>
    $tone === 'accent' ? (theme.mode === 'dark' ? '#0B0B0C' : '#FFFFFF') : theme.colors.textSecondary};
`;

export const Tag: React.FC<TagProps> = ({ tone = 'neutral', children, ...rest }) => (
  <StyledTag $tone={tone} {...rest}>
    {children}
  </StyledTag>
);

