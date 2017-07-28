// @flow

import React from 'react';
import styled from 'styled-components';
import MainMenuItem, { type MainMenuItemProps } from './MainMenuItem';
import { Fullscreen } from '../base';

const Screen = Fullscreen.extend`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const MainMenuHolder = styled.div`padding-left: 6rem;`;

type MainMenuProps = { menuItems: Array<MainMenuItemProps> };

const MainMenu = ({ menuItems }: MainMenuProps) =>
  // logo
  <Screen className="effect__appear">
    <MainMenuHolder>
      {menuItems.map((item: MainMenuItemProps) =>
        <MainMenuItem
          key={item.name}
          name={item.name}
          to={item.to}
          clickHandler={item.clickHandler}
        />
      )}
    </MainMenuHolder>
  </Screen>;
// v0.0.1-alpha.2 pre-release

export default MainMenu;
