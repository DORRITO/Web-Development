import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import {D20Data} from './../imports/api/d20data';

Meteor.startup(() => {
  console.log('server up and running');

  // Meteor.call('greetUser', (err, res) => {
  //   console.log('greet user arguments', err, res);
  // })

});
