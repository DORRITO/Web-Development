import React from 'react';
import {Tracker} from 'meteor/tracker';

import {D20Data} from '../../api/d20data';

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
    this.DiceTracker = Tracker.autorun(() => {
      const d20 = D20Data.find().fetch();
      this.setState({ links: d20 });
      console.log(d20);
    });
  }///////////////////////////////////////////

  //////////stops the tracker from continually running///
  componentWillUnmount(){
    console.log('component unmounted result mod component!!')
    this.DiceTracker.stop();
  }///////////////////////////////////////////////////

  ///////////////////update modifiers//////////////
  renderLinksListItems(){
    return this.state.links.map((link) => {
      this.state.d20 = link.d20
      this.state.modifier = link.modifier
    });
  }///////////////////////////////////////////////

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
