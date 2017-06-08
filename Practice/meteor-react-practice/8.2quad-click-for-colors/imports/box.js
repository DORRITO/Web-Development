import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';

import Box from './ui/Box';

export const box = (
    <div className="overlay">
      <div className="container">
        <div className="box box--top-left">
          <Box />
        </div>
        <div className="box box--top-right">
          <Box />
        </div>
      </div>
      <div className="container">
        <div className="box box--bottom-left">
          <Box />
        </div>
        <div className="box box--bottom-right">
          <Box />
        </div>
      </div>
    </div>
);
/////////////////////////////////////
// Box.propTypes = {
//   catPicture: PropTypes.string.isRequired,
// };
