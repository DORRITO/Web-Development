import React from 'react';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import {Notes} from '../api/notes';

export const NoteList = (props) =>{
  return (
    <div>
      NoteList {props.notes.length}
    </div>
  );
};

///////////////////////////////////////////////////
NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default withTracker(() => {
  Meteor.subscribe('notes');

  return{
    notes: Notes.find().fetch()
  }
})(NoteList);
