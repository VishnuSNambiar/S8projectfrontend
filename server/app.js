var express = require("express"),
    app = express(),
    http = require("http").server(app).listen(3000);

console.log("server started")
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
})