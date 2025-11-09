import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SectionContainer, ContentWrapper } from '../../molecules/sectionContainer/sectionContainer';
import { Typography } from '../../atoms/typography/typography';

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  text-align: center;
`;

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer as="footer">
      <ContentWrapper>
        <FooterContent>
          <Typography variant="body" weight="medium">
            {t('footer.scripture')}
          </Typography>
          <Typography variant="caption">{t('footer.rights')}</Typography>
        </FooterContent>
      </ContentWrapper>
    </SectionContainer>
  );
};

