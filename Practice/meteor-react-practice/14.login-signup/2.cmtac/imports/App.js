import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router';

import Main from './ui/main';
import Login from './ui/login';
import Signup from './ui/signup';

export const App=(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="*" component={Main} />
    </Router>
  </div>
)
