import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session'; //meteor add session
import {browserHistory} from 'react-router';

import {App, onAuthChange} from '../imports/ui/App';
// simple schema config file turns its errors into meteor errors, so I don't have to use try catch over and over
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const currentPagePrivacy = Session.get('currentPagePrivacy');
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const selectedNoteId = Session.get('selectedNoteId');

  if(selectedNoteId){
    browserHistory.replace(`/dashboard/${selectedNoteId}`);
  }
});

Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  ReactDOM.render(App, document.getElementById('app'));
})

/////////////stateless component practice////////////
//<MyComponent name="CHIp"/>
// import React from 'react';
// const MyComponent = (props) => {
//   return(<div><h1>MyComponent is here! {props.name}</h1></div>);
// };
