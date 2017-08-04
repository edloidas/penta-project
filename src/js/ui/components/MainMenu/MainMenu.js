// @flow
import React from 'react';
import styled from 'styled-components';
import Logo from '../texts/Logo';
import Version from '../texts/Version';
import Copyright from '../texts/Copyright';
import MainMenuItem, { type MainMenuItemProps } from './MainMenuItem';
import { Fullscreen } from '../base';

const Screen = Fullscreen.extend`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const MainMenuHolder = styled.div`
  position: relative;
  margin-top: 4rem;
  padding-left: 8rem;
`;

const LogoHolder = styled.div`
  position: absolute;
  top: -6rem;
  margin-left: -2rem;
  width: 23rem;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0 0.5em;
  text-align: center;
  opacity: 0.75;
`;

const VersionHolder = styled.div`
  position: absolute;
  left: 8rem;
  width: 19rem;
`;

type MainMenuProps = { menuItems: Array<MainMenuItemProps> };

const MainMenu = ({ menuItems }: MainMenuProps) =>
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
    <Footer className="font__accent">
      <VersionHolder>
        <Version />
      </VersionHolder>
      <Copyright />
    </Footer>
  </Screen>;

export default MainMenu;
