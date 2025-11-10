import { useTranslation } from 'react-i18next';
import { ScrollReveal, MotionButton } from '@primitives';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative overflow-hidden pb-32 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--overlay-subtle)] to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">{t('navigation.contact')}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-wider text-primary sm:text-4xl">
              {t('contact.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-secondary">{t('contact.subtitle')}</p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.15}>
          <form
            className="grid gap-6 rounded-[42px] border border-overlay-soft bg-overlay-subtle p-8 shadow-lacoste backdrop-blur-2xl sm:p-12 md:grid-cols-2"
            onSubmit={event => event.preventDefault()}
          >
            <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.28em] text-secondary">
              {t('contact.name')}
              <input
                type="text"
                name="name"
                className="rounded-full border border-overlay-soft bg-overlay-subtle px-6 py-4 text-base font-medium text-primary outline-none transition-all duration-300 ease-expo focus:border-[var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(0,255,148,0.18)]"
                placeholder={t('contact.name')}
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.28em] text-secondary">
              {t('contact.email')}
              <input
                type="email"
                name="email"
                className="rounded-full border border-overlay-soft bg-overlay-subtle px-6 py-4 text-base font-medium text-primary outline-none transition-all duration-300 ease-expo focus:border-[var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(0,255,148,0.18)]"
                placeholder={t('contact.email')}
                required
              />
            </label>
            <label className="md:col-span-2 flex flex-col gap-2 text-sm uppercase tracking-[0.28em] text-secondary">
              {t('contact.message')}
              <textarea
                name="message"
                className="h-40 rounded-3xl border border-overlay-soft bg-overlay-subtle px-6 py-4 text-base font-medium text-primary outline-none transition-all duration-300 ease-expo focus:border-[var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(0,255,148,0.18)]"
                placeholder={t('contact.message')}
                required
              />
            </label>
            <div className="md:col-span-2 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.28em] text-muted">
                24h para retorno pastoral
              </span>
              <MotionButton type="submit" variant="primary" size="md">
                {t('contact.submit')}
              </MotionButton>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};
