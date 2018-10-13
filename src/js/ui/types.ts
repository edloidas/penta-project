/* tslint:disable max-line-length */
declare type Null = null | void;
//
// webpack
//
interface NodeModule {
  hot: {
    accept(path: string, callback: () => void): void;
  };
}

declare var module: NodeModule;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: () => ((...args: any[]) => any);
}

//
// Global
//
declare var GAME_VERSION: string;

//
// Components
//
declare type SFC<P = {}> = React.SFC<P>;

//
// Actions
//
declare type PAction<Payload> = ReduxActions.Action<Payload>;
declare type PActionCreator<Payload> = ReduxActions.ActionFunctionAny<PAction<Payload>>;

//
// Settings
//
declare type SettingsGroup = 'graphics' | 'sound' | 'controls';

//
//   Graphics
//
declare type ScreenSize = '1920x1080' | '2560x1400';
declare type WindowMode = 'fullscreen' | 'windowed';
declare type FrameRate = '30fps' | '60fps' | '120fps' | 'unlimited';
declare type VSync = 'off' | 'on';
declare type AntiAliasing = 'off' | 'x2' | 'x4';

//
// Events
//
// declare type MouseKeyboardEvent = MouseEvent | KeyboardEvent;
declare type MouseKeyboardEvent = React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
declare type CustomMouseKeyboardEvent<T extends HTMLElement = HTMLElement> = React.MouseEvent<T> | React.MouseEvent<T>;

//
// CSS
//
declare type CSSTextAlign = 'center' | 'justify' | 'left' | 'right' | 'start' | 'end';
declare type CSSFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
