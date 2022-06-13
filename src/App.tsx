import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import root from 'react-shadow/styled-components';
import { AppProvider } from './contexts/app-context';
import GlobalStyle from './globalStyles';
import { Home } from './pages/home';

export const App = () => {
  applyPolyfills().then(() => {
    defineCustomElements(window);
  });

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <root.div style={{ height: '100%' }}>
        <AppProvider>
          <Router>
            <Switch>
              <Route
                path="/"
                component={Home}
              />
            </Switch>
          </Router>
        </AppProvider>
      </root.div>
    </>
  );
};
