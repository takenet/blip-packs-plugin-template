import React, { createContext, useEffect, useState } from 'react';
import { AppProps } from 'src/types/App';
import { Profile } from 'src/types/OIDCProfile';

type AppContextData = {
    userData: Profile;
    isSelfOnboarding: boolean;
};

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC<AppProps> = ({ children, pluginProps }) => {
    const [isSelfOnboarding, setIsSelfOnboarding] = useState(false);
    const [userData, setUserData] = useState({} as Profile);

    useEffect(() => {
        let isMounted = false;

        if (pluginProps.userData && !isMounted) {
            setIsSelfOnboarding(pluginProps.isSelfOnboarding);
            setUserData(pluginProps.userData);
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
