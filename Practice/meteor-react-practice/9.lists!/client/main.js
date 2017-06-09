import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {NamesList, GamesList} from './../imports/api/namesList';

///////////////////////////////////////////
const renderNames = (nameList) => {
  return nameList.map((name) => {
    return(
      <p key={name._id}>
        {name.name}
        <button onClick={() => NamesList.remove(name._id)}>delete</button>
      </p>
    );
  });
};////////////////////////////////////////

///////////////////////////////////////////
const renderGames = (gameList) => {
  return gameList.map((game) => {
    return(
      <p key={game._id}>
        {game.name}
        <button onClick={() => GamesList.remove(game._id)}>delete</button>
      </p>
    );
  });
};////////////////////////////////////////

////////when adding players///////////////
const handleSubmit1 = (e) => {
  e.preventDefault();
  let newName = e.target.name.value;

  if (newName){
    e.target.name.value = '';//set input to empty
    NamesList.insert({
      name: newName
    });
  }
};////////////////////////////////////////


////////when adding players///////////////
const handleSubmit2 = (e) => {
  e.preventDefault();
  let newGame = e.target.game.value;

  if (newGame){
    e.target.game.value = '';//set input to empty
    GamesList.insert({
      name: newGame
    });
  }
};////////////////////////////////////////

Meteor.startup(() => {
    Tracker.autorun(function() {
      let names = NamesList.find().fetch();
      let games = GamesList.find().fetch();

      let lists = (
                <div>
                  <div>
                    {renderNames(names)}
                    <form onSubmit={handleSubmit1}>
                      <input type="text" name="name" placeholder="Player name" />
                      <button>Add Name</button>
                    </form>
                  </div>
                  <div>
                    {renderGames(games)}
                    <form onSubmit={handleSubmit2}>
                      <input type="text" name="game" placeholder="Game name" />
                      <button>Add Name</button>
                    </form>
                  </div>
                </div>
                );
      ReactDOM.render(lists, document.getElementById('app'));
    });
})
