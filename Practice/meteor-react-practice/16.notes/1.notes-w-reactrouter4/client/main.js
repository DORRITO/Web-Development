import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session'; //meteor add session

import {App, onAuthChange, history} from '../imports/ui/App';
// simple schema config file turns its errors into meteor errors, so I don't have to use try catch over and over
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  Session.set('isNavOpen', false);

  if(selectedNoteId){
    history.replace(`/dashboard/${selectedNoteId}`);
  }
});

Tracker.autorun(() => {
  const isNavOpen = Session.get('isNavOpen');

  document.body.classList.toggle('is-nav-open', isNavOpen);
})

Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  Session.set('isNavOpen', false);
  ReactDOM.render(App, document.getElementById('app'));
})

/////////////stateless component practice////////////
//<MyComponent name="CHIp"/>
// import React from 'react';
// const MyComponent = (props) => {
//   return(<div><h1>MyComponent is here! {props.name}</h1></div>);
// };
