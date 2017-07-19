// flow-typed signature: 1eecf79e8bec57359b084b5f89cbc6f3
// flow-typed version: <<STUB>>/electron_v1.x.x/flow_v0.50.0

// @flow

 type $Npm$Electron$App = {
   setMenu(Object | null): void
 };

type BrowserWindowConfig = {
  [key: string]: any
}

class $Npm$Electron$BrowserWindow {
  constructor: (Object) => $Npm$Electron$BrowserWindow
  setMenu: (config: BrowserWindowConfig | null) => void
  loadURL: (url: string) => void
  on: (event: string, handler: () => void) => void
};

declare module 'electron' {
  declare type App = $npm$electron$App;
  declare module.exports: {
    BrowserWindow: typeof $Npm$Electron$BrowserWindow,
    app: App,
  };
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

declare module 'electron/test/errors' {
  declare module.exports: any;
}

declare module 'electron/test/index' {
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
declare module 'electron/test/errors.js' {
  declare module.exports: $Exports<'electron/test/errors'>;
}
declare module 'electron/test/index.js' {
  declare module.exports: $Exports<'electron/test/index'>;
}
