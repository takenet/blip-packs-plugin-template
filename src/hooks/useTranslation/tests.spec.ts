import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

import { useTranslation, setLanguage, getInstance } from './index';

describe('useTranlation tests', () => {
    const mockedTranslationObject = {
        en: {
            how: 'How do you want your egg today?',
            boiledEgg: 'Boiled egg',
        },
        pt: {
            how: 'Como você quer seu ovo hoje?',
            boiledEgg: 'Ovo cozido',
        },
    };

    let instance: LocalizedStringsMethods & { how: string; boiledEgg: string };

    beforeEach(() => {
        instance = useTranslation(mockedTranslationObject);
    });

    it('should return the translation on english language', () => {
        expect(instance.how).toBe('How do you want your egg today?');
        expect(instance.boiledEgg).toBe('Boiled egg');
    });

    it('shold return the translation on portuguese language', () => {
        setLanguage('pt');

        expect(instance.how).toBe('Como você quer seu ovo hoje?');
        expect(instance.boiledEgg).toBe('Ovo cozido');
    });

    it('should return the instance of LocalizedStrings', () => {
        const instanceReturned = getInstance();

        expect(instanceReturned).toBeInstanceOf(LocalizedStrings);
        expect(instance.how).toBeDefined();
        expect(instance.boiledEgg).toBeDefined();
    });
});
