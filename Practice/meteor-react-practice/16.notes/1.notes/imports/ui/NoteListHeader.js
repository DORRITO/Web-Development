import React from 'react';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export const NoteListHeader = (props) => {
  return (
    <div>
      <button onClick={() => {
        props.meteorCall('notes.insert');
      }}>Creat Note</button>
    </div>
  );
};
///////////////////////////////////////////
export default withTracker(() => {
  return {
    meteorCall: Meteor.call
  };
})(NoteListHeader);
