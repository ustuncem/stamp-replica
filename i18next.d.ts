import "i18next";

type Translation = typeof import("./src/shared/lang/en.json");

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: "translation";
		enableSelector: true;
		resources: {
			translation: Translation;
		};
	}
}
