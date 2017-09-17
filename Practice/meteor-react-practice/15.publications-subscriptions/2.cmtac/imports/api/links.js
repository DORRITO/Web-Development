import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simple-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');
//publish a database/publication
if(Meteor.isServer){
  Meteor.publish('links', function(){
    return Links.find({})
  });
}
//now make a method to call when the user clicks a button
