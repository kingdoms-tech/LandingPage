import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, HeartPulse, Users } from 'lucide-react';
import { ScrollReveal, HoverCard, MotionButton } from '@primitives';

interface Resource {
  title: string;
  description: string;
  icon: 'Sparkles' | 'BookOpen' | 'HeartPulse' | 'Users';
}

const iconMap = {
  Sparkles,
  BookOpen,
  HeartPulse,
  Users,
} as const;

export const ResourcesSection: React.FC = () => {
  const { t } = useTranslation();
  const resources = t('resources.items', { returnObjects: true }) as Resource[];

  const gridItems = useMemo(
    () =>
      resources.map(resource => {
        const Icon = iconMap[resource.icon];
        return { ...resource, Icon };
      }),
    [resources],
  );

  return (
    <section id="resources" className="relative overflow-hidden pb-28 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--overlay-subtle)] to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-sm uppercase tracking-[0.28em] text-muted">
                {t('navigation.resources')}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-wider text-primary sm:text-4xl">
                {t('resources.title')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                {t('resources.description')}
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <MotionButton variant="primary" size="md" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('cta.primary')}
            </MotionButton>
          </ScrollReveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {gridItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <HoverCard elevation="md" className="group relative flex h-full flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-overlay-soft bg-overlay-subtle text-primary transition-transform duration-500 ease-expo group-hover:-translate-y-1">
                    <item.Icon className="h-6 w-6 text-[var(--color-accent)]" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.32em] text-muted">
                    IA + fé
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-xl font-semibold tracking-wide text-primary">{item.title}</h3>
                  <p className="text-base leading-relaxed text-secondary">{item.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between text-sm text-muted">
                  <span className="uppercase tracking-[0.28em]">Disponível</span>
                  <motion.span
                    className="h-[1px] w-24 origin-left bg-gradient-to-r from-transparent via-[color:var(--overlay-soft)] to-transparent"
                    animate={{ scaleX: [0, 1] }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], repeat: Infinity, repeatDelay: 1.5 }}
                  />
                </div>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
