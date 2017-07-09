import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';

import Modifer from './Modifer';

export default class Dice extends React.Component{
  
  ///////////////if logged in, show dice! otherwise showlogin form//////////////////////////////////////////
  rollDice(){

    d20 = () => {
      let d20 = Math.floor(Math.random() * 20 + 1)
      console.log(d20)
      return (
        <div> dice roll is {d20} </div>
      )
    }
//
    return(
      <div>
        <p>
          <button onClick={d20}>Roll {d20}</button>
          + {this.state.modifier}
        </p>
      </div>
    )
  }/////////////////////////////////////////////////////////////////////////////////////////////////////////

  render(){
    return(
      <div>
        {this.isGM()}
        {this.rollDice()}
      </div>
    );
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
Dice.propTypes = {
  // modifier: React.PropTypes.number.isRequired
};
