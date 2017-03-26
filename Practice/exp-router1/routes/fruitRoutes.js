var express = require("express");
var fruitRoutes = express.Router();

//fruit routes
fruitRoutes.get("/fruits", function(req, res) {
   //get all fruits 
});

fruitRoutes.post("/fruits", function(req, res) {
    //post new fruit
});

fruitRoutes.put("/fruits/:fruitId", function(req, res) {
    //update one fruit
});

fruitRoutes.delete("/fruits/:fruitId", function(req, res) {
    //delete one fruit
});