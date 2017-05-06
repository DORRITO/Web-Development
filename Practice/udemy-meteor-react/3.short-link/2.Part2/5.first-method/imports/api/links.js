import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  //publish requires 2 arguments, string name to call it, and a function
  Meteor.publish('links', function() {
    let user = this.userId;
    return Links.find({ userId: this.userId });
  });
}

Meteor.methods({
  greetUser(name) {
    console.log('greetUser is running');

    if (!name) {
      throw new Meteor.Error('invalid-arguments', 'Name is requred');
    }
    return `hello ${name}!`;
  },
  addNumbers(a, b){
    if (typeof a!=='number' || typeof b!=='number'){
      throw new Meteor.Error('invalid-arguments', 'expecting two numbers.');
    }
    return a + b;
  }
});
