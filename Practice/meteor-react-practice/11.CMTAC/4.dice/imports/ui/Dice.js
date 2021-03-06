import React from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base';

export default class Dice extends React.Component{
  ///////////////////////
  constructor(props){
    super(props);
      this.state = {
        modifier: 0,
        diceRoll: undefined
    }
  }/////////////////////

  ///////////////Dice, dice roll result, and modifier on dice//////////////////////////////////////////
  rollDice(){
    const diceRoll = Number(this.state.diceRoll);
    const modifier = Number(this.state.modifier);
    d20 = () => {
      const d20 = Math.floor(Math.random() * 20 + 1 ) + modifier;
      this.setState({diceRoll: d20})
    }

    return(
      <div>
        <p>
          <button onClick={d20}>Roll</button>{diceRoll ? diceRoll : ''}
           + {this.state.modifier}
        </p>
      </div>
    )
  }/////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////show modifier input if the user is the gm////////
  isGM(){
    changeMod = (event) => {this.setState({modifier: event.target.value})}

    if (Meteor.userId() === 'y7aACCi9zEYNc6g2p') {
      const modInput = <input type="number" ref="modInput" name="modInput" placeholder={0} onChange={changeMod}/>
      return <div>{modInput}</div>
    }
  }/////////////////////////////////////////////////////////

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
