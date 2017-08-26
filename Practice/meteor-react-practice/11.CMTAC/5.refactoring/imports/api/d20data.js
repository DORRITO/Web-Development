import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const D20Data = new Mongo.Collection('d20Data');

if(Meteor.isServer){
  Meteor.publish('d20Data', () => {
    return D20Data.find();  //{userId: this.userId}
  });
}
//
Meteor.methods({
  greetUser(){
    console.log('greetUser is running');

    return 'Hello user!';
  }
})
