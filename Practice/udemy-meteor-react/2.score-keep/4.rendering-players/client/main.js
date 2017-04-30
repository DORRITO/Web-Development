import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = function(playersList) {

  return playersList.map(function(player) {
    return <p key={player._id}>{player.name} has {player.score} points</p>;
  });
};

Meteor.startup(function() {
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
                </div>
                );
      ReactDOM.render(jsx, document.getElementById('app'));
    });
    Players.insert({
      name: 'killua',
      score: 3
    });
})
