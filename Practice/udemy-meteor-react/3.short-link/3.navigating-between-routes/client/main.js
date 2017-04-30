import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const routes = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/links" component={Link}/>
        <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
  // <BrowserRouter><Link path="/links" /></BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
