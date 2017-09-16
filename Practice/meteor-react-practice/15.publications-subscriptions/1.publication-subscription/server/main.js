import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
import '../imports/api/links';
// simple schema config file turns its errors into meteor errors, so I don't have to use try catch over and over
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // code to run on server at startup

});
