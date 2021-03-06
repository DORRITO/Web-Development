import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import AddPlayer from './../imports/ui/AddPlayer';
import TitleBar from './../imports/ui/TitleBar';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(() => {
    Tracker.autorun(() => {
      let players = Players.find().fetch();
      let title = "account settings";
      let jsx = (
                <div>
                  <TitleBar title={title} subtitle="this is the subtitle"/>
                  <PlayerList players={players}/>
                  <AddPlayer />
                </div>
                );
      ReactDOM.render(jsx, document.getElementById('app'));
    });
})
