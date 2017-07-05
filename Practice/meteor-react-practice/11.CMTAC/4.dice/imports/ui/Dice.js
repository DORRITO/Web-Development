import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';

export default class Dice extends React.Component{

  //////////////////////////////////if logged in, show dice! otherwise showlogin form///////////////////////
  rollDice(){
    d20 = () => {
      return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    }
    // const showLoginStatus = !!Meteor.userId() ? 'this will be a dice roll' : <Link to="/login">Login</Link>;
    return <p>dice roll is {d20()}! (+/- {this.props.modifier})</p>
  }/////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////show modifier input the user the gm////////
  isGM(){
    if (Meteor.userId() === 'y7aACCi9zEYNc6g2p') {
      // let modifierInput = this.refs.modInput.value.trim();
      // console.log(modifierInput);
      console.log("we're in business")
      const modInput = <input type="number" ref="modInput" name="modInput" placeholder={0} />
      return <div>{modInput}</div>
    }
  }///////////////////////////////////////////////

  render(){
    return(
      <div>
        {this.rollDice()}
        {this.isGM()}
      </div>
    );
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
Dice.propTypes = {
  // modifier: React.PropTypes.number.isRequired
};
