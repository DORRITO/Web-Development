import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {App, onAuthChange} from './../imports/App';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
    ReactDOM.render(App, document.getElementById('app'));
});

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});
