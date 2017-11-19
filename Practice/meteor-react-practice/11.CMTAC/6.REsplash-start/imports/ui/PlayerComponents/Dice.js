import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { withTracker } from 'meteor/react-meteor-data';

import {DiceMod} from './../../api/diceMod';

export class Dice extends React.Component{
  ///////////////////
  constructor(props){
    super(props);
    this.state = {
      d20: '',
      modifier: 0,
      isGM: ''
    };
  }//////////////////

  //*********************************mostly modifier dealings******************************************
  componentDidMount(){
    Tracker.autorun(() => {

      if (Meteor.user()) {
        Meteor.subscribe('diceMod');
        const modifier = DiceMod.find().fetch()[0]
        console.log(!!modifier)
        console.log(modifier)

        isGM = Meteor.user().username === 'me'; //CHANGE CHANGE CHANGE IN FINAL VERSION
        modifier ? this.setState({ isGM, modifier: modifier.modifier }) : this.setState({ isGM })
      }
    });
  }//***************************************************************************************************

  //*************************dice functions*************************************************************
  ///////modifier//////
  onModifierChange(e) {
    let modifier = e.target.value
    Meteor.subscribe('diceMod');
    const isData = DiceMod.find().fetch()[0]

    isData ? Meteor.call('diceMod.update', Meteor.userId(), modifier) : Meteor.call('diceMod.insert', Meteor.userId(), modifier)
  }
  ///////dice roll////
  roll() {
   this.setState({ d20: Math.floor(Math.random() * 20 + 1) + Number(this.state.modifier) })
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

export default withTracker(() => {
  return {};
})(DiceMod);
