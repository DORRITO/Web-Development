import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  //publish requires 2 arguments, string name to call it, and a function
  Meteor.publish('links', function() {
    let user = this.userId;
    return Links.find({ userId: this.userId });
  });
}
//naming convention:  name then . action.  (emails.archive, llllinks.insert)
Meteor.methods({
  'links.insert'(url) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    /////////////validate url///////////
    new SimpleSchema({
      url: {
        type: String,
        label: 'your link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({url});//es6, could be url: url
    /////////////////////////////////////

    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId
    });
  }
});
