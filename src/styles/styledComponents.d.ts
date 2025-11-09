import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      textPrimary: string;
      textSecondary: string;
      accent: string;
      border: string;
    };
    spacing: Record<string, string>;
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    typography: {
      fontFamily: string;
      lineHeights: {
        tight: number;
        snug: number;
        relaxed: number;
      };
      fontWeights: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
    };
    transitions: {
      default: string;
    };
    mode: 'dark' | 'light';
  }
}

