import React from 'react';
import PropTypes from 'prop-types';
import {Games} from './../api/lists';

export default class AddGame extends React.Component{
  handleSubmit(e) {
    let gameName = e.target.gameName.value;
    //doesnt let page reload
    e.preventDefault();

    if (gameName){
      e.target.gameName.value = '';
      Games.insert({
        name: gameName
      });
    }
  }
  //////////////////////////////////////////////////
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="gameName" placeholder="Add a game" />
          <button>Add Name</button>
        </form>
      </div>
    );
  }
};
