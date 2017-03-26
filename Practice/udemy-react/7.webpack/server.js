var express = require("express");
//create app
var app = express();

//change port to var

app.use(express.static('public'));

app.listen(8000, function() {
    console.log("express server is up on port 8000");
});