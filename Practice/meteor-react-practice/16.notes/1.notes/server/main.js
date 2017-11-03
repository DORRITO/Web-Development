import { Meteor } from 'meteor/meteor';
//webapp allows you to attach middleware
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/notes';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {

});
