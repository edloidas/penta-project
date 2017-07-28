// @flow
import { createAction } from 'redux-actions';

// eslint-disable-next-line prettier/prettier
export const resumeGame: PActionCreator<boolean> = createAction('GAME_RESUME');
export const startNewGame: PActionCreator<any> = createAction('GAME_START_NEW');
export const saveGame: PActionCreator<any> = createAction('GAME_SAVE');
export const loadGame: PActionCreator<any> = createAction('GAME_LOAD');
