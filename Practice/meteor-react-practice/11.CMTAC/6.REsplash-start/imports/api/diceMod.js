import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const DiceMod = new Mongo.Collection('diceMod');

if (Meteor.isServer){
  Meteor.publish('diceMod', function(){
    return DiceMod.find({});
  });
}
/////////////////////////////////////////////////
Meteor.methods({
  'diceMod.insert'(modifier){
    console.log('greetUser is running');
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    return DiceMod.insert({
      modifier
    });
  }//////////////////////////////////////////////
});
