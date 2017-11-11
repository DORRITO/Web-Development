import React from 'react';
import {Meteor} from 'meteor/meteor';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Session} from 'meteor/session';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';

export const App=(
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={Signup} />
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/dashboard/:id" component={Dashboard} />
      <Route path="*" component={Signup} />
    </Switch>
  </BrowserRouter>
)
