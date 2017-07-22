// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';

const glitch1 = keyframes`
  /* stylelint-disable declaration-block-single-line-max-declarations,
  block-closing-brace-space-before, block-opening-brace-space-after */
  0% { clip-path: polygon(0 10%, 100% 10%, 100% 30%, 0 30%); left: 7px; }
  20% { clip-path: polygon(0 80%, 100% 80%, 100% 90%, 0 90%); left: -6px; }
  40% { clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%); left: 6px; }
  60% { clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%); left: -5px; }
  80% { clip-path: polygon(0 90%, 100% 90%, 100% 100%, 0 100%); left: 7px; }
  100% { clip-path: polygon(0 10%, 100% 10%, 100% 30%, 0 30%); left: -6px; }
  /* stylelint-enable */
`;

const glitch2 = keyframes`
  /* stylelint-disable declaration-block-single-line-max-declarations,
  block-closing-brace-space-before, block-opening-brace-space-after */
  0% { clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%); left: -6px; }
  20% { clip-path: polygon(0 0%, 100% 0%, 100% 15%, 0 15%); left: 5px; }
  40% { clip-path: polygon(0 75%, 100% 75%, 100% 95%, 0 95%); left: 6px; }
  60% { clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%); left: -8px; }
  80% { clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%); left: 5px; }
  100% { clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%); left: -7px; }
  /* stylelint-enable */
`;

const Name = styled.div`
  position: relative;
  width: 19rem;
  margin: 0 0 0.5rem;
  padding: 0.25rem 1rem;
  border: none;
  background-color: #1a1a1a;
  text-align: left;
  font-family: 'Play', monospaced;
  font-size: 2rem;
  text-transform: uppercase;
  color: #aaa;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  user-select: none;

  &::after,
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.25rem 1rem;
    background-color: #1a1a1a;
    box-sizing: border-box;
  }

  &:hover {
    color: white;
    outline: none;

    &::after {
      text-shadow: -1px 0 red;
      animation: ${glitch1} 0.2s linear alternate;
    }

    &::before {
      text-shadow: 2px 0 blue;
      animation: ${glitch2} 0.2s linear alternate;
    }
  }
`;

const MainMenuItem = (props: { name: string }) =>
  <Name data-text={props.name}>
    {props.name}
  </Name>;

export default MainMenuItem;
