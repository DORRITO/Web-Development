import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Rychar = new Mongo.Collection('rychar');

if (Meteor.isServer){
  Meteor.publish('rychar', function(){
    return Rychar.find({});
  });
}