import React from 'react';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

export class Chat extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      what: 'default'
    };
  }

  componentDidMount(){
    socket.on('connect', function(){
      console.log('connected to server from reaeaccct');
    });
  }

  ///////////////////////////roll///////////////////////////////////////
  send(e) {
    e.preventDefault();
    // let d20 = Math.floor(Math.random() * 20 + 1) + Number(this.state.modifier)
    // d20 < 1 ? d20 = 1 : d20 = d20
    console.log('hi')
  }///////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  render(){
      return (
        <div>
          <form onSubmit={this.send.bind(this)}>
            <input type="text" placeholder="message"/>
            <button >Send chat</button>
          </form>
        </div>
      )
  }/////////////////////////////////////////////////////////////////////////////
};