const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    height: 400,
    width: 400
  });

  mainWindow.loadURL(`file://${__dirname}/countdown.html`);

  mainWindow.on('closed', () => {
    console.log('closed!');
    mainWindow = null;
  });
});