'use client';

import { useTranslations, useLocale } from 'next-intl';
import { createContext, useContext, ReactNode } from 'react';

type Translation = Record<string, unknown>;

interface I18nContextType {
  locale: string;
  t: Translation;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'es',
  t: {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <I18nContext.Provider value={{ locale, t: t as unknown as Translation }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
