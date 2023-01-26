// declare the module variables

const express = require("express");
const cors = require("cors");
const fs = require('fs');
const mysql2 = require('mysql2');
const { log } = require("console");


// create connection to mysql server

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'lego_members'
})

connection.connect((err ,db) => {
    if (err) console.log(`error connecting to ${connection}`);
    console.log(`connected successfully`);

})

const app = express();

// middlewares
app.use(cors())

app.use(
  cors({
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// implement routes

// send home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// send login page
app.get('/login.html', (req, res) => {
    
    res.sendFile(__dirname + '/login/login.html')
})


// read data from login page
app.post('/login', (req, res) => {
    app.set('Content-Type', 'application/json');
    // fs.appendFile("members.txt", `${JSON.stringify(req.body)} \n`, (err) => {
    //   console.log(`member saved!`);
    // });

    connection.query(`SELECT email from users where email='${req.body.email}'`, (err, result) => {
        if (err) {
           console.log(err);
        };

        app.post('/jsondata', (req, res) => {
             res.json({ email: result[0].email });
        })
    })

     res.sendFile(__dirname + "/user.html");

})

// start server
app.listen(8000, () => {
    console.log(`server running on port 8000`);
})
