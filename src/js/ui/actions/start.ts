import { createAction } from 'redux-actions';

/* tslint:disable max-line-length */
export const finalizeStart: PActionCreator<boolean> = createAction('START_FINALIZE');
export const closeStart: PActionCreator<boolean> = createAction('START_CLOSE');
/* tslint:enable max-line-length */

export type ActionsTypes =
  ReturnType<typeof finalizeStart> |
  ReturnType<typeof closeStart>;
