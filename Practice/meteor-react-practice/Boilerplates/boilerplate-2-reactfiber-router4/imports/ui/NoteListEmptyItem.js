import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

const NoteListEmptyItem = () => {
  return (
    <p className="empty-item">You have no notes</p>
  );
};

export default NoteListEmptyItem;
