// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';
import merge from 'lodash.merge';

const flash = keyframes`
  15% {
    opacity: 0.5;
    padding: 0;
  }

  30% {
    opacity: 0.1;
    padding: 5px;
  }
`;

const LoaderHolder = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const LoaderSquare = styled.li`
  display: block;
  width: 20px;
  height: 20px;
  margin: 5px;
  padding: 5px;
  animation: ${flash} linear 2s infinite;
  animation-delay: ${props => props.theme.delay};
  box-sizing: border-box;
  opacity: 0.1;

  &::before {
    display: block;
    content: ' ';
    height: 100%;
    background-color: ${props => props.theme.bg};
  }
`;

type Theme = { bg: string };

const theme: Theme = { bg: 'black' };

type InfiniteLoaderProps = { theme?: Theme };

const InfiniteLoader: SFC<InfiniteLoaderProps> = (props: InfiniteLoaderProps) => (
  <LoaderHolder>
    <LoaderSquare theme={merge({}, theme, props.theme, { delay: '0.2s' })} />
    <LoaderSquare theme={merge({}, theme, props.theme, { delay: '0.4s' })} />
    <LoaderSquare theme={merge({}, theme, props.theme, { delay: '0.6s' })} />
    <LoaderSquare theme={merge({}, theme, props.theme, { delay: '0.8s' })} />
  </LoaderHolder>
);

InfiniteLoader.defaultProps = { theme };

export default InfiniteLoader;
