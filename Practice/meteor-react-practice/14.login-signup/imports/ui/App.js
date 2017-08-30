import React from 'react';

import {Router, Route, browserHistory} from 'react-router';


import Signup from './signup';
import Login from './login';
import Logout from './logout';

export const App=(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="*" component={Signup} />
    </Router>
  </div>
)
