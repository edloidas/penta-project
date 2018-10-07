import { createAction } from 'redux-actions';
import { SettingsData } from '../reducers/settings';

/* eslint-disable prettier/prettier */
export const switchSettings: PActionCreator<SettingsGroup> = createAction('SETTINGS_SWITCH');
export const setSettings: PActionCreator<SettingsData> = createAction('SETTINGS_SET');
export const applySettings: PActionCreator<void> = createAction('SETTINGS_APPLY');
export const resetSettings: PActionCreator<SettingsData> = createAction('SETTINGS_RESET');

export type ActionsTypes =
  ReturnType<typeof switchSettings> |
  ReturnType<typeof setSettings> |
  ReturnType<typeof applySettings> |
  ReturnType<typeof resetSettings>;
