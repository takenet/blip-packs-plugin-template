import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';
import React from 'react';
import { ROUTER_KEY } from './constants/Application';
import { AppProvider } from './contexts/AppContext';
import GlobalStyle from './globalStyles';
import { Home } from './pages/home';
import { AppProps } from './types/App';

export const App: React.FC<AppProps> = ({ pluginProps }) => {
    applyPolyfills().then(() => {
        defineCustomElements(window);
    });

    const tempPluginProps = { ...pluginProps, routerKey: ROUTER_KEY };

    return (
        <>
            <GlobalStyle />
            <AppProvider pluginProps={tempPluginProps}>
                <Home />
            </AppProvider>
        </>
    );
};
