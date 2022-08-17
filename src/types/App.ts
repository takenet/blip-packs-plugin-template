import { UserProfile } from './UserProfile';

export type AppProps = {
    pluginProps: {
        userData: UserProfile;
        isSelfOnboarding: boolean;
    };
};
