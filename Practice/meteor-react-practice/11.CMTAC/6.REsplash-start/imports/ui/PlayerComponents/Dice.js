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
      isGM: '',
      isReady: ''
    };
  }//////////////////

  // componentWillMount(){
     // Meteor.setTimeout(function(){console.log('hi')}, 1000);
  // }

  //*********************************mostly modifier dealings******************************************
  componentDidMount(){
    Tracker.autorun(() => {
      Meteor.subscribe('diceMod');
      Meteor.subscribe('diceResult');
      const isReady = Meteor.subscribe('diceResult').ready();
      this.setState({ isReady })
        if (Meteor.user()) {
          const modifier = DiceMod.find().fetch()[0];
          const d20 = DiceResult.findOne({"_id": String(this.state.owner)})

          isGM = Meteor.user().username === 'me'; //CHANGE CHANGE CHANGE IN FINAL VERSION
          modifier ? this.setState({ isGM, d20: d20.result, modifier: modifier.modifier }) : this.setState({ isGM })
        }
    })
  }//***************************************************************************************************
  // componentDidMount(){
  //   if (!this.state.isReady){ window.location.reload()}
  // }
  //*************************dice functions*************************************************************
  ///////modifier//////
  onModifierChange(e) {
    if (!this.state.isReady){ window.location.reload()}
    let modifier = e.target.value
    Meteor.subscribe('diceMod');
    Meteor.subscribe('diceResult');

    const isData = DiceMod.find().fetch()[0];

    isData ? Meteor.call('diceMod.update', Meteor.userId(), modifier) : Meteor.call('diceMod.insert', Meteor.userId(), modifier);
  }
  ///////dice roll////
  roll() {
    if (!this.state.isReady){ window.location.reload()}
    let d20 = Math.floor(Math.random() * 20 + 1) + Number(this.state.modifier)
    d20 < 1 ? d20 = 1 : d20 = d20
    Meteor.subscribe('diceResult');
    const isD20 = DiceResult.findOne({"_id": String(this.state.owner)})
    const owner = this.state.owner;

    isD20 ? Meteor.call('diceResult.update', owner, d20) : Meteor.call('diceResult.insert', owner, d20);
 }//**********************************************************************************************************

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
  owner: PropTypes.string.isRequired,
  // DiceResult: PropTypes.func.isRequired
};

export default withTracker(() => {
  // const DiceResult = DiceResult.findOne({"_id": String(this.state.owner)})
  return {
    // DiceResult
  };
})(DiceMod);
