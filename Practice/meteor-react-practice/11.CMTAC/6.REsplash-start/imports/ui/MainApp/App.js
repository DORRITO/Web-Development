import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, Switch} from 'react-router-dom';
import {Session} from 'meteor/session';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from './../Dashboard';
import Signup from './../LoginAndSignup/Signup';
import Login from './../LoginAndSignup/Login';

export const history = createHistory()


export const App = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path="/" component={Login} />
      <PublicRoute path="/signup" component={Signup} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/dashboard/:id" component={Dashboard} />
      <Route path="*" component={Login} />
    </Switch>
  </Router>
);
