import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function() {
  Players.insert({
    name: 'CHIp',
    score: 777
  });
  console.log(Players.find().fetch());
});
