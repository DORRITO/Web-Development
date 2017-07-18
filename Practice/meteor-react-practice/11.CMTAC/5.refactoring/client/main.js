// import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
// import {Router, Route, browserHistory} from 'react-router';

import {App, onAuthChange} from '../imports/app/App';
import {DiceData} from '../imports/api/dicedata';

////////////////////update on changes///////////////////////////
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});///////////////////////////////////////////////////////////////////

////////////////////update on changes///////////////////////////
Tracker.autorun(() => {
  const dicedata = DiceData.find().fetch();
  console.log('new dice data', dicedata);
});///////////////////////////////////////////////////////////////////

Meteor.startup(() => {
    Tracker.autorun(() => {
      ReactDOM.render(App, document.getElementById('app'));
    });
})
