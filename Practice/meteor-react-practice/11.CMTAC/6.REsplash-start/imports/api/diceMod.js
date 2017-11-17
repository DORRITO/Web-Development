import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const DiceMod = new Mongo.Collection('dicMod');

if (Meteor.isServer){
  Meteor.publish('diceMod', function(){
    return DiceMod.find({});
  });
}
/////////////////////////////////////////////////
Meteor.methods({
  'diceMod.update'(update){
    console.log('greetUser is running');
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    DiceMod.update({
      $set: { ...update }
    });
  }//////////////////////////////////////////////
});
