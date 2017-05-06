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
  // Meteor.call('greetUser', 'mike' (err, res) => {
  //   console.log('greet user arguments', err, res);
  // }); //this calls a meteor.method defined in links api. greetuser is the name of that method

  Meteor.call('addNumbers', 11, 101, (err, res) => {
    console.log('greet user arguments', err, res);
  });

  ReactDOM.render(routes, document.getElementById('app'));
});
