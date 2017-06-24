import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';

import Splash from './../ui/pages/Default';
import Signup from './../ui/pages/Signup';
import Login from './../ui/pages/Login';
import GamePage from './../ui/pages/GamePage';

/////prevent back button from going to unauthed pages////
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    browserHistory.replace('/gamepage');
  }
}///////////////////////////////////////////////////////

/////prevent back button from going to unauthed pages////
const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
}///////////////////////////////////////////////////////

export const App = (
  <Router history={browserHistory}>
    <Route path="/" component={Splash} onEnter={onEnterPublicPage} />
    <Route path="/login" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
    <Route path="/gamepage" component={GamePage} onEnter={onEnterPrivatePage} />
    <Route path="*" component={Splash} />
  </Router>
);
