import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sun, Moon, Languages } from 'lucide-react';
import clsx from 'clsx';
import type { ThemeMode } from '../../../styles/theme';
import { MotionButton } from '@primitives';
import { useHoverAnimation } from '../../../hooks/useHoverAnimation';

interface NavbarProps {
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  themeMode: ThemeMode;
  languageLabel: string;
}

const sections = ['hero', 'how', 'resources', 'stories', 'contact'] as const;

export const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, onToggleLanguage, themeMode, languageLabel }) => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const linkHover = useHoverAnimation({ variant: 'link' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (!element) {
        return;
      }
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          });
        },
        {
          threshold: 0.5,
        },
      );
      observer.observe(element);
      observers.push(observer);
    });
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const navItems = useMemo(
    () =>
      sections.map(section => ({
        id: section,
        label: t(`navigation.${section === 'how' ? 'how' : section}`),
      })),
    [t],
  );

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-expo',
        isScrolled ? 'bg-overlay-soft backdrop-blur-2xl border-b border-overlay-soft' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-primary">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="group relative flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary"
        >
          <span className="h-3 w-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_20px_rgba(0,255,148,0.5)] transition-transform duration-500 ease-expo group-hover:scale-125" />
          <span className="font-display text-base tracking-wider">{t('brand')}</span>
        </button>
        <nav className="relative hidden items-center gap-8 rounded-full border border-overlay-subtle bg-overlay-subtle/80 px-8 py-3 backdrop-blur-2xl md:flex">
          {navItems.map(item => (
            <motion.button
              key={item.id}
              type="button"
              className={clsx('relative text-xs uppercase tracking-[0.32em]', activeSection === item.id ? 'text-primary' : 'text-secondary')}
              onClick={() => scrollTo(item.id)}
              whileHover={linkHover.whileHover}
              whileTap={linkHover.whileTap}
              transition={linkHover.transition}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.span
                layoutId={`underline-${item.id}`}
                className="absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-[var(--color-text-primary)]"
                initial={{ scaleX: activeSection === item.id ? 1 : 0 }}
                animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              />
            </motion.button>
          ))}
        </nav>
        <div className="flex items-center gap-4 pl-4">
          <motion.button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-overlay-soft bg-overlay-subtle text-primary transition-colors duration-300 ease-expo hover:bg-overlay-soft"
            onClick={onToggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            aria-label={themeMode === 'dark' ? t('theme.light') : t('theme.dark')}
          >
            {themeMode === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
          <motion.button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-overlay-soft bg-overlay-subtle text-primary transition-colors duration-300 ease-expo hover:bg-overlay-soft"
            onClick={onToggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            aria-label={languageLabel}
          >
            <Languages className="h-5 w-5" />
            <span className="sr-only">{languageLabel}</span>
          </motion.button>
          <MotionButton size="sm" variant="primary" onClick={() => scrollTo('contact')}>
            {t('hero.ctaPrimary')}
          </MotionButton>
        </div>
      </div>
    </header>
  );
};

