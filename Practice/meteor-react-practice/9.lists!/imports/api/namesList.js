import {Mongo} from 'meteor/mongo';

export const NamesListDB = new Mongo.Collection('namesList');

export const GamesListDB = new Mongo.Collection('gamesList');
