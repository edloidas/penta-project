import { merge } from 'lodash';
import { Action, handleActions } from 'redux-actions';

export type SettingsData = {
  graphics?: {
    screenSize?: ScreenSize;
    frameRateLimit?: FrameRate;
    vSync?: VSync;
    antiAliasing?: AntiAliasing;
  };
};

export type State = {
  activeGroup: SettingsGroup;
  hasUnsavedChanges: boolean;
  data: SettingsData;
};

type SwitchSettingsAction = Action<SettingsGroup>;
type SetSettingsAction = Action<SettingsData>;
type ApplySettingsAction = Action<void>;
type ResetSettingsAction = Action<SettingsData>;

type Payload = SettingsData | SettingsGroup | void;

const initialState: State = {
  activeGroup: 'graphics',
  hasUnsavedChanges: false,
  data: {
    graphics: {
      screenSize: '1920x1080',
      frameRateLimit: '60fps',
      vSync: 'on',
      antiAliasing: 'off',
    },
  },
};

export default handleActions<State, Payload>(
  {
    SETTINGS_SWITCH(state: State, action: SwitchSettingsAction): State {
      return Object.assign({}, state, { activeGroup: action.payload });
    },
    SETTINGS_SET(state: State, action: SetSettingsAction): State {
      return merge({}, state, {
        data: action.payload,
        hasUnsavedChanges: true,
      });
    },
    // eslint-disable-next-line no-unused-vars
    SETTINGS_APPLY(state: State, action: ApplySettingsAction): State {
      return Object.assign({}, state, { hasUnsavedChanges: false });
    },
    SETTINGS_RESET(state: State, action: ResetSettingsAction): State {
      return merge({}, state, {
        data: action.payload,
        hasUnsavedChanges: false,
      });
    },
  },
  initialState
);
