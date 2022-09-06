import React, { createContext, useEffect, useState } from 'react';
import { AppProps } from 'src/types/App';
import { Profile } from 'src/types/OIDCProfile';

type AppContextData = {
    userData: Profile;
    isSelfOnboarding: boolean;
    activationOption: string;
    routerData: RouterData;
};

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC<AppProps> = ({ children, pluginProps }) => {
    const [isSelfOnboarding, setIsSelfOnboarding] = useState(false);
    const [userData, setUserData] = useState<Profile>({} as Profile);
    const [routerData, setRouterData] = useState<RouterData>({} as RouterData);
    const [activationOption, setActivationOption] = useState('');

    useEffect(() => {
        let isMounted = false;

        if (pluginProps.userData && !isMounted) {
            setIsSelfOnboarding(pluginProps.isSelfOnboarding);
            setUserData(pluginProps.userData);
            setRouterData(pluginProps.routerData);
            setActivationOption(pluginProps.activationOption);
        }

        return () => {
            isMounted = true;
        };
    }, [pluginProps]);

    return Object.keys(userData).length ? (
        <>
            <AppContext.Provider
                value={{
                    isSelfOnboarding,
                    userData,
                    activationOption,
                    routerData,
                }}
            >
                {children}
            </AppContext.Provider>
        </>
    ) : (
        <></>
    );
};

export function useAppContext(): AppContextData {
    const context = React.useContext(AppContext);

    if (!context) {
        throw new Error('use app context must be used within an AppProvider');
    }

    return context;
}
