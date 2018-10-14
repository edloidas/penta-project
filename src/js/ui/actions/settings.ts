import { createAction } from 'redux-actions';
import { SettingsData } from '../reducers/settings';

export const switchSettings: PActionCreator<SettingsGroup> = createAction('SETTINGS_SWITCH'); // prettier-ignore
export const setSettings: PActionCreator<SettingsData> = createAction('SETTINGS_SET'); // prettier-ignore
export const applySettings: PActionCreator<void> = createAction('SETTINGS_APPLY'); // prettier-ignore
export const resetSettings: PActionCreator<SettingsData> = createAction('SETTINGS_RESET'); // prettier-ignore

export type ActionsTypes =
  | ReturnType<typeof switchSettings>
  | ReturnType<typeof setSettings>
  | ReturnType<typeof applySettings>
  | ReturnType<typeof resetSettings>;
