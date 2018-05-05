declare type Null = null | void;
//
// webpack
//
declare var module: {
  hot : {
    accept(path: string, callback: () => void): void;
  };
};

//
// Actions
//
type GenericAction<T, P> = {
  type: T;
  payload: P;
}

type GenericActionCreator<T, P> = (payload: P, ...rest: any[]) => GenericAction<T, P>;

declare type PAction<P> = GenericAction<string, P>;

// declare type PActionCreator<P> = ActionCreator<Action<P>, P>;
declare type PActionCreator<P> = GenericActionCreator<string, P>;

//
// Settings
//
//   Graphics
declare type ScreenSize = '1920x1080' | '2560x1400';
declare type WindowMode = 'fullscreen' | 'windowed';
declare type FrameRate = '30fps' | '60fps' | '120fps' | 'unlimited';
declare type VSync = 'off' | 'on';
declare type AntiAliasing = 'off' | 'x2' | 'x4';

//
// Events
//
declare type MouseKeyboardEvent = MouseEvent | KeyboardEvent;

//
// CSS
//
declare type CSSTextAlign = 'center' | 'justify' | 'left' | 'right' | 'start' | 'end';
declare type CSSFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
