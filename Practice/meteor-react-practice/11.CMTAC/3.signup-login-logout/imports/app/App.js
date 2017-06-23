import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';

import Default from './../ui/pages/Default';
import Signup from './../ui/pages/Signup';
import Login from './../ui/pages/Login';

export const App = (
  <Router history={browserHistory}>
    <Route path="/" component={Default} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="*" component={Default} />
  </Router>
);
