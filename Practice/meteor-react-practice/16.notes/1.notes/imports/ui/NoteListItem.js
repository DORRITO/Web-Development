import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

const NoteListItem = (props) => {
  return(
    <div>
      <h5>{props.note.title || 'Untitled note'}</h5>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////
NoteListItem.propTypes ={
  note: PropTypes.func.isRequired
}

export default withTracker;//(() => {
//   return {
//     loginWithPassword: Meteor.loginWithPassword
//   };
// })(Login);
