import React from 'react';
import styled, { keyframes } from 'styled-components';
import merge from 'lodash.merge';

const blink = keyframes`
  0% {opacity: 0.2;}
  50% {opacity: 1;}
  100% {opacity: 0.2;}
`;

const TextHolder = styled.button`
  padding: 5px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1.5rem;
  text-align: center;
  animation: ${blink} ease-in-out 3s infinite 0.5s;
  color: ${props => props.theme.color};
  opacity: 0.2;
`;

type Theme = { color: string };

const theme: Theme = { color: 'grey' };

type AwaitInputLoaderProps = { theme?: Theme };

const AwaitInputLoader: SFC<AwaitInputLoaderProps> = (props: AwaitInputLoaderProps) => (
  <TextHolder
    autoFocus
    theme={merge({}, theme, props.theme)}
    className="font__mono">
    Press Any Key
  </TextHolder>
);

AwaitInputLoader.defaultProps = { theme };

export default AwaitInputLoader;
