import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';

export default class Rychar extends React.Component{
  render(){
    return(
      <div className="game-div">
        <p>Rychar</p>
        <p><Link to="/login">Login</Link></p>
      </div>
    );
  }
};
