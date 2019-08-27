import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langs from "./langs";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  "en-US": {
    ...langs.enUS
  },
  "vi-VN": {
    ...langs.viVN
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vi-VN",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
