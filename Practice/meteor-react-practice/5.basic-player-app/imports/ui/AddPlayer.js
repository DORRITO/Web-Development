import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component{
  handleSubmit(e){
    let playerName = e.target.playerName.value
    //no page reload
    e.preventDefault();

    if(playerName){
      e.target.playerName.value='';
      Players.insert({
        name: playerName
      });
    }
  }
/////////////////////
  render(){
    return(
      <div>
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input name="playerName" placeholder="input name here"/>
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}
