import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SectionContainer, ContentWrapper } from '../../molecules/sectionContainer/sectionContainer';
import { Typography } from '../../atoms/typography/typography';
import { Card } from '../../molecules/card/card';

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const FeatureText = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const FeatureSection: React.FC = () => {
  const { t } = useTranslation();
  const items = t('features.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <SectionContainer id="features">
      <ContentWrapper>
        <Typography variant="heading" weight="bold" align="center">
          {t('features.title')}
        </Typography>
        <FeatureGrid>
          {items.map((item, index) => (
            <Card
              key={item.title}
              as={motion.div}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: 'easeOut' }}
            >
              <Typography variant="subtitle" weight="semibold">
                {item.title}
              </Typography>
              <FeatureText variant="body">
                {item.description}
              </FeatureText>
            </Card>
          ))}
        </FeatureGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

