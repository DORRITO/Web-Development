import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import { cat } from '../imports/cat';

Meteor.startup(() => {
    ReactDOM.render(cat, document.getElementById('app'));
});
