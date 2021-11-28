import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = ({ FileInput, authService, cardRepository }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <HelmetProvider>
            <Route exact path="/">
              <Helmet>
                <title>Login</title>
                <meta
                  http-equiv="Content-Security-Policy"
                  content="upgrade-insecure-requests"
                ></meta>
              </Helmet>
              <Login authService={authService} />
            </Route>
            <Route path="/maker">
              <Helmet>
                <title>EPL Card Maker</title>
                <meta
                  http-equiv="Content-Security-Policy"
                  content="upgrade-insecure-requests"
                ></meta>
              </Helmet>
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            </Route>
          </HelmetProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
