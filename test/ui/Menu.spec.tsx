import * as React from 'react';
import Menu from '../../src/js/ui/containers/Menu';
import { mount } from '../wrap';

describe('<Menu />', () => {
  test('Should renders', () => {
    const tree = mount(<Menu />);
    expect(tree).toMatchSnapshot();
  });
});
