import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import renderer from 'react-test-renderer';
import configureStore from '../../src/js/ui/store';
import history from '../../src/js/ui/store/history';
import Menu from '../../src/js/ui/containers/Menu';

describe('<Menu />', () => {
  test('Should renders', () => {
    const store = configureStore();

    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <Menu />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
