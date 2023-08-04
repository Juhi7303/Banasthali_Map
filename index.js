var con = require("./connection ");

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());


app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/signup_page.html');
});


app.post('/',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;

    con.connect(function(error){
        if (error) throw error;

        var sql = "INSERT INTO registerdb(Uname,email,password,cpassword) VALUES (?,?,?,?)";

        con.query(sql,[name,email,password,cpassword], function(error,result){
            if (error) throw error;
            
            // res.send("Successfully registered!");
            res.redirect("http://127.0.0.1:5000/");
       });
    });
});

app.listen(7000,function(error){
    if (error) throw error;
});