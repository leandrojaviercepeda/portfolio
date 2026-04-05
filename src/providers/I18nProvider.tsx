'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Locale } from '@/i18n/translations';

type Translation = typeof translations.en;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}

const defaultTranslations: Translation = translations.en as Translation;

const I18nContext = createContext<I18nContextType>({
  locale: 'es',
  setLocale: () => {},
  t: defaultTranslations,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('portfolio-locale') as Locale | null;
    if (stored && translations[stored]) {
      setLocaleState(stored);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === 'pt' || browserLang === 'en') {
        setLocaleState(browserLang as Locale);
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('portfolio-locale', newLocale);
    window.history.pushState(null, '', `/${newLocale}`);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] as Translation }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}