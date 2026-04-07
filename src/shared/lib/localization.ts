import { getLocales } from "expo-localization";

const DEFAULT_LANGUAGE = "en";

export const getDefaultLanguageTag = (): string =>
	getLocales()[0]?.languageTag ?? DEFAULT_LANGUAGE;

export const getDefaultLanguageCode = (): string =>
	getLocales()[0]?.languageCode ?? DEFAULT_LANGUAGE;

export const resolveSupportedLanguage = (
	supportedLanguages: readonly string[],
	fallbackLanguage = DEFAULT_LANGUAGE,
) => {
	const defaultTag = getDefaultLanguageTag().toLowerCase();
	const defaultCode = getDefaultLanguageCode().toLowerCase();
	const normalizedSupported = supportedLanguages.map((language) =>
		language.toLowerCase(),
	);

	const directTagMatchIndex = normalizedSupported.indexOf(defaultTag);
	if (directTagMatchIndex >= 0) {
		return supportedLanguages[directTagMatchIndex];
	}

	const directCodeMatchIndex = normalizedSupported.indexOf(defaultCode);
	if (directCodeMatchIndex >= 0) {
		return supportedLanguages[directCodeMatchIndex];
	}

	const baseFromTag = defaultTag.split("-")[0];
	const baseTagMatchIndex = normalizedSupported.findIndex(
		(language) => language.split("-")[0] === baseFromTag,
	);
	if (baseTagMatchIndex >= 0) {
		return supportedLanguages[baseTagMatchIndex];
	}

	return fallbackLanguage;
};
