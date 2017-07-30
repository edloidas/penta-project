// @flow
import React from 'react';
import styled from 'styled-components';
import Logo from '../texts/Logo';
import MainMenuItem, { type MainMenuItemProps } from './MainMenuItem';
import { Fullscreen } from '../base';

const Screen = Fullscreen.extend`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const MainMenuHolder = styled.div`
  position: relative;
  padding-left: 6rem;
`;

const LogoHolder = styled.div`
  position: absolute;
  top: -6rem;
  margin-left: -2rem;
  width: 23rem;
`;

type MainMenuProps = { menuItems: Array<MainMenuItemProps> };

const MainMenu = ({ menuItems }: MainMenuProps) =>
  // logo
  <Screen className="effect__appear">
    <MainMenuHolder>
      <LogoHolder>
        <Logo renderAuthor={false} fontSize={'0.5rem'} />
      </LogoHolder>
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
