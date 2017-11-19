import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const DiceResult = new Mongo.Collection('diceResult');

if (Meteor.isServer){
  Meteor.publish('diceResult', function(){
    return DiceResult.find({});
  });
}
/////////////////////////////////////////////////
Meteor.methods({

  //***********************************************
  'diceResult.insert'(_id, modifier){
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    DiceResult.insert({
      _id,
      modifier
    });
  },//***********************************************

  //***********************************************
  'diceResult.update'(_id, modifier){
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    return DiceResult.update(_id, {$set: {modifier}});
  }//***********************************************
});
