// @flow
import React from 'react';
import styled from 'styled-components';
import { Fullscreen, colors } from '../base';
import Logo from '../texts/Logo';
import InfiniteLoader from '../loaders/InfiniteLoader';
import AwaitInputLoader from '../loaders/AwaitInputLoader';

const Screen = Fullscreen.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bg};
  transition: opacity ${props => props.theme.duration}ms;
  opacity: ${props => (props.theme.isHiding ? 0 : 1)};
`;

const LoaderHolder = styled.div`
  position: absolute;
  width: 220px;
  bottom: 40px;
  left: 50%;
  margin: 0 0 0 -110px;
  text-align: center;
`;

type LogoScreenProps = {
  isLoading: boolean,
  isHiding: boolean,
  duration?: number
};

const LogoScreen = (props: LogoScreenProps) =>
  <Screen
    className="font__mono"
    theme={{ isHiding: props.isHiding, duration: props.duration }}>
    <Logo />
    <LoaderHolder>
      {props.isLoading
        ? <InfiniteLoader bg={colors.bgReverse} />
        : <AwaitInputLoader color={colors.fontDesc} />}
    </LoaderHolder>
  </Screen>;

LogoScreen.defaultProps = {
  duration: 1000
};

export default LogoScreen;
