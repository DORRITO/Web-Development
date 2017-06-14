import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Router, Route, browserHistory} from 'react-router';

import {App} from '../imports/ui/App';
import Link1 from '../imports/ui/Link1';
import Link2 from '../imports/ui/Link2';
import Link3 from '../imports/ui/Link3';
import Default from '../imports/ui/Default';

Meteor.startup(() => {
    Tracker.autorun(() => {

      ReactDOM.render(App, document.getElementById('app'));

    });
})
