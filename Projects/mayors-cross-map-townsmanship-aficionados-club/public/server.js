var express = require("express");
var app = express();

//listen to online server port, or if not, listen to local host
var port = process.env.PORT || 8000;
