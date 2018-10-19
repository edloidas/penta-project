import { BrowserWindow, Event, WebContents } from 'electron';

declare class WebContentsWithHistory extends WebContents {
  history: History & string[];
}

export default function initGameEventsHandlers(win: BrowserWindow) {
  const contents: WebContents = win.webContents;

  contents.on('did-navigate-in-page', (event: Event) => {
    const { history } = event.sender as WebContentsWithHistory;
    const lastHref = history[history.length - 1];
    if (lastHref && lastHref.endsWith('/exit')) {
      win.close();
    }
  });
}
