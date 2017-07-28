// @flow
import { createStore, applyMiddleware } from 'redux';

import { logger, router } from '../middleware';
import rootReducer from '../reducers';
import { type State as StartState } from '../reducers/start';
import { type State as GameState } from '../reducers/game';

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
  game: GameState
};

export default function configure(initialState?: State) {
  const create = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(logger, router)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('../reducers');
      // $FlowIgnore
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
