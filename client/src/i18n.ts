import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Email.1_heading": "Welcome to the <span>Boring App</span>",
      "Email.1_paragraph":
        "Are you feeling bored? Perhaps this application will help you find some interesting place.",
      "Email.2_paragraph": "You are only two small steps away from using it.",
      "Email.2_heading": "Verification",
      "Email.3_paragraph":
        "We will send you a <b>One Time Password</b> on your e-mail. We do not store your email address anywhere!",
      "Email.1_label": "Enter your email",
      "Email.1_button": "Get One Time Password",
    },
  },
  fr: {
    translation: {
      welcome: "Witaj w <span>Boring App</span>",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
