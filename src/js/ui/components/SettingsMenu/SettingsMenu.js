// @flow
import React from 'react';
import styled from 'styled-components';
import Title from '../texts/Title';
import { AlignedFullscreen as Screen } from '../base';

const SettingsMenuHolder = styled.div`
  position: relative;
  padding-left: 8rem;
`;
// margin-top: 4rem;
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
    </SettingsMenuHolder>
  </Screen>
);
// groups
//   groupItem
// settings item
// Apply Reset

export default SettingsMenu;
