import { handleActions, Action as Action } from 'redux-actions';
import { resumeGame, startNewGame, saveGame, loadGame } from '../actions/game';

export type State = { isRunning?: boolean };
type ResumeGameAction = Action<typeof resumeGame>;
type StartNewGameAction = Action<typeof startNewGame>;
type SaveGameAction = Action<typeof saveGame>;
type LoadGameAction = Action<typeof loadGame>;

const initialState: State = { isRunning: false };

export default handleActions(
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
