import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import kh from "./translations/kh.json";

i18n.use(initReactI18next).init({
  resources: {
    en,
    kh,
  },
  lng: "en",
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
