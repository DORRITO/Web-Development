import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session'; //meteor add session

import {App, onAuthChange} from './../imports/App';
import '../imports/startup/simple-schema-configuration.js';
//
Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(App, document.getElementById('app'));
});

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});
