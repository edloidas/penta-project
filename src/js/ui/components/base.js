// @flow
import styled from 'styled-components';

type Graphics = {
  screenSize: Array<ScreenSize>,
  windowMode: Array<WindowMode>,
  frameRate: Array<FrameRate>,
  vSync: Array<VSync>,
  antiAliasing: Array<AntiAliasing>
};

type Colors = { [string]: string };
type Texts = {
  [string]: string,
  settingsGroup: Array<SettingsGroup>,
  graphics: Graphics
};

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

export const AlignedFullscreen = Fullscreen.extend`
  display: flex;
  justify-content: left;
  align-items: center;
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
  eg:           '#08637e'
};

export const texts: Texts = {
  author: 'edloidas production',
  project: 'Penta Project',
  genre: 'A Cyberpunk Action Game',
  // $FlowIgnore: global variable from webpack
  version: GAME_VERSION,
  settingsGroup: ['graphics', 'sound', 'controls'],
  graphics: {
    screenSize: ['1920x1080', '2560x1400'],
    windowMode: ['fullscreen', 'windowed'],
    frameRate: ['30fps', '60fps', '120fps', 'unlimited'],
    vSync: ['off', 'on'],
    antiAliasing: ['off', 'x2', 'x4']
  }
};
