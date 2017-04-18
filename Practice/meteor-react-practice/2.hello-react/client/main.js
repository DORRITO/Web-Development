import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function() {
  let react = 'reaccctt';
  let jsx = (
    <div>
      <h1>hello! {react}</h1>
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
})
