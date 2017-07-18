// @flow

import { handleActions } from 'redux-actions';

const initialState = { isReady: false };

export default handleActions(
  {
    // eslint-disable-next-line object-shorthand
    'start ready'(state) {
      return Object.assign({}, state, { isReady: true });
    },
    // eslint-disable-next-line object-shorthand
    'close start'(state) {
      return state;
    }
  },
  initialState
);
