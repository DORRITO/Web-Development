import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

import LoginOrDice from './../LoginOrDice';

export default class Rychar extends React.Component{

  render(){
    return(
      <div className="game-div">
        <p>Rychar</p>
        <LoginOrDice modifier="0"/>
      </div>
    );
  }
};
