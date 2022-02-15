// Librries.
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Languages.
import en from "./languages/en";
import pl from "./languages/pl";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
