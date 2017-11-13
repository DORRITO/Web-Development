import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
  const email = user.username[0].address;

  new SimpleSchema({
    username: {
      type: String,
    }
  }).validate({ username })

  return true;
});
