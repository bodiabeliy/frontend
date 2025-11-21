export const i18nConfig = {
  locales: ['uk', 'en', 'sp', 'pl', 'fr', 'ru'],
  defaultLocale: 'uk',
  localeDetection: true,
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
