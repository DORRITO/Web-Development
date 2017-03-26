var greetings = require("./greetings.json")

var greet = function(){
    console.log(greetings.hawaiian);
}

module.exports = greet;