var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require("./components/Greeter.jsx");

var fName = "chip";
var message ="message from the property";

ReactDOM.render(
    //name property passed in here, if no properties, default from above is used
    <Greeter name={fName} message={message}/>,
    document.getElementById("app")
);