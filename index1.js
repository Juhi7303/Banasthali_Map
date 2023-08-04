var con = require("./connection ");

var express = require('express');
var app = express();

var mysql = require('mysql');

var bodyParser = require('body-parser');
var encoder = bodyParser.urlencoded({ extended: true });

// var send = require('send');
// var http = require('http');

app.use(bodyParser.json());
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login_page.html');
});


app.post('/', encoder, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    con.connect(function (error) {
        if (error) throw error;
        
        var sql = "SELECT * FROM registerdb WHERE email = ? AND password = ?";

        con.query(sql, [email,password], function(error, result, fields) {
            if(result.length > 0){
                res.redirect("http://127.0.0.1:3000/");
            }
            else{
                res.send("INVALID CREDENTIALS!!")
            }
            res.end();
        });
    });
});
// app.get("/HomePage", function(req,res){
//      res.sendFile("http://127.0.0.1:3000/")  ; 
// });

// var server = http.createServer(function onRequest (req, res) {
//     send(req, '/login_page.html')
//       .pipe(res)
//   })

app.listen(5000);