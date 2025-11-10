import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[color:var(--overlay-soft)] bg-[color:var(--color-background)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center text-primary">
        <motion.p
          className="max-w-3xl text-base leading-relaxed text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          {t('footer.scripture')}
        </motion.p>
        <span className="text-xs uppercase tracking-[0.28em] text-muted">
          {t('footer.rights')}
        </span>
      </div>
    </footer>
  );
};
