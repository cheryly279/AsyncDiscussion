var path = require('path');
var fs_converted = require('./fs_converted');

function getFileText(file) {
    fs_converted.readFile(file, 'utf8').then(function (data) {
        gen.next(data.contents);
    }).catch(function (err) {
        gen.next(err);
    });
}

function *letsGetFiles() {
    var result1 = yield getFileText('sample4.txt');
    console.log(result1);

    var result2 = yield getFileText('sample5.txt');
    console.log(result2);
}

var gen = letsGetFiles();
gen.next();
