var fs = require("fs");

var items = [];

fs.readdir('.', function(error, files) {
    var i;
    var length;

    if (error) {
        throw error;
    }

    length = files.length;

    for (i = 0; i < length; i++) {
        fs.readFile(files[i], function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    }


});

/*
fs.readFile("itemData.txt", "utf8", function(error, data) {
    if (!error) {        
        // display file text
        console.log(data);

        // manipulate text - perhaps replace all "" with ''?


        // copy cleaned up text to a backup file

        // parse each row into an array of data

        // add data from array to items

        // save items to a database
    } else {
        throw Error('oh noes!');
    }
});
*/