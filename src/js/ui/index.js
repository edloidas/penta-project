// @flow

import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import '../../styles/style.css';

import StartScreen from './containers/StartScreen';
import MainMenu from './containers/MainMenu';
import configureStore from './store';
import history from './store/history';

const store = configureStore();

// HACK: Redirect is needed to load the root `/` in Electron environment
render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        {window.location.pathname.includes('index.html') && <Redirect to="/" />}
        <Route exact path="/" component={StartScreen} />
        <Route path="/menu" component={MainMenu} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
