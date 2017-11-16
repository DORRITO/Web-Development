import React from 'react';
import PropTypes from 'prop-types';

export class Dice extends React.Component{
  ///////////////////
  constructor(props){
    super(props);
    this.state = {
      d20: '',
      modifier: 0,
    };
  }//////////////////

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
    return (
      <div>
        <button onClick={this.roll.bind(this)}>Roll +{this.state.modifier}</button>
        {this.state.d20}
        <input type="number" placeholder={0} onChange={this.onModifierChange.bind(this)} value={this.state.modifier}/>
        {/*make this only seen to gm*/}
      </div>
    );
  }
};/////////////////////////////////////////////////////////////////////////////

Dice.propTypes ={
};
