import React, { createContext, useEffect, useState } from 'react';
import { AppContextData } from 'src/types/AppContextData';
import { AppProps } from 'src/types/AppProps';

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC<AppProps> = ({ children, userdata }) => {
    const [isSelfOnboarding, setIsSelfOnboarding] = useState(false);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        let isMounted = false;

        if (userdata) {
            setIsSelfOnboarding(userdata.isSelfOnboarding);
            setInitialized(true);
        }

        return () => {
            isMounted = true;
        };
    }, [userdata]);

    return initialized ? (
        <>
            <AppContext.Provider
                value={{
                    isSelfOnboarding,
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
