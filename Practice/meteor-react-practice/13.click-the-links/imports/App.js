import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Hello from './ui/pages/hello';
import OverHere from './ui/pages/overHere';

export const App = (
  <Router history={browserHistory}>
    <Route path="/" component={Hello} />
    <Route path="/overhere" component={OverHere} />
    <rotue path="*" component={Hello} />
  </Router>
);
