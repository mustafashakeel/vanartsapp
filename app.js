const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const { getHomePage } = require('./routes/index');
const { addStudentPage, addStudent } = require('./routes/student');
// set the default port 
const PORT = 3000;

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

app.set('port', process.env.PORT || PORT); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to 
//use public folder
app.use(fileUpload()); // configure fileupload


app.get('/', getHomePage);
app.get('/add', addStudentPage);
app.post('/add', addStudent)

// open the port for the server
app.listen(PORT, () => {
    console.log(` The server is running on localhost:${PORT}`);
})