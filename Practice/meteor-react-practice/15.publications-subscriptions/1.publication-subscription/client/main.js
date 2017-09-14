import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {App, onAuthChange} from '../imports/ui/App';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Meteor.call('greetUser', 'mike', (err, res) =>{
    console.log('greet user args', err, res);
  });
    ReactDOM.render(App, document.getElementById('app'));
})
