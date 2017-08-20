// import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
// import {Router, Route, browserHistory} from 'react-router';

import {App, onAuthChange} from '../imports/app/App';

////////////////////update on changes///////////////////////////
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});///////////////////////////////////////////////////////////////////

Meteor.startup(() => {
  Meteor.call('greetUser', (err, res) => {
    console.log('greet user arguments', err, res);
  })
    Tracker.autorun(() => {
      ReactDOM.render(App, document.getElementById('app'));
    });

})
