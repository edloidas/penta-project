// @flow

import { handleActions, type ActionType } from 'redux-actions';
import { exitGame } from '../actions/menu';

type State = { isExited: boolean };

const initialState: State = { isExited: false };

export default handleActions(
  {
    // eslint-disable-next-line object-shorthand
    'exit game'(state: State, action: ActionType<typeof exitGame>): State {
      return Object.assign({}, state, { isExited: action.payload });
    }
  },
  initialState
);
