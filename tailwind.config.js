/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0A0A0B',
        charcoal: '#151516',
        pearl: '#FFFFFF',
        mist: '#F6F6F6',
        twilight: '#1F1F22',
        accent: '#00FF94',
        accentSoft: '#00C67A',
        muted: '#A3A3A3',
        ink: '#111111',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui'],
        body: ['Inter', 'system-ui'],
      },
      letterSpacing: {
        wider: '0.02em',
      },
      boxShadow: {
        lacoste: '0 12px 24px rgba(0, 0, 0, 0.08)',
        lacosteStrong: '0 20px 45px rgba(0, 0, 0, 0.18)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
