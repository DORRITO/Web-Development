import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';

import Link1 from './../ui/Link1';
import Link2 from './../ui/Link2';
import Link3 from './../ui/Link3';
import Default from './../ui/Default';
import Signup from './../ui/Signup';

export const App = (
  <Router history={browserHistory}>
    <Route path="/" component={Default} />
    <Route path="/link1" component={Link1} />
    <Route path="/link2" component={Link2} />
    <Route path="/link3" component={Link3} />
    <Route path="/signup" component={Signup} />
    <Route path="*" component={Default} />
  </Router>
);
