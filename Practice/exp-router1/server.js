var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(path.join("public")));


//////////////////////////////////////////
////////////Vegetable routes//////////////
/////////////////////////////////////////
app.get("/vegetables", function(req, res) {
   //get all vegetables 
});

app.post("/vegetables", function(req, res) {
    //post new vegetable
});

app.put("/vegetables/:vegId", function(req, res) {
    //update one vegetable
});

app.delete("/vegetables/:vegId", function(req, res) {
    //delete one vegetable
});