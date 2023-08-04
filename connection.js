var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Juhi@07verma",
    database: "banasthalimap"
});

module.exports = con;