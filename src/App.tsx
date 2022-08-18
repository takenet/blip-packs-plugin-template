import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import root from 'react-shadow/styled-components';
import { AppProvider } from './contexts/AppContext';
import GlobalStyle from './globalStyles';
import { Home } from './pages/home';
import { AppProps } from './types/App';

export const App: React.FC<AppProps> = ({ pluginProps }) => {
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
