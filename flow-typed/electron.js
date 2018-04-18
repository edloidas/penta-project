import EventEmitter from 'events';

declare type Null = null | void;

type $npm$electron$App = {
  setMenu(Object | null): Null;
  quit: () => Null;
  on: (event: string, handler: () => Null) => Null;
};

type BrowserWindowConfig = {
  [key: string]: any
}

class WebContents extends EventEmitter {
  openDevTools: () => Null
}

declare class $npm$electron$BrowserWindow {
  constructor(Object): this;
  setMenu: (config: BrowserWindowConfig | Null) => Null;
  loadURL: (url: string) => Null;
  on: (event: string, handler: () => Null) => Null;
  close: () => Null;
  webContents: WebContents;
};

declare module 'electron' {
  declare type App = $npm$electron$App;
  declare module.exports: {
    BrowserWindow: typeof $npm$electron$BrowserWindow,
    app: App,
  };
}
