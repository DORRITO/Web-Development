import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import NamesList from './../imports/ui/NameList';
import GamesList from './../imports/ui/GameList';

Meteor.startup(() => {
    Tracker.autorun(function() {
      let lists = (
        <div>
          <NamesList />
          <GamesList />
        </div>
      );
      ReactDOM.render(lists, document.getElementById('app'));
    });
})
