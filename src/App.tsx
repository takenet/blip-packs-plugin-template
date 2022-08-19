import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';
import React from 'react';
import { AppProvider } from './contexts/AppContext';
import GlobalStyle from './globalStyles';
import { Home } from './pages/home';
import { AppProps } from './types/App';

export const App: React.FC<AppProps> = ({ pluginProps }) => {
    applyPolyfills().then(() => {
        defineCustomElements(window);
    });

    // Insert temp router data bellow

    const routerData = {
        shortName: '',
        accessKey: '',

        skillTransbordo: {
            shortName: '',
            accessKey: '',
        },
    };

    const tempPluginProps = { ...pluginProps, routerData: routerData };

    return (
        <>
            <GlobalStyle />
            <AppProvider pluginProps={tempPluginProps}>
                <Home />
            </AppProvider>
        </>
    );
};
