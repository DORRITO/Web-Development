import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';
import PropTypes from 'prop-types';

export const NoteListItem = (props) => {
  return(
    <div onClick={() => {
      props.Session.set('selectedNoteId', props.note._id) }}>
      <h5>{props.note.title || 'Untitled note'}</h5>
      {props.note.selected ? 'selected' : undefined}
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////
NoteListItem.propTypes ={
  note: PropTypes.func.isRequired,
  Session: PropTypes.func.isRequired
}
export default withTracker(() => {
  return {Session};
})(NoteListItem);
