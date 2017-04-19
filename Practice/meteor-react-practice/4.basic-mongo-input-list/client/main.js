import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import { Names } from './../imports/api/names';

//makes name appear and gives it an id
const renderNames = function(namesList) {
  return namesList.map(function(name) {
    return <p key={name._id}>{name.name}</p>
  });
};
//what happens when you press submit
const handleSubmit = function(e){
  let name = e.target.inputName.value;

  e.preventDefault();

  if(name){
    //clears input field
    e.target.inputName.value = '';
    //then add new name
    Names.insert({
    name: name
    });
  }
}

//load page
Meteor.startup(function() {
//mongo tracker
  Tracker.autorun(function() {
    let names = Names.find().fetch();
    let jsx = (
      <div>
        {renderNames(names)}
        <form onSubmit={handleSubmit}>
          <input type='text' name='inputName' placeholder="name" />
          <button>Add name</button>
        </form>
      </div>
    );
  ReactDOM.render(jsx, document.getElementById('app'));
  });
});
