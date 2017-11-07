import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';
import PropTypes from 'prop-types';

export const NoteListItem = (props) => {
const className = props.note.selected ? 'item item--selected' : 'item';

  return(
    <div className={className} onClick={() => {
      props.Session.set('selectedNoteId', props.note._id) }}>
      <h5 className="item__title">{props.note.title || 'Untitled note'}</h5>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////
NoteListItem.propTypes ={
  note: PropTypes.object.isRequired,
  Session: PropTypes.object.isRequired
}
export default withTracker(() => {
  return {Session};
})(NoteListItem);
