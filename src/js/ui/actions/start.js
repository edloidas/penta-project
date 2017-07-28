// @flow
import { createAction } from 'redux-actions';

// eslint-disable-next-line prettier/prettier
export const finalizeStart: PActionCreator<boolean> = createAction('START_FINALIZE');
export const closeStart: PActionCreator<boolean> = createAction('START_CLOSE');
