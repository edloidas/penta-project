// flow-typed signature: ce618597d9a454650a76b0b5fe0d0e41
// flow-typed version: <<STUB>>/electron_v1.7.5/flow_v0.53.1

// @flow

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

/**
 * This is an autogenerated libdef stub for:
 *
 *   'electron'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'electron' {
  declare module.exports: any;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'electron/cli' {
  declare module.exports: any;
}

declare module 'electron/install' {
  declare module.exports: any;
}

// Filename aliases
declare module 'electron/cli.js' {
  declare module.exports: $Exports<'electron/cli'>;
}
declare module 'electron/index' {
  declare module.exports: $Exports<'electron'>;
}
declare module 'electron/index.js' {
  declare module.exports: $Exports<'electron'>;
}
declare module 'electron/install.js' {
  declare module.exports: $Exports<'electron/install'>;
}
