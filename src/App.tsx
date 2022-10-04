import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';
import React from 'react';
import { AppProvider } from './contexts/AppContext';
import GlobalStyle from './globalStyles';
import { Home } from './pages/home';
import { PluginProps } from './types/PluginProps';

export const App: React.FC<PluginProps> = ({ pluginProps }) => {
    applyPolyfills().then(() => {
        defineCustomElements(window);
    });

    return (
        <>
            <GlobalStyle />
            <AppProvider pluginProps={pluginProps}>
                <Home />
            </AppProvider>
        </>
    );
};
