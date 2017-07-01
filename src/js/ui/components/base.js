// @flow

import styled from 'styled-components';

type Colors = { [string]: string };

// eslint-disable-next-line import/prefer-default-export
export const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

// prettier-ignore
export const colors: Colors = {
  bg:           '#111',
  bgReverse:    '#f5f5f5',
  bgMenu:       '#1a1a1a',
  bgActive1:    '#1d1f21',
  bgActive2:    '#282a2e',
  bgActive3:    '#373b41',
  fontInactive: 'rgba(255, 255, 255, 0.2)',
  fontDesc:     '#c5c8c6',
  font:         '#fff',    // white
  accent:       '#b8860b', // darkgoldenrod
  hp:           '#b82739',
  eg:           '#08637e',
};
