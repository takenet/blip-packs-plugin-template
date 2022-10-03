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
    skillTransbordo: {
        shortName: string;
        accessKey: string;
    };
};
