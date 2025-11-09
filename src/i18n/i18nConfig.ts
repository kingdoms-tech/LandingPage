import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      brand: 'Templo Movimento',
      navigation: {
        hero: 'Início',
        features: 'Caminho',
        pricing: 'Planos',
        contact: 'Contato',
      },
      hero: {
        title: 'Exercício e espiritualidade em harmonia',
        subtitle: 'Cresça em força e fé com treinos guiados e meditações baseadas nas Escrituras, pensadas para o corpo e para a alma.',
        ctaPrimary: 'Começar jornada',
        ctaSecondary: 'Explorar conteúdos',
      },
      features: {
        title: 'Uma jornada integrada',
        items: [
          {
            title: 'Treinos com propósito',
            description: 'Sequências de movimento que fortalecem o corpo enquanto relembram promessas bíblicas.',
          },
          {
            title: 'Devocionais em áudio',
            description: 'Momentos de reflexão cristã para acompanhar antes ou depois de cada prática física.',
          },
          {
            title: 'Comunidade acolhedora',
            description: 'Partilhe orações, testemunhos e desafios com pessoas que caminham na mesma fé.',
          },
        ],
      },
      pricing: {
        title: 'Planos que acompanham sua disciplina',
        subtitle: 'Sem amarras. Escolha o ritmo que faz sentido para o seu compromisso espiritual e físico.',
        plans: [
          {
            name: 'Essencial',
            price: 'R$39/mês',
            features: ['Treinos semanais', 'Devocionais guiados', 'Playlists inspiradoras'],
          },
          {
            name: 'Crescimento',
            price: 'R$69/mês',
            features: ['Treinos diários', 'Mentorias mensais', 'Planos alimentares cristãos'],
          },
          {
            name: 'Comunidade',
            price: 'R$99/mês',
            features: ['Acesso completo', 'Eventos ao vivo', 'Grupos de discipulado'],
          },
        ],
      },
      contact: {
        title: 'Converse com nossa equipe',
        subtitle: 'Quer implementar em sua igreja ou ministério? Escreva e vamos sonhar juntos.',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        submit: 'Enviar mensagem',
      },
      footer: {
        scripture: '“Portanto, quer vocês comam, bebam ou façam qualquer outra coisa, façam tudo para a glória de Deus.” 1 Coríntios 10:31',
        rights: '2025 Templo Movimento. Todos os direitos reservados.',
      },
      theme: {
        dark: 'Modo escuro',
        light: 'Modo claro',
      },
      language: 'EN',
    },
  },
  en: {
    translation: {
      brand: 'Temple Movement',
      navigation: {
        hero: 'Home',
        features: 'Pathway',
        pricing: 'Plans',
        contact: 'Contact',
      },
      hero: {
        title: 'Exercise and spirituality in harmony',
        subtitle: 'Grow in strength and faith with scripture-based workouts and meditations designed for body and soul.',
        ctaPrimary: 'Start journey',
        ctaSecondary: 'Explore content',
      },
      features: {
        title: 'An integrated journey',
        items: [
          {
            title: 'Purposeful training',
            description: 'Movement sequences that strengthen the body while recalling biblical promises.',
          },
          {
            title: 'Audio devotionals',
            description: 'Christian reflections to accompany each physical practice.',
          },
          {
            title: 'Welcoming community',
            description: 'Share prayers, testimonies, and challenges with believers walking the same path.',
          },
        ],
      },
      pricing: {
        title: 'Plans to sustain your discipline',
        subtitle: 'Flexible access. Choose the pace that fits your spiritual and physical commitment.',
        plans: [
          {
            name: 'Essential',
            price: '$19/mo',
            features: ['Weekly workouts', 'Guided devotionals', 'Inspiring playlists'],
          },
          {
            name: 'Growth',
            price: '$34/mo',
            features: ['Daily workouts', 'Monthly mentoring', 'Faith-rooted nutrition plans'],
          },
          {
            name: 'Community',
            price: '$49/mo',
            features: ['Full access', 'Live gatherings', 'Discipleship groups'],
          },
        ],
      },
      contact: {
        title: 'Talk with our team',
        subtitle: 'Want to bring it to your church or ministry? Reach out and let us plan together.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
      },
      footer: {
        scripture: '“So whether you eat or drink or whatever you do, do it all for the glory of God.” 1 Corinthians 10:31',
        rights: '2025 Temple Movement. All rights reserved.',
      },
      theme: {
        dark: 'Dark mode',
        light: 'Light mode',
      },
      language: 'PT',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

