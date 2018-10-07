import { createAction } from 'redux-actions';

/* eslint-disable prettier/prettier */
export const resumeGame: PActionCreator<boolean> = createAction('GAME_RESUME');
export const startNewGame: PActionCreator<boolean> = createAction('GAME_START_NEW');
export const saveGame: PActionCreator<boolean> = createAction('GAME_SAVE');
export const loadGame: PActionCreator<boolean> = createAction('GAME_LOAD');
