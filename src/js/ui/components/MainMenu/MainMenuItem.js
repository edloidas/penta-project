// @flow
import React from 'react';
import Button, { type ButtonProps } from '../inputs/Button';

export type MainMenuItemProps = ButtonProps;

const MainMenuItem = (props: MainMenuItemProps) => (
  <Button
    {...props}
    theme={{ width: 19, textAlign: 'left', direction: 'column' }}
  />
);

export default MainMenuItem;
