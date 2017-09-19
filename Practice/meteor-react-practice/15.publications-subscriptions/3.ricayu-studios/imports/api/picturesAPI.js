import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';//meteor npm install shortid

//make a collection on client and server
export const PicturesAPI = new Mongo.Collection('picturesAPI');

if(Meteor.isServer){
          //pictureAPI is the name of the publication you decide to make
  Meteor.publish('picturesAPI', function(){
    return Links.find({userId: this.userId});
  });
}

//method naming convention:  resource.action
Meteor.methods({
  'picturesAPI.insert'(pictureName) {
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    //validate what is sent!
    new SimpleSchema({
      picture: {
        type: String,
        label: 'Your picture', //adds your label to error/feedback
      }
    }).validate({ pictureName })

    PicturesAPI.insert({
      _id: shortid.generate(), //adds shortid id instead of meteor id
      pictureName,
      userId: this.userId
    });
  }
})
