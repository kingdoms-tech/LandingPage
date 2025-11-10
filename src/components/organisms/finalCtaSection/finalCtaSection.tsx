import { useTranslation } from 'react-i18next';
import { ScrollReveal, MagneticCTA, MotionButton } from '@primitives';

export const FinalCtaSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="cta" className="relative overflow-hidden pb-28 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,148,0.12),transparent_65%)] blur-2xl" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 rounded-[48px] border border-overlay-soft bg-overlay-subtle px-6 py-16 text-center shadow-lacoste backdrop-blur-2xl sm:px-16">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.28em] text-muted">{t('cta.subtitle')}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-wider text-primary sm:text-4xl">
            {t('cta.title')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticCTA>{t('cta.primary')}</MagneticCTA>
            <MotionButton variant="secondary" size="md">
              {t('cta.secondary')}
            </MotionButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

