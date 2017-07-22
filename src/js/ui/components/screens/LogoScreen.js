// @flow

import React from 'react';
import styled from 'styled-components';
import { Fullscreen, colors } from '../base';
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

const NameHolder = styled.div`
  position: relative;
  text-align: center;
`;

const Author = styled.div`
  position: absolute;
  width: 100%;
  top: -2.5rem;
  font-size: 1.25rem;
  font-weight: lighter;
  text-transform: uppercase;
  color: ${colors.fontInactive};
`;

const Title = styled.div`
  position: relative;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: ${colors.font};
`;

const Description = styled.div`
  margin: -0.4rem 0 0 0;
  font-size: 2rem;
  text-transform: lowercase;
  color: ${colors.accent};
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
    <NameHolder>
      <Author>edloidas production</Author>
      <Title>Penta Project</Title>
      <Description>A Cyberpunk Action Game</Description>
    </NameHolder>
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
