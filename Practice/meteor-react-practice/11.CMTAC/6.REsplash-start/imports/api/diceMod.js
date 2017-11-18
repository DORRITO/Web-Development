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

  //***********************************************
  'diceMod.insert'(_id, modifier){
    console.log('update is running!');
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    DiceMod.insert({
      _id,
      modifier
    });
  },//***********************************************

  //***********************************************
  'diceMod.update'(_id, modifier){
    console.log('update is running!');
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    return DiceMod.update(_id, {$set: {modifier}});
  }//***********************************************
});
