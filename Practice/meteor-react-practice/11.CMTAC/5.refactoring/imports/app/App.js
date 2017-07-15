import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';

import Splash from './../ui/pages/Default';
import Signup from './../ui/pages/Signup';
import Login from './../ui/pages/Login';
import GamePage from './../ui/pages/GamePage';

const unauthenticatedPages = ['/', '/signup', '/login'];
const authenticatedPages = ['/gamepage'];

/////prevent back button from going to unauthed pages////
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    browserHistory.replace('/gamepage');
  }
};///////////////////////////////////////////////////////

/////prevent back button from going to unauthed pages////
const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
};///////////////////////////////////////////////////////

///////////////change path to page if people are authenticated or not///////
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;

  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/gamepage');
  } else if(isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }

  console.log('isAuthenticated?', isAuthenticated);
};//////////////////////////////////////////////////////////

export const App = (
  <Router history={browserHistory}>
    <Route path="/" component={Splash} onEnter={onEnterPublicPage} />
    <Route path="/login" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
    <Route path="/gamepage" component={GamePage} onEnter={onEnterPrivatePage} />
    <Route path="*" component={Splash} />
  </Router>
);
