import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from '../../src/js/ui/store';
import Start from '../../src/js/ui/containers/Start';
import { startReady } from '../../src/js/ui/actions/startScreen';

describe('<Start />', () => {
  test('Should renders', () => {
    const store = configureStore();

    const tree = renderer
      .create(
        <Provider store={store}>
          <Start />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should switch to Await loader', () => {
    const store = configureStore();
    store.dispatch(startReady(true));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Start />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
