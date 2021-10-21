var fs = require('fs');
var data = require('./data.json');


// console.log(" data ", data);

fs.readFile('./data.json', 'utf-8', function (err, data) {

    var newData = JSON.parse(data);
    console.log(" readFile ", data);

    console.log(" parsed data", newData);

})