import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup

  //says what property you want, and then says what it has to be. so name property, and it has to be a string
  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1, //length of string
  //     max: 200,
  //     optional: true
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // });
  // petSchema.validate({
  //   name: 'cat',
  //   age: 3,
  //   contactNumber: '113-456-1325'
  // });

});
