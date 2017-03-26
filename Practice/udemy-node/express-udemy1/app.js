var express = require("express");
var app = express();

//listen to online server port, if not listen to local host
var port = process.env.PORT || 8000;

app.get("/", function(req, res) {
    res.send("<html><head><title>basic express server</title></head><body><h1>Hello world!</h1></body></html>");
});

//look at localhost api endpoint
app.get("/api", function(req, res){
    res.json({ firstname: "John", lastname: "Doe"});
});

app.listen(port, function(){
    console.log("server is up on port 8000");
});