const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
// set the default port 
const PORT = 6000;

// configure to mysql database 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vanartsapp',
    port: 8889

});

// connect to mysql database

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(" mysql database connected");
});

// make db connection global 
global.db = db;

// configure the middleware 

app.set('port', process.env.port || PORT); // set the port 
app.set('views', __dirname + '/views');
// set the view folder




// open the port for the server
app.listen(PORT, () => {
    console.log(` The server is running on localhost:${PORT}`);
})