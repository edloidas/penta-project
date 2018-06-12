import React from 'react';
import Button, { ButtonProps } from '../inputs/Button';

export type MainMenuItemProps = ButtonProps;

const MainMenuItem: SFC<MainMenuItemProps> = (props: MainMenuItemProps) => (
  <Button
    {...props}
    theme={{ width: 19, textAlign: 'left', direction: 'column' }}
  />
);

export default MainMenuItem;
