import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const ToastContainer = styled(motion.div)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xxl};
  right: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 30;
`;

interface ToastProps {
  open: boolean;
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ open, message }) => (
  <AnimatePresence>
    {open && (
      <ToastContainer
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {message}
      </ToastContainer>
    )}
  </AnimatePresence>
);

