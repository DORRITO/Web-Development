import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function() {
    let title = "account settings";
    let name = 'CHIp';
    let jsx = (
              <div>
                <h1>{title}</h1>
                <p>Hello {name}</p>
                <p>This is my second p tag</p>
              </div>
              );
    ReactDOM.render(jsx, document.getElementById('app'));
})
