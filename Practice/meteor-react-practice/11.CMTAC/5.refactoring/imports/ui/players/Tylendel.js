import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';

import LoginOrDice from './../dice/LoginOrDice';

export default class Tylendel extends React.Component{
  render(){
    return(
      <div className="game-div">
        <p>Tylendel</p>
        <LoginOrDice />
      </div>
    );
  }
};
