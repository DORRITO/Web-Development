import { Meteor } from 'meteor/meteor';
//webapp allows you to attach middleware
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
// simple schema config file turns its errors into meteor errors, so I don't have to use try catch over and over
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {

});
