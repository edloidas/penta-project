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
  width: 140px;
  bottom: 20px;
  left: 50%;
  margin: 0 0 0 -70px;
`;

type LogoScreenProps = { isLoading: boolean };

const LogoScreen = (props: LogoScreenProps) =>
  <Screen className="font__mono">
    <NameHolder>
      <Author>edloidas production</Author>
      <Title>Penta Project</Title>
      <Description>A Cyberpunk Action Game</Description>
    </NameHolder>
    <LoaderHolder>
      {props.isLoading
        ? <InfiniteLoader bg={colors.bgReverse} />
        : <AwaitInputLoader color={colors.fontInactive} />}
    </LoaderHolder>
  </Screen>;

export default LogoScreen;
