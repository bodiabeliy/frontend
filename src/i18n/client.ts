'use client';

import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18nConfig, type Locale } from './config';

// Initialize i18next for client-side
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
    lng: undefined, // let detect the language on client side
    fallbackNS: 'common',
    defaultNS: 'common',
    ns: 'common',
    preload: i18nConfig.locales,
    interpolation: {
      escapeValue: false,
    },
  });

export function useTranslation(lng: Locale, ns?: string) {
  const ret = useTranslationOrg(ns);
  const { i18n } = ret;

  if (i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  return ret;
}
