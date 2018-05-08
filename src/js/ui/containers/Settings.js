// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import clone from 'lodash.clonedeep';
import * as SettingsActions from '../actions/settings';
import { type SettingsData } from '../reducers/settings';
import SettingsMenu from '../components/SettingsMenu/SettingsMenu';
import { type NavigationItemProps } from '../components/Navigation/NavigationItem';
import { texts } from '../components/base';
import { type State } from '../store';
import Focusable from './Focusable';

function checkActivateEvent(event?: MouseKeyboardEvent) {
  if (event != null) {
    event.stopPropagation();
    event.preventDefault();
    const e = event.nativeEvent || event;
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
    this.handleResetSettings = this.handleResetSettings.bind(this);

    const { settingsGroup } = texts;
    this.navigationItems = settingsGroup.map(name => ({
      name,
      dataKey: name,
      clickHandler: this.handleSwitchGroup
    }));
  }

  props: Props;

  handleSwitchGroup: (e?: MouseKeyboardEvent) => void;
  handleSetSettings: (value: string) => void;
  handleApplySettings: (e?: MouseKeyboardEvent) => void;
  handleResetSettings: (e?: MouseKeyboardEvent) => void;

  navigationItems: Array<NavigationItemProps>;

  handleSwitchGroup(e?: MouseKeyboardEvent) {
    if (checkActivateEvent(e) && e && e.currentTarget) {
      const key = e.currentTarget.getAttribute('data-key');
      const { settingsGroup } = texts;
      const group = settingsGroup.find(v => v === key) || settingsGroup[0];
      this.props.actions.switchSettings(group);
      e.currentTarget.blur();
    }
  }

  handleSetSettings(data: SettingsData) {
    this.props.actions.setSettings(data);
  }

  handleApplySettings(e?: MouseKeyboardEvent) {
    if (checkActivateEvent(e)) {
      this.props.actions.applySettings();
    }
  }

  handleResetSettings(e?: MouseKeyboardEvent) {
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
          handleApplySettings={this.handleApplySettings}
          handleResetSettings={this.handleResetSettings}
          navigationItems={this.navigationItems}
          activeKey={this.props.activeGroup}
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
    data: clone(settings.data)
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(SettingsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
