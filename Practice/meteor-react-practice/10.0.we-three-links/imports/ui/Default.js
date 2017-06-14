import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

export default class General extends React.Component{
  render() {
      return(
        <div>
          <h1>link page</h1>
          <Link to="/Link1">page 1</Link>
          <Link to="/Link2">page 2</Link>
          <Link to="/Link3">page 3</Link>
        </div>
      );
  }
};
