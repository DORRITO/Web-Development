import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
  const username = user.username;
  console.log(username)
  new SimpleSchema({
    username: {
      type: String,
    }
  }).validate({ username })

  return true;
});
