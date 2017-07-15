import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Router, Route, browserHistory} from 'react-router';

import {App} from '../imports/app/App';

const unauthenticatedPages = ['/', '/signup', '/login'];
const authenticatedPages = ['/gamepage'];

////////////////////update on changes///////////////////////////
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;

  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/gamepage');
  } else if(isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }

  console.log('isAuthenticated?', isAuthenticated);
});///////////////////////////////////////////////////////////////////

Meteor.startup(() => {
    Tracker.autorun(() => {
      ReactDOM.render(App, document.getElementById('app'));
    });
})
