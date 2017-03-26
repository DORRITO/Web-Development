/*var greet = function(){
    console.log("hello, im the greet file");
}

module.exports = greet; */

var english = require("./english");
var hawaiian = require("./hawaiian");

module.exports = {
    english: english,
    hawaiian: hawaiian
};