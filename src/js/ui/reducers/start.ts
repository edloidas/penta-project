import { handleActions, Action as Action } from 'redux-actions';

export type State = { isReady?: boolean, isClosed?: boolean };
type FinalizeStartAction = Action<boolean>;
type CloseStartAction = Action<boolean>;

type Payload = boolean;

const initialState: State = { isReady: false, isClosed: false };

export default handleActions<State, Payload>(
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
