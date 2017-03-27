var React = require('react');
var ReactDOM = require('react-dom');
//es6 descructuring, indexroute and browserhistory are deprecated
var {Route, Router, HashRouter, Switch} = require('react-router-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <HashRouter>                
        <Main>          
            <Route path="/about" component={About} />
            <Route path="/" component={Weather} />
            <Route path="/examples" component={Examples} />
        </Main>        
    </HashRouter>,
    document.getElementById("app")
);