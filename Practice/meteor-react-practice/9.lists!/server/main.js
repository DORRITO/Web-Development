import { Meteor } from 'meteor/meteor';
import { namesListDB, gamesList } from './../imports/api/namesList';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('server up and running');
});
