import React from 'react';
import {Tracker} from 'meteor/tracker';

import {DiceData} from '../../api/dicedata';

export default class ResultAndModifier extends React.Component{
  ///////////////////////
  constructor(props){
    super(props);
      this.state = {
        modifier: 0,
        d20: undefined
    };
  }/////////////////////

  //////////get data from dice data///////////
  componentDidMount(){
    this.modTracker = Tracker.autorun(() => {
      const dicedata = DiceData.find().fetch();
      // this.setState({ links: dicedata});
      console.log(dicedata);
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
        <div>result and mod: {this.state.d20} + {this.state.modifier}</div>
      </div>
    );
  }
};
