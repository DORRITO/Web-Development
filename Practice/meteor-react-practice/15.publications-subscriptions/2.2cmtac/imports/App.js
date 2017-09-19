import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router';

import Main from './ui/main';
import Login from './ui/login';
import Signup from './ui/signup';
import Logout from './ui/logout';

const unauthenticatedPages = ['/', '/login', '/signup'];
const authenticatedPages = ['/logout'];

/////dont let users hit the back button/////
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    browserHistory.replace('/logout');
  }
}/////////////////////////////////////

////dont let users hit the back button//////
const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
}///////////////////////////////////////

////////////////////check what page user is on/////////////////////////
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  //if its authenticated, go to logout page, if its not, go to signup page!
  if(isUnauthenticatedPage && isAuthenticated){
    browserHistory.replace('/logout');
  } else if(isAuthenticatedPage && !isAuthenticated){
    browserHistory.replace('/');
  }
};/////////////////////////////////////////////////////////////////////

export const App=(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main} onEnter={onEnterPublicPage} />
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
      <Route path="/login" component={Login} onEnter={onEnterPublicPage} />
      <Route path="/logout" component={Logout} onEnter={onEnterPrivatePage} />
      <Route path="*" component={Main} />
    </Router>
  </div>
)
