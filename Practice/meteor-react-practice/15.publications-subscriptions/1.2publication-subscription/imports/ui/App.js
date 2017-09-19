import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router';

import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';

const unauthenticatedPages = ['/', '/login'];
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
    browserHistory.replace('/login');
  }
}/////////////////////////////////////

////////////////////check what page user is on/////////////////////////
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  //if its authenticated, go to logout page, if its not, go to signup page!
  if(isUnauthenticatedPage && isAuthenticated){
    console.log('your in');
    browserHistory.replace('/logout');
  } else if(isAuthenticatedPage && !isAuthenticated){
    console.log('your out')
    browserHistory.replace('/login');
  }
};/////////////////////////////////////////////////////////////////////

export const App=(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Signup} onEnter={onEnterPublicPage} />
      <Route path="/login" component={Login} onEnter={onEnterPublicPage} />
      <Route path="/logout" component={Logout} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={Signup} />
    </Router>
  </div>
)
