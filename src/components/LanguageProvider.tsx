'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { i18nConfig, type Locale } from '@/i18n/config';

type LanguageContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(i18nConfig.defaultLocale);

  useEffect(() => {
    // Load language from localStorage or browser
    const savedLanguage = localStorage.getItem('language') as Locale;
    if (savedLanguage && i18nConfig.locales.includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Locale;
      if (i18nConfig.locales.includes(browserLang)) {
        setLanguageState(browserLang);
      }
    }
  }, []);

  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
