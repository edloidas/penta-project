// @flow

import { handleActions, type ActionType } from 'redux-actions';
import { finalizeStart, closeStart } from '../actions/start';

export type State = { isReady?: boolean, isClosed?: boolean };
type FinalizeStartAction = ActionType<typeof finalizeStart>;
type CloseStartAction = ActionType<typeof closeStart>;

const initialState: State = { isReady: false, isClosed: false };

export default handleActions(
  {
    START_FINALIZE(state: State, action: FinalizeStartAction): State {
      return Object.assign({}, state, { isReady: action.payload });
    },
    START_CLOSE(state: State, action: CloseStartAction): State {
      return Object.assign({}, state, { isClosed: action.payload });
    }
  },
  initialState
);
