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
    d20 = (mod) => {
      return Math.floor(Math.random() * 20 + 1) + mod;
    }

    return(
      <div>
        <p>
          <button onClick={d20}>dice roll is {d20(this.state.modifier)}</button>
          + {this.state.modifier}
        </p>
      </div>
    )
  }/////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////show modifier input the user the gm////////
  isGM(){
    onChange = (event) => {this.setState({modifier: event.target.value})}

    if (Meteor.userId() === 'y7aACCi9zEYNc6g2p') {
      const modInput = <input type="number" ref="modInput" name="modInput" placeholder={0} onChange={onChange}/>
      return <div>{modInput}</div>
    } else {
      return <div>+ {this.state.modifier}</div>
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
