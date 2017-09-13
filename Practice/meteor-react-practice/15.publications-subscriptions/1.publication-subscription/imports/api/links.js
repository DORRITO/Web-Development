import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

//make a collection on client and server
export const Links = new Mongo.Collection('links');

if(Meteor.isServer){
  //makes a publication, only available on server.  publications let us see api collections.
  //meteor remove autopublish to remove prototyping publish (unsecure)
          //links is the name of the publication you decide to make
  Meteor.publish('links', () => {
    return Links.find({url: '1st link'});
  });
}
