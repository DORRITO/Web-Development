import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import { hello } from '../imports/hello';

Meteor.startup(() => {
    ReactDOM.render(hello, document.getElementById('app'));
});