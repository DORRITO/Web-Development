import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router';

import Main from './ui/Main';
import About from './ui/About';
import Gallery from './ui/Gallery';
import MyPage from './ui/Mypage';

export const App=(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/mypage" component={MyPage} />
      <Route path="*" component={Main} />
    </Router>
  </div>
)
