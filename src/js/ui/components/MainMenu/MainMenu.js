// @flow

import React from 'react';
import styled from 'styled-components';
import MainMenuItem from './MainMenuItem';
import { Fullscreen } from '../base';

export type MenuItemProperties = {
  name: string,
  to: string,
  // TODO: Remove `?` in future
  clickHandler?: (e?: MouseEvent) => void
};

const Screen = Fullscreen.extend`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const MainMenuHolder = styled.div`padding-left: 6rem;`;

type MainMenuProps = { menuItems: Array<MenuItemProperties> };

const MainMenu = ({ menuItems }: MainMenuProps) =>
  // logo
  <Screen className="effect__appear">
    <MainMenuHolder>
      {menuItems.map((item: MenuItemProperties) =>
        <MainMenuItem
          key={item.name}
          name={item.name}
          to={item.to}
          onClick={item.clickHandler}
        />
      )}
    </MainMenuHolder>
  </Screen>;
// v0.0.1-alpha.2 pre-release

export default MainMenu;
