import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';

import Splash from './../ui/pages/Default';
import Signup from './../ui/pages/Signup';
import Login from './../ui/pages/Login';
import GamePage from './../ui/pages/GamePage';

export const App = (
  <Router history={browserHistory}>
    <Route path="/" component={Splash} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/gamepage" component={GamePage} />
    <Route path="*" component={Splash} />
  </Router>
);
