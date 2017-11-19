import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

import {Dice} from './Dice';
import PlayerBoxIcon from './PlayerBoxIcon';

export class Player extends React.Component{
  //******************
  constructor(props){
    super(props);
    this.state = {
      d20: '',
      modifier: 0,
    };
  }//*****************

  //**************dice roll*********************************
  roll() {
   this.setState({ d20: Math.floor(Math.random() * 20 + 1) })
 }//*******************************************************

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

export default withTracker(() => {
  return {};
})(Player);
