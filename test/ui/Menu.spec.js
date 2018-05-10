import React from 'react';
import configureStore from '../../src/js/ui/store';
import Menu from '../../src/js/ui/containers/Menu';
import renderTree from './renderTree';

describe('<Menu />', () => {
  test('Should renders', () => {
    const store = configureStore();

    const tree = renderTree(store, <Menu />);
    expect(tree).toMatchSnapshot();
  });
});
