import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, Switch} from 'react-router-dom';
import {Session} from 'meteor/session';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';

export const history = createHistory()

export const App = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={Signup} exact={true} />
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
      <PrivateRoute path="/dashboard/:id" component={Dashboard} />
      <Route path="*" component={Signup} />
    </Switch>
  </Router>
);
