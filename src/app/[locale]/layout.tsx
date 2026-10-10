import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import "@/app/globals.css";
import {Providers} from '@/providers/Providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Leandro Cepeda',
    default: 'Leandro Cepeda - Portfolio',
  },
  description: 'Analista de Sistemas / Full Stack Developer - Concepción del Uruguay, Entre Ríos',
  keywords: ['Full Stack Developer', 'Systems Analyst', 'React', 'Next.js', 'Node.js', 'Portfolio'],
  authors: [{name: 'Leandro Cepeda'}],
  openGraph: {
    title: 'Leandro Cepeda - Portfolio',
    description: 'Analista de Sistemas / Full Stack Developer',
    url: 'https://leandrocepeda.dev',
    siteName: 'Leandro Cepeda Portfolio',
    locale: 'es_AR',
    type: 'website',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Enable static rendering: tells next-intl which locale is being rendered so
  // messages resolve per-locale instead of falling back to the default locale.
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
