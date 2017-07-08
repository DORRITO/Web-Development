import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';

export default class Dice extends React.Component{
  ///////////////////////
  constructor(props){
    super(props);
      this.state = {
        modifier: 0
    }
  }/////////////////////

  ///////////////if logged in, show dice! otherwise showlogin form//////////////////////////////////////////
  rollDice(){
    d20 = () => {
      return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    }
    return <p>dice roll is {d20()}! (+/- {this.state.modifier})</p>
  }/////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////show modifier input the user the gm////////
  isGM(){
    onChange = (event) => {this.setState({modifier: event.target.value})}

    if (Meteor.userId() === 'y7aACCi9zEYNc6g2p') {
      const modInput = <input type="number" ref="modInput" name="modInput" placeholder={this.state.modifier} onChange={onChange}/>
      return <div>{modInput}</div>
    } else {
      return <div>+ {this.state.modifier}</div>
    }
  }///////////////////////////////////////////////

  PLAYERSEESTHIS(){
    return <div>+ {this.state.modifier} PLAYER SEES THIS</div>
  }

  render(){
    return(
      <div>
        {this.rollDice()}
        {this.isGM()}
        {this.PLAYERSEESTHIS()}
      </div>
    );
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
Dice.propTypes = {
  // modifier: React.PropTypes.number.isRequired
};
