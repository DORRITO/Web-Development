import React from 'react';
import PropTypes from 'prop-types';

import {Dice} from './Dice';
import PlayerBoxIcon from './PlayerBoxIcon';

export class Player extends React.Component{
  //******************
  constructor(props){
    super(props);
    this.state = {
      d20: '',
      modifier: 0
    };
  }//*****************

  //////////////////////////////////////////////////////////////////
  render(){
    return (
      <div>
        <PlayerBoxIcon icon={this.props.icon}/>
        <div className="divWithbackground">
          <h5>{this.props.name}</h5>
          <Dice owner={this.props.name}/>
        </div>
      </div>
    );
  }////////////////////////////////////////////////////////////////////////////
};
//////////////////////////////////////////////////////////////////////
Player.propTypes ={
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
  // roll: PropTypes.func.isRequired
};