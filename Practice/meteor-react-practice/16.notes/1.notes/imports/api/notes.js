import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import moment from 'moment';

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
  }///////////////////////////////////////////

  ///////////remove note///////////////////
});
