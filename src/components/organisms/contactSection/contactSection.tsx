import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SectionContainer, ContentWrapper } from '../../molecules/sectionContainer/sectionContainer';
import { Typography } from '../../atoms/typography/typography';
import { Input } from '../../atoms/input/input';
import { Button } from '../../atoms/button/button';

const ContactForm = styled.form`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const TextArea = styled.textarea`
  grid-column: 1 / -1;
  min-height: 160px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  resize: vertical;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px rgba(0, 255, 148, 0.15);
  }
`;

const SubmitWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
`;

const SectionSubtitle = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer id="contact">
      <ContentWrapper>
        <Typography variant="heading" weight="bold" align="center">
          {t('contact.title')}
        </Typography>
        <SectionSubtitle variant="body" align="center">
          {t('contact.subtitle')}
        </SectionSubtitle>
        <ContactForm
          as={motion.form}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onSubmit={event => event.preventDefault()}
        >
          <Input name="name" placeholder={t('contact.name')} />
          <Input name="email" type="email" placeholder={t('contact.email')} />
          <TextArea name="message" placeholder={t('contact.message')} />
          <SubmitWrapper>
            <Button type="submit">{t('contact.submit')}</Button>
          </SubmitWrapper>
        </ContactForm>
      </ContentWrapper>
    </SectionContainer>
  );
};

