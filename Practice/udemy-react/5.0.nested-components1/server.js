var express = require("express");
//create app
var app = express();

app.use(express.static('public'));

app.listen(8000, function() {
    console.log("express server is up on port 8000");
});