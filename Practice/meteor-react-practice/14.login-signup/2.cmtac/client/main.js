import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {App} from './../imports/App';

Meteor.startup(() => {
    ReactDOM.render(App, document.getElementById('app'));
})
