import * as React from 'react';
import { mount } from '../wrap';
import configureStore from '../../src/js/ui/store';
import Settings from '../../src/js/ui/containers/Settings';
import {
  switchSettings,
  setSettings,
  applySettings,
  resetSettings
} from '../../src/js/ui/actions/settings';
import { texts } from '../../src/js/ui/components/base';

const initialData = {
  graphics: {
    screenSize: texts.graphics.screenSize[0]
  }
};

const data = {
  graphics: {
    screenSize: texts.graphics.screenSize[1]
  }
};

describe('<Settings />', () => {
  test('Should renders', () => {
    const tree = mount(<Settings />);
    expect(tree).toMatchSnapshot();
  });

  test('Should switch group', () => {
    const store = configureStore();
    store.dispatch(switchSettings(texts.settingsGroup[1]));

    const tree = mount(<Settings />, store);
    expect(tree).toMatchSnapshot();
  });

  test('Should update settings and switch to "changed" state', () => {
    const store = configureStore();
    store.dispatch(setSettings(data));

    const tree = mount(<Settings />, store);
    expect(tree).toMatchSnapshot();
  });

  test('Should reset settings', () => {
    const store = configureStore();

    const tree = mount(<Settings />, store);

    store.dispatch(setSettings(data));
    const treeWithChanges = mount(<Settings />, store);
    expect(treeWithChanges).toMatchSnapshot();

    store.dispatch(resetSettings(initialData));
    const treeWithoutChanges = mount(<Settings />, store);
    expect(treeWithoutChanges).toMatchSnapshot();

    expect(JSON.stringify(tree)).toEqual(JSON.stringify(treeWithoutChanges));
  });

  test('Should apply settings', () => {
    const store = configureStore();

    store.dispatch(setSettings(data));
    const treeWithChanges = mount(<Settings />, store);
    expect(treeWithChanges).toMatchSnapshot();

    store.dispatch(applySettings());
    const tree = mount(<Settings />, store);
    expect(tree).toMatchSnapshot();
  });
});
