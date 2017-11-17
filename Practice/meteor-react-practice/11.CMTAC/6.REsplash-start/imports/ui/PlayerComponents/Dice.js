import React from 'react';
import {Tracker} from 'meteor/tracker';
import { withTracker } from 'meteor/react-meteor-data';

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

  componentDidMount(){
    Tracker.autorun(() => {
      if (Meteor.user()) {
        isGM = Meteor.user().username === 'me';
        this.setState({ isGM })
      }
    });
  }


  //*********************dice*********************************
  ///////modifier//////
  onModifierChange(e) {
    this.setState({ modifier: e.target.value })
  }
  ///////dice roll////
  roll() {
   this.setState({ d20: Math.floor(Math.random() * 20 + 1) + Number(this.state.modifier) })
 }//************************************************************

  //////////////////////////////////////////////////////////////////////////////
  render(){
    // let isGM = this.isGM() ? <input type="number" placeholder={0} onChange={this.onModifierChange.bind(this)} value={this.state.modifier}/> : 'change this later'
    return (
      <div>
        <button onClick={this.roll.bind(this)}>Roll +{this.state.modifier}</button>
        {this.state.d20}
        {this.state.isGM ? <input type="number" placeholder={0} onChange={this.onModifierChange.bind(this)} value={this.state.modifier}/> : 'change this later to gm, not me'}
      </div>
    );
  }
};/////////////////////////////////////////////////////////////////////////////
