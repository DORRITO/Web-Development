import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Router, Route, browserHistory} from 'react-router';

import {App} from '../imports/app/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
      ReactDOM.render(App, document.getElementById('app'));
    });
})
