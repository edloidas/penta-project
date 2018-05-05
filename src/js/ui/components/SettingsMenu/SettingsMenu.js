// @flow
import React from 'react';
import styled from 'styled-components';
import Title from '../texts/Title';
import { AlignedFullscreen as Screen } from '../base';
import SettingsMenuItem from './SettingsMenuItem';

const SettingsMenuHolder = styled.div`
  position: relative;
  padding: 10rem 0 10rem 8rem;
  height: 100%;
  max-height: 50rem;
`;

const SettingsMenuActionsHolder = styled.div`
  display: flex;
  justify-content: flex-end;
`;

/* eslint-disable no-unused-vars, react/no-unused-prop-types */
type SettingsMenuProps = {
  handleSwitchGroup: (e?: MouseKeyboardEvent) => void,
  handleSetSettings: (value: string) => void,
  handleApplySettings: (e?: MouseKeyboardEvent) => void,
  handleResetGroup: (e?: MouseKeyboardEvent) => void
};

const SettingsMenu = (props: SettingsMenuProps) => (
  <Screen className="effect__appear">
    <SettingsMenuHolder>
      <Title text="Settings" />
      <SettingsMenuActionsHolder>
        <SettingsMenuItem
          key="Apply"
          name="Apply"
          clickHandler={props.handleApplySettings}
        />
        <SettingsMenuItem
          key="Reset"
          name="Reset"
          clickHandler={props.handleApplySettings}
        />
      </SettingsMenuActionsHolder>
    </SettingsMenuHolder>
  </Screen>
);
// groups
//   groupItem
// settings item
// Apply Reset

export default SettingsMenu;
