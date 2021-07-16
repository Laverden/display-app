const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path")
const isDev = require("electron-is-dev")

const prodIndexPath = path.join(__dirname, "../build/index.html")
const localURL = "http://localhost:3000"
const prodURL =  `file://${prodIndexPath}`

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    mainWindow.loadURL( isDev ? localURL : prodURL );

    mainWindow.on("closed", () => (mainWindow = null));
}
  
app.on("ready", createWindow);

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});
  