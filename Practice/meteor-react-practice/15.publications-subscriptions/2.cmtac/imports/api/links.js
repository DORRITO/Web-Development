import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');
//publish a publication, which is grabbing data SECURELY from the aboove mongo.collection
if(Meteor.isServer){
  Meteor.publish('links', function(){
    return Links.find({userId: this.userId})
  });
}

//now make a method to call when the user clicks a button/////
Meteor.methods({
  'links.insert'(url) {
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    //validate what is sent
    new SimpleSchema({
      url: {
        type: String,
        label: 'Your link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({url})

    //add this it links Collection
    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId
    });
  }
})/////////////////////////////////////////////////
