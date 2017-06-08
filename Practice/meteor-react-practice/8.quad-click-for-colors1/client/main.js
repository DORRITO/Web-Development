import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import { box } from '../imports/box';

Meteor.startup(() => {
    ReactDOM.render(box, document.getElementById('app'));
});
