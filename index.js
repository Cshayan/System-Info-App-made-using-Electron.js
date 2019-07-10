const {
    app,
    BrowserWindow
} = require('electron');
const path = require('path');
const url = require('url');

// Init window
let win;

function createWindow() {
    // Create Browser window and turn the nodeIntegration ON
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load index.html file
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: "file:",
        slashes: true
    }));

    // Open devtools
    win.webContents.openDevTools();

    // Close
    win.on('closed', () => {
        win = null;
    });
}

// Run the createWindow function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';