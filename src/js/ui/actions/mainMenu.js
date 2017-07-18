// @flow

import { createAction } from 'redux-actions';

export const resumeGame = createAction('resume game');
export const startNewGame = createAction('new game');
export const showHero = createAction('show hero');
export const showSettings = createAction('show settings');
export const exitGame = createAction('exit game');
