import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';


export const Notes = new Mongo.Collection('notes');

Meteor.methods({ //methods to use
  ///////////////insert notes//////////////////
  'notes.insert'(){
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    return Notes.insert({
      title: '',
      body: '',
      userId: this.userId
    });
  },///////////////////////////////////////////

  ///////////remove note///////////////////
  'notes.remove'(_id){
    if(!this.userId){
      throw new Meteor.Error('not-authorized')
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({ _id });

    return Notes.remove({ _id, userId: this.userId }); //this.userId makes sure it only removes that users note
    });
  }
});
