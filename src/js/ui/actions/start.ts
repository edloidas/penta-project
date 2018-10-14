import { createAction } from 'redux-actions';

export const finalizeStart: PActionCreator<boolean> = createAction('START_FINALIZE'); // prettier-ignore
export const closeStart: PActionCreator<boolean> = createAction('START_CLOSE');

export type ActionsTypes =
  | ReturnType<typeof finalizeStart>
  | ReturnType<typeof closeStart>;
