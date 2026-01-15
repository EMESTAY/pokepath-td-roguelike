const { app, BrowserWindow, shell, ipcMain  } = require('electron');
const path = require('path');

let win;

function createWindow() {
    if (win) return; 

    const baseWidth = 1238;
    const baseHeight = 674;

    win = new BrowserWindow({
      width: 1238,
      height: 674,
      minWidth: 1238,      
      minHeight: 674,  
      resizable: true,  
      center: true,
      title: "PokePath TD",
      icon: path.join(__dirname, 'src/assets/icon.ico'),
      webPreferences: {
        preload: path.join(__dirname, './preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
        backgroundThrottling: false,
        sandbox: false,
        webSecurity: false,
      },
    });

    win.loadFile('index.html');

    win.setMenu(null);
    win.setContentSize(baseWidth, baseHeight);
    //win.webContents.openDevTools()

    win.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });
}

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });

  app.whenReady().then(createWindow);
}

ipcMain.handle('toggle-fullscreen', () => {
    if (!win) return;
    win.setFullScreen(!win.isFullScreen());
});

app.whenReady().then(createWindow);

ipcMain.on('close-app', () => {
  app.quit();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});