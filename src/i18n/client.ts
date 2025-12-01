'use client';

import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18nConfig, type Locale } from './config';

// Get initial language from localStorage or use default
function getInitialLanguage(): string {
  // Check if we're on the client side
  if (typeof window === 'undefined') {
    return i18nConfig.defaultLocale;
  }
  
  try {
    // Check for detected locale (from IP detection)
    const detectedLocale = localStorage.getItem('detectedLocale');
    if (detectedLocale) {
      console.log('🔄 i18next using detected locale:', detectedLocale);
      return detectedLocale;
    }
  } catch (error) {
    // Silently fail if localStorage is not available
    console.warn('localStorage not available:', error);
  }
  
  console.log('🔄 i18next using default locale:', i18nConfig.defaultLocale);
  return i18nConfig.defaultLocale;
}

// Only initialize i18next on the client side
if (typeof window !== 'undefined') {
  i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      supportedLngs: i18nConfig.locales,
      fallbackLng: i18nConfig.defaultLocale,
      lng: getInitialLanguage(), // Use dynamic initial language
      fallbackNS: 'common',
      defaultNS: 'common',
      ns: 'common',
      preload: i18nConfig.locales,
      interpolation: {
        escapeValue: false,
      },
    });
}

export function useTranslation(lng: Locale, ns?: string) {
  const ret = useTranslationOrg(ns);
  const { i18n } = ret;

  if (i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  return ret;
}
