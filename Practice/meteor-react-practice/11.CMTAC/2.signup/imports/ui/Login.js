import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

export default class Login extends React.Component{
  ///////////////////////////
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }/////////////////////////

  /////////////////////////////////////////////////////////////////////////////
  render() {
    return(
      <div>
        <p>Logout</p>
        <Link to='/signup'>Need to setup a login?</Link>
        <p><Link to="/">Back to the main page</Link></p>
      </div>
    );
  }///////////////////////////////////////////////////////////////////////////
};
