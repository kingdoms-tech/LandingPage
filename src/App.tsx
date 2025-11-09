import { useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { GlobalStyles } from './styles/globalStyles';
import { themes } from './styles/theme';
import type { ThemeMode } from './styles/theme';
import { Navbar } from './components/molecules/navbar/navbar';
import { HeroSection } from './components/organisms/heroSection/heroSection';
import { FeatureSection } from './components/organisms/featureSection/featureSection';
import { PricingSection } from './components/organisms/pricingSection/pricingSection';
import { ContactSection } from './components/organisms/contactSection/contactSection';
import { Footer } from './components/organisms/footer/footer';

const AppShell = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: ${({ theme }) => theme.transitions.default};
`;

const Spacer = styled.div`
  height: 72px;
`;

const App: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const currentTheme = useMemo(() => themes[themeMode], [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleLanguage = () => {
    const next = i18n.language.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(next);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <AppShell>
        <Navbar
          onToggleTheme={handleToggleTheme}
          onToggleLanguage={handleToggleLanguage}
          themeMode={themeMode}
          languageLabel={t('language')}
        />
        <Spacer />
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </AppShell>
    </ThemeProvider>
  );
};

export default App;
