// @flow
import { app, BrowserWindow } from 'electron';
// const { autoUpdater } = require('electron-updater');
// const log = require('electron-log');
import path from 'path';
import url from 'url';

import initEnvironment from './initEnvironment';
import initGameEventsHandlers from './initGameEventsHandlers';

const isDev = process.env.NODE_ENV === 'development';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win /* : BrowserWindow */;

const config = {
  width: 1600,
  height: 1000,
  resizable: false,
  minimizable: isDev,
  maximizable: isDev,
  fullscreen: !isDev,
  backgroundColor: '#111',
  webPreferences: {
    devTools: isDev
  }
};

function createWindow() {
  win = new BrowserWindow(config);

  initEnvironment(win);

  const urlConfig = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  });
  // and load the index.html of the app
  win.loadURL(urlConfig);

  // Emitted when the window is closed
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element
    win = null;
  });

  initGameEventsHandlers(win);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open
  if (win === null) {
    createWindow();
  }
});
