import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Names, Games} from './../imports/api/lists';
import App from './../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
      let names = Names.find().fetch();
      let games = Games.find().fetch();
      ReactDOM.render(<App names={names} games={games}/>, document.getElementById('app'));
    });
})
