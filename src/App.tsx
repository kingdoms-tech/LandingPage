import { useEffect, useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { GlobalStyles } from './styles/globalStyles';
import { themes } from './styles/theme';
import type { ThemeMode } from './styles/theme';
import { Navbar } from './components/molecules/navbar/navbar';
import { HeroSection } from './components/organisms/heroSection/heroSection';
import { HowItWorksSection } from './components/organisms/featureSection/featureSection';
import { ResourcesSection } from './components/organisms/pricingSection/pricingSection';
import { TestimonialsSection } from './components/organisms/testimonialsSection/testimonialsSection';
import { FinalCtaSection } from './components/organisms/finalCtaSection/finalCtaSection';
import { ContactSection } from './components/organisms/contactSection/contactSection';
import { Footer } from './components/organisms/footer/footer';

const AppShell = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: ${({ theme }) => theme.transitions.expo};
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const TopGradient = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.gradients.canvas};
  opacity: 0.6;
  pointer-events: none;
`;

const App: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const currentTheme = useMemo(() => themes[themeMode], [themeMode]);

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode;
  }, [themeMode]);

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
        <Helmet>
          <title>{t('meta.title')}</title>
          <meta name="description" content={t('meta.description')} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          />
        </Helmet>
        <TopGradient />
        <Navbar
          onToggleTheme={handleToggleTheme}
          onToggleLanguage={handleToggleLanguage}
          themeMode={themeMode}
          languageLabel={t('language')}
        />
        <div className="pt-28">
          <HeroSection />
          <HowItWorksSection />
          <ResourcesSection />
          <TestimonialsSection />
          <FinalCtaSection />
          <ContactSection />
          <Footer />
        </div>
      </AppShell>
    </ThemeProvider>
  );
};

export default App;
