import * as React from 'react';
import { mount } from '../wrap';
import configureStore from '../../src/js/ui/store';
import Start from '../../src/js/ui/containers/Start';
import { finalizeStart } from '../../src/js/ui/actions/start';

describe('<Start />', () => {
  test('Should renders', () => {
    const tree = mount(<Start />);
    expect(tree).toMatchSnapshot();
  });

  test('Should switch to Await loader', () => {
    const store = configureStore();
    store.dispatch(finalizeStart(true));

    const tree = mount(<Start />, store);
    expect(tree).toMatchSnapshot();
  });
});
