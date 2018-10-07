import { createAction } from 'redux-actions';

/* eslint-disable prettier/prettier */
export const finalizeStart: PActionCreator<boolean> = createAction('START_FINALIZE');
export const closeStart: PActionCreator<boolean> = createAction('START_CLOSE');

export type ActionsTypes =
  ReturnType<typeof finalizeStart> |
  ReturnType<typeof closeStart>;
