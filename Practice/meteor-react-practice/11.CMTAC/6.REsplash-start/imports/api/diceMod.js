import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const DiceMod = new Mongo.Collection('dicMod');

if (Meteor.isServer){
  Meteor.publish('diceMod', function(){
    return DiceMod.find({userId: this.userId});
  });
}
Meteor.methods({
  greetUser(){
    console.log('greetUser is running');
    return 'hello user';
  }
});
