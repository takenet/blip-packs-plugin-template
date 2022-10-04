import { Profile } from './OIDCProfile';

export type PluginProps = {
    pluginProps: {
        userData: Profile;
        isSelfOnboarding: boolean;
        activationOption: string;
        routerData: RouterData;
    };
};

export type RouterData = {
    shortName: string;
    accessKey: string;
    transhipmentSkill: {
        shortName: string;
        accessKey: string;
    };
};
