import React from 'react';

export default class Bing extends React.Component{

  ////////////////////
  sound(){
    alert('bing!');
  }///////////////////

  ///////////////////////////////////////
  render(){
    return(
      <div>
        <h2 onClick={this.sound}>sound</h2>
      </div>
    )
  }
};
