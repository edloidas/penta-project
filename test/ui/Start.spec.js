import React from 'react';
import configureStore from '../../src/js/ui/store';
import Start from '../../src/js/ui/containers/Start';
import { finalizeStart } from '../../src/js/ui/actions/start';
import renderTree from './renderTree';

describe('<Start />', () => {
  test('Should renders', () => {
    const store = configureStore();

    const tree = renderTree(store, <Start />);
    expect(tree).toMatchSnapshot();
  });

  test('Should switch to Await loader', () => {
    const store = configureStore();
    store.dispatch(finalizeStart(true));

    const tree = renderTree(store, <Start />);
    expect(tree).toMatchSnapshot();
  });
});
