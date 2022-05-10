const electron  = require('electron');
const url = require('url');
const path = require('path');
var child = require('child_process').execFile;

var PathNotePad = "C:\\WINDOWS\\system32\\notepad.exe"
var PathWordPad = "C:\\Program Files\\Windows NT\\Accessories\\wordpad.exe"
var PathPaint = "C:\\WINDOWS\\system32\\mspaint.exe"
var pathcalculator= "C:\\Windows\\System32\\calc.exe" 

const {app, BrowserWindow, Menu } = require('electron');

let mainWindow;
app.on('ready', function(){
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname, 'index.html'),
        protocol : 'file',
        slashes: true
    }));
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu)
})


const mainMenuTemplate = [
    {
        label : 'File',
        submenu :[
            {
                label : 'notepad',
                click(){
                    child(PathNotePad , function(err ,data)  {
                        if(err){
                            console.error(err);
                            return;
                        }
                        console.log(data.toString());
                    });
                }
            },
            {
                label : 'wordpad',
                click(){
                    child(PathWordPad, function(err, data){
                        if(err){
                            console.error(err);
                            return;
                        }
                        console.log(data.toString());
                    });
                }
            },
            {
                label : 'paint',
                click(){
                    child(PathPaint , function(err ,data){
                        if(err){
                            console.error(err);
                            return;
                        }
                        console.log(data.toString());
                    });
                }
            },
            {
                label:'calculator',
                click(){
                    child(pathcalculator,function(err,data){
                        if(err){
                            console.error(err);
                            return;
                        }
                        console.log(data.toString());
                    });
                }
            },
            {
                label : 'Quit',
                click(){
                    app.quit();
                }
            }
        ]
    }
];