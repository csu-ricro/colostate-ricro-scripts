import AppFrame, { createConfig } from 'colostate-ricro-ui';
import React from 'react';
import { Route } from 'react-router-dom';
import config from './assets/config';
import _placeholder from './_placeholder';

const routes = [{ path: '/', component: _placeholder }];

const App = () => (
  <AppFrame config={createConfig(config)}>
    {routes.map(route => (
      <Route component={route.component} exact key={route.path} path={route.path} />
    ))}
  </AppFrame>
);

export default App;
