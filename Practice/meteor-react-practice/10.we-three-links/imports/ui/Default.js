import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

export default class General extends React.Component{
  render() {
      return(
        <div>
          <h1>link page</h1>
          <Link to="/Link1">page 1</Link>
        </div>
      );
  }
};
