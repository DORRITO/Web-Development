import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';

import LoginOrDice from './../LoginOrDice';
export default class GM extends React.Component{
  render(){
    return(
      <div className="game-div">
        <p>GM</p>
        <LoginOrDice />
      </div>
    );
  }
};
