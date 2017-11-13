import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Notes = new Mongo.Collection('notes');

if (Meteor.isServer){
  Meteor.publish('notes', function(){
    return Notes.find({userId: this.userId});
  });
}

Meteor.methods({ //methods to use
  ///////////////insert notes//////////////////////
  'notes.insert'(){                              //
    if(!this.userId){                            //
      throw new Meteor.Error('not-authorized')   //
    }                                            //
                                                 //
    return Notes.insert({                        //
      title: '',                                 //
      body: '',                                  //
      userId: this.userId                        //
    });                                          //
  },///////////////////////////////////////////////

  /////////////////remove note////////////////////////////
  'notes.remove'(_id){                                  //
    if(!this.userId){                                   //
      throw new Meteor.Error('not-authorized')          //
    }                                                   //
                                                        //
    new SimpleSchema({                                  //
      _id: {                                            //
        type: String,                                   //
        min: 1                                          //
      }                                                 //
    }).validate({ _id });                               //
                                                        //
    return Notes.remove({ _id, userId: this.userId });  //this.userId makes sure it only removes that users note
  },//////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////
  'notes.update'(_id, updates){                         //
    if(!this.userId){                                   //
      throw new Meteor.Error('not-authorized')          //
    }                                                   //
                                                        //
    new SimpleSchema({                                  //
      _id:{                                             //
        type: String,                                   //
        min: 1                                          //
      },                                                //
      title:{                                           //
        type: String,                                   //
        optional: true                                  //
      },                                                //
      body:{                                            //
        type: String,                                   //
        optional: true                                  //
      }                                                 //
    }).validate({                                       //
      _id,                                              //
      ...updates //keeps someone from adding on malicious updates since it will not be defined
    });                                                 //
                                                        //
    Notes.update(_id, {                                 //
      $set: { ...updates }                              //
    });                                                 //
  }///////////////////////////////////////////////////////
});
