var fetch = require('node-fetch');
 
fetch('http://www.cherylyaeger.com/').then(function(response) {
    return response.text();
}).then(function(body) {
    console.log(body);
});
