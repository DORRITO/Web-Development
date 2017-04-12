var React = require('react');
var ReactDOM = require('react-dom');
//es6 descructuring, indexroute and browserhistory are deprecated
var {Route, Router, HashRouter, Switch} = require('react-router-dom');

//load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <p>Boilerplate 3 Project</p>,
//only need exact in one path
//    <HashRouter>                
//        <Main>          
//            <Route exact path="/" component={Timer} />
//        </Main>        
//    </HashRouter>,
    document.getElementById("app")
);