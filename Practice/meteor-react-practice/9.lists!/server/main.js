import { Meteor } from 'meteor/meteor';
import { namesList, gamesList } from './../imports/api/namesList';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('server up and running');
});
