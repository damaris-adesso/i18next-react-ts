import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDE from "./translations/de/translation.json";
import translationEN from "./translations/en/translation.json";

const resources = {
    en: {
      translation: translationEN
    },
    de: {
      translation: translationDE
    }
  };


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'en'
  });

export default i18n;