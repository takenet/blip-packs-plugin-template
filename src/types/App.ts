import { Profile } from './OIDCProfile';

export type AppProps = {
    pluginProps: {
        userData: Profile;
        isSelfOnboarding: boolean;
        routerData: any;
    };
};
