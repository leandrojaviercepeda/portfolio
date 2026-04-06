import { Metadata } from 'next';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

const titles: Record<Locale, string> = {
  es: 'Leandro Cepeda - Portfolio',
  en: 'Leandro Cepeda - Portfolio',
  pt: 'Leandro Cepeda - Portfólio',
};

const descriptions: Record<Locale, string> = {
  es: 'Analista de Sistemas / Full Stack Developer - Concepción del Uruguay, Entre Ríos',
  en: 'Systems Analyst / Full Stack Developer - Concepción del Uruguay, Entre Ríos',
  pt: 'Analista de Sistemas / Desenvolvedor Full Stack - Concepción del Uruguay, Entre Ríos',
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? locale as Locale : routing.defaultLocale;

  return {
    title: titles[validLocale],
    description: descriptions[validLocale],
    keywords: ['Full Stack Developer', 'Systems Analyst', 'React', 'Next.js', 'Node.js', 'Portfolio', 'Leandro Cepeda'],
    authors: [{ name: 'Leandro Cepeda' }],
    openGraph: {
      title: titles[validLocale],
      description: descriptions[validLocale],
      url: 'https://leandrocepeda.dev',
      siteName: 'Leandro Cepeda Portfolio',
      locale: validLocale === 'pt' ? 'pt_BR' : validLocale === 'en' ? 'en_US' : 'es_AR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[validLocale],
      description: descriptions[validLocale],
    },
  };
}