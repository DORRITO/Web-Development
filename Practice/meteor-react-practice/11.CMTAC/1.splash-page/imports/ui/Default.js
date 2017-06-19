import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

export default class Splash extends React.Component{
  render() {
      return(
        <div>
          <h1>link page</h1>
          <p><Link to="/Link1">page 1</Link></p>
          <p><Link to="/Link2">page 2</Link></p>
          <p><Link to="/Link3">page 3</Link></p>
          <p><Link to="/Signup">Signup</Link></p>
        </div>
      );
  }
};
