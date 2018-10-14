import { cloneDeep } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as SettingsActions from '../actions/settings';
import { NavigationItemProps } from '../components/Navigation/NavigationItem';
import SettingsMenu from '../components/SettingsMenu/SettingsMenu';
import { texts } from '../components/base';
import { SettingsData } from '../reducers/settings';
import { State } from '../store';
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
  activeGroup: SettingsGroup;
  hasUnsavedChanges: boolean;
  data: SettingsData;
  actions: {
    switchSettings: typeof SettingsActions.switchSettings;
    setSettings: typeof SettingsActions.setSettings;
    applySettings: typeof SettingsActions.applySettings;
    resetSettings: typeof SettingsActions.resetSettings;
  };
};

class Settings extends Focusable<Props> {
  props: Props;

  navigationItems: NavigationItemProps[];

  constructor(props) {
    super(props);
    this.handleSwitchGroup = this.handleSwitchGroup.bind(this);
    this.handleSetSettings = this.handleSetSettings.bind(this);
    this.handleReturnToMenu = this.handleReturnToMenu.bind(this);
    this.handleApplySettings = this.handleApplySettings.bind(this);
    this.handleResetSettings = this.handleResetSettings.bind(this);

    const { settingsGroup } = texts;
    this.navigationItems = settingsGroup.map(name => ({
      name,
      dataKey: name,
      clickHandler: this.handleSwitchGroup,
    }));
  }

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

  handleReturnToMenu() {
    const { settingsGroup } = texts;
    this.props.actions.switchSettings(settingsGroup[0]);
  }

  handleApplySettings(e?: MouseKeyboardEvent) {
    if (checkActivateEvent(e)) {
      this.props.actions.applySettings();
      this.handleReturnToMenu();
    }
  }

  handleResetSettings(e?: MouseKeyboardEvent) {
    if (checkActivateEvent(e)) {
      this.props.actions.resetSettings(this.props.data);
      this.handleReturnToMenu();
    }
  }

  render() {
    return (
      <div>
        <SettingsMenu
          handleReturnToMenu={this.handleReturnToMenu}
          handleApplySettings={this.handleApplySettings}
          handleResetSettings={this.handleResetSettings}
          navigationItems={this.navigationItems}
          activeKey={this.props.activeGroup}
          hasUnsavedChanges={this.props.hasUnsavedChanges}
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
    data: cloneDeep(settings.data),
  };
}

function mapDispatchToProps(dispatch: Dispatch<SettingsActions.ActionsTypes>) {
  return {
    actions: bindActionCreators(SettingsActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
