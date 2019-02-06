// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var SearchDialog = require('electron-search-dialog').default;
var mainWindow = require('electron').remote.getCurrentWindow();
var _searchDialog = new SearchDialog(mainWindow);

var btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  _searchDialog.openDialog();
});

