// @flow
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import '../../styles/style.css';

import Start from './containers/Start';
import Menu from './containers/Menu';
import configureStore from './store';
import history from './store/history';

const store = configureStore();

// HACK: Redirect is needed to load the root `/` in Electron environment
render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        {window.location.pathname.includes('index.html') && (
          <Redirect to="/" push />
        )}
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  // $FlowIgnore: no reason to be `null`
  document.getElementById('root')
);
