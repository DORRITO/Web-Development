import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component{
  render(){
    return(
      <div key={this.props.player._id}>
          <h3>{this.props.player.name}</h3>
      </div>
    );
  }
};
/////
Player.PropTypes = {
  player: PropTypes.object.isRequired
}
