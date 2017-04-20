import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <p key={player._id}>{player.name} has {player.score} points</p>;
  });
};
/////////////////////////////////////////
const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;
  //doesnt let page reload
  e.preventDefault();

  if (playerName){
    //set input to empty
    e.target.playerName.value = '';
    //then
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

Meteor.startup(() => {
    //call tracker.autroun
    //creat variable called players, set equal to fetch query
    // render players to screen
    Tracker.autorun(function() {
      let players = Players.find().fetch();
      let title = "account settings";
      let name = 'CHIp';
      let jsx = (
                <div>
                  <h1>{title}</h1>
                  <p>Hello {name}</p>
                  <p>This is my second p tag</p>
                  {renderPlayers(players)}
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name" />
                    <button>Add Player</button>
                  </form>
                </div>
                );
      ReactDOM.render(jsx, document.getElementById('app'));
    });
})
