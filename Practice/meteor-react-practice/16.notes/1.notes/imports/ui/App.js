import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Router, Route, browserHistory} from 'react-router';
import {Session} from 'meteor/session';

import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';

const unauthenticatedPages = ['/', '/login'];
const authenticatedPages = ['/dashboard'];

/////dont let users hit the back button/////
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    browserHistory.replace('/dashboard');
  }
}/////////////////////////////////////

////dont let users hit the back button//////
const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/login');
  }
}/////////////////////////////////////

////////////go to note id////////////
const onEnterNotePage = (nextState) => {
  if(!Meteor.userId()){
    browserHistory.replace('/login');
  } else {
    Session.set('selectedNoteId', nextState.params.id);
  }
};/////////////////////////////////////

////////////////////check what page user is on/////////////////////////
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  //if its authenticated, go to logout page, if its not, go to signup page!
  if(isUnauthenticatedPage && isAuthenticated){
    browserHistory.replace('/dashboard');
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
      <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
      <Route path="/dashboard/:id" component={Dashboard} onEnter={onEnterNotePage}/>
      <Route path="*" component={Signup} />
    </Router>
  </div>
)
