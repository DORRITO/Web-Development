import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(age = '0') {
      this.age = age;
    }
    getGreeting() { return `hi, im ${this.age}` }
  }

  let me = new Person(2);
  console.log(me.getGreeting());
});
