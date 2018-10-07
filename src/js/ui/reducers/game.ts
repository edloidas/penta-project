import { handleActions, Action as Action } from 'redux-actions';

export type State = { isRunning?: boolean };
type ResumeGameAction = Action<boolean>;
type StartNewGameAction = Action<boolean>;
type SaveGameAction = Action<boolean>;
type LoadGameAction = Action<boolean>;

type Payload = boolean;

const initialState: State = { isRunning: false };

export default handleActions<State, Payload>(
  {
    GAME_RESUME(state: State, action: ResumeGameAction): State {
      return Object.assign({}, state, { isRunning: action.payload });
    },
    GAME_START_NEW(state: State, action: StartNewGameAction): State {
      return Object.assign({}, state, { isRunning: action.payload });
    },
    GAME_SAVE(state: State, action: LoadGameAction): State {
      return Object.assign({}, state, { isRunning: action.payload });
    },
    GAME_LOAD(state: State, action: SaveGameAction): State {
      return Object.assign({}, state, { isRunning: action.payload });
    }
  },
  initialState
);
