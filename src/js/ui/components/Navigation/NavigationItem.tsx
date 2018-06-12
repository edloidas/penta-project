import React from 'react';
import styled from 'styled-components';
import { colors } from '../base';

/* stylelint-disable declaration-colon-newline-after */
const Name = styled.button`
  flex: 1 1 100%;
  box-sizing: border-box;
  padding: 0.25rem 1rem;
  background-color: ${props =>
    props.theme.isActive ? colors.bgActive2 : colors.bgMenu};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
  color: ${colors.fontDesc};
  border: 0;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }

  &:hover,
  &:focus {
    background-color: ${colors.bgActive3};
    color: ${colors.font};
  }
`;
/* stylelint-enable declaration-colon-newline-after */

export type NavigationItemProps = {
  name: string,
  dataKey: SettingsGroup,
  active?: boolean,
  clickHandler?: (e?: MouseKeyboardEvent) => void
};

const NavigationItem: SFC<NavigationItemProps> = (props: NavigationItemProps) => (
  <Name
    data-key={props.dataKey}
    tabIndex={0}
    onClick={props.clickHandler}
    theme={{ isActive: props.active }}>
    {props.name}
  </Name>
);

NavigationItem.defaultProps = {
  active: false,
  clickHandler: null
};

export default NavigationItem;
