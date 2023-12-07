const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "a2zrenovationsri"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM contactus"
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.post("/api/post", (req, res) => {
    const {FirstName, LastName, EmailAdress, PhoneNumber, ProjectAdress} = req.body;
    const sqlInsert = "INSERT INTO contactus (FirstName, LastName, EmailAdress, PhoneNumber, ProjectAdress) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [FirstName, LastName, EmailAdress, PhoneNumber, ProjectAdress], (error, result) => {
        if(error) {
            console.log(error);
        }
    });
});

app.get("/", (req, res) => {
//    const sqlInsert = "INSERT INTO contactus (FirstName, LastName) VALUES ('Fred', 'Blake')";
//    db.query(sqlInsert, (error, result) => {
//        console.log("error", error);
//        console.log("result", result);
//        res.send("Hello Express");
//    });
    
    
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});



