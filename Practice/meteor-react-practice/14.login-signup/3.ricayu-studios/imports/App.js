import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router';

import Main from './ui/Main';
import About from './ui/About';
import Gallery from './ui/Gallery';
import Account from './ui/Account';
import Login from './ui/Login';
import Signup from './ui/Signup';

const unauthenticatedPages = ['/', '/login', '/signup', '/main', '/*', '/about', '/gallery'];
const authenticatedPages = ['/account'];

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
    browserHistory.replace('/account');
  } else if(isAuthenticatedPage && !isAuthenticated){
    browserHistory.replace('/');
  }
};/////////////////////////////////////////////////////////////////////

export const App=(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main} onEnter={onEnterPublicPage} />
      <Route path="/about" component={About} onEnter={onEnterPublicPage} />
      <Route path="/gallery" component={Gallery} onEnter={onEnterPublicPage} />
      <Route path="/login" component={Login} onEnter={onEnterPublicPage} />
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
      <Route path="/account" component={Account} onEnter={onEnterPrivatePage} />
      <Route path="*" component={Main} />
    </Router>
  </div>
)
