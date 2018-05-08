// @flow
import { handleActions, type ActionType } from 'redux-actions';
import {
  switchSettings,
  setSettings,
  applySettings,
  resetSettings
} from '../actions/settings';

export type SettingsData = {
  graphics?: {
    screenSize?: ScreenSize,
    frameRateLimit?: FrameRate,
    vSync?: VSync,
    antiAliasing?: AntiAliasing
  }
};

export type State = {
  activeGroup: SettingsGroup,
  hasUnsavedChanges: boolean,
  data: SettingsData
};

type SwitchSettingsAction = ActionType<typeof switchSettings>;
type SetSettingsAction = ActionType<typeof setSettings>;
type ApplySettingsAction = ActionType<typeof applySettings>;
type ResetSettingsAction = ActionType<typeof resetSettings>;

const initialState: State = {
  activeGroup: 'graphics',
  hasUnsavedChanges: false,
  data: {
    graphics: {
      screenSize: '1920x1080',
      frameRateLimit: '60fps',
      vSync: 'on',
      antiAliasing: 'off'
    }
  }
};

export default handleActions(
  {
    SETTINGS_SWITCH(state: State, action: SwitchSettingsAction): State {
      return Object.assign({}, state, { activeGroup: action.payload });
    },
    SETTINGS_SET(state: State, action: SetSettingsAction): State {
      return Object.assign({}, state, {
        data: action.payload,
        hasUnsavedChanges: true
      });
    },
    // eslint-disable-next-line no-unused-vars
    SETTINGS_APPLY(state: State, action: ApplySettingsAction): State {
      return Object.assign({}, state, { hasUnsavedChanges: false });
    },
    SETTINGS_RESET(state: State, action: ResetSettingsAction): State {
      return Object.assign({}, state, {
        data: action.payload,
        hasUnsavedChanges: false
      });
    }
  },
  initialState
);
