/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Fullscreen } from '../base';
import InfiniteLoader from '../loaders/InfiniteLoader';

const Screen = Fullscreen.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
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
  color: rgba(255, 255, 255, 0.2);
`;

const Title = styled.div`
  position: relative;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: white;
`;

const Description = styled.div`
  margin: -0.4rem 0 0 0;
  font-size: 2rem;
  text-transform: lowercase;
  color: darkgoldenrod;
`;

const LoaderHolder = styled.div`
  position: absolute;
  width: 140px;
  bottom: 20px;
  left: 50%;
  margin: 0 0 0 -70px;
`;

const LogoScreen = () => (
  <Screen classNameHolder="font__default">
    <NameHolder>
      <Author>edloidas production</Author>
      <Title>Penta Project</Title>
      <Description>A Cyberpunk Action Game</Description>
    </NameHolder>
    <LoaderHolder><InfiniteLoader bg="white" /></LoaderHolder>
  </Screen>
);

export default LogoScreen;
