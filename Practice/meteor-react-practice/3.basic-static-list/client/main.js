import React from 'react';
import ReactDOM from 'react-dom';
import { meteor } from 'meteor/meteor';

const list = [{
  _id: 1,
  name: 'chip',
}, {
  _id: 2,
  name: 'ric',
}, {
  _id: 3,
  name: 'reynor',
}];

const renderPeople = function(namesList){
  return list.map(function(name) {
    return <h3 key={name._id}>{name.name}</h3>
  })
}

Meteor.startup(function(){
  let jsx = (
    <div>
      {renderPeople()}
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'))
});
