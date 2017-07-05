// @flow

import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import '../../styles/style.css';

import Start from './containers/Start';
import MainMenu from './containers/MainMenu';
import configure from './store';

const store = configure();
const history = syncHistoryWithStore(createHistory({ basename: '/' }), store);

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Start} />
        <Route path="/menu" component={MainMenu} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
