import * as React from 'react';
import { mount } from '../wrap';
import Menu from '../../src/js/ui/containers/Menu';

describe('<Menu />', () => {
  test('Should renders', () => {
    const tree = mount(<Menu />);
    expect(tree).toMatchSnapshot();
  });
});
