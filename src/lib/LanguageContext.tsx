import { createContext, useContext } from 'react';
import { Locale, TranslationModel, translations } from './i18n';

interface LanguageContextType {
  locale: Locale;
  t: TranslationModel;
  dir: 'ltr' | 'rtl';
  setLocale: (locale: Locale) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
