// @flow

import React from 'react';
import MainMenuItem from '../components/MainMenu/MainMenuItem';

const MainMenu = () =>
  <div>
    <MainMenuItem name="Resume" />
    <MainMenuItem name="New Game" />
    <MainMenuItem name="Load Game" />
    <MainMenuItem name="Settings" />
    <MainMenuItem name="Exit" />
  </div>;

export default MainMenu;
