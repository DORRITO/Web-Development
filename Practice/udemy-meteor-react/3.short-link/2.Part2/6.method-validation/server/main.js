import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  //code to run on server at startup
  // Meteor.call('greetUser', (err, res) => {
  //   console.log('greet user arguments', err, res);
  // }); //this calls a meteor.method defined in links api. greetuser is the name of that method
});
