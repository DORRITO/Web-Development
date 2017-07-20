import React from 'react';
import {Tracker} from 'meteor/tracker';

import {DiceData} from '../../api/dicedata';

export default class ResultAndModifier extends React.Component{
  ///////////////////////
  constructor(props){
    super(props);
      this.state = {
        modifier: 0,
        diceRoll: undefined
    };
  }/////////////////////

  //////////get data from dice data///////////
  componentDidMount(){
    this.modTracker = Tracker.autorun(() => {
      const dicedata = DiceData.find().fetch();
      this.setState({ links: dicedata});
    });
  }///////////////////////////////////////////

  //////////stops the tracker from continually running///
  componentWillUnmount(){
    console.log('component unmounted result mod component!!')
    // this.modTracker.stop();
  }///////////////////////////////////////////////////

  render() {
    return(
      <div>
        <p>result and mod</p>
        <div>{this.state.modifier}</div>
      </div>
    );
  }
};
