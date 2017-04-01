var React = require('react');
var ReactDOM = require('react-dom');
//es6 descructuring, indexroute and browserhistory are deprecated
var {Route, Router, HashRouter, Switch} = require('react-router-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!applicationStyles')

ReactDOM.render(
    <HashRouter>                
        <Main>          
            <Route path="/about" component={About} />
            <Route exact path="/" component={Weather} />
            <Route path="/examples" component={Examples} />
        </Main>        
    </HashRouter>,
    document.getElementById("app")
);