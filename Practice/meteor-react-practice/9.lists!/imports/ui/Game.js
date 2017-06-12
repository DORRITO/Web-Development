import React from 'react';
import PropTypes from 'prop-types';

import {Games} from './../api/lists';

export default class Game extends React.Component{
  render(){
    return(
      <p key={this.props.game._id}>
        {this.props.game.name}
        <button onClick={() => Games.remove(this.props.game._id)}>remove</button>
      </p>
    );
  }
};
///////////////////////
Game.propTypes = {
  game: PropTypes.object.isRequired
}
