import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

export const Player = (props) => {

  return (
    <div>
      <h5>{props.name}</h5>
      <div className="divWithPicture"></div>
    </div>
  );
};
//////////////////////////////////////////////////////////////////////
Player.propTypes ={
  name: PropTypes.string.isRequired
};

export default withTracker(() => {
  return {};
})(Player);
