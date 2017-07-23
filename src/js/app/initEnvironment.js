// @flow

// eslint-disable-next-line no-unused-vars
import { BrowserWindow } from 'electron';

const isDev = process.env.NODE_ENV === 'development';

function initProdEnvironment(win /* : BrowserWindow */) {
  // Disable Alt key menu
  win.setMenu(null);
}

function initDevEnvironment(win /* : BrowserWindow */) {
  // Open DevTools
  win.webContents.openDevTools();
}

export default function initEnvironment(win /* : BrowserWindow */) {
  if (isDev) {
    initDevEnvironment(win);
  } else {
    initProdEnvironment(win);
  }
}
