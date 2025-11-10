import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      meta: {
        title: 'Templo Movimento | Exercício guiado pela fé',
        description:
          'Aplicativo que une treinos inteligentes, meditações cristãs e tecnologia para fortalecer corpo e espírito com serenidade.',
      },
      brand: 'Templo Movimento',
      navigation: {
        hero: 'Início',
        how: 'Como funciona',
        resources: 'Recursos',
        stories: 'Depoimentos',
        contact: 'Contato',
      },
      hero: {
        eyebrow: 'Equilíbrio entre corpo e espírito',
        title: 'Inteligência espiritual para cada movimento',
        subtitle:
          'Vivencie treinos conduzidos por IA que respeitam seu ritmo, cultivam devoção e alinham respirações às Escrituras.',
        ctaPrimary: 'Iniciar jornada',
        ctaSecondary: 'Ver experiência',
      },
      howItWorks: {
        title: 'Sua prática, em três movimentos de fé',
        description:
          'Cada sessão combina planejamento físico com momentos de oração guiada, para que disciplina e descanso caminhem juntos.',
        steps: [
          {
            title: 'Diagnóstico compassivo',
            description:
              'IA avalia energia, humor e intenção devocional do dia, oferecendo um plano que honra seus limites.',
          },
          {
            title: 'Treino com liturgia',
            description:
              'Sequências moduladas por respirações, versículos e afirmações cristãs para manter foco e reverência.',
          },
          {
            title: 'Selar com gratidão',
            description:
              'Devocional final com convite à oração silenciosa, diário espiritual e lembretes de cuidado comunitário.',
          },
        ],
      },
      resources: {
        title: 'Ferramentas premium à sua disposição',
        description:
          'Tecnologia discreta em um ambiente que estimula serenidade e constância devocional.',
        items: [
          {
            title: 'Roteiros gerados por IA',
            description: 'Sequências personalizadas com ajustes em tempo real para postura e respiração.',
            icon: 'Sparkles',
          },
          {
            title: 'Devocionais imersivos',
            description: 'Áudios e textos curtos baseados na tradição cristã protestante para cada etapa.',
            icon: 'BookOpen',
          },
          {
            title: 'Monitoramento consciente',
            description: 'Insights sobre humor, descanso e progresso físico com linguagem acolhedora.',
            icon: 'HeartPulse',
          },
          {
            title: 'Comunidade guiada',
            description: 'Salas de oração, desafios semanais e acompanhamento pastoral opcional.',
            icon: 'Users',
          },
        ],
      },
      testimonials: {
        title: 'Histórias de quem caminha com propósito',
        description:
          'Experiências reais de cristãos que descobriram uma rotina de movimento alinhada à fé.',
        quotes: [
          {
            quote:
              'Encontrei um espaço seguro para treinar e orar. Cada sessão me lembra que meu corpo é templo e presente.',
            name: 'Ana Luiza',
            role: 'Líder de louvor',
          },
          {
            quote:
              'A tecnologia do app respeita meus limites físicos e espirituais. Sinto paz enquanto fortaleço meu corpo.',
            name: 'Pr. Renato',
            role: 'Pastor auxiliar',
          },
          {
            quote:
              'As meditações guiadas me ajudaram a recuperar foco e descanso no Senhor em meio à agenda intensa.',
            name: 'Camila',
            role: 'Empreendedora',
          },
        ],
      },
      cta: {
        title: 'Respire fundo. O templo que você habita merece cuidado.',
        subtitle:
          'Junte-se a uma comunidade que equilibra vigor físico, devoção bíblica e inteligência artificial a serviço da fé.',
        primary: 'Assinar agora',
        secondary: 'Agendar demonstração',
      },
      contact: {
        title: 'Vamos construir essa jornada juntos',
        subtitle:
          'Compartilhe sua visão para aplicar o Templo Movimento em sua igreja, ministério ou rotina pessoal.',
        name: 'Nome completo',
        email: 'Email',
        message: 'Mensagem',
        submit: 'Enviar mensagem',
      },
      footer: {
        scripture:
          '“Portanto, ofereçam o seu corpo em sacrifício vivo, santo e agradável a Deus; este é o culto racional de vocês.” Romanos 12:1',
        rights: '2025 Kingdom Tech. Todos os direitos reservados.',
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
      meta: {
        title: 'Temple Movement | Faith-guided intelligent training',
        description:
          'Experience workouts guided by AI, scripture meditations, and pastoral care that nurture body and spirit with serenity.',
      },
      brand: 'Temple Movement',
      navigation: {
        hero: 'Home',
        how: 'How it works',
        resources: 'Resources',
        stories: 'Stories',
        contact: 'Contact',
      },
      hero: {
        eyebrow: 'Harmony for body and spirit',
        title: 'Spiritual intelligence for every move',
        subtitle:
          'Receive AI-guided sessions that honor your pace, nurture devotion, and align each breath with Scripture.',
        ctaPrimary: 'Start journey',
        ctaSecondary: 'Preview experience',
      },
      howItWorks: {
        title: 'Your practice in three faithful movements',
        description:
          'Every meeting blends physical planning with guided moments of prayer so discipline and rest can walk together.',
        steps: [
          {
            title: 'Compassionate assessment',
            description:
              'AI reads energy, mood, and devotional intentions, crafting a plan that respects your limits.',
          },
          {
            title: 'Liturgical training',
            description:
              'Sequences modulated by breaths, verses, and Christian affirmations to sustain focus and reverence.',
          },
          {
            title: 'Seal with gratitude',
            description:
              'Closing devotional with silent prayer, spiritual journaling, and gentle community reminders.',
          },
        ],
      },
      resources: {
        title: 'Premium tools at your reach',
        description:
          'Discreet technology inside an atmosphere designed for serenity and devotional consistency.',
        items: [
          {
            title: 'AI-crafted flows',
            description: 'Personalized sequences with real-time posture and breathing adjustments.',
            icon: 'Sparkles',
          },
          {
            title: 'Immersive devotionals',
            description: 'Short audio and text grounded in Protestant Christian tradition for each stage.',
            icon: 'BookOpen',
          },
          {
            title: 'Mindful tracking',
            description: 'Insights on mood, rest, and physical progress written in an encouraging tone.',
            icon: 'HeartPulse',
          },
          {
            title: 'Guided community',
            description: 'Prayer rooms, weekly challenges, and optional pastoral follow-up.',
            icon: 'Users',
          },
        ],
      },
      testimonials: {
        title: 'Stories of purposeful movement',
        description:
          'Real accounts from believers who discovered a rhythm that honors both strength and devotion.',
        quotes: [
          {
            quote:
              'I found a safe place to train and pray. Every session reminds me my body is a temple and a gift.',
            name: 'Ana Luiza',
            role: 'Worship leader',
          },
          {
            quote:
              'The app’s technology honors my physical and spiritual limits. I sense peace while building endurance.',
            name: 'Pastor Renato',
            role: 'Associate pastor',
          },
          {
            quote:
              'Guided meditations helped me regain focus and rest in the Lord amidst a demanding schedule.',
            name: 'Camila',
            role: 'Entrepreneur',
          },
        ],
      },
      cta: {
        title: 'Breathe deeply. The temple you inhabit deserves care.',
        subtitle:
          'Join a community that blends physical vigor, biblical devotion, and AI craftsmanship for the glory of God.',
        primary: 'Subscribe now',
        secondary: 'Book a demo',
      },
      contact: {
        title: 'Let’s design this journey together',
        subtitle:
          'Share your vision to bring Temple Movement to your church, ministry, or daily routine.',
        name: 'Full name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
      },
      footer: {
        scripture:
          '“Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice.” Romans 12:1',
        rights: '2025 Kingdom Tech. All rights reserved.',
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

