import { useTranslation } from 'react-i18next';
import { ScrollReveal, HoverCard } from '@primitives';

interface Step {
  title: string;
  description: string;
}

export const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps', { returnObjects: true }) as Step[];

  return (
    <section id="how" className="relative overflow-hidden pb-28 pt-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:var(--overlay-subtle)] via-transparent to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">
              {t('navigation.how')}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-wider text-primary sm:text-4xl">
              {t('howItWorks.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              {t('howItWorks.description')}
            </p>
          </ScrollReveal>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.1}>
              <HoverCard elevation="md" className="flex h-full flex-col gap-6">
                <div className="flex items-start justify-between">
                  <span className="text-sm uppercase tracking-[0.28em] text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full bg-overlay-subtle px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-secondary">
                    {t('navigation.how')}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-wide text-primary">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-secondary">{step.description}</p>
                </div>
                <div className="mt-auto h-[1px] w-full bg-gradient-to-r from-transparent via-[color:var(--overlay-soft)] to-transparent" />
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
