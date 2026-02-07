import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

const SUPPORTED_LANGUAGES = ['en'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

i18n
  .use(HttpBackend) // loads translations over http
  .use(LanguageDetector) // detects browser language + caches choice
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    ns: ['common'],
    defaultNS: 'common',

    // react-i18next options
    interpolation: { escapeValue: false },

    detection: {
      // order matters
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    backend: {
      // IMPORTANT: these JSON files must be available publicly
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
