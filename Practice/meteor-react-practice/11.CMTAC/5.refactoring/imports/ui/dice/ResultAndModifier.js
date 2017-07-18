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

  componentDidMount(){
    Tracker.autorun(() => {
      const dicedata = DiceData.find().fetch();
      console.log('new dice data', dicedata);
    });
  }

  componentWillUnmount(){
    console.log('component unmounted result mod component!!')
  }

  render() {
    return(
      <div>
        <p>resutl and mod</p>
      </div>
    );
  }
};
