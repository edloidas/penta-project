import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';

import '../../styles/style.css';

import Menu from './containers/Menu';
import Settings from './containers/Settings';
import Start from './containers/Start';
import configureStore from './store';
import history from './store/history';

const store = configureStore();

// HACK: Redirect is needed to load the root `/` in Electron environment
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        {window.location.pathname.includes('index.html') && (
          <Redirect to="/" push />
        )}
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/menu" component={Menu} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
