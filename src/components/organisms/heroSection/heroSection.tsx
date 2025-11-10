import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { MagneticCTA, MotionButton, HoverCard, ScrollReveal } from '@primitives';

const highlightWords = (text: string) => text.split(' ');

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const words = useMemo(() => highlightWords(t('hero.title')), [t]);

  return (
    <section id="hero" className="relative overflow-hidden pb-32 pt-32 sm:pt-40">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,148,0.18),transparent_55%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-center">
        <div className="flex flex-1 flex-col gap-8">
          <ScrollReveal once={false}>
            <span className="inline-flex items-center gap-2 rounded-full border-overlay-soft bg-overlay-subtle px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              <Sparkles className="h-4 w-4 text-[var(--color-accent)]" />
              {t('hero.eyebrow')}
            </span>
          </ScrollReveal>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-wider text-primary sm:text-5xl lg:text-[56px]">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index.toString()}`}
                className="inline-block pr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg leading-relaxed text-secondary sm:text-xl">
              {t('hero.subtitle')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticCTA>{t('hero.ctaPrimary')}</MagneticCTA>
              <MotionButton variant="secondary" size="md">
                {t('hero.ctaSecondary')}
              </MotionButton>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal direction="left" delay={0.15}>
          <HoverCard
            elevation="md"
            className="relative flex flex-1 flex-col gap-8 overflow-hidden !border-transparent !bg-transparent"
            style={{
              backgroundImage:
                'radial-gradient(180% 220% at 50% -20%, rgba(0, 255, 148, 0.35), transparent 65%), radial-gradient(140% 160% at 70% 120%, rgba(0, 255, 148, 0.15), transparent 60%)',
            }}
          >
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.4em] text-muted">
                  IA devocional
                </span>
                <span className="rounded-full bg-overlay-subtle px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                  Tempo real
                </span>
              </div>
              <div className="grid gap-6">
                <div className="flex items-center justify-between border-b border-[color:var(--overlay-subtle)] pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-muted">
                      Respirar
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-primary">4s | 4s | 4s</p>
                  </div>
                  <div className="rounded-full bg-overlay-subtle px-4 py-2 text-xs uppercase tracking-[0.28em] text-secondary">
                    ritmo guiado
                  </div>
                </div>
                <div className="grid gap-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted">
                    Versículo do dia
                  </p>
                  <p className="text-lg leading-relaxed text-secondary">
                    “Em paz me deito e logo adormeço, porque só tu, Senhor, me fazes repousar seguro.” Salmos 4:8
                  </p>
                </div>
              </div>
            </div>
          </HoverCard>
        </ScrollReveal>
      </div>
    </section>
  );
};