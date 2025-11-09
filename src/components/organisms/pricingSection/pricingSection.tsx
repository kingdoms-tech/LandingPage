import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SectionContainer, ContentWrapper } from '../../molecules/sectionContainer/sectionContainer';
import { Typography } from '../../atoms/typography/typography';
import { Card } from '../../molecules/card/card';
import { Button } from '../../atoms/button/button';

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const SectionSubtitle = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const PlanPrice = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  const plans = t('pricing.plans', { returnObjects: true }) as Array<{ name: string; price: string; features: string[] }>;

  return (
    <SectionContainer id="pricing" $background="surface">
      <ContentWrapper>
        <Typography variant="heading" weight="bold" align="center">
          {t('pricing.title')}
        </Typography>
        <SectionSubtitle variant="body" align="center">
          {t('pricing.subtitle')}
        </SectionSubtitle>
        <PricingGrid>
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              as={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: 'easeOut' }}
            >
              <Typography variant="subtitle" weight="semibold">
                {plan.name}
              </Typography>
              <PlanPrice variant="heading" weight="bold">
                {plan.price}
              </PlanPrice>
              <PlanFeatures>
                {plan.features.map(feature => (
                  <li key={feature}>
                    <Typography variant="body">{feature}</Typography>
                  </li>
                ))}
              </PlanFeatures>
              <Button fullWidth>{t('hero.ctaPrimary')}</Button>
            </Card>
          ))}
        </PricingGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

