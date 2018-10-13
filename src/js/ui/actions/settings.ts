import { createAction } from 'redux-actions';
import { SettingsData } from '../reducers/settings';

/* tslint:disable max-line-length */
export const switchSettings: PActionCreator<SettingsGroup> = createAction('SETTINGS_SWITCH');
export const setSettings: PActionCreator<SettingsData> = createAction('SETTINGS_SET');
export const applySettings: PActionCreator<void> = createAction('SETTINGS_APPLY');
export const resetSettings: PActionCreator<SettingsData> = createAction('SETTINGS_RESET');
/* tslint:enable max-line-length */

export type ActionsTypes =
  ReturnType<typeof switchSettings> |
  ReturnType<typeof setSettings> |
  ReturnType<typeof applySettings> |
  ReturnType<typeof resetSettings>;
