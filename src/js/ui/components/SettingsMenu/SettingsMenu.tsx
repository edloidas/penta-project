import * as React from 'react';
import styled from 'styled-components';
import Navigation, { NavigationProps } from '../Navigation/Navigation';
import { AlignedFullscreen as Screen } from '../base';
import Title from '../texts/Title';
import SettingsMenuItem from './SettingsMenuItem';

const SettingsMenuHolder = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100rem;
  height: 100%;
  max-height: 70rem;
  padding: 10rem 8rem;
`;

const SettingsMenuActionsHolder = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type SettingsMenuProps = {
  handleReturnToMenu: () => void;
  handleApplySettings: (e?: MouseKeyboardEvent) => void;
  handleResetSettings: (e?: MouseKeyboardEvent) => void;
  hasUnsavedChanges: boolean;
} & NavigationProps;

const SettingsMenu: SFC<SettingsMenuProps> = (props: SettingsMenuProps) => (
  <Screen className="effect__appear">
    <SettingsMenuHolder>
      <Title text="Settings" theme={{ marginLeft: 2 }} />
      <Navigation
        navigationItems={props.navigationItems}
        activeKey={props.activeKey}
      />
      {props.hasUnsavedChanges ? (
        <SettingsMenuActionsHolder>
          <SettingsMenuItem
            key="Apply"
            name="Apply"
            to="/menu"
            clickHandler={props.handleApplySettings}
          />
          <SettingsMenuItem
            key="Reset"
            name="Reset"
            to="/menu"
            clickHandler={props.handleResetSettings}
          />
        </SettingsMenuActionsHolder>
      ) : (
        <SettingsMenuActionsHolder>
          <SettingsMenuItem
            key="Back"
            name="Back"
            to="/menu"
            clickHandler={props.handleReturnToMenu}
          />
        </SettingsMenuActionsHolder>
      )}
    </SettingsMenuHolder>
  </Screen>
);

export default SettingsMenu;
