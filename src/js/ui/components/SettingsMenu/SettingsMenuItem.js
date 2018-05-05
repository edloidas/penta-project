// @flow
import React from 'react';
import Button, { type ButtonProps } from '../inputs/Button';

export type SettingsMenuItemProps = ButtonProps;

const SettingsMenuItem = (props: SettingsMenuItemProps) => (
  <Button {...props} theme={{ width: 10 }} />
);

export default SettingsMenuItem;
