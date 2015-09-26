var path = require('path');
var fs_converted = require('./fs_converted');

fs_converted.readdir('sample_files').then(function (files) {
    console.log('First file: ' + files[0]);
    return files[0];
}).then(function (file) {
    return fs_converted.readFile(path.join(__dirname, 'sample_files', file), 'utf8');
}).then(function (data) {
    console.log(data.contents);
    return fs_converted.writeFile(data.file + '_bkp', data.contents, 'utf8');
}).then(function () {
    console.log('backup saved.');
}).catch(function (err) {
    console.log('error? ' + err);
});

