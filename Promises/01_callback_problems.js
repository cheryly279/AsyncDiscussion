var fs = require("fs");
var path = require('path');

var items = [];

fs.readdir('sample_files', function (error, files) {
    if (error) {
        throw error;
    }

    console.log('First file: ' + files[0]);

    fs.readFile(path.join(__dirname, 'sample_files', files[0]), 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);

        fs.writeFile(path.join(__dirname, 'sample_files', files[0] + '_bkp'), data, 'utf8', function (err) {
            if (err) {
                throw err;
            }
            console.log('backup saved.');
        });
    });
});

