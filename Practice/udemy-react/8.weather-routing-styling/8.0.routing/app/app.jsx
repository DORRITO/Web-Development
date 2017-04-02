var React = require('react');
var ReactDOM = require('react-dom');
//es6 descructuring.  use hashrouter for localhost url
var {Route, Router, HashRouter} = require('react-router-dom');
var Main = require('Main');

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={Main}>        
        </Route>
    </HashRouter>,
    document.getElementById("app")
);