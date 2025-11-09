import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { IconButton } from '../../atoms/iconButton/iconButton';
import { Button } from '../../atoms/button/button';
import { Typography } from '../../atoms/typography/typography';
import type { ThemeMode } from '../../../styles/theme';

const Bar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(16px);
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(11, 11, 12, 0.85)' : 'rgba(255, 255, 255, 0.85)')};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  width: min(1120px, 90%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const LogoAccent = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
`;

interface NavbarProps {
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  themeMode: ThemeMode;
  languageLabel: string;
}

const scrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, onToggleLanguage, themeMode, languageLabel }) => {
  const { t } = useTranslation();

  return (
    <Bar>
      <Inner>
        <Logo>
          <LogoAccent />
          <Typography as="span" variant="subtitle" weight="semibold">
            {t('brand')}
          </Typography>
        </Logo>
        <NavLinks>
          <Button type="button" variant="ghost" size="sm" onClick={() => scrollTo('hero')}>
            {t('navigation.hero')}
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={() => scrollTo('features')}>
            {t('navigation.features')}
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={() => scrollTo('pricing')}>
            {t('navigation.pricing')}
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={() => scrollTo('contact')}>
            {t('navigation.contact')}
          </Button>
        </NavLinks>
        <Actions>
          <Button type="button" variant="ghost" size="sm" onClick={onToggleTheme}>
            {themeMode === 'dark' ? t('theme.light') : t('theme.dark')}
          </Button>
          <IconButton type="button" onClick={onToggleLanguage}>
            {languageLabel}
          </IconButton>
        </Actions>
      </Inner>
    </Bar>
  );
};

