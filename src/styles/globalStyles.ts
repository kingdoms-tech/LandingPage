import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: ${({ theme }) => theme.mode};
    --color-background: ${({ theme }) => theme.colors.background};
    --color-surface: ${({ theme }) => theme.colors.surface};
    --color-text-primary: ${({ theme }) => theme.colors.textPrimary};
    --color-text-secondary: ${({ theme }) => theme.colors.textSecondary};
    --color-accent: ${({ theme }) => theme.colors.accent};
    --color-border: ${({ theme }) => theme.colors.border};
    --color-muted: ${({ theme }) => theme.colors.muted};
    --overlay-subtle: ${({ theme }) => theme.overlays.subtle};
    --overlay-soft: ${({ theme }) => theme.overlays.soft};
    --overlay-strong: ${({ theme }) => theme.overlays.strong};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: var(--color-background);
    color: var(--color-text-primary);
    transition: ${({ theme }) => theme.transitions.expo};
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .text-primary {
    color: var(--color-text-primary);
  }

  .text-secondary {
    color: var(--color-text-secondary);
  }

  .text-muted {
    color: var(--color-muted);
  }

  .bg-surface {
    background-color: var(--color-surface);
  }

  .bg-overlay-subtle {
    background-color: var(--overlay-subtle);
  }

  .bg-overlay-soft {
    background-color: var(--overlay-soft);
  }

  .border-overlay-soft {
    border-color: var(--overlay-soft);
  }

  .border-overlay-subtle {
    border-color: var(--overlay-subtle);
  }
`;

