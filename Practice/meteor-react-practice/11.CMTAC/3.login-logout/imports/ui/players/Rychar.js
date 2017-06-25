import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

export default class Rychar extends React.Component{

  render(){
    return(
      <div className="game-div">
        {Meteor.userId ? <p>hello</p> : <p>no wayi</p>}
        <p>Rychar</p>
        <p><Link to="/login">Login</Link></p>
      </div>
    );
  }
};
