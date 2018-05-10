import React from 'react';
import configureStore from '../../src/js/ui/store';
import Settings from '../../src/js/ui/containers/Settings';
import {
  switchSettings,
  setSettings,
  applySettings,
  resetSettings
} from '../../src/js/ui/actions/settings';
import { texts } from '../../src/js/ui/components/base';
import renderTree from './renderTree';

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
    const store = configureStore();

    const tree = renderTree(store, <Settings />);
    expect(tree).toMatchSnapshot();
  });

  test('Should switch group', () => {
    const store = configureStore();
    store.dispatch(switchSettings(texts.settingsGroup[1]));

    const tree = renderTree(store, <Settings />);
    expect(tree).toMatchSnapshot();
  });

  test('Should update settings and switch to "changed" state', () => {
    const store = configureStore();
    store.dispatch(setSettings(data));

    const tree = renderTree(store, <Settings />);
    expect(tree).toMatchSnapshot();
  });

  test('Should reset settings', () => {
    const store = configureStore();

    const tree = renderTree(store, <Settings />);

    store.dispatch(setSettings(data));
    const treeWithChanges = renderTree(store, <Settings />);
    expect(treeWithChanges).toMatchSnapshot();

    store.dispatch(resetSettings(initialData));
    const treeWithoutChanges = renderTree(store, <Settings />);
    expect(treeWithoutChanges).toMatchSnapshot();

    expect(JSON.stringify(tree)).toEqual(JSON.stringify(treeWithoutChanges));
  });

  test('Should apply settings', () => {
    const store = configureStore();

    store.dispatch(setSettings(data));
    const treeWithChanges = renderTree(store, <Settings />);
    expect(treeWithChanges).toMatchSnapshot();

    store.dispatch(applySettings());
    const tree = renderTree(store, <Settings />);
    expect(tree).toMatchSnapshot();
  });
});
