const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const PORT = 6000;


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vanartsapp',
    port: 8889

});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(" mysql database connected");
})

app.listen(PORT, () => {
    console.log(` The server is running on localhost:${PORT}`);
})