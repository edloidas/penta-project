// @flow

import { createAction } from 'redux-actions';

// Start screen
export const startReady: PActionCreator<boolean> = createAction('start ready');
export const closeStart: PActionCreator<void> = createAction('close start');
