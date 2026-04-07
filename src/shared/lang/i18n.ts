import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/shared/lang/en.json";
import tr from "@/shared/lang/tr.json";
import { resolveSupportedLanguage } from "@/shared/lib/localization";

const resources = {
	en: {
		translation: en,
	},
	tr: {
		translation: tr,
	},
};

const supportedLanguages = Object.keys(resources);
const defaultLanguage = resolveSupportedLanguage(supportedLanguages, "en");

i18n.use(initReactI18next).init({
	resources,
	lng: defaultLanguage,
	fallbackLng: "en",
	supportedLngs: supportedLanguages,
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false,
	},
});

export default i18n;
