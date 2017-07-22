import React from 'react';
import {Tracker} from 'meteor/tracker';

import {DiceData} from '../../api/dicedata';

export default class ResultAndModifier extends React.Component{
  ///////////////////////
  constructor(props){
    super(props);
      this.state = {
        links: [],
        d20: 'placeholder',
        modifier: 0,
    };
  }/////////////////////

  //////////get data from dice data///////////
  componentDidMount(){
    this.modTracker = Tracker.autorun(() => {
      const dicedata = DiceData.find().fetch();
      this.setState({ links: dicedata});
      console.log(dicedata);
    });
  }///////////////////////////////////////////

  //////////stops the tracker from continually running///
  componentWillUnmount(){
    console.log('component unmounted result mod component!!')
    // this.modTracker.stop();
  }///////////////////////////////////////////////////

  renderLinksListItems(){
    return this.state.links.map((link) => {
      // return <p key={link._id}>result and mod: {link.d20} + {link.modifier}</p>
      this.state.d20 = link.d20
      this.state.modifier = link.modifier
    });
  }

  render() {
    this.renderLinksListItems()
    return(
      <div>
        <div>result and mod: {this.state.d20} + {this.state.modifier}</div>
        {/* <div>temp links: {this.renderLinksListItems()}</div> */}
      </div>
    );
  }
};
