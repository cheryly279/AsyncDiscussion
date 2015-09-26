var fs = require("fs");

var readdir = function (directory) {
    return new Promise(function (resolve, reject) {
        fs.readdir(directory, function (error, files) {
            if (error) {
                reject(error);
            } else {
                resolve(files);
            }
        });
    });
};

var readFile = function (file, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, encoding, function (error, data) {
            if (error) {
                reject(error);
            } else {
                resolve({
                    file: file,
                    contents: data
                });
            }
        });
    });
};

var writeFile = function (file, data, encoding) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(file, data, encoding, function (error) {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};

module.exports = {
    readdir : readdir,
    readFile : readFile,
    writeFile : writeFile
};