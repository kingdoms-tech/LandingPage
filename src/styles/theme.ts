import type { DefaultTheme } from 'styled-components';
import { fontSizes, radius, shadows, spacing } from './designTokens';

const shared = {
  spacing,
  radius,
  fontSizes,
  shadows,
  typography: {
    fontFamily: "'Inter', sans-serif",
    lineHeights: {
      tight: 1.1,
      snug: 1.3,
      relaxed: 1.6,
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  transitions: {
    default: 'all 0.25s ease-out',
  },
};

export const darkTheme: DefaultTheme = {
  ...shared,
  colors: {
    background: '#0B0B0C',
    surface: '#151516',
    textPrimary: '#FFFFFF',
    textSecondary: '#A3A3A3',
    accent: '#00FF94',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  mode: 'dark',
};

export const lightTheme: DefaultTheme = {
  ...shared,
  colors: {
    background: '#FFFFFF',
    surface: '#F6F6F6',
    textPrimary: '#111111',
    textSecondary: '#555555',
    accent: '#00C67A',
    border: 'rgba(0, 0, 0, 0.1)',
  },
  mode: 'light',
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type ThemeMode = keyof typeof themes;

