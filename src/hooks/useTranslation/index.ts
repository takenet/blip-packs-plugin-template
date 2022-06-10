import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

const localizedStringsInstance = new LocalizedStrings({
    en: {},
    pt: {},
    es: {},
});

export const useTranslation = <T, K extends keyof T>(localization: T) => {
    localizedStringsInstance.setContent(localization);

    return localizedStringsInstance as LocalizedStringsMethods & T[K];
};

export const setLanguage = (language: string) => {
    localizedStringsInstance.setLanguage(language);
};

export const getInstance = () => localizedStringsInstance;
