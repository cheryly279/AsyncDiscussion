var path = require('path');
var fs_converted = require('../helpers/fs_converted');

fs_converted.readdir('sample_files').then(function (files) {
    console.log('First file: ' + files[0]);
    return files[0];
}).then(function (file) {
    return fs_converted.readFile(path.join('sample_files', file), 'utf8x');
}).catch(function (error) {
    console.log('Error caught! ' + error);
});
