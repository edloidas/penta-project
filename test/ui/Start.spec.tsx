import * as React from 'react';
import { finalizeStart } from '../../src/js/ui/actions/start';
import Start from '../../src/js/ui/containers/Start';
import configureStore from '../../src/js/ui/store';
import { mount } from '../wrap';

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
