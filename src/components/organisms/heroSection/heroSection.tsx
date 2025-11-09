import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SectionContainer, ContentWrapper } from '../../molecules/sectionContainer/sectionContainer';
import { Typography } from '../../atoms/typography/typography';
import { Button } from '../../atoms/button/button';
import { Tag } from '../../atoms/tag/tag';

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding-top: 120px;
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: radial-gradient(circle at top, rgba(0, 255, 148, 0.3), transparent),
    ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(0, 255, 148, 0.4), transparent 60%);
  mix-blend-mode: screen;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer id="hero">
      <ContentWrapper>
        <HeroGrid>
          <HeroContent as={motion.div} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Tag tone="accent">{t('navigation.hero')}</Tag>
            <Typography variant="display" weight="bold">
              {t('hero.title')}
            </Typography>
            <Typography variant="body" weight="medium">
              {t('hero.subtitle')}
            </Typography>
            <Actions>
              <Button size="lg">{t('hero.ctaPrimary')}</Button>
              <Button variant="secondary" size="lg">
                {t('hero.ctaSecondary')}
              </Button>
            </Actions>
          </HeroContent>
          <HeroVisual initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <Glow />
          </HeroVisual>
        </HeroGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

