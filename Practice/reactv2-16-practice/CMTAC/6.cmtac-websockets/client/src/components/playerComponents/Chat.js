import React from 'react';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

export class Chat extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }
  ///////////updates text change//////////
  onTextChange(e){
    this.setState({text: e.target.value});
  }////////////////////////////////////////

  ///////////////////////////roll///////////////////////////////////////
  send(e) {
    e.preventDefault();
    console.log(e.target.value)
    socket.emit('createMessage', {
        from: 'userreactsaywahhhh',
        text: this.state.text
    }, function(){});
  }///////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  render(){
      return (
        <div>
          <form onSubmit={this.send.bind(this)}>
            <input type="text" onChange={this.onTextChange.bind(this)} placeholder="message"/>
            <button >Send chat</button>
          </form>
        </div>
      )
  }/////////////////////////////////////////////////////////////////////////////
};