// @flow

import { createAction } from 'redux-actions';

export const resumeGame: PActionCreator<any> = createAction('resume game');
export const startNewGame: PActionCreator<any> = createAction('new game');
export const showHero: PActionCreator<any> = createAction('show hero');
export const showSettings: PActionCreator<any> = createAction('show settings');
export const exitGame: PActionCreator<any> = createAction('exit game');
