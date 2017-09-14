import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

//make a collection on client and server
export const Links = new Mongo.Collection('links');

if(Meteor.isServer){
  //makes a publication, only available on server.  publications let us see api collections.
  //meteor remove autopublish to remove prototyping publish (unsecure)
          //links is the name of the publication you decide to make
  Meteor.publish('links', function(){
    //only returns link if they have a user id.
    return Links.find({userId: this.userId});
  });
}

Meteor.methods({
  greetUser(name = 'user'){
    console.log('greetUser is running');

    if(!name){
      throw new Meteor.Error('invalid-arguments', 'name is required');
    }

    return `hello ${name}!`;
  }
})
