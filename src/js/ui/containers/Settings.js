// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import deepMerge from 'deepmerge';
import * as SettingsActions from '../actions/settings';
import { type SettingsData, type SettingsGroup } from '../reducers/settings';
import { type State } from '../store';
import Focusable from './Focusable';
import SettingsMenu from '../components/SettingsMenu/SettingsMenu';

function checkActivateEvent(e?: MouseEvent | KeyboardEvent) {
  if (e != null) {
    e.stopPropagation();
    e.preventDefault();
    const isMainButtonClicked = e instanceof MouseEvent && e.button === 0;
    const isMainKeyPressed =
      e instanceof KeyboardEvent && (e.code === 'Enter' || e.code === 'Space');
    return isMainButtonClicked || isMainKeyPressed;
  }
  return false;
}

type Props = {
  activeGroup: SettingsGroup,
  hasUnsavedChanges: boolean,
  data: SettingsData,
  actions: {
    switchSettings: typeof SettingsActions.switchSettings,
    setSettings: typeof SettingsActions.setSettings,
    applySettings: typeof SettingsActions.applySettings,
    resetSettings: typeof SettingsActions.resetSettings
  }
};

// eslint-disable-next-line react/prefer-stateless-function
class Settings extends Focusable<Props> {
  constructor(props) {
    super(props);
    this.handleSwitchGroup = this.handleSwitchGroup.bind(this);
    this.handleSetSettings = this.handleSetSettings.bind(this);
    this.handleApplySettings = this.handleApplySettings.bind(this);
    this.handleResetGroup = this.handleResetGroup.bind(this);
  }

  props: Props;

  handleSwitchGroup: (e?: MouseKeyboardEvent) => void;
  handleSetSettings: (value: string) => void;
  handleApplySettings: (e?: MouseKeyboardEvent) => void;
  handleResetGroup: (e?: MouseKeyboardEvent) => void;

  handleSwitchGroup(e?: MouseKeyboardEvent) {
    if (checkActivateEvent(e)) {
      this.props.actions.switchSettings('graphics');
    }
  }

  handleSetSettings(data: SettingsData) {
    this.props.actions.setSettings(data);
  }

  handleApplySettings(e?: MouseEvent | KeyboardEvent) {
    if (checkActivateEvent(e)) {
      this.props.actions.applySettings();
    }
  }

  handleResetGroup(e?: MouseEvent | KeyboardEvent) {
    if (checkActivateEvent(e)) {
      this.props.actions.resetSettings(this.props.data);
    }
  }

  render() {
    return (
      <div
        tabIndex="0"
        role="button"
        ref={div => {
          this.focusable = div;
        }}>
        <SettingsMenu
          handleSwitchGroup={this.handleSwitchGroup}
          handleSetSettings={this.handleSetSettings}
          handleApplySettings={this.handleApplySettings}
          handleResetGroup={this.handleResetGroup}
        />
      </div>
    );
  }
}

function mapStateToProps(state: State) {
  const { settings } = state;
  return {
    activeGroup: settings.activeGroup,
    hasUnsavedChanges: settings.hasUnsavedChanges,
    data: deepMerge({}, settings.data)
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(SettingsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
