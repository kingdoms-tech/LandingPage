import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ScrollReveal, HoverCard } from '@primitives';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.quotes', { returnObjects: true }) as Testimonial[];
  const duplicated = useMemo(() => [...testimonials, ...testimonials], [testimonials]);

  return (
    <section id="stories" className="relative overflow-hidden pb-28 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--overlay-subtle)] to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">
              {t('navigation.stories')}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-wider text-primary sm:text-4xl">
              {t('testimonials.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              {t('testimonials.description')}
            </p>
          </ScrollReveal>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[color:var(--color-background)] via-[color:var(--overlay-strong)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[color:var(--color-background)] via-[color:var(--overlay-strong)] to-transparent" />
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          >
            {duplicated.map((item, index) => (
              <HoverCard key={`${item.name}-${index}`} elevation="md" className="w-[320px] flex-shrink-0 p-8">
                <p className="text-base leading-relaxed text-secondary">{item.quote}</p>
                <div className="mt-8 flex flex-col">
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                    {item.name}
                  </span>
                  <span className="mt-2 text-xs uppercase tracking-[0.28em] text-muted">
                    {item.role}
                  </span>
                </div>
              </HoverCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

