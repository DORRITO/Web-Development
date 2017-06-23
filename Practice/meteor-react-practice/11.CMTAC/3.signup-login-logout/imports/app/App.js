import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';

import Default from './../ui/Default';
import Signup from './../ui/Signup';
import Login from './../ui/Login';

export const App = (
  <Router history={browserHistory}>
    <Route path="/" component={Default} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="*" component={Default} />
  </Router>
);
