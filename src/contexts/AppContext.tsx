import React, { createContext, useEffect, useState } from 'react';
import { Profile } from 'src/types/OIDCProfile';
import { PluginProps, RouterData } from 'src/types/PluginProps';

type AppContextData = {
    userData: Profile;
    isSelfOnboarding: boolean;
    routerData: RouterData;
};

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC<PluginProps> = ({ children, pluginProps }) => {
    const [isSelfOnboarding, setIsSelfOnboarding] = useState(false);
    const [userData, setUserData] = useState<Profile>({} as Profile);
    const [routerData, setRouterData] = useState<RouterData>({} as RouterData);

    useEffect(() => {
        let isMounted = false;

        if (!isMounted) {
            setIsSelfOnboarding(pluginProps.isSelfOnboarding);
            setUserData(pluginProps.userData);
            setRouterData(pluginProps.routerData);
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
