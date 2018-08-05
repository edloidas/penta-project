import { createAction } from 'redux-actions';
import { SettingsData } from '../reducers/settings';

/* eslint-disable prettier/prettier */
export const switchSettings: PActionCreator<SettingsGroup> = createAction('SETTINGS_SWITCH');
export const setSettings: PActionCreator<Object> = createAction('SETTINGS_SET');
export const applySettings: PActionCreator<Object> = createAction('SETTINGS_APPLY');
export const resetSettings: PActionCreator<Object> = createAction('SETTINGS_RESET');
/* eslint-enable prettier/prettier */
