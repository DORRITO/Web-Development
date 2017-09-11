import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router';

import Main from './ui/Main';

export const App=(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="*" component={Main} />
    </Router>
  </div>
)
