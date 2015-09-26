var path = require('path');
var fs_converted = require('./fs_converted');

fs_converted.readdir('sample_files').then(function (files) {
    console.log(files);
});