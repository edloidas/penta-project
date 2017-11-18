// @flow
// eslint-disable-next-line no-unused-vars
import { BrowserWindow } from 'electron';

export default function initGameEventsHandlers(win /* : BrowserWindow */) {
  const contents /* : WebContents */ = win.webContents;

  contents.on('did-navigate-in-page', event => {
    const { history } = event.sender;
    const lastHref = history[history.length - 1];
    if (lastHref && lastHref.endsWith('/exit')) {
      win.close();
    }
  });
}
