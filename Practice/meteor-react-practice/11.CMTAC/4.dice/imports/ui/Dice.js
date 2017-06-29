import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';

export default class Dice extends React.Component{

  constructor(props){
    super(props);
  }

  //////////////////////////////////if logged in, show dice! otherwise showlogin form///////////////////////
  rollDice(){
    d20 = () => {
      return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    }
    // const showLoginStatus = !!Meteor.userId() ? 'this will be a dice roll' : <Link to="/login">Login</Link>;
    return <p>dice roll is {d20()} plus {this.props.modifier}!</p>
  }/////////////////////////////////////////////////////////////////////////////////////////////////////////

  render(){
    return(
      <div>
        {this.rollDice()}
      </div>
    );
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
Dice.propTypes = {
  // modifier: React.PropTypes.number.isRequired
};
