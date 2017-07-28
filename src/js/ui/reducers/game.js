// @flow
import { handleActions, type ActionType } from 'redux-actions';
import { resumeGame, startNewGame, saveGame, loadGame } from '../actions/game';

export type State = { isRunning?: boolean };
type ResumeGameAction = ActionType<typeof resumeGame>;
type StartNewGameAction = ActionType<typeof startNewGame>;
type SaveGameAction = ActionType<typeof saveGame>;
type LoadGameAction = ActionType<typeof loadGame>;

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
