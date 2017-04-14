var React = require('react');
var ReactDOM = require('react-dom');
//es6 descructuring, indexroute and browserhistory are deprecated
var {Route, Router, HashRouter, Switch} = require('react-router-dom');
var TodoApp = require('TodoApp');

//load foundation
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
    <TodoApp />,
//only need exact in one path
//    <HashRouter>                
//        <Main>          
//            <Route exact path="/" component={Timer} />
//        </Main>        
//    </HashRouter>,
    document.getElementById("app")
);