import React from 'react';
import PropTypes from 'prop-types';
/////////////////////////////
import Game from './Game';

export default class GameList extends React.Component {
  renderGames() {
    if (this.props.games.length === 0) {
      return <p>Please add a game</p>
    } else {
      return this.props.games.map((game) => {
        return <Game key={game._id} game={game}/>;
      });
    }
  }
  render() {
    return(
      <div>
        {this.renderGames()}
      </div>
    );
  }
};
///////////////////////////////////
GameList.PropTypes = {
  games: PropTypes.array.isRequired
}
