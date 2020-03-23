var express = require("express");
var app = express();
var http = require('http');
const session = require('express-session');
var upload = require("express-fileupload");
app.use(upload());

var port = '3000';
app.set('port',port);

var server = http.createServer(app);

server.listen(port, console.log('Server is running on port 3000'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
});
app.post("/",function(req,res){
    if(req.files){
        var file = req.files.filename,
            filename = file.name;
        file.mv("./upload/"+filename,function(err){
            if(err){
                console.log(err);
                res.send("error occured");
            }
            else{
                console.log("File Uploaded")
                res.send("Done");
            }
        });
    }
});




