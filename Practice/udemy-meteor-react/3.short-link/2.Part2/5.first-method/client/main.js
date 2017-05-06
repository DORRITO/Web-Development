import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';

import {routes, onAuthChange} from '../imports/routes/routes';

//tracker is tracking anytime something in the database changes!
Tracker.autorun(() => {
  // takes a falsy or truthy value and makes it a boolean!  straight false or true.
  // Meteor.userid is checking the id value
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
