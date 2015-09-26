var fs_converted = require('./fs_converted');

(async function () {
    try {
        var data = await fs_converted.readFile('sample3.txt', 'utf8');
        console.log('show me the money/data: ' + data.contents);
    } catch (error) {
        console.log('error? ' + error);
    }
})();
