import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';

import {DiceMod} from './../../api/diceMod';
import {DiceResult} from './../../api/diceResult';

export class Dice extends React.Component{
  ///////////////////
  constructor(props){
    super(props);
    this.state = {
      owner: this.props.owner,
      d20: '',
      modifier: 0,
      isGM: ''
    };
  }//////////////////

  // componentWillMount(){
     // Meteor.setTimeout(function(){console.log('hi')}, 1000);
  // }

  //*********************************mostly modifier dealings**************************
  componentDidMount(){
    
  }//**********************************************************************************
 
  //*************************dice functions********************************************
  ///////modifier//////
  onModifierChange(e) {
    let modifier = e.target.value
  }
  ///////dice roll////
  roll() {
    let d20 = Math.floor(Math.random() * 20 + 1) + Number(this.state.modifier)
    d20 < 1 ? d20 = 1 : d20 = d20

 }//*************************************************************************************

  //////////////////////////////////////////////////////////////////////////////
  render(){
      return (
        <div>
          <button onClick={this.roll.bind(this)}>Roll +{this.state.modifier}</button>
          {this.state.d20}
          {this.state.isGM ? <input type="number" placeholder={0} onChange={this.onModifierChange.bind(this)} value={this.state.modifier}/> : 'change this later to gm, not me'}
        </div>
      )
  }
};/////////////////////////////////////////////////////////////////////////////

Dice.propTypes ={
  owner: PropTypes.string.isRequired
};