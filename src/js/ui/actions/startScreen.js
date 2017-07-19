// @flow

import { createAction } from 'redux-actions';

// Start screen
export const startReady: PActionCreator<any> = createAction('start ready');
export const closeStart: PActionCreator<any> = createAction('close start');
