var con = require("./connection ");

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// var send = require('send');
// var http = require('http');

app.use(bodyParser.json());
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/HomePage.html');
});


app.post('/', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;

    con.connect(function (error) {
        if (error) throw error;

        var sql = "SELECT * FROM registerdb WHERE Uname = ? AND password = ?";

        con.query(sql, function (error, result, fields) {
            if(result.length > 0){
                res.redirect("#");
            }


        });
    });
});

// var server = http.createServer(function onRequest (req, res) {
//     send(req, '/login_page.html')
//       .pipe(res)
//   })

app.listen(3000);