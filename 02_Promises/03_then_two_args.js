var path = require('path');
var fs_converted = require('../helpers/fs_converted');

fs_converted.readdir('sample_files').then(function (files) {
    console.log('here is the resolved value: ' + files);
}, function (error) {
    console.log('here is the rejected value: ' + error);
});

// fs_converted.readdir('sample_filesx').then(function (files) {
//     console.log('here is the resolved value: ' + files);
// }, function (error) {
//     console.log('here is the rejected value: ' + error);
// });