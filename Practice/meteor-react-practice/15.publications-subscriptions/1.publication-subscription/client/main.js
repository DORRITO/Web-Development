import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {App, onAuthChange} from '../imports/ui/App';
import {Links} from '../imports/api/links';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const links = Links.find().fetch();
  console.log('new links', links)
});

Meteor.startup(() => {
    ReactDOM.render(App, document.getElementById('app'));
})
