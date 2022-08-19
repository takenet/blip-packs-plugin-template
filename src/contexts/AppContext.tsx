import React, { createContext, useEffect, useState } from 'react';
import { AppProps } from 'src/types/App';
import { Profile } from 'src/types/OIDCProfile';

type AppContextData = {
    userData: Profile;
    isSelfOnboarding: boolean;
    routerKey: string;
};

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC<AppProps> = ({ children, pluginProps }) => {
    const [isSelfOnboarding, setIsSelfOnboarding] = useState(false);
    const [userData, setUserData] = useState({} as Profile);
    const [routerKey, setRouterKey] = useState('');

    useEffect(() => {
        let isMounted = false;

        if (!isMounted) {
            setIsSelfOnboarding(pluginProps.isSelfOnboarding);
            setUserData(pluginProps.userData);
            setRouterKey(pluginProps.routerKey);
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
                    routerKey,
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
