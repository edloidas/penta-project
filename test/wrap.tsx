import * as React from 'react';
import { Store } from 'redux';
import { shallow as enzymeShallow, mount as enzymeMount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import configureStore from '../src/js/ui/store';
import history from '../src/js/ui/store/history';

export default function wrap(component: JSX.Element, store: Store<any> = configureStore()) {
  return <Provider store={store}>
    <Router history={history}>{component}</Router>
  </Provider>;
}

export const shallow = (component: JSX.Element, store?: Store<any>) => enzymeShallow(wrap(component, store));
export const mount = (component: JSX.Element, store?: Store<any>) => enzymeMount(wrap(component, store));
