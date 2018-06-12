import { handleActions, Action as Action } from 'redux-actions';
import merge from 'lodash.merge';
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

type SwitchSettingsAction = Action<typeof switchSettings>;
type SetSettingsAction = Action<typeof setSettings>;
type ApplySettingsAction = Action<typeof applySettings>;
type ResetSettingsAction = Action<typeof resetSettings>;

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
      return merge({}, state, {
        data: action.payload,
        hasUnsavedChanges: true
      });
    },
    // eslint-disable-next-line no-unused-vars
    SETTINGS_APPLY(state: State, action: ApplySettingsAction): State {
      return Object.assign({}, state, { hasUnsavedChanges: false });
    },
    SETTINGS_RESET(state: State, action: ResetSettingsAction): State {
      return merge({}, state, {
        data: action.payload,
        hasUnsavedChanges: false
      });
    }
  },
  initialState
);
