import React from 'react';

import {GamesListDB} from './../api/namesList';

export default class GamesList extends React.Component{

  constructor() {
    super();
    this.state = {renderNames: ''};
  }

  ///////////////////////////////////////////
  renderGames(gameList) {
    return gameList.map((game) => {
      return(
        <p key={game._id}>
          {game.name}
          <button onClick={() => GamesListDB.remove(game._id)}>delete</button>
        </p>
      );
    });
  };////////////////////////////////////////

  ////////when adding players///////////////
  handleSubmit2(e){
    e.preventDefault();
    let newGame = e.target.game.value;

    if (newGame){
      e.target.game.value = '';//set input to empty
      GamesListDB.insert({
        name: newGame
      });
    }
  };////////////////////////////////////////

  render() {
    let games = GamesListDB.find().fetch();
    return(
      <div>
        {renderGames(games)}
        <form onSubmit={this.state.handleSubmit2.bind(this)}>
          <input type="text" name="game" placeholder="name" />
          <button>Add Game</button>
        </form>
      </div>
    );
  }
};
