import { createStore, applyMiddleware } from 'redux';

import { logger, router } from '../middleware';
import rootReducer from '../reducers';
import { State as StartState } from '../reducers/start';
import { State as GameState } from '../reducers/game';
import { State as SettingsState } from '../reducers/settings';

type RoutingState = {
  location: {
    pathname?: string,
    search?: string,
    hash?: string
  }
};

export type State = {
  routing: RoutingState,
  start: StartState,
  game: GameState,
  settings: SettingsState
};

export default function configure(initialState?: State) {
  const create = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(logger, router)(create);

  // $FlowIgnore
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
