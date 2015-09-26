var path = require('path');
var fs_converted = require('./fs_converted');

fs_converted.readdir('sample_files').then(function (files) {
    return Promise.all(files.map(function (file) {
        return fs_converted.readFile(path.join('sample_files', file));
    }));
}).then(function (dataArr) {
    return Promise.all(dataArr.map(function (data) {
        console.log('file: ' + data.file);
        console.log('contents: ' + data.contents);
        return fs_converted.writeFile(data.file + '_bkp', data.contents, 'utf8');
    }));
}).then(function () {
    console.log('backups saved.');
}).catch(function (err) {
    console.log('Error: ' + err);
})
