import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

//make a collection on client and server
export const Links = new Mongo.Collection('links');

if(Meteor.isServer){
  //makes a publication, only available on server.  publications let us see api collections.
  //'meteor remove autopublish' to remove prototyping publish (unsecure).  'meteor add accounts-password for a real one'
  //'meteor remove insecure' to remove any clientside ability to do stuff to the data.
          //links is the name of the publication you decide to make
  Meteor.publish('links', function(){
    //only returns link if they have a user id.
    return Links.find({userId: this.userId});
  });
}


//method naming convention:  resource.action
//archiving emails?:         emails.archive
Meteor.methods({
  'links.insert'(url) {
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    //validate what is sent!
    new SimpleSchema({
      url: {
        type: String,
        label: 'Your link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url })

    Links.insert({
      url,
      userId: this.userId
    });
  }
})
