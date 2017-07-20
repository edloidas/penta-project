// @flow

import { handleActions, type ActionType } from 'redux-actions';
import { startReady } from '../actions/startScreen';

type State = { isReady?: boolean, isClosed?: boolean };

const initialState: State = { isReady: false, isClosed: false };

export default handleActions(
  {
    // eslint-disable-next-line object-shorthand
    'start ready'(state: State, action: ActionType<typeof startReady>): State {
      // const changes =
      return Object.assign({}, state, { isReady: action.payload });
    },
    // eslint-disable-next-line object-shorthand
    'close start'(state: State): State {
      return state;
    }
  },
  initialState
);
