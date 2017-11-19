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
  'diceResult.insert'(result, owner){
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    DiceResult.insert({
      result,
      owner
    });
  },//***********************************************

  //***********************************************
  'diceResult.update'(_id, result){
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    return DiceResult.update(_id, {$set: {result}});
  }//***********************************************
});
