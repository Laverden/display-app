const { app, BrowserWindow } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")

const prodIndexPath = path.join(__dirname, "../build/index.html")
const localURL = "http://localhost:3000"
const prodURL =  `file://${prodIndexPath}`


function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL( isDev ? localURL : prodURL )
}
  
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
  