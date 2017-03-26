var express = require("express");
var app = express();

//listen to online server port, if not listen to local host
var port = process.env.PORT || 8000;

//look at localhost api endpoint
app.get("/", function(req, res){
    res.json({ firstname: "You", lastname: "Got it!!"});
});

app.listen(port, function(){
    console.log("server is up on port 8000");
});