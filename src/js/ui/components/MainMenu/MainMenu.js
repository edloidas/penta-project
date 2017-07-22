// @flow

import React from 'react';
import styled from 'styled-components';
import MainMenuItem from './MainMenuItem';
import { Fullscreen } from '../base';

const Screen = Fullscreen.extend`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const MainMenuHolder = styled.div`padding-left: 6rem;`;

const MainMenu = () =>
  // logo
  <Screen className="effect__appear">
    <MainMenuHolder>
      <MainMenuItem name="Resume" />
      <MainMenuItem name="New Game" />
      <MainMenuItem name="Load Game" />
      <MainMenuItem name="Settings" />
      <MainMenuItem name="Exit" />
    </MainMenuHolder>
  </Screen>;
// v0.0.1-alpha.2 pre-release

export default MainMenu;
