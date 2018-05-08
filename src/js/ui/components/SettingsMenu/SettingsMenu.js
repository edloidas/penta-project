// @flow
import React from 'react';
import styled from 'styled-components';
import Title from '../texts/Title';
import { AlignedFullscreen as Screen } from '../base';
import SettingsMenuItem from './SettingsMenuItem';
import Navigation, { type NavigationProps } from '../Navigation/Navigation';

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

/* eslint-disable no-unused-vars, react/no-unused-prop-types */
type SettingsMenuProps = {
  handleApplySettings: (e?: MouseKeyboardEvent) => void,
  handleResetSettings: (e?: MouseKeyboardEvent) => void
} & NavigationProps;

const SettingsMenu = (props: SettingsMenuProps) => (
  <Screen className="effect__appear">
    <SettingsMenuHolder>
      <Title text="Settings" theme={{ marginLeft: 2 }} />
      <Navigation
        navigationItems={props.navigationItems}
        activeKey={props.activeKey}
      />
      <SettingsMenuActionsHolder>
        <SettingsMenuItem
          key="Apply"
          name="Apply"
          clickHandler={props.handleApplySettings}
        />
        <SettingsMenuItem
          key="Reset"
          name="Reset"
          clickHandler={props.handleResetSettings}
        />
      </SettingsMenuActionsHolder>
    </SettingsMenuHolder>
  </Screen>
);

export default SettingsMenu;
