import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import renderer from 'react-test-renderer';
import history from '../../src/js/ui/store/history';

export default (store, component) =>
  renderer
    .create(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>
    )
    .toJSON();
