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
      let d20 = Math.floor(Math.random() * 20 + 1)
      console.log(d20)
      return (
        <div> dice roll is {d20} </div>
      )
    }

    return(
      <div>
        <p>
          <button onClick={d20}>Roll {d20}</button>
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
    }
  }///////////////////////////////////////////////

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
