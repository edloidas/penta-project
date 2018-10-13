import { createAction } from 'redux-actions';

/* tslint:disable max-line-length */
export const resumeGame: PActionCreator<boolean> = createAction('GAME_RESUME');
export const startNewGame: PActionCreator<boolean> = createAction('GAME_START_NEW');
export const saveGame: PActionCreator<boolean> = createAction('GAME_SAVE');
export const loadGame: PActionCreator<boolean> = createAction('GAME_LOAD');
/* tslint:enable max-line-length */

export type ActionsTypes =
  ReturnType<typeof resumeGame> |
  ReturnType<typeof startNewGame> |
  ReturnType<typeof saveGame> |
  ReturnType<typeof loadGame>;
