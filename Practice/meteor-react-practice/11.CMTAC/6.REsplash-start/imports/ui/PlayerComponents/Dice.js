import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

import {DiceMod} from './../../api/diceMod';
import {DiceResult} from './../../api/diceResult';

export class Dice extends React.Component{
  ///////////////////
  constructor(props){
    super(props);
    this.state = {
      owner: this.props.owner,
      d20: 0,
      modifier: 0,
      isGM: ''
    };
  }//////////////////

  //*********************************mostly modifier dealings******************************************
  componentWillMount(){
    Tracker.autorun(() => {
      Meteor.subscribe('diceMod');
      Meteor.subscribe('diceResult');
      const isReady = Meteor.subscribe('diceResult').ready();
      if (Meteor.user()) {
        console.log(!!isReady)
        const modifier = DiceMod.find().fetch()[0];
        const d20 = DiceResult.findOne({"_id": String(this.state.owner)}).result

        isGM = Meteor.user().username === 'me'; //CHANGE CHANGE CHANGE IN FINAL VERSION
        modifier ? this.setState({ isGM, d20 ,modifier: modifier.modifier }) : this.setState({ isGM })
      }
    });
  }//***************************************************************************************************

  //*************************dice functions*************************************************************
  ///////modifier//////
  onModifierChange(e) {
    let modifier = e.target.value
    Meteor.subscribe('diceMod');
    Meteor.subscribe('diceResult');

    const isData = DiceMod.find().fetch()[0]
    const ownerIs = DiceResult.findOne({"_id": String(this.state.owner)})._id

    isData ? Meteor.call('diceMod.update', Meteor.userId(), modifier) : Meteor.call('diceMod.insert', Meteor.userId(), modifier)
  }
  ///////dice roll////
  roll() {
    let d20 = Math.floor(Math.random() * 20 + 1) + Number(this.state.modifier)
    d20 < 0 ? d20 = 0 : d20 = d20
    Meteor.subscribe('diceResult');
    const isD20 = DiceResult.findOne({"_id": String(this.state.owner)});
    const owner = this.state.owner;

    isD20 ? Meteor.call('diceResult.update', owner, d20) : Meteor.call('diceResult.insert', owner, d20)
 }//**********************************************************************************************************

  //////////////////////////////////////////////////////////////////////////////
  render(){
    return (
      <div>
        <button onClick={this.roll.bind(this)}>Roll +{this.state.modifier}</button>
        {this.state.d20}
        {this.state.isGM ? <input type="number" placeholder={0} onChange={this.onModifierChange.bind(this)} value={this.state.modifier}/> : 'change this later to gm, not me'}
      </div>
    );
  }
};/////////////////////////////////////////////////////////////////////////////

Dice.propTypes ={
  owner: PropTypes.string.isRequired
};

export default withTracker(() => {
  return {};
})(DiceMod);
