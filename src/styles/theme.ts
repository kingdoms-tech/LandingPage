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
    expo: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
  },
  gradients: {
    hero: 'radial-gradient(circle at 20% 20%, rgba(0, 255, 148, 0.18), transparent 60%)',
    canvas: 'linear-gradient(120deg, rgba(0, 255, 148, 0.07), transparent)',
    cta: 'linear-gradient(180deg, rgba(0, 255, 148, 0.15), rgba(0, 0, 0, 0.6))',
  },
  blurs: {
    sm: 'blur(12px)',
    md: 'blur(24px)',
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
    muted: '#7D7D7F',
  },
  overlays: {
    subtle: 'rgba(255, 255, 255, 0.06)',
    soft: 'rgba(255, 255, 255, 0.12)',
    strong: 'rgba(0, 0, 0, 0.25)',
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
    muted: '#80808A',
  },
  overlays: {
    subtle: 'rgba(17, 17, 17, 0.08)',
    soft: 'rgba(17, 17, 17, 0.12)',
    strong: 'rgba(17, 17, 17, 0.3)',
  },
  mode: 'light',
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type ThemeMode = keyof typeof themes;

