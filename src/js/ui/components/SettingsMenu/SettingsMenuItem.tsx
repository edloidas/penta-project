import React from 'react';
import Button, { ButtonProps } from '../inputs/Button';

export type SettingsMenuItemProps = ButtonProps;

const SettingsMenuItem: SFC<SettingsMenuItemProps> = (props: SettingsMenuItemProps) => (
  <Button {...props} theme={{ width: 10 }} />
);

export default SettingsMenuItem;
