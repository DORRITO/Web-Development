var React = require('react');
var ReactDOM = require('react-dom');

//es6 spread operator example
var objOne= {
    name: "blah"
};
var objTwo = {
    age: 25,
    ...objOne
};
console.log(objTwo);


ReactDOM.render(
    <h1>Boilerplate app</h1>,
    document.getElementById("app")
);