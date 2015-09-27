var path = require('path');
var fs_converted = require('../helpers/fs_converted');

fs_converted.readdir('sample_files').then(function (files) {
    console.log('here is the resolved value: ' + files);
});