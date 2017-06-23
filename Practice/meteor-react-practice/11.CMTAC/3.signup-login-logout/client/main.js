import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Router, Route, browserHistory} from 'react-router';

import {App} from '../imports/app/App';

const unauthenticatedPages = ['/', '/signup'];
// const authenticatedPages = ['/game']

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  console.log('isAuthenticated?', isAuthenticated);
});

Meteor.startup(() => {
    Tracker.autorun(() => {
      ReactDOM.render(App, document.getElementById('app'));
    });
})
