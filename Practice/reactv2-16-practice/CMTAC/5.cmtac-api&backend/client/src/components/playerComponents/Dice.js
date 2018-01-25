import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// import {DiceMod} from './../../api/diceMod';
// import {DiceResult} from './../../api/diceResult';

export class Dice extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      owner: this.props.owner,
      d20: '',
      players: {},
      modifier: 0,
      isGM: '',
      name: ''
    };
  }

  // componentWillMount(){
     // Meteor.setTimeout(function(){console.log('hi')}, 1000);
  // }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ name: res.Players[this.state.owner].name }) )
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/players');
    // const response = await fetch('/players?type=cat');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  onModifierChange(e) {
    let modifier = e.target.value
    this.setState({modifier})
  }
  ///////dice roll////
  roll() {
    let d20 = Math.floor(Math.random() * 20 + 1) + Number(this.state.modifier)
    d20 < 1 ? d20 = 1 : d20 = d20

    fetch(`/players?name=${this.state.name}&dice=${d20}`, {method: 'PATCH'});

    // fetch('/players', { 
    //   method: 'PATCH',
    //   headers: {'Content-Type':'application/json'},
    //   body: { dice: '2'} 
    // })

    this.setState({d20})

 }//*************************************************************************************
//  {this.state.isGM ? <input type="number" placeholder={0} onChange={this.onModifierChange.bind(this)} value={this.state.modifier}/> : 'change this later to gm, not me'}

  //////////////////////////////////////////////////////////////////////////////
  render(){
      return (
        <div>
          <button onClick={this.roll.bind(this)}>Roll +{this.state.modifier}</button>
          {this.state.d20}{this.state.name}
          <input type="number" placeholder={0} onChange={this.onModifierChange.bind(this)} value={this.state.modifier}/>
        </div>
      )
  }
};/////////////////////////////////////////////////////////////////////////////

Dice.propTypes ={
  owner: PropTypes.string.isRequired
};