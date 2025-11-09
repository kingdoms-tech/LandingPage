import styled from 'styled-components';

export const SectionContainer = styled.section<{ $background?: 'default' | 'surface' }>`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background: ${({ $background, theme }) =>
    $background === 'surface' ? theme.colors.surface : theme.colors.background};
  transition: ${({ theme }) => theme.transitions.default};
`;

export const ContentWrapper = styled.div`
  width: min(1120px, 90%);
  margin: 0 auto;
`;

