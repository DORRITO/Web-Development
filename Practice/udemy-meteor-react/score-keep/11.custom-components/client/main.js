import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import AddPlayer from './../imports/ui/AddPlayer';
import TitleBar from './../imports/ui/TitleBar';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return(
      <p key={player._id}>
        {player.name} has {player.score} points
        <button onClick={() => {Players.update(player._id, {$inc: {score: 1}})}}>+1</button>
        <button onClick={() => {Players.update(player._id, {$inc: {score: -1}})}}>-1</button>
        <button onClick={() => Players.remove(player._id)}>delete</button>
      </p>
    );
  });
};
/////////////////////////////////////////

Meteor.startup(() => {
    Tracker.autorun(() => {
      let players = Players.find().fetch();
      let title = "account settings";
      let jsx = (
                <div>
                  <TitleBar title={title} subtitle="this is the subtitle"/>
                  {renderPlayers(players)}
                  <AddPlayer />
                </div>
                );
      ReactDOM.render(jsx, document.getElementById('app'));
    });
})
