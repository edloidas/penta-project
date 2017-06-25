/* @flow */

import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import '../../styles/style.css';

import App from './containers/App';
import configure from './store';

const store = configure();
const history = syncHistoryWithStore(createHistory({ basename: '/' }), store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
