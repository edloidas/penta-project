// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {opacity: 1;}
  50% {opacity: 0.5;}
  100% {opacity: 1;}
`;

const TextHolder = styled.div`
  padding: 5px;
  font-size: 2rem;
  animation: ${blink} linear 2s infinite;
  color: ${props => props.theme.color};
`;

type AwaitInputLoaderProps = { color?: string };

const AwaitInputLoader = ({ color = 'grey' }: AwaitInputLoaderProps) =>
  <TextHolder theme={{ color }}>Press Any Key</TextHolder>;

AwaitInputLoader.defaultProps = { color: 'grey' };

export default AwaitInputLoader;
