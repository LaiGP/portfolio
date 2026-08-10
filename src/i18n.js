import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ca from './locales/ca/translation.json';
import es from './locales/es/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import de from './locales/de/translation.json';

i18n
  //.use(LanguageDetector) // detecta l'idioma del navegador
  .use(initReactI18next)
  .init({
    resources: {
      ca: { translation: ca },
      es: { translation: es },
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
    },
    lng: 'ca', // idioma inicial fix
    fallbackLng: 'ca',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;