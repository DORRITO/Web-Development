import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router';

import Main from './ui/Main';
import About from './ui/About';
import Gallery from './ui/Gallery';
import Account from './ui/Account';
import Login from './ui/Login';
import Signup from './ui/Signup';

export const App=(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/account" component={Account} />
      <Route path="*" component={Main} />
    </Router>
  </div>
)
