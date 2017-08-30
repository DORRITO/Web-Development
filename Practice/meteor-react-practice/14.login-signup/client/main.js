import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Router, Route, browserHistory} from 'react-router';

import {App} from '../imports/ui/App';

const unauthenticatedPages = ['/', '/login'];
const authenticatedPages = ['/logout'];

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
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
});

Meteor.startup(() => {
    ReactDOM.render(App, document.getElementById('app'));
})
